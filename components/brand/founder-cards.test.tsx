import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { founders } from "@/lib/site-content";

import { FounderCards } from "./founder-cards";

// Static image imports resolve to plain strings under vitest, so next/image
// cannot build its blur placeholder. Render a plain img instead.
vi.mock("next/image", () => ({
  default: ({ src, alt }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={typeof src === "string" ? src : ""} alt={alt} />
  ),
}));

describe("FounderCards", () => {
  it("renders each founder's name and role", () => {
    render(<FounderCards />);
    for (const { name, role } of founders) {
      expect(screen.getByRole("heading", { name })).toBeInTheDocument();
      expect(screen.getAllByText(role).length).toBeGreaterThan(0);
    }
  });
});
