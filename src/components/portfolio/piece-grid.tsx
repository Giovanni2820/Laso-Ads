"use client";

import { useState } from "react";

import type { PlaceholderPiece } from "@content/placeholders";

import { PieceCard } from "./piece-card";
import { cn } from "@/lib/cn";

interface PieceGridProps {
  pieces: PlaceholderPiece[];
  formats: string[];
  industries: string[];
}

const ALL = "Todos";

export function PieceGrid({ pieces, formats, industries }: PieceGridProps) {
  const [format, setFormat] = useState(ALL);
  const [industry, setIndustry] = useState(ALL);

  const filtered = pieces.filter(
    (piece) =>
      (format === ALL || piece.format === format) &&
      (industry === ALL || piece.industry === industry),
  );

  return (
    <div>
      <div className="flex flex-col gap-5">
        <FilterRow
          label="Formato"
          options={[ALL, ...formats]}
          value={format}
          onChange={setFormat}
        />
        <FilterRow
          label="Industria"
          options={[ALL, ...industries]}
          value={industry}
          onChange={setIndustry}
        />
      </div>

      <p aria-live="polite" className="text-fg-muted mt-6 text-sm">
        {filtered.length === 1 ? "1 pieza" : `${filtered.length} piezas`}
      </p>

      {filtered.length === 0 ? (
        <p className="text-fg-secondary border-line rounded-card mt-4 border border-dashed p-8 text-center">
          No hay piezas con esa combinación. Probá con otro filtro.
        </p>
      ) : (
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((piece) => (
            <PieceCard key={piece.id} piece={piece} />
          ))}
        </div>
      )}
    </div>
  );
}

interface FilterRowProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

function FilterRow({ label, options, value, onChange }: FilterRowProps) {
  return (
    <fieldset>
      <legend className="text-fg-muted font-mono text-xs tracking-widest uppercase">{label}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((option) => {
          const active = option === value;
          return (
            <button
              key={option}
              type="button"
              aria-pressed={active}
              onClick={() => onChange(option)}
              className={cn(
                "rounded-control min-h-11 border px-4 text-sm transition-colors",
                active
                  ? "border-accent bg-accent text-on-accent"
                  : "border-control text-fg-body hover:bg-surface-raised",
              )}
            >
              {option}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
