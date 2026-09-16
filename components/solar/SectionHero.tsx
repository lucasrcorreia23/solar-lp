import { Cta } from "@/components/ui/Cta";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SOLAR } from "@/content/solar";

export function SectionHero() {
  const { eyebrow, headline, apoio, ctaPrimario, ctaSecundario } =
    SOLAR.abertura;
  return (
    <section
      data-choreo="hero"
      className="flex min-h-svh flex-col justify-center px-6 pb-10 pt-24 md:px-10 md:pb-12 md:pt-32"
    >
      <div className="mx-auto w-full max-w-[90rem]">
        <div data-hero-eyebrow className="mb-6 md:mb-8">
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
        <h1 className="text-display-xl">
          {headline.map((frase) => (
            <span key={frase} className="block">
              {frase}
            </span>
          ))}
        </h1>
        <div
          data-hero-sub
          className="mt-6 flex flex-col gap-7 md:mt-8 md:flex-row md:items-end md:justify-between md:gap-8"
        >
          <p className="max-w-xl">{apoio}</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
            <Cta href={ctaPrimario.href}>{ctaPrimario.label}</Cta>
            <Cta href={ctaSecundario.href} variant="secondary">
              {ctaSecundario.label}
            </Cta>
          </div>
        </div>
      </div>
    </section>
  );
}
