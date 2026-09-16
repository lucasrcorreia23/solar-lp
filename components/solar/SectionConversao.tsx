import { Cta } from "@/components/ui/Cta";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SOLAR } from "@/content/solar";

export function SectionConversao() {
  const { eyebrow, titulo, apoio, cta } = SOLAR.conversao;
  return (
    <section
      id="contato"
      data-choreo="conversao"
      className="scroll-mt-24 border-t border-border px-6 py-section-sm md:px-10 md:py-section"
    >
      <div className="mx-auto max-w-[90rem]">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-6 max-w-[16ch] text-display leading-display-wrap">
          {titulo}
        </h2>
        <p className="mt-6 max-w-xl">{apoio}</p>
        <div className="mt-12">
          <Cta href={cta.href}>{cta.label}</Cta>
        </div>
      </div>
    </section>
  );
}
