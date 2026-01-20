import Link from "next/link";
import { notFound } from "next/navigation";

import { ecosystemItems } from "@/content/ecosystem";
import { PageHeader } from "@/components/site/PageHeader";
import { Card } from "@/components/site/Card";
import { Badge } from "@/components/site/Badge";
import { i18n } from "@/content/i18n";
import { buildMetadata } from "@/lib/metadata";
import { getDictionary, isValidLanguage, type Language } from "@/lib/i18n";

const highlightSlugs = [
  "roots-and-remedies",
  "sauvage-space",
  "voedselbos-amsterdam",
  "copilot-ventures",
  "home-scale-energy-and-digital-autonomy",
  "land-lab-southern-europe",
  "hospitality-food-lab",
];

export function generateMetadata({ params }: { params: { lang: string } }) {
  if (!isValidLanguage(params.lang)) {
    return {};
  }
  const dict = getDictionary(params.lang as Language);
  return buildMetadata({
    lang: params.lang as Language,
    title: dict.siteTitle,
    description: dict.siteMetaDescription,
    path: `/${params.lang}`,
  });
}

export default function Home({ params }: { params: { lang: string } }) {
  if (!isValidLanguage(params.lang)) {
    notFound();
  }
  const lang = params.lang as Language;
  const dict = getDictionary(lang);
  const highlights = ecosystemItems.filter((item) =>
    highlightSlugs.includes(item.slug),
  );

  const kindLabels = i18n.kindLabels[lang];

  return (
    <div className="space-y-16">
      <section className="space-y-10">
        <PageHeader title={dict.hero.title} intro={dict.hero.intro} />
        <div className="max-w-3xl space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--ink-soft)]">
            {dict.hero.subtitle}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href={`/${lang}/contact`}
            className="rounded-full bg-[color:var(--accent)] px-5 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-[color:var(--foreground)]"
          >
            {dict.hero.primaryCta}
          </Link>
          <Link
            href={`/${lang}/journal`}
            className="rounded-full border border-[color:var(--border-soft)] px-5 py-2 text-sm font-medium text-[color:var(--foreground)] transition hover:border-[color:var(--foreground)]"
          >
            {dict.hero.secondaryCta}
          </Link>
        </div>
      </section>

      <section className="space-y-8">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--foreground)]">
            {dict.homeSections.ecosystemTitle}
          </h2>
          <p className="max-w-2xl text-base text-[color:var(--ink-soft)]">
            {dict.homeSections.ecosystemIntro}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {highlights.map((item) => {
            const label = item.labels[lang] ?? item.labels.en;
            const name = label?.name ?? item.slug;
            const description = label?.description ?? "";
            const kindLabel = kindLabels[item.kind] ?? item.kind;
            const location = item.locations.join(" · ");
            return (
              <Card
                key={item.slug}
                href={item.externalUrl}
                className="flex h-full flex-col gap-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-[color:var(--foreground)]">
                      {name}
                    </h3>
                    <p className="text-sm text-[color:var(--ink-soft)]">
                      {kindLabel}
                    </p>
                  </div>
                  <Badge
                    tone={item.status === "active" ? "accent" : "outline"}
                  >
                    {dict.status[item.status]}
                  </Badge>
                </div>
                <p className="text-sm leading-relaxed text-[color:var(--ink-soft)]">
                  {description}
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
                  {location}
                </p>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--foreground)]">
          {dict.homeSections.howWeWorkTitle}
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {dict.homeSections.howWeWorkItems.map((item) => (
            <Card key={item.title} className="space-y-3">
              <h3 className="text-xl font-semibold text-[color:var(--foreground)]">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-[color:var(--ink-soft)]">
                {item.body}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-[color:var(--border-soft)] bg-[color:var(--surface)] p-8 sm:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--foreground)]">
              {dict.hero.primaryCta}
            </h2>
            <p className="max-w-xl text-sm text-[color:var(--ink-soft)]">
              {lang === "nl"
                ? "We bouwen graag samen met mensen die wortels willen leggen en nieuwe economische vormen willen testen."
                : "We co-build with people ready to put down roots and test new economic forms."}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/${lang}/contact`}
              className="rounded-full bg-[color:var(--accent)] px-5 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-[color:var(--foreground)]"
            >
              {dict.hero.primaryCta}
            </Link>
            <Link
              href={`/${lang}/journal`}
              className="rounded-full border border-[color:var(--border-soft)] px-5 py-2 text-sm font-medium text-[color:var(--foreground)] transition hover:border-[color:var(--foreground)]"
            >
              {dict.hero.secondaryCta}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
