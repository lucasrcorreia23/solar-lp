import { ImageResponse } from "next/og";
import { SITE } from "@/content/site";

export const alt = SITE.tagline;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f9f9f9",
          color: "#000",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 26,
            textTransform: "uppercase",
            letterSpacing: 5,
          }}
        >
          <div style={{ width: 48, height: 3, background: "#e34e35" }} />
          Estúdio Nákama
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.05 }}>
          {SITE.tagline}
        </div>
        <div style={{ fontSize: 26, color: "rgba(0,0,0,0.6)" }}>
          estudionakama.com.br
        </div>
      </div>
    ),
    { ...size },
  );
}
