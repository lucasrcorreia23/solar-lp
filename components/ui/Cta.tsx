"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useMagnetic } from "@/lib/hooks/useMagnetic";
import { IconeSeta, IconeSetaBaixo } from "@/components/ui/icons";
import { isExternalHref } from "@/content/site";

const PRIMARY =
  "group inline-flex items-center justify-center gap-3 bg-heading text-center font-display text-utility uppercase tracking-[0.1em] text-reverse-heading transition-colors duration-fast ease-out-expo hover:bg-accent hover:text-heading sm:tracking-[0.14em]";
const PRIMARY_SIZE = {
  md: "px-6 py-4 sm:px-7",
  lg: "px-6 py-5 sm:px-9 md:py-6",
} as const;
const SECONDARY_WRAP =
  "group inline-flex items-center gap-2 py-3 font-display text-utility uppercase text-heading";
const SECONDARY_LABEL =
  "underline decoration-border decoration-1 underline-offset-8 transition-colors duration-fast group-hover:decoration-accent";
const SETA =
  "h-4 w-4 transition-transform duration-fast ease-out-expo";

interface CtaProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: keyof typeof PRIMARY_SIZE;
  className?: string;
}

export function Cta({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: CtaProps) {
  const magneticRef = useMagnetic<HTMLAnchorElement>();
  const externo = isExternalHref(href);
  const seta = externo ? (
    <IconeSeta
      className={`${SETA} group-hover:-translate-y-0.5 group-hover:translate-x-0.5`}
    />
  ) : (
    <IconeSetaBaixo className={`${SETA} group-hover:translate-y-0.5`} />
  );

  if (variant === "secondary") {
    const inner = (
      <>
        <span className={`${SECONDARY_LABEL} whitespace-nowrap`}>{children}</span>
        {seta}
      </>
    );
    if (externo) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${SECONDARY_WRAP} ${className}`}
        >
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={`${SECONDARY_WRAP} ${className}`}>
        {inner}
      </Link>
    );
  }

  const classe = `${PRIMARY} ${PRIMARY_SIZE[size]} ${className}`;
  const inner = (
    <>
      <span className="text-balance">{children}</span>
      {seta}
    </>
  );

  if (externo) {
    return (
      <a
        ref={magneticRef}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classe}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link ref={magneticRef} href={href} className={classe}>
      {inner}
    </Link>
  );
}
