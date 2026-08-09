import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Linkone — Project & Task Collaboration Platform for LINE-based Teams";
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
          justifyContent: "center",
          padding: "84px",
          background: "linear-gradient(135deg, #0057D9 0%, #0A337A 55%, #061A33 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22, marginBottom: 34 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0057D9",
              fontSize: 46,
              fontWeight: 800,
            }}
          >
            L
          </div>
          <div style={{ fontSize: 46, fontWeight: 800, letterSpacing: -1 }}>Linkone</div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 68,
            fontWeight: 800,
            lineHeight: 1.12,
            letterSpacing: -2,
            maxWidth: 1000,
          }}
        >
          Turn your LINE group into your team&apos;s work system
        </div>

        <div style={{ display: "flex", marginTop: 32, fontSize: 32, color: "#BFD9FF", maxWidth: 940 }}>
          Project &amp; Task Collaboration Platform for LINE-based Teams
        </div>

        <div style={{ display: "flex", marginTop: 44, fontSize: 24, color: "#9DBCEB" }}>
          linkonecompany.com
        </div>
      </div>
    ),
    { ...size },
  );
}
