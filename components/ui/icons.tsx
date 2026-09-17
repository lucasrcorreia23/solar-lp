import type { ReactNode } from "react";

function Svg({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={`shrink-0 ${className}`}
    >
      {children}
    </svg>
  );
}

interface IconeProps {
  className?: string;
}

function IconeMarca({ className }: IconeProps) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3" />
    </Svg>
  );
}

function IconeVendas({ className }: IconeProps) {
  return (
    <Svg className={className}>
      <path d="M2.5 17.5 8.5 11.5l4 4 8.5-9" />
      <path d="M15.5 3h6v6" />
    </Svg>
  );
}

function IconeProduto({ className }: IconeProps) {
  return (
    <Svg className={className}>
      <rect x="2.75" y="2.75" width="8" height="8" rx="0.75" />
      <rect x="13.25" y="2.75" width="8" height="8" rx="0.75" />
      <rect x="2.75" y="13.25" width="8" height="8" rx="0.75" />
      <path d="M17.25 13.75v7M13.75 17.25h7" />
    </Svg>
  );
}

function IconeTecnologia({ className }: IconeProps) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="2.75" />
      <circle cx="4.5" cy="5.25" r="2" />
      <circle cx="19.5" cy="5.25" r="2" />
      <circle cx="12" cy="20.75" r="2" />
      <path d="M6.05 6.6 10 10.15M17.95 6.6 14 10.15M12 14.75v4" />
    </Svg>
  );
}

function IconeDirecao({ className }: IconeProps) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.9 8.1-2.4 5.4-5.4 2.4 2.4-5.4z" />
    </Svg>
  );
}

function IconeConstrucao({ className }: IconeProps) {
  return (
    <Svg className={className}>
      <path d="M3.25 20.75V8.4L12 3.25l8.75 5.15v12.35" />
      <path d="M2 20.75h20" />
      <path d="M9.25 20.75v-6.5h5.5v6.5" />
    </Svg>
  );
}

function IconeEvolucao({ className }: IconeProps) {
  return (
    <Svg className={className}>
      <path d="M20.75 12a8.75 8.75 0 1 1-2.98-6.58" />
      <path d="M20.75 3.5V9h-5.5" />
    </Svg>
  );
}

export function IconeMenu({ className }: IconeProps) {
  return (
    <Svg className={className}>
      <path d="M3 8.75h18M3 15.25h18" />
    </Svg>
  );
}

export function IconeFechar({ className }: IconeProps) {
  return (
    <Svg className={className}>
      <path d="m5.5 5.5 13 13M18.5 5.5l-13 13" />
    </Svg>
  );
}

export function IconeWhatsApp({ className }: IconeProps) {
  return (
    <Svg className={className}>
      <path d="M3.25 20.75l1.3-4.2A9 9 0 1 1 7.6 19.6z" />
      <path d="M9.1 7.9c.3-.2.7-.2.9.1l1 1.6c.2.3.1.7-.1.9l-.6.5c.5 1.1 1.4 2 2.5 2.5l.5-.6c.2-.3.6-.3.9-.1l1.6 1c.3.2.4.6.1.9l-.7.9c-.4.4-1 .6-1.6.4-2.4-.8-4.2-2.6-5-5-.2-.6 0-1.2.4-1.6z" />
    </Svg>
  );
}

/** Seta diagonal: link que sai da página ou leva adiante. */
export function IconeSeta({ className }: IconeProps) {
  return (
    <Svg className={className}>
      <path d="M7 17 17 7M8.5 7H17v8.5" />
    </Svg>
  );
}

/** Seta para baixo: âncora dentro da própria página. */
export function IconeSetaBaixo({ className }: IconeProps) {
  return (
    <Svg className={className}>
      <path d="M12 5v14M6.5 13.5 12 19l5.5-5.5" />
    </Svg>
  );
}

export type NomeIcone =
  | "marca"
  | "vendas"
  | "produto"
  | "tecnologia"
  | "direcao"
  | "construcao"
  | "evolucao";

export const ICONES: Record<
  NomeIcone,
  (props: IconeProps) => React.JSX.Element
> = {
  marca: IconeMarca,
  vendas: IconeVendas,
  produto: IconeProduto,
  tecnologia: IconeTecnologia,
  direcao: IconeDirecao,
  construcao: IconeConstrucao,
  evolucao: IconeEvolucao,
};
