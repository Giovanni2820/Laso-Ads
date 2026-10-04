"use client";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <main id="contenido">
      <Section surface="ink" spacing="loose">
        <Container width="narrow">
          <p className="eyebrow">Algo salió mal</p>
          <h1 className="mt-4 text-4xl sm:text-5xl">Se nos rompió algo</h1>
          <p className="text-fg-body mt-5 text-lg">
            Probá de nuevo. Si vuelve a pasar, escribinos por Instagram y lo resolvemos.
          </p>
          <button
            type="button"
            onClick={reset}
            className="bg-accent text-on-accent hover:bg-accent-hover rounded-control mt-8 min-h-12 px-6 font-medium transition-colors"
          >
            Reintentar
          </button>
        </Container>
      </Section>
    </main>
  );
}
