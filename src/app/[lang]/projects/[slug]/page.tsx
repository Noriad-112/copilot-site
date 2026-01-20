import Link from "next/link";
import { notFound } from "next/navigation";

import { ecosystemItems } from "@/content/ecosystem";
import { i18n } from "@/content/i18n";
import { Badge } from "@/components/site/Badge";
import { PageHeader } from "@/components/site/PageHeader";
import { buildMetadata } from "@/lib/metadata";
import { getDictionary, isValidLanguage, languages, type Language } from "@/lib/i18n";

export async function generateStaticParams() {
  return languages.flatMap((lang) =>
    ecosystemItems.map((item) => ({ lang, slug: item.slug })),
  );
}

export function generateMetadata({
  params,
}: {
  params: { lang: string; slug: string };
}) {
  if (!isValidLanguage(params.lang)) {
    return {};
  }
  const item = ecosystemItems.find((entry) => entry.slug === params.slug);
  if (!item) {
    return {};
  }
  const lang = params.lang as Language;
  const label = item.labels[lang] ?? item.labels.en;
  const title = label?.name ?? item.slug;
  const description = label?.description ?? "";
  return buildMetadata({
    lang,
    title,
    description,
    path: `/${params.lang}/projects/${params.slug}`,
  });
}

export default function ProjectDetailPage({
  params,
}: {
  params: { lang: string; slug: string };
}) {
  if (!isValidLanguage(params.lang)) {
    notFound();
  }
  const lang = params.lang as Language;
  const dict = getDictionary(lang);
  const item = ecosystemItems.find((entry) => entry.slug === params.slug);
  if (!item) {
    notFound();
  }

  const label = item.labels[lang] ?? item.labels.en;
  const name = label?.name ?? item.slug;
  const description = label?.description ?? "";
  const kindLabel = i18n.kindLabels[lang][item.kind] ?? item.kind;
  const location = item.locations.join(" · ");

  return (
    <div className="space-y-10">
      <PageHeader title={name} subtitle={kindLabel} intro={description} />
      <div className="rounded-3xl border border-[color:var(--border-soft)] bg-[color:var(--surface)] p-8 sm:p-10">
        <div className="flex flex-wrap items-center gap-4">
          <Badge tone={item.status === "active" ? "accent" : "outline"}>
            {dict.status[item.status]}
          </Badge>
          <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
            {location}
          </span>
        </div>
        <p className="mt-6 text-sm leading-relaxed text-[color:var(--ink-soft)]">
          {lang === "nl"
            ? "Deze pagina is een generiek sjabloon. Voeg hier details, media en updates toe zodra ze beschikbaar zijn."
            : "This is a generic template. Add details, media, and updates here when they are ready."}
        </p>
        <div className="mt-6">
          <Link
            href={`/${lang}/projects`}
            className="text-sm text-[color:var(--accent)] transition hover:text-[color:var(--foreground)]"
          >
            {lang === "nl" ? "Terug naar projecten" : "Back to projects"}
          </Link>
        </div>
      </div>
    </div>
  );
}
