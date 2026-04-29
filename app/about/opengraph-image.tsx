import { ogContentType, ogSize, renderOgImage } from "@/lib/og-image";

export const alt =
  "About Envision Digital Solution - Practical digital strategy with less guesswork.";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OpengraphImage() {
  return renderOgImage({
    eyebrow: "About Envision",
    title: "We help businesses grow with more clarity and less guesswork.",
    subtitle:
      "Practical digital strategy, clean websites, and location-based insights.",
  });
}
