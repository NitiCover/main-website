import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import {
  FOUNDER_EMAIL,
  founders,
  investorThesis,
  moats,
  partnerTypes,
} from "@/lib/site-content";

import InvestorsPage from "./page";

// Static image imports resolve to plain strings under vitest, so next/image
// cannot build its blur placeholder. Render a plain img instead.
vi.mock("next/image", () => ({
  default: ({ src, alt }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={typeof src === "string" ? src : ""} alt={alt} />
  ),
}));

describe("Investors page", () => {
  it("renders exactly one h1", () => {
    render(<InvestorsPage />);
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  });

  it("renders every founder", () => {
    render(<InvestorsPage />);
    for (const { name } of founders) {
      expect(screen.getByRole("heading", { name })).toBeInTheDocument();
    }
  });

  it("renders every thesis point and partner type", () => {
    render(<InvestorsPage />);
    for (const { title } of [...investorThesis, ...partnerTypes]) {
      expect(screen.getByRole("heading", { name: title })).toBeInTheDocument();
    }
  });

  it("renders every moat", () => {
    render(<InvestorsPage />);
    for (const m of moats) expect(screen.getByText(m)).toBeInTheDocument();
  });

  it("points deck requests at the founder email", () => {
    render(<InvestorsPage />);
    const links = screen.getAllByRole("link", { name: "Request the deck" });
    expect(links.length).toBeGreaterThan(0);
    for (const l of links) {
      expect(l).toHaveAttribute(
        "href",
        `mailto:${FOUNDER_EMAIL}?subject=NitiCover%20investor%20deck`,
      );
    }
  });
});
