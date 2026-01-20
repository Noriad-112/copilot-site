import type { Lang } from "./i18n";

export type EcosystemStatus = "active" | "partner" | "concept" | "in-development";

export interface EcosystemItem {
  slug: string;
  status: EcosystemStatus;
  kind: "foundation" | "place" | "studio" | "framework" | "archetype";
  locations: string[];
  externalUrl?: string;
  featured?: boolean;
  labels: Partial<Record<Lang, { name: string; description: string }>>;
}

export const ecosystemItems: EcosystemItem[] = [
  {
    slug: "roots-and-remedies",
    status: "active",
    kind: "foundation",
    locations: ["Amsterdam (NL)"],
    featured: true,
    labels: {
      en: {
        name: "Roots & Remedies Stichting",
        description:
          "A Dutch foundation stewarding an ecosystem of small, regenerative experiments in food, land, energy, and governance.",
      },
      nl: {
        name: "Roots & Remedies Stichting",
        description:
          "Een Nederlandse stichting die een ecosysteem van kleine, regeneratieve experimenten in voedsel, land, energie en governance ondersteunt.",
      },
    },
  },
  {
    slug: "sauvage-space",
    status: "active",
    kind: "place",
    locations: ["Amsterdam (NL)"],
    featured: true,
    labels: {
      en: {
        name: "Sauvage Space",
        description:
          "A hybrid coffee–kitchen–tasting–event space in Amsterdam, used as a living lab for food culture, hospitality, and new ownership models.",
      },
      nl: {
        name: "Sauvage Space",
        description:
          "Een hybride koffie–keuken–proef– en eventruimte in Amsterdam, gebruikt als living lab voor eetcultuur, gastvrijheid en nieuwe eigendomsmodellen.",
      },
    },
  },
  {
    slug: "voedselbos-amsterdam",
    status: "partner",
    kind: "place",
    locations: ["Amsterdam (NL)"],
    externalUrl: "https://www.voedselbos.amsterdam/",
    featured: true,
    labels: {
      en: {
        name: "Voedselbos Amsterdam",
        description:
          "An urban food forest project in Amsterdam. Roots & Remedies works alongside initiatives like this that explore long-term relationships between people and land.",
      },
      nl: {
        name: "Voedselbos Amsterdam",
        description:
          "Een voedselbosproject in Amsterdam. Roots & Remedies werkt naast initiatieven als deze die langdurige relaties tussen mensen en land verkennen.",
      },
    },
  },
  {
    slug: "copilot-ventures",
    status: "active",
    kind: "studio",
    locations: ["Europe (remote-first)"],
    featured: false,
    labels: {
      en: {
        name: "Copilot Ventures",
        description:
          "A strategy and structure studio that co-designs financial, legal, and governance architectures for foundation-owned and regenerative projects.",
      },
      nl: {
        name: "Copilot Ventures",
        description:
          "Een strategie- en structuurbureau dat financiële, juridische en governance-architecturen mee ontwerpt voor stichting-gedreven en regeneratieve projecten.",
      },
    },
  },
  {
    slug: "home-scale-energy-and-digital-autonomy",
    status: "concept",
    kind: "framework",
    locations: ["Europe (various)"],
    featured: true,
    labels: {
      en: {
        name: "Home-Scale Energy & Digital Autonomy",
        description:
          "A consulting framework for small-scale solar, storage, and privacy-respecting digital infrastructure for homes, venues, and micro-labs.",
      },
      nl: {
        name: "Energie en digitale autonomie op huisschaal",
        description:
          "Een advieskader voor kleinschalige zon, opslag en privacy-vriendelijke digitale infrastructuur voor huizen, locaties en micro-labs.",
      },
    },
  },
  {
    slug: "land-lab-southern-europe",
    status: "in-development",
    kind: "archetype",
    locations: ["Southern Europe"],
    featured: false,
    labels: {
      en: {
        name: "Land-based lab (Southern Europe)",
        description:
          "An archetype for long-term land projects that blend food, ecology, and low-intensity hospitality. Mentioned here only at pattern level.",
      },
      nl: {
        name: "Landlab (Zuid-Europa)",
        description:
          "Een archetype voor langlopende landprojecten die voedsel, ecologie en kleinschalige gastvrijheid combineren. Hier alleen als patroon genoemd.",
      },
    },
  },
  {
    slug: "hospitality-food-lab",
    status: "in-development",
    kind: "archetype",
    locations: ["Urban context"],
    featured: false,
    labels: {
      en: {
        name: "Hospitality & food lab in development",
        description:
          "A future-facing archetype for kitchen and counter spaces that experiment with new labour, pricing, and ownership models.",
      },
      nl: {
        name: "Hospitality- en food lab in ontwikkeling",
        description:
          "Een toekomstgericht archetype voor keukens en counters die experimenteren met nieuwe vormen van arbeid, prijs en eigendom.",
      },
    },
  },
];
