import { home } from "@content/home";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export function Problem() {
  const { problem } = home;

  return (
    <Section surface="ink" id="problema">
      <Container width="wide">
        <p className="eyebrow">{problem.eyebrow}</p>
        <h2 className="mt-4 max-w-3xl text-3xl sm:text-5xl">{problem.title}</h2>
        <p className="text-fg-body mt-5 max-w-2xl text-lg">{problem.intro}</p>

        <ul className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-4">
          {problem.items.map((item) => (
            <li key={item.title} className="bg-surface-raised border-line rounded-card border p-6">
              <h3 className="text-lg">{item.title}</h3>
              <p className="text-fg-secondary mt-2 text-sm leading-relaxed">{item.body}</p>
            </li>
          ))}
        </ul>

        <p className="border-accent text-fg mt-12 max-w-3xl border-l-2 pl-6 text-xl sm:text-2xl">
          {problem.closing}
        </p>
      </Container>
    </Section>
  );
}
