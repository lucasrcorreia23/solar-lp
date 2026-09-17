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
      className="w-auto object-contain opacity-75 [filter:brightness(0)]"
    />
  );
}

function Marcas({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-x-12 pr-12 md:gap-x-20 md:pr-20"
    >
      {SOLAR.logos.marcas.map((marca) => (
        <li key={marca.nome} className="flex shrink-0 items-center">
          <Logo marca={marca} />
        </li>
      ))}
    </ul>
  );
}

/** Faixa de clientes: fecha a primeira dobra do hero. */
export function SectionLogos() {
  return (
    <section
      aria-label="Clientes"
      data-hero-strip
      className="relative mx-auto w-full max-w-[90rem] border-t border-border py-6 md:py-8"
    >
      <span
        data-hero-rule
        aria-hidden="true"
        className="absolute -top-px left-0 w-16 origin-left border-t border-accent md:w-24"
      />
      <div className="flex flex-col gap-5 [--logo-h:1.625rem] md:flex-row md:items-center md:gap-12 md:[--logo-h:2rem]">
        <p className="shrink-0 font-mono text-utility uppercase text-fg">
          {SOLAR.logos.intro}
        </p>
        <div
          data-marquee-viewport
          className="min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_3rem,#000_calc(100%-3rem),transparent)]"
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
    </section>
  );
}
