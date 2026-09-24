import Image from "next/image";
import type { ReactNode } from "react";
import { Cta } from "@/components/ui/Cta";
import { SOLAR } from "@/content/solar";

/**
 * Fatura lida → dados da usina → RGC calculado. Mockup ILUSTRATIVO, com
 * números fictícios, até existirem prints reais do relatório em produção.
 */
function ExemploRgc() {
  const { rotulo, etapas } = SOLAR.oferta.rapida.exemplo;
  return (
    <figure className="bg-assistant p-4 md:p-5">
      <figcaption className="font-mono text-utility uppercase text-fg">
        {rotulo}
      </figcaption>
      <ol className="mt-4 grid gap-2 sm:grid-cols-3">
        {etapas.map((etapa, i) => {
          const final = i === etapas.length - 1;
          return (
            <li
              key={etapa.titulo}
              className={`relative p-4 ${final ? "bg-heading text-reverse-heading" : "bg-bg"}`}
            >
              <p
                className={`font-mono text-utility uppercase ${final ? "text-accent" : "text-heading"}`}
              >
                <span aria-hidden="true">{i + 1} · </span>
                {etapa.titulo}
              </p>
              <dl className="mt-3 space-y-2 text-[0.8125rem] leading-snug">
                {etapa.linhas.map(([rotuloLinha, valor]) => (
                  <div key={rotuloLinha}>
                    <dt className={final ? "text-partner-fg" : "text-fg"}>
                      {rotuloLinha}
                    </dt>
                    <dd className="font-display font-semibold">{valor}</dd>
                  </div>
                ))}
              </dl>
            </li>
          );
        })}
      </ol>
    </figure>
  );
}

function Pessoa() {
  const { nome, papel, frase, foto } = SOLAR.oferta.sobMedida.pessoa;
  return (
    <figure className="flex items-center gap-5">
      <div className="relative size-20 shrink-0 overflow-hidden rounded-full bg-assistant md:size-24">
        <Image
          src={foto.src}
          alt={foto.alt}
          fill
          sizes="96px"
          className="object-cover"
        />
      </div>
      <figcaption>
        <p className="font-display font-semibold text-heading">{nome}</p>
        <p className="font-mono text-utility uppercase text-fg">{papel}</p>
        <p className="mt-2 max-w-[34ch] text-[0.9375rem] leading-snug">
          {frase}
        </p>
      </figcaption>
    </figure>
  );
}

function Oferta({
  titulo,
  kicker,
  copy,
  itens,
  visual,
  className = "",
  children,
}: {
  titulo: string;
  kicker: string;
  copy: string;
  itens: readonly string[];
  visual: ReactNode;
  className?: string;
  children: ReactNode;
}) {
  return (
    <article
      className={`pt-10 md:pt-14 lg:row-span-6 lg:grid lg:grid-rows-subgrid ${className}`}
    >
      <h3 className="text-display-sm">{titulo}</h3>
      <p className="mt-4 font-mono text-utility uppercase text-heading">
        {kicker}
      </p>
      <p className="mt-6 max-w-[52ch]">{copy}</p>
      <div className="mt-8">{visual}</div>
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

        <div className="mt-14 grid border-t border-heading md:mt-20 lg:grid-cols-2 lg:grid-rows-[repeat(5,auto)_1fr] lg:gap-x-20">
          <Oferta
            titulo={rapida.titulo}
            kicker={rapida.kicker}
            copy={rapida.copy}
            itens={rapida.itens}
            visual={<ExemploRgc />}
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
            visual={<Pessoa />}
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
