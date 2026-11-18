import { ButtonLink, CtaBand, Highlight } from "@/components/brand";
import { DEMO_HREF } from "@/lib/landing-content";

export function ClosingCta() {
  return (
    <CtaBand
      id="cta-heading"
      descriptionClassName="lg:max-w-none lg:whitespace-nowrap"
      title={
        <>
          <span>Get your business covered</span>{" "}
          <span className="flex flex-wrap items-center justify-center gap-3">
            <Highlight className="px-2.5 text-niti-deep">in hours,</Highlight> not weeks.
          </span>
        </>
      }
      description="One form. Every insurer compared. A licensed expert on every decision."
      actions={
        <>
          <ButtonLink
            href={DEMO_HREF}
            variant="white"
            className="h-auto px-[22px] py-3 text-[19px] text-[#0b2545]"
          >
            Book a demo
          </ButtonLink>
          <ButtonLink
            href={DEMO_HREF}
            variant="outline-light"
            className="h-auto border px-[22px] py-3 text-[19px] hover:text-niti-deep"
          >
            Talk to a broker
          </ButtonLink>
        </>
      }
    />
  );
}
