"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useMotion } from "@/components/motion/MotionProvider";
import { IconeFechar, IconeMenu } from "@/components/ui/icons";
import { SITE, isExternalHref } from "@/content/site";

export function MobileMenu() {
  const [aberto, setAberto] = useState(false);
  const { lenis } = useMotion();
  const pathname = usePathname();
  const painelId = useId();
  const botao = useRef<HTMLButtonElement>(null);
  const painel = useRef<HTMLDivElement>(null);

  const fechar = useCallback(() => setAberto(false), []);

  useEffect(() => {
    if (!aberto) return;
    const raiz = document.documentElement;
    if (lenis) lenis.stop();
    else raiz.style.overflow = "hidden";
    return () => {
      if (lenis) lenis.start();
      else raiz.style.overflow = "";
    };
  }, [aberto, lenis]);

  useEffect(() => {
    if (!aberto) return;
    const alvo = painel.current;
    if (!alvo) return;

    const primeiro = alvo.querySelector<HTMLElement>("a, button");
    primeiro?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setAberto(false);
        botao.current?.focus();
        return;
      }
      if (e.key !== "Tab") return;
      const foco = [
        ...alvo.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
      ];
      if (botao.current) foco.push(botao.current);
      if (foco.length === 0) return;
      const inicio = foco[0];
      const fim = foco[foco.length - 1];
      if (e.shiftKey && document.activeElement === inicio) {
        e.preventDefault();
        fim.focus();
      } else if (!e.shiftKey && document.activeElement === fim) {
        e.preventDefault();
        inicio.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [aberto]);

  const [ultimoPath, setUltimoPath] = useState(pathname);
  if (pathname !== ultimoPath) {
    setUltimoPath(pathname);
    setAberto(false);
  }

  const ctaClass =
    "block bg-heading px-6 py-4 text-center font-display text-utility uppercase text-reverse-heading transition-colors duration-fast ease-out-expo hover:bg-accent hover:text-heading";

  return (
    <>
      <button
        ref={botao}
        type="button"
        onClick={() => setAberto((v) => !v)}
        aria-expanded={aberto}
        aria-controls={painelId}
        aria-label={aberto ? "Fechar menu" : "Abrir menu"}
        className="-m-2 p-2 text-heading transition-colors duration-fast hover:text-accent md:hidden"
      >
        {aberto ? (
          <IconeFechar className="h-6 w-6" />
        ) : (
          <IconeMenu className="h-6 w-6" />
        )}
      </button>

      {aberto &&
        createPortal(
          <div
            ref={painel}
            id={painelId}
            className="fixed inset-0 z-[79] flex flex-col justify-between bg-bg px-6 pb-12 pt-28 md:hidden"
          >
            <nav aria-label="Principal">
              <ul className="flex flex-col">
                {SITE.nav.map((item) => (
                  <li key={item.href} className="border-b border-border">
                    <Link
                      href={item.href}
                      onClick={fechar}
                      className="block py-5 font-display text-display-sm font-semibold text-heading transition-colors duration-fast hover:text-accent"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {isExternalHref(SITE.cta.href) ? (
              <a
                href={SITE.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={fechar}
                className={ctaClass}
              >
                {SITE.cta.label}
              </a>
            ) : (
              <Link href={SITE.cta.href} onClick={fechar} className={ctaClass}>
                {SITE.cta.label}
              </Link>
            )}
          </div>,
          document.body,
        )}
    </>
  );
}
