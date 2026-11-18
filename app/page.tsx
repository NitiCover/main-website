import { ClosingCta } from "@/components/landing/closing-cta";
import { Faq } from "@/components/landing/faq";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { InsuranceBasics } from "@/components/landing/insurance-basics";
import { PlatformShowcase } from "@/components/landing/platform-showcase";
import { ProblemIntro } from "@/components/landing/problem-intro";
import { ProblemsFixes } from "@/components/landing/problems-fixes";

// Figma "Niticover" home page (node 170:72). Frames are stacked 72px apart.
export default function Home() {
  return (
    <div className="flex flex-1 flex-col gap-[clamp(40px,5.6vw,72px)] bg-white pb-[clamp(40px,5.6vw,72px)]">
      <Hero />
      <HowItWorks />
      <div>
        <ProblemIntro />
        <ProblemsFixes />
      </div>
      <PlatformShowcase />
      <InsuranceBasics />
      <Faq />
      <ClosingCta />
    </div>
  );
}
