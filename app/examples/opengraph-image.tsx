import { ogContentType, ogSize, renderOgImage } from "@/lib/og-image";

export const alt =
  "Examples - Real-world situations Envision Digital Solution helps businesses navigate.";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OpengraphImage() {
  return renderOgImage({
    eyebrow: "Examples",
    title: "Real-world situations we help businesses navigate.",
    subtitle:
      "Cafes, clinics, gyms, and growing businesses building smarter marketing.",
  });
}
