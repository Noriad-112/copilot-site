import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

import type { Lang as Language } from "@/content/i18n";

export type JournalMeta = {
  title: string;
  slug: string;
  date: string;
  summary: string;
  tags?: string[];
};

export type JournalPost = {
  meta: JournalMeta;
  content: string;
};

const journalRoot = path.join(process.cwd(), "src", "content", "journal");

async function readPostFiles(lang: Language) {
  const dir = path.join(journalRoot, lang);
  const files = await fs.readdir(dir);
  return files.filter((file) => file.endsWith(".mdx"));
}

function parseJournalPost(raw: string): JournalPost {
  const parsed = matter(raw);
  const data = parsed.data as Partial<JournalMeta>;

  if (!data.title || !data.slug || !data.date || !data.summary) {
    throw new Error("Journal post is missing required frontmatter.");
  }

  return {
    meta: {
      title: data.title,
      slug: data.slug,
      date: data.date,
      summary: data.summary,
      tags: data.tags ?? [],
    },
    content: parsed.content.trim(),
  };
}

export async function getAllJournalPosts(lang: Language) {
  const files = await readPostFiles(lang);
  const posts = await Promise.all(
    files.map(async (file) => {
      const raw = await fs.readFile(path.join(journalRoot, lang, file), "utf8");
      return parseJournalPost(raw);
    }),
  );

  return posts
    .sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime())
    .map((post) => post.meta);
}

export async function getJournalPost(lang: Language, slug: string) {
  const files = await readPostFiles(lang);

  for (const file of files) {
    const raw = await fs.readFile(path.join(journalRoot, lang, file), "utf8");
    const post = parseJournalPost(raw);
    if (post.meta.slug === slug) {
      return post;
    }
  }

  return null;
}

export async function getJournalSlugs(lang: Language) {
  const posts = await getAllJournalPosts(lang);
  return posts.map((post) => post.slug);
}
