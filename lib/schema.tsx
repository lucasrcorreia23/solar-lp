import { SITE } from "@/content/site";

export const ORG_ID = `${SITE.url}/#organizacao`;
const SITE_ID = `${SITE.url}/#site`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  name: SITE.name,
  url: SITE.url,
  email: SITE.email,
  description:
    "Estúdio de Estratégia, Design e Tecnologia. Resolvemos o que trava e construímos o que faz o negócio avançar.",
  slogan: SITE.bordao,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Biguaçu",
    addressRegion: "SC",
    addressCountry: "BR",
  },
  sameAs: SITE.socials.map((s) => s.href),
  knowsAbout: [
    "Estratégia de negócio",
    "Branding",
    "Design de produto digital",
    "UX/UI",
    "Automação",
    "Inteligência artificial aplicada",
    "Energia solar",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": SITE_ID,
  url: SITE.url,
  name: SITE.name,
  inLanguage: "pt-BR",
  publisher: { "@id": ORG_ID },
};

/** `<script type="application/ld+json">` com o payload já serializado. */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
