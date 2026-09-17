import type { ReactNode } from "react";

/**
 * O bloco invertido: exatamente um por página, sempre a tese.
 * Cor `bg-partner` (vinho da marca), não preto.
 */
export function BlocoTese({ children }: { children: ReactNode }) {
  return (
    <section className="bg-partner px-6 py-section-sm text-reverse-heading md:px-10 md:py-section">
      <div className="mx-auto max-w-[90rem]">{children}</div>
    </section>
  );
}
