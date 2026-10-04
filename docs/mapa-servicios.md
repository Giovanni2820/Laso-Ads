# Mapa de servicios — propuesta de reconciliación

**Estado: PROPUESTA. Pendiente de aprobación del usuario (2026-09-26).**

Decisión tomada el 2026-09-26: combinar las dos listas — servicios comerciales del contexto maestro como estructura, formatos reales del feed como "qué recibís" dentro de cada uno. Este documento propone cómo.

---

## 1. Las dos listas que hay que reconciliar

**Lo que vendés hoy** (observado en el feed de [@laso.ecomads](https://www.instagram.com/laso.ecomads), 2026-09-26):

Broll dinámico · Estáticos · Traducciones · UGC animados · UGC IA · UGC IA dinámico

**Lo que planificaba el contexto maestro** (sección 10, marcado como hipótesis):

UGC Ads · Creative Testing · AI UGC · Creative Factory · Ad Creative Packages · Creator Sourcing · Script / Creative Strategy

La primera lista son **formatos de entrega** (qué archivo recibe el cliente). La segunda son **modos de compra** (cómo contrata). Son ejes distintos, y mezclarlos en un mismo menú confunde: el visitante no sabe si elegir por formato o por modalidad.

---

## 2. Propuesta: separar los dos ejes

### Eje comercial — lo que el cliente compra (son páginas)

| Servicio | Qué es | Formatos que incluye |
|---|---|---|
| **UGC para Ads** | El producto base. Un paquete de creativos listos para pautar. | UGC IA · UGC IA dinámico · UGC animados · UGC con creadores reales |
| **Creative Testing** | El diferencial. No comprás videos: comprás variantes para encontrar el ganador. | Todos, combinados en matriz conceptos × hooks × formatos |
| **Creative Factory** | El retainer mensual. Producción continua e iteración sobre lo que funciona. | Todos + variantes de lo validado |
| **Creativos complementarios** | Lo que amplía el ticket y acompaña la campaña. | Estáticos · Broll dinámico · Traducciones y localización |

### Eje de capacidad — cómo lo hacemos (no son páginas de servicio)

| Capacidad | Dónde vive |
|---|---|
| Producción con IA | Página `/ia` (ya en la arquitectura) + bloque "cómo lo producimos" dentro de cada servicio |
| Creadores reales / sourcing | Página `/creadores` (ya existe, es el segundo embudo) + bloque dentro de UGC para Ads |
| Estrategia creativa, hooks y guiones | Sección Proceso de la home + bloque en cada servicio. Está incluida en todo, no se vende suelta |
| Gestión de pauta (Meta Ads) | Mención como servicio complementario. Sin subpágina propia |

---

## 3. Cambio respecto de lo aprobado el 2026-09-19

| Arquitectura aprobada | Propuesta | Motivo |
|---|---|---|
| `/servicios/ugc-ads` | Se mantiene | — |
| `/servicios/creative-testing` | Se mantiene | — |
| `/servicios/creative-factory` | Se mantiene | — |
| `/servicios/ai-ugc` | **Se elimina** → su contenido va a `/ia` | Ver 3.1 |
| `/servicios/creator-sourcing` | **Se elimina** → va a `/creadores` + bloque en UGC para Ads | Ver 3.2 |
| — | **Nueva:** `/servicios/estaticos-y-complementos` | Ver 3.3 |

Resultado: 4 subpáginas de servicio en vez de 5, sin perder ningún contenido.

### 3.1 Por qué sacar "AI UGC" como servicio

El contexto maestro (sección 7) dice que la IA **no debe presentarse como el producto principal**. Tener `/servicios/ai-ugc` como hermano de `/servicios/ugc-ads` hace exactamente eso: convierte el método en categoría de compra. El cliente no compra "inteligencia artificial", compra creativos que pueda pautar; la IA es cómo se producen, igual que un creador con un iPhone.

Además duplica contenido: `/servicios/ai-ugc` y `/ia` dirían casi lo mismo, lo que el CLAUDE.md §11 prohíbe explícitamente.

**Riesgo asumido:** "ugc con ia" es un término que la gente busca, y eliminar la página podría costar tráfico. Se mitiga haciendo que `/ia` sea la página que rankea para ese término (título y H1 orientados a "UGC con IA"), en vez de una página institucional sobre nuestra filosofía.

### 3.2 Por qué sacar "Creator Sourcing" como servicio

Ya existe `/creadores`, que es el segundo embudo del negocio (captación de talento). Una página `/servicios/creator-sourcing` apuntando a marcas y otra `/creadores` apuntando a creadores generan confusión de audiencia sobre el mismo tema.

Hoy, además, la base de creadores propia todavía no existe: vender "sourcing" como servicio independiente promete una capacidad que está en construcción, lo que choca con la regla de no inventar capacidades (contexto §36).

El matching de creadores se explica como parte de UGC para Ads ("elegís el perfil") y se desarrolla como servicio propio cuando la base exista.

### 3.3 Por qué sumar "Creativos complementarios"

Estáticos, broll dinámico y traducciones son tres cosas que **ya producís y cobrás**, y no entraban en ninguna categoría de la arquitectura aprobada. Dejarlas fuera de la web sería esconder facturación real.

No merecen protagonismo —no son el mensaje central— pero sí una página que las liste, porque:
- Amplían el ticket de un cliente que ya contrató UGC.
- Las traducciones son argumento de escala: el mismo creativo en varios mercados.
- El broll dinámico y los estáticos captan búsquedas propias.

---

## 4. Gestión de pauta

Decisión del usuario (2026-09-26): la gestiona solo para algunos clientes → **servicio complementario, mencionado pero no protagonista**.

Tratamiento propuesto:
- Una mención en `/servicios` (índice) y un bloque breve en `/marcas`.
- Sin subpágina propia, sin aparecer en el menú principal.
- Sin promesas de resultado de campaña (contexto §25): se describe como "también podemos gestionar la pauta", no como "te escalamos las ventas".

**Tensión a resolver:** el perfil de Instagram se llama "Laso Ads | Gerencia de Anuncios" y el handle es `laso.ecomads`. Si la web trata la pauta como algo marginal, hay una desconexión entre lo que dice el perfil y lo que dice el sitio. Dos caminos, a decidir:
1. La web refleja el foco real (creativos) y el perfil de Instagram se ajusta con el tiempo.
2. La pauta gana más espacio del propuesto acá.

---

## 5. Estructura propuesta de cada página de servicio

Todas usan el mismo `ServicePageTemplate` alimentado por `content/services.ts`:

1. **Problema que resuelve** — arranca por el cliente, no por nosotros (contexto §32).
2. **Qué recibís** — los formatos concretos de ese servicio, con ejemplos del portfolio filtrados.
3. **Cómo lo producimos** — creadores reales, IA o híbrido, según corresponda.
4. **Para quién es (y para quién no)** — califica y ahorra llamadas malas.
5. **FAQ del servicio** — 3 a 5 objeciones específicas.
6. **CTA** — el mismo primario de toda la web.

---

## 6. Qué necesito para escribir el contenido

- Confirmación de este mapeo (o correcciones).
- Para cada formato: qué incluye exactamente y qué NO, tiempos de entrega reales, y cantidad de revisiones. Sin inventar: si no está definido, la web no lo dice.
- Las piezas del portfolio con sus permisos, para poder filtrarlas por servicio.
