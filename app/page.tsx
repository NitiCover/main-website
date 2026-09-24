import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { WhatWeDo } from "@/components/sections/what-we-do";
import { HowDifferent } from "@/components/sections/how-different";
import { Benefits } from "@/components/sections/benefits";
import { Capabilities } from "@/components/sections/capabilities";
import { Explainability } from "@/components/sections/explainability";
import { Stats } from "@/components/sections/stats";
import { InvestorStrip } from "@/components/sections/investor-strip";
import { Cta } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <Hero />
      <Benefits />
      <WhatWeDo />
      <Capabilities />
      <HowDifferent />
      <Explainability />
      <Stats />
      <InvestorStrip />
      <Cta />
      <Footer />
    </div>
  );
}
