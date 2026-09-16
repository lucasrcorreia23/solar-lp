import { NAKAMA_CUSTOM_EASE } from "./eases";

/**
 * Loader único e lazy do GSAP — mantém os ~50KB fora do chunk inicial.
 * Nunca importe "gsap" estaticamente em componentes; use loadGsap()/getGsap().
 */
export type GsapModules = {
  gsap: typeof import("gsap")["gsap"];
  ScrollTrigger: typeof import("gsap/ScrollTrigger")["ScrollTrigger"];
  SplitText: typeof import("gsap/SplitText")["SplitText"];
};

let promise: Promise<GsapModules> | null = null;
let modules: GsapModules | null = null;

export function loadGsap(): Promise<GsapModules> {
  promise ??= Promise.all([
    import("gsap"),
    import("gsap/ScrollTrigger"),
    import("gsap/SplitText"),
    import("gsap/CustomEase"),
  ]).then(([g, st, sp, ce]) => {
    const gsap = g.gsap;
    gsap.registerPlugin(st.ScrollTrigger, sp.SplitText, ce.CustomEase);
    ce.CustomEase.create("nakama", NAKAMA_CUSTOM_EASE);
    modules = { gsap, ScrollTrigger: st.ScrollTrigger, SplitText: sp.SplitText };
    return modules;
  });
  return promise;
}

/** Módulos já resolvidos (null antes de `ready` do MotionProvider). */
export function getGsap(): GsapModules | null {
  return modules;
}
