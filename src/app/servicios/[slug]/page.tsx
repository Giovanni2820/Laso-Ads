import Link from "next/link";
import { notFound } from "next/navigation";

import { getService, services } from "@content/services";

import { Container } from "@/components/layout/container";
import { PageShell } from "@/components/layout/page-shell";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { faqJsonLd, pageMeta, serviceJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return pageMeta({
    title: `${service.name}: ${service.tagline}`,
    description: service.description.slice(0, 155),
    path: `/servicios/${service.slug}`,
  });
}

export default async function ServicioPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  const otherServices = services.filter((item) => item.slug !== service.slug);

  return (
    <PageShell
      eyebrow={service.tagline}
      title={service.name}
      intro={service.problem}
      actions={
        <>
          <Button href="/marcas" variant="primary">
            Hablemos de tu marca
          </Button>
          <Button href="/servicios" variant="secondary">
            Ver todos los servicios
          </Button>
        </>
      }
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd(service.name, service.description)),
        }}
      />

      <Section surface="white">
        <Container width="wide">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl">Qué es</h2>
              <p className="text-fg-body mt-4 text-lg leading-relaxed">{service.description}</p>
              <h3 className="mt-10 text-xl">Cómo lo producimos</h3>
              <p className="text-fg-secondary mt-3 leading-relaxed">{service.production}</p>
            </div>

            <div>
              <h2 className="text-3xl">Qué recibís</h2>
              <ul className="mt-4 grid gap-2">
                {service.deliverables.map((item) => (
                  <li key={item} className="border-line text-fg-body border-b py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section surface="ink">
        <Container width="wide">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl">Para quién es</h2>
              <ul className="mt-5 space-y-3">
                {service.forWho.map((item) => (
                  <li key={item} className="text-fg-body flex gap-3">
                    <span aria-hidden="true" className="text-accent mt-1 font-mono text-xs">
                      —
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl">Para quién no</h2>
              <ul className="mt-5 space-y-3">
                {service.notForWho.map((item) => (
                  <li key={item} className="text-fg-secondary flex gap-3">
                    <span aria-hidden="true" className="text-fg-muted mt-1 font-mono text-xs">
                      —
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {service.faq.length > 0 ? (
        <Section surface="white">
          <Container width="narrow">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(service.faq)) }}
            />
            <h2 className="text-3xl">Preguntas sobre {service.name}</h2>
            <div className="mt-8">
              {service.faq.map((item) => (
                <details key={item.question} className="border-line group border-b">
                  <summary className="text-fg flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-medium marker:hidden">
                    {item.question}
                    <span
                      aria-hidden="true"
                      className="text-accent shrink-0 text-xl transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="text-fg-secondary pb-5 leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
            <p className="text-fg-secondary mt-8">
              ¿Te quedaron dudas? Mirá{" "}
              <Link href="/faq" className="text-accent underline underline-offset-4">
                todas las preguntas frecuentes
              </Link>
              .
            </p>
          </Container>
        </Section>
      ) : null}

      <Section surface="ink" spacing="tight">
        <Container width="wide">
          <h2 className="text-2xl">Otros servicios</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {otherServices.map((item) => (
              <Link
                key={item.slug}
                href={`/servicios/${item.slug}`}
                className="bg-surface-raised border-line rounded-card hover:border-control block border p-5 transition-colors"
              >
                <span className="text-fg font-medium">{item.name}</span>
                <span className="text-fg-secondary mt-1 block text-sm">{item.tagline}</span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}
