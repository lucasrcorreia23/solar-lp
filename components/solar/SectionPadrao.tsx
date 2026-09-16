import { ICONES } from "@/components/ui/icons";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SOLAR } from "@/content/solar";

export function SectionPadrao() {
  const { eyebrow, titulo, dores } = SOLAR.padrao;
  return (
    <section
      data-choreo="padrao"
      className="px-6 py-section-sm md:px-10 md:py-section"
    >
      <div className="mx-auto max-w-[90rem]">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-6 max-w-[18ch] text-display leading-display-wrap">
          {titulo}
        </h2>

        <ul className="mt-16 border-t border-border md:mt-20">
          {dores.map((dor) => {
            const Icone = ICONES[dor.icone];
            return (
              <li
                key={dor.titulo}
                className="group grid gap-3 border-b border-border py-8 md:grid-cols-2 md:gap-10 md:py-10"
              >
                <h3 className="flex items-center text-display-sm transition-transform duration-fast ease-out-expo md:group-hover:translate-x-2">
                  <Icone className="mr-4 h-6 w-6 text-numeral" />
                  <span
                    aria-hidden="true"
                    className="mr-0 h-px w-0 self-center bg-accent transition-all duration-fast ease-out-expo md:group-hover:mr-4 md:group-hover:w-8"
                  />
                  {dor.titulo}
                </h3>
                <p className="max-w-xl md:justify-self-end">{dor.copy}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
