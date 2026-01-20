import Link from "next/link";
import { notFound } from "next/navigation";

import { ecosystemItems } from "@/content/ecosystem";
import { i18n } from "@/content/i18n";
import { PageHeader } from "@/components/site/PageHeader";
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
    title: dict.projectsPage.title,
    description: dict.projectsPage.intro,
    path: `/${params.lang}/projects`,
  });
}

export default function ProjectsPage({ params }: { params: { lang: string } }) {
  if (!isValidLanguage(params.lang)) {
    notFound();
  }
  const lang = params.lang as Language;
  const dict = getDictionary(lang);
  const featured = ecosystemItems.filter((item) => item.featured);

  return (
    <div className="space-y-16">
      <PageHeader title={dict.projectsPage.title} intro={dict.projectsPage.intro} />

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">
          {dict.projectsPage.featuredTitle}
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((item) => {
            const label = item.labels[lang] ?? item.labels.en;
            const name = label?.name ?? item.slug;
            const description = label?.description ?? "";
            return (
              <Card key={item.slug} className="flex h-full flex-col gap-4">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold text-[color:var(--foreground)]">
                    {name}
                  </h3>
                  <Badge tone={item.status === "active" ? "accent" : "outline"}>
                    {dict.status[item.status]}
                  </Badge>
                </div>
                <p className="text-sm leading-relaxed text-[color:var(--ink-soft)]">
                  {description}
                </p>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  {item.externalUrl ? (
                    <Link
                      href={item.externalUrl}
                      className="text-sm text-[color:var(--accent)] transition hover:text-[color:var(--foreground)]"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {lang === "nl" ? "Bezoek" : "Visit"}
                    </Link>
                  ) : (
                    <Link
                      href={`/${lang}/projects/${item.slug}`}
                      className="text-sm text-[color:var(--accent)] transition hover:text-[color:var(--foreground)]"
                    >
                      {lang === "nl" ? "Lees meer" : "Learn more"}
                    </Link>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">
          {dict.projectsPage.allTitle}
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {ecosystemItems.map((item) => {
            const label = item.labels[lang] ?? item.labels.en;
            const name = label?.name ?? item.slug;
            const kindLabel = i18n.kindLabels[lang][item.kind] ?? item.kind;
            return (
              <Card key={item.slug} className="flex h-full flex-col gap-3">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-[color:var(--foreground)]">
                    {name}
                  </h3>
                  <Badge tone={item.status === "active" ? "accent" : "outline"}>
                    {dict.status[item.status]}
                  </Badge>
                </div>
                <p className="text-sm text-[color:var(--ink-soft)]">
                  {kindLabel}
                </p>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}
