import { ogContentType, ogSize, renderOgImage } from "@/lib/og-image";

export const alt =
  "Services - Websites, SEO, paid ads, automation, and location strategy by Envision Digital Solution.";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OpengraphImage() {
  return renderOgImage({
    eyebrow: "Services",
    title: "Everything you need to grow smarter.",
    subtitle:
      "Websites, SEO, paid ads, automation, and location strategy as one system.",
    variant: "service",
  });
}
