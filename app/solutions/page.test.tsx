import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { brokerBenefits, engagementSteps, insurerBenefits } from "@/lib/site-content";
import { DEMO_HREF } from "@/lib/site-links";

import SolutionsPage from "./page";

describe("Solutions page", () => {
  it("renders exactly one h1", () => {
    render(<SolutionsPage />);
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  });

  it("renders every broker and insurer benefit title", () => {
    render(<SolutionsPage />);
    for (const { title } of [...brokerBenefits, ...insurerBenefits]) {
      expect(screen.getByRole("heading", { name: title })).toBeInTheDocument();
    }
  });

  it("renders every engagement step", () => {
    render(<SolutionsPage />);
    for (const { title } of engagementSteps) {
      expect(screen.getByRole("heading", { name: title })).toBeInTheDocument();
    }
  });

  it("keeps the audience anchors", () => {
    const { container } = render(<SolutionsPage />);
    for (const id of ["brokers", "insurers", "individuals"]) {
      expect(container.querySelector(`#${id}`)).not.toBeNull();
    }
  });

  it("links individuals to the waitlist", () => {
    render(<SolutionsPage />);
    expect(screen.getByRole("link", { name: "Join the waitlist" })).toHaveAttribute(
      "href",
      "/waitlist",
    );
  });

  it("points every Book a demo link at the demo href", () => {
    render(<SolutionsPage />);
    const links = screen.getAllByRole("link", { name: /^Book a (broker )?demo$/ });
    expect(links.length).toBeGreaterThan(0);
    for (const link of links) expect(link).toHaveAttribute("href", DEMO_HREF);
  });
});
