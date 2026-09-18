"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { FaArrowRight, FaChevronDown, FaXmark } from "react-icons/fa6";

export interface Hero10NavItem {
  label: string;
  href: string;
  hasMenu?: boolean;
}

export interface Hero10Props {
  brandName?: string;
  brandLogo?: ReactNode;
  navItems?: Hero10NavItem[];
  ctaText?: string;
  ctaHref?: string;
  eyebrowText?: string;
  title?: ReactNode;
  description?: ReactNode;
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
  bottomLabel?: string;
  usersText?: string;
  backgroundImage?: string;
  children?: ReactNode;
  showNav?: boolean;
}

const defaultNavItems: Hero10NavItem[] = [
  { label: "What We Do", href: "#what-we-do" },
  { label: "How We're Different", href: "#how-different" },
  { label: "Why Us", href: "#benefits" },
  { label: "Contact", href: "#contact" },
];

const defaultBackground = "https://assets.watermelon.sh/hero-10-bg.avif";

export const headerVariants: Variants = {
  hidden: { opacity: 0, y: -16, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", duration: 0.68, bounce: 0 },
  },
};

export const contentContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.1,
    },
  },
};

export const contentItem: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", duration: 0.72, bounce: 0 },
  },
};

export const backgroundVariants: Variants = {
  hidden: { opacity: 0, scale: 1.035, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { type: "spring", duration: 1.15, bounce: 0 },
  },
};

function MobileMenuIcon() {
  return (
    <span
      className="h-3.5 w-4 bg-[linear-gradient(to_bottom,currentColor_0_2px,transparent_2px_6px,currentColor_6px_8px,transparent_8px_12px,currentColor_12px_14px)]"
      aria-hidden="true"
    />
  );
}

export function Hero10({
  brandName = "NitiCover",
  brandLogo,
  navItems = defaultNavItems,
  ctaText = "Join the waitlist",
  ctaHref = "/waitlist",
  eyebrowText = "Business insurance, reimagined",
  title = "Get covered\nwithout the busywork.",
  description = "NitiCover is an automated insurance brokerage that gets startups and tech companies covered — fast, unbiased, and fully transparent, from first message to signed policy.",
  primaryText = "Join the waitlist",
  primaryHref = "/waitlist",
  secondaryText,
  secondaryHref,
  usersText = "Trusted by fast-growing startups",
  backgroundImage = defaultBackground,
  children,
  showNav = true,
}: Hero10Props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <section className="relative isolate min-h-screen w-full overflow-hidden bg-slate-100 font-sans text-slate-900 antialiased">
      {/* Background with blur and scale */}
      <motion.div
        variants={backgroundVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        className="absolute inset-0 will-change-transform"
        aria-hidden="true"
      >
        <img
          src={backgroundImage}
          alt=""
          className="h-full w-full object-cover object-center outline outline-1 outline-black/10"
        />
      </motion.div>

      {/* Modern gradient overlays */}
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(240,245,250,0.86)_0%,rgba(248,250,252,0.65)_35%,rgba(235,243,250,0.25)_70%,rgba(14,44,84,0.12)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 h-[50%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.5)_45%,rgba(255,255,255,0)_75%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-[760px] w-full max-w-[1440px] flex-col px-5 py-5 sm:min-h-screen sm:px-10 lg:px-[74px]">
        {showNav && (
          <motion.header
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            className="flex h-14 items-center justify-between"
          >
            <a
              href="#"
              className="inline-flex min-h-10 items-center font-serif text-[25px] leading-none font-medium tracking-[-0.035em] text-[#0e2c54] transition-[opacity,transform] duration-200 ease-out hover:opacity-75 active:scale-[0.96]"
            >
              {brandLogo || brandName}
            </a>

            <nav className="hidden items-center gap-10 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group inline-flex min-h-10 items-center gap-1.5 text-sm leading-none font-normal text-slate-800 transition-colors duration-200 ease-out hover:text-[#3087d0]"
                >
                  <span>{item.label}</span>
                  {item.hasMenu ? (
                    <FaChevronDown className="size-2.5 transition-transform duration-200 ease-out group-hover:translate-y-0.5" />
                  ) : null}
                </a>
              ))}
            </nav>

            <div className="flex gap-2">
              <motion.a
                href={ctaHref}
                whileTap={{ scale: 0.96 }}
                className="hidden min-h-10 items-center gap-2 rounded-full border border-[#0e2c54]/30 bg-white/40 px-5 text-sm leading-none font-medium text-[#0e2c54] shadow-[0_1px_1px_rgba(255,255,255,0.6)_inset] backdrop-blur-md transition-[background-color,border-color,transform] duration-200 ease-out hover:border-[#0e2c54] hover:bg-white/70 sm:inline-flex"
              >
                <span>{ctaText}</span>
                <FaArrowRight className="size-3" />
              </motion.a>

              <button
                type="button"
                aria-label="Open navigation menu"
                onClick={() => setMobileOpen(true)}
                className="inline-flex size-10 items-center justify-center rounded-full border border-[#0e2c54]/30 bg-white/30 text-[#0e2c54] backdrop-blur-md transition-[background-color,transform] duration-200 ease-out hover:bg-white/50 active:scale-[0.96] lg:hidden"
              >
                <MobileMenuIcon />
              </button>
            </div>
          </motion.header>
        )}

        <AnimatePresence initial={false}>
          {mobileOpen ? (
            <motion.div
              initial={{ opacity: 0, y: -10, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -6, filter: "blur(5px)" }}
              transition={{ type: "spring", duration: 0.3, bounce: 0 }}
              className="fixed inset-x-4 top-4 z-50 rounded-[28px] bg-white/90 p-4 text-slate-950 shadow-[0_24px_80px_rgba(15,23,42,0.22)] outline outline-1 outline-white/70 backdrop-blur-xl lg:hidden"
            >
              <div className="flex items-center justify-between pl-3">
                <a
                  href="#"
                  className="font-serif text-2xl font-medium tracking-[-0.035em] text-[#0e2c54]"
                >
                  {brandName}
                </a>
                <button
                  type="button"
                  aria-label="Close navigation menu"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex size-10 items-center justify-center rounded-full text-slate-950 transition-[background-color,transform] duration-200 ease-out hover:bg-slate-950/5 active:scale-[0.96]"
                >
                  <FaXmark className="size-4" />
                </button>
              </div>

              <nav className="mt-5 grid gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="inline-flex min-h-11 items-center justify-between rounded-2xl px-3 text-sm font-medium text-slate-900 transition-colors duration-200 ease-out hover:bg-slate-950/5"
                  >
                    <span>{item.label}</span>
                    {item.hasMenu ? <FaChevronDown className="size-3" /> : null}
                  </a>
                ))}
              </nav>

              <motion.a
                href={ctaHref}
                whileTap={{ scale: 0.96 }}
                className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[#0e2c54] px-5 text-sm font-medium text-white transition-[background-color,transform] duration-200 ease-out hover:bg-[#0e2c54]/90"
              >
                {ctaText}
                <FaArrowRight className="size-3" />
              </motion.a>
            </motion.div>
          ) : null}
        </AnimatePresence>

        {children ? (
          children
        ) : (
          <motion.div
            variants={contentContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.42 }}
            className="mx-auto flex w-full max-w-[760px] flex-1 flex-col items-center pt-[76px] text-center sm:pt-[94px] lg:pt-[68px]"
          >
            <motion.div
              variants={contentItem}
              className="inline-flex min-h-7 items-center gap-2 rounded-full border border-sky-900/15 bg-white/40 px-3.5 text-[11px] leading-none font-medium text-slate-700 shadow-[0_1px_1px_rgba(255,255,255,0.6)_inset] backdrop-blur-md"
            >
              <span className="grid size-4 place-items-center rounded-full border border-[#3087d0]/40 bg-sky-100/70">
                <span className="size-2 rounded-full bg-[#3087d0] shadow-[0_0_0_2px_rgba(48,135,208,0.2)]" />
              </span>
              <span>{eyebrowText}</span>
            </motion.div>

            <motion.h1
              variants={contentItem}
              className="mt-5 max-w-5xl text-[clamp(2.75rem,4.5vw,4.75rem)] leading-[0.98] font-bold tracking-[-0.04em] text-balance whitespace-pre-line text-[#0e2c54]"
            >
              {title}
            </motion.h1>

            <motion.p
              variants={contentItem}
              className="mt-6 max-w-[570px] bg-white/10 text-[clamp(1rem,1.25vw,1.15rem)] leading-[1.5] font-normal text-pretty whitespace-pre-line text-slate-700 backdrop-blur-[2px]"
            >
              {description}
            </motion.p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <motion.a
                href={primaryHref}
                variants={contentItem}
                whileTap={{ scale: 0.96 }}
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-gradient-to-b from-[#0e2c54] to-[#091e38] px-6 text-sm font-medium text-white shadow-[0_1px_2px_rgba(14,44,84,0.2),0_12px_30px_rgba(14,44,84,0.15),inset_0_1px_0_0_rgba(255,255,255,0.2)] transition-[background-color,box-shadow,transform] duration-200 ease-out hover:bg-[#0e2c54]/90 hover:shadow-[0_2px_5px_rgba(14,44,84,0.25),0_16px_36px_rgba(14,44,84,0.2)]"
              >
                <span>{primaryText}</span>
                <FaArrowRight className="size-3" />
              </motion.a>
              {secondaryText && (
                <motion.a
                  href={secondaryHref}
                  variants={contentItem}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[#0e2c54]/20 bg-white/50 px-6 text-sm font-medium text-[#0e2c54] backdrop-blur-md transition-colors hover:bg-white/80"
                >
                  <span>{secondaryText}</span>
                </motion.a>
              )}
            </div>

            <motion.div
              variants={contentContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="mt-12 mb-0 flex flex-col items-center gap-4 sm:mb-7 sm:flex-row sm:items-end sm:justify-between"
            >
              <motion.div
                variants={contentItem}
                className="inline-flex w-fit items-center gap-3 rounded-full bg-white/40 p-px pr-4 text-sm font-semibold text-[#0e2c54] shadow-[0_0px_1px_rgba(255,255,255,0.5)_inset] backdrop-blur-sm"
              >
                <span className="grid size-7 place-items-center rounded-full bg-[#0e2c54] text-white outline -outline-offset-1 outline-white/10">
                  <FaArrowRight className="size-3 -rotate-45" />
                </span>
                <span>{usersText}</span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
