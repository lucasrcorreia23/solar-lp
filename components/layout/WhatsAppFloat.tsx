"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IconeWhatsApp } from "@/components/ui/icons";
import { SITE } from "@/content/site";

export function WhatsAppFloat() {
  const pathname = usePathname();
  const [noContato, setNoContato] = useState(false);

  useEffect(() => {
    const secao = document.getElementById("contato");
    if (!secao) return;
    const obs = new IntersectionObserver(
      ([entrada]) => setNoContato(entrada.isIntersecting),
      { threshold: 0.15 },
    );
    obs.observe(secao);
    return () => {
      obs.disconnect();
      setNoContato(false);
    };
  }, [pathname]);

  return (
    <a
      href={SITE.whatsapp.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Conversar no WhatsApp: ${SITE.whatsapp.display}`}
      data-cursor="WhatsApp"
      tabIndex={noContato ? -1 : undefined}
      aria-hidden={noContato || undefined}
      style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}
      className={`fixed right-4 z-[70] flex h-13 w-13 items-center justify-center bg-heading text-reverse-heading shadow-[0_6px_20px_rgba(0,0,0,0.18)] transition-[opacity,transform,background-color] duration-base ease-out-expo hover:bg-accent md:hidden ${
        noContato
          ? "pointer-events-none translate-y-4 opacity-0"
          : "translate-y-0 opacity-100"
      }`}
    >
      <IconeWhatsApp className="h-6 w-6" />
    </a>
  );
}
