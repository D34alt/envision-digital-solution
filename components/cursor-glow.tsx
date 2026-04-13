"use client";

import { useEffect, useRef } from "react";

const FOLLOW_EASING = 0.14;

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const canAnimate = supportsHover.matches && !reducedMotion.matches;
    if (!canAnimate) return;

    let currentX = window.innerWidth / 2;
    let currentY = window.innerHeight / 2;
    let targetX = currentX;
    let targetY = currentY;
    let animationFrameId = 0;

    const updateGlow = () => {
      currentX += (targetX - currentX) * FOLLOW_EASING;
      currentY += (targetY - currentY) * FOLLOW_EASING;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

      animationFrameId = window.requestAnimationFrame(updateGlow);
    };

    const handlePointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    animationFrameId = window.requestAnimationFrame(updateGlow);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div className="cursor-glow-layer pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        ref={glowRef}
        aria-hidden
        className="absolute h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/25 blur-3xl"
        style={{ transform: "translate3d(50vw, 50vh, 0)" }}
      />
    </div>
  );
}
