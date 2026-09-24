import Image from "next/image";
import { IconeSeta } from "@/components/ui/icons";
import { SITE } from "@/content/site";
import { SOLAR, type CaseCard } from "@/content/solar";

const SIZES_CAPA = "(min-width: 1520px) 830px, (min-width: 1024px) 57vw, 100vw";
const SIZES_DETALHE = "(min-width: 1024px) 20vw, (min-width: 640px) 60vw, 100vw";

/**
 * Um case por linha, cada um com o próprio visual: a capa (produto ou foto do
 * trabalho), um detalhe e o dado que resume o resultado. As linhas alternam o
 * lado da capa para a lista não virar uma pilha de parágrafos.
 */
function CaseLinha({ caso, invertido }: { caso: CaseCard; invertido: boolean }) {
  return (
    <a
      href={`${SITE.url}/projetos/${caso.slug}`}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor="Ver case"
      className="group grid gap-8 border-t border-border pt-8 md:pt-10 lg:grid-cols-12 lg:gap-x-8"
    >
      <div
        data-card-cover
        className={`relative aspect-[4/3] overflow-hidden bg-assistant lg:col-span-7 lg:row-start-1 ${
          invertido ? "lg:col-start-6" : ""
        }`}
      >
        <Image
          src={caso.capa.src}
          alt={caso.capa.alt}
          fill
          sizes={SIZES_CAPA}
          className="object-cover transition-transform duration-slow ease-out-expo group-hover:scale-[1.03]"
        />
      </div>

      <div
        className={`flex flex-col lg:col-span-5 lg:row-start-1 ${
          invertido ? "lg:col-start-1" : ""
        }`}
      >
        <p className="font-mono text-utility uppercase text-fg">
          {caso.numero}
          {caso.projeto && ` · ${caso.projeto}`}
        </p>
        <h3 className="mt-3 text-display-sm">
          {caso.cliente}
          <IconeSeta className="ml-[0.2em] inline-block h-[0.7em] w-[0.7em] align-[-0.02em] text-accent transition-transform duration-fast ease-out-expo group-hover:-translate-y-1 group-hover:translate-x-1" />
        </h3>
        <p className="mt-3 font-mono text-utility uppercase text-heading">
          {caso.disciplinas.join(" · ")}
        </p>
        <p className="mt-5 max-w-[52ch]">{caso.descricao}</p>

        <p className="relative mt-8 flex flex-wrap items-baseline gap-x-4 gap-y-1 border-t border-border pt-6">
          <span
            aria-hidden="true"
            className="absolute -top-px left-0 w-16 border-t border-accent"
          />
          <span className="font-display text-display-md font-semibold text-accent">
            {caso.dado.valor}
          </span>
          <span className="max-w-[32ch] text-heading">{caso.dado.texto}</span>
        </p>

        <div className="relative mt-8 aspect-[4/3] w-full overflow-hidden bg-assistant sm:w-3/5 lg:mt-auto">
          <Image
            src={caso.detalhe.src}
            alt={caso.detalhe.alt}
            fill
            sizes={SIZES_DETALHE}
            className="object-cover"
          />
        </div>
      </div>
    </a>
  );
}

export function SectionProva() {
  const { titulo, cases } = SOLAR.prova;

  return (
    <section
      id="cases"
      className="scroll-mt-24 px-6 py-section-sm md:px-10 md:py-section"
    >
      <div className="mx-auto max-w-[90rem]">
        <h2 className="max-w-[18ch] text-display leading-display-wrap">
          {titulo}
        </h2>

        <div className="mt-14 flex flex-col gap-16 md:mt-20 md:gap-24">
          {cases.map((caso, i) => (
            <CaseLinha key={caso.slug} caso={caso} invertido={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
