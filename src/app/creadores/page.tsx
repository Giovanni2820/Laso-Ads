import { Container } from "@/components/layout/container";
import { PageShell } from "@/components/layout/page-shell";
import { Section } from "@/components/layout/section";
import { CreatorApplicationForm } from "@/components/forms/creator-application-form";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Trabajá como creador UGC",
  description:
    "Buscamos creadores para producir videos UGC para marcas. No hace falta tener muchos seguidores: importa cómo funcionás frente a cámara.",
  path: "/creadores",
});

const what = [
  {
    title: "Qué es el UGC",
    body: "Videos con estética de usuario real que las marcas usan como anuncios. No es un posteo en tu perfil: el contenido es para que ellas lo pauten.",
  },
  {
    title: "Qué no hace falta",
    body: "Tener muchos seguidores. Un creador con mil seguidores puede hacer un anuncio excelente. Lo que importa es cómo te manejás frente a cámara.",
  },
  {
    title: "Qué sí hace falta",
    body: "Hablar natural, seguir un guion sin que suene leído, grabar con buena luz y entregar en tiempo.",
  },
];

const how = [
  "Te mandamos un brief con el producto, el guion y las referencias.",
  "Grabás con tu teléfono, en tu casa o donde pida la pieza.",
  "Nos mandás el material crudo y nosotros editamos.",
  "Si algo no funciona, te pedimos que regrabes esa parte.",
];

export default function CreadoresPage() {
  return (
    <PageShell
      eyebrow="Creadores"
      title="¿Querés trabajar como creador UGC?"
      intro="Buscamos gente que se maneje bien frente a cámara para producir videos que las marcas usan como anuncios. No necesitás tener audiencia."
    >
      <Section surface="sand">
        <Container width="wide">
          <div className="grid gap-6 md:grid-cols-3">
            {what.map((item) => (
              <div key={item.title}>
                <h2 className="text-xl">{item.title}</h2>
                <p className="text-fg-secondary mt-3 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section surface="ink">
        <Container width="wide">
          <h2 className="text-3xl">Cómo funciona</h2>
          <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {how.map((step, index) => (
              <li key={step} className="border-line border-t pt-5">
                <span className="text-accent font-mono text-sm font-medium">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-fg-body mt-3 leading-relaxed">{step}</p>
              </li>
            ))}
          </ol>

          <div className="border-line mt-12 border-t pt-8">
            <h3 className="text-xl">Cómo se paga</h3>
            <p className="text-fg-secondary mt-3 max-w-2xl leading-relaxed">
              Por entrega, no por seguidores. El monto depende del tipo de pieza y de lo que pida
              cada marca, y se acuerda antes de que grabes. Las condiciones y el alcance de los
              derechos de uso se definen por escrito en cada trabajo.
            </p>
          </div>
        </Container>
      </Section>

      <Section surface="white">
        <Container width="narrow">
          <h2 className="text-3xl">Postulate</h2>
          <p className="text-fg-secondary mt-3">
            Si tu perfil encaja con alguna marca con la que estemos trabajando, te escribimos.
          </p>
          <div className="mt-8">
            <CreatorApplicationForm />
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}
