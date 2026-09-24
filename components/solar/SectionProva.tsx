import Image from "next/image";
import { IconeSeta } from "@/components/ui/icons";
import { SITE } from "@/content/site";
import { SOLAR, type CaseCard } from "@/content/solar";

const SIZES_DESTAQUE = "(min-width: 1520px) 830px, (min-width: 1024px) 57vw, 100vw";
const SIZES_PAR = "(min-width: 1520px) 700px, (min-width: 768px) 48vw, 100vw";
const SIZES_TRIO = "(min-width: 1520px) 460px, (min-width: 768px) 31vw, 100vw";

/**
 * Todo case tem a mesma anatomia, na ordem em que se lê: capa, cliente, o
 * resultado numa frase, o que foi feito e as disciplinas. O resultado abre
 * com o `valor` em destaque, sem virar um número solto competindo com o nome.
 */
function Dado({ dado, grande = false }: { dado: CaseCard["dado"]; grande?: boolean }) {
  return (
    <p
      className={`font-display font-semibold text-heading ${
        grande ? "text-display-sm leading-[1.2]" : "text-lg leading-snug md:text-xl"
      }`}
    >
      <span className="text-accent">{dado.valor}</span> {dado.texto}
    </p>
  );
}

function Titulo({ caso, grande = false }: { caso: CaseCard; grande?: boolean }) {
  return (
    <h3 className={grande ? "text-display-md" : "text-display-sm"}>
      {caso.cliente}
      <IconeSeta className="ml-[0.2em] inline-block h-[0.7em] w-[0.7em] align-[-0.02em] text-accent transition-transform duration-fast ease-out-expo group-hover:-translate-y-1 group-hover:translate-x-1" />
      {caso.projeto && (
        <span className="mt-1 block font-body text-body font-normal tracking-normal text-fg">
          {caso.projeto}
        </span>
      )}
    </h3>
  );
}

function Disciplinas({ caso }: { caso: CaseCard }) {
  return (
    <p className="font-mono text-utility uppercase text-fg">
      {caso.disciplinas.join(" · ")}
    </p>
  );
}

function Capa({
  caso,
  sizes,
  className,
}: {
  caso: CaseCard;
  sizes: string;
  className: string;
}) {
  return (
    <div
      data-card-cover
      className={`relative overflow-hidden bg-assistant ${className}`}
    >
      <Image
        src={caso.capa.src}
        alt={caso.capa.alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-slow ease-out-expo group-hover:scale-[1.03]"
      />
    </div>
  );
}

function linkDoCase(slug: string) {
  return {
    href: `${SITE.url}/projetos/${slug}`,
    target: "_blank",
    rel: "noopener noreferrer",
    "data-cursor": "Ver case",
  } as const;
}

/** R4 lidera: é o case que prova a oferta de entrada (o RGC). */
function CaseDestaque({ caso }: { caso: CaseCard }) {
  return (
    <a
      {...linkDoCase(caso.slug)}
      className="group grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-x-8"
    >
      <Capa
        caso={caso}
        sizes={SIZES_DESTAQUE}
        className="aspect-[4/3] lg:col-span-7"
      />
      <div className="flex flex-col gap-6 lg:col-span-5">
        <Titulo caso={caso} grande />
        <Dado dado={caso.dado} grande />
        <p className="max-w-[48ch]">{caso.descricao}</p>
        <Disciplinas caso={caso} />
      </div>
    </a>
  );
}

function CaseCartao({ caso, sizes }: { caso: CaseCard; sizes: string }) {
  return (
    <a {...linkDoCase(caso.slug)} className="group flex flex-col">
      <Capa caso={caso} sizes={sizes} className="aspect-[4/3]" />
      <div className="mt-6 flex flex-1 flex-col gap-4">
        <Titulo caso={caso} />
        <Dado dado={caso.dado} />
        <p className="max-w-[52ch]">{caso.descricao}</p>
        <div className="mt-auto pt-2">
          <Disciplinas caso={caso} />
        </div>
      </div>
    </a>
  );
}

export function SectionProva() {
  const { titulo, cases } = SOLAR.prova;
  const [destaque, ...resto] = cases;
  // PV Operation e WEG lado a lado: o SUN WEG nasceu dentro do trabalho com a PV.
  const par = resto.slice(0, 2);
  const trio = resto.slice(2);

  return (
    <section
      id="cases"
      className="scroll-mt-24 px-6 py-section-sm md:px-10 md:py-section"
    >
      <div className="mx-auto max-w-[90rem]">
        <h2 className="max-w-[18ch] text-display leading-display-wrap">
          {titulo}
        </h2>

        <div className="mt-14 border-t border-border pt-10 md:mt-20 md:pt-14">
          <CaseDestaque caso={destaque} />
        </div>

        <div className="mt-16 grid gap-14 border-t border-border pt-10 md:mt-24 md:grid-cols-2 md:gap-x-8 md:pt-14">
          {par.map((caso) => (
            <CaseCartao key={caso.slug} caso={caso} sizes={SIZES_PAR} />
          ))}
        </div>

        <div className="mt-16 grid gap-14 border-t border-border pt-10 md:mt-24 md:grid-cols-3 md:gap-x-8 md:pt-14">
          {trio.map((caso) => (
            <CaseCartao key={caso.slug} caso={caso} sizes={SIZES_TRIO} />
          ))}
        </div>
      </div>
    </section>
  );
}
