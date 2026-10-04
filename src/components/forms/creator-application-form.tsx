"use client";

import { useActionState } from "react";

import { submitCreatorApplication } from "@/app/actions/leads";
import { Field, inputClasses } from "@/components/ui/field";
import type { FormState } from "@/lib/validations";

const initialState: FormState = { status: "idle" };

export function CreatorApplicationForm() {
  const [state, formAction, pending] = useActionState(submitCreatorApplication, initialState);

  if (state.status === "success") {
    return (
      <div className="border-line bg-surface-raised rounded-card border p-8" role="status">
        <h2 className="text-2xl">Recibimos tu postulación</h2>
        <p className="text-fg-body mt-3">
          Si tu perfil encaja con alguna marca con la que estemos trabajando, te escribimos.
        </p>
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
        <Field id="c-name" label="Tu nombre" required error={state.errors?.name}>
          <input
            id="c-name"
            name="name"
            type="text"
            autoComplete="name"
            aria-describedby="c-name-error"
            aria-invalid={Boolean(state.errors?.name)}
            className={inputClasses(Boolean(state.errors?.name))}
          />
        </Field>

        <Field id="c-email" label="Email" required error={state.errors?.email}>
          <input
            id="c-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            aria-describedby="c-email-error"
            aria-invalid={Boolean(state.errors?.email)}
            className={inputClasses(Boolean(state.errors?.email))}
          />
        </Field>

        <Field id="c-phone" label="WhatsApp" required error={state.errors?.phone}>
          <input
            id="c-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            aria-describedby="c-phone-error"
            aria-invalid={Boolean(state.errors?.phone)}
            className={inputClasses(Boolean(state.errors?.phone))}
          />
        </Field>

        <Field id="c-city" label="Ciudad y país" required error={state.errors?.city}>
          <input
            id="c-city"
            name="city"
            type="text"
            aria-describedby="c-city-error"
            aria-invalid={Boolean(state.errors?.city)}
            className={inputClasses(Boolean(state.errors?.city))}
          />
        </Field>

        <Field id="c-instagram" label="Instagram" required error={state.errors?.instagram}>
          <input
            id="c-instagram"
            name="instagram"
            type="text"
            placeholder="@tuusuario"
            aria-describedby="c-instagram-error"
            aria-invalid={Boolean(state.errors?.instagram)}
            className={inputClasses(Boolean(state.errors?.instagram))}
          />
        </Field>

        <Field id="c-tiktok" label="TikTok" error={state.errors?.tiktok}>
          <input
            id="c-tiktok"
            name="tiktok"
            type="text"
            placeholder="@tuusuario"
            aria-describedby="c-tiktok-error"
            className={inputClasses(Boolean(state.errors?.tiktok))}
          />
        </Field>

        <Field
          id="c-equipment"
          label="¿Con qué grabás?"
          hint="Modelo de teléfono o cámara."
          required
          error={state.errors?.equipment}
        >
          <input
            id="c-equipment"
            name="equipment"
            type="text"
            aria-describedby="c-equipment-hint c-equipment-error"
            aria-invalid={Boolean(state.errors?.equipment)}
            className={inputClasses(Boolean(state.errors?.equipment))}
          />
        </Field>

        <Field
          id="c-portfolio"
          label="Portfolio"
          hint="Enlace a trabajos previos, si tenés."
          error={state.errors?.portfolio}
        >
          <input
            id="c-portfolio"
            name="portfolio"
            type="text"
            inputMode="url"
            aria-describedby="c-portfolio-hint c-portfolio-error"
            className={inputClasses(Boolean(state.errors?.portfolio))}
          />
        </Field>
      </div>

      <Field
        id="c-niches"
        label="¿Con qué rubros te gustaría trabajar?"
        required
        error={state.errors?.niches}
      >
        <input
          id="c-niches"
          name="niches"
          type="text"
          placeholder="Belleza, indumentaria, gastronomía..."
          aria-describedby="c-niches-error"
          aria-invalid={Boolean(state.errors?.niches)}
          className={inputClasses(Boolean(state.errors?.niches))}
        />
      </Field>

      <Field
        id="c-experience"
        label="Contanos tu experiencia"
        hint="No hace falta que tengas experiencia en UGC. Contanos qué hacés y por qué te interesa."
        required
        error={state.errors?.experience}
      >
        <textarea
          id="c-experience"
          name="experience"
          rows={5}
          aria-describedby="c-experience-hint c-experience-error"
          aria-invalid={Boolean(state.errors?.experience)}
          className={inputClasses(Boolean(state.errors?.experience))}
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

      <p className="text-fg-muted text-sm">
        Usamos tus datos solo para evaluar tu perfil y contactarte. No los compartimos con terceros
        sin tu permiso.
      </p>

      <button
        type="submit"
        disabled={pending}
        className="bg-accent text-on-accent hover:bg-accent-hover rounded-control min-h-12 px-6 font-medium transition-colors disabled:opacity-50"
      >
        {pending ? "Enviando..." : "Enviar postulación"}
      </button>
    </form>
  );
}
