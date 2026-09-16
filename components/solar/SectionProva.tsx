import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SITE } from "@/content/site";
import { SOLAR, type CaseCard } from "@/content/solar";

const SIZES_FEATURED = "100vw";
const SIZES_GRID =
  "(min-width: 1520px) 700px, (min-width: 768px) 45vw, 100vw";

function CaseLink({
  caso,
  featured = false,
  bleed = false,
  sizes,
}: {
  caso: CaseCard;
  featured?: boolean;
  bleed?: boolean;
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
        className={`relative overflow-hidden ${
          featured ? "aspect-[3/2]" : "aspect-[4/3]"
        } ${bleed ? "-mx-6 md:-mx-10" : ""}`}
      >
        <Image
          src={caso.capa.src}
          alt={caso.capa.alt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-slow ease-out-expo group-hover:scale-105"
        />
      </div>
      <div
        className={`mt-5 gap-x-8 gap-y-1 ${
          featured
            ? "flex flex-wrap items-baseline justify-between"
            : "flex flex-col"
        }`}
      >
        <h3 className="text-display-sm">
          <span aria-hidden="true" className="mr-3 font-mono text-utility text-heading">
            ({caso.numero})
          </span>
          {caso.cliente}
        </h3>
        <p className="font-mono text-utility uppercase text-fg">
          {caso.disciplinas.join(" · ")}
        </p>
      </div>
      <p className="mt-2 max-w-2xl">{caso.descricao}</p>
    </a>
  );
}

export function SectionProva() {
  const { eyebrow, titulo, cases } = SOLAR.prova;
  const [destaque, ...resto] = cases;

  return (
    <section
      id="cases"
      className="scroll-mt-24 px-6 py-section-sm md:px-10 md:py-section"
    >
      <div className="mx-auto max-w-[90rem]">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-6 max-w-[18ch] text-display leading-display-wrap">
          {titulo}
        </h2>

        <div className="mt-16 md:mt-20">
          <CaseLink
            caso={destaque}
            featured
            bleed
            sizes={SIZES_FEATURED}
          />
        </div>

        <div className="mt-14 grid gap-14 md:mt-20 md:grid-cols-2 md:gap-x-8 md:gap-y-20">
          {resto.map((caso) => (
            <CaseLink key={caso.slug} caso={caso} sizes={SIZES_GRID} />
          ))}
        </div>
      </div>
    </section>
  );
}
