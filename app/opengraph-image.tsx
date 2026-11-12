import { ImageResponse } from "next/og";
import { site, stats } from "@/content/site";

// Link-preview card for LinkedIn, WhatsApp, X etc. Generated at build time.
export const alt = `${site.name} — ${site.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between",
          padding: "72px 80px", background: "radial-gradient(circle at 85% 10%, #123a44 0%, #070b14 55%)", color: "#e6ecf7",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 26, letterSpacing: 6, color: "#2dd4bf", textTransform: "uppercase", fontWeight: 700 }}>Portfolio</div>
          <div style={{ fontSize: 92, fontWeight: 800, letterSpacing: -3, marginTop: 18 }}>{site.name}</div>
          <div style={{ fontSize: 40, color: "#94a3bd", marginTop: 8 }}>{site.title}</div>
        </div>
        <div style={{ display: "flex", gap: 28 }}>
          {stats.slice(0, 3).map((s) => (
            <div key={s.label} style={{ display: "flex", flexDirection: "column", padding: "22px 26px", borderRadius: 18, border: "2px solid #1b2740", background: "#0d1526", width: 330 }}>
              <div style={{ fontSize: 52, fontWeight: 800, color: "#2dd4bf" }}>{s.value}</div>
              <div style={{ fontSize: 22, color: "#94a3bd", marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
