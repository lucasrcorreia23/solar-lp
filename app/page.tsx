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
          <p className="max-w-[56ch] text-partner-fg lg:col-span-5">
            {SOLAR.tese.copy}
          </p>
          <ul className="border-t border-partner-line lg:col-span-6 lg:col-start-7">
            {SOLAR.tese.provas.map((prova) => (
              <li
                key={prova}
                className="flex gap-4 border-b border-partner-line py-4 font-display text-lg font-semibold md:py-5 md:text-xl"
              >
                <span
                  aria-hidden="true"
                  className="mt-[0.75em] w-5 shrink-0 border-t border-accent"
                />
                {prova}
              </li>
            ))}
          </ul>
        </div>
      </BlocoTese>
      <SectionConversao />
      <SolarChoreography />
    </main>
  );
}
