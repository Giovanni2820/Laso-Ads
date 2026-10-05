import { SHOW_PLACEHOLDERS } from "./placeholders";
import { portfolio } from "./portfolio";

export interface NavItem {
  label: string;
  href: string;
  /** Las rutas sin contenido real quedan fuera del menú (CLAUDE.md §4). */
  hidden?: boolean;
}

export const mainNav = [
  { label: "Servicios", href: "/servicios" },
  { label: "Portfolio", href: "/portfolio", hidden: portfolio.length === 0 && !SHOW_PLACEHOLDERS },
  { label: "Creadores", href: "/creadores" },
  { label: "IA", href: "/ia" },
  { label: "FAQ", href: "/faq" },
  { label: "Contacto", href: "/contacto" },
] satisfies NavItem[];

export const visibleNav = mainNav.filter((item) => !item.hidden);
