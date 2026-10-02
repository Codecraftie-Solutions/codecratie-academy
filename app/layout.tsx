import type { Metadata } from "next";
import { Montserrat, Syne } from "next/font/google";
import "./globals.css";
import "./polish.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const body = Montserrat({ subsets: ["latin"], variable: "--font-body-face", display: "swap" });
const display = Syne({ subsets: ["latin"], weight: ["600","700","800"], variable: "--font-display-face", display: "swap" });

export const metadata: Metadata = {
  title: "CodeCraftie | Learn to Think. Learn to Build.",
  description:
    "CodeCraftie Academy's Software Engineering & AI Foundations: an 8-week live online program for beginners who want to understand technology, build real software, and learn to work effectively with AI.",
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
