import type { MetadataRoute } from "next";
import { catalog } from "@/data/catalog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  const staticRoutes = [
    "",
    "/products",
    "/about",
    "/contact"
  ].map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date()
  }));

  const categoryRoutes = catalog.map((c) => ({
    url: `${base}/products/${c.slug}`,
    lastModified: new Date()
  }));

  return [...staticRoutes, ...categoryRoutes];
}
