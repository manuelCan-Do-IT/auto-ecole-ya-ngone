import type { MetadataRoute } from "next";
import { editorialArticles } from "./editorial-content";
import { siteUrl } from "./site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/conseils`, changeFrequency: "weekly", priority: 0.8 },
    ...editorialArticles.map((article) => ({ url: `${siteUrl}/conseils/${article.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
