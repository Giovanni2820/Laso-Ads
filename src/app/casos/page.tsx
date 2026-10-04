import { Container } from "@/components/layout/container";
import { PageShell } from "@/components/layout/page-shell";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { pageMeta } from "@/lib/seo";

/** Sin casos documentados y autorizados todavía (decisiones-pendientes #10). */
const cases: never[] = [];
const isEmpty = cases.length === 0;

export const metadata = pageMeta({
  title: "Casos",
  description: "Cómo trabajamos con marcas reales, contado con números del proceso.",
  path: "/casos",
  noIndex: isEmpty,
});

export default function CasosPage() {
  return (
    <PageShell
      eyebrow="Casos"
      title="Casos"
      intro="Cuando publiquemos casos acá van a tener números del proceso, no promesas de venta."
    >
      <Section surface="white">
        <Container width="narrow">
          <div className="border-line rounded-card border border-dashed p-10 text-center">
            <h2 className="text-2xl">Todavía no publicamos casos</h2>
            <p className="text-fg-secondary mt-4 leading-relaxed">
              Preferimos no publicar un caso hasta tener los números del proceso y la autorización
              del cliente para contarlo. Cuando los tengamos, van a estar acá.
            </p>
            <p className="text-fg-muted mt-4 text-sm leading-relaxed">
              Lo que no vas a encontrar: promesas de ventas ni métricas de campaña que dependen de
              tu oferta, tu precio y tu presupuesto tanto como del creativo.
            </p>
            <div className="mt-8">
              <Button href="/marcas" variant="primary">
                Hablemos de tu marca
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}
