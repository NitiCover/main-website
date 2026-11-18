// Single source of truth for site-wide links (nav, footer, calls to action).
// SITE_EMAIL lives here, not in site-content.ts, because the demo link is built
// from it and site-content.ts re-exports both: defining it there would make
// the two modules import each other.

export const SITE_EMAIL = "yash.sarang@niticover.com";

// No demo form yet - "Book a demo" opens an email to the founder.
export const DEMO_HREF = `mailto:${SITE_EMAIL}?subject=NitiCover%20demo%20request`;
export const CONTACT_HREF = `mailto:${SITE_EMAIL}`;

// Section anchors are written as "/#id" so they work from any route.
export const navLinks = [
  { label: "Platform", href: "/platform" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Why NitiCover", href: "/#why-niticover" },
  { label: "About", href: "/about" },
] as const;

export const footerGroups = [
  {
    heading: "Platform",
    links: [
      { label: "How it works", href: "/#how-it-works" },
      { label: "Why NitiCover", href: "/#why-niticover" },
      { label: "Insurance 101", href: "/#insurance-101" },
      { label: "Solutions", href: "/solutions" },
      { label: "Platform", href: "/platform" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Investors", href: "/investors" },
      { label: "Join us", href: "/careers" },
      { label: "Contact", href: CONTACT_HREF },
    ],
  },
  {
    // Legal pages do not exist yet, so those links are placeholders.
    heading: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Disclosures", href: "#" },
    ],
  },
] as const;
