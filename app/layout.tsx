import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ParticleField } from "@/components/background/particle-field";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NitiCover — Smart Insurance, Secure Future",
  description:
    "NitiCover is an automated insurance brokerage for startups and tech companies. Get quotes from 20+ insurers in about a week, and choose the best from the top 4-5 — no hassle, full transparency, 24/7 support.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ParticleField />
        <div className="relative z-10 flex min-h-full flex-1 flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
