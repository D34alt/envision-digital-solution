import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const alt =
  "Envision Digital Solution - Modern, intuitive websites for growing businesses.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logoBuffer = await readFile(
    path.join(process.cwd(), "public/branding/circle-blue.png"),
  );
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(circle at 15% 20%, rgba(34, 211, 238, 0.22), transparent 55%), radial-gradient(circle at 85% 90%, rgba(37, 99, 235, 0.28), transparent 50%), #020617",
          color: "#e2e8f0",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
          <img
            src={logoSrc}
            alt="Envision Digital Solution logo"
            width={120}
            height={120}
            style={{ borderRadius: "999px" }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <span
              style={{
                fontSize: "28px",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#22d3ee",
                fontWeight: 600,
              }}
            >
              Envision
            </span>
            <span
              style={{
                fontSize: "22px",
                color: "#94a3b8",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Digital Solution
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            maxWidth: "900px",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "84px",
              lineHeight: 1.05,
              fontWeight: 700,
              color: "#f8fafc",
              letterSpacing: "-0.02em",
            }}
          >
            Modern, intuitive websites for growing businesses.
          </h1>
          <p
            style={{
              margin: 0,
              fontSize: "30px",
              color: "#cbd5f5",
              lineHeight: 1.4,
            }}
          >
            Strategy, design, and development crafted to grow your brand online.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "26px",
            color: "#94a3b8",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <span
              style={{
                width: "14px",
                height: "14px",
                borderRadius: "999px",
                background: "#22d3ee",
                boxShadow: "0 0 24px rgba(34, 211, 238, 0.9)",
              }}
            />
            envisiondigitalsolutions.com.au
          </span>
          <span style={{ color: "#64748b" }}>Based in Australia</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
