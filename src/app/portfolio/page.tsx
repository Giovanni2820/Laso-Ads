import { portfolio } from "@content/portfolio";

import { Container } from "@/components/layout/container";
import { PageShell } from "@/components/layout/page-shell";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { pageMeta } from "@/lib/seo";

const isEmpty = portfolio.length === 0;

export const metadata = pageMeta({
  title: "Portfolio de creativos UGC",
  description: "Piezas que produjimos para marcas que pautan en Meta Ads y TikTok Ads.",
  path: "/portfolio",
  noIndex: isEmpty,
});

export default function PortfolioPage() {
  return (
    <PageShell
      eyebrow="Portfolio"
      title="Lo que producimos"
      intro={
        isEmpty
          ? undefined
          : "Piezas reales que produjimos para marcas que pautan. Filtrá por industria o formato."
      }
    >
      <Section surface="white">
        <Container width="wide">
          {isEmpty ? (
            <div className="border-line rounded-card mx-auto max-w-xl border border-dashed p-10 text-center">
              <h2 className="text-2xl">Todavía no publicamos las piezas acá</h2>
              <p className="text-fg-secondary mt-4 leading-relaxed">
                Estamos cargando el portfolio. Mientras tanto podés ver trabajos nuestros en
                Instagram, o escribirnos y te mandamos ejemplos del rubro de tu marca.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/marcas" variant="primary">
                  Pedinos ejemplos de tu rubro
                </Button>
                <Button href="https://www.instagram.com/laso.ecomads" variant="secondary">
                  Ver en Instagram
                </Button>
              </div>
            </div>
          ) : (
            <p>Grilla de piezas pendiente de implementar cuando existan datos.</p>
          )}
        </Container>
      </Section>
    </PageShell>
  );
}
