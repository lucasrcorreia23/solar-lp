import Image from "next/image";
import { IconeSeta } from "@/components/ui/icons";
import { SITE } from "@/content/site";
import { SOLAR, type CaseCard } from "@/content/solar";

const SIZES_FEATURED = "100vw";
const SIZES_GRID =
  "(min-width: 1520px) 460px, (min-width: 1024px) 31vw, 100vw";

function CaseLink({
  caso,
  featured = false,
  sizes,
}: {
  caso: CaseCard;
  featured?: boolean;
  sizes: string;
}) {
  return (
    <a
      href={`${SITE.url}/projetos/${caso.slug}`}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor="Ver case"
      className="group block"
    >
      <div
        data-card-cover
        className={`relative overflow-hidden bg-assistant ${
          featured ? "-mx-6 aspect-[4/3] md:-mx-10 md:aspect-[16/9]" : "aspect-[4/3]"
        }`}
      >
        <Image
          src={caso.capa.src}
          alt={caso.capa.alt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-slow ease-out-expo group-hover:scale-[1.03]"
        />
      </div>
      <div
        className={
          featured
            ? "mt-6 grid gap-4 md:mt-8 lg:grid-cols-12 lg:gap-x-8"
            : "mt-5"
        }
      >
        <div className={featured ? "lg:col-span-6" : undefined}>
          <h3 className={featured ? "text-display-md" : "text-display-sm"}>
            {caso.cliente}
            <IconeSeta className="ml-[0.2em] inline-block h-[0.7em] w-[0.7em] align-[-0.02em] text-accent transition-transform duration-fast ease-out-expo group-hover:-translate-y-1 group-hover:translate-x-1" />
          </h3>
          <p className="mt-3 font-mono text-utility uppercase text-fg">
            {caso.disciplinas.join(" · ")}
          </p>
        </div>
        <p
          className={
            featured
              ? "max-w-[62ch] lg:col-span-6 lg:col-start-7 lg:pt-2"
              : "mt-4 max-w-[52ch]"
          }
        >
          {caso.descricao}
        </p>
      </div>
    </a>
  );
}

export function SectionProva() {
  const { titulo, cases } = SOLAR.prova;
  const [destaque, ...resto] = cases;

  return (
    <section
      id="cases"
      className="scroll-mt-24 px-6 py-section-sm md:px-10 md:py-section"
    >
      <div className="mx-auto max-w-[90rem]">
        <h2 className="max-w-[18ch] text-display leading-display-wrap">
          {titulo}
        </h2>

        <div className="mt-14 md:mt-20">
          <CaseLink caso={destaque} featured sizes={SIZES_FEATURED} />
        </div>

        <div className="mt-16 grid gap-14 md:mt-24 lg:grid-cols-3 lg:gap-x-8">
          {resto.map((caso) => (
            <CaseLink key={caso.slug} caso={caso} sizes={SIZES_GRID} />
          ))}
        </div>
      </div>
    </section>
  );
}
