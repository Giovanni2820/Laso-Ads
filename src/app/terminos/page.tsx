import { Container } from "@/components/layout/container";
import { PageShell } from "@/components/layout/page-shell";
import { Section } from "@/components/layout/section";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Términos y condiciones",
  description: "Condiciones de uso del sitio y del servicio.",
  path: "/terminos",
  noIndex: true,
});

/**
 * BORRADOR. No es un texto legal definitivo (CLAUDE.md §14.5).
 * Los derechos de uso del material producido requieren revisión legal
 * (contexto §26, decisiones-pendientes #13).
 */
export default function TerminosPage() {
  return (
    <PageShell eyebrow="Legales" title="Términos y condiciones">
      <Section surface="white">
        <Container width="narrow">
          <div
            role="note"
            className="border-control rounded-card mb-10 border border-dashed p-5 text-sm"
          >
            <p className="text-fg font-medium">Borrador pendiente de revisión legal</p>
            <p className="text-fg-secondary mt-2">
              Base de trabajo, no condiciones vigentes. Los derechos de uso del material producido
              tienen que definirse con asesoramiento profesional antes de publicarse.
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl">Sobre este sitio</h2>
              <p className="text-fg-body mt-3 leading-relaxed">
                El contenido de este sitio es informativo. Los servicios, formatos y alcances
                descritos no constituyen una oferta contractual: las condiciones de cada trabajo se
                acuerdan por escrito antes de empezar.
              </p>
            </section>

            <section>
              <h2 className="text-2xl">Sobre los servicios</h2>
              <p className="text-fg-body mt-3 leading-relaxed">
                Producimos material publicitario. No garantizamos resultados de venta ni métricas de
                campaña: el rendimiento de un anuncio depende también de la oferta, el precio, la
                página de destino, el presupuesto y la gestión de la pauta.
              </p>
            </section>

            <section>
              <h2 className="text-2xl">Derechos de uso del material</h2>
              <p className="text-fg-body mt-3 leading-relaxed">
                El alcance de los derechos sobre cada pieza —canales, territorio, duración,
                exclusividad y uso de imagen y voz— se define por escrito en cada proyecto. No se
                asumen derechos ilimitados por defecto, ni para el cliente ni para nosotros.
              </p>
            </section>

            <section>
              <h2 className="text-2xl">Contenido de terceros</h2>
              <p className="text-fg-body mt-3 leading-relaxed">
                El material, las marcas y los productos que nos proporciona un cliente siguen siendo
                suyos. El cliente declara tener los derechos necesarios sobre lo que nos entrega.
              </p>
            </section>

            <section>
              <h2 className="text-2xl">Cambios</h2>
              <p className="text-fg-body mt-3 leading-relaxed">
                Podemos actualizar estos términos. La versión vigente es siempre la publicada en
                esta página.
              </p>
            </section>
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}
