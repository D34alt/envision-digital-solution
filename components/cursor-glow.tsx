"use client";

import { useEffect, useRef } from "react";

/* ================================================================
 *  Geometric shape cursor glow -- Canvas 2D renderer
 *  - Cursor motion emits small nodes that drift outward
 *  - Each frame we wire the live nodes together using a
 *    proximity-based k-nearest graph; lines naturally form little
 *    triangles and quads, and break/reform as nodes drift apart
 *  - The moment the cursor goes idle, every node springs back to
 *    the cursor and fades out, so at rest nothing is rendered
 *  - Honours reduced-motion and coarse-pointer preferences
 * =============================================================== */

/* ---------- tuning knobs ---------- */
const POOL_SIZE = 64;

/* Spawning */
const SPAWN_SPEED_THRESHOLD = 0.6; // cursor px/frame before nodes start emitting
const SPAWN_VELOCITY_FACTOR = 0.18; // initial node speed = cursor speed * factor
const SPAWN_SPREAD = 1.4; // radians of angular jitter around cursor direction
const SPAWN_RATE_PER_FRAME = 1; // hard cap on emissions per frame

/* Drift while the cursor is moving */
const NODE_DAMPING_MOVING = 0.97; // very loose -- nodes keep gliding
const NODE_FADE_MOVING = 0.997; // barely ages while you're moving

/* Float + fade once the cursor is idle. No spring -- nodes keep their
 * momentum, slow naturally, and dissolve in place. */
const IDLE_SPEED_THRESHOLD = 0.5;
const NODE_DAMPING_IDLE = 0.97; // loose so the wander force can drift them
const IDLE_FADE = 0.992; // ~5-6s to fade fully -- they linger

/* Per-frame random impulse on each node. Combined with loose damping
 * this gives a soft Brownian wander so the field never looks frozen. */
const WANDER_FORCE = 0.06;

/* Visuals */
const NODE_MIN_R = 1.4;
const NODE_MAX_R = 3.4;

const LINK_MAX_DIST = 130; // edges only exist when nodes are within this range
const LINK_NEIGHBOURS = 2; // each node tries to keep this many nearest links

const COLOUR_NODE_RGB = "186, 230, 253"; // sky-200
const COLOUR_LINK_RGB = "34, 211, 238"; // cyan-400
const LINK_MAX_ALPHA = 0.55;
const NODE_MAX_ALPHA = 0.95;

/* DPR cap. Keeps line crispness without overpaying on high-DPR phones. */
const MAX_DPR = 2;

/* ---------- types ---------- */
interface ShapeNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  alpha: number;
  alive: boolean;
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

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    /* ---------- canvas sizing ---------- */
    let appliedDpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);

    const resize = () => {
      appliedDpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.floor(w * appliedDpr);
      canvas.height = Math.floor(h * appliedDpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      // Draw in CSS pixels; the transform handles DPR scaling.
      ctx.setTransform(appliedDpr, 0, 0, appliedDpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    /* ---------- state ---------- */
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;

    let targetX = cx;
    let targetY = cy;
    let cursorX = cx;
    let cursorY = cy;
    let prevCursorX = cx;
    let prevCursorY = cy;
    let firstMove = true;

    const pool: ShapeNode[] = Array.from({ length: POOL_SIZE }, () => ({
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      r: 0,
      alpha: 0,
      alive: false,
    }));
    let spawnIdx = 0;

    /* Pre-allocated buffers for the per-frame k-nearest pass to avoid
     * thrashing the GC. Layout: nearest[i*K + k] = node index. */
    const nearest = new Int16Array(POOL_SIZE * LINK_NEIGHBOURS);
    const nearestDist = new Float32Array(POOL_SIZE * LINK_NEIGHBOURS);

    /* Insert candidate j (at distance d) into i's sorted nearest list. */
    function insertNearest(i: number, j: number, d: number) {
      const base = i * LINK_NEIGHBOURS;
      for (let k = 0; k < LINK_NEIGHBOURS; k++) {
        if (d < nearestDist[base + k]) {
          for (let m = LINK_NEIGHBOURS - 1; m > k; m--) {
            nearestDist[base + m] = nearestDist[base + m - 1];
            nearest[base + m] = nearest[base + m - 1];
          }
          nearestDist[base + k] = d;
          nearest[base + k] = j;
          return;
        }
      }
    }

    function spawn(dirVx: number, dirVy: number, speed: number) {
      const dirX = dirVx / speed;
      const dirY = dirVy / speed;

      const p = pool[spawnIdx];
      spawnIdx = (spawnIdx + 1) % POOL_SIZE;

      // Rotate the cursor-direction vector by a random spread, so the
      // emitted node leaves at a slight angle to the cursor's motion.
      const angle = (Math.random() - 0.5) * SPAWN_SPREAD;
      const cs = Math.cos(angle);
      const sn = Math.sin(angle);
      const ux = dirX * cs - dirY * sn;
      const uy = dirX * sn + dirY * cs;
      const mag =
        (0.5 + Math.random() * 0.6) * speed * SPAWN_VELOCITY_FACTOR;

      p.x = cursorX + (Math.random() - 0.5) * 4;
      p.y = cursorY + (Math.random() - 0.5) * 4;
      p.vx = ux * mag;
      p.vy = uy * mag;
      p.r = NODE_MIN_R + Math.random() * (NODE_MAX_R - NODE_MIN_R);
      p.alpha = 1;
      p.alive = true;
    }

    /* ---------- main loop ---------- */
    let rafId = 0;

    const tick = () => {
      rafId = requestAnimationFrame(tick);

      // Smooth the cursor toward its target -- adds a touch of inertia
      // and avoids jitter from raw pointer samples.
      cursorX += (targetX - cursorX) * 0.25;
      cursorY += (targetY - cursorY) * 0.25;

      const cursorVx = cursorX - prevCursorX;
      const cursorVy = cursorY - prevCursorY;
      const cursorSpeed = Math.hypot(cursorVx, cursorVy);
      prevCursorX = cursorX;
      prevCursorY = cursorY;

      const idle = cursorSpeed < IDLE_SPEED_THRESHOLD;

      /* ---------- emission ---------- */
      if (!idle && cursorSpeed > SPAWN_SPEED_THRESHOLD) {
        const count = Math.min(
          Math.ceil(cursorSpeed / 5),
          SPAWN_RATE_PER_FRAME,
        );
        for (let i = 0; i < count; i++) {
          spawn(cursorVx, cursorVy, cursorSpeed);
        }
      }

      const w = window.innerWidth;
      const h = window.innerHeight;

      /* ---------- update nodes ---------- */
      let aliveCount = 0;
      for (const p of pool) {
        if (!p.alive) continue;

        // Soft random kick every frame -- with loose damping this
        // produces a gentle wander/float instead of a dead drift.
        p.vx += (Math.random() - 0.5) * WANDER_FORCE;
        p.vy += (Math.random() - 0.5) * WANDER_FORCE;

        if (idle) {
          // No spring -- the existing shapes just float on their
          // current momentum and dissolve in place.
          p.alpha *= IDLE_FADE;
          p.vx *= NODE_DAMPING_IDLE;
          p.vy *= NODE_DAMPING_IDLE;
        } else {
          p.alpha *= NODE_FADE_MOVING;
          p.vx *= NODE_DAMPING_MOVING;
          p.vy *= NODE_DAMPING_MOVING;
        }

        p.x += p.vx;
        p.y += p.vy;

        if (
          p.alpha < 0.01 ||
          p.x < -50 ||
          p.x > w + 50 ||
          p.y < -50 ||
          p.y > h + 50
        ) {
          p.alive = false;
          continue;
        }
        aliveCount++;
      }

      /* ---------- early-out: nothing to draw ---------- */
      if (aliveCount === 0) {
        ctx.clearRect(0, 0, w, h);
        return;
      }

      /* ---------- compute per-node k-nearest neighbours ---------- */
      for (let i = 0; i < POOL_SIZE * LINK_NEIGHBOURS; i++) {
        nearest[i] = -1;
        nearestDist[i] = Infinity;
      }

      for (let i = 0; i < POOL_SIZE; i++) {
        const a = pool[i];
        if (!a.alive) continue;
        for (let j = i + 1; j < POOL_SIZE; j++) {
          const b = pool[j];
          if (!b.alive) continue;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d > LINK_MAX_DIST) continue;
          // Symmetric: each side considers the other as a candidate.
          insertNearest(i, j, d);
          insertNearest(j, i, d);
        }
      }

      /* ---------- draw ---------- */
      ctx.clearRect(0, 0, w, h);

      // Edges first so node dots sit on top of their lines.
      ctx.lineWidth = 1;
      const drawn = new Set<number>();
      for (let i = 0; i < POOL_SIZE; i++) {
        const a = pool[i];
        if (!a.alive) continue;
        const base = i * LINK_NEIGHBOURS;
        for (let k = 0; k < LINK_NEIGHBOURS; k++) {
          const j = nearest[base + k];
          if (j < 0) continue;
          // Dedupe undirected edges.
          const key = i < j ? i * POOL_SIZE + j : j * POOL_SIZE + i;
          if (drawn.has(key)) continue;
          drawn.add(key);

          const b = pool[j];
          const d = nearestDist[base + k];
          const distAlpha = 1 - d / LINK_MAX_DIST;
          const alpha =
            distAlpha * Math.min(a.alpha, b.alpha) * LINK_MAX_ALPHA;
          if (alpha < 0.01) continue;
          ctx.strokeStyle = `rgba(${COLOUR_LINK_RGB}, ${alpha.toFixed(3)})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      // Nodes themselves -- small filled circles with per-node alpha.
      for (const p of pool) {
        if (!p.alive) continue;
        const a = p.alpha * NODE_MAX_ALPHA;
        if (a < 0.02) continue;
        ctx.fillStyle = `rgba(${COLOUR_NODE_RGB}, ${a.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const onMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      // Snap on the first real move so we do not record a phantom
      // sweep from the viewport centre to the cursor's first sample.
      if (firstMove) {
        cursorX = e.clientX;
        cursorY = e.clientY;
        prevCursorX = e.clientX;
        prevCursorY = e.clientY;
        firstMove = false;
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", resize);
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
