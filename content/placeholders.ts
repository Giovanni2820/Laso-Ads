/**
 * Datos de ejemplo para poder revisar el diseño antes de tener contenido real.
 *
 * IMPORTANTE: esto NO es contenido. Son marcadores de posición que se ven
 * claramente como tales en pantalla (sin miniatura, con la etiqueta "ejemplo"
 * y sin marca atribuida). No simulan piezas reales ni clientes.
 *
 * Para apagarlos cuando lleguen las piezas de verdad: poner
 * `SHOW_PLACEHOLDERS` en false. Los componentes vuelven solos al estado vacío.
 */
export const SHOW_PLACEHOLDERS = true;

export interface PlaceholderPiece {
  id: string;
  format: string;
  industry: string;
  production: "humano" | "ia" | "hibrido";
  objective: string;
}

/** Combinaciones que reflejan los formatos e industrias reales de la agencia. */
export const placeholderPieces: PlaceholderPiece[] = [
  { id: "p1", format: "UGC IA", industry: "Cosmética", production: "ia", objective: "Conversión" },
  {
    id: "p2",
    format: "UGC IA dinámico",
    industry: "Indumentaria",
    production: "ia",
    objective: "Conversión",
  },
  {
    id: "p3",
    format: "UGC animados",
    industry: "Suplementos",
    production: "hibrido",
    objective: "Reconocimiento",
  },
  {
    id: "p4",
    format: "Broll dinámico",
    industry: "Indumentaria",
    production: "humano",
    objective: "Reconocimiento",
  },
  { id: "p5", format: "Estáticos", industry: "Perfumería", production: "ia", objective: "Oferta" },
  {
    id: "p6",
    format: "Traducciones",
    industry: "Tecnología",
    production: "ia",
    objective: "Expansión",
  },
  {
    id: "p7",
    format: "UGC IA",
    industry: "Gastronomía",
    production: "ia",
    objective: "Conversión",
  },
  {
    id: "p8",
    format: "UGC con creador",
    industry: "Fitness",
    production: "humano",
    objective: "Testimonio",
  },
];

export const placeholderFormats = [...new Set(placeholderPieces.map((p) => p.format))];
export const placeholderIndustries = [...new Set(placeholderPieces.map((p) => p.industry))];
