"use client";

import type LenisType from "lenis";
import { usePathname } from "next/navigation";
import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { loadGsap } from "@/lib/motion/gsap";
import { usePrefersReducedMotion } from "@/lib/hooks/useReducedMotion";
import { SITE } from "@/content/site";

export type DeviceTier = "high" | "mid" | "low";

interface MotionContextValue {
  lenis: LenisType | null;
  reducedMotion: boolean;
  deviceTier: DeviceTier;
  ready: boolean;
}

const MotionContext = createContext<MotionContextValue>({
  lenis: null,
  reducedMotion: false,
  deviceTier: "mid",
  ready: false,
});

export function useMotion(): MotionContextValue {
  return useContext(MotionContext);
}

function detectTier(): DeviceTier {
  const override = new URLSearchParams(window.location.search).get("tier");
  if (override === "high" || override === "mid" || override === "low") {
    return override;
  }
  const cores = navigator.hardwareConcurrency ?? 4;
  const mem =
    (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 4;
  if (cores >= 8 && mem >= 8) return "high";
  if (cores >= 4) return "mid";
  return "low";
}

const CONSOLE_EGG = `%c仲間  NÁKAMA%c
${SITE.tagline}
${SITE.bordao}

Curtiu o site por dentro também? → ${SITE.email}`;

const noopSubscribe = () => () => {};

export function MotionProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reducedMotion = usePrefersReducedMotion();
  const [lenis, setLenis] = useState<LenisType | null>(null);
  const [ready, setReady] = useState(false);
  const deviceTier = useSyncExternalStore(
    noopSubscribe,
    detectTier,
    () => "mid" as DeviceTier,
  );

  useEffect(() => {
    console.log(
      CONSOLE_EGG,
      "font-size: 1.5em; font-weight: 700; color: #e34e35;",
      "",
    );
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    let cancelled = false;
    let instance: LenisType | undefined;
    const unsubscribers: Array<(() => void) | undefined> = [];

    (async () => {
      const [{ default: Lenis }, { default: Tempus }, { gsap, ScrollTrigger }] =
        await Promise.all([import("lenis"), import("tempus"), loadGsap()]);
      if (cancelled) return;

      gsap.ticker.lagSmoothing(0);
      gsap.ticker.remove(gsap.updateRoot);

      instance = new Lenis({ autoRaf: false, anchors: true });
      instance.on("scroll", ScrollTrigger.update);

      unsubscribers.push(
        Tempus.add((s) => instance!.raf(s.time), { label: "lenis", order: 0 }),
        Tempus.add((s) => gsap.updateRoot(s.time / 1000), {
          label: "gsap",
          order: 1,
        }),
      );
      Tempus.patch();

      setLenis(instance);
      setReady(true);
    })();

    return () => {
      cancelled = true;
      unsubscribers.forEach((off) => off?.());
      instance?.destroy();
      setLenis(null);
      setReady(false);
    };
  }, [reducedMotion]);

  useLayoutEffect(() => {
    if (window.location.hash) return;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true, force: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, lenis]);

  const value = useMemo(
    () => ({ lenis, reducedMotion, deviceTier, ready }),
    [lenis, reducedMotion, deviceTier, ready],
  );

  return (
    <MotionContext.Provider value={value}>{children}</MotionContext.Provider>
  );
}
