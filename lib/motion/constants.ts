/** Staggers padrão: 0.06–0.12s. */
export const STAGGER = {
  tight: 0.06,
  base: 0.08,
  loose: 0.12,
} as const;

/** Durações em segundos (GSAP) — espelham --transition-duration-* do @theme. */
export const DURATION = {
  fast: 0.3,
  base: 0.6,
  slow: 1,
} as const;
