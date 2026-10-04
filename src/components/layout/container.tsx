import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

interface ContainerProps {
  children: ReactNode;
  /** `narrow` para texto largo (lectura comoda), `wide` para grillas de video. */
  width?: "narrow" | "default" | "wide";
  className?: string;
}

const widths = {
  narrow: "max-w-2xl",
  default: "max-w-5xl",
  wide: "max-w-7xl",
} as const;

export function Container({ children, width = "default", className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", widths[width], className)}>
      {children}
    </div>
  );
}
