import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ParticleField } from "@/components/background/particle-field";
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

export const metadata: Metadata = {
  title: "NitiCover — Smart Insurance, Secure Future",
  description:
    "India's first AI-native insurance broker. NitiCover turns risk intake, insurer submissions, matching and coverage comparison into one explainable workflow — autonomous where possible, validated by humans where it matters.",
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
          <AirtableSlotProvider>{children}</AirtableSlotProvider>
        </div>
      </body>
    </html>
  );
}
