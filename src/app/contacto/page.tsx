import { site } from "@content/site";

import { Container } from "@/components/layout/container";
import { PageShell } from "@/components/layout/page-shell";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Contacto",
  description: "Escribinos y te respondemos. Contanos qué vendés y qué necesitás.",
  path: "/contacto",
});

export default function ContactoPage() {
  return (
    <PageShell
      eyebrow="Contacto"
      title="Hablemos"
      intro="La forma más rápida de que te respondamos algo útil es que nos cuentes tu situación en el formulario. Si preferís, también estamos en Instagram."
    >
      <Section surface="white">
        <Container width="narrow">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="border-line rounded-card border p-7">
              <h2 className="text-xl">Si tenés una marca</h2>
              <p className="text-fg-secondary mt-3 leading-relaxed">
                Contanos qué vendés, dónde pautás y qué necesitás. Lo leemos y te respondemos.
              </p>
              <div className="mt-6">
                <Button href="/marcas" variant="primary">
                  Ir al formulario
                </Button>
              </div>
            </div>

            <div className="border-line rounded-card border p-7">
              <h2 className="text-xl">Si sos creador</h2>
              <p className="text-fg-secondary mt-3 leading-relaxed">
                Postulate para trabajar con nosotros produciendo contenido para marcas.
              </p>
              <div className="mt-6">
                <Button href="/creadores" variant="secondary">
                  Postularme
                </Button>
              </div>
            </div>
          </div>

          <div className="border-line mt-10 border-t pt-8">
            <h2 className="text-xl">Otros canales</h2>
            <p className="text-fg-secondary mt-3">
              Instagram:{" "}
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-accent underline underline-offset-4"
              >
                @laso.ecomads
              </a>
            </p>
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}
