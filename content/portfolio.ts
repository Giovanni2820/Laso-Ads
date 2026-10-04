/**
 * Piezas del portfolio. VACÍO a propósito.
 *
 * El usuario confirmó que hay piezas con permiso para publicar, pero todavía
 * no entregó los archivos ni el detalle de derechos por pieza
 * (docs/decisiones-pendientes.md #10).
 *
 * Mientras el array esté vacío, /portfolio muestra un estado honesto y lleva
 * `noindex`; no se rellena con contenido inventado (CLAUDE.md §4 y §13).
 *
 * Cada pieza requiere todos los campos: sin `rights` confirmado no se publica.
 */

export type ProductionType = "humano" | "ia" | "hibrido";

export interface PortfolioItem {
  id: string;
  title: string;
  /** Marca, o null si no está autorizada a mencionarse. */
  brand: string | null;
  industry: string;
  format: string;
  objective: string;
  style: string;
  production: ProductionType;
  durationSeconds: number;
  videoUrl: string;
  posterUrl: string;
  /** Alcance confirmado de los derechos de uso. Obligatorio. */
  rights: string;
}

export const portfolio: PortfolioItem[] = [];

export const hasPortfolio = portfolio.length > 0;
