import { Cta } from "@/components/ui/Cta";
import { SectionLogos } from "@/components/solar/SectionLogos";
import { SOLAR } from "@/content/solar";

export function SectionHero() {
  const { headline, apoio, ctaPrimario, ctaSecundario } = SOLAR.abertura;
  return (
    <section
      data-choreo="hero"
      className="flex min-h-svh flex-col px-6 pt-28 md:px-10 md:pt-36"
    >
      <div className="mx-auto flex w-full max-w-[90rem] flex-1 flex-col justify-center pb-14 md:pb-20">
        <h1 className="text-display-xl">
          {headline.map((frase) => (
            <span key={frase} className="block">
              {frase}
            </span>
          ))}
        </h1>
        <div
          data-hero-sub
          className="mt-8 grid gap-8 md:mt-12 xl:grid-cols-12 xl:items-end xl:gap-x-8"
        >
          <p className="max-w-[48ch] xl:col-span-5">{apoio}</p>
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-x-8 xl:col-span-7 xl:justify-end">
            <Cta href={ctaPrimario.href} size="lg" className="w-full sm:w-auto">
              {ctaPrimario.label}
            </Cta>
            <Cta href={ctaSecundario.href} variant="secondary">
              {ctaSecundario.label}
            </Cta>
          </div>
        </div>
      </div>
      <SectionLogos />
    </section>
  );
}
