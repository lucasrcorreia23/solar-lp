/** Dados institucionais — fonte única para nav, contato e redes. */
export const SITE = {
  name: "Estúdio Nákama",
  tagline: "O estúdio de estratégia, design e tecnologia do mercado solar.",
  bordao: "Da intenção à solução.",
  url: "https://www.estudionakama.com.br",
  email: "aderbal@estudionakama.com.br",
  local: "Biguaçu, SC, Brasil",
  whatsapp: {
    display: "48 99113-8593",
    link: "https://api.whatsapp.com/send/?phone=5548991138593",
  },
  nav: [
    { label: "Cases", href: "/#cases" },
    { label: "Oferta", href: "/#oferta" },
  ],
  cta: {
    label: "Falar no WhatsApp",
    href: "https://api.whatsapp.com/send/?phone=5548991138593",
  },
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/nakamaestudio/" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/est%C3%BAdio-n%C3%A1kama-branding-design/",
    },
  ],
  politica: "https://www.estudionakama.com.br/politica-de-privacidade",
} as const;

export function isExternalHref(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}
