import type { MetadataRoute } from "next";
import { academyUrl } from "@/lib/seo";

export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/program", "/about", "/contact"].map(path => ({ url: `${academyUrl}${path}` }));
}
