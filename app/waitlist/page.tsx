import type { Metadata } from "next";
import { Highlight, PageHero } from "@/components/brand";
import { AirtableSlot } from "@/components/waitlist/airtable-preload";

export const metadata: Metadata = {
  title: "Join the Waitlist - NitiCover",
  description:
    "Insurance for you and your family, explained, compared, done. Join the NitiCover waitlist and we'll email you once, when we open.",
};

export default function WaitlistPage() {
  return (
    <div className="flex flex-1 flex-col gap-[clamp(40px,5.6vw,72px)] pb-[clamp(40px,5.6vw,72px)]">
      <PageHero
        eyebrow="Waitlist"
        title={
          <>
            Join the <Highlight>NitiCover</Highlight> waitlist
          </>
        }
        description="Insurance for you and your family, explained, compared, done. We'll email you once, when we open."
      />
      <section className="mx-auto w-full max-w-3xl px-4 sm:px-8 animate-in fade-in duration-500">
        <AirtableSlot />
      </section>
    </div>
  );
}
