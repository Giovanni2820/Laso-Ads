# CLAUDE.md — Laso ADS · Web de agencia UGC / Creative Factory

Este archivo define el contexto, las reglas y los límites para trabajar en este proyecto.
Leelo completo antes de tocar cualquier archivo. Si algo acá contradice una instrucción del usuario en el chat, gana el usuario; si contradice algo que encontrás en la web de referencia, gana este archivo.

**Fuente completa de estrategia:** `CONTEXTO MAESTRO DEL PROYECTO — AGENCIA UGC.docx` (42 secciones). Este CLAUDE.md es un resumen operativo; ante cualquier duda de negocio, el `.docx` manda. No se modifica ni se borra.

**Documentos de apoyo:**
- `docs/identidad-visual.md` — **paleta, tokens por superficie y contrastes verificados. De lectura obligatoria antes de escribir cualquier estilo.**
- `docs/mapa-servicios.md` — reconciliación entre los servicios que se venden hoy y la arquitectura de la web.
- `docs/analisis-referencia.md` — análisis de tryugcstudio.com (HECHO / INTERPRETACIÓN / RECOMENDACIÓN).
- `docs/decisiones-pendientes.md` — lista viva de decisiones abiertas y mapa de rutas v1.

---

## 1. Contexto del negocio

**Laso ADS** es una agencia de UGC (User Generated Content) en construcción, orientada a marcas que venden online y necesitan producir creativos publicitarios de forma rápida, constante y escalable.

### Idea central: Creative Factory, no "agencia de videos"

El producto no es "un video". El producto es **la capacidad de una marca de producir y testear muchos creativos**.

Flujo conceptual: `MARCA → BRIEF → ESTRATEGIA CREATIVA → CONCEPTOS → HOOKS → GUIONES → CREADORES / IA → PRODUCCIÓN → EDICIÓN → VARIANTES → TESTING → ITERACIÓN`

Principio rector (no necesariamente literal en la web): *"No vendemos videos. Construimos un sistema para producir y testear creativos."*

### Problema que resolvemos

Las marcas que invierten en Meta Ads / TikTok Ads necesitan creativos nuevos constantemente. Sufren: fatiga creativa, creativos que dejan de funcionar, poco volumen, producción lenta y cara, dependencia de un solo creador, pocos hooks y conceptos, equipos saturados, necesidad de testear antes de escalar presupuesto.

Mensaje central: **el problema no es tener contenido; es tener suficientes creativos para testear.**

### Modelo híbrido: creadores reales + IA

- **UGC humano**: autenticidad, confianza, demostraciones, testimonios, storytelling.
- **UGC / creative con IA**: velocidad, volumen, variantes, localización, iteración.
- La IA es una herramienta importante pero **no es el producto principal** ni se vende como "solución mágica". Se usa donde aporta ventaja real de velocidad, costo, volumen, experimentación o personalización.
- Propuesta: `CREADORES REALES + IA + PRODUCCIÓN + ESTRATEGIA`.

### Creative testing (concepto comercial clave)

No se vende "10 videos" sino "10 oportunidades de encontrar un creativo ganador". Ejemplo conceptual: 1 producto → 5 conceptos → 10 hooks → 3 creadores → 30 variantes → testing. Ángulos: problema/solución, before/after, testimonial, unboxing, demo, storytelling, POV, comparación, listicle, etc.

### UGC ≠ influencer marketing

No dependemos del tamaño de audiencia del creador. Importan: autenticidad, capacidad frente a cámara, credibilidad, hooks, demostración de producto, seguimiento de briefs, calidad, performance potencial como anuncio.

### Servicios

**Formatos que se producen y venden hoy** (HECHO, observado en el feed de Instagram el 2026-09-26): broll dinámico · estáticos · traducciones · UGC animados · UGC IA · UGC IA dinámico.

**Modos de compra** (estructura comercial, del contexto §10): UGC para Ads · Creative Testing · Creative Factory · Creativos complementarios.

Son **dos ejes distintos**: los formatos son lo que el cliente recibe; los modos de compra son cómo contrata. La reconciliación propuesta está en `docs/mapa-servicios.md` y hay que respetarla al construir `/servicios`.

**Gestión de pauta (Meta Ads):** se ofrece solo a algunos clientes. Es servicio complementario — se menciona, no protagoniza, y nunca con promesas de resultado de campaña.

### Paquetes (HIPÓTESIS — sección 11; sin precios)

STARTER (~5 creativos) · GROWTH (~15) · CREATIVE FACTORY (30–50+/mes). **No hay precios definidos. No se publican precios.**

### Cliente ideal (ICP)

Marca que ya tiene producto, oferta, landing/ecommerce, invierte en paid media, entiende performance, necesita creativos nuevos, tiene presupuesto y quiere escalar. **No** es ICP quien no validó producto, no tiene presupuesto ni oferta clara, o espera que el UGC resuelva todo solo.

Verticales posibles: ecommerce, beauty, skincare, fashion, food, fitness, apps, SaaS, consumer products, home, lifestyle, educación, servicios digitales. Ningún nicho está confirmado como prioritario.

### Propuesta de valor

VELOCIDAD · VOLUMEN · VARIEDAD · TESTING · ESCALABILIDAD · EFICIENCIA. La diferenciación está en **el sistema** (UGC + estrategia + IA + velocidad + volumen + testing), no en "tenemos mejores creadores".

### Etapas del negocio

1. Agencia UGC (vender y producir manualmente) → 2. UGC + Creative Strategy → 3. Creative Testing → 4. Creative Factory (retainers mensuales) → 5. Sistema escalable (creadores + IA + automatización).

Principio de validación: `VALIDAR → VENDER → PRODUCIR → MEDIR → AUTOMATIZAR`. No construir plataformas antes de tener clientes.

### Embudo comercial objetivo

`LANDING → FORMULARIO → CALIFICACIÓN → CALL / SESIÓN DE ESTRATEGIA → AUDITORÍA / DIAGNÓSTICO → PROPUESTA → PRODUCCIÓN → RETENCIÓN MENSUAL`. Lead magnets posibles (hipótesis): Creative Audit, Free Creative Strategy (5 conceptos), Creative Testing Plan (30 días).

### Segundo embudo: creadores

Landing propia para captar creadores (qué es UGC, qué buscamos, cómo funciona, cómo se paga, formulario con video de presentación). No asumir que los creadores tienen audiencia grande. Base de talento futura categorizada por edad, ubicación, idioma, nicho, estilo, equipamiento, disponibilidad, tarifas, etc.

### Mercado

Inicial: **Argentina / LATAM**. No está decidido si conviene vender también a México, Colombia, Chile, Uruguay, España o EE. UU. La v1 de la web es en **español rioplatense (voseo)**.

### Tono de marca

Moderno, tecnológico, directo, comercial, creativo, confiable, performance-oriented. **Sin**: lenguaje corporativo, agencia aburrida, exceso de emojis, promesas exageradas, humo, "revolucionamos el mundo", claims sin evidencia.

### Presencia actual

Instagram: [@laso.ecomads](https://www.instagram.com/laso.ecomads) — "Laso Ads | Gerencia de Anuncios". Contacto actual vía grupo de WhatsApp enlazado en la bio. Destacadas: portafolio, clientes, políticas.

**Tensión detectada (2026-09-26), a resolver con el usuario:** la bio de Instagram promete resultados de venta ("creativos con IA que venden (y mucho)", "máxima conversión"). El contexto maestro (§25, §31, §36) prohíbe ese tipo de claim. En la web se sostiene la promesa en **volumen, velocidad y variedad**, que sí se pueden cumplir y demostrar. No se trasladan los claims de venta sin datos que los respalden.

### Estado actual (2026-09-26)

- Nombre definitivo: **Laso ADS**. Logo existente: wordmark "laso" en blanco sobre círculo negro, con bajada "creativos argentina · diseño gráfico". Falta la versión vectorial (SVG).
- **Identidad visual aprobada:** dirección "Contraste por bloques" (tinta + crema + azul de marca). Paleta completa y tokens en `docs/identidad-visual.md`.
- Tipografía: propuesta, pendiente de validar con muestras.
- Dominio: pendiente.
- **Hay piezas y clientes con permiso para publicar** → el portfolio se construye con contenido real, no como plantilla vacía. Faltan los archivos.
- Sin métricas ni testimonios verificados: esos bloques siguen sin renderizarse hasta tener datos.
- Sin precios definidos.
- Sin código: el proyecto está en fase de preparación.

---

## 2. Objetivo del proyecto

Construir la web comercial de Laso ADS con identidad propia, tomando a UGC Studio como referencia conceptual (no visual ni textual).

La web debe lograr que un potencial cliente piense, en este orden:
1. *"Esta empresa entiende que necesito creativos constantemente."*
2. *"Quiero ver qué podrían producir para mi marca."*
3. *"Quiero hablar con ellos."*

La web **no** debe explicar absolutamente todo. Debe: captar atención → explicar el problema → presentar la solución → demostrar capacidad → reducir objeciones → generar acción.

### Alcance v1 (decidido por el usuario)

Arquitectura completa de la sección 17 del contexto: Home, Servicios (índice + subpáginas), Portfolio, Casos, Para marcas, Creadores, IA, FAQ, Contacto, Gracias, legales. Detalle de rutas en `docs/decisiones-pendientes.md`.

La cantidad y el recorte de las subpáginas de servicios está en revisión: ver la propuesta en `docs/mapa-servicios.md` (4 en vez de 5, pendiente de aprobación).

**Portfolio:** hay piezas con permiso para publicar, así que se construye con contenido real y entra al menú. **Casos:** sigue como plantilla alimentada por datos, con estado vacío honesto y fuera del menú hasta tener un caso completo y autorizado. Ninguna de las dos se rellena con contenido inventado.

### Fuera de alcance v1

Blog/recursos con contenido (solo la ruta preparada), panel de clientes, sistema de créditos, base de datos de creadores, CMS, i18n (la estructura de contenido debe permitir agregar inglés después), pricing público.

### Criterio para priorizar cualquier propuesta

Preguntarse: ¿ayuda a vender más UGC? ¿a producir más rápido? ¿a producir más variantes? ¿a testear mejor? ¿a escalar la operación? Si la respuesta es NO a todas, probablemente no es prioritario. **El objetivo no es una web bonita; es un negocio de producción creativa escalable.**

---

## 3. Referencias

### Referencia principal: UGC Studio

- Home: https://tryugcstudio.com/
- Reclutamiento: https://reclutamiento.tryugcstudio.com/ (mismo contenido que `/reclutamiento`)
- Otras públicas: `/galeria`, `/agenda`, `/casos/smellbox`, `/ugc-ia-vs-ugc-real`, `/como-funciona-la-app`, `/reclutamiento/creador`, `/privacidad`, `/terminos`.

Es referencia de **negocio, estructura, posicionamiento, embudo y experiencia digital**. Análisis completo en `docs/analisis-referencia.md`.

### Regla obligatoria al usar la referencia (sección 38 del contexto)

Separar siempre y no mezclar:
- **HECHO** — lo que efectivamente aparece en la web.
- **INTERPRETACIÓN** — lo que creemos que significa comercialmente.
- **RECOMENDACIÓN** — lo que podríamos adaptar a Laso ADS.

### Qué NO se copia de UGC Studio (ni de nadie)

- Textos, titulares, nombres de servicios/formatos, estructura literal de FAQ.
- Logo, imágenes, videos, reseñas y layout literal.
- ~~Tipografías DM Sans / JetBrains Mono~~ — **el usuario decidió el 2026-10-04 usarlas igual.** Son de Google Fonts, licencia abierta, no son propiedad de UGC Studio. Ver `docs/identidad-visual.md` §1.
- Código, componentes, animaciones, imágenes, videos, reseñas, logos de clientes.
- Claims ("N°1", "+600 marcas") ni su modelo de negocio literal (avatares IA como núcleo, créditos, plataforma).
- Su cláusula de cesión de derechos indefinida en el formulario de creadores.

Si un patrón de la referencia se adapta, se reescribe desde nuestra propuesta de valor. Ante la duda, no se usa.

---

## 4. Reglas de diseño

- **Identidad vigente (2026-10-04): oscuro dominante.** Definición completa, tokens y contrastes en `docs/identidad-visual.md`. Resumen:
  - Azul muy oscuro `#0A0E16` como superficie dominante · Blanco `#FFFFFF` para portfolio y formularios · Crema `#EDE8E2` para bloques puntuales, uso mínimo.
  - Azul de marca con **dos tonos según superficie**: `#0A2F80` sobre claro, `#5B85F0` sobre oscuro. **`#0A2F80` sobre cualquier fondo oscuro está prohibido** (~1,6:1).
  - El logo va blanco sobre oscuro, con el wordmark suelto, sin el círculo negro del avatar.
- **Tokens primero, por superficie.** Cada sección declara `data-surface` (`ink` | `white` | `sand`) y los componentes heredan `var(--accent)`, `var(--text-primary)`, `var(--border-control)`, etc. **Ningún componente escribe un hex de marca directamente.** Colores, tipografía, espaciado y radios viven como tokens (`@theme` de Tailwind v4 en `src/app/globals.css`).
- **Tipografía: DM Sans + JetBrains Mono.** Decisión del usuario del 2026-10-04. Son las mismas familias que usa la referencia; son de Google Fonts con licencia abierta, así que es legítimo. El usuario sabe que coinciden y eligió avanzar igual para ver el proyecto terminado, con intención de diferenciarlo después. **Revisar antes de publicar; no volver a plantearlo en cada tarea.**
- **Jerarquía de mensaje:** cliente → problema → solución → resultado esperado → nosotros. La home no empieza hablando de la agencia.
- **Mobile-first.** El formato principal del contenido es video vertical 9:16; el diseño debe lucirlo bien en móvil antes que en desktop.
- **Sin relleno.** Nada de imágenes de stock genéricas, lorem ipsum, logos falsos, testimonios inventados ni contadores sin datos. Un bloque sin datos reales no se renderiza.
- **Prueba social condicionada.** Testimonios, logos, casos, métricas y portfolio se muestran solo si hay datos en `content/`.
- **Movimiento con criterio.** Animaciones sutiles, nunca decorativas por sí mismas; siempre respetar `prefers-reduced-motion`.
- **Legibilidad:** contraste AA mínimo, cuerpo de texto ≥ 16px, párrafos de 60–75 caracteres por línea.
- **Un CTA primario por vista** (hablar/agendar) y uno secundario de baja fricción (ver ejemplos / recibir conceptos por email). No competir con tres botones iguales.
- **Estados completos:** cada componente interactivo define hover, focus-visible, active, disabled, loading, error y vacío.
- **Consistencia:** un mismo patrón (card, sección, botón) se ve igual en toda la web. Antes de crear un componente nuevo, revisar si ya existe uno.

---

## 5. Reglas de desarrollo

- **Stack fijado:** Next.js (App Router) + TypeScript + Tailwind CSS v4, hosting en Vercel. No se cambia sin consultar. Versiones exactas se verifican al inicializar (no se asumen de memoria).
- **TypeScript strict.** Sin `any`, sin `// @ts-ignore`, sin `as unknown as`. Tipos explícitos en props, datos de contenido y respuestas de acciones.
- **Server Components por defecto.** `"use client"` solo cuando hay interactividad real (formularios, acordeones, filtros, reproductor). Mantener los client components pequeños y en las hojas del árbol.
- **Sin dependencias sin justificar.** Antes de instalar algo, explicar qué resuelve y por qué no se hace con lo que ya hay. Dependencias grandes (UI kits, CMS, analítica, estado global) requieren consulta.
- **Sin secretos en el repo.** Todo va en variables de entorno; `.env.example` se mantiene actualizado con cada variable nueva (sin valores reales).
- **Formularios:** validación con Zod compartida entre cliente y servidor; Server Actions; anti-spam (honeypot + rate limit mínimo); nunca confiar en datos del cliente.
- **Datos de leads:** solo se envían a los destinos acordados con el usuario. Sin destino acordado, la acción registra en consola en desarrollo y falla explícitamente en producción (nunca "parece que funciona").
- **Contenido fuera de los componentes.** Copy, FAQ, servicios, pasos, nichos y datos de portfolio viven en `content/`. Un componente recibe datos, no los contiene.
- **Build siempre verde.** `npm run build`, `lint` y `typecheck` deben pasar antes de dar algo por terminado. Si algo falla, se reporta con el output real.
- **Commits:** mensajes convencionales (`feat:`, `fix:`, `chore:`, `docs:`, `refactor:`), en español o inglés pero consistentes. Commits pequeños y atómicos. No se hace `push` sin pedirlo el usuario.
- **Rendimiento:** presupuesto inicial — JS de cliente por página < 150 kB gz, LCP < 2,5 s en móvil, sin layout shift por fuentes o imágenes sin dimensiones.
- **Errores:** páginas `not-found.tsx` y `error.tsx` con el mismo sistema de diseño; nunca una pantalla en blanco.

---

## 6. Estructura del proyecto

```
Laso ADS/                          # raíz (nombre de carpeta existente)
├── CLAUDE.md
├── README.md
├── .env.example
├── package.json · tsconfig.json · next.config.ts · postcss.config.mjs
├── CONTEXTO MAESTRO DEL PROYECTO — AGENCIA UGC.docx   # NO tocar
├── docs/                          # análisis, decisiones, ADR ligeros
├── public/                        # favicon, og-image, imágenes estáticas, videos livianos
├── content/                       # copy y datos (sin CMS)
│   ├── site.ts                    # nombre, tagline, redes, contacto, URLs
│   ├── navigation.ts              # menú (incluye lógica "ocultar si sin datos")
│   ├── home.ts                    # copy de cada sección de la home
│   ├── services.ts                # 5 servicios: copy + estructura para ServicePageTemplate
│   ├── process.ts · faq.ts · niches.ts · hooks.ts
│   ├── portfolio.ts               # [] hasta tener piezas reales
│   ├── cases/                     # MDX; vacío hasta tener casos reales
│   └── recursos/                  # MDX; artículos futuros
└── src/
    ├── app/
    │   ├── layout.tsx · page.tsx · globals.css · not-found.tsx · error.tsx
    │   ├── servicios/page.tsx
    │   ├── servicios/{ugc-ads,creative-testing,ai-ugc,creative-factory,creator-sourcing}/page.tsx
    │   ├── portfolio/page.tsx
    │   ├── casos/page.tsx · casos/[slug]/page.tsx
    │   ├── marcas/page.tsx
    │   ├── creadores/page.tsx
    │   ├── ia/page.tsx
    │   ├── faq/page.tsx
    │   ├── contacto/page.tsx
    │   ├── gracias/page.tsx
    │   ├── privacidad/page.tsx · terminos/page.tsx
    │   ├── recursos/[slug]/page.tsx        # preparada, sin contenido
    │   ├── sitemap.ts · robots.ts · opengraph-image.tsx
    │   └── actions/                        # Server Actions (submitBrandLead, submitCreatorApplication)
    ├── components/
    │   ├── ui/                    # primitivos: Button, Input, Select, Textarea, Accordion, Dialog, Tabs, Badge…
    │   ├── layout/                # Header, Footer, Container, Section, MobileNav, SkipLink
    │   ├── sections/              # Hero, Problem, Solution, Process, Services, Creators, AI, FAQ, CTA, LeadMagnet…
    │   ├── portfolio/             # VideoCard, VideoGrid, Filters, VideoPlayer
    │   ├── forms/                 # BrandLeadForm, CreatorApplicationForm, VideoUpload
    │   └── templates/             # ServicePageTemplate, CasePageTemplate
    ├── lib/                       # utils, validaciones (zod), email, analytics, seo, content loaders
    └── styles/                    # tokens de diseño
```

Mapa de rutas v1 con propósito y estado de contenido: `docs/decisiones-pendientes.md`.

---

## 7. Convenciones de código

- **Idioma:** código, nombres de archivos, variables, componentes y comentarios técnicos en **inglés**. Contenido, copy, URLs y textos visibles en **español rioplatense**.
- **Archivos:** `kebab-case` (`brand-lead-form.tsx`, `use-media-query.ts`). Un componente exportado por archivo, con el mismo nombre que el archivo en `PascalCase`.
- **Componentes:** `PascalCase`. Funciones, hooks y variables: `camelCase`. Hooks empiezan con `use`. Constantes de configuración: `UPPER_SNAKE_CASE` solo si son verdaderamente constantes globales.
- **Props:** siempre tipadas con `interface XxxProps`. Sin props booleanas ambiguas (`isOpen` mejor que `open` cuando hay riesgo de confusión con el atributo HTML).
- **Exports:** named exports; `default export` solo donde Next.js lo exige (`page.tsx`, `layout.tsx`, etc.).
- **Imports:** alias `@/` para `src/` y `@content/` para `content/`. Orden: react/next → librerías → internos → tipos → estilos.
- **Estilos:** clases de Tailwind directamente en JSX; `cn()` (clsx + tailwind-merge) para condicionales; `cva` para variantes. Sin CSS modules ni styled-components. CSS global solo para tokens, reset y utilidades de fuentes.
- **Contenido:** los archivos de `content/` exportan objetos tipados (`satisfies` contra un tipo definido en `src/lib/content-types.ts`). Nunca strings sueltos en componentes salvo `aria-label` técnicos.
- **Rutas y slugs:** en español, minúsculas, con guiones, sin acentos (`/servicios/creative-testing`, `/creadores`).
- **Comentarios:** solo cuando explican un *porqué* no evidente. Nada de comentarios que repiten el código.
- **Formato:** Prettier con configuración del repo; ESLint sin warnings ignorados.

---

## 8. Reglas para componentes

- **Tres capas:** `ui/` (primitivos sin conocimiento del negocio) → `sections/` y `templates/` (componen primitivos con datos de `content/`) → `app/` (páginas que solo cargan contenido y arman secciones). Sin lógica de negocio en `ui/`.
- **Primitivos accesibles:** se basan en Radix (vía shadcn/ui) copiados al repo, adaptados a los tokens propios. No se reimplementan acordeones, diálogos, selects ni tabs a mano.
- **Composición sobre configuración:** preferir `children` y slots a componentes con 15 props booleanas.
- **Variantes con `cva`:** `variant`, `size`, `tone` definidas en un solo lugar por componente.
- **Estados vacíos obligatorios:** todo componente que recibe listas (portfolio, casos, testimonios, FAQ) define qué pasa con `[]`. Regla: si es prueba social, no se renderiza; si es contenido estructural, muestra un estado vacío honesto.
- **Sin efectos secundarios en render.** Carga de contenido en Server Components o loaders de `lib/`; nunca en `useEffect` para datos estáticos.
- **Responsive dentro del componente,** no en la página que lo usa. Un `Section` sabe cómo apilarse en móvil.
- **Nombres por rol, no por apariencia:** `HeroSection`, `ProcessSteps`, `LeadMagnetForm`; no `BigBlueBox`.
- **Tamaño:** si un componente supera ~150 líneas o mezcla dos responsabilidades, se divide.
- **Documentación mínima:** cada sección exporta su tipo de datos de entrada. No se necesita Storybook en v1.

---

## 9. Criterios de responsive design

- **Mobile-first:** se escribe primero el estilo base (móvil) y se agregan breakpoints hacia arriba (`sm:`, `md:`, `lg:`, `xl:`).
- **Breakpoints de Tailwind por defecto** (640 / 768 / 1024 / 1280 / 1536). No agregar breakpoints custom sin consultar.
- **Viewports de prueba obligatorios:** 360, 390, 768, 1024, 1440. Se revisa cada página nueva en al menos 360, 768 y 1440 antes de darla por terminada.
- **Sin scroll horizontal** en ningún viewport. Contenedor con `max-width` y `padding-inline` de 16px mínimo en móvil.
- **Targets táctiles ≥ 44×44 px** en botones, enlaces del menú, controles de video y filtros.
- **Tipografía fluida** con `clamp()` en títulos; cuerpo entre 16 y 18px.
- **Video vertical 9:16** es el caso principal: grillas de 2 columnas en móvil, 3–5 en desktop; nunca deformar el aspect ratio.
- **Menú móvil** accesible (Dialog/Sheet con foco atrapado, cierre con Escape, botón con `aria-expanded`).
- **Imágenes con `sizes` correctos** para no descargar versiones de desktop en móvil.
- **Formularios en una columna** en móvil; inputs a ancho completo; teclado apropiado (`inputMode`, `type="email"`, `type="tel"`).
- **Nada depende de hover** para ser usable (los filtros y CTAs funcionan por tap y teclado).

---

## 10. Reglas de accesibilidad

Objetivo: **WCAG 2.2 nivel AA**.

- **Contraste:** texto normal ≥ 4.5:1, texto grande ≥ 3:1, componentes de UI y foco ≥ 3:1. Se verifica al definir la paleta, no al final.
- **Foco visible** en todo elemento interactivo (`focus-visible` con anillo claro, nunca `outline: none` sin reemplazo).
- **Navegación por teclado completa:** Tab en orden lógico, Escape cierra diálogos y menús, Enter/Espacio activan, flechas en tabs y acordeones (lo resuelven los primitivos de Radix).
- **Skip link** al contenido principal como primer elemento enfocable.
- **Landmarks:** `header`, `nav`, `main`, `footer`; una única `<h1>` por página y jerarquía de headings sin saltos.
- **Imágenes:** `alt` descriptivo; `alt=""` si es decorativa. Nunca texto importante dentro de imágenes.
- **Videos:** subtítulos siempre (el UGC para ads se consume sin audio); sin autoplay con sonido; controles accesibles; `poster` obligatorio; respetar `prefers-reduced-motion` para autoplay silencioso.
- **Formularios:** cada input con `<label>` asociado; errores vinculados con `aria-describedby` y anunciados (`aria-live`); mensajes de error claros y en español; no depender solo del color para indicar error.
- **Movimiento:** cualquier animación se desactiva o reduce con `prefers-reduced-motion: reduce`.
- **Idioma:** `<html lang="es-AR">`.
- **Verificación:** axe (Playwright + `@axe-core/playwright`) sin violaciones críticas ni serias en cada página; revisión manual con teclado en las páginas con formularios.

---

## 11. Reglas SEO

- **Metadata por ruta** con la API `metadata` / `generateMetadata` de Next.js: `title` (≤ 60 caracteres, con "Laso ADS"), `description` (≤ 155), `canonical`, Open Graph y Twitter cards.
- **Una `<h1>` por página** que contenga la intención principal (p. ej. "creativos UGC para Meta Ads", "creative testing"), sin keyword stuffing.
- **URLs en español**, cortas, estables, sin acentos ni mayúsculas. No se renombran rutas publicadas sin redirección 301.
- **`sitemap.ts` y `robots.ts`** generados desde la lista de rutas; las páginas con estado vacío (portfolio/casos sin datos) se excluyen del sitemap y llevan `noindex` hasta tener contenido.
- **JSON-LD:** `Organization` (con `sameAs` a redes cuando existan) en el layout; `FAQPage` en `/faq` y en la sección FAQ de la home; `Service` en cada subpágina de servicios; `Article` en `/recursos/[slug]`; `VideoObject` en piezas de portfolio cuando haya.
- **OG image** generada (`opengraph-image.tsx`) con el sistema de diseño; una por página clave.
- **Core Web Vitals:** LCP < 2,5 s, CLS < 0,1, INP < 200 ms en móvil. Lighthouse ≥ 90 en Performance, Accessibility, Best Practices y SEO como criterio de cierre de cada página.
- **Contenido indexable en HTML:** el copy importante se renderiza en el servidor; no se esconde detrás de interacciones de cliente.
- **Enlazado interno:** cada página de servicio enlaza a Para marcas, FAQ y a otros servicios relacionados; la home enlaza a todas las internas.
- **Sin páginas huérfanas ni duplicadas.** `/faq` y la sección FAQ de la home comparten datos pero la home muestra un subconjunto.
- **Analítica:** eventos de conversión (envío de formulario, click en agendar, click en WhatsApp) definidos en `lib/analytics.ts`; los píxeles se cargan solo tras consentimiento.

---

## 12. Reglas para imágenes y videos

### Imágenes
- Siempre `next/image` con `width`/`height` o `fill` + contenedor con aspect ratio; nunca `<img>` sin dimensiones (evita CLS).
- Formatos: subir fuentes en PNG/JPG/SVG; Next entrega AVIF/WebP. SVG solo para logos e iconos.
- `sizes` obligatorio en imágenes responsivas. `priority` solo en la imagen LCP de la página.
- Peso máximo de fuente: 500 kB por imagen; se optimiza antes de subir.
- `alt` según la regla de accesibilidad. Nada de texto dentro de imágenes.
- Sin stock genérico. Si no hay fotos propias, se usan composiciones tipográficas/gráficas con el sistema de diseño.

### Videos
- Formato principal: **vertical 9:16**, mp4 H.264 + AAC, ≤ 1080×1920, ≤ 8 MB para piezas de portfolio en v1. Piezas más pesadas van a un servicio de video (Mux / Cloudflare Stream / Bunny — a decidir), nunca al repo.
- **No se suben videos pesados al repositorio.** `public/` solo admite clips livianos (< 3 MB) y con aprobación; el resto en almacenamiento externo referenciado por URL.
- `poster` obligatorio (imagen optimizada del primer frame o un frame representativo), `preload="none"` o `"metadata"`, `playsInline`, `muted` si hay autoplay, lazy en grillas.
- Subtítulos incrustados o pista `<track>`; el UGC se consume sin audio.
- Reproductor propio ligero sobre `<video>` nativo; sin iframes de terceros salvo que el usuario elija un servicio de video.
- **Derechos:** ninguna pieza se publica sin confirmar que existen derechos de uso (creador, marca, música). Se registra la fuente y el permiso de cada pieza en `content/portfolio.ts` (`rights` obligatorio).
- Toda pieza de portfolio requiere: título, marca (o "sin nombre" si no está autorizada), formato, industria, objetivo, estilo, duración, si es humano/IA/híbrido, y derechos.

---

## 13. Reglas de contenido y copy

- **No inventar:** clientes, casos, métricas, resultados, testimonios, precios, creadores, herramientas, partnerships ni capacidades. Si falta información, se señala, se propone una hipótesis y se marca como tal (`// HIPÓTESIS` en código, "hipótesis" en docs).
- **Orden del mensaje:** cliente → problema → solución → resultado esperado → nosotros. Ninguna página arranca con "Somos una agencia…".
- **Voseo rioplatense** consistente ("tenés", "querés", "tu marca"). Directo, concreto, sin humo ni exceso de emojis.
- **Distinguir siempre** métrica de creativo (hook rate, retención, CTR) de métrica de campaña (CPA, ROAS). No prometer "este video te va a generar X ventas". Sí: "este creativo está diseñado para facilitar testing".
- **Hooks y guiones de ejemplo** en la web deben sentirse naturales (conversación, experiencia, problema real), sin lenguaje corporativo ni claims sin evidencia.
- **La IA se presenta como herramienta** dentro de un modelo híbrido, nunca como "granja de deepfakes" ni como reemplazo total de creadores.
- **Derechos de uso:** cualquier texto sobre licencias, exclusividad o uso de imagen se marca "pendiente de revisión legal" hasta que el usuario lo confirme.
- **FAQ orientada a objeciones** de compra, no a definiciones académicas.
- **Prueba social:** solo con datos reales y autorización. Mientras no haya, las secciones no existen para el visitante.

---

## 14. Qué NO hacer sin consultar al usuario

1. Cambiar el stack, el framework, el hosting o agregar dependencias grandes (UI kits, CMS, analítica, estado global, i18n).
2. Inicializar el repositorio git o hacer `git push`, `git push --force`, rebase de historia o borrar ramas.
3. Publicar, desplegar o conectar un dominio. Crear cuentas o proyectos en servicios externos (Vercel, Resend, Cal.com, Meta, Google, almacenamiento de video).
4. Definir o publicar precios, paquetes definitivos o garantías.
5. Publicar textos legales (privacidad, términos, consentimiento de creadores, derechos de uso) como definitivos.
6. Definir branding definitivo: nombre comercial, logo, paleta, tipografía. Solo se proponen opciones.
7. Inventar o publicar contenido: clientes, logos, casos, métricas, testimonios, videos de portfolio, creadores.
8. Modificar, mover, renombrar o borrar `CONTEXTO MAESTRO DEL PROYECTO — AGENCIA UGC.docx`.
9. Cambiar el embudo comercial (CTAs principales, campos del formulario de calificación, lead magnet) o el orden de secciones de la home definido en el contexto.
10. Enviar datos de leads o de creadores a cualquier destino no acordado explícitamente.
11. Cambiar el idioma, el mercado objetivo o el tono (voseo) de la web.
12. Cargar píxeles o scripts de terceros sin banner de consentimiento acordado.
13. Borrar archivos existentes o reescribir archivos completos que no fueron creados en la sesión actual.
14. Tomar decisiones que figuren en `docs/decisiones-pendientes.md` como abiertas: se pregunta, no se asume.

Ante la duda entre "preguntar" y "asumir", preguntar. Si se avanza bajo una suposición, se dice explícitamente cuál.

---

## 15. Cómo trabajar en este proyecto

- Actuar como combinación de estratega de negocio, performance marketer, experto en UGC, CRO, copywriter, diseñador de funnels y consultor de operaciones. No limitarse a escribir textos o código: **si una idea comercial es mala, decirlo; si una página no convierte, señalarlo; si algo es demasiado complejo para una agencia inicial, simplificarlo.**
- Cuando una decisión dependa de información actual (herramientas, precios, políticas de Meta/TikTok, versiones), **investigar**; no presentar información vieja como actual.
- Antes de empezar una tarea de desarrollo: leer este archivo, revisar `docs/decisiones-pendientes.md`, y presentar un plan breve si la tarea toca más de una página o introduce dependencias.
- Al terminar: reportar qué se hizo, qué se verificó (con el output real de build/lint/tests) y qué quedó pendiente o asumido.
