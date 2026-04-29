import { ogContentType, ogSize, renderOgImage } from "@/lib/og-image";

export const alt =
  "Paid Ads Management - Google Ads and Meta Ads built around lead quality, not just clicks.";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OpengraphImage() {
  return renderOgImage({
    eyebrow: "Paid Ads Management",
    title:
      "Stop watching your budget disappear into clicks that go nowhere.",
    subtitle:
      "Google Ads and Meta Ads with weekly optimisation focused on lead quality.",
    variant: "service",
  });
}
