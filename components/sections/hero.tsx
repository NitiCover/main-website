import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { HeroScrollImage } from "@/components/sections/hero-scroll-image";

export function Hero() {
  return (
    <div
      className="flex flex-col overflow-hidden bg-white/40 pt-16 pb-12 md:pt-24 md:pb-20"
      id="hero"
    >
      <ContainerScroll
        titleComponent={
          <>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3087d0]">
              Business insurance, reimagined
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-[#0e2c54] md:text-5xl">
              Get covered
              <br />
              <span className="mt-1 text-4xl font-bold leading-none text-[#0e2c54] md:text-[5.5rem]">
                without the busywork.
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base text-[#52627a] md:text-lg">
              NitiCover is an automated insurance brokerage that gets startups
              and tech companies covered — fast, unbiased, and fully
              transparent, from first message to signed policy.
            </p>
          </>
        }
      >
        <HeroScrollImage />
      </ContainerScroll>
    </div>
  );
}
