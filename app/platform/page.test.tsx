import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { capabilities, decisionChain, placementSteps } from "@/lib/site-content";
import { DEMO_HREF } from "@/lib/site-links";

import PlatformPage from "./page";

describe("Platform page", () => {
  it("renders exactly one h1", () => {
    render(<PlatformPage />);
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  });

  it("renders every capability title", () => {
    render(<PlatformPage />);
    for (const { title } of capabilities) {
      expect(screen.getByRole("heading", { name: title })).toBeInTheDocument();
    }
  });

  it("renders the how-it-works section with every placement step", () => {
    const { container } = render(<PlatformPage />);
    const section = container.querySelector("#how-it-works");
    expect(section).not.toBeNull();
    for (const { title } of placementSteps) {
      expect(screen.getByRole("heading", { name: title })).toBeInTheDocument();
    }
  });

  it("renders the decision chain", () => {
    const { container } = render(<PlatformPage />);
    const section = container.querySelector<HTMLElement>("#explainability");
    expect(section).not.toBeNull();
    const items = within(section!).getAllByRole("listitem");
    expect(items.map((item) => item.textContent)).toEqual(
      decisionChain.map((step, i) => `${i + 1}${step}`),
    );
  });

  it("points every Book a demo link at the demo href", () => {
    render(<PlatformPage />);
    const links = screen.getAllByRole("link", { name: "Book a demo" });
    expect(links.length).toBeGreaterThan(0);
    for (const link of links) expect(link).toHaveAttribute("href", DEMO_HREF);
  });
});
