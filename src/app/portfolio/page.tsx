import { portfolio } from "@content/portfolio";
import {
  SHOW_PLACEHOLDERS,
  placeholderFormats,
  placeholderIndustries,
  placeholderPieces,
} from "@content/placeholders";

import { Container } from "@/components/layout/container";
import { PageShell } from "@/components/layout/page-shell";
import { Section } from "@/components/layout/section";
import { PieceGrid } from "@/components/portfolio/piece-grid";
import { Button } from "@/components/ui/button";
import { pageMeta } from "@/lib/seo";

const hasRealPieces = portfolio.length > 0;
const showingPlaceholders = !hasRealPieces && SHOW_PLACEHOLDERS;

export const metadata = pageMeta({
  title: "Portfolio de creativos UGC",
  description: "Piezas que produjimos para marcas que pautan en Meta Ads y TikTok Ads.",
  path: "/portfolio",
  // Mientras no haya piezas reales la página no se indexa, aunque muestre el diseño.
  noIndex: !hasRealPieces,
});

export default function PortfolioPage() {
  return (
    <PageShell
      eyebrow="Portfolio"
      title="Lo que producimos"
      intro="Piezas verticales pensadas para pauta. Filtrá por formato o por industria."
    >
      <Section surface="white">
        <Container width="wide">
          {showingPlaceholders ? (
            <div
              role="note"
              className="border-control rounded-card mb-10 border border-dashed p-5 text-sm"
            >
              <p className="text-fg font-medium">Vista previa del diseño</p>
              <p className="text-fg-secondary mt-2">
                Las tarjetas de abajo son marcadores de posición para revisar cómo se ve la grilla.
                Todavía no cargamos las piezas reales, y esta página no se indexa hasta que lo
                hagamos.
              </p>
            </div>
          ) : null}

          {hasRealPieces || showingPlaceholders ? (
            <PieceGrid
              pieces={placeholderPieces}
              formats={placeholderFormats}
              industries={placeholderIndustries}
            />
          ) : (
            <div className="border-line rounded-card mx-auto max-w-xl border border-dashed p-10 text-center">
              <h2 className="text-2xl">Todavía no publicamos las piezas acá</h2>
              <p className="text-fg-secondary mt-4 leading-relaxed">
                Escribinos y te mandamos ejemplos del rubro de tu marca.
              </p>
              <div className="mt-8">
                <Button href="/marcas" variant="primary">
                  Pedinos ejemplos de tu rubro
                </Button>
              </div>
            </div>
          )}
        </Container>
      </Section>

      <Section surface="ink" spacing="tight">
        <Container width="narrow">
          <h2 className="text-2xl">¿Querés ver piezas de tu rubro?</h2>
          <p className="text-fg-body mt-3">
            Contanos qué vendés y te mandamos ejemplos de lo que produciríamos para tu marca.
          </p>
          <div className="mt-6">
            <Button href="/marcas" variant="primary">
              Pedir ejemplos
            </Button>
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}
