import { ICONES } from "@/components/ui/icons";
import { SOLAR } from "@/content/solar";

export function SectionPadrao() {
  const { titulo, dores } = SOLAR.padrao;
  return (
    <section
      data-choreo="padrao"
      className="px-6 py-section-sm md:px-10 md:py-section"
    >
      <div className="mx-auto grid max-w-[90rem] gap-12 md:gap-16 lg:grid-cols-12 lg:gap-x-8">
        <div className="lg:col-span-5">
          <h2 className="text-display-md lg:sticky lg:top-28 lg:max-w-[16ch]">
            {titulo}
          </h2>
        </div>

        <ul className="border-t border-border lg:col-span-7">
          {dores.map((dor) => {
            const Icone = ICONES[dor.icone];
            return (
              <li
                key={dor.titulo}
                className="grid gap-4 border-b border-border py-8 md:grid-cols-[10rem_1fr] md:gap-8 md:py-10 lg:grid-cols-1 lg:gap-4 xl:grid-cols-[10rem_1fr] xl:gap-8"
              >
                <p className="flex items-center gap-3 self-start font-mono text-utility uppercase text-fg md:pt-[0.65em] lg:pt-0 xl:pt-[0.65em]">
                  <Icone className="h-5 w-5 text-accent" />
                  {dor.titulo}
                </p>
                <p className="aspas-penduradas font-display text-display-sm font-semibold leading-[1.2] text-heading">
                  “{dor.copy}”
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
