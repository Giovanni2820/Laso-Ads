import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

interface FieldProps {
  id: string;
  label: string;
  /** Texto de ayuda bajo la etiqueta. */
  hint?: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}

/**
 * Envuelve un control de formulario con su etiqueta, ayuda y error.
 * El error se asocia por `aria-describedby` y se anuncia con `aria-live`
 * (CLAUDE.md §10). El control recibe los ids por quien lo use.
 */
export function Field({ id, label, hint, error, required, children, className }: FieldProps) {
  return (
    <div className={cn("grid gap-2", className)}>
      <label htmlFor={id} className="text-fg text-sm font-medium">
        {label}
        {required ? (
          <span className="text-fg-muted ml-1 font-normal">(obligatorio)</span>
        ) : (
          <span className="text-fg-muted ml-1 font-normal">(opcional)</span>
        )}
      </label>
      {hint ? (
        <p id={`${id}-hint`} className="text-fg-muted text-sm">
          {hint}
        </p>
      ) : null}
      {children}
      <p id={`${id}-error`} aria-live="polite" className="text-danger min-h-5 text-sm">
        {error}
      </p>
    </div>
  );
}

const controlClasses =
  "border-control bg-surface text-fg placeholder:text-fg-muted rounded-control min-h-11 w-full border px-3 py-2 transition-colors";

export function inputClasses(hasError?: boolean) {
  return cn(controlClasses, hasError && "border-danger");
}
