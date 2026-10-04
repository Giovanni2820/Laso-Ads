import { home } from "@content/home";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

export function Services() {
  const { services, formats } = home;

  return (
    <Section surface="ink" id="servicios">
      <Container width="wide">
        <p className="eyebrow">{services.eyebrow}</p>
        <h2 className="mt-4 max-w-3xl text-3xl sm:text-5xl">{services.title}</h2>
        <p className="text-fg-body mt-5 max-w-2xl text-lg">{services.intro}</p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.items.map((item) => (
            <article
              key={item.title}
              className="bg-surface-raised border-line rounded-card flex flex-col border p-7"
            >
              <h3 className="text-2xl">{item.title}</h3>
              <p className="text-fg-secondary mt-3 flex-1 leading-relaxed">{item.body}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {item.formats.map((format) => (
                  <li
                    key={format}
                    className="border-line text-fg-body rounded-full border px-3 py-1 font-mono text-xs"
                  >
                    {format}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="border-line mt-14 border-t pt-10">
          <p className="eyebrow">{formats.eyebrow}</p>
          <h3 className="mt-3 text-2xl">{formats.title}</h3>
          <p className="text-fg-secondary mt-3 max-w-2xl">{formats.intro}</p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {formats.items.map((format) => (
              <li
                key={format}
                className="border-control text-fg rounded-control border px-4 py-2 text-sm"
              >
                {format}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <Button href="/servicios" variant="secondary">
            Ver todos los servicios
          </Button>
        </div>
      </Container>
    </Section>
  );
}
