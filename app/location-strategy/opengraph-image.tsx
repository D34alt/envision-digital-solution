import { ogContentType, ogSize, renderOgImage } from "@/lib/og-image";

export const alt =
  "Location Strategy - Choose better locations and target better areas with confidence.";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OpengraphImage() {
  return renderOgImage({
    eyebrow: "Location Strategy",
    title:
      "Choose better locations. Target better areas. Grow with more confidence.",
    subtitle:
      "Suburb data, demographics, and competitor insight before you spend.",
    variant: "service",
  });
}
