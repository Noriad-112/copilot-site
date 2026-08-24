import { site } from "@/lib/site";

export function GET() {
  const payload = {
    name: site.siteName,
    url: site.siteUrl,
    description: site.description,
    contactEmail: site.contactEmail,
    services: [
      "Venture & ownership architecture",
      "Financial systems & cost discipline",
      "Operational design & governance",
      "Place-based strategy",
    ],
    updatedAt: new Date().toISOString(),
  };

  return Response.json(payload, {
    headers: {
      "Cache-Control": "public, max-age=3600",
    },
  });
}
