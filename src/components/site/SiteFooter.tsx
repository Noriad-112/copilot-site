import Link from "next/link";

import type { Language } from "@/lib/i18n";
import { i18n } from "@/content/i18n";
import { site } from "@/content/site";

export function SiteFooter({
  lang,
  labels,
}: {
  lang: Language;
  labels: {
    journal: string;
    contact: string;
  };
}) {
  const externalLinks = [
    {
      label: "Voedselbos Amsterdam",
      href: "https://www.voedselbos.amsterdam/",
    },
    {
      label: "Sauvage Space",
      href: null,
    },
    {
      label: "Copilot Ventures",
      href: null,
    },
  ];

  return (
    <footer className="border-t border-[color:var(--border-soft)] bg-[color:var(--surface)]">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-10 text-sm text-[color:var(--ink-soft)] md:grid-cols-[1.2fr_0.8fr_0.6fr]">
        <div className="space-y-2">
          <p className="text-sm font-medium text-[color:var(--foreground)]">
            {site.legalName}
          </p>
          <p className="max-w-md">{i18n[lang].siteTagline}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <Link
            href={`/${lang}/journal`}
            className="transition hover:text-[color:var(--foreground)]"
          >
            {labels.journal}
          </Link>
          <Link
            href={`/${lang}/contact`}
            className="transition hover:text-[color:var(--foreground)]"
          >
            {labels.contact}
          </Link>
          <a
            href={`mailto:${site.contactEmail}`}
            className="transition hover:text-[color:var(--foreground)]"
          >
            {site.contactEmail}
          </a>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
            {lang === "nl" ? "Externe links" : "External"}
          </p>
          {externalLinks.map((link) =>
            link.href ? (
              <a
                key={link.label}
                href={link.href}
                className="transition hover:text-[color:var(--foreground)]"
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ) : (
              <span key={link.label} className="text-[color:var(--ink-soft)]">
                {link.label}
              </span>
            ),
          )}
        </div>
      </div>
    </footer>
  );
}
