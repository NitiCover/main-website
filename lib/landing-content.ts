// Copy for the home page, from Figma "Niticover" (node 170:72).
// Entries marked DRAFT are not in the design and need sign-off.

export const steps = [
  {
    title: "Tell us once",
    body: "Fill in one form about your business. No repeating yourself to five people.",
  },
  {
    title: "AI checks your risks",
    body: "A factory fire, a stolen shipment, a worker getting hurt & it maps what could go wrong.",
  },
  {
    title: "AI builds your offer",
    body: "Compares insurers and picks fine print that fits your needs, not our earnings.",
  },
  {
    title: "Experts approve",
    body: "A licensed broker and the insurer sign off in minutes instead of weeks.",
  },
  {
    title: "Issued & saved",
    body: "Your policy is issued and every step is recorded automatically.",
  },
] as const;

export type ProblemFix = {
  problem: { title: string; body: string };
  fix: { title: string; body: string };
};

// Problem copy is verbatim from Figma. Card 3's body and card 6's title
// repeat earlier cards in the design and look like copy-paste slips.
// Every `fix` entry is DRAFT: the design has the toggle but no fix copy.
export const problemsAndFixes: ProblemFix[] = [
  {
    problem: {
      title: "The wrong plan, for a bigger commission",
      body: "Brokers suggest plans that pay them more, not plans that fit you.",
    },
    fix: {
      title: "Plans picked for fit",
      body: "Every option side by side, with the reason we recommend one.",
    },
  },
  {
    problem: {
      title: "2 to 4 weeks to get covered",
      body: "Forms go back and forth and the same questions get asked again and again.",
    },
    fix: {
      title: "Covered in hours",
      body: "One form. AI does the paperwork and experts approve in minutes.",
    },
  },
  {
    problem: {
      title: "Kept in the dark",
      body: "Forms go back and forth and the same questions get asked again and again.",
    },
    fix: {
      title: "Always in the loop",
      body: "Track every step on WhatsApp or on your team’s dashboard.",
    },
  },
  {
    problem: {
      title: "Playing favourites",
      body: "Insurers get chosen because of personal friendships, not your needs.",
    },
    fix: {
      title: "No favourites",
      body: "Insurers are compared on price, cover and claims support only.",
    },
  },
  {
    problem: {
      title: "No name people trust",
      body: "There’s no well-known broker businesses automatically trust.",
    },
    fix: {
      title: "A broker you can check",
      body: "Licensed experts approve every case, and every reason is written down.",
    },
  },
  {
    problem: {
      title: "No name people trust",
      body: "Decisions live in scattered WhatsApp chats & emails. Nobody can check who said what.",
    },
    fix: {
      title: "One record of every decision",
      body: "Messages, approvals and documents are saved in one place.",
    },
  },
];

export const insurers = [
  { initial: "A", name: "Insurer A", premium: "₹4,82,000", cover: "₹12 Cr", score: "96%" },
  { initial: "B", name: "Insurer B", premium: "₹4,55,000", cover: "₹9 Cr", score: "81%" },
  { initial: "C", name: "Insurer C", premium: "₹5,10,000", cover: "₹12 Cr", score: "74%" },
] as const;

export const platformPromises = [
  {
    icon: "↻",
    title: "Automatic reminders",
    body: "Calls and messages before renewals, payments or missing documents — nothing slips through the cracks.",
  },
  {
    icon: "✓",
    title: "Humans stay in charge",
    body: "AI does the heavy lifting; a licensed expert approves every case. Computer speed, human judgment.",
  },
] as const;

// Only the Premium definition is in the design; the other four are DRAFT.
export const insuranceTerms = [
  { term: "Premium", definition: "The small amount you pay regularly to stay covered." },
  {
    term: "Policy",
    definition: "The written contract that says what is covered, for how much and for how long.",
  },
  {
    term: "Claim",
    definition: "Your request to the insurer to pay for a loss your policy covers.",
  },
  {
    term: "Broker",
    definition: "A licensed expert who compares insurers and works for you, not for one insurer.",
  },
  {
    term: "IRDAI",
    definition: "India’s insurance regulator. It licenses insurers and brokers and protects policyholders.",
  },
] as const;

// Only the first answer is in the design; the other four are DRAFT.
export const faqs = [
  {
    question: "Is NitiCover an insurance company?",
    answer:
      "No, we’re an insurance broker for businesses. We compare plans from many insurers, recommend the best fit and support you through claims.",
  },
  {
    question: "Is my policy really decided by AI?",
    answer:
      "No. AI reads your documents, checks your risks and compares plans, but a licensed broker reviews and approves every recommendation.",
  },
  {
    question: "Does using a broker cost more?",
    answer:
      "Insurers set the premium. We show you the price and cover of every option side by side so you can see exactly what you are paying for.",
  },
  {
    question: "How fast can my business get covered?",
    answer:
      "Most businesses get an offer in hours, not weeks. Once you approve, the insurer issues the policy and every step is saved.",
  },
  {
    question: "What happens to my data and conversations?",
    answer:
      "Your documents and conversations are stored securely and used only to find, place and service your insurance.",
  },
] as const;
