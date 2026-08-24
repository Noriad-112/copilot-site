import type { MetadataRoute } from "next";

import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/meta.json", "/feed.json"],
    },
    sitemap: `${site.siteUrl}/sitemap.xml`,
  };
}
