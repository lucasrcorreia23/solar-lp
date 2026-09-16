import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-start gap-3 font-mono text-utility uppercase text-heading">
      <span aria-hidden="true" className="mt-[0.7em] h-px w-8 shrink-0 bg-accent" />
      {children}
    </p>
  );
}
