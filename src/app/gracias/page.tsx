import { Container } from "@/components/layout/container";
import { PageShell } from "@/components/layout/page-shell";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Gracias",
  description: "Recibimos tu mensaje.",
  path: "/gracias",
  noIndex: true,
});

export default function GraciasPage() {
  return (
    <PageShell
      eyebrow="Listo"
      title="Recibimos tu mensaje"
      intro="Lo leemos y te respondemos. Si vemos que podemos ayudarte, coordinamos una llamada; si no, también te lo decimos."
      actions={
        <>
          <Button href="/servicios" variant="primary">
            Ver los servicios
          </Button>
          <Button href="/" variant="secondary">
            Volver al inicio
          </Button>
        </>
      }
    >
      <Section surface="white" spacing="tight">
        <Container width="narrow">
          <h2 className="text-2xl">Mientras tanto</h2>
          <p className="text-fg-secondary mt-3 leading-relaxed">
            Si querés ir adelantando, pensá qué producto te interesa promocionar primero y qué
            ángulos ya probaste en pauta. Con eso la primera conversación rinde mucho más.
          </p>
        </Container>
      </Section>
    </PageShell>
  );
}
