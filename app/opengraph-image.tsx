import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0a",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 64
        }}
      >
        <div style={{ color: "white", fontSize: 56, fontWeight: 700, lineHeight: 1.1 }}>
          {site.company}
        </div>
        <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 26, marginTop: 18, maxWidth: 900 }}>
          Catálogo por categorías · Cotizaciones por WhatsApp o email
        </div>
        <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 20, marginTop: 28 }}>
          {site.address}
        </div>
      </div>
    ),
    size
  );
}
