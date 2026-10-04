import type { Metadata } from "next";

import { site } from "@content/site";

/** Fallback a localhost mientras no haya dominio (decisiones-pendientes #2). */
const baseUrl = site.url ?? "http://localhost:3000";

interface PageMetaOptions {
  title: string;
  description: string;
  path: string;
  /** Las páginas sin contenido real no se indexan (CLAUDE.md §11). */
  noIndex?: boolean;
}

export function pageMeta({ title, description, path, noIndex }: PageMetaOptions): Metadata {
  const url = `${baseUrl}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title: `${title} · ${site.name}`,
      description,
      url,
      siteName: site.name,
      locale: site.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · ${site.name}`,
      description,
    },
  };
}

/** JSON-LD de la organización. Solo incluye lo que está confirmado. */
export function organizationJsonLd() {
  const sameAs = [site.social.instagram, site.social.tiktok, site.social.linkedin].filter(
    (url): url is string => typeof url === "string",
  );

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    description: site.description,
    ...(site.url ? { url: site.url } : {}),
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function serviceJsonLd(name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: { "@type": "Organization", name: site.name },
  };
}
