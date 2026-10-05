import { ImageResponse } from "next/og";

import { site } from "@content/site";

export const alt = `${site.name} · ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Imagen que se ve al compartir el enlace.
 * Usa los colores del sistema; la tipografía cae en la de sistema del
 * renderizador, suficiente hasta tener el logo en SVG.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#0A0E16",
        padding: "72px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            color: "#5B85F0",
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          Creativos para performance
        </div>
        <div
          style={{
            color: "#FFFFFF",
            fontSize: 76,
            fontWeight: 700,
            letterSpacing: -2,
            lineHeight: 1.1,
            marginTop: 28,
            maxWidth: 900,
          }}
        >
          Más ángulos para testear, todos los meses
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ color: "#FFFFFF", fontSize: 44, fontWeight: 700 }}>laso</div>
        <div style={{ color: "#9AA1AE", fontSize: 24 }}>UGC con creadores reales e IA</div>
      </div>
    </div>,
    size,
  );
}
