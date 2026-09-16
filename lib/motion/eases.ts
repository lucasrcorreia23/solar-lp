/**
 * Easings nomeados — espelham as vars CSS em `app/globals.css` (@theme).
 */
export const EASE_CSS = {
  outExpo: "cubic-bezier(0.16, 1, 0.3, 1)",
  inOutQuart: "cubic-bezier(0.76, 0, 0.24, 1)",
  nakama: "cubic-bezier(0.62, 0.05, 0.01, 0.99)",
} as const;

/** Curva para `CustomEase.create("nakama", ...)` — registrada no MotionProvider. */
export const NAKAMA_CUSTOM_EASE = "M0,0 C0.62,0.05 0.01,0.99 1,1";

/** Nomes de ease GSAP (disponíveis após o setup dinâmico do MotionProvider). */
export const EASE_GSAP = {
  outExpo: "expo.out",
  inOutQuart: "power3.inOut",
  nakama: "nakama",
} as const;
