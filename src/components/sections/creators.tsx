import { home } from "@content/home";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

export function Creators() {
  const { creators } = home;

  return (
    <Section surface="sand" id="creadores">
      <Container width="wide">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">{creators.eyebrow}</p>
            <h2 className="mt-4 text-3xl sm:text-5xl">{creators.title}</h2>
            <p className="text-fg-body mt-5 text-lg">{creators.body}</p>
            <div className="mt-8">
              <Button href={creators.cta.href} variant="primary">
                {creators.cta.label}
              </Button>
            </div>
          </div>

          <ul className="space-y-5">
            {creators.points.map((point) => (
              <li key={point} className="border-line border-b pb-5 last:border-0">
                <p className="text-fg-body">{point}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
