"use client";

import { useEffect, useRef } from "react";

// How far the glow leans toward the pointer, in pixels, at the edges of the
// viewport. Each blob scales this differently (see --glow-x in the stylesheet)
// so the gradient reshapes as it follows rather than sliding rigidly.
const RANGE_X = 190;
const RANGE_Y = 130;

// Fraction of the remaining distance covered each frame. Low enough that the
// glow trails the cursor and settles softly instead of snapping to it.
const EASING = 0.14;

// Below this, the glow has effectively arrived and the loop can stop until
// the pointer moves again — no idle animation frames.
const SETTLED = 0.0015;

// The hero's ambient gradient: three soft colour blobs that drift on their
// own timings via CSS, so the gradient visibly reshapes rather than sitting
// still, plus a gentle lean toward the pointer driven from here. Both are
// motion-sensitive — with reduced motion requested this attaches nothing.
export default function HeroGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let frame = 0;

    const draw = () => {
      element.style.setProperty("--glow-x", `${(currentX * RANGE_X).toFixed(2)}px`);
      element.style.setProperty("--glow-y", `${(currentY * RANGE_Y).toFixed(2)}px`);
    };

    const tick = () => {
      currentX += (targetX - currentX) * EASING;
      currentY += (targetY - currentY) * EASING;
      draw();
      if (
        Math.abs(targetX - currentX) < SETTLED &&
        Math.abs(targetY - currentY) < SETTLED
      ) {
        frame = 0;
        return;
      }
      frame = requestAnimationFrame(tick);
    };

    const handleMove = (event: PointerEvent) => {
      targetX = (event.clientX / window.innerWidth - 0.5) * 2;
      targetY = (event.clientY / window.innerHeight - 0.5) * 2;
      if (!frame) frame = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handleMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="disc-hero-glow" ref={ref} aria-hidden="true">
      <span className="disc-hero-blob-a" />
      <span className="disc-hero-blob-b" />
      <span className="disc-hero-blob-c" />
    </div>
  );
}
