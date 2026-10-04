import { site } from "@content/site";

import { Container } from "@/components/layout/container";
import { PageShell } from "@/components/layout/page-shell";
import { Section } from "@/components/layout/section";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Política de privacidad",
  description: "Qué datos pedimos, para qué los usamos y con quién los compartimos.",
  path: "/privacidad",
  noIndex: true,
});

/**
 * BORRADOR. No es un texto legal definitivo: falta revisión profesional y
 * completar los datos del responsable (CLAUDE.md §14.5).
 */
export default function PrivacidadPage() {
  return (
    <PageShell eyebrow="Legales" title="Política de privacidad">
      <Section surface="white">
        <Container width="narrow">
          <div
            role="note"
            className="border-control rounded-card mb-10 border border-dashed p-5 text-sm"
          >
            <p className="text-fg font-medium">Borrador pendiente de revisión legal</p>
            <p className="text-fg-secondary mt-2">
              Este texto es una base de trabajo, no una política vigente. Falta revisión profesional
              y completar los datos del responsable antes de publicarlo.
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl">Qué datos pedimos</h2>
              <p className="text-fg-body mt-3 leading-relaxed">
                En el formulario para marcas pedimos nombre, email, nombre de la marca, sitio o
                Instagram, rubro, inversión aproximada en pauta y una descripción de lo que
                necesitás. En el formulario de creadores pedimos nombre, email, teléfono, ciudad,
                usuarios de redes, rubros de interés, equipamiento y experiencia.
              </p>
            </section>

            <section>
              <h2 className="text-2xl">Para qué los usamos</h2>
              <p className="text-fg-body mt-3 leading-relaxed">
                Para responderte, evaluar si podemos trabajar juntos y, en el caso de creadores,
                considerar tu perfil para las campañas de nuestros clientes. No los usamos para otra
                cosa.
              </p>
            </section>

            <section>
              <h2 className="text-2xl">Con quién los compartimos</h2>
              <p className="text-fg-body mt-3 leading-relaxed">
                No vendemos ni cedemos tus datos. En el caso de creadores, tu perfil puede
                compartirse con una marca cliente para evaluar si encaja en una campaña, siempre
                dentro de ese fin.
              </p>
            </section>

            <section>
              <h2 className="text-2xl">Cuánto tiempo los guardamos</h2>
              <p className="text-fg-body mt-3 leading-relaxed">
                Mientras sean necesarios para el fin por el que los diste, o hasta que pidas que los
                borremos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl">Tus derechos</h2>
              <p className="text-fg-body mt-3 leading-relaxed">
                Podés pedirnos acceder a tus datos, corregirlos o eliminarlos escribiéndonos por los
                canales de contacto del sitio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl">Contacto</h2>
              <p className="text-fg-body mt-3 leading-relaxed">
                Por consultas sobre esta política, escribinos a través de{" "}
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent underline underline-offset-4"
                >
                  nuestro Instagram
                </a>
                .
              </p>
            </section>
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}
