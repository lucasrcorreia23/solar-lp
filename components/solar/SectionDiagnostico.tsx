import Image from "next/image";
import { LoopVideo } from "@/components/ui/LoopVideo";
import { SOLAR } from "@/content/solar";

export function SectionDiagnostico() {
  const { titulo, apoio, animacoes } = SOLAR.diagnostico;
  return (
    <section className="px-6 pb-section-sm md:px-10 md:pb-section">
      <div className="mx-auto max-w-[90rem]">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-x-8">
          <h2 className="text-display-md lg:col-span-6 lg:max-w-[16ch]">
            {titulo}
          </h2>
          <p className="max-w-[48ch] lg:col-span-5 lg:col-start-8">{apoio}</p>
        </div>

        <ul className="mt-12 grid gap-8 md:mt-16 md:grid-cols-3 md:gap-6 lg:gap-8">
          {animacoes.map((a) => (
            <li key={a.cliente}>
              <div
                data-card-cover
                className="relative aspect-video overflow-hidden bg-assistant"
              >
                <Image
                  src={a.poster.src}
                  alt={a.poster.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
                <LoopVideo
                  src={a.src}
                  srcMobile={a.srcMobile}
                  poster={a.poster.src}
                />
              </div>
              <p className="mt-4 flex items-baseline justify-between gap-4 border-t border-border pt-4 font-mono text-utility uppercase">
                <span className="text-heading">{a.segmento}</span>
                <span className="text-fg">{a.cliente}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
