import Image from "next/image";
import Link from "next/link";
import { SITE, isExternalHref } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[90rem] flex-col gap-12 px-6 pb-10 pt-16 md:px-10 md:pb-12 md:pt-20">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Image
              src="/brand/logo-dark.png"
              alt="Estúdio Nákama"
              width={124}
              height={40}
              className="h-8 w-auto"
            />
            <p className="mt-5">{SITE.tagline}</p>
          </div>

          <nav aria-label="Rodapé">
            <ul className="flex flex-col gap-3">
              {SITE.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-display text-utility uppercase text-heading transition-colors duration-fast hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex flex-col gap-3">
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="transition-colors duration-fast hover:text-heading"
              >
                {SITE.email}
              </a>
            </li>
            <li>
              <a
                href={SITE.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-fast hover:text-heading"
              >
                WhatsApp {SITE.whatsapp.display}
              </a>
            </li>
            {SITE.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-fast hover:text-heading"
                >
                  {social.label}
                </a>
              </li>
            ))}
            <li>
              {isExternalHref(SITE.politica) ? (
                <a
                  href={SITE.politica}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-fast hover:text-heading"
                >
                  Política de Privacidade
                </a>
              ) : (
                <Link
                  href={SITE.politica}
                  className="transition-colors duration-fast hover:text-heading"
                >
                  Política de Privacidade
                </Link>
              )}
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 border-t border-border pt-8 md:flex-row md:items-end md:justify-between">
          <p className="font-mono text-utility uppercase text-heading">
            {SITE.bordao}
          </p>
          <p className="text-sm">
            © {new Date().getFullYear()} {SITE.name} · {SITE.local}
          </p>
        </div>
      </div>
    </footer>
  );
}
