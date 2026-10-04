import type { MetadataRoute } from "next";

import { site } from "@content/site";

const baseUrl = site.url ?? "http://localhost:3000";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/estilo", "/gracias", "/privacidad", "/terminos"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
