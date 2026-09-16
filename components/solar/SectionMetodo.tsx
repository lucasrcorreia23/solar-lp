import { ICONES } from "@/components/ui/icons";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SOLAR } from "@/content/solar";

export function SectionMetodo() {
  const { eyebrow, titulo, etapas } = SOLAR.metodo;
  return (
    <section className="px-6 py-section-sm md:px-10 md:py-section">
      <div className="mx-auto max-w-[90rem]">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-6 text-display leading-display-wrap">{titulo}</h2>

        <ol className="relative mt-16 grid gap-12 md:mt-20 md:grid-cols-3 md:gap-8">
          <span
            data-line
            aria-hidden="true"
            className="absolute -top-px left-0 hidden h-px w-full origin-left bg-accent md:block"
          />
          {etapas.map((etapa) => {
            const Icone = ICONES[etapa.icone];
            return (
              <li key={etapa.numero} className="border-t border-border pt-6">
                <span className="font-mono text-utility text-heading">
                  ({etapa.numero})
                </span>
                <h3 className="mt-5 flex items-center gap-3 text-display-sm">
                  <Icone className="h-6 w-6 text-numeral" />
                  {etapa.titulo}
                </h3>
                <p className="mt-3 max-w-md">{etapa.copy}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
