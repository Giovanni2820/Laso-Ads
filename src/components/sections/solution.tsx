import { home } from "@content/home";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export function Solution() {
  const { solution } = home;

  return (
    <Section surface="white" id="como-funciona">
      <Container width="wide">
        <p className="eyebrow">{solution.eyebrow}</p>
        <h2 className="mt-4 max-w-3xl text-3xl sm:text-5xl">{solution.title}</h2>
        <p className="text-fg-body mt-5 max-w-2xl text-lg">{solution.intro}</p>

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {solution.steps.map((step) => (
            <li key={step.number} className="border-line border-t pt-5">
              <span className="text-accent font-mono text-sm font-medium">{step.number}</span>
              <h3 className="mt-3 text-lg">{step.title}</h3>
              <p className="text-fg-secondary mt-2 text-sm leading-relaxed">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
