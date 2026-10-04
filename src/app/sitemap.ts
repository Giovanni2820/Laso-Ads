import type { MetadataRoute } from "next";

import { portfolio } from "@content/portfolio";
import { services } from "@content/services";
import { site } from "@content/site";

const baseUrl = site.url ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = [
    { path: "/", priority: 1 },
    { path: "/servicios", priority: 0.9 },
    ...services.map((service) => ({ path: `/servicios/${service.slug}`, priority: 0.8 })),
    { path: "/marcas", priority: 0.9 },
    { path: "/creadores", priority: 0.7 },
    { path: "/ia", priority: 0.7 },
    { path: "/faq", priority: 0.6 },
    { path: "/contacto", priority: 0.6 },
  ];

  // Las páginas sin contenido real no entran al sitemap (CLAUDE.md §11).
  if (portfolio.length > 0) {
    routes.push({ path: "/portfolio", priority: 0.8 });
  }

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: route.priority,
  }));
}
