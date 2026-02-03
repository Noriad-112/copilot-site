import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHeader } from "@/components/site/PageHeader";
import { Card } from "@/components/site/Card";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/content/site";
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
    title: dict.contactPage.title,
    description: dict.contactPage.intro,
    path: `/${lang}/contact`,
  });
}

export default async function ContactPage({
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
    <div className="space-y-12">
      <PageHeader title={dict.contactPage.title} intro={dict.contactPage.intro} />
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="space-y-4">
          <h2 className="text-xl font-semibold text-[color:var(--foreground)]">
            {dict.contactPage.collaborateTitle}
          </h2>
          <p className="text-sm leading-relaxed text-[color:var(--ink-soft)]">
            {dict.contactPage.collaborateBody}
          </p>
          <Link
            href={`mailto:${site.contactEmail}`}
            className="text-sm text-[color:var(--accent)] transition hover:text-[color:var(--foreground)]"
          >
            {site.contactEmail}
          </Link>
        </Card>
        <Card className="space-y-4">
          <h2 className="text-xl font-semibold text-[color:var(--foreground)]">
            {dict.contactPage.generalTitle}
          </h2>
          <p className="text-sm leading-relaxed text-[color:var(--ink-soft)]">
            {dict.contactPage.generalBody}
          </p>
          <Link
            href={`mailto:${site.contactEmail}`}
            className="text-sm text-[color:var(--accent)] transition hover:text-[color:var(--foreground)]"
          >
            {site.contactEmail}
          </Link>
        </Card>
      </div>
    </div>
  );
}
