import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import WaitlistPage from "./page";

vi.mock("@/components/waitlist/airtable-preload", () => ({
  AirtableSlot: () => <div data-testid="airtable-slot" />,
}));

describe("Waitlist page", () => {
  it("renders exactly one h1", () => {
    render(<WaitlistPage />);
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  });

  it("shows the Waitlist eyebrow", () => {
    render(<WaitlistPage />);
    expect(screen.getByText("Waitlist")).toBeInTheDocument();
  });

  it("renders the Airtable form slot", () => {
    render(<WaitlistPage />);
    expect(screen.getByTestId("airtable-slot")).toBeInTheDocument();
  });
});
