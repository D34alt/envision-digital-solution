import { ogContentType, ogSize, renderOgImage } from "@/lib/og-image";

export const alt =
  "Resources - Free guides and checklists to help businesses grow with more clarity.";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OpengraphImage() {
  return renderOgImage({
    eyebrow: "Resources",
    title: "Free resources to help you grow with more clarity.",
    subtitle:
      "Practical guides and checklists for marketing, websites, and local growth.",
  });
}
