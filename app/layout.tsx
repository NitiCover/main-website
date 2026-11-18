import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Inter,
  Parkinsans,
  Stack_Sans_Headline,
  Stack_Sans_Text,
} from "next/font/google";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteNav } from "@/components/site/site-nav";
import { AirtableSlotProvider } from "@/components/waitlist/airtable-preload";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// NitiCover brand typefaces (Figma brand guide).
const stackSansHeadline = Stack_Sans_Headline({
  variable: "--font-stack-headline",
  subsets: ["latin"],
  // No fallback metrics ship for this family yet.
  adjustFontFallback: false,
  fallback: ["system-ui", "sans-serif"],
});

const stackSansText = Stack_Sans_Text({
  variable: "--font-stack-text",
  subsets: ["latin"],
  // No fallback metrics ship for this family yet.
  adjustFontFallback: false,
  fallback: ["system-ui", "sans-serif"],
});

const parkinsans = Parkinsans({
  variable: "--font-parkinsans",
  subsets: ["latin"],
  // No fallback metrics ship for this family yet.
  adjustFontFallback: false,
  fallback: ["system-ui", "sans-serif"],
});

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NitiCover — Smart Insurance, Secure Future",
  description:
    "India's first AI-native insurance broker. NitiCover turns risk intake, insurer submissions, matching and coverage comparison into one explainable workflow — autonomous where possible, validated by humans where it matters.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${stackSansHeadline.variable} ${stackSansText.variable} ${parkinsans.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-niti-teal focus:px-5 focus:py-3 focus:font-headline focus:text-white"
        >
          Skip to content
        </a>
        <AirtableSlotProvider>
          <SiteNav />
          <main id="main" className="flex flex-1 flex-col">
            {children}
          </main>
          <SiteFooter />
        </AirtableSlotProvider>
      </body>
    </html>
  );
}
