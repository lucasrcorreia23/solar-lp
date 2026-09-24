"use client";

import { useEffect, useRef, useState } from "react";
import { useMotion } from "@/components/motion/MotionProvider";

/** 768px é o `md` do Tailwind: no celular vai a mesma peça em 540p. */
const fonte = (src: string, srcMobile?: string) =>
  srcMobile && window.matchMedia("(max-width: 767px)").matches ? srcMobile : src;

/**
 * Vídeo em loop por CIMA de um poster que já está no markup (porte enxuto do
 * `CoverVideo` do site institucional).
 *
 * Sem JS, em `prefers-reduced-motion` e em aparelho de tier baixo não monta
 * nada e o poster fica sozinho. O `<video>` só existe a até uma tela de
 * distância, toca em vista e pausa fora dela.
 *
 * O elemento observado é o PAI da capa: o `[data-card-cover]` começa com
 * `clip-path` fechado até o reveal da coreografia, e clip-path de ancestral
 * cega o IntersectionObserver.
 */
export function LoopVideo({
  src,
  srcMobile,
  poster,
}: {
  src: string;
  srcMobile?: string;
  poster: string;
}) {
  const { reducedMotion, deviceTier } = useMotion();
  const raiz = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [perto, setPerto] = useState(false);
  const [pronto, setPronto] = useState(false);
  const desligado = reducedMotion || deviceTier === "low";
  const alvo = () =>
    raiz.current?.closest("[data-card-cover]")?.parentElement ?? raiz.current;

  useEffect(() => {
    const el = alvo();
    if (desligado || !el) return;
    const obs = new IntersectionObserver(
      ([entrada]) => {
        setPerto(entrada.isIntersecting);
        if (!entrada.isIntersecting) setPronto(false);
      },
      { rootMargin: "100% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [desligado]);

  useEffect(() => {
    const el = alvo();
    const v = video.current;
    if (!perto || !el || !v) return;
    let emVista = false;
    const tentar = () => {
      if (emVista) v.play().then(() => setPronto(true), () => {});
    };
    const obs = new IntersectionObserver(
      ([entrada]) => {
        emVista = entrada.isIntersecting;
        if (emVista) tentar();
        else v.pause();
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    v.addEventListener("canplay", tentar);
    return () => {
      obs.disconnect();
      v.removeEventListener("canplay", tentar);
    };
  }, [perto]);

  if (desligado) return null;

  return (
    <div ref={raiz} aria-hidden="true" className="absolute inset-0">
      {perto && (
        <video
          ref={video}
          src={fonte(src, srcMobile)}
          poster={poster}
          muted
          loop
          playsInline
          preload="auto"
          className={`h-full w-full object-cover transition-opacity duration-slow ${
            pronto ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
}
