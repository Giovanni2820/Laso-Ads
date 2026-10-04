export interface NavItem {
  label: string;
  href: string;
  /** Las rutas que todavía no tienen contenido real quedan fuera del menú. */
  hidden?: boolean;
}

export const mainNav = [
  { label: "Servicios", href: "/servicios" },
  { label: "Portfolio", href: "/portfolio", hidden: true },
  { label: "Casos", href: "/casos", hidden: true },
  { label: "Creadores", href: "/creadores" },
  { label: "IA", href: "/ia" },
  { label: "FAQ", href: "/faq" },
] satisfies NavItem[];

export const visibleNav = mainNav.filter((item) => !item.hidden);
