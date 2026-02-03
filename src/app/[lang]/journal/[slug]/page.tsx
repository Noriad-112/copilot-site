import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";

import { PageHeader } from "@/components/site/PageHeader";
import { mdxComponents } from "@/components/site/MDXComponents";
import { buildMetadata } from "@/lib/metadata";
import { getJournalPost, getJournalSlugs } from "@/lib/journal";
import {
  getDictionary,
  isValidLanguage,
  languages,
  type Language,
} from "@/lib/i18n";

function formatDate(date: string, lang: Language) {
  return new Intl.DateTimeFormat(lang === "nl" ? "nl-NL" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

export async function generateStaticParams() {
  const params = await Promise.all(
    languages.map(async (lang) => {
      const slugs = await getJournalSlugs(lang);
      return slugs.map((slug) => ({ lang, slug }));
    }),
  );
  return params.flat();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isValidLanguage(lang)) {
    return {};
  }
  const post = await getJournalPost(lang as Language, slug);
  if (!post) {
    return {};
  }
  return buildMetadata({
    lang: lang as Language,
    title: post.meta.title,
    description: post.meta.summary,
    path: `/${lang}/journal/${slug}`,
  });
}

export default async function JournalPostPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isValidLanguage(lang)) {
    notFound();
  }
  const currentLang = lang as Language;
  const post = await getJournalPost(currentLang, slug);
  if (!post) {
    notFound();
  }
  const dict = getDictionary(currentLang);
  const { content } = await compileMDX({
    source: post.content,
    components: mdxComponents,
  });

  return (
    <div className="space-y-10">
      <PageHeader
        title={post.meta.title}
        subtitle={formatDate(post.meta.date, currentLang)}
        intro={post.meta.summary}
      />
      <article className="space-y-6">
        {content}
      </article>
      <Link
        href={`/${currentLang}/journal`}
        className="text-sm text-[color:var(--accent)] transition hover:text-[color:var(--foreground)]"
      >
        {dict.nav.journal}
      </Link>
    </div>
  );
}
