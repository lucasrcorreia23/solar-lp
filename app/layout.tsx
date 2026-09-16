import type { Metadata, Viewport } from "next";
import { ViewTransition } from "react";
import { Analytics } from "@/components/analytics/Analytics";
import { Poppins, Roboto, Space_Mono } from "next/font/google";
import { JsonLd, organizationSchema, websiteSchema } from "@/lib/schema";
import { SITE } from "@/content/site";
import { compartilhamento } from "@/lib/seo";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { Cursor } from "@/components/motion/Cursor";
import { Grain } from "@/components/motion/Grain";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import "./globals.css";

const poppins = Poppins({
  weight: ["600"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
  preload: false,
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
  preload: false,
});

const TITULO = "Estúdio Nákama | Energia solar";
const DESCRICAO =
  "Estúdio de estratégia, design e tecnologia para o setor solar: marca, produto digital e automação. Cases com R4, PV Operation, Unifique Energia e Solan.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: TITULO,
  description: DESCRICAO,
  ...compartilhamento({ title: TITULO, description: DESCRICAO, path: "/" }),
};

export const viewport: Viewport = {
  themeColor: "#f9f9f9",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html
      lang="pt-BR"
      className={`${poppins.variable} ${roboto.variable} ${spaceMono.variable}`}
    >
      <body className="flex min-h-svh flex-col">
        <SkipLink />
        <MotionProvider>
          <Header />
          <ViewTransition default="page">{children}</ViewTransition>
          <Footer />
          <WhatsAppFloat />
          <Cursor />
          <Grain />
        </MotionProvider>
        <JsonLd data={[organizationSchema, websiteSchema]} />
        {gaId ? <Analytics gaId={gaId} /> : null}
      </body>
    </html>
  );
}
