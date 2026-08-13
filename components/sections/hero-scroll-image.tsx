"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export function HeroScrollImage() {
  const frameRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start end", "end start"],
  });

  // The source screenshot is much taller than the portrait frame. Hold the
  // top of the image visible through the first 40% of the scroll-through
  // (so it isn't already panned away by the time the frame is readable),
  // then pan down to reveal the rest of the chat.
  const panY = useTransform(scrollYProgress, [0, 0.4, 1], ["0%", "0%", "-73%"]);
  const scale = useTransform(scrollYProgress, [1.0, 1.0, 1], [2.0, 1.02, 1.0]);

  return (
    <div
      ref={frameRef}
      className="relative h-full w-full overflow-hidden rounded-2xl bg-[#e7ddd3]"
    >
      <motion.div style={{ y: panY, scale }} className="">
        <Image
          src="/whatsapp-quote-demo-1.png"
          alt="NitiCover WhatsApp conversation walking through a cyber insurance quote request"
          width={1000}
          height={4000}
          preload
          className="object-contain"
        />
      </motion.div>
    </div>
  );
}
