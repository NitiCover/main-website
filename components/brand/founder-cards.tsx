import Image from "next/image";

import { founders, LINKEDIN_URL } from "@/lib/site-content";

import { ButtonLink } from "./button-link";

/** Founder profile cards, driven by the `founders` content list. */
export function FounderCards() {
  return (
    <ul className="grid gap-4 md:grid-cols-2 lg:gap-5">
      {founders.map((f) => (
        <li key={f.name} className="flex">
          <div className="flex w-full flex-col gap-5 rounded-[32px] bg-niti-cloud px-6 py-8 sm:flex-row sm:px-8 sm:py-10">
            <div className="relative size-20 shrink-0 overflow-hidden rounded-full bg-white ring-2 ring-white">
              <Image
                src={f.photo}
                alt={f.name}
                fill
                sizes="80px"
                placeholder="blur"
                className="object-cover"
                style={{
                  transform: `scale(${f.crop.scale})`,
                  transformOrigin: f.crop.origin,
                }}
              />
            </div>
            <div className="flex flex-col items-start gap-3">
              <div className="flex flex-col gap-1">
                <h3 className="font-headline text-[clamp(1.5rem,1.1rem+1.2vw,2rem)] leading-[1.25] font-semibold text-niti-ink">
                  {f.name}
                </h3>
                <p className="font-headline text-base font-semibold text-niti-teal">
                  {f.role}
                </p>
              </div>
              <p className="font-inter text-[15px] leading-normal text-niti-slate">
                {f.bio}
              </p>
              <ButtonLink href={LINKEDIN_URL} variant="outline-dark" size="sm">
                <span aria-hidden="true">LinkedIn</span>
                <span className="sr-only">NitiCover on LinkedIn</span>
              </ButtonLink>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
