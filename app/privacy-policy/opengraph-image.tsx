import { ogContentType, ogSize, renderOgImage } from "@/lib/og-image";

export const alt = "Privacy Policy - Envision Digital Solutions.";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OpengraphImage() {
  return renderOgImage({
    eyebrow: "Legal",
    title: "Privacy Policy",
    subtitle:
      "How we collect, use, and protect your personal information.",
    variant: "legal",
  });
}
