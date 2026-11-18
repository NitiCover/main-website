import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";

import { SiteNav } from "./site-nav";
import { Hero } from "./hero";
import { HowItWorks } from "./how-it-works";
import { ProblemIntro } from "./problem-intro";
import { ProblemsFixes } from "./problems-fixes";
import { PlatformShowcase } from "./platform-showcase";
import { InsuranceBasics } from "./insurance-basics";
import { Faq } from "./faq";
import { ClosingCta } from "./closing-cta";
import { SiteFooter } from "./site-footer";

describe("SiteNav", () => {
  test("links to every primary section and to booking a demo", () => {
    render(<SiteNav />);
    const nav = screen.getByRole("navigation", { name: "Primary" });

    for (const label of ["Platform", "How it works", "Why NitiCover", "About"]) {
      expect(within(nav).getByRole("link", { name: label })).toBeInTheDocument();
    }
    expect(within(nav).getByRole("link", { name: "Book a demo" })).toBeInTheDocument();
  });

  test("mobile menu button opens and closes the menu", async () => {
    const user = userEvent.setup();
    render(<SiteNav />);
    const toggle = screen.getByRole("button", { name: "Open menu" });

    expect(toggle).toHaveAttribute("aria-expanded", "false");
    await user.click(toggle);
    expect(screen.getByRole("button", { name: "Close menu" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    expect(screen.getByRole("navigation", { name: "Mobile" })).toBeVisible();

    await user.click(screen.getByRole("button", { name: "Close menu" }));
    expect(screen.queryByRole("navigation", { name: "Mobile" })).not.toBeInTheDocument();
  });
});

describe("Hero", () => {
  test("states the value proposition as the page's single h1", () => {
    render(<Hero />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent(
      "India’s first AI Platform that runs insurance broking end-to-end for businesses",
    );
  });

  test("offers both calls to action", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: "Book a Demo" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "See How it works" })).toHaveAttribute(
      "href",
      "#how-it-works",
    );
  });
});

describe("HowItWorks", () => {
  test("lists the five steps in order", () => {
    render(<HowItWorks />);
    const steps = within(screen.getByRole("list", { name: "Steps" })).getAllByRole("listitem");
    expect(steps.map((s) => within(s).getByRole("heading").textContent)).toEqual([
      "Tell us once",
      "AI checks your risks",
      "AI builds your offer",
      "Experts approve",
      "Issued & saved",
    ]);
  });

  test("is the anchor target for 'How it works'", () => {
    const { container } = render(<HowItWorks />);
    expect(container.querySelector("section#how-it-works")).not.toBeNull();
  });
});

describe("ProblemIntro", () => {
  test("frames the problem", () => {
    render(<ProblemIntro />);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Buying business insurance today is slow, opaque stacked against you.",
    );
  });
});

describe("ProblemsFixes", () => {
  test("shows the six problems by default", () => {
    render(<ProblemsFixes />);
    expect(screen.getByRole("tab", { name: "The Problems" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
    const panel = screen.getByRole("tabpanel");
    expect(within(panel).getAllByRole("listitem")).toHaveLength(6);
    expect(within(panel).getByText("The wrong plan, for a bigger commission")).toBeVisible();
  });

  test("switching to NitiCover's fix swaps every card to its fix", async () => {
    const user = userEvent.setup();
    render(<ProblemsFixes />);

    await user.click(screen.getByRole("tab", { name: "Niticover’s fix" }));

    expect(screen.getByRole("tab", { name: "Niticover’s fix" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
    const panel = screen.getByRole("tabpanel");
    expect(within(panel).getAllByRole("listitem")).toHaveLength(6);
    expect(
      within(panel).queryByText("The wrong plan, for a bigger commission"),
    ).not.toBeInTheDocument();
  });

  test("tabs are keyboard operable with arrow keys", async () => {
    const user = userEvent.setup();
    render(<ProblemsFixes />);
    screen.getByRole("tab", { name: "The Problems" }).focus();

    await user.keyboard("{ArrowRight}");

    const fixTab = screen.getByRole("tab", { name: "Niticover’s fix" });
    expect(fixTab).toHaveFocus();
    expect(fixTab).toHaveAttribute("aria-selected", "true");
  });
});

describe("PlatformShowcase", () => {
  test("shows the sample offer with three insurers and the two promises", () => {
    render(<PlatformShowcase />);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "See every option. Know every reason.",
    );
    for (const insurer of ["Insurer A", "Insurer B", "Insurer C"]) {
      expect(screen.getByText(insurer)).toBeInTheDocument();
    }
    expect(screen.getByRole("heading", { name: "Automatic reminders" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Humans stay in charge" })).toBeInTheDocument();
  });
});

describe("InsuranceBasics", () => {
  test("explains Premium first", () => {
    render(<InsuranceBasics />);
    expect(screen.getByRole("tab", { name: /Premium/ })).toHaveAttribute("aria-selected", "true");
    const panel = screen.getByRole("tabpanel");
    expect(within(panel).getByRole("heading", { name: "Premium" })).toBeInTheDocument();
    expect(
      within(panel).getByText("The small amount you pay regularly to stay covered."),
    ).toBeInTheDocument();
  });

  test("selecting another term shows its definition", async () => {
    const user = userEvent.setup();
    render(<InsuranceBasics />);

    await user.click(screen.getByRole("tab", { name: /Claim/ }));

    expect(screen.getByRole("tab", { name: /Claim/ })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("tab", { name: /Premium/ })).toHaveAttribute("aria-selected", "false");
    expect(
      within(screen.getByRole("tabpanel")).getByRole("heading", { name: "Claim" }),
    ).toBeInTheDocument();
  });

  test("offers all five terms", () => {
    render(<InsuranceBasics />);
    expect(screen.getAllByRole("tab")).toHaveLength(5);
  });
});

describe("Faq", () => {
  test("opens the first question by default", () => {
    render(<Faq />);
    const first = screen.getByRole("button", { name: "Is NitiCover an insurance company?" });
    expect(first).toHaveAttribute("aria-expanded", "true");
    expect(
      screen.getByText(/No, we’re an insurance broker for businesses/),
    ).toBeVisible();
  });

  test("opening another question closes the open one", async () => {
    const user = userEvent.setup();
    render(<Faq />);

    const second = screen.getByRole("button", { name: "Is my policy really decided by AI?" });
    await user.click(second);

    expect(second).toHaveAttribute("aria-expanded", "true");
    expect(
      screen.getByRole("button", { name: "Is NitiCover an insurance company?" }),
    ).toHaveAttribute("aria-expanded", "false");
  });

  test("clicking an open question collapses it", async () => {
    const user = userEvent.setup();
    render(<Faq />);
    const first = screen.getByRole("button", { name: "Is NitiCover an insurance company?" });

    await user.click(first);

    expect(first).toHaveAttribute("aria-expanded", "false");
  });

  test("lists five questions", () => {
    render(<Faq />);
    expect(screen.getAllByRole("button")).toHaveLength(5);
  });
});

describe("ClosingCta", () => {
  test("invites the visitor to book a demo or talk to a broker", () => {
    render(<ClosingCta />);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Get your business covered in hours, not weeks.",
    );
    expect(screen.getByRole("link", { name: "Book a demo" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Talk to a broker" })).toBeInTheDocument();
  });
});

describe("SiteFooter", () => {
  test("groups links under Platform, Company and Legal", () => {
    render(<SiteFooter />);
    for (const group of ["Platform", "Company", "Legal"]) {
      expect(screen.getByRole("heading", { name: group })).toBeInTheDocument();
    }
    expect(screen.getByRole("link", { name: "Privacy" })).toBeInTheDocument();
  });

  test("carries the regulatory notices", () => {
    render(<SiteFooter />);
    expect(screen.getByText("© 2026 NitiCover Insurance Brokers Pvt. Ltd.")).toBeInTheDocument();
    expect(
      screen.getByText("Insurance is the subject matter of solicitation."),
    ).toBeInTheDocument();
  });
});
