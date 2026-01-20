import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHeader } from "@/components/site/PageHeader";
import { Card } from "@/components/site/Card";
import { buildMetadata } from "@/lib/metadata";
import { getAllJournalPosts } from "@/lib/journal";
import { getDictionary, isValidLanguage, type Language } from "@/lib/i18n";

function formatDate(date: string, lang: Language) {
  return new Intl.DateTimeFormat(lang === "nl" ? "nl-NL" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

export async function generateMetadata({ params }: { params: { lang: string } }) {
  if (!isValidLanguage(params.lang)) {
    return {};
  }
  const dict = getDictionary(params.lang as Language);
  return buildMetadata({
    lang: params.lang as Language,
    title: dict.journalPage.title,
    description: dict.journalPage.intro,
    path: `/${params.lang}/journal`,
  });
}

export default async function JournalPage({
  params,
}: {
  params: { lang: string };
}) {
  if (!isValidLanguage(params.lang)) {
    notFound();
  }
  const lang = params.lang as Language;
  const dict = getDictionary(lang);
  const posts = await getAllJournalPosts(lang);

  return (
    <div className="space-y-12">
      <PageHeader title={dict.journalPage.title} intro={dict.journalPage.intro} />

      <div className="grid gap-6">
        {posts.length === 0 ? (
          <p className="text-sm text-[color:var(--ink-soft)]">{dict.journalPage.empty}</p>
        ) : (
          posts.map((post) => (
            <Card key={post.slug} className="space-y-4">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
                  {formatDate(post.date, lang)}
                </p>
                <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">
                  <Link
                    href={`/${lang}/journal/${post.slug}`}
                    className="transition hover:text-[color:var(--accent)]"
                  >
                    {post.title}
                  </Link>
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-[color:var(--ink-soft)]">
                {post.summary}
              </p>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
