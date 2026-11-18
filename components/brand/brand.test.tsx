import { render, screen } from "@testing-library/react";
import { Shield } from "lucide-react";
import { describe, expect, test } from "vitest";

import { ButtonLink, CtaBand, FeatureCard, PageHero, SectionHeader, StepCard } from "./index";

describe("ButtonLink", () => {
  test("renders a link to an internal path", () => {
    render(<ButtonLink href="/platform">Platform</ButtonLink>);
    const link = screen.getByRole("link", { name: "Platform" });
    expect(link).toHaveAttribute("href", "/platform");
    expect(link).not.toHaveAttribute("target");
  });

  test("renders a link to an in-page anchor", () => {
    render(<ButtonLink href="#faq">FAQ</ButtonLink>);
    expect(screen.getByRole("link", { name: "FAQ" })).toHaveAttribute("href", "#faq");
  });

  test("renders a plain anchor for mailto links", () => {
    render(<ButtonLink href="mailto:hi@niticover.com">Email us</ButtonLink>);
    const link = screen.getByRole("link", { name: "Email us" });
    expect(link).toHaveAttribute("href", "mailto:hi@niticover.com");
    expect(link).not.toHaveAttribute("target");
  });

  test("opens https links in a new tab safely", () => {
    render(<ButtonLink href="https://example.com">Docs</ButtonLink>);
    const link = screen.getByRole("link", { name: "Docs" });
    expect(link).toHaveAttribute("href", "https://example.com");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noreferrer");
  });
});

describe("PageHero", () => {
  test("renders one h1 with the title, plus eyebrow, description and actions", () => {
    render(
      <PageHero
        eyebrow="Platform"
        title="Insurance, run by agents"
        description="Agents do the work."
        actions={<a href="/waitlist">Book a demo</a>}
      />,
    );
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Insurance, run by agents");
    expect(screen.getByText("Platform")).toBeInTheDocument();
    expect(screen.getByText("Agents do the work.")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Book a demo" })).toBeInTheDocument();
  });

  test("works without actions", () => {
    render(<PageHero eyebrow="About" title="Who we are" description="Short story." />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });
});

describe("SectionHeader", () => {
  test("renders an h2 by default with an optional description", () => {
    render(<SectionHeader eyebrow="FAQ" title="Questions" description="Answers here." />);
    expect(screen.getByRole("heading", { level: 2, name: "Questions" })).toBeInTheDocument();
    expect(screen.getByText("FAQ")).toBeInTheDocument();
    expect(screen.getByText("Answers here.")).toBeInTheDocument();
  });

  test("can render another heading level and sets the id", () => {
    render(<SectionHeader title="Top" as="h1" id="top-heading" />);
    const heading = screen.getByRole("heading", { level: 1, name: "Top" });
    expect(heading).toHaveAttribute("id", "top-heading");
  });
});

describe("cards", () => {
  test("StepCard shows a 1-based number and an h3", () => {
    render(<StepCard index={0} title="Share details">Fill one form.</StepCard>);
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3, name: "Share details" })).toBeInTheDocument();
    expect(screen.getByText("Fill one form.")).toBeInTheDocument();
  });

  test("FeatureCard shows an h3 and its body", () => {
    render(<FeatureCard icon={Shield} title="Protected">Licensed experts approve.</FeatureCard>);
    expect(screen.getByRole("heading", { level: 3, name: "Protected" })).toBeInTheDocument();
    expect(screen.getByText("Licensed experts approve.")).toBeInTheDocument();
  });
});

describe("CtaBand", () => {
  test("renders an h2 and its actions", () => {
    render(
      <CtaBand
        id="band"
        title="Ready?"
        description="Let us talk."
        actions={<a href="/waitlist">Book a demo</a>}
      />,
    );
    expect(screen.getByRole("heading", { level: 2, name: "Ready?" })).toHaveAttribute("id", "band");
    expect(screen.getByText("Let us talk.")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Book a demo" })).toBeInTheDocument();
  });
});
