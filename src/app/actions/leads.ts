"use server";

import type { z } from "zod";

import { brandLeadSchema, creatorApplicationSchema, type FormState } from "@/lib/validations";

/**
 * Destino de los leads: PENDIENTE de decidir (docs/decisiones-pendientes.md #4 y #5).
 *
 * Hasta que haya un destino acordado, la regla del proyecto (CLAUDE.md §5) es:
 * registrar en consola en desarrollo y fallar explícitamente en producción.
 * Nunca simular que el envío funcionó.
 */
function deliver(kind: string, data: Record<string, unknown>): FormState {
  if (process.env.NODE_ENV === "production") {
    console.error(`[${kind}] Sin destino configurado. Lead NO entregado.`);
    return {
      status: "error",
      message:
        "No pudimos registrar tu mensaje por un problema técnico. Escribinos por Instagram mientras lo resolvemos.",
    };
  }

  console.info(`[${kind}] Lead recibido (modo desarrollo, no se envía a ningún lado):`, data);
  return {
    status: "success",
    message: "Recibimos tus datos. Te contactamos a la brevedad.",
  };
}

function toErrors(error: z.ZodError): Record<string, string> {
  const errors: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = issue.path[0];
    if (typeof key === "string" && !errors[key]) {
      errors[key] = issue.message;
    }
  }
  return errors;
}

export async function submitBrandLead(_prev: FormState, formData: FormData): Promise<FormState> {
  const parsed = brandLeadSchema.safeParse(Object.fromEntries(formData));

  if (!parsed.success) {
    return {
      status: "error",
      message: "Revisá los campos marcados.",
      errors: toErrors(parsed.error),
    };
  }

  // Campo trampa relleno: es un bot. Respondemos como si todo hubiera salido bien.
  if (parsed.data.website_url) {
    return { status: "success", message: "Recibimos tus datos." };
  }

  const { website_url: _honeypot, ...lead } = parsed.data;
  return deliver("brand-lead", lead);
}

export async function submitCreatorApplication(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const parsed = creatorApplicationSchema.safeParse(Object.fromEntries(formData));

  if (!parsed.success) {
    return {
      status: "error",
      message: "Revisá los campos marcados.",
      errors: toErrors(parsed.error),
    };
  }

  if (parsed.data.website_url) {
    return { status: "success", message: "Recibimos tu postulación." };
  }

  const { website_url: _honeypot, ...application } = parsed.data;
  return deliver("creator-application", application);
}
