import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

type OgVariant = "default" | "service" | "legal";

type RenderOgImageParams = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  variant?: OgVariant;
};

const variantBackground: Record<OgVariant, string> = {
  default:
    "radial-gradient(circle at 15% 20%, rgba(34, 211, 238, 0.22), transparent 55%), radial-gradient(circle at 85% 90%, rgba(37, 99, 235, 0.28), transparent 50%), #020617",
  service:
    "radial-gradient(circle at 12% 18%, rgba(34, 211, 238, 0.28), transparent 55%), radial-gradient(circle at 90% 12%, rgba(99, 102, 241, 0.22), transparent 55%), radial-gradient(circle at 80% 95%, rgba(56, 189, 248, 0.18), transparent 55%), #020617",
  legal:
    "radial-gradient(circle at 80% 15%, rgba(99, 102, 241, 0.18), transparent 55%), radial-gradient(circle at 12% 90%, rgba(34, 211, 238, 0.16), transparent 55%), #020617",
};

export async function renderOgImage({
  eyebrow,
  title,
  subtitle,
  variant = "default",
}: RenderOgImageParams) {
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
          background: variantBackground[variant],
          color: "#e2e8f0",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
          {/* next/og's ImageResponse requires native <img>; next/image is not supported here. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
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
            maxWidth: "1000px",
          }}
        >
          <span
            style={{
              fontSize: "26px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#22d3ee",
              fontWeight: 600,
            }}
          >
            {eyebrow}
          </span>
          <h1
            style={{
              margin: 0,
              fontSize: title.length > 70 ? "64px" : "76px",
              lineHeight: 1.05,
              fontWeight: 700,
              color: "#f8fafc",
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </h1>
          {subtitle ? (
            <p
              style={{
                margin: 0,
                fontSize: "28px",
                color: "#cbd5f5",
                lineHeight: 1.4,
              }}
            >
              {subtitle}
            </p>
          ) : null}
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
    { ...ogSize },
  );
}
