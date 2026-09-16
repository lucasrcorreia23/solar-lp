"use client";

import { useEffect, useRef, type RefObject } from "react";
import { getGsap } from "@/lib/motion/gsap";
import { useMotion } from "@/components/motion/MotionProvider";

/**
 * Hover magnético para CTAs/links. Só em (pointer: fine); no-op com
 * reduced-motion. `strength` é a fração do deslocamento do cursor aplicada.
 */
export function useMagnetic<T extends HTMLElement>(
  strength = 0.25,
): RefObject<T | null> {
  const ref = useRef<T>(null);
  const { ready, reducedMotion } = useMotion();

  useEffect(() => {
    if (!ready || reducedMotion) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const el = ref.current;
    const mods = getGsap();
    if (!el || !mods) return;

    const { gsap } = mods;
    const xTo = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3.out" });

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      xTo((e.clientX - (rect.left + rect.width / 2)) * strength);
      yTo((e.clientY - (rect.top + rect.height / 2)) * strength);
    };
    const onLeave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      gsap.set(el, { x: 0, y: 0 });
    };
  }, [ready, reducedMotion, strength]);

  return ref;
}
