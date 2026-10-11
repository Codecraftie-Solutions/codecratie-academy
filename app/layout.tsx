import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import "./polish.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// One family for headings and text, shared with codecraftie.com.
const body = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-body-face", display: "swap", axes: ["opsz", "wdth"] });
const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display-face", display: "swap", axes: ["opsz", "wdth"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://academy.codecraftie.com"),
  title: "Code-Craftie Academy | Learn to Think. Learn to Build.",
  openGraph: { siteName: "Code-Craftie Academy", type: "website", locale: "en_NG", images: ["/og.png"] },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
  description:
    "Code-Craftie Academy's Software Engineering & AI Foundations: an 8-week live online program for beginners who want to understand technology, build real software, and learn to work effectively with AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
