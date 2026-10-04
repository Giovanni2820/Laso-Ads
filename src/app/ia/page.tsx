import { home } from "@content/home";

import { Container } from "@/components/layout/container";
import { PageShell } from "@/components/layout/page-shell";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "UGC con IA: cuándo conviene y cuándo no",
  description:
    "Usamos IA donde da ventaja real de velocidad y volumen, y creadores reales donde la credibilidad humana es el argumento. La comparación honesta.",
  path: "/ia",
});

const comparison = [
  { criterio: "Velocidad", ia: "Días", real: "Semanas: hay que coordinar y grabar" },
  {
    criterio: "Volumen de variantes",
    ia: "Alto, muchas versiones del mismo concepto",
    real: "Limitado por agenda y rodaje",
  },
  { criterio: "Costo por pieza", ia: "Más bajo y predecible", real: "Más alto y variable" },
  {
    criterio: "Credibilidad humana",
    ia: "Buena, pero no es una persona real",
    real: "Es el punto fuerte",
  },
  { criterio: "Demostración física", ia: "Limitada", real: "Sin competencia" },
  { criterio: "Localización a otros mercados", ia: "Directa", real: "Hay que volver a grabar" },
];

export default function IaPage() {
  const { ai } = home;

  return (
    <PageShell
      eyebrow="Inteligencia artificial"
      title="Una herramienta más, no el producto"
      intro={ai.intro}
      actions={
        <Button href="/marcas" variant="primary">
          Hablemos de tu marca
        </Button>
      }
    >
      <Section surface="white">
        <Container width="wide">
          <h2 className="text-3xl">Cuándo usamos cada cosa</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {ai.columns.map((column) => (
              <div key={column.title} className="border-line rounded-card border p-7">
                <h3 className="text-xl">{column.title}</h3>
                <p className="text-fg-secondary mt-2 text-sm">{column.body}</p>
                <ul className="mt-6 space-y-3">
                  {column.items.map((item) => (
                    <li key={item} className="text-fg-body flex gap-3 leading-relaxed">
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
        </Container>
      </Section>

      <Section surface="ink">
        <Container width="wide">
          <h2 className="text-3xl">Cara a cara</h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-xl border-collapse text-left">
              <thead>
                <tr className="border-line border-b">
                  <th scope="col" className="text-fg-muted py-3 pr-4 font-mono text-xs uppercase">
                    Criterio
                  </th>
                  <th scope="col" className="text-fg py-3 pr-4 font-medium">
                    Con IA
                  </th>
                  <th scope="col" className="text-fg py-3 font-medium">
                    Con creadores reales
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.criterio} className="border-line border-b">
                    <th scope="row" className="text-fg-secondary py-4 pr-4 text-sm font-normal">
                      {row.criterio}
                    </th>
                    <td className="text-fg-body py-4 pr-4">{row.ia}</td>
                    <td className="text-fg-body py-4">{row.real}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      <Section surface="sand" spacing="tight">
        <Container width="narrow">
          <h2 className="text-2xl">Lo que no hacemos</h2>
          <p className="text-fg-body mt-4 leading-relaxed">{ai.closing}</p>
          <p className="text-fg-body mt-4 leading-relaxed">
            Tampoco usamos la imagen de personas que no dieron su consentimiento, ni generamos
            testimonios falsos atribuidos a clientes que no existen. Un testimonio es de alguien que
            usó el producto; si no lo hay, producimos otro tipo de pieza.
          </p>
        </Container>
      </Section>
    </PageShell>
  );
}
