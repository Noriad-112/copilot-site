import { notFound } from "next/navigation";

import { PageHeader } from "@/components/site/PageHeader";
import { Card } from "@/components/site/Card";
import { buildMetadata } from "@/lib/metadata";
import { getDictionary, isValidLanguage, type Language } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLanguage(lang)) {
    return {};
  }
  const dict = getDictionary(lang as Language);
  return buildMetadata({
    lang: lang as Language,
    title: dict.missionPage.title,
    description: dict.missionPage.intro,
    path: `/${lang}/mission`,
  });
}

export default async function MissionPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLanguage(lang)) {
    notFound();
  }
  const currentLang = lang as Language;
  const dict = getDictionary(currentLang);

  return (
    <div className="space-y-16">
      <PageHeader
        title={dict.missionPage.title}
        intro={dict.missionPage.intro}
      />

      <section className="grid gap-6 md:grid-cols-3">
        {dict.missionPage.missionBlocks.map((block) => (
          <Card key={block.title} className="space-y-3">
            <h2 className="text-xl font-semibold text-[color:var(--foreground)]">
              {block.title}
            </h2>
            <p className="text-sm leading-relaxed text-[color:var(--ink-soft)]">
              {block.body}
            </p>
          </Card>
        ))}
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--foreground)]">
          {dict.missionPage.principlesTitle}
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {dict.missionPage.principles.map((item) => (
            <Card key={item.title} className="space-y-3">
              <h3 className="text-lg font-semibold text-[color:var(--foreground)]">
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
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">
            {dict.missionPage.foundationTitle}
          </h2>
          {dict.missionPage.foundationBody.map((paragraph) => (
            <p
              key={paragraph}
              className="text-sm leading-relaxed text-[color:var(--ink-soft)]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
}
