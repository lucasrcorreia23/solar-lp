import { Eyebrow } from "@/components/ui/Eyebrow";
import { SOLAR } from "@/content/solar";

export function SectionDiagnostico() {
  const { eyebrow, titulo, paragrafos } = SOLAR.diagnostico;
  return (
    <section className="px-6 pb-section-sm md:px-10 md:pb-section">
      <div className="mx-auto max-w-[90rem] border-t border-border pt-12 md:pt-16">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-6 max-w-[22ch] text-display leading-display-wrap">
          {titulo}
        </h2>
        <div className="mt-8 max-w-2xl space-y-6">
          {paragrafos.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
