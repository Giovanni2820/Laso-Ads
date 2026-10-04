# Identidad visual — Laso ADS

**Última revisión: 2026-10-04.** Reemplaza la dirección aprobada el 2026-09-26.

Origen: la paleta salió de las publicaciones reales de [@laso.ecomads](https://www.instagram.com/laso.ecomads) (muestreo de píxeles, no estimación). El logo existente —wordmark "laso" en blanco sobre círculo negro— es el punto de partida y no se rediseña sin pedido explícito.

---

## 1. Decisiones vigentes

| Decisión | Valor | Fecha |
|---|---|---|
| Superficie dominante | Azul muy oscuro `#0A0E16` | 2026-10-04 |
| Superficie secundaria | Blanco `#FFFFFF` para portfolio y formularios | 2026-10-04 |
| Superficie puntual | Crema `#EDE8E2` para romper el ritmo, uso mínimo | 2026-10-04 |
| Tipografía | DM Sans (todo) + JetBrains Mono (datos y eyebrows) | 2026-10-04 |
| Acento sobre oscuro | `#5B85F0` | 2026-09-26 |
| Acento sobre claro | `#0A2F80` (el azul del feed) | 2026-09-26 |

### Nota sobre la tipografía

DM Sans y JetBrains Mono son las mismas familias que usa tryugcstudio.com. Son fuentes de Google Fonts con licencia abierta, no propiedad de esa empresa, así que usarlas es legítimo.

**Es una decisión deliberada y temporal del usuario** (2026-10-04): quiere avanzar con una estética que le guste para ver el proyecto terminado, y diferenciarlo después. La objeción comercial —parecerse a un competidor directo del mismo mercado debilita el posicionamiento— se planteó y el usuario la resolvió a favor de avanzar. Revisar antes de publicar.

### Por qué el acento tiene dos tonos (dato medido)

| Combinación | Contraste | Veredicto |
|---|---|---|
| `#0A2F80` sobre blanco | 12,13:1 | Excelente |
| `#0A2F80` sobre crema | 9,96:1 | Excelente |
| `#0A2F80` sobre `#0A0E16` | **~1,6:1** | **Invisible — prohibido** |
| `#5B85F0` sobre `#0A0E16` | 5,57:1 | Cumple AA |

El azul del Instagram es un navy profundo: funciona como tinta sobre fondo claro y desaparece sobre oscuro. Por eso existe `blue-400`.

---

## 2. Paleta

### Superficie oscura (dominante)

| Token | Hex | Uso |
|---|---|---|
| `--color-night-950` | `#0A0E16` | Fondo principal del sitio |
| `--color-night-900` | `#141A2A` | Tarjetas y superficies elevadas |
| `--color-night-800` | `#1B2334` | Elevación adicional |
| `--color-night-700` | `#232A3D` | Bordes decorativos |
| `--color-night-600` | `#5A6478` | Bordes de formulario (3,25:1) |

### Azul de marca

| Token | Hex | Uso |
|---|---|---|
| `--color-blue-900` | `#071F56` | Hover de botón sobre claro |
| `--color-blue-800` | `#0A2F80` | Acento sobre superficies claras |
| `--color-blue-500` | `#3D6BE5` | Hover de botón sobre oscuro |
| `--color-blue-400` | `#5B85F0` | Acento sobre superficies oscuras |
| `--color-blue-300` | `#8FAAF5` | Anillo de foco sobre oscuro |
| `--color-blue-ink` | `#0A1F4D` | Texto sobre botón `blue-400` (4,6:1) |

### Neutros y arena

`--color-ink-300` `#C4C9D2` (cuerpo sobre oscuro) · `--color-ink-400` `#9AA1AE` (secundario sobre oscuro) · `--color-sand-200` `#EDE8E2` (crema) · `--color-sand-500` `#807971` (borde de control sobre claro).

### Estados

| Rol | Sobre oscuro | Sobre claro |
|---|---|---|
| Error | `#FF8A7A` (8,43:1) | `#B42318` (5,4:1) |
| Éxito | `#5BD99A` (10,89:1) | `#067647` (4,67:1) |

---

## 3. Tokens por superficie

Tres superficies. Cada componente hereda de la que lo contiene, nunca fija colores a mano. Definidas en `src/app/globals.css`.

```
[data-surface="ink"]    fondo #0A0E16   acento #5B85F0   ← dominante
[data-surface="white"]  fondo #FFFFFF   acento #0A2F80   ← portfolio, formularios
[data-surface="sand"]   fondo #EDE8E2   acento #0A2F80   ← bloques puntuales
```

Utilidades disponibles: `bg-surface`, `bg-surface-raised`, `text-fg`, `text-fg-body`, `text-fg-secondary`, `text-fg-muted`, `text-accent`, `bg-accent`, `text-on-accent`, `border-line`, `border-control`, `text-danger`, `text-success`.

**Regla dura:** ningún componente escribe un hex de marca. Usa `var(--accent)` y la superficie decide.

---

## 4. Contrastes verificados (WCAG 2.2 AA)

### Sobre `#0A0E16`
| Par | Ratio |
|---|---|
| Blanco | 19,31:1 |
| Cuerpo `#C4C9D2` | 11,62:1 |
| Secundario `#9AA1AE` | 7,43:1 |
| Acento `#5B85F0` | 5,57:1 |
| Borde de control `#5A6478` | 3,25:1 |
| Error `#FF8A7A` | 8,43:1 |
| Éxito `#5BD99A` | 10,89:1 |
| Tarjeta `#141A2A` con blanco encima | 17,34:1 |

### Sobre blanco
Texto principal 19,67:1 · secundario 8,21:1 · muted `#6B7280` 4,83:1 · acento `#0A2F80` 12,13:1.

### Sobre crema `#EDE8E2`
Texto principal 16,15:1 · cuerpo `#2E3138` 10,69:1 · muted `#5E6470` 4,88:1 · acento `#0A2F80` 9,96:1 · borde de control `#807971` 3,53:1.

### Combinaciones prohibidas
- `#0A2F80` sobre cualquier superficie oscura.
- `#6B7280` como texto de cuerpo sobre crema (3,97:1) — usar `#5E6470`.
- `#232A3D` como borde de un control de formulario — es decorativo, usar `--border-control`.

---

## 5. Tipografía

| Rol | Familia | Tratamiento |
|---|---|---|
| Titulares | DM Sans | peso 700, `letter-spacing: -0.03em`, `line-height: 1.08` |
| Cuerpo y UI | DM Sans | peso 400, 16–18px, `line-height: 1.6` |
| Datos y eyebrows | JetBrains Mono | peso 500, mayúsculas, `letter-spacing: 0.14em` |

La utilidad `eyebrow` (definida en `globals.css`) aplica el tratamiento de etiqueta superior: mono, mayúsculas, espaciado amplio, en color de acento.

---

## 6. Ritmo de superficies en la home

| Sección | Superficie |
|---|---|
| Header | ink (sticky) |
| Hero | ink |
| Problema | ink |
| Solución / proceso | white |
| Servicios y formatos | ink |
| Creadores | sand |
| IA | ink |
| FAQ | white |
| CTA final | ink |
| Footer | ink |

Criterio: el oscuro domina, el blanco entra donde hay que leer mucho o mirar piezas, el crema aparece una sola vez para marcar un cambio de audiencia (creadores, no marcas).

---

## 7. Reglas de uso

- El logo va **blanco sobre oscuro**. Sobre el fondo azul oscuro se usa el wordmark suelto, **sin el círculo negro** del avatar: ese círculo quedaría como un parche recortado.
- El azul es acento, no fondo dominante.
- Un CTA primario por vista, en `--accent` con `--accent-contrast`. El secundario es borde + texto.
- El anillo de foco es visible en las tres superficies y nunca se suprime.
- Sin degradados, sin sombras de color, sin glow.
- `scroll-margin-top: 5rem` en todo elemento con `id`, porque el header es sticky.
- Toda animación respeta `prefers-reduced-motion`.

---

## 8. Pendiente

1. **Logo en vectorial (SVG).** Hoy el header usa un wordmark provisional en texto (`src/components/layout/logo.tsx`). Hace falta el SVG real para header, favicon y OG image.
2. Decidir si la bajada "creativos argentina · diseño gráfico" se mantiene en la web.
3. Revisar la decisión tipográfica antes de publicar, por la coincidencia con el competidor.
