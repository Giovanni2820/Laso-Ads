import { home } from "@content/home";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

/**
 * Usa <details>/<summary> nativo: accesible por teclado y lectores de pantalla
 * sin JavaScript ni dependencias extra.
 */
export function Faq() {
  const { faq } = home;

  return (
    <Section surface="white" id="faq">
      <Container width="narrow">
        <p className="eyebrow">{faq.eyebrow}</p>
        <h2 className="mt-4 text-3xl sm:text-5xl">{faq.title}</h2>

        <div className="mt-10">
          {faq.items.map((item) => (
            <details key={item.question} className="border-line group border-b">
              <summary className="text-fg flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-lg font-medium marker:hidden">
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
      </Container>
    </Section>
  );
}
