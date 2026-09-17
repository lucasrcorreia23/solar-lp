import type { ReactNode } from "react";
import { Cta } from "@/components/ui/Cta";
import { SOLAR } from "@/content/solar";

function Oferta({
  titulo,
  kicker,
  copy,
  itens,
  className = "",
  children,
}: {
  titulo: string;
  kicker: string;
  copy: string;
  itens: readonly string[];
  className?: string;
  children: ReactNode;
}) {
  return (
    <article
      className={`pt-10 md:pt-14 lg:row-span-5 lg:grid lg:grid-rows-subgrid ${className}`}
    >
      <h3 className="text-display-sm">{titulo}</h3>
      <p className="mt-4 font-mono text-utility uppercase text-heading">
        {kicker}
      </p>
      <p className="mt-6 max-w-[52ch]">{copy}</p>
      <ul className="mt-8 space-y-3 border-t border-border pt-8">
        {itens.map((item) => (
          <li key={item} className="flex max-w-[48ch] gap-4">
            <span
              aria-hidden="true"
              className="mt-[0.8em] w-5 shrink-0 border-t border-accent"
            />
            <span className="text-heading">{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-10 self-end md:mt-12">{children}</div>
    </article>
  );
}

export function SectionOferta() {
  const { titulo, rapida, sobMedida } = SOLAR.oferta;
  return (
    <section
      id="oferta"
      className="scroll-mt-24 px-6 py-section-sm md:px-10 md:py-section"
    >
      <div className="mx-auto max-w-[90rem]">
        <h2 className="max-w-[24ch] text-display-md">{titulo}</h2>

        <div className="mt-14 grid border-t border-heading md:mt-20 lg:grid-cols-2 lg:grid-rows-[repeat(4,auto)_1fr] lg:gap-x-20">
          <Oferta
            titulo={rapida.titulo}
            kicker={rapida.kicker}
            copy={rapida.copy}
            itens={rapida.itens}
          >
            <p className="mb-5">{rapida.pergunta}</p>
            <Cta href={rapida.cta.href} className="w-full sm:w-auto">
              {rapida.cta.label}
            </Cta>
          </Oferta>

          <Oferta
            titulo={sobMedida.titulo}
            kicker={sobMedida.kicker}
            copy={sobMedida.copy}
            itens={sobMedida.itens}
            className="mt-14 border-t border-border lg:mt-0 lg:border-t-0 lg:border-l lg:pl-20"
          >
            <Cta href={sobMedida.cta.href} variant="secondary">
              {sobMedida.cta.label}
            </Cta>
          </Oferta>
        </div>
      </div>
    </section>
  );
}
