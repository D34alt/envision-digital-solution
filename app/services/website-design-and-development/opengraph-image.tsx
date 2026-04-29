import { ogContentType, ogSize, renderOgImage } from "@/lib/og-image";

export const alt =
  "Website Design and Development - Mobile-first, conversion-focused websites for Melbourne businesses.";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OpengraphImage() {
  return renderOgImage({
    eyebrow: "Website Design and Development",
    title:
      "Your website should be your hardest-working salesperson, not your biggest disappointment.",
    subtitle:
      "Fast, mobile-first builds that turn visitors into enquiries.",
    variant: "service",
  });
}
