"use client";

import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

/**
 * Google Analytics fora do caminho crítico.
 * Sem `NEXT_PUBLIC_GA_ID` o layout não monta este componente.
 */
export function Analytics({ gaId }: { gaId: string }) {
  const [montar, setMontar] = useState(false);

  useEffect(() => {
    if (montar) return;

    const ligar = () => setMontar(true);

    const eventos = ["pointerdown", "keydown", "scroll", "touchstart"] as const;
    for (const e of eventos) {
      addEventListener(e, ligar, { once: true, passive: true });
    }

    const temIdle = typeof window.requestIdleCallback === "function";
    const idle = temIdle
      ? window.requestIdleCallback(ligar, { timeout: 4000 })
      : window.setTimeout(ligar, 4000);

    return () => {
      for (const e of eventos) removeEventListener(e, ligar);
      if (temIdle) window.cancelIdleCallback(idle);
      else clearTimeout(idle);
    };
  }, [montar]);

  return montar ? <GoogleAnalytics gaId={gaId} /> : null;
}
