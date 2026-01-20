import type { Metadata } from "next";

import "./globals.css";
import { site } from "@/content/site";
import { i18n } from "@/content/i18n";

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: {
    default: site.name,
    template: `%s — ${site.name}`,
  },
  description: i18n.en.siteMetaDescription,
  openGraph: {
    title: site.name,
    description: i18n.en.siteMetaDescription,
    url: site.baseUrl,
    siteName: site.name,
    type: "website",
    images: [{ url: site.ogImage }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
