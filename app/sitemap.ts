// app/sitemap.ts
import type { MetadataRoute } from "next";
import { postList } from "./blog/index";

const SITE_URL = "https://www.fuuei-todokede.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/operator`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];

  const articlePages: MetadataRoute.Sitemap = postList
    .filter((meta) => meta.isPublished)
    .map((meta) => ({
      url: `${SITE_URL}/blog/${meta.slug}`,
      lastModified: meta.modifiedTime
        ? new Date(meta.modifiedTime)
        : new Date(meta.date ?? new Date()),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));

  return [...staticPages, ...articlePages];
}
