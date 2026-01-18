import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

  const routes = [
    "/",
    "/metodologia",
    "/o-agir",
    "/o-caminho-de-hermes",
    "/o-mago",
    "/o-ver",
  ]

  const now = new Date()

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.6,
  }))
}
