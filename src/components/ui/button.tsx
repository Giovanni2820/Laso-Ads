import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/cn";

const button = cva(
  [
    "inline-flex items-center justify-center gap-2 text-center font-medium",
    "rounded-control transition-colors",
    "min-h-11 px-5",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        /** CTA principal. Uno por vista (CLAUDE.md 4). */
        primary: "bg-accent text-on-accent hover:bg-accent-hover",
        /** CTA secundario de baja friccion. */
        secondary: "border border-control text-fg hover:bg-surface-raised",
        /** Terciario, para acciones menores dentro de una seccion. */
        ghost: "text-accent underline underline-offset-4 hover:text-accent-hover",
      },
      size: {
        sm: "min-h-10 px-4 text-sm",
        md: "text-sm sm:text-base",
        lg: "min-h-13 px-7 text-base sm:text-lg",
      },
      block: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      block: false,
    },
  },
);

type ButtonVariants = VariantProps<typeof button>;

interface ButtonAsLinkProps extends ButtonVariants {
  href: string;
  children: ReactNode;
  className?: string;
}

interface ButtonAsButtonProps extends ButtonVariants, Omit<ComponentProps<"button">, "className"> {
  href?: never;
  children: ReactNode;
  className?: string;
}

/** Renderiza un enlace si recibe `href`, un boton si no. */
export function Button(props: ButtonAsLinkProps | ButtonAsButtonProps) {
  const { variant, size, block, className, children } = props;
  const classes = cn(button({ variant, size, block }), className);

  if (typeof props.href === "string") {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const { href: _href, variant: _v, size: _s, block: _b, ...rest } = props;
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}
