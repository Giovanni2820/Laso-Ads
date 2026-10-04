import type { ReactNode } from "react";

import { Container } from "./container";
import { Footer } from "./footer";
import { Header } from "./header";
import { Section } from "./section";

interface PageShellProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  /** Acciones del encabezado, normalmente un CTA. */
  actions?: ReactNode;
}

/**
 * Esqueleto de las páginas internas: header del sitio, encabezado de página
 * sobre superficie oscura, contenido y footer. Evita repetir la estructura
 * en cada ruta.
 */
export function PageShell({ eyebrow, title, intro, children, actions }: PageShellProps) {
  return (
    <>
      <Header />
      <main id="contenido">
        <Section surface="ink" spacing="tight" as="div">
          <Container width="wide">
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            <h1 className="mt-4 max-w-4xl text-4xl sm:text-6xl">{title}</h1>
            {intro ? <p className="text-fg-body mt-5 max-w-2xl text-lg">{intro}</p> : null}
            {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
          </Container>
        </Section>
        {children}
      </main>
      <Footer />
    </>
  );
}
