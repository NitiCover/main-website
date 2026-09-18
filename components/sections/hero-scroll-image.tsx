"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export function HeroScrollImage() {
  const frameRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start 0.15", "end start"],
  });

  // Smoothly pan through the chat messages while the header and footer stay pinned
  const panY = useTransform(
    scrollYProgress,
    [0, 0.1, 0.85],
    ["0%", "0%", "-78%"]
  );

  return (
    <div
      ref={frameRef}
      className="relative flex h-full w-full flex-col overflow-hidden bg-[#efeae2]"
    >
      {/* 1. Fixed Top WhatsApp App Bar & Safe Area (below Dynamic Island) */}
      <div className="relative z-20 flex-shrink-0 bg-[#f0f2f5] pt-12 pb-0.5 shadow-xs border-b border-black/5">
        <div className="relative w-full">
          <Image
            src="/whatsapp-header.png"
            alt="NitiCover WhatsApp Contact Header"
            width={1175}
            height={168}
            priority
            className="h-auto w-full object-cover"
          />
        </div>
      </div>

      {/* 2. Scrollable WhatsApp Chat Message Stream */}
      <div className="relative flex-1 overflow-hidden bg-[#efeae2]">
        <motion.div style={{ y: panY }} className="w-full">
          <Image
            src="/whatsapp-chat-body.png"
            alt="NitiCover automated insurance quote conversation stream"
            width={1175}
            height={5108}
            priority
            className="h-auto w-full object-cover object-top"
          />
        </motion.div>
      </div>

      {/* 3. Fixed Bottom WhatsApp Message Input Bar & Home Indicator */}
      <div className="relative z-20 flex-shrink-0 bg-[#f0f2f5] border-t border-black/5 pb-1">
        <div className="relative w-full">
          <Image
            src="/whatsapp-input-bar.png"
            alt="WhatsApp Message Input Bar"
            width={1175}
            height={142}
            priority
            className="h-auto w-full object-cover"
          />
        </div>
        {/* iOS Home Indicator Bar */}
        <div className="flex justify-center py-1">
          <span className="h-1 w-24 rounded-full bg-slate-950/35" />
        </div>
      </div>
    </div>
  );
}
