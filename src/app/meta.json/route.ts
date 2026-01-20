import { i18n } from "@/content/i18n";
import { site } from "@/content/site";

export function GET() {
  const payload = {
    name: site.name,
    legalName: site.legalName,
    url: site.baseUrl,
    description: i18n.en.siteMetaDescription,
    contactEmail: site.contactEmail,
    focus: [
      "Regenerative stewardship",
      "Governance and ownership experiments",
      "Place-based cultural and food projects",
      "Alternative economy prototyping",
    ],
    updatedAt: new Date().toISOString(),
  };

  return Response.json(payload, {
    headers: {
      "Cache-Control": "public, max-age=3600",
    },
  });
}
