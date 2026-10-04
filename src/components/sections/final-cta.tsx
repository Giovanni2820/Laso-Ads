import { home } from "@content/home";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  const { finalCta } = home;

  return (
    <Section surface="ink" spacing="loose" id="contacto">
      <Container width="narrow" className="text-center">
        <h2 className="text-3xl sm:text-5xl">{finalCta.title}</h2>
        <p className="text-fg-body mx-auto mt-5 max-w-xl text-lg">{finalCta.body}</p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={finalCta.ctaPrimary.href} variant="primary" size="lg">
            {finalCta.ctaPrimary.label}
          </Button>
          <Button href={finalCta.ctaSecondary.href} variant="secondary" size="lg">
            {finalCta.ctaSecondary.label}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
