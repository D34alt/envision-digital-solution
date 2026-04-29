import { ogContentType, ogSize, renderOgImage } from "@/lib/og-image";

export const alt = "Terms and Conditions - Envision Digital Solutions.";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OpengraphImage() {
  return renderOgImage({
    eyebrow: "Legal",
    title: "Terms and Conditions",
    subtitle:
      "The terms that apply when you use the Envision Digital Solutions website.",
    variant: "legal",
  });
}
