import type { Metadata } from "next";

import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/lib/site";
import { createWebPageJsonLd } from "@/lib/seo";

type Venture = {
  id: string;
  name: string;
  categoryTags: string[];
  status: "Active" | "Developing" | "Ongoing";
  url: string | null;
  description: string[];
};

const ventures: Venture[] = [
  {
    id: "food-culture-lab",
    name: "Hospitality / food lab (in development)",
    categoryTags: ["Hospitality", "Food"],
    status: "Developing",
    url: null,
    description: [
      "Concept-stage hospitality and food experiment focused on community and cultural exchange.",
      "Currently held as an internal prototype with no public-facing operations yet.",
    ],
  },
  {
    id: "sauvage-space",
    name: "Sauvage Space",
    categoryTags: ["Space", "Hospitality"],
    status: "Developing",
    url: "https://sauvagespace.example",
    description: [
      "Hybrid venue in Amsterdam for coffee, food, wine, and cultural programming.",
      "A testing ground for alternative-economy ideas: shared use and community-focused events.",
    ],
  },
  {
    id: "experimental-lab",
    name: "Home-scale energy & digital autonomy",
    categoryTags: ["Framework", "Infrastructure"],
    status: "Ongoing",
    url: null,
    description: [
      "A consulting framework exploring local energy resilience and digital autonomy patterns.",
      "Insights are folded back into governance and infrastructure advisory work.",
    ],
  },
];

const pageTitle = "Ventures — Copilot Ventures";
const pageDescription =
  "Selected advisory collaborations and initiatives supported by Copilot Ventures.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${site.siteUrl}/ventures`,
  },
  alternates: {
    canonical: `${site.siteUrl}/ventures`,
  },
};

export default function VenturesPage() {
  return (
    <>
      <JsonLd
        data={createWebPageJsonLd(site, {
          title: pageTitle,
          description: pageDescription,
          path: "/ventures",
        })}
      />
      <Section size="loose" className="pt-12 sm:pt-16">
        <PageHeader
          eyebrow="Ventures"
          title="Selected advisory collaborations."
          description="A small, non-exhaustive sample of advisory work in structure, governance, and finance."
        />
      </Section>

      <Section size="loose" className="pb-20">
        <div className="grid gap-6">
          {ventures.map((venture) => (
            <div key={venture.id} id={venture.id}>
              <Card className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="font-serif text-3xl text-slate-900">
                    {venture.name}
                  </h2>
                  <span className="rounded-full bg-[color:var(--accent-soft)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-700">
                    {venture.status}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-slate-500">
                  {venture.categoryTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="space-y-3 text-sm text-slate-600">
                  {venture.description.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {venture.url ? (
                  <a
                    href={venture.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 underline-offset-4 transition hover:text-slate-900 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    Visit site
                  </a>
                ) : (
                  <p className="text-sm text-slate-500">URL coming soon.</p>
                )}
              </Card>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
