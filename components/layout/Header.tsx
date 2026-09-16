"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { SITE, isExternalHref } from "@/content/site";

const TOPO = 80;
const LIMIAR = 6;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [oculto, setOculto] = useState(false);
  const ultimoY = useRef(0);

  useEffect(() => {
    ultimoY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - ultimoY.current;
      setScrolled(y > 12);

      if (y <= TOPO) {
        setOculto(false);
      } else if (Math.abs(delta) > LIMIAR) {
        setOculto(delta > 0);
      }
      ultimoY.current = y;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const ctaClass =
    "hidden shrink-0 bg-heading px-4 py-2.5 font-display text-utility uppercase text-reverse-heading transition-colors duration-fast ease-out-expo hover:bg-accent hover:text-heading md:block";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[80] transition-[transform,background-color,border-color] duration-base ease-out-expo ${
        oculto ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolled
          ? "border-b border-border bg-bg/90 backdrop-blur-sm"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[90rem] items-center justify-between gap-x-8 px-6 py-4 md:px-10">
        <Link href="/" aria-label="Estúdio Nákama · Início" className="shrink-0">
          <Image
            src="/brand/logo-dark.png"
            alt="Estúdio Nákama"
            width={124}
            height={40}
            className="h-7 w-auto md:h-8"
            loading="eager"
          />
        </Link>

        <MobileMenu />

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex gap-8">
            {SITE.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-display text-utility uppercase text-heading transition-colors duration-fast hover:text-accent"
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
            className={ctaClass}
          >
            {SITE.cta.label}
          </a>
        ) : (
          <Link href={SITE.cta.href} className={ctaClass}>
            {SITE.cta.label}
          </Link>
        )}
      </div>
    </header>
  );
}
