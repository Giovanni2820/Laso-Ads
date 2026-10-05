import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { AiApproach } from "@/components/sections/ai-approach";
import { Creators } from "@/components/sections/creators";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { PortfolioPreview } from "@/components/sections/portfolio-preview";
import { Problem } from "@/components/sections/problem";
import { Services } from "@/components/sections/services";
import { Solution } from "@/components/sections/solution";

/**
 * Orden de secciones según el contexto maestro §18.
 * Portfolio y Casos todavía no aparecen: no hay piezas cargadas en content/
 * y no se publican bloques sin contenido real (CLAUDE.md §4).
 */
export default function Home() {
  return (
    <>
      <Header />
      <main id="contenido">
        <Hero />
        <Problem />
        <Solution />
        <Services />
        <PortfolioPreview />
        <Creators />
        <AiApproach />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
