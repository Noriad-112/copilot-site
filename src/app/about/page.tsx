import type { Metadata } from "next";

import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/lib/site";
import { createPersonJsonLd, createWebPageJsonLd } from "@/lib/seo";

const pageTitle = "About — Copilot Ventures";
const pageDescription =
  "Copilot Ventures is led by Dorian Cole, advising alternative economy ventures in food, culture, and infrastructure.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${site.siteUrl}/about`,
  },
  alternates: {
    canonical: `${site.siteUrl}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={createWebPageJsonLd(site, {
          title: pageTitle,
          description: pageDescription,
          path: "/about",
        })}
      />
      <JsonLd
        data={createPersonJsonLd(site, {
          name: "Dorian Cole",
          description:
            "Founder of Copilot Ventures, advising alternative economy ventures in food, culture, and infrastructure.",
          jobTitle: "Founder, Copilot Ventures",
          path: "/about",
        })}
      />
      <Section size="loose" className="pt-12 sm:pt-16">
        <PageHeader
          eyebrow="About"
          title="Dorian Cole"
          titleClassName="text-lg sm:text-xl"
          description="Founder of Copilot Ventures. Builder of food, wine, and culture ventures. Student of alternative economics, governance, and ecology."
        />
      </Section>

      <Section size="loose">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4 text-base text-slate-600">
            <p>
              Dorian Cole is the founder of Copilot Ventures, an advisory
              studio for alternative economy ventures. Copilot grew out of two
              decades spent building practical businesses — and the desire to
              design structures that outlast hype cycles.
            </p>
            <p>
              With a background in socio-cultural anthropology (University of
              Virginia), Dorian has built ventures across the US and Europe. His
              work spans import/export, technical sales, architectural products,
              and hospitality.
            </p>
            <p>
              He completed the Lift Alternative Economy MBA and holacracy
              training, and serves as founder and treasurer of Roots & Remedies
              Stichting — a nonprofit foundation stewarding regenerative
              projects and shared intellectual property.
            </p>
          </div>
          <Card className="space-y-4">
            <h2 className="font-serif text-2xl text-slate-900">
              What this adds up to
            </h2>
            <p className="text-sm text-slate-600">
              Dorian moves between contracts, kitchens, and community spaces. He
              speaks both spreadsheets and soil, and cares about building
              structures that keep human-scale ventures alive.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              {[
                "Pragmatic idealism",
                "Simple structures over clever complexity",
                "Transparency over posturing",
                "Enough is a strategy",
              ].map((value) => (
                <li key={value} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>
    </>
  );
}
