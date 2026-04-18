"use client";

import { useEffect, useRef } from "react";

/* ================================================================
 *  Ferrofluid cursor glow -- WebGL renderer
 *  - A small cohesive "core" blob follows the cursor with snappy,
 *    near-critically-damped spring physics (no bounciness, low lag)
 *  - A larger, slower "wake" blob drags behind, giving the metaball
 *    field a teardrop / ferrofluid-stretch silhouette during motion
 *  - Fast cursor motion sheds a few low-velocity droplets *behind*
 *    the cursor (in the wake direction) which then ooze back and
 *    re-merge via the metaball field
 *  - All blobs are summed in a single fragment shader as a
 *    metaball field (one fullscreen quad, one draw call)
 *  - Always renders at full quality; rAF naturally throttles to
 *    ~30fps under macOS Low Power Mode without our help, and the
 *    shader is cheap enough to fit comfortably in either budget
 * =============================================================== */

/* ---------- tuning knobs ---------- */
/* Particles */
const PARTICLE_POOL = 10;
const BURST_THRESHOLD = 22; // px/frame -- only sheds droplets on real motion
const BURST_SPEED_FACTOR = 0.08; // initial droplet speed scales gently with cursor speed
const BURST_WAKE_SPREAD = 0.55; // radians; angular jitter around the wake direction
const PARTICLE_MIN_R = 22;
const PARTICLE_MAX_R = 48;
const PARTICLE_SPRING_FAR = 0.0055;
const PARTICLE_SPRING_NEAR = 0.022;
const PARTICLE_NEAR_DIST = 170;
const PARTICLE_DAMPING = 0.92; // viscous -- droplets settle quickly
const PARTICLE_JITTER = 0.04; // subtle organic wobble
const PARTICLE_MERGE_DIST = 55;

/* Core blob (cursor-following) */
const CORE_STIFFNESS = 0.18;
const CORE_DAMPING = 0.62; // ~0.73 of critical -- snappy, minimal overshoot
const CORE_RADIUS = 90;

/* Wake blob (slower, larger; drags behind to form the teardrop) */
const TRAIL_STIFFNESS = 0.045;
const TRAIL_DAMPING = 0.42; // close to critically damped -- smooth, no bounce
const TRAIL_RADIUS = 130;

/* Per-blob colour intensity (fed into the shader as the .w channel).
 * Lower = more subtle. Field saturation is `1 - exp(-field)` in the
 * shader, so values < ~0.45 stay well under full opacity even when
 * blobs overlap. */
const CORE_INTENSITY = 0.30;
const TRAIL_INTENSITY = 0.14;
const PARTICLE_INTENSITY_SCALE = 0.55;

/* Reserved slots: 0 = core, 1 = wake, 2.. = particles. */
const MAX_BLOBS = PARTICLE_POOL + 2;

const CYAN: [number, number, number] = [34 / 255, 211 / 255, 238 / 255];
/* Wake uses a slightly cooler indigo so the trailing edge reads as the
 * deeper part of the same fluid rather than a separate blob. */
const INDIGO: [number, number, number] = [79 / 255, 110 / 255, 220 / 255];

/* ---------- types ---------- */
interface Droplet {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  baseR: number;
  alpha: number;
  alive: boolean;
}

interface Spring {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

/* DPR cap. 2 is a sweet spot for crispness vs fragment-shader cost on
 * Retina displays; 3x phone DPRs would otherwise quadruple the work. */
const MAX_DPR = 2;

/* ---------- shaders ---------- */
const VERT_SRC = `
attribute vec2 aPos;
void main() {
  gl_Position = vec4(aPos, 0.0, 1.0);
}
`;

const FRAG_SRC = `
precision mediump float;

#define MAX_BLOBS ${MAX_BLOBS}

uniform vec4 uBlobs[MAX_BLOBS];   // xy = position (px, top-left origin), z = radius (px), w = intensity
uniform vec3 uColors[MAX_BLOBS];  // linear-ish 0..1 rgb
uniform int  uBlobCount;
uniform vec2 uResolution;         // framebuffer size in pixels

void main() {
  // gl_FragCoord origin is bottom-left; our blob positions use top-left.
  vec2 frag = vec2(gl_FragCoord.x, uResolution.y - gl_FragCoord.y);

  float field = 0.0;
  vec3  colorAcc = vec3(0.0);

  for (int i = 0; i < MAX_BLOBS; i++) {
    if (i >= uBlobCount) break;
    vec4 b = uBlobs[i];
    if (b.w <= 0.0 || b.z <= 0.0) continue;
    vec2 d = frag - b.xy;
    float dist = length(d);
    if (dist >= b.z) continue;
    float t = 1.0 - dist / b.z;
    // smoothstep falloff (cubic) -- soft edges that still merge cleanly.
    float falloff = t * t * (3.0 - 2.0 * t);
    float contrib = b.w * falloff;
    field += contrib;
    colorAcc += uColors[i] * contrib;
  }

  if (field < 0.001) discard;

  vec3 finalColor = colorAcc / field;
  // Soft cap so heavily overlapping blobs don't punch out of the page.
  float alpha = 1.0 - exp(-field);
  // Premultiplied output.
  gl_FragColor = vec4(finalColor * alpha, alpha);
}
`;

/* ---------- WebGL helpers ---------- */
function compileShader(
  gl: WebGLRenderingContext,
  type: number,
  src: string,
): WebGLShader | null {
  const sh = gl.createShader(type);
  if (!sh) return null;
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    gl.deleteShader(sh);
    return null;
  }
  return sh;
}

function buildProgram(gl: WebGLRenderingContext): WebGLProgram | null {
  const vs = compileShader(gl, gl.VERTEX_SHADER, VERT_SRC);
  const fs = compileShader(gl, gl.FRAGMENT_SHADER, FRAG_SRC);
  if (!vs || !fs) return null;
  const prog = gl.createProgram();
  if (!prog) return null;
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
    gl.deleteProgram(prog);
    return null;
  }
  return prog;
}

export default function CursorGlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const hover = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!hover.matches || reduced.matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", {
      alpha: true,
      premultipliedAlpha: true,
      antialias: false,
      depth: false,
      stencil: false,
      preserveDrawingBuffer: false,
      powerPreference: "low-power",
    }) as WebGLRenderingContext | null;
    if (!gl) return;

    const program = buildProgram(gl);
    if (!program) return;

    /* ---------- canvas sizing ---------- */
    let appliedDpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);

    const resize = () => {
      appliedDpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      const w = Math.floor(window.innerWidth * appliedDpr);
      const h = Math.floor(window.innerHeight * appliedDpr);
      canvas.width = w;
      canvas.height = h;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      gl.viewport(0, 0, w, h);
    };
    resize();
    window.addEventListener("resize", resize);

    /* ---------- GL setup ---------- */
    gl.useProgram(program);
    gl.disable(gl.DEPTH_TEST);
    gl.enable(gl.BLEND);
    // Premultiplied source-over.
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.clearColor(0, 0, 0, 0);

    // Fullscreen quad (TRIANGLE_STRIP).
    const quadBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, quadBuf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW,
    );
    const aPosLoc = gl.getAttribLocation(program, "aPos");
    gl.enableVertexAttribArray(aPosLoc);
    gl.vertexAttribPointer(aPosLoc, 2, gl.FLOAT, false, 0, 0);

    const uBlobsLoc = gl.getUniformLocation(program, "uBlobs");
    const uColorsLoc = gl.getUniformLocation(program, "uColors");
    const uBlobCountLoc = gl.getUniformLocation(program, "uBlobCount");
    const uResolutionLoc = gl.getUniformLocation(program, "uResolution");

    const blobsBuf = new Float32Array(MAX_BLOBS * 4);
    const colorsBuf = new Float32Array(MAX_BLOBS * 3);

    /* ---------- state ---------- */
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    let targetX = cx;
    let targetY = cy;
    let prevTargetX = cx;
    let prevTargetY = cy;

    const core: Spring = { x: cx, y: cy, vx: 0, vy: 0 };
    const trail: Spring = { x: cx, y: cy, vx: 0, vy: 0 };

    const pool: Droplet[] = Array.from({ length: PARTICLE_POOL }, () => ({
      x: cx,
      y: cy,
      vx: 0,
      vy: 0,
      r: 0,
      baseR: 0,
      alpha: 0,
      alive: false,
    }));
    let spawnIdx = 0;

    /* ---------- spawn helpers ----------
     * Droplets are emitted *behind* the cursor (in the wake direction),
     * with a small angular spread and modest initial speed. They then
     * spring back toward the cursor and re-merge -- like a bead of
     * ferrofluid that briefly trails behind a moving magnet. */
    function burst(
      count: number,
      fromX: number,
      fromY: number,
      cursorVx: number,
      cursorVy: number,
      speed: number,
    ) {
      const inv = 1 / Math.max(speed, 0.0001);
      // Wake direction = opposite to cursor motion, normalised.
      const wakeX = -cursorVx * inv;
      const wakeY = -cursorVy * inv;

      for (let n = 0; n < count; n++) {
        const p = pool[spawnIdx];
        spawnIdx = (spawnIdx + 1) % PARTICLE_POOL;

        // Rotate the wake vector by a small random spread.
        const spread = (Math.random() - 0.5) * BURST_WAKE_SPREAD;
        const cs = Math.cos(spread);
        const sn = Math.sin(spread);
        const dirX = wakeX * cs - wakeY * sn;
        const dirY = wakeX * sn + wakeY * cs;

        const mag = (0.4 + Math.random() * 0.4) * speed * BURST_SPEED_FACTOR;

        p.x = fromX + (Math.random() - 0.5) * 6;
        p.y = fromY + (Math.random() - 0.5) * 6;
        p.vx = dirX * mag;
        p.vy = dirY * mag;
        p.baseR =
          PARTICLE_MIN_R + Math.random() * (PARTICLE_MAX_R - PARTICLE_MIN_R);
        p.r = p.baseR;
        p.alpha = 0.35 + Math.random() * 0.20;
        p.alive = true;
      }
    }

    /* ---------- main loop ---------- */
    let rafId = 0;

    const tick = () => {
      rafId = requestAnimationFrame(tick);

      /* cursor velocity (used both for wake direction and burst trigger) */
      const cursorVx = targetX - prevTargetX;
      const cursorVy = targetY - prevTargetY;
      const cursorSpeed = Math.hypot(cursorVx, cursorVy);
      prevTargetX = targetX;
      prevTargetY = targetY;

      /* core spring -- snappy, near-critically-damped */
      core.vx += CORE_STIFFNESS * (targetX - core.x) - CORE_DAMPING * core.vx;
      core.vy += CORE_STIFFNESS * (targetY - core.y) - CORE_DAMPING * core.vy;
      core.x += core.vx;
      core.y += core.vy;

      /* wake blob -- drags behind to form the teardrop silhouette */
      trail.vx +=
        TRAIL_STIFFNESS * (targetX - trail.x) - TRAIL_DAMPING * trail.vx;
      trail.vy +=
        TRAIL_STIFFNESS * (targetY - trail.y) - TRAIL_DAMPING * trail.vy;
      trail.x += trail.vx;
      trail.y += trail.vy;

      /* shed wake droplets on real motion -- max 2 per frame, spawned
       * from the wake position so they read as the trailing edge
       * pinching off, not as cursor-centred sparks. */
      if (cursorSpeed > BURST_THRESHOLD) {
        const count = Math.min(Math.floor(cursorSpeed / 22), 2);
        if (count > 0) {
          burst(count, trail.x, trail.y, cursorVx, cursorVy, cursorSpeed);
        }
      }

      /* update particles */
      let aliveCount = 0;
      for (const p of pool) {
        if (!p.alive) continue;

        const dx = targetX - p.x;
        const dy = targetY - p.y;
        const dist = Math.hypot(dx, dy);
        const spring =
          dist < PARTICLE_NEAR_DIST
            ? PARTICLE_SPRING_FAR +
              (PARTICLE_SPRING_NEAR - PARTICLE_SPRING_FAR) *
                (1 - dist / PARTICLE_NEAR_DIST)
            : PARTICLE_SPRING_FAR;

        p.vx += spring * dx;
        p.vy += spring * dy;

        p.vx += (Math.random() - 0.5) * PARTICLE_JITTER;
        p.vy += (Math.random() - 0.5) * PARTICLE_JITTER;

        p.vx *= PARTICLE_DAMPING;
        p.vy *= PARTICLE_DAMPING;
        p.x += p.vx;
        p.y += p.vy;

        if (dist < PARTICLE_MERGE_DIST) {
          p.alpha *= 0.92;
          p.r *= 0.95;
        }

        p.alpha *= 0.998;

        if (p.alpha < 0.015 || p.r < 2) {
          p.alive = false;
          continue;
        }
        aliveCount++;
      }

      /* ---------- pack blobs into uniform buffers ---------- */
      const dprLocal = appliedDpr;
      let slot = 0;

      // Slot 0: core (cyan). Shrinks slightly as particles scatter.
      const shrink = Math.max(1 - aliveCount * 0.012, 0.55);
      blobsBuf[0] = core.x * dprLocal;
      blobsBuf[1] = core.y * dprLocal;
      blobsBuf[2] = CORE_RADIUS * shrink * dprLocal;
      blobsBuf[3] = CORE_INTENSITY;
      colorsBuf[0] = CYAN[0];
      colorsBuf[1] = CYAN[1];
      colorsBuf[2] = CYAN[2];
      slot++;

      // Slot 1: wake (indigo, larger and softer; trails behind the core).
      blobsBuf[4] = trail.x * dprLocal;
      blobsBuf[5] = trail.y * dprLocal;
      blobsBuf[6] = TRAIL_RADIUS * dprLocal;
      blobsBuf[7] = TRAIL_INTENSITY;
      colorsBuf[3] = INDIGO[0];
      colorsBuf[4] = INDIGO[1];
      colorsBuf[5] = INDIGO[2];
      slot++;

      // Slots 2..N: live particles.
      for (const p of pool) {
        if (!p.alive) continue;
        const bi = slot * 4;
        const ci = slot * 3;
        blobsBuf[bi] = p.x * dprLocal;
        blobsBuf[bi + 1] = p.y * dprLocal;
        blobsBuf[bi + 2] = p.r * dprLocal;
        blobsBuf[bi + 3] = p.alpha * PARTICLE_INTENSITY_SCALE;
        colorsBuf[ci] = CYAN[0];
        colorsBuf[ci + 1] = CYAN[1];
        colorsBuf[ci + 2] = CYAN[2];
        slot++;
      }

      /* ---------- draw ---------- */
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform4fv(uBlobsLoc, blobsBuf);
      gl.uniform3fv(uColorsLoc, colorsBuf);
      gl.uniform1i(uBlobCountLoc, slot);
      gl.uniform2f(uResolutionLoc, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };

    const onMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", resize);
      gl.deleteBuffer(quadBuf);
      gl.deleteProgram(program);
    };
  }, []);

  return (
    <div className="cursor-glow-layer pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        aria-hidden
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}
