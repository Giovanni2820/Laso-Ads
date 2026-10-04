import { home } from "@content/home";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { hero } = home;

  return (
    <Section surface="ink" spacing="loose" as="div">
      <Container width="wide">
        <p className="eyebrow">{hero.eyebrow}</p>

        <h1 className="mt-5 max-w-4xl text-4xl sm:text-6xl lg:text-7xl">
          {hero.title} <span className="text-accent">{hero.highlight}</span>
        </h1>

        <p className="text-fg-body mt-6 max-w-2xl text-lg sm:text-xl">{hero.subtitle}</p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button href={hero.ctaPrimary.href} variant="primary" size="lg">
            {hero.ctaPrimary.label}
          </Button>
          <Button href={hero.ctaSecondary.href} variant="secondary" size="lg">
            {hero.ctaSecondary.label}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
