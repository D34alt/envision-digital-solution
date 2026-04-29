import { ogContentType, ogSize, renderOgImage } from "@/lib/og-image";

export const alt =
  "SEO and Content Strategy - Local SEO and intent-led content that earns rankings.";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OpengraphImage() {
  return renderOgImage({
    eyebrow: "SEO and Content Strategy",
    title:
      "Be found by the right people, at the moment they are ready to enquire.",
    subtitle:
      "Local SEO and intent-led content that compounds month after month.",
    variant: "service",
  });
}
