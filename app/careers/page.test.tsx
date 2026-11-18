import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  hiringSteps,
  LINKEDIN_URL,
  SITE_EMAIL,
  whyJoin,
} from "@/lib/site-content";

import CareersPage from "./page";

describe("Careers page", () => {
  it("renders exactly one h1", () => {
    render(<CareersPage />);
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  });

  it("renders every why-join reason and hiring step", () => {
    render(<CareersPage />);
    for (const { title } of [...whyJoin, ...hiringSteps]) {
      expect(screen.getByRole("heading", { name: title })).toBeInTheDocument();
    }
  });

  it("opens LinkedIn in a new tab", () => {
    render(<CareersPage />);
    const link = screen.getByRole("link", { name: "NitiCover on LinkedIn" });
    expect(link).toHaveAttribute("href", LINKEDIN_URL);
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("builds careers mailto links from the site email", () => {
    render(<CareersPage />);
    expect(screen.getByRole("link", { name: "Email us" })).toHaveAttribute(
      "href",
      `mailto:${SITE_EMAIL}?subject=Careers`,
    );
  });
});
