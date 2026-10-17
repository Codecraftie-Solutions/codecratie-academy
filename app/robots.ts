import type { MetadataRoute } from "next";
import { academyUrl } from "@/lib/seo";

export const dynamic = "force-static";
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${academyUrl}/sitemap.xml` };
}
