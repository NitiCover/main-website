import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { founders, values } from "@/lib/site-content";

import AboutPage from "./page";

describe("About page", () => {
  it("renders exactly one h1", () => {
    render(<AboutPage />);
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  });

  it("renders every founder", () => {
    render(<AboutPage />);
    for (const { name } of founders) {
      expect(screen.getByRole("heading", { name })).toBeInTheDocument();
    }
  });

  it("renders every value", () => {
    render(<AboutPage />);
    for (const { title } of values) {
      expect(screen.getByRole("heading", { name: title })).toBeInTheDocument();
    }
  });

  it("links to careers", () => {
    render(<AboutPage />);
    expect(screen.getByRole("link", { name: "See careers" })).toHaveAttribute(
      "href",
      "/careers",
    );
  });
});
