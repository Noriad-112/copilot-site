import type { Metadata } from "next";

import { site } from "@/content/site";
import type { Lang as Language } from "@/content/i18n";

export function buildMetadata({
  lang,
  title,
  description,
  path,
}: {
  lang: Language;
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = new URL(path, site.baseUrl).toString();
  const locale = lang === "nl" ? "nl_NL" : "en_US";

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type: "website",
      locale,
      images: [
        {
          url: site.ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [site.ogImage],
    },
  };
}
