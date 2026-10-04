import { home } from "@content/home";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export function AiApproach() {
  const { ai } = home;

  return (
    <Section surface="ink" id="ia">
      <Container width="wide">
        <p className="eyebrow">{ai.eyebrow}</p>
        <h2 className="mt-4 max-w-3xl text-3xl sm:text-5xl">{ai.title}</h2>
        <p className="text-fg-body mt-5 max-w-2xl text-lg">{ai.intro}</p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {ai.columns.map((column) => (
            <div
              key={column.title}
              className="bg-surface-raised border-line rounded-card border p-7"
            >
              <h3 className="text-xl">{column.title}</h3>
              <p className="text-fg-secondary mt-2 text-sm">{column.body}</p>
              <ul className="mt-6 space-y-3">
                {column.items.map((item) => (
                  <li key={item} className="text-fg-body flex gap-3 text-sm leading-relaxed">
                    <span aria-hidden="true" className="text-accent mt-1 font-mono text-xs">
                      —
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-fg-secondary mt-10 max-w-3xl">{ai.closing}</p>
      </Container>
    </Section>
  );
}
