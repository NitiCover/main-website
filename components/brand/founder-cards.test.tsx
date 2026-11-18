import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { founders } from "@/lib/site-content";

import { FounderCards } from "./founder-cards";

describe("FounderCards", () => {
  it("renders each founder's name and role", () => {
    render(<FounderCards />);
    for (const { name, role } of founders) {
      expect(screen.getByRole("heading", { name })).toBeInTheDocument();
      expect(screen.getAllByText(role).length).toBeGreaterThan(0);
    }
  });

  it("applies each founder's crop transform to the photo", () => {
    render(<FounderCards />);
    for (const { name, crop } of founders) {
      const img = screen.getByRole("img", { name });
      expect(img.style.transform).toBe(`scale(${crop.scale})`);
      expect(img.style.transformOrigin).toBe(crop.origin);
    }
  });
});
