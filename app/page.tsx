import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { WhatWeDo } from "@/components/sections/what-we-do";
import { HowDifferent } from "@/components/sections/how-different";
import { Benefits } from "@/components/sections/benefits";
import { Stats } from "@/components/sections/stats";
import { Cta } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <HowDifferent />
      <Benefits />
      <Stats />
      <Cta />
      <Footer />
    </div>
  );
}
