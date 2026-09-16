"use client";

import { useEffect } from "react";
import { useMotion } from "@/components/motion/MotionProvider";
import { getGsap } from "@/lib/motion/gsap";
import { STAGGER } from "@/lib/motion/constants";
import { EASE_GSAP } from "@/lib/motion/eases";

function abaixoDaDobra<T extends Element>(els: T[]): T[] {
  const limite = window.innerHeight * 0.9;
  return els.filter((el) => el.getBoundingClientRect().top > limite);
}

export function SolarChoreography() {
  const { ready, reducedMotion, lenis } = useMotion();

  useEffect(() => {
    if (!ready || reducedMotion) return;
    const mods = getGsap();
    if (!mods) return;
    const { gsap, ScrollTrigger, SplitText } = mods;

    const cleanups: Array<() => void> = [];
    const ctx = gsap.context(() => {
      const hero = document.querySelector<HTMLElement>("[data-choreo='hero']");
      const freshLoad = performance.now() < 2500 && window.scrollY < 80;
      if (hero && freshLoad) {
        const h1 = hero.querySelector("h1");
        const eyebrow = hero.querySelector("[data-hero-eyebrow]");
        const sub = hero.querySelectorAll("[data-hero-sub] > *");
        const strip = document.querySelector("[data-hero-strip]");
        if (h1) {
          const split = SplitText.create(h1, {
            type: "lines",
            mask: "lines",
            linesClass: "split-line",
          });
          cleanups.push(() => split.revert());
          gsap
            .timeline({ defaults: { ease: EASE_GSAP.outExpo } })
            .from(eyebrow, {
              clipPath: "inset(0% 100% 0% 0%)",
              duration: 0.7,
            })
            .from(
              split.lines,
              {
                yPercent: 120,
                duration: 0.9,
                stagger: STAGGER.base,
              },
              0.15,
            )
            .from(
              sub,
              {
                yPercent: 40,
                autoAlpha: 0,
                duration: 0.6,
                stagger: STAGGER.tight,
              },
              0.65,
            )
            .from(strip, { autoAlpha: 0, duration: 0.6 }, 0.9);
        }
      }

      const track = document.querySelector<HTMLElement>("[data-marquee-track]");
      if (track) {
        const tween = gsap.to(track, {
          xPercent: -50,
          ease: "none",
          duration: 28,
          repeat: -1,
        });

        let pausado = false;
        const viewport = document.querySelector<HTMLElement>(
          "[data-marquee-viewport]",
        );
        const podeHover = window.matchMedia(
          "(hover: hover) and (pointer: fine)",
        );
        if (viewport && podeHover.matches) {
          const onEnter = () => {
            pausado = true;
            gsap.to(tween, { timeScale: 0, duration: 0.4, overwrite: "auto" });
          };
          const onLeave = () => {
            pausado = false;
            gsap.to(tween, { timeScale: 1, duration: 0.4, overwrite: "auto" });
          };
          viewport.addEventListener("mouseenter", onEnter);
          viewport.addEventListener("mouseleave", onLeave);
          cleanups.push(() => {
            viewport.removeEventListener("mouseenter", onEnter);
            viewport.removeEventListener("mouseleave", onLeave);
          });
        }

        const onScroll = () => {
          if (!lenis || pausado) return;
          gsap.to(tween, {
            timeScale: 1 + Math.min(Math.abs(lenis.velocity) / 50, 2.5),
            duration: 0.4,
            overwrite: "auto",
          });
        };
        lenis?.on("scroll", onScroll);
        cleanups.push(() => lenis?.off("scroll", onScroll));
      }

      const dores = abaixoDaDobra(
        gsap.utils.toArray<HTMLElement>("[data-choreo='padrao'] ul > li"),
      );
      if (dores.length) {
        gsap.set(dores, { clipPath: "inset(0% 0% 100% 0%)" });
        ScrollTrigger.batch(dores, {
          start: "top 88%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 0.9,
              ease: EASE_GSAP.outExpo,
              stagger: STAGGER.tight,
            }),
        });
      }

      const manifesto = document.querySelector<HTMLElement>("[data-manifesto]");
      if (manifesto) {
        const textoIntegro = manifesto.textContent ?? "";
        const split = SplitText.create(manifesto, {
          type: "words",
          aria: "hidden",
        });
        const equivalente = document.createElement("span");
        equivalente.className = "sr-only";
        equivalente.textContent = textoIntegro;
        manifesto.insertAdjacentElement("afterend", equivalente);
        cleanups.push(() => {
          equivalente.remove();
          split.revert();
        });
        gsap.from(split.words, {
          opacity: 0.5,
          stagger: 0.04,
          ease: "none",
          scrollTrigger: {
            trigger: manifesto,
            start: "top 82%",
            end: "bottom 55%",
            scrub: true,
          },
        });
      }

      const covers = abaixoDaDobra(
        gsap.utils.toArray<HTMLElement>("[data-card-cover]"),
      );
      if (covers.length) {
        gsap.set(covers, { clipPath: "inset(0% 0% 100% 0%)" });
        ScrollTrigger.batch(covers, {
          start: "top 85%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 1,
              ease: EASE_GSAP.outExpo,
              stagger: STAGGER.base,
            }),
        });
      }

      const line = document.querySelector<HTMLElement>("[data-line]");
      if (line) {
        gsap.fromTo(
          line,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: line,
              start: "top 85%",
              end: "top 40%",
              scrub: true,
            },
          },
        );
      }

      const conv = document.querySelector<HTMLElement>(
        "[data-choreo='conversao']",
      );
      if (conv) {
        const title = conv.querySelector("h2");
        if (title) {
          const split = SplitText.create(title, {
            type: "lines",
            mask: "lines",
            linesClass: "split-line",
          });
          cleanups.push(() => split.revert());
          gsap.from(split.lines, {
            yPercent: 120,
            duration: 0.9,
            ease: EASE_GSAP.outExpo,
            stagger: STAGGER.base,
            scrollTrigger: { trigger: title, start: "top 82%", once: true },
          });
        }
      }
    });

    return () => {
      cleanups.forEach((off) => off());
      ctx.revert();
    };
  }, [ready, reducedMotion, lenis]);

  return null;
}
