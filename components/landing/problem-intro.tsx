import Image from "next/image";

import { Decor, Eyebrow, pct } from "./primitives";

// Figma frame 199:116, 1280 x 805. Offsets are % of that frame.
export function ProblemIntro() {
  return (
    <section
      aria-labelledby="problem-heading"
      className="relative mx-auto w-full max-w-[1280px] overflow-hidden rounded-t-[32px] bg-niti-periwinkle lg:min-h-[805px] lg:rounded-t-[48px]"
    >
      <div
        aria-hidden="true"
        className="absolute"
        style={{ left: "-19.22%", bottom: "-8.57%", width: "134.3%", height: "119.38%" }}
      >
        <Image
          src="/landing/problem-glass.png"
          alt=""
          fill
          sizes="134vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(143,147,255,0.2)]" />
      </div>
      <Decor
        src="/landing/problem-ring-top.svg"
        className="mix-blend-screen"
        {...pct({ left: 7.5, top: -40.75, width: 44.69 })}
      />
      <Decor
        src="/landing/problem-ring-bottom.svg"
        className="mix-blend-screen"
        {...pct({ left: -6.56, bottom: -25.59, width: 32.19 })}
      />

      <div className="relative flex flex-col items-start gap-6 px-6 py-20 sm:px-12 lg:py-0 lg:pt-[217px] lg:pl-[111px]">
        <Eyebrow>The problem</Eyebrow>
        <div className="flex max-w-[499px] flex-col gap-6 text-white">
          <h2
            id="problem-heading"
            className="font-headline text-[clamp(2.25rem,1.5rem+2.4vw,3rem)] leading-[1.12] font-medium"
          >
            Buying business insurance today is{" "}
            <span className="text-[#34355f]">slow, opaque stacked against you.</span>
          </h2>
          <p className="max-w-[468px] font-inter text-lg leading-[1.55]">
            A good broker should give you choices, explain clearly, help when you claim and take the
            stress away. Most don’t. Here’s what businesses run into instead.
          </p>
        </div>
      </div>
    </section>
  );
}
