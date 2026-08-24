import { site } from "@/lib/site";

export function GET() {
  // TODO: Replace with real updates when available.
  const payload = {
    title: "Copilot Ventures Updates",
    home_page_url: site.siteUrl,
    feed_url: `${site.siteUrl}/feed.json`,
    items: [],
  };

  return Response.json(payload, {
    headers: {
      "Cache-Control": "public, max-age=3600",
    },
  });
}
