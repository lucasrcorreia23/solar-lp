import type { Metadata } from "next";
import { SITE } from "@/content/site";

/**
 * Open Graph e Twitter de uma rota.
 *
 * A metadata do Next faz merge raso entre segmentos: um `openGraph` na página
 * substitui o do layout inteiro. Cada rota declara o seu via este helper.
 */
export function compartilhamento({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Pick<Metadata, "openGraph" | "twitter"> {
  return {
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: SITE.name,
      url: path,
      title,
      description,
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
