import type { Metadata } from "next";

import "./globals.css";
import { site } from "@/content/site";
import { dictionary } from "@/content/i18n";

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: {
    default: site.name,
    template: `%s — ${site.name}`,
  },
  description: dictionary.en.meta.description,
  openGraph: {
    title: site.name,
    description: dictionary.en.meta.description,
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
