import { ICONES } from "@/components/ui/icons";
import { SOLAR } from "@/content/solar";

export function SectionMetodo() {
  const { titulo, etapas } = SOLAR.metodo;
  return (
    <section className="px-6 py-section-sm md:px-10 md:py-section">
      <div className="mx-auto max-w-[90rem]">
        <h2 className="text-display leading-display-wrap">
          {titulo}
        </h2>

        <ol className="relative mt-14 grid gap-12 border-t border-border md:mt-20 md:grid-cols-3 md:gap-8">
          <span
            data-line
            aria-hidden="true"
            className="absolute -top-px left-0 w-full origin-left border-t border-accent"
          />
          {etapas.map((etapa) => {
            const Icone = ICONES[etapa.icone];
            return (
              <li key={etapa.numero} className="pt-8 md:pt-10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-utility text-heading">
                    {etapa.numero}
                  </span>
                  <Icone className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-8 text-display-sm md:mt-12">
                  {etapa.titulo}
                </h3>
                <p className="mt-4 max-w-[42ch]">{etapa.copy}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
