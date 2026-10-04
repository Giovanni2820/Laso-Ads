"use client";

import { useActionState } from "react";

import { submitBrandLead } from "@/app/actions/leads";
import { Field, inputClasses } from "@/components/ui/field";
import type { FormState } from "@/lib/validations";

const initialState: FormState = { status: "idle" };

const industries = [
  "Ecommerce",
  "Belleza y cosmética",
  "Indumentaria",
  "Suplementos y nutrición",
  "Tecnología",
  "Apps y SaaS",
  "Gastronomía",
  "Hogar",
  "Fitness y wellness",
  "Educación",
  "Otro",
];

const spendRanges = [
  "Todavía no invierto",
  "Menos de USD 1.000 por mes",
  "USD 1.000 a 5.000 por mes",
  "USD 5.000 a 20.000 por mes",
  "Más de USD 20.000 por mes",
];

export function BrandLeadForm() {
  const [state, formAction, pending] = useActionState(submitBrandLead, initialState);

  if (state.status === "success") {
    return (
      <div className="border-line bg-surface-raised rounded-card border p-8" role="status">
        <h2 className="text-2xl">Listo, recibimos tus datos</h2>
        <p className="text-fg-body mt-3">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="grid gap-4">
      {state.status === "error" && state.message ? (
        <p role="alert" className="border-danger text-danger rounded-control border px-4 py-3">
          {state.message}
        </p>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="name" label="Tu nombre" required error={state.errors?.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            aria-describedby="name-error"
            aria-invalid={Boolean(state.errors?.name)}
            className={inputClasses(Boolean(state.errors?.name))}
          />
        </Field>

        <Field id="email" label="Email" required error={state.errors?.email}>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            aria-describedby="email-error"
            aria-invalid={Boolean(state.errors?.email)}
            className={inputClasses(Boolean(state.errors?.email))}
          />
        </Field>

        <Field id="company" label="Tu marca" required error={state.errors?.company}>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            aria-describedby="company-error"
            aria-invalid={Boolean(state.errors?.company)}
            className={inputClasses(Boolean(state.errors?.company))}
          />
        </Field>

        <Field id="website" label="Web o Instagram" error={state.errors?.website}>
          <input
            id="website"
            name="website"
            type="text"
            inputMode="url"
            aria-describedby="website-error"
            className={inputClasses(Boolean(state.errors?.website))}
          />
        </Field>

        <Field id="industry" label="Rubro" required error={state.errors?.industry}>
          <select
            id="industry"
            name="industry"
            defaultValue=""
            aria-describedby="industry-error"
            aria-invalid={Boolean(state.errors?.industry)}
            className={inputClasses(Boolean(state.errors?.industry))}
          >
            <option value="" disabled>
              Elegí una opción
            </option>
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </Field>

        <Field id="adSpend" label="Inversión en pauta" required error={state.errors?.adSpend}>
          <select
            id="adSpend"
            name="adSpend"
            defaultValue=""
            aria-describedby="adSpend-error"
            aria-invalid={Boolean(state.errors?.adSpend)}
            className={inputClasses(Boolean(state.errors?.adSpend))}
          >
            <option value="" disabled>
              Elegí una opción
            </option>
            {spendRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field
        id="challenge"
        label="¿Qué estás necesitando?"
        hint="Contanos qué vendés y qué problema tenés hoy con tus creativos."
        required
        error={state.errors?.challenge}
      >
        <textarea
          id="challenge"
          name="challenge"
          rows={5}
          aria-describedby="challenge-hint challenge-error"
          aria-invalid={Boolean(state.errors?.challenge)}
          className={inputClasses(Boolean(state.errors?.challenge))}
        />
      </Field>

      <input
        type="text"
        name="website_url"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-px w-px opacity-0"
      />

      <button
        type="submit"
        disabled={pending}
        className="bg-accent text-on-accent hover:bg-accent-hover rounded-control min-h-12 px-6 font-medium transition-colors disabled:opacity-50"
      >
        {pending ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}
