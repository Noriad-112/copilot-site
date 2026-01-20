import type { MetadataRoute } from "next";

import { site } from "@/content/site";
import { ecosystemItems } from "@/content/ecosystem";
import { languages } from "@/lib/i18n";
import { getJournalSlugs } from "@/lib/journal";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = site.baseUrl;
  const lastModified = new Date();

  const staticRoutes = ["", "/mission", "/ecosystem", "/projects", "/journal", "/contact"];

  const journalRoutes = await Promise.all(
    languages.map(async (lang) => {
      const slugs = await getJournalSlugs(lang);
      return slugs.map((slug) => `/${lang}/journal/${slug}`);
    }),
  );

  const projectRoutes = languages.flatMap((lang) =>
    ecosystemItems.map((item) => `/${lang}/projects/${item.slug}`),
  );

  const localizedStaticRoutes = languages.flatMap((lang) =>
    staticRoutes.map((route) => `/${lang}${route}`),
  );

  const routes = [
    ...localizedStaticRoutes,
    ...journalRoutes.flat(),
    ...projectRoutes,
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
  }));
}
