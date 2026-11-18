import type { ReactNode } from "react";

import { insurers, platformPromises } from "@/lib/landing-content";
import { cn } from "@/lib/utils";

import { Decor, Eyebrow, Highlight } from "@/components/brand/primitives";

// Figma frame 211:103. The 760 x 760 "Swirl" artboard scales as one unit:
// `--u` is one Figma pixel of that artboard.
export function PlatformShowcase() {
  return (
    <section
      id="platform"
      aria-labelledby="platform-heading"
      className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-10 overflow-hidden px-4 py-16 sm:px-8 lg:flex-row lg:gap-[30px] lg:py-0 lg:pr-[10px] lg:pl-[10px]"
    >
      <div className="@container w-full max-w-[760px] shrink-0 [--u:calc(100cqw/760)] lg:w-[59.4%]">
        <OfferArtwork />
      </div>

      <div className="flex w-full max-w-[470px] flex-col gap-6">
        <div className="flex flex-col items-start gap-6">
          <Eyebrow>The platform</Eyebrow>
          <h2
            id="platform-heading"
            className="flex flex-col items-start gap-1 font-headline text-[clamp(2rem,1.4rem+1.9vw,2.5rem)] leading-[1.3] text-niti-ink"
          >
            <span>See every option.</span>{" "}
            <span className="flex flex-wrap items-start gap-1">
              Know every{" "}
              <Highlight className="px-2.5 font-display text-[1.1em] font-medium tracking-[-0.02em]">
                reason.
              </Highlight>
            </span>
          </h2>
        </div>
        <p className="font-inter text-lg leading-[1.55] text-niti-slate">
          Compare plans side by side. Price, cover and exactly why we recommend one on WhatsApp, or
          on a dashboard if your team needs it.
        </p>
        <ul className="flex flex-col gap-6">
          {platformPromises.map((item) => (
            <li key={item.title} className="flex items-start gap-4 rounded-[20px] bg-niti-mist p-5">
              <span
                aria-hidden="true"
                className="grid size-11 shrink-0 place-items-center rounded-full bg-niti-teal font-inter text-lg font-semibold text-white"
              >
                {item.icon}
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-headline text-xl font-semibold tracking-[-0.01em] text-niti-ink">
                  {item.title}
                </h3>
                <p className="font-inter text-[15px] leading-normal text-niti-slate">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const u = (px: number) => `calc(var(--u) * ${px})`;

function OfferArtwork() {
  return (
    <div className="relative aspect-square w-full overflow-hidden" role="img" aria-label="Sample offer: three insurers compared, approved by a licensed broker, with a WhatsApp renewal reminder">
      {/* Purple swirl */}
      <div className="absolute" style={{ left: "-1.84%", top: "16.32%", width: "28.35%", height: "48.02%" }}>
        <Decor src="/landing/platform-swirl.svg" className="top-[-7.66%] left-[-0.53%] h-[115.33%] w-[113.52%]" />
      </div>

      {/* Offer dashboard, tilted -4deg */}
      <div
        className="absolute grid place-items-center"
        style={{ left: "15.56%", top: "18.35%", width: "76.6%", height: "49.37%" }}
      >
        <div
          className="flex -rotate-4 flex-col border border-[rgba(11,37,69,0.08)] bg-white shadow-[0_30px_60px_0_rgba(0,26,82,0.18)]"
          style={{ width: u(560), gap: u(14), padding: u(24), borderRadius: u(24) }}
        >
          <div className="flex items-start justify-between">
            <div className="flex flex-col whitespace-nowrap" style={{ gap: u(4) }}>
              <p className="font-headline font-semibold text-niti-ink" style={{ fontSize: u(22), letterSpacing: u(-0.22) }}>
                Your offer is ready
              </p>
              <p className="font-headline text-niti-slate" style={{ fontSize: u(13) }}>
                Mehta Textiles Pvt. Ltd. · Fire, transit & employee cover
              </p>
            </div>
            <Pill className="bg-niti-lime font-headline text-niti-lime-ink">Ready in 6 hrs</Pill>
          </div>

          {insurers.map((ins, i) => {
            const best = i === 0;
            return (
              <div
                key={ins.name}
                className={cn("flex flex-col", best ? "bg-niti-teal" : "bg-niti-mist")}
                style={{ gap: u(10), padding: u(14), borderRadius: u(16) }}
              >
                <div className="flex items-center" style={{ gap: u(8) }}>
                  <div className="flex flex-1 items-center" style={{ gap: u(10) }}>
                    <span
                      className={cn(
                        "grid shrink-0 place-items-center rounded-full font-semibold",
                        best ? "bg-niti-lime font-display text-niti-lime-ink" : "bg-white font-headline text-niti-ink",
                      )}
                      style={{ width: u(28), height: u(28), fontSize: u(13) }}
                    >
                      {ins.initial}
                    </span>
                    <span
                      className={cn("font-headline font-semibold whitespace-nowrap", best ? "text-white" : "text-niti-ink")}
                      style={{ fontSize: u(15) }}
                    >
                      {ins.name}
                    </span>
                  </div>
                  {[ins.premium, ins.cover].map((v) => (
                    <span
                      key={v}
                      className={cn("font-text font-medium", best ? "text-white" : i === 1 ? "text-niti-teal" : "text-[#0b2545]")}
                      style={{ width: u(86), fontSize: u(14) }}
                    >
                      {v}
                    </span>
                  ))}
                  <Pill className={cn("font-text", best ? "bg-niti-lime text-niti-lime-ink" : "bg-white text-niti-ink")}>
                    {ins.score}
                  </Pill>
                </div>
                {best && (
                  <p className="font-text leading-[1.4] text-white/85" style={{ fontSize: u(12.5) }}>
                    Recommended — covers stock in transit, lowest deductible for textile units.
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* WhatsApp reminder toast */}
      <div
        className="absolute flex items-center overflow-hidden bg-niti-teal shadow-[0_16px_32px_0_rgba(0,26,82,0.3)]"
        style={{ left: "51.08%", top: "74.74%", width: "40.39%", height: "8.42%", gap: u(12), padding: `${u(12)} ${u(18)} ${u(12)} ${u(12)}`, borderRadius: u(18) }}
      >
        <span
          className="grid shrink-0 place-items-center rounded-full bg-niti-lime font-display font-semibold text-niti-teal"
          style={{ width: u(40), height: u(40), fontSize: u(13) }}
        >
          14d
        </span>
        <span className="flex flex-col whitespace-nowrap" style={{ gap: u(2) }}>
          <span className="font-display font-semibold text-white" style={{ fontSize: u(14) }}>
            Reminder sent on WhatsApp
          </span>
          <span className="font-inter text-white/70" style={{ fontSize: u(12) }}>
            Renewal due in 14 days · call scheduled
          </span>
        </span>
      </div>

      {/* Approval chip, tilted +4deg */}
      <div
        className="absolute grid place-items-center"
        style={{ left: "9.8%", top: "16.93%", width: "35.34%", height: "8.48%" }}
      >
        <div
          className="flex rotate-4 items-center rounded-full bg-niti-lime"
          style={{ width: u(266), gap: u(10), padding: `${u(8)} ${u(18)} ${u(8)} ${u(8)}` }}
        >
          <span
            className="grid shrink-0 place-items-center rounded-full bg-niti-teal font-display font-semibold text-niti-lime"
            style={{ width: u(30), height: u(30), fontSize: u(14) }}
          >
            ✓
          </span>
          <span className="font-headline font-semibold whitespace-nowrap text-niti-ink" style={{ fontSize: u(14) }}>
            Approved by a licensed broker
          </span>
        </div>
      </div>
    </div>
  );
}

function Pill({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn("shrink-0 rounded-full font-semibold whitespace-nowrap", className)}
      style={{ padding: `${u(4)} ${u(10)}`, fontSize: u(12) }}
    >
      {children}
    </span>
  );
}
