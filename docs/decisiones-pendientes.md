# Decisiones del proyecto — Laso ADS

Lista viva. Cada decisión abierta se pregunta al usuario antes de asumirla (regla 14 de `CLAUDE.md`). Cuando se cierre, se mueve a la tabla de decididas con fecha.

---

## Decididas

| Fecha | Decisión | Valor | Notas |
|---|---|---|---|
| 2026-09-19 | Nombre de la agencia | **Laso ADS** | Definitivo. Sin logo, paleta ni dominio todavía. |
| 2026-09-19 | Idioma y mercado v1 | **Español rioplatense (voseo)**, Argentina / LATAM | Sin i18n en v1. `content/` debe permitir agregar inglés después sin refactor de componentes. |
| 2026-09-19 | Stack | **Next.js (App Router) + TypeScript + Tailwind CSS v4**, hosting Vercel | Alternativa Astro considerada y descartada. Versiones exactas se verifican al inicializar. |
| 2026-09-19 | Alcance v1 | **Arquitectura completa** (sección 17 del contexto) | Se propuso un MVP de 5 rutas; el usuario eligió la estructura completa. Portfolio y Casos como plantillas con estado vacío hasta tener contenido real. |
| 2026-09-19 | Referencia | tryugcstudio.com como referencia conceptual | Análisis en `docs/analisis-referencia.md`. No se copia identidad, textos ni código. |
| 2026-09-26 | **Identidad visual** | Dirección **C · Contraste por bloques** | Tinta `#0B0B0C` + crema `#EDE8E2` + azul de marca en dos tonos (`#0A2F80` claro / `#5B85F0` oscuro). Paleta completa, tokens y contrastes verificados en `docs/identidad-visual.md`. |
| 2026-09-26 | **Arquitectura de servicios** | Combinar ambas listas: modos de compra como estructura, formatos del feed como "qué recibís" | Mapeo concreto propuesto en `docs/mapa-servicios.md`, **pendiente de aprobación**. |
| 2026-09-26 | **Portfolio** | Hay piezas y clientes con permiso → se construye con contenido real | Faltan los archivos y el detalle de derechos por pieza. Casos sigue vacío. |
| 2026-09-26 | **Gestión de pauta** | Servicio complementario: se menciona, no protagoniza | Solo para algunos clientes. Sin subpágina propia, sin promesas de resultado de campaña. |
| 2026-10-04 | **Superficie dominante** | Azul muy oscuro `#0A0E16` | Punto medio entre negro puro y azul casi negro, elegido por el usuario. Blanco para portfolio y formularios, crema para bloques puntuales. |
| 2026-10-04 | **Tipografía** | DM Sans + JetBrains Mono | Las mismas que la referencia. Fuentes libres de Google Fonts. El usuario conoce la coincidencia y decidió avanzar para ver el proyecto terminado; diferenciar después. |
| 2026-10-04 | **Copy de la home** | Primera versión escrita, a revisar | En `content/home.ts`. Sin métricas, clientes, testimonios ni precios. El hero quedó en "Más ángulos para testear, todos los meses". |

---

## Abiertas

| # | Decisión | Opciones / notas | Bloquea |
|---|---|---|---|
| 1b | **Logo en vectorial (SVG)** | Hoy el header usa un wordmark provisional en texto. Hace falta el SVG para header, favicon y OG image. **Es el bloqueante más urgente.** | Header, favicon, OG |
| 1c | **Bajada del logo** | "creativos argentina · diseño gráfico" apunta a un posicionamiento distinto del de Creative Factory. ¿Se mantiene, se cambia o se omite en la web? | Header, footer |
| ~~1d~~ | ~~Aprobar el mapa de servicios~~ | **Aprobado el 2026-10-04 e implementado.** 4 subpáginas. | — |
| 1e | **Claims de la bio de Instagram** | "Creativos con IA que venden (y mucho)", "máxima conversión". Chocan con el contexto §25, §31 y §36. Recomendación: sostener la promesa en volumen, velocidad y variedad. | Copy de hero y home |
| 1f | **Desconexión perfil / web** | El perfil se llama "Gerencia de Anuncios" pero la web va a hablar sobre todo de creativos. ¿Se ajusta el perfil o la pauta gana más espacio? | Posicionamiento |
| 2 | **Dominio** y cuenta de **Vercel** | ¿Existe dominio? ¿Quién crea el proyecto en Vercel? | Deploy |
| ~~3~~ | ~~Remoto git~~ | **Resuelto el 2026-10-04:** https://github.com/Giovanni2820/Laso-Ads, público por decisión del usuario pese a la advertencia sobre el `.docx` y el análisis del competidor. | — |
| 4 | **Destino de los leads** de marcas | **Bloquea el lanzamiento.** Email (Resend) · Google Sheets · Airtable · CRM. Hoy la acción valida y registra en desarrollo, pero falla en producción a propósito: sin esto los formularios no sirven en vivo. | Server Action `submitBrandLead` |
| 5 | **Destino de las aplicaciones de creadores** | Idem. El formulario todavía no pide video de presentación (depende de #7). | Server Action `submitCreatorApplication` |
| 6 | **Herramienta de agenda** | Cal.com (gratis, open source) · Calendly · ninguna en v1 (solo formulario + WhatsApp). | `/contacto`, `/marcas`, CTA primario |
| 7 | **Servicio de subida de video** para creadores | Vercel Blob · Cloudflare R2 · UploadThing. Tamaño máximo a definir (sugerido 200–500 MB). | Formulario de creadores |
| 8 | **Analítica y píxeles** | Vercel Analytics · Meta Pixel · GA4. Texto del banner de consentimiento. | Layout, eventos de conversión |
| 9 | **Hosting de video de portfolio** | mp4 estáticos livianos en v1; Mux / Cloudflare Stream / Bunny cuando haya volumen. | `/portfolio` |
| 10 | **Archivos del portfolio** | Resuelto que hay piezas con permiso. Falta que el usuario entregue los videos y, por pieza: marca, formato, industria, objetivo, estilo, humano/IA/híbrido y alcance de los derechos. | `/portfolio`, sección de ejemplos en home |
| 11 | **Formulación final del posicionamiento** (frase del hero) | Sección 2 del contexto da dos direcciones; falta elegir. Se proponen opciones con el copy de la home. | Hero |
| 12 | **Campos definitivos del formulario de marcas** | Sección 21 lista 12 posibles; optimizar para conversión (sugerido: 6–7). | `/marcas` |
| 13 | **Consentimiento y derechos de uso** en el formulario de creadores | Requiere revisión legal (sección 26). Mientras tanto: consentimiento acotado a evaluación interna. | `/creadores` |
| 14 | **Textos legales** (privacidad, términos) | Se redacta plantilla marcada "revisar legalmente"; no se publica como definitiva. | `/privacidad`, `/terminos` |
| 15 | **Precios / paquetes** | No se publican hasta definirlos (sección 11). Decidir después si conviene pricing público. | Sección de paquetes (no existe en v1) |
| 16 | **Canal de contacto directo** | Hoy la bio enlaza a un **grupo** de WhatsApp. Para la web conviene un chat directo (`wa.me`) o WhatsApp Business, no un grupo. Definir número y si además va email. | `/contacto`, footer, CTA |
| 17 | **Redes sociales** de Laso ADS | Instagram confirmado: `@laso.ecomads`. ¿Hay TikTok o LinkedIn? URLs para footer y JSON-LD `sameAs`. | Footer, `Organization` |
| 18 | **Lead magnet de entrada** | Creative Audit · 5 conceptos para tu producto · Creative Testing Plan 30 días (sección 20). Elegir uno para v1. | CTA secundario, `/marcas` |

---

## Mapa de rutas v1 (aprobado 2026-09-19)

| Ruta | Propósito | Estado de contenido |
|---|---|---|
| `/` | Home: Hero → Problema → Solución (Creative Factory) → Servicios → Portfolio (preview) → Proceso → Creadores → IA → Casos (preview) → FAQ → CTA final + lead magnet | Copy propio a escribir; bloques de prueba social solo con datos |
| `/servicios` | Índice de capacidades con resumen y enlaces | Hipótesis de servicios (sección 10) marcada como tal |
| `/servicios/ugc-ads` | Videos UGC para publicidad | Copy propio |
| `/servicios/creative-testing` | Conceptos × hooks × creadores → variantes → testing | Copy propio |
| `/servicios/ai-ugc` | Producción asistida/generada con IA; cuándo sí y cuándo no | Copy propio |
| `/servicios/creative-factory` | Producción recurrente mensual / retainer | Copy propio |
| `/servicios/creator-sourcing` | Búsqueda y matching de creadores | Copy propio |
| `/portfolio` | Grilla de videos filtrable por industria / formato / objetivo / estilo | Plantilla + datos; vacío hasta tener piezas |
| `/casos`, `/casos/[slug]` | Casos con números operativos | Plantilla + datos; vacío hasta tener casos |
| `/marcas` | Para marcas: ICP, qué resolvemos, cómo empezar, formulario de calificación + agenda | Campos según sección 21 |
| `/creadores` | Captación de creadores + formulario con video de presentación | Copy propio; consentimiento pendiente legal |
| `/ia` | Cómo usamos la IA: modelo híbrido, comparativa honesta, qué no hacemos | Copy propio |
| `/faq` | Objeciones de compra + `FAQPage` JSON-LD | Copy propio |
| `/contacto` | Contacto directo + agenda | Depende de decisiones 6 y 16 |
| `/gracias` | Confirmación post-formulario (evento de conversión) | — |
| `/privacidad`, `/terminos` | Legales | Plantilla "revisar legalmente" |
| `/recursos/[slug]` | Artículos MDX | Ruta preparada, sin contenido |

---

## Próxima tarea (requiere nueva aprobación)

Orden propuesto:

1. ~~Propuesta de identidad visual~~ — **hecho el 2026-09-26**: dirección C aprobada, paleta y tokens en `docs/identidad-visual.md`.
2. ~~Scaffold Next.js + Tailwind + tooling~~ — **hecho el 2026-10-04**. Next 16.3.8, React 19.2.8, Tailwind v4, TypeScript estricto, ESLint, Prettier. `typecheck`, `lint`, `format:check` y `build` en verde. **Falta inicializar git** (requiere OK del usuario, CLAUDE.md §14.2). Playwright + axe quedan para cuando existan páginas reales.
3. ~~Tokens y primitivos base~~ — **hecho el 2026-10-04**: las tres superficies, `Section`, `Container`, `Button`, `Logo`, `Header` (con menú móvil), `Footer`, helper `cn`, skip link, foco visible, `prefers-reduced-motion`. Referencia visual en `/estilo`.
4. ~~Home con copy propio~~ — **hecho el 2026-10-04**: hero, problema, solución, servicios y formatos, creadores, IA, FAQ y CTA final. Copy en `content/home.ts`, primera versión a revisar. **Falta la sección de portfolio: no hay piezas cargadas.**
5. ~~Páginas internas, formularios y SEO técnico~~ — **hecho el 2026-10-04.** 16 rutas, formularios con Zod y honeypot, metadata por ruta, sitemap, robots y JSON-LD. La navegación estaba rota (10 enlaces a 404) y quedó cerrada.

### Lo que falta para poder lanzar

1. **Destino de los leads** (#4 y #5). Sin esto los formularios fallan en producción a propósito.
2. **Logo en SVG** (#1b).
3. **Piezas del portfolio** (#10).
4. **Revisión legal** de privacidad y términos (#13, #14).
5. **Dominio y deploy** (#2).
6. Revisión del copy de la home y la FAQ por el usuario.
7. Analítica con consentimiento (#8) y agenda (#6), si se decide sumarlas.

### Deuda técnica conocida

- El menú móvil usa `details`/`summary` en vez de un diálogo con foco atrapado, que es lo que pide §9 de `CLAUDE.md`. Funciona y es accesible por teclado, pero es una desviación consciente para no sumar dependencias.
- Sin tests todavía: falta Playwright + axe sobre las rutas principales.
- `npm audit` marca 5 high en la cadena del linter, sin parche upstream. Documentado en el README; el único "fix" baja `eslint-config-next` a v14 y rompe Next 16.
- El formulario de creadores todavía no pide video de presentación: depende de decidir el servicio de subida (#7).
