import Link from "next/link";

import { cn } from "@/lib/cn";

interface LogoProps {
  className?: string;
}

/**
 * Wordmark provisional en texto.
 * PENDIENTE: reemplazar por el SVG real del logo cuando esté disponible
 * (docs/decisiones-pendientes.md #1b). Sobre fondo oscuro va el wordmark
 * suelto, sin el círculo negro del avatar de Instagram.
 */
export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "text-fg text-2xl leading-none font-bold tracking-tight lowercase",
        "hover:text-accent transition-colors",
        className,
      )}
      aria-label="Laso ADS, ir al inicio"
    >
      laso
    </Link>
  );
}
