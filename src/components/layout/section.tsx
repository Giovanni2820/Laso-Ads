import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/cn";

export type Surface = "ink" | "sand" | "white";

interface SectionProps {
  children: ReactNode;
  /** Define la paleta de todo lo que esta adentro. Ver docs/identidad-visual.md. */
  surface?: Surface;
  as?: ElementType;
  spacing?: "tight" | "default" | "loose";
  id?: string;
  className?: string;
}

const spacings = {
  tight: "py-12 sm:py-16",
  default: "py-16 sm:py-24",
  loose: "py-24 sm:py-32",
} as const;

/**
 * Bloque de pagina que declara su superficie. Los hijos heredan los tokens
 * (bg-surface, text-fg, text-accent...) y no necesitan saber en que fondo estan.
 */
export function Section({
  children,
  surface = "sand",
  as: Tag = "section",
  spacing = "default",
  id,
  className,
}: SectionProps) {
  return (
    <Tag
      id={id}
      data-surface={surface}
      className={cn("bg-surface text-fg-body", spacings[spacing], className)}
    >
      {children}
    </Tag>
  );
}
