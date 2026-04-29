import { ogContentType, ogSize, renderOgImage } from "@/lib/og-image";

export const alt =
  "Envision Digital Solution - Digital marketing, websites, and location strategy for growing businesses.";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OpengraphImage() {
  return renderOgImage({
    eyebrow: "Grow with more clarity",
    title:
      "Digital marketing, websites, and location strategy for growing businesses.",
    subtitle:
      "Strategy, design, and development built to attract better-fit customers.",
  });
}
