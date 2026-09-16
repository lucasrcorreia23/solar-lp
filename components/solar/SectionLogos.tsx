import Image from "next/image";
import { SOLAR, type ClientLogo } from "@/content/solar";

const BASE_H_VAR = "--logo-h";
const MAX_W = 14;
const REPETICOES_POR_METADE = 3;
const METADE = Array.from({ length: REPETICOES_POR_METADE });

function Logo({ marca }: { marca: ClientLogo }) {
  return (
    <Image
      src={marca.src}
      alt={marca.nome}
      width={marca.width}
      height={marca.height}
      sizes={`${MAX_W * 16}px`}
      style={{
        height: `calc(var(${BASE_H_VAR}) * ${marca.escala})`,
        maxWidth: `${MAX_W}rem`,
      }}
      className={`w-auto object-contain opacity-80 mix-blend-multiply ${
        marca.claro
          ? "[filter:invert(1)_grayscale(1)_contrast(1.08)]"
          : "[filter:grayscale(1)_contrast(1.08)]"
      }`}
    />
  );
}

function Marcas({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-x-12 pr-12 md:gap-x-16 md:pr-16"
    >
      {SOLAR.logos.marcas.map((marca) => (
        <li key={marca.nome} className="flex shrink-0 items-center">
          <Logo marca={marca} />
        </li>
      ))}
    </ul>
  );
}

export function SectionLogos() {
  return (
    <section aria-label="Clientes" className="px-6 md:px-10">
      <div
        data-hero-strip
        className="mx-auto w-full max-w-[90rem] border-t border-border py-7"
      >
        <div className="flex flex-col gap-5 [--logo-h:1.75rem] md:[--logo-h:2.25rem]">
          <p className="font-mono text-utility uppercase text-fg">
            {SOLAR.logos.intro}
          </p>
          <div
            data-marquee-viewport
            className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_2.5rem,#000_calc(100%-2.5rem),transparent)]"
          >
            <div data-marquee-track className="flex w-max">
              {METADE.map((_, i) => (
                <Marcas key={`a${i}`} hidden={i > 0} />
              ))}
              {METADE.map((_, i) => (
                <Marcas key={`b${i}`} hidden />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
