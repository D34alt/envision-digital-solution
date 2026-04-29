import { ogContentType, ogSize, renderOgImage } from "@/lib/og-image";

export const alt =
  "Contact Envision Digital Solution - Book a strategy conversation.";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OpengraphImage() {
  return renderOgImage({
    eyebrow: "Contact",
    title: "Let us help you grow with more clarity.",
    subtitle:
      "Book a strategy call. Most enquiries get a reply within one business day.",
  });
}
