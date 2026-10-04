import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";

import { site } from "@content/site";

import { organizationJsonLd } from "@/lib/seo";

import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} · ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es-AR"
      data-surface="ink"
      className={`${dmSans.variable} ${jetBrainsMono.variable} h-full`}
      style={
        {
          "--font-body": "var(--font-dm-sans)",
          "--font-heading": "var(--font-dm-sans)",
          "--font-data": "var(--font-jetbrains-mono)",
        } as React.CSSProperties
      }
    >
      <body className="bg-surface text-fg-body flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <a
          href="#contenido"
          className="bg-accent text-on-accent sr-only rounded-md px-4 py-2 focus-visible:not-sr-only focus-visible:absolute focus-visible:top-4 focus-visible:left-4 focus-visible:z-50"
        >
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
