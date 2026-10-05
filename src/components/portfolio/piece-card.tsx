import type { PlaceholderPiece } from "@content/placeholders";

import { cn } from "@/lib/cn";

const productionLabels: Record<PlaceholderPiece["production"], string> = {
  humano: "Creador real",
  ia: "Con IA",
  hibrido: "Híbrido",
};

interface PieceCardProps {
  piece: PlaceholderPiece;
  className?: string;
}

/**
 * Tarjeta de pieza en formato vertical 9:16.
 * Mientras no haya videos reales muestra un marcador evidente: sin miniatura,
 * sin marca atribuida y con la etiqueta "ejemplo" (CLAUDE.md §4 y §13).
 */
export function PieceCard({ piece, className }: PieceCardProps) {
  return (
    <article className={cn("group", className)}>
      <div className="border-line bg-surface-raised rounded-card relative aspect-[9/16] overflow-hidden border">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, currentColor 0 1px, transparent 1px 9px)",
          }}
        />
        <div className="relative flex h-full flex-col items-center justify-center gap-3 p-4 text-center">
          <span className="border-control text-fg-secondary flex size-11 items-center justify-center rounded-full border">
            <span aria-hidden="true" className="ml-0.5 text-sm">
              ▶
            </span>
          </span>
          <span className="text-fg-muted font-mono text-[11px] tracking-widest uppercase">
            Ejemplo
          </span>
        </div>
      </div>

      <div className="mt-3">
        <p className="text-fg text-sm font-medium">{piece.format}</p>
        <p className="text-fg-muted mt-1 font-mono text-xs">
          {piece.industry} · {productionLabels[piece.production]}
        </p>
      </div>
    </article>
  );
}
