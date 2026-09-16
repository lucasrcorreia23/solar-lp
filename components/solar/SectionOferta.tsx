import { Cta } from "@/components/ui/Cta";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SOLAR } from "@/content/solar";

export function SectionOferta() {
  const { eyebrow, titulo, rapida, sobMedida } = SOLAR.oferta;
  return (
    <section
      id="oferta"
      className="scroll-mt-24 px-6 py-section-sm md:px-10 md:py-section"
    >
      <div className="mx-auto max-w-[90rem]">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-6 max-w-[18ch] text-display leading-display-wrap">
          {titulo}
        </h2>

        <div className="mt-16 grid gap-14 border-t border-border md:mt-20 md:grid-cols-2 md:gap-20">
          <article className="pt-12 md:pt-16">
            <p className="font-mono text-utility uppercase text-fg">
              {rapida.kicker}
            </p>
            <h3 className="mt-5 text-display-sm">{rapida.titulo}</h3>
            <p className="mt-4 max-w-md">{rapida.copy}</p>
            <ul className="mt-8 space-y-3">
              {rapida.itens.map((item) => (
                <li key={item} className="flex gap-3 max-w-md">
                  <span aria-hidden="true" className="mt-[0.7em] h-px w-5 shrink-0 bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-10 max-w-md">{rapida.pergunta}</p>
            <div className="mt-6">
              <Cta href={rapida.cta.href}>{rapida.cta.label}</Cta>
            </div>
          </article>

          <article className="border-t border-border pt-12 md:border-t-0 md:border-l md:pl-20 md:pt-16">
            <p className="font-mono text-utility uppercase text-fg">
              {sobMedida.kicker}
            </p>
            <h3 className="mt-5 text-display-sm">{sobMedida.titulo}</h3>
            <p className="mt-4 max-w-md">{sobMedida.copy}</p>
            <ul className="mt-8 space-y-3">
              {sobMedida.itens.map((item) => (
                <li key={item} className="flex gap-3 max-w-md">
                  <span aria-hidden="true" className="mt-[0.7em] h-px w-5 shrink-0 bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-12">
              <Cta href={sobMedida.cta.href} variant="secondary">
                {sobMedida.cta.label}
              </Cta>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
