import type { MetadataRoute } from "next";

import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = site.siteUrl;
  const routes = [
    "",
    "/approach",
    "/ventures",
    "/services",
    "/about",
    "/contact",
    "/meta.json",
    "/feed.json",
  ];
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
  }));
}
