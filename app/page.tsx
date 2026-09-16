import type { Metadata } from "next";
import { BlocoTese } from "@/components/ui/BlocoTese";
import { SectionHero } from "@/components/solar/SectionHero";
import { SectionLogos } from "@/components/solar/SectionLogos";
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
      <SectionLogos />
      <SectionPadrao />
      <SectionDiagnostico />
      <SectionProva />
      <SectionOferta />
      <SectionMetodo />
      <BlocoTese eyebrow={SOLAR.tese.eyebrow}>
        <p
          data-manifesto
          className="max-w-[22ch] font-display text-display font-semibold leading-display-wrap"
        >
          {SOLAR.tese.titulo}
        </p>
        <p className="mt-8 max-w-xl opacity-80">{SOLAR.tese.copy}</p>
        <ol className="mt-16 grid gap-6 md:mt-20 md:grid-cols-2 md:gap-x-10 md:gap-y-8">
          {SOLAR.tese.provas.map((prova, i) => (
            <li key={prova} className="flex gap-4">
              <span
                aria-hidden="true"
                className="font-mono text-utility tabular-nums opacity-70"
              >
                {String(i + 1).padStart(3, "0")}
              </span>
              <span className="font-mono text-utility uppercase opacity-90">
                {prova}
              </span>
            </li>
          ))}
        </ol>
      </BlocoTese>
      <SectionConversao />
      <SolarChoreography />
    </main>
  );
}
