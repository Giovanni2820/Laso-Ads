# Análisis de la referencia: UGC Studio (tryugcstudio.com)

**Fecha de observación:** 2026-09-19. Las webs cambian; si pasa tiempo, verificar antes de basar decisiones en esto.

**Regla:** este documento separa **HECHO** (lo que aparece en la web), **INTERPRETACIÓN** (qué creemos que significa comercialmente) y **RECOMENDACIÓN** (qué adaptar a Laso ADS). Nunca se mezclan. Nada de lo listado como hecho se copia; se estudia.

Páginas revisadas: `/`, `/galeria`, `/agenda`, `/casos/smellbox`, `/ugc-ia-vs-ugc-real`, `/como-funciona-la-app`, `/reclutamiento` (= `reclutamiento.tryugcstudio.com`), `/reclutamiento/creador`, `/privacidad`, `/terminos`.

---

## 1. HECHO — Qué hay en la web

### 1.1 Home (one-page con anclas: producto, cómo funciona, resultados, pricing, FAQ)

Orden de secciones observado:

1. **Hero** — etiqueta de categoría ("agencia UGC con IA"), titular con promesa cuantificada (rango de videos + rango de días hábiles para Meta Ads), párrafo de apoyo, un único CTA primario ("Agendar reunión"), línea de prueba social numérica (cantidad de marcas y de creativos producidos), video VSL (Wistia, ~2 min).
2. **Logos de clientes.**
3. **Galería de videos** con enlace a "ver más".
4. **Bloque de plataforma** — "seguís todo desde tu panel" (aprobar guiones, ver crudos, pedir cambios) + variante "si sos agencia" (multi-cliente con créditos).
5. **Cómo funciona** — 3 pasos resumidos por día (día 1 brief, días 1–7 aprobaciones, día 9 entrega) con un desplegable de 8 pasos detallados (formulario → fotos → guiones → aprobación → crudos → aprobación → edición → correcciones). Callout de "plazo total" y bloque "¿Qué tenés que hacer vos?" que reduce el esfuerzo del cliente a dos acciones.
6. **Caso de estudio** — una marca de perfumes: 140 videos, 3 recompras, 6 semanas hasta segunda marca, 88,6 % aprobados sin corregir. Contado en clips del cliente. Enlace a página del caso.
7. **Reseñas** — carrusel con ~20 reseñas cortas atribuidas a marcas ("5.0/5 · basado en reseñas reales"); un par incluyen métricas de campaña (ventas vs. período anterior, ROAS, pedidos).
8. **Pricing público** — tabla comparativa de dos calidades (PRO para testear ángulos en volumen / ULTRA para escalar el ganador), packs con precio por video y total (10, 30, 50 videos; desde USD 39/video), plan custom (>50, SLA, facturación a medida), y un pack starter "para probar sin arriesgar". Todos incluyen guiones + edición y "avatares personalizados".
9. **FAQ** — 12 preguntas: precio y qué incluye, "lo consulto con un socio", qué hago yo y cuánto tarda, empezar con menos, "¿funciona para mi rubro?", realismo de los avatares, usar mi propio avatar, qué incluye guiones + edición, derechos comerciales, IA vs. UGC tradicional, qué es UGC Studio, por qué IA para Meta Ads.
10. **Insights / blog** — 8 artículos (IA vs real, cómo funciona la app, clips para Mercado Libre, evolución de la IA, UGC + IA en e-commerce, actualización de Meta, un homenaje con IA, "tu clon con 4 fotos").
11. **CTA final** — "30 minutos y salís con un plan": videollamada con especialista, te muestran creativos de tu rubro, salís con presupuesto cerrado, sin obligación de decidir.
12. **Lead magnet sin llamada** — "¿Todavía no querés hablar con nadie?": selector de rubro (23 opciones) + email → te mandan hasta 20 creativos de tu rubro con precio. Solo dos campos.
13. Banner de cookies (aceptar/rechazar).

### 1.2 Páginas internas

| Página | Contenido |
|---|---|
| `/galeria` | Catálogo de 10 "formatos" de video con etiquetas comerciales (más elegido, best for e-commerce, exclusivo real estate) + reseñas + mini-quiz de 5 pasos que promete "un informe personalizado en 20 segundos" a cambio de datos. |
| `/agenda` | Embed de Cal.com ("sesión de estrategia") con parámetros de tracking (fbp, visitor id, landing URL). |
| `/casos/smellbox` | Caso narrado en clips numerados del cliente (miedo a contratar por internet, por qué necesitaba volumen, etc.). No hay métricas de campaña; hay números operativos. |
| `/ugc-ia-vs-ugc-real` | Artículo: "falso dilema", cuándo brilla cada uno, tabla comparativa (velocidad, costo, volumen, variaciones de hook, rostro real, consistencia), "lo mejor de los dos mundos" con packs híbridos. |
| `/como-funciona-la-app` | Explica la plataforma: créditos (1 crédito = 1 video), pedido guiado por industria, IA escribe guiones, aprobaciones, timeline por pedido, cuentas separadas por cliente para agencias, brief adaptado por rubro. |
| `/reclutamiento` | 4 roles con estado (Dev full-stack — cerrado; Creador/a UGC — abierto; Closer — cupos llenos; AI Creator — abierto). Cifras de autoridad ("+100 clientes", "N°1 en la industria", "+3 años"). Lista de espera prioritaria. |
| `/reclutamiento/creador` | Formulario: autocompletar desde portfolio con IA; nombre, email, género, edad, WhatsApp; Instagram (obligatorio) y TikTok; nacionalidad, país, idiomas; con qué teléfono grabás; tipos de marca (10 categorías); **video de presentación obligatorio** (hasta 1 GB, sin marcas de agua, se muestra a las marcas); **consentimiento de uso comercial pleno, en cualquier canal y de forma indefinida**, incluyendo remezcla. |
| `/privacidad`, `/terminos` | Legales estándar. |

### 1.3 Aspectos técnicos observables

- SPA en React (bundle en `/assets`, no Next.js), desplegada en Vercel.
- Video: Wistia (VSL) con JSON-LD `VideoObject`.
- Agenda: Cal.com embebido.
- Tracking: Meta Pixel; monitoreo con Sentry.
- Tipografía: DM Sans + JetBrains Mono (Google Fonts). Tema oscuro con acento violeta.
- `lang="es"`. Voseo rioplatense en todo el copy.
- Formulario de lead magnet con solo 2 campos (rubro + email).

---

## 2. INTERPRETACIÓN — Qué significa comercialmente

- **Venden velocidad + volumen + precio por unidad**, empaquetado como si fuera software: créditos, packs, plataforma, SLA. La estrategia creativa no aparece como diferencial visible; la "calidad" se vende como dos niveles de producción.
- **La IA (avatares) es el núcleo del producto**; los creadores reales son complemento en "packs híbridos". Nacen de fusionar una agencia de IA con una de UGC tradicional (lo dicen en el artículo).
- **Dos caminos de conversión**: alto compromiso (llamada de 30 min con presupuesto cerrado) y bajo compromiso (rubro + email → ejemplos con precio). El segundo captura leads que no están listos para hablar y califica por rubro.
- **Pricing público como filtro**: quien no puede pagar USD 390 no agenda la llamada; el equipo de ventas habla solo con gente que ya vio el precio.
- **La prueba social funciona por volumen**, no por calidad: muchas reseñas cortas y genéricas ("Bien", "Excelente") crean sensación de actividad. Las pocas con métricas de campaña se mezclan con las genéricas.
- **El caso de estudio evita prometer resultados de campaña**: usa números operativos (videos entregados, recompras, % aprobado sin corregir) y la voz del cliente en clips. Es una forma de mostrar "resultados" sin ROAS.
- **La galería de formatos convierte el servicio en catálogo**: el cliente elige un formato, no "un video". Reduce la conversación de "¿qué me hacen?" a "¿cuál quiero?".
- **La plataforma es su mecanismo de escala y su argumento de "sin fricción"** ("tu parte son 15 minutos"). También es una barrera de entrada para competidores pequeños.
- **El reclutamiento es un embudo real con filtro automático**: el video de presentación obligatorio elimina a quien no sabe hablar a cámara antes de que alguien lo revise. El consentimiento amplio les da libertad total sobre el material.
- **Las cifras de autoridad** ("+600 marcas", "N°1 en la industria") sostienen la percepción de líder; no son verificables desde afuera.
- **El blog cumple doble función**: SEO y educación de objeciones (IA vs real, cambios de Meta).

---

## 3. RECOMENDACIÓN — Qué adaptar a Laso ADS y qué no

### 3.1 Adaptar (reescrito desde nuestra propuesta de valor)

| Patrón | Cómo lo adaptamos |
|---|---|
| Home autosuficiente: problema → solución → proceso → prueba → FAQ → CTA | Misma lógica de recorrido con el orden de la sección 18 del contexto. Las páginas internas profundizan, pero la home vende sola. |
| Hero con promesa concreta y un CTA primario | Hero que arranca por el problema del cliente (fatiga creativa / falta de volumen para testear). La promesa cuantificada solo cuando tengamos capacidad validada para cumplirla. |
| Doble camino de conversión | CTA primario "hablar/agendar" + CTA secundario de baja fricción (ver ejemplos / recibir 5 conceptos para tu producto por email). Es coherente con los lead magnets de la sección 20 del contexto. |
| "¿Qué tenés que hacer vos?" | Sección de proceso que separa qué hace el cliente y qué hacemos nosotros. Reduce la objeción de esfuerzo. |
| FAQ orientada a objeciones de compra | Nuestra FAQ (sección 18) se escribe como objeciones, no como glosario: esfuerzo, tiempos, derechos, IA, elección de creadores, uso en Ads. |
| Caso con números operativos y voz del cliente | Cuando exista el primer cliente: creativos producidos, conceptos/hooks testeados, tiempo brief→entrega, % aprobado. Métricas de campaña solo con datos reales y autorización. |
| Comparativa honesta IA vs real | Encaja con nuestro modelo híbrido; la página `/ia` la explica desde "cuándo usamos cada cosa", no desde "la IA es mejor". |
| Landing de creadores con video de presentación | Formulario propio (sección 6 del contexto) con video obligatorio como filtro de calidad. |
| Selector de rubro en el lead magnet | Sirve para calificar y para personalizar la respuesta. Usar nuestras verticales (sección 12). |
| Blog educativo | Ruta `/recursos` preparada; se llena cuando haya contenido real. |

### 3.2 No adaptar / no aplica

| Elemento | Por qué no |
|---|---|
| Posicionamiento "IA / avatares como núcleo" | Nuestro núcleo es sistema + estrategia + testing con creadores reales **e** IA (secciones 7, 8, 33). |
| Plataforma con créditos, panel, cuenta agencia | Contradice `VALIDAR → VENDER → PRODUCIR → MEDIR → AUTOMATIZAR` (sección 29). Se evalúa en Etapa 4–5. |
| Pricing público | No hay precios definidos (sección 11). Cuando los haya, decidir si publicarlos: como filtro funciona, pero exige tener costos claros. |
| Reseñas, logos, "+600 marcas", "N°1" | No tenemos datos. No se inventan. Los bloques existen en el código pero no se renderizan sin datos. |
| Consentimiento de uso comercial indefinido y en cualquier canal | La sección 26 exige definir duración, canales, territorio y exclusividad con revisión legal. Nuestro formulario usa un consentimiento acotado a evaluación interna, marcado como "pendiente legal". |
| Mini-quiz que promete "informe en 20 segundos" | Promete algo automático que no tenemos. Si se quiere un lead magnet interactivo, debe entregar algo real. |
| Galería de 10 formatos con nombres propios | No tenemos piezas. Los nombres de formatos son suyos. Nuestro portfolio se filtra por industria/formato/objetivo/estilo (sección 18) cuando exista. |
| Identidad visual (oscuro + violeta, DM Sans / JetBrains Mono), textos, código | Se construye identidad propia. |
| Autocompletar formulario de creadores con IA | Bonito pero innecesario en v1; suma complejidad sin validar demanda. |

### 3.3 Qué parece orientado a performance vs. branding

- **Performance:** hero con promesa cuantificada, pricing, FAQ de objeciones, lead magnet de 2 campos, agenda embebida, píxel de Meta, página de gracias implícita.
- **Branding:** VSL, artículos de "cuando la IA hace cine", homenaje con IA, cifras de autoridad.
- **Escalable / replicable por una agencia pequeña:** todo lo anterior salvo la plataforma. Una home bien estructurada, dos formularios y una agenda se hacen sin plataforma.
- **No replicable hoy:** la plataforma, el volumen de reseñas, el caso de estudio, la galería con piezas reales.

---

## 4. Preguntas del contexto (sección 15) respondidas en una línea

- **¿Qué problema comunica?** Necesitás muchos creativos rápido para Meta Ads y producirlos es lento y caro.
- **¿Qué promesa hace?** Un rango de videos en un rango de días, listos para anuncios, con mínimo esfuerzo del cliente.
- **¿Cómo presenta el problema?** Casi no lo desarrolla; va directo a la promesa. El problema aparece en el artículo de la app ("caos operativo").
- **¿Cómo presenta la solución?** Como producto empaquetado: packs, plataforma, proceso en días.
- **¿Qué objeciones responde?** Precio, esfuerzo, tiempos, "consulto con un socio", "¿sirve para mi rubro?", realismo, derechos, IA vs real.
- **¿Qué CTA utiliza?** "Agendar reunión" (primario, repetido) y "Mandámelos" (lead magnet por email).
- **¿Cómo convierte visitantes?** Llamada de 30 min con presupuesto cerrado, o ejemplos por email si no querés hablar.
- **¿Qué información pide?** Mínima en el lead magnet (rubro + email); completa en el formulario de creadores.
- **¿Cómo diferencia su servicio?** Velocidad, volumen, precio por unidad, plataforma, IA.
- **¿Cómo presenta la IA?** Como núcleo ("agencia UGC con IA"), con avatares "indistinguibles" y comparativa honesta contra UGC real.
- **¿Cómo presenta a los creadores?** Poco en la home; aparecen en el artículo IA vs real y en reclutamiento.
- **¿Cómo recluta creadores?** Landing separada con roles y formulario con video obligatorio.
