import { SOLAR } from "@/content/solar";

export function SectionDiagnostico() {
  const { titulo, paragrafos } = SOLAR.diagnostico;
  const [contexto, causa, resposta] = paragrafos;
  return (
    <section className="px-6 pb-section-sm md:px-10 md:pb-section">
      <div className="mx-auto grid max-w-[90rem] gap-y-10 md:gap-y-14 lg:grid-cols-12 lg:gap-x-8">
        <h2 className="text-display-md lg:col-span-10 lg:max-w-[30ch]">
          {titulo}
        </h2>
        <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:col-span-7 lg:col-start-6">
          <p>{contexto}</p>
          <p>{causa}</p>
        </div>
        <p className="relative border-t border-border pt-8 font-display text-display-sm font-semibold leading-[1.2] text-heading md:pt-10 lg:col-span-7 lg:col-start-6">
          <span
            aria-hidden="true"
            className="absolute -top-px left-0 w-16 border-t border-accent md:w-24"
          />
          {resposta}
        </p>
      </div>
    </section>
  );
}
