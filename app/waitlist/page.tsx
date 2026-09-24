import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { InView } from "@/components/motion-primitives/in-view";
import { AirtableSlot } from "@/components/waitlist/airtable-preload";

export const metadata: Metadata = {
  title: "Join the Waitlist — NitiCover",
  description:
    "Insurance for you and your family — explained, compared, done. Join the NitiCover waitlist and we'll email you once, when we open.",
};

export default function WaitlistPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <section className="mx-auto w-full max-w-3xl px-6 text-center">
        <InView
          className="mt-10"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <AirtableSlot />
        </InView>
      </section>
      <Footer />
    </div>
  );
}
