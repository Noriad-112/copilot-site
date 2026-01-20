"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { languages, type Language } from "@/lib/i18n";

export function LanguageToggle({ current }: { current: Language }) {
  const pathname = usePathname() || "";
  const segments = pathname.split("/").filter(Boolean);
  const activeLang = languages.includes(segments[0] as Language)
    ? (segments[0] as Language)
    : current;
  const rest = segments.slice(1).join("/");

  const buildTarget = (lang: Language) =>
    `/${lang}${rest ? `/${rest}` : ""}`;

  return (
    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[color:var(--ink-soft)]">
      {activeLang === "en" ? (
        <span className="text-[color:var(--foreground)]">EN</span>
      ) : (
        <Link
          href={buildTarget("en")}
          className="transition hover:text-[color:var(--foreground)]"
        >
          EN
        </Link>
      )}
      <span className="h-4 w-px bg-[color:var(--border-soft)]" />
      {activeLang === "nl" ? (
        <span className="text-[color:var(--foreground)]">NL</span>
      ) : (
        <Link
          href={buildTarget("nl")}
          className="transition hover:text-[color:var(--foreground)]"
        >
          NL
        </Link>
      )}
    </div>
  );
}
