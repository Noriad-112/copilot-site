"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import { i18n } from "@/content/i18n";
import type { Language } from "@/lib/i18n";

export default function NotFound() {
  const params = useParams();
  const lang = (params?.lang as Language) ?? "en";
  const dict = i18n[lang] ?? i18n.en;

  return (
    <div className="space-y-4">
      <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--ink-soft)]">404</p>
      <h1 className="text-3xl font-semibold text-[color:var(--foreground)]">
        {lang === "nl" ? "Pagina niet gevonden" : "Page not found"}
      </h1>
      <Link
        href={`/${lang}`}
        className="text-sm text-[color:var(--accent)] transition hover:text-[color:var(--foreground)]"
      >
        {dict.nav.home}
      </Link>
    </div>
  );
}
