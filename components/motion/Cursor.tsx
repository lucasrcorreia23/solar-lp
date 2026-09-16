"use client";

import { useEffect, useRef } from "react";
import { getGsap } from "@/lib/motion/gsap";
import { useMotion } from "@/components/motion/MotionProvider";

export function Cursor() {
  const rootRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const { ready, reducedMotion } = useMotion();

  useEffect(() => {
    if (!ready || reducedMotion) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const root = rootRef.current;
    const label = labelRef.current;
    const mods = getGsap();
    if (!root || !label || !mods) return;

    const { gsap } = mods;
    gsap.set(root, { xPercent: -50, yPercent: -50, autoAlpha: 0 });
    const xTo = gsap.quickTo(root, "x", { duration: 0.35, ease: "power3.out" });
    const yTo = gsap.quickTo(root, "y", { duration: 0.35, ease: "power3.out" });
    let visible = false;

    const onMove = (e: PointerEvent) => {
      if (!visible) {
        visible = true;
        gsap.set(root, { x: e.clientX, y: e.clientY });
        gsap.to(root, { autoAlpha: 1, duration: 0.3 });
      }
      xTo(e.clientX);
      yTo(e.clientY);
    };
    const onOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      const labelled = target.closest<HTMLElement>("[data-cursor]");
      const native = target.closest("input, textarea, select, button, a");
      if (labelled?.dataset.cursor) {
        label.textContent = labelled.dataset.cursor;
        root.dataset.state = "label";
      } else if (native) {
        root.dataset.state = "hidden";
      } else {
        root.dataset.state = "idle";
      }
    };
    const onLeaveWindow = () => {
      visible = false;
      gsap.to(root, { autoAlpha: 0, duration: 0.3 });
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeaveWindow);
    return () => {
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.documentElement.removeEventListener(
        "pointerleave",
        onLeaveWindow,
      );
    };
  }, [ready, reducedMotion]);

  return (
    <div
      ref={rootRef}
      data-state="idle"
      aria-hidden="true"
      className="cursor-root pointer-events-none fixed left-0 top-0 z-[120] opacity-0"
    >
      <span className="cursor-dot" />
      <span ref={labelRef} className="cursor-label" />
    </div>
  );
}
