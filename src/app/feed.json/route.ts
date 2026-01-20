import { site } from "@/content/site";

export function GET() {
  const payload = {
    title: "Roots & Remedies Journal",
    home_page_url: site.baseUrl,
    feed_url: `${site.baseUrl}/feed.json`,
    items: [],
  };

  return Response.json(payload, {
    headers: {
      "Cache-Control": "public, max-age=3600",
    },
  });
}
