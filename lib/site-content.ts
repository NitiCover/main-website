// Site copy sourced from the NitiCover website design canvas.
// Placeholder fields in the design (pilot metrics, partner logos, etc.) are
// intentionally left out until real data is available.

import {
  BadgeCheck,
  Bot,
  FileStack,
  FileSearch,
  GitCompareArrows,
  Radar,
  type LucideIcon,
} from "lucide-react";
import type { StaticImageData } from "next/image";
import yashPhoto from "@/assets/yash.png";
import arunimPhoto from "@/assets/arunim.png";

export const SITE_EMAIL = "yash.sarang@niticover.com";
export const SITE_PHONE_DISPLAY = "+91 99305 07114";
export const SITE_PHONE_TEL = "tel:+919930507114";
export const FOUNDER_EMAIL = SITE_EMAIL;
export const COMPANY_NAME = "NitiCover Pvt. Ltd.";
// No demo form yet — "Book a demo" opens an email to the founder.
export const DEMO_HREF = `mailto:${SITE_EMAIL}?subject=NitiCover%20demo%20request`;
export const LINKEDIN_URL = "https://in.linkedin.com/company/niticover";

export type Capability = {
  icon: LucideIcon;
  title: string;
  summary: string;
  detail: string;
};

export const capabilities: Capability[] = [
  {
    icon: Radar,
    title: "Risk profiling",
    summary:
      "Extracts and structures business risk from documents and conversations; flags exposures and gaps.",
    detail:
      "Turns unstructured client inputs into a structured risk record: assets, operations, exposures, prior claims, gaps.",
  },
  {
    icon: FileStack,
    title: "Submission automation",
    summary:
      "Generates insurer-ready submission dossiers in each insurer's preferred format.",
    detail:
      "Insurer-specific dossiers, generated once from the risk record and kept in sync as details change.",
  },
  {
    icon: FileSearch,
    title: "Insurer matching",
    summary:
      "Maps risk characteristics to suitable insurer and product options.",
    detail:
      "Maps risk characteristics to insurer appetite and product fit, learning from historical placements.",
  },
  {
    icon: GitCompareArrows,
    title: "Coverage analysis",
    summary:
      "Compares limits, deductibles, exclusions and clauses side by side across quotes.",
    detail:
      "Clause-level comparison of quotes, with material differences highlighted and explained in plain language.",
  },
  {
    icon: Bot,
    title: "Workflow agents",
    summary:
      "Follow-ups, document collection, reminders, status tracking and escalations — handled automatically.",
    detail:
      "Follow-ups, document collection, reminders, renewal alerts, status tracking and escalations to a human.",
  },
  {
    icon: BadgeCheck,
    title: "Human validation",
    summary:
      "Authorised personnel review defined decision points before anything binds. Always.",
    detail:
      "Configurable checkpoints where authorised people approve, modify or reject before anything binds.",
  },
];

export const decisionChain = [
  "Client requirement",
  "Risk factors",
  "Coverage requirement",
  "Insurer options & quotations",
  "Coverage / exclusion comparison",
  "Recommendation",
  "Human validation",
  "Final placement",
];

export const placementSteps = [
  {
    title: "Intake",
    description:
      "Upload documents, forward emails or capture a call. The AI structures the risk and flags exposures and gaps.",
  },
  {
    title: "Submit",
    description:
      "Insurer-ready dossiers are generated and sent to matched insurers. Agents chase missing documents and track status.",
  },
  {
    title: "Compare",
    description:
      "Quotes are compared on limits, deductibles, exclusions and clauses. A recommendation is drafted with its reasoning.",
  },
  {
    title: "Validate & bind",
    description:
      "Authorised personnel review the recommendation. Approval, modification and placement are recorded in the decision history.",
  },
];

export const autonomyLayers = [
  {
    title: "Fully automated",
    examples: "Data extraction, formatting, reminders, status updates",
    review: "No review",
  },
  {
    title: "AI-drafted, human-approved",
    examples:
      "Submission dossiers, coverage comparisons, client communications",
    review: "Quick approve",
  },
  {
    title: "Human decision",
    examples:
      "Final recommendation, binding, anything with regulatory weight",
    review: "Mandatory review",
  },
];

export const complianceItems = [
  {
    title: "Complete decision history",
    description:
      "Who, what, when, why, source data, modification and approval — on every placement.",
  },
  {
    title: "Role-based control",
    description:
      "Only authorised personnel can approve defined decision points.",
  },
  {
    title: "Regulatory architecture",
    description:
      "Designed around Indian broking regulation from day one.",
  },
];

export const brokerBenefits = [
  {
    title: "Faster placements",
    description: "Cut re-keying and chasing; spend the time on advice.",
  },
  {
    title: "Renewals that don't leak",
    description:
      "Agents track every expiry and start the renewal conversation on time.",
  },
  {
    title: "Defensible advice",
    description:
      "Every recommendation ships with its reasoning and approval trail.",
  },
  {
    title: "A structured book",
    description:
      "Your placement history becomes searchable, comparable data — not a folder of PDFs.",
  },
];

export const insurerBenefits = [
  {
    title: "Standardised intake",
    description:
      "Same fields, same structure, every time — less back-and-forth with brokers.",
  },
  {
    title: "Better-matched risks",
    description:
      "Submissions routed by appetite, so your underwriters see what fits.",
  },
  {
    title: "Quote inside the workflow",
    description:
      "API or portal integration; status visible to the broker in real time.",
  },
  {
    title: "Distribution reach",
    description:
      "Access a growing network of AI-enabled brokers across India.",
  },
];

export const engagementSteps = [
  {
    title: "Pilot on live placements",
    description: "Start with a subset of your team and lines of business.",
  },
  {
    title: "Configure checkpoints & integrations",
    description:
      "Set who approves what; connect email, storage and insurer channels.",
  },
  {
    title: "Roll out across the book",
    description: "Extend the workflow to the rest of your team and lines.",
  },
];

export type Founder = {
  name: string;
  role: string;
  bio: string;
  photo: StaticImageData;
  // Zoom into the face: the source photos are framed at different distances.
  crop: { scale: number; origin: string };
};

export const founders: Founder[] = [
  {
    name: "Yash Sarang",
    photo: yashPhoto,
    crop: { scale: 2, origin: "68% 0%" },
    role: "Founder & CEO",
    bio: "IIT Bombay · M.S. — AI & Data Science. Leads strategy, product and business; AI and enterprise growth.",
  },
  {
    name: "Arunim Chakraborty",
    photo: arunimPhoto,
    crop: { scale: 1.35, origin: "35% 0%" },
    role: "Co-Founder & CTO",
    bio: "M.Tech — AI & Data Science. 1.5+ years building for insurance-broking workflows; technical consulting for broking clients.",
  },
];

export const values = [
  {
    title: "Explain everything",
    description: "If we can't show why, we don't recommend it.",
  },
  {
    title: "Humans stay accountable",
    description: "Automation does the work; people own the decision.",
  },
  {
    title: "Compliance is product",
    description: "We build to the regulation, not around it.",
  },
];

export const whyJoin = [
  {
    title: "Ship into production",
    description:
      "Your work runs on live placements with partner brokers from week one — not a sandbox.",
  },
  {
    title: "Agents with accountability",
    description:
      "Build AI systems where explainability and human checkpoints are architecture, not afterthoughts.",
  },
  {
    title: "Founder proximity",
    description:
      "Work directly with the founders; own outcomes, not tickets.",
  },
];

export const hiringSteps = [
  { title: "Intro call", description: "30 minutes with a founder." },
  {
    title: "Work sample",
    description: "A small, real problem from our backlog.",
  },
  {
    title: "Deep dive",
    description: "Walk us through it; we walk you through the product.",
  },
  { title: "Offer", description: "A clear decision after the final conversation." },
];

export const investorThesis = [
  {
    title: "Workflows, not chatbots",
    description:
      "LLMs now handle the unstructured documents and conversations broking runs on. The value is in the workflow around them.",
  },
  {
    title: "Regulation rewards explainability",
    description:
      "A complete decision trail is a compliance asset, not just a feature.",
  },
  {
    title: "A regulated operating partnership from day one",
    description:
      "We ship into live placements immediately, not after a licensing wait.",
  },
];

export const moats = [
  "Workflow infrastructure",
  "Proprietary structured insurance data",
  "Historical placement & renewal data",
  "AI workflow agents",
  "Regulatory / compliance architecture",
  "Insurer integrations",
  "Broker network & client book",
  "Human-in-the-loop operating expertise",
];

export const partnerTypes = [
  {
    title: "Insurers",
    description: "Structured submissions and workflow-native quoting.",
  },
  {
    title: "Broking houses",
    description: "Platform licensing and co-development on new lines.",
  },
  {
    title: "Distribution & ecosystem",
    description:
      "Fintechs, SME platforms and associations reaching businesses that need cover.",
  },
];
