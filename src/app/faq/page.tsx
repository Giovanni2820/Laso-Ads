import { home } from "@content/home";
import { services } from "@content/services";

import { Container } from "@/components/layout/container";
import { PageShell } from "@/components/layout/page-shell";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { faqJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Preguntas frecuentes",
  description:
    "Qué es el UGC para ads, qué incluye el servicio, derechos de uso, tiempos, IA frente a creadores reales y qué no prometemos.",
  path: "/faq",
});

/** La home muestra un subconjunto; acá va todo, sin duplicar contenido. */
const allFaq = [...home.faq.items, ...services.flatMap((service) => service.faq)];

export default function FaqPage() {
  return (
    <PageShell
      eyebrow="Preguntas"
      title="Preguntas frecuentes"
      intro="Lo que suelen preguntarnos antes de empezar a trabajar juntos."
      actions={
        <Button href="/marcas" variant="primary">
          Hacenos tu pregunta
        </Button>
      }
    >
      <Section surface="white">
        <Container width="narrow">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(allFaq)) }}
          />
          <div>
            {allFaq.map((item) => (
              <details key={item.question} className="border-line group border-b">
                <summary className="text-fg flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-lg font-medium marker:hidden">
                  {item.question}
                  <span
                    aria-hidden="true"
                    className="text-accent shrink-0 text-xl transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="text-fg-secondary pb-5 leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      <Section surface="ink" spacing="tight">
        <Container width="narrow">
          <h2 className="text-2xl">¿No encontraste lo que buscabas?</h2>
          <p className="text-fg-body mt-3">
            Escribinos y te respondemos. Si la pregunta se repite, la sumamos acá.
          </p>
          <div className="mt-6">
            <Button href="/contacto" variant="primary">
              Escribinos
            </Button>
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}
