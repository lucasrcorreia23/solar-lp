import { Cta } from "@/components/ui/Cta";
import { SITE } from "@/content/site";
import { SOLAR } from "@/content/solar";

export function SectionConversao() {
  const { titulo, apoio, cta } = SOLAR.conversao;
  const [negacao, afirmacao] = titulo.split(/(?<=\.)\s+/);
  return (
    <section
      id="contato"
      data-choreo="conversao"
      className="scroll-mt-24 px-6 py-section-sm md:px-10 md:py-section"
    >
      <div className="mx-auto grid max-w-[90rem] gap-10 md:gap-14 lg:grid-cols-12 lg:items-end lg:gap-x-8">
        <h2 className="text-display-xl lg:col-span-8">
          <span className="block">{negacao}</span>
          {afirmacao && <span className="block text-accent">{afirmacao}</span>}
        </h2>
        <div className="lg:col-span-4 lg:pb-3">
          <p className="max-w-[46ch]">{apoio}</p>
          <Cta href={cta.href} size="lg" className="mt-8 w-full">
            {cta.label}
          </Cta>
          <p className="mt-5 text-[0.9375rem] leading-relaxed">
            Prefere e-mail?{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="text-heading underline decoration-border underline-offset-4 transition-colors duration-fast hover:decoration-accent"
            >
              {SITE.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
