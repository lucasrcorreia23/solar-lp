import type { Metadata } from "next";
import { BlocoTese } from "@/components/ui/BlocoTese";
import { SectionHero } from "@/components/solar/SectionHero";
import { SectionPadrao } from "@/components/solar/SectionPadrao";
import { SectionDiagnostico } from "@/components/solar/SectionDiagnostico";
import { SectionProva } from "@/components/solar/SectionProva";
import { SectionOferta } from "@/components/solar/SectionOferta";
import { SectionMetodo } from "@/components/solar/SectionMetodo";
import { SectionConversao } from "@/components/solar/SectionConversao";
import { SolarChoreography } from "@/components/solar/SolarChoreography";
import { SOLAR } from "@/content/solar";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main id="conteudo" className="flex-1">
      <SectionHero />
      <SectionPadrao />
      <SectionDiagnostico />
      <SectionProva />
      <SectionOferta />
      <SectionMetodo />
      <BlocoTese>
        <h2
          data-manifesto
          className="max-w-[15ch] text-display-xl text-reverse-heading"
        >
          {SOLAR.tese.titulo}
        </h2>
        <div className="mt-12 grid gap-12 md:mt-20 lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-5">
            <p className="font-display text-display-sm font-semibold leading-[1.2] text-reverse-heading">
              {SOLAR.tese.desde}
            </p>
            <p className="mt-5 max-w-[44ch] text-partner-fg">{SOLAR.tese.copy}</p>
          </div>
          <ol className="border-t border-partner-line lg:col-span-6 lg:col-start-7">
            {SOLAR.tese.provas.map((prova, i) => (
              <li
                key={prova}
                className="flex items-baseline gap-5 border-b border-partner-line py-4 font-display text-lg font-semibold md:py-5 md:text-xl"
              >
                <span className="w-10 shrink-0 font-mono text-utility font-normal text-accent">
                  {String(i + 1).padStart(3, "0")}
                </span>
                {prova}
              </li>
            ))}
          </ol>
        </div>
      </BlocoTese>
      <SectionConversao />
      <SolarChoreography />
    </main>
  );
}
