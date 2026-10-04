/**
 * Datos base del sitio. Todo lo que no esta confirmado va como `null`
 * para que la UI pueda ocultarlo en vez de inventarlo (CLAUDE.md 13).
 */
export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  locale: string;
  /** PENDIENTE: dominio sin definir (docs/decisiones-pendientes.md #2). */
  url: string | null;
  social: {
    instagram: string;
    tiktok: string | null;
    linkedin: string | null;
  };
  contact: {
    /** PENDIENTE: hoy la bio enlaza a un grupo, para la web hace falta chat directo (#16). */
    whatsapp: string | null;
    email: string | null;
  };
}

export const site = {
  name: "Laso ADS",
  legalName: "Laso ADS",
  tagline: "Creativos UGC para marcas que pautan",
  description:
    "Producimos creativos UGC con creadores reales e IA para que tu marca tenga siempre ángulos nuevos para testear en Meta Ads.",
  locale: "es-AR",
  url: null,
  social: {
    instagram: "https://www.instagram.com/laso.ecomads",
    tiktok: null,
    linkedin: null,
  },
  contact: {
    whatsapp: null,
    email: null,
  },
} satisfies SiteConfig;
