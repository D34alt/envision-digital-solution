import type { MetadataRoute } from "next";

const siteUrl = "https://envisiondigitalsolutions.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/services", changeFrequency: "monthly", priority: 0.9 },
    {
      path: "/services/website-design-and-development",
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      path: "/services/seo-and-content-strategy",
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      path: "/services/paid-ads-management",
      changeFrequency: "monthly",
      priority: 0.85,
    },
    { path: "/location-strategy", changeFrequency: "monthly", priority: 0.85 },
    { path: "/about", changeFrequency: "monthly", priority: 0.7 },
    { path: "/examples", changeFrequency: "monthly", priority: 0.7 },
    { path: "/resources", changeFrequency: "weekly", priority: 0.7 },
    { path: "/contact", changeFrequency: "yearly", priority: 0.6 },
    {
      path: "/privacy-policy",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      path: "/terms-and-conditions",
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
