import Link from "next/link";

import type { Language } from "@/lib/i18n";
import { LanguageToggle } from "@/components/site/LanguageToggle";

export function SiteHeader({
  lang,
  labels,
}: {
  lang: Language;
  labels: {
    home: string;
    mission: string;
    ecosystem: string;
    projects: string;
    journal: string;
    contact: string;
  };
}) {
  const navItems = [
    { href: `/${lang}`, label: labels.home },
    { href: `/${lang}/mission`, label: labels.mission },
    { href: `/${lang}/ecosystem`, label: labels.ecosystem },
    { href: `/${lang}/projects`, label: labels.projects },
    { href: `/${lang}/journal`, label: labels.journal },
    { href: `/${lang}/contact`, label: labels.contact },
  ];

  return (
    <header className="border-b border-[color:var(--border-soft)] bg-[color:var(--surface)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center justify-between gap-4">
          <Link
            href={`/${lang}`}
            className="text-lg font-semibold tracking-wide text-[color:var(--foreground)]"
          >
            Roots & Remedies
          </Link>
          <div className="sm:hidden">
            <LanguageToggle current={lang} />
          </div>
        </div>
        <nav className="flex flex-wrap items-center gap-4 text-sm text-[color:var(--ink-soft)]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-[color:var(--foreground)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden sm:block">
          <LanguageToggle current={lang} />
        </div>
      </div>
    </header>
  );
}
