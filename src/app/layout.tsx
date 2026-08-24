import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/layout/SiteShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/lib/site";
import { createOrganizationJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: site.siteName,
  description: site.description,
  openGraph: {
    title: site.siteName,
    description: site.description,
    url: site.siteUrl,
    siteName: site.siteName,
    type: "website",
    images: [
      {
        url: site.ogImage,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SiteShell>{children}</SiteShell>
        <JsonLd data={createOrganizationJsonLd(site)} />
      </body>
    </html>
  );
}
