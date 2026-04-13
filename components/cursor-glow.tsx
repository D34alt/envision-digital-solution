"use client";

import { useEffect, useRef } from "react";

/* ================================================================
 *  Ferrofluid cursor glow
 *  - Core blob follows cursor with a bouncy spring
 *  - Fast movement bursts small particles outward
 *  - Particles drift back via near-field attraction and merge
 * =============================================================== */

/* ---------- tuning knobs ---------- */
const PARTICLE_POOL = 18;
const BURST_THRESHOLD = 16;
const BURST_SPEED_FACTOR = 0.24;
const PARTICLE_MIN_R = 10;
const PARTICLE_MAX_R = 30;
const PARTICLE_SPRING_FAR = 0.003;
const PARTICLE_SPRING_NEAR = 0.016;
const PARTICLE_NEAR_DIST = 140;
const PARTICLE_DAMPING = 0.975;
const PARTICLE_JITTER = 0.12;
const PARTICLE_MERGE_DIST = 40;

const CORE_STIFFNESS = 0.032;
const CORE_DAMPING = 0.14;
const CORE_RADIUS = 160;
const TRAIL_STIFFNESS = 0.012;
const TRAIL_DAMPING = 0.10;
const TRAIL_RADIUS = 120;

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

/* ---------- helpers ---------- */
function drawSoftCircle(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number,
  r: number,
  g: number,
  b: number,
  alpha: number,
) {
  const grad = ctx.createRadialGradient(x, y, 0, x, y, radius);
  grad.addColorStop(0, `rgba(${r},${g},${b},${alpha})`);
  grad.addColorStop(0.45, `rgba(${r},${g},${b},${alpha * 0.45})`);
  grad.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
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
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    /* Alias so TS narrows the type inside nested closures. */
    const c: CanvasRenderingContext2D = ctx;

    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      c.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    /* state */
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    let targetX = cx;
    let targetY = cy;
    let prevTargetX = cx;
    let prevTargetY = cy;

    const core: Spring = { x: cx, y: cy, vx: 0, vy: 0 };
    const trail: Spring = { x: cx, y: cy, vx: 0, vy: 0 };

    const pool: Droplet[] = Array.from({ length: PARTICLE_POOL }, () => ({
      x: cx, y: cy, vx: 0, vy: 0,
      r: 0, baseR: 0, alpha: 0, alive: false,
    }));
    let spawnIdx = 0;

    /* spawn helpers */
    function burst(count: number, fromX: number, fromY: number, speed: number) {
      for (let n = 0; n < count; n++) {
        const p = pool[spawnIdx];
        spawnIdx = (spawnIdx + 1) % PARTICLE_POOL;

        const angle = Math.random() * Math.PI * 2;
        const mag = (0.5 + Math.random() * 0.5) * speed * BURST_SPEED_FACTOR;

        p.x = fromX + (Math.random() - 0.5) * 16;
        p.y = fromY + (Math.random() - 0.5) * 16;
        p.vx = Math.cos(angle) * mag;
        p.vy = Math.sin(angle) * mag;
        p.baseR = PARTICLE_MIN_R + Math.random() * (PARTICLE_MAX_R - PARTICLE_MIN_R);
        p.r = p.baseR;
        p.alpha = 0.35 + Math.random() * 0.25;
        p.alive = true;
      }
    }

    /* main loop */
    let rafId = 0;

    function tick() {
      c.clearRect(0, 0, window.innerWidth, window.innerHeight);

      /* cursor delta */
      const cursorSpeed = Math.hypot(targetX - prevTargetX, targetY - prevTargetY);
      prevTargetX = targetX;
      prevTargetY = targetY;

      /* core spring (bouncy) */
      core.vx += CORE_STIFFNESS * (targetX - core.x) - CORE_DAMPING * core.vx;
      core.vy += CORE_STIFFNESS * (targetY - core.y) - CORE_DAMPING * core.vy;
      core.x += core.vx;
      core.y += core.vy;

      /* trailing blob */
      trail.vx += TRAIL_STIFFNESS * (targetX - trail.x) - TRAIL_DAMPING * trail.vx;
      trail.vy += TRAIL_STIFFNESS * (targetY - trail.y) - TRAIL_DAMPING * trail.vy;
      trail.x += trail.vx;
      trail.y += trail.vy;

      /* burst particles on fast movement */
      if (cursorSpeed > BURST_THRESHOLD) {
        const count = Math.min(Math.floor(cursorSpeed / 7), 5);
        burst(count, core.x, core.y, cursorSpeed);
      }

      /* update and draw particles */
      let aliveCount = 0;

      for (const p of pool) {
        if (!p.alive) continue;

        /* distance-dependent attraction -- stronger when close */
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

        /* organic jitter so return paths are not straight lines */
        p.vx += (Math.random() - 0.5) * PARTICLE_JITTER;
        p.vy += (Math.random() - 0.5) * PARTICLE_JITTER;

        p.vx *= PARTICLE_DAMPING;
        p.vy *= PARTICLE_DAMPING;
        p.x += p.vx;
        p.y += p.vy;

        /* merge: shrink and fade as it approaches the cursor */
        if (dist < PARTICLE_MERGE_DIST) {
          p.alpha *= 0.92;
          p.r *= 0.95;
        }

        /* natural fade */
        p.alpha *= 0.998;

        if (p.alpha < 0.015 || p.r < 2) {
          p.alive = false;
          continue;
        }

        aliveCount++;
        drawSoftCircle(c, p.x, p.y, p.r, 34, 211, 238, p.alpha);
      }

      /* draw core blobs -- shrink slightly when particles are scattered */
      const shrink = Math.max(1 - aliveCount * 0.012, 0.55);
      drawSoftCircle(c, trail.x, trail.y, TRAIL_RADIUS, 99, 102, 241, 0.10);
      drawSoftCircle(c, core.x, core.y, CORE_RADIUS * shrink, 34, 211, 238, 0.18);

      rafId = requestAnimationFrame(tick);
    }

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
