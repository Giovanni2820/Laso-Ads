# Laso ADS — web

Sitio comercial de Laso ADS, agencia de creativos UGC para marcas que pautan.

Antes de tocar el código, leer **[CLAUDE.md](CLAUDE.md)**: define el contexto de negocio, las reglas de diseño y desarrollo, y qué no se hace sin consultar.

## Puesta en marcha

```bash
npm install
npm run dev
```

El sitio queda en `http://localhost:3000`. La referencia visual del sistema de diseño está en `/estilo` (no se indexa).

## Scripts

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run typecheck` | TypeScript sin emitir |
| `npm run lint` | ESLint |
| `npm run format` | Prettier sobre todo el repo |
| `npm run format:check` | Verifica formato sin escribir |

Antes de dar por terminado un cambio: `typecheck`, `lint` y `build` tienen que pasar.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript** en modo estricto
- **Tailwind CSS v4** con tokens en CSS (`src/app/globals.css`)
- `clsx` + `tailwind-merge` (helper `cn`) y `class-variance-authority` para variantes
- Prettier con `prettier-plugin-tailwindcss`

## Cómo funciona el color

El sistema tiene **tres superficies**. Cada sección declara la suya y todo lo que está adentro hereda los tokens:

```tsx
<Section surface="ink">   {/* hero, cierres, footer */}
<Section surface="sand">  {/* cuerpo, servicios, FAQ */}
<Section surface="white"> {/* portfolio, formularios */}
```

Dentro se usan utilidades semánticas: `bg-surface`, `text-fg`, `text-fg-body`, `text-accent`, `border-line`, `border-control`. **Ningún componente escribe un hex de marca directamente**, porque el azul cambia de tono según el fondo (`#0A2F80` sobre claro, `#5B85F0` sobre oscuro — el primero sobre negro da 1,62:1 y es ilegible).

Paleta completa, contrastes medidos y combinaciones prohibidas: [`docs/identidad-visual.md`](docs/identidad-visual.md).

## Estructura

```
content/      copy y datos, separados de la UI
src/app/      rutas (App Router)
src/components/
  ui/         primitivos sin conocimiento del negocio
  layout/     Container, Section
src/lib/      utilidades
docs/         identidad, decisiones, análisis
```

## Documentación

| Archivo | Contenido |
|---|---|
| [CLAUDE.md](CLAUDE.md) | Contexto de negocio y reglas de trabajo |
| [docs/identidad-visual.md](docs/identidad-visual.md) | Paleta, tokens, contrastes |
| [docs/mapa-servicios.md](docs/mapa-servicios.md) | Arquitectura de servicios (propuesta) |
| [docs/decisiones-pendientes.md](docs/decisiones-pendientes.md) | Qué falta decidir |
| [docs/analisis-referencia.md](docs/analisis-referencia.md) | Análisis de la competencia |

## Nota sobre `npm audit`

`npm audit` reporta 5 vulnerabilidades *high* en la cadena `eslint-config-next → @next/eslint-plugin-next → fast-glob → micromatch → braces`.

Se dejan sin corregir a propósito:

- Son **devDependencies del linter**: no entran al bundle que se sirve al navegador.
- **No hay parche upstream**: `braces` y `micromatch` ya están en su última versión publicada.
- El único "fix" que ofrece npm es bajar `eslint-config-next` de 16 a 14, incompatible con Next 16.
- El vector es denegación de servicio al procesar patrones glob anidados, que acá los escribe quien corre el linter.

Revisar cuando Next publique una versión del plugin con la cadena actualizada.
