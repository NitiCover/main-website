import Image from "next/image";
import { founders, LINKEDIN_URL } from "@/lib/site-content";
import { Reveal } from "@/components/ui/reveal";

export function FounderCards() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {founders.map((f, i) => (
        <Reveal key={f.name} delay={i * 0.08}>
          <div className="flex h-full gap-5 rounded-2xl border border-black/5 bg-white p-7 shadow-sm transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#3087d0]/40">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full bg-white ring-2 ring-[#eaf2fb]">
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
            <div>
              <h3 className="text-lg font-semibold text-[#0e2c54]">{f.name}</h3>
              <p className="text-sm font-semibold text-[#3087d0]">{f.role}</p>
              <p className="mt-2.5 text-[0.95rem] leading-relaxed text-[#52627a]">
                {f.bio}
              </p>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm font-semibold text-[#0e2c54] transition-colors hover:text-[#3087d0]"
              >
                LinkedIn →
              </a>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
