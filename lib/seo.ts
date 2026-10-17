import type { Metadata } from "next";

export const academyUrl = "https://academy.codecraftie.com";
export const academyDescription = "Learn software engineering and AI foundations in an 8-week live online program for beginners. Build real projects with Code-Craftie Academy.";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const fullTitle = title.endsWith(" | Code-Craftie Academy") ? title : `${title} | Code-Craftie Academy`;
  return {
    title, description,
    alternates: { canonical: path },
    openGraph: { title: fullTitle, description, url: path, siteName: "Code-Craftie Academy", type: "website", locale: "en_NG", images: ["/og.png"] },
    twitter: { card: "summary_large_image", images: ["/og.png"], title: fullTitle, description },
  };
}
