"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useMagnetic } from "@/lib/hooks/useMagnetic";
import { isExternalHref } from "@/content/site";

const PRIMARY =
  "inline-block bg-heading px-7 py-4 text-center font-display text-utility uppercase text-reverse-heading transition-colors duration-fast ease-out-expo hover:bg-accent hover:text-heading";
const SECONDARY_WRAP =
  "group inline-flex items-baseline gap-2 font-display text-utility uppercase text-heading";
const SECONDARY_LABEL =
  "underline decoration-border underline-offset-8 transition-colors duration-fast group-hover:decoration-accent";

interface CtaProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export function Cta({
  href,
  children,
  variant = "primary",
  className = "",
}: CtaProps) {
  const magneticRef = useMagnetic<HTMLAnchorElement>();
  const externo = isExternalHref(href);

  if (variant === "secondary") {
    const inner = (
      <>
        <span className={SECONDARY_LABEL}>{children}</span>
        <span aria-hidden="true">↗</span>
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

  if (externo) {
    return (
      <a
        ref={magneticRef}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${PRIMARY} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      ref={magneticRef}
      href={href}
      className={`${PRIMARY} ${className}`}
    >
      {children}
    </Link>
  );
}
