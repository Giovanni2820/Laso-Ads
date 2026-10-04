import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { Section, type Surface } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Sistema de diseño",
  description: "Referencia interna de tokens, superficies y tipografía.",
  robots: { index: false, follow: false },
};

const surfaces: { id: Surface; nombre: string; uso: string; hex: string }[] = [
  { id: "ink", nombre: "Noche", uso: "Superficie dominante", hex: "#0A0E16" },
  { id: "white", nombre: "Blanco", uso: "Portfolio, formularios", hex: "#FFFFFF" },
  { id: "sand", nombre: "Crema", uso: "Bloques puntuales", hex: "#EDE8E2" },
];

function MuestraDeSuperficie({
  id,
  nombre,
  uso,
  hex,
}: {
  id: Surface;
  nombre: string;
  uso: string;
  hex: string;
}) {
  return (
    <div data-surface={id} className="bg-surface border-line rounded-card border p-6">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-xl">{nombre}</h3>
        <code className="text-fg-muted font-mono text-xs">{hex}</code>
      </div>
      <p className="text-fg-muted mt-1 text-sm">{uso}</p>

      <p className="text-fg-body mt-4">
        Texto de cuerpo.{" "}
        <a href="#" className="text-accent underline underline-offset-4">
          Un enlace
        </a>{" "}
        y <span className="text-fg-muted">texto atenuado</span>.
      </p>

      <div className="bg-surface-raised border-line rounded-control mt-4 border p-3">
        <p className="text-fg-secondary text-sm">Tarjeta elevada</p>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <Button variant="primary" size="sm">
          Principal
        </Button>
        <Button variant="secondary" size="sm">
          Secundaria
        </Button>
      </div>

      <div className="mt-5 grid gap-2">
        <label className="text-fg-secondary text-sm" htmlFor={`demo-${id}`}>
          Campo de formulario
        </label>
        <input
          id={`demo-${id}`}
          type="text"
          placeholder="Escribí algo"
          className="border-control bg-surface text-fg placeholder:text-fg-muted rounded-control min-h-11 border px-3"
        />
        <p className="text-danger text-sm">Mensaje de error.</p>
        <p className="text-success text-sm">Mensaje de éxito.</p>
      </div>
    </div>
  );
}

export default function PaginaDeEstilo() {
  return (
    <main id="contenido">
      <Section surface="ink" spacing="tight" as="header">
        <Container width="wide">
          <p className="eyebrow">Referencia interna</p>
          <h1 className="mt-3 text-4xl sm:text-5xl">Sistema de diseño</h1>
          <p className="text-fg-body mt-4 max-w-2xl text-lg">
            Tokens, superficies y tipografía de Laso ADS. No se indexa.
          </p>
        </Container>
      </Section>

      <Section surface="ink">
        <Container width="wide">
          <h2 className="text-3xl">Las tres superficies</h2>
          <p className="text-fg-secondary mt-3 max-w-2xl">
            Cada sección declara la suya y todo lo que está adentro hereda los colores.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {surfaces.map((s) => (
              <MuestraDeSuperficie key={s.id} {...s} />
            ))}
          </div>
        </Container>
      </Section>

      <Section surface="white">
        <Container width="wide">
          <h2 className="text-3xl">Escala tipográfica</h2>
          <p className="text-fg-secondary mt-3">DM Sans para todo, JetBrains Mono para datos.</p>
          <div className="mt-8 space-y-6">
            <div>
              <code className="text-fg-muted font-mono text-xs">h1</code>
              <p className="font-display text-fg text-5xl leading-none tracking-tight">
                Más ángulos para testear
              </p>
            </div>
            <div>
              <code className="text-fg-muted font-mono text-xs">h2</code>
              <p className="font-display text-fg text-3xl leading-tight tracking-tight">
                El problema no es tener contenido
              </p>
            </div>
            <div>
              <code className="text-fg-muted font-mono text-xs">cuerpo</code>
              <p className="text-fg-body max-w-prose">
                Un anuncio que funciona hoy puede dejar de funcionar mañana. Por eso el trabajo no
                termina cuando entregamos un video.
              </p>
            </div>
            <div>
              <code className="text-fg-muted font-mono text-xs">eyebrow · datos</code>
              <p className="eyebrow">Creativos para performance</p>
              <p className="text-fg mt-2 font-mono">01 · 02 · 03 · 30 variantes</p>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
