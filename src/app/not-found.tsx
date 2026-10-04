import { Container } from "@/components/layout/container";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="contenido">
        <Section surface="ink" spacing="loose">
          <Container width="narrow">
            <p className="eyebrow">Error 404</p>
            <h1 className="mt-4 text-4xl sm:text-6xl">Esta página no existe</h1>
            <p className="text-fg-body mt-5 text-lg">
              Puede que el enlace esté mal escrito o que la página todavía no esté publicada.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/" variant="primary">
                Volver al inicio
              </Button>
              <Button href="/servicios" variant="secondary">
                Ver los servicios
              </Button>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
