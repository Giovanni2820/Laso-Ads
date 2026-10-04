import Link from "next/link";

import { services } from "@content/services";

import { Container } from "@/components/layout/container";
import { PageShell } from "@/components/layout/page-shell";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Servicios de creativos UGC para Meta Ads",
  description:
    "Cuatro formas de trabajar con nosotros: UGC para Ads, Creative Testing, Creative Factory y creativos complementarios.",
  path: "/servicios",
});

export default function ServiciosPage() {
  return (
    <PageShell
      eyebrow="Servicios"
      title="Cuatro formas de trabajar con nosotros"
      intro="La misma capacidad de producción, empaquetada según en qué momento esté tu marca. Todos incluyen guiones y edición."
      actions={
        <Button href="/marcas" variant="primary">
          Hablemos de tu marca
        </Button>
      }
    >
      <Section surface="ink">
        <Container width="wide">
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.slug}
                className="bg-surface-raised border-line rounded-card flex flex-col border p-7"
              >
                <h2 className="text-2xl">{service.name}</h2>
                <p className="text-accent mt-1 font-mono text-sm">{service.tagline}</p>
                <p className="text-fg-secondary mt-4 flex-1 leading-relaxed">
                  {service.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {service.deliverables.slice(0, 4).map((item) => (
                    <li
                      key={item}
                      className="border-line text-fg-body rounded-full border px-3 py-1 font-mono text-xs"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/servicios/${service.slug}`}
                  className="text-accent hover:text-accent-hover mt-6 inline-flex text-sm underline underline-offset-4"
                >
                  Ver {service.name}
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section surface="sand" spacing="tight">
        <Container width="wide">
          <h2 className="text-2xl">¿También gestionan la pauta?</h2>
          <p className="text-fg-body mt-3 max-w-2xl">
            A algunos clientes les gestionamos las campañas además de producirles los creativos. No
            es nuestro servicio principal y no lo ofrecemos a todo el mundo: si te interesa,
            contanos en qué situación estás y vemos si tiene sentido.
          </p>
        </Container>
      </Section>
    </PageShell>
  );
}
