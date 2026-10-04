import { Container } from "@/components/layout/container";
import { PageShell } from "@/components/layout/page-shell";
import { Section } from "@/components/layout/section";
import { BrandLeadForm } from "@/components/forms/brand-lead-form";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Para marcas que pautan",
  description:
    "Contanos qué vendés y en qué está tu pauta. Te decimos qué creativos produciríamos para tu marca y cómo los testearíamos.",
  path: "/marcas",
});

const steps = [
  {
    number: "01",
    title: "Nos contás tu situación",
    body: "Qué vendés, dónde pautás y qué problema tenés hoy con tus creativos.",
  },
  {
    number: "02",
    title: "Te respondemos",
    body: "Si vemos que podemos ayudarte, coordinamos una llamada. Si no, te lo decimos.",
  },
  {
    number: "03",
    title: "Armamos una propuesta",
    body: "Qué produciríamos, con qué formatos y cómo lo testearíamos.",
  },
];

export default function MarcasPage() {
  return (
    <PageShell
      eyebrow="Para marcas"
      title="Contanos qué estás vendiendo"
      intro="Cuanto más concreto seas, más útil va a ser lo que te respondamos. No es un formulario de contacto genérico: lo leemos para entender si podemos ayudarte."
    >
      <Section surface="ink" spacing="tight">
        <Container width="wide">
          <ol className="grid gap-6 sm:grid-cols-3">
            {steps.map((step) => (
              <li key={step.number} className="border-line border-t pt-5">
                <span className="text-accent font-mono text-sm font-medium">{step.number}</span>
                <h2 className="mt-3 text-lg">{step.title}</h2>
                <p className="text-fg-secondary mt-2 text-sm leading-relaxed">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section surface="white">
        <Container width="narrow">
          <h2 className="text-3xl">Escribinos</h2>
          <p className="text-fg-secondary mt-3">
            Son siete campos. No te va a llevar más de dos minutos.
          </p>
          <div className="mt-8">
            <BrandLeadForm />
          </div>
        </Container>
      </Section>

      <Section surface="ink" spacing="tight">
        <Container width="narrow">
          <h2 className="text-2xl">Con qué marcas trabajamos mejor</h2>
          <p className="text-fg-body mt-4 leading-relaxed">
            Con las que ya tienen producto validado, una oferta clara y están invirtiendo en pauta.
            Ahí es donde más creativos nuevos hacen falta y donde más se nota la diferencia.
          </p>
          <p className="text-fg-secondary mt-4 leading-relaxed">
            Si todavía no vendés o tu oferta no está definida, más creativos no van a resolverlo. Te
            lo vamos a decir antes de que gastes plata con nosotros.
          </p>
        </Container>
      </Section>
    </PageShell>
  );
}
