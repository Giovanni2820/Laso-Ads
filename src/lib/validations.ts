import { z } from "zod";

/**
 * Un control que el usuario no tocó no viaja en el FormData, así que llega
 * `undefined` y Zod responde con su mensaje genérico en inglés. Lo
 * normalizamos a string vacío para que siempre gane nuestro mensaje.
 */
const text = (missing: string, max: number) =>
  z.preprocess(
    (value) => (typeof value === "string" ? value.trim() : ""),
    z.string().min(1, missing).max(max, "Ese texto es demasiado largo."),
  );

const requiredText = (field: string, max = 200) => text(`Completá ${field}.`, max);

const requiredChoice = (field: string) => text(`Elegí ${field}.`, 100);

const optionalText = (max: number) =>
  z.preprocess(
    (value) => (typeof value === "string" ? value.trim() : ""),
    z.string().max(max, "Ese texto es demasiado largo."),
  );

/** Campos del formulario de marcas (contexto §21, recortado para conversión). */
export const brandLeadSchema = z.object({
  name: requiredText("tu nombre", 120),
  email: z.preprocess(
    (value) => (typeof value === "string" ? value.trim() : ""),
    z.string().min(1, "Completá tu email.").email("Revisá el email, no parece válido."),
  ),
  company: requiredText("el nombre de tu marca", 120),
  website: optionalText(300),
  industry: requiredChoice("tu rubro"),
  adSpend: requiredChoice("tu inversión en pauta"),
  challenge: requiredText("qué estás necesitando", 2000),
  /** Campo trampa: si viene lleno, es un bot. */
  website_url: z.literal("").optional(),
});

export type BrandLeadInput = z.infer<typeof brandLeadSchema>;

/** Campos del formulario de creadores (contexto §6). */
export const creatorApplicationSchema = z.object({
  name: requiredText("tu nombre", 120),
  email: z.preprocess(
    (value) => (typeof value === "string" ? value.trim() : ""),
    z.string().min(1, "Completá tu email.").email("Revisá el email, no parece válido."),
  ),
  phone: requiredText("tu teléfono", 40),
  city: requiredText("tu ciudad y país", 120),
  instagram: requiredText("tu usuario de Instagram", 100),
  tiktok: optionalText(100),
  niches: requiredText("los rubros que te interesan", 300),
  experience: requiredText("tu experiencia", 2000),
  portfolio: optionalText(300),
  equipment: requiredText("con qué grabás", 200),
  website_url: z.literal("").optional(),
});

export type CreatorApplicationInput = z.infer<typeof creatorApplicationSchema>;

export interface FormState {
  status: "idle" | "success" | "error";
  message?: string;
  /** Errores por campo, para mostrarlos junto a cada control. */
  errors?: Record<string, string>;
}
