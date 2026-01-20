import Link from "next/link";
import { notFound } from "next/navigation";

import { ecosystemItems } from "@/content/ecosystem";
import { PageHeader } from "@/components/site/PageHeader";
import { i18n } from "@/content/i18n";
import { Card } from "@/components/site/Card";
import { Badge } from "@/components/site/Badge";
import { buildMetadata } from "@/lib/metadata";
import { getDictionary, isValidLanguage, type Language } from "@/lib/i18n";

export function generateMetadata({ params }: { params: { lang: string } }) {
  if (!isValidLanguage(params.lang)) {
    return {};
  }
  const dict = getDictionary(params.lang as Language);
  return buildMetadata({
    lang: params.lang as Language,
    title: dict.ecosystemPage.title,
    description: dict.ecosystemPage.intro,
    path: `/${params.lang}/ecosystem`,
  });
}

export default function EcosystemPage({ params }: { params: { lang: string } }) {
  if (!isValidLanguage(params.lang)) {
    notFound();
  }
  const lang = params.lang as Language;
  const dict = getDictionary(lang);

  return (
    <div className="space-y-12">
      <PageHeader title={dict.ecosystemPage.title} intro={dict.ecosystemPage.intro} />

      <div className="grid gap-6 md:grid-cols-2">
        {ecosystemItems.map((item) => {
          const label = item.labels[lang] ?? item.labels.en;
          const name = label?.name ?? item.slug;
          const description = label?.description ?? "";
          const location = item.locations.join(" · ");
          const kindLabel = i18n.kindLabels[lang][item.kind] ?? item.kind;
          return (
            <Card key={item.slug} className="flex h-full flex-col gap-4">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="text-xl font-semibold text-[color:var(--foreground)]">
                    {name}
                  </h2>
                  <p className="text-sm text-[color:var(--ink-soft)]">
                    {kindLabel}
                  </p>
                </div>
                <Badge tone={item.status === "active" ? "accent" : "outline"}>
                  {dict.status[item.status]}
                </Badge>
              </div>
              <p className="text-sm leading-relaxed text-[color:var(--ink-soft)]">
                {description}
              </p>
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
                <span>{location}</span>
                {item.externalUrl ? (
                  <Link
                    href={item.externalUrl}
                    className="text-[color:var(--accent)] transition hover:text-[color:var(--foreground)]"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {lang === "nl" ? "Bezoek" : "Visit"}
                  </Link>
                ) : null}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
