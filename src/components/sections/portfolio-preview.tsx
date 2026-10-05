import { portfolio } from "@content/portfolio";
import { SHOW_PLACEHOLDERS, placeholderPieces } from "@content/placeholders";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PieceCard } from "@/components/portfolio/piece-card";
import { Button } from "@/components/ui/button";

const hasRealPieces = portfolio.length > 0;
const pieces = placeholderPieces.slice(0, 4);

/** No se renderiza si no hay piezas reales ni placeholders activos. */
export function PortfolioPreview() {
  if (!hasRealPieces && !SHOW_PLACEHOLDERS) return null;

  return (
    <Section surface="white" id="portfolio">
      <Container width="wide">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Portfolio</p>
            <h2 className="mt-4 max-w-2xl text-3xl sm:text-5xl">Lo que producimos</h2>
            <p className="text-fg-body mt-5 max-w-xl text-lg">
              Piezas verticales pensadas para pauta, no para el feed.
            </p>
          </div>
          <Button href="/portfolio" variant="secondary">
            Ver todo el portfolio
          </Button>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {pieces.map((piece) => (
            <PieceCard key={piece.id} piece={piece} />
          ))}
        </div>

        {!hasRealPieces ? (
          <p className="text-fg-muted mt-6 text-sm">
            Vista previa del diseño: todavía no cargamos las piezas reales.
          </p>
        ) : null}
      </Container>
    </Section>
  );
}
