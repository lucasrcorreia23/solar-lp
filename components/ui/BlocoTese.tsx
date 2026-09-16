import type { ReactNode } from "react";

/**
 * O bloco invertido: exatamente um por página, sempre a tese.
 * Cor `bg-partner` (vinho da marca), não preto.
 */
export function BlocoTese({
  children,
  eyebrow,
}: {
  children: ReactNode;
  eyebrow?: string;
}) {
  return (
    <section className="bg-partner px-6 py-section-sm text-[#f9f9f9] md:px-10 md:py-section">
      <div className="mx-auto max-w-[90rem]">
        {eyebrow && (
          <p className="font-mono text-utility uppercase opacity-70">
            {eyebrow}
          </p>
        )}
        <div className={eyebrow ? "mt-10 md:mt-14" : ""}>{children}</div>
      </div>
    </section>
  );
}
