import type { Metadata } from "next";

import Link from "next/link";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/lib/site";
import { createWebPageJsonLd } from "@/lib/seo";

const pageTitle = "Copilot Ventures — Infrastructure for the alternative economy";
const pageDescription = site.description;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: site.siteUrl,
  },
};

export default function Home() {
  return (
    <>
      <JsonLd
        data={createWebPageJsonLd(site, {
          title: pageTitle,
          description: pageDescription,
          path: "/",
        })}
      />
      <Section size="loose" className="pt-12 sm:pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Copilot Ventures B.V.
            </p>
            <h1 className="font-serif text-4xl text-slate-900 sm:text-5xl">
              Infrastructure for the alternative economy.
            </h1>
            <p className="max-w-xl text-base text-slate-600 sm:text-lg">
              Copilot Ventures is an advisory studio designing governance,
              ownership, and financial systems for ventures with non-extractive
              economics and long-term resilience.
            </p>
            <p className="max-w-xl text-base text-slate-600 sm:text-lg">
              We work at the structural layer: treasury design, governance
              architecture, and practical systems that keep real ventures
              durable.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/ventures">Explore the ventures</ButtonLink>
              <ButtonLink href="/services" variant="secondary">
                Work with Copilot
              </ButtonLink>
            </div>
          </div>
          <div className="space-y-4 rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Primary focus
            </p>
            <div className="space-y-3">
              {[
                "Long-horizon ownership structures",
                "Foundation and community-rooted governance",
                "Lean finance and treasury resilience",
                "Place-based ventures with cultural gravity",
              ].map((item) => (
                <div key={item} className="flex gap-3 text-sm text-slate-700">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section size="default">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Advisory studio",
              body: "Partners with founders to design structures, governance, and finance that support durable ventures.",
            },
            {
              title: "Advisory partner",
              body: "Helps founders design structures, stewardship models, and financial architectures that last.",
            },
            {
              title: "Experimental lab",
              body: "Prototypes tools around home labs, digital sovereignty, and regenerative operations.",
            },
          ].map((item) => (
            <Card key={item.title} className="space-y-3">
              <h2 className="font-serif text-2xl text-slate-900">
                {item.title}
              </h2>
              <p className="text-sm text-slate-600">{item.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section variant="muted">
        <div className="flex items-center justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Ventures snapshot
            </p>
            <h2 className="font-serif text-3xl text-slate-900">
              Selected collaborations and advisory work.
            </h2>
          </div>
          <Link
            href="/ventures"
            className="hidden text-sm text-slate-600 underline-offset-4 hover:text-slate-900 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--surface)] sm:inline"
          >
            View all ventures
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            {
              name: "Selection Sauvage",
              label: "Wine",
              description:
                "Natural wine import and culture hub with tastings, events, and collaborations.",
              href: "/ventures#selection-sauvage",
            },
            {
              name: "Sauvage Space",
              label: "Space",
              description:
                "Hybrid venue for coffee, food, wine, and cultural programming.",
              href: "/ventures#sauvage-space",
            },
          ].map((venture) => (
            <Card key={venture.name} className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-2xl text-slate-900">
                  {venture.name}
                </h3>
                <span className="rounded-full bg-[color:var(--accent-soft)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-700">
                  {venture.label}
                </span>
              </div>
              <p className="text-sm text-slate-600">{venture.description}</p>
              <Link
              href={venture.href}
                className="text-sm text-slate-600 underline-offset-4 hover:text-slate-900 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--surface-elevated)]"
              >
                View venture
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Long-horizon ownership",
              body: "Structures designed for continuity, not short-term extraction.",
            },
            {
              title: "Transparent, lean finance",
              body: "Clear treasury models that align incentives and reduce drag.",
            },
            {
              title: "Governance that fits real humans",
              body: "Roles and decision-making processes that work in practice.",
            },
          ].map((item) => (
            <div key={item.title} className="space-y-3">
              <h3 className="font-serif text-2xl text-slate-900">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section size="loose" className="pb-20">
        <div className="rounded-3xl border border-slate-200/70 bg-white/90 p-8 shadow-sm sm:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <h2 className="font-serif text-3xl text-slate-900">
                You&apos;re building something that doesn&apos;t fit the standard
                venture box.
              </h2>
              <p className="max-w-xl text-base text-slate-600">
                Copilot helps you design the structure around it — ownership,
                governance, and financial architecture that supports the long
                term.
              </p>
            </div>
            <ButtonLink href="/contact">Start a conversation</ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
