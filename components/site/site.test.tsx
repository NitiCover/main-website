import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, test, vi } from "vitest";

import NotFound from "@/app/not-found";
import { DEMO_HREF } from "@/lib/site-links";

const pathname = vi.hoisted(() => ({ current: "/" }));
vi.mock("next/navigation", () => ({ usePathname: () => pathname.current }));

import { SiteFooter } from "./site-footer";
import { SiteNav } from "./site-nav";

beforeEach(() => {
  pathname.current = "/";
});

describe("SiteNav", () => {
  test("links to every primary section and to booking a demo", () => {
    render(<SiteNav />);
    const nav = screen.getByRole("navigation", { name: "Primary" });

    expect(within(nav).getByRole("link", { name: "Platform" })).toHaveAttribute("href", "/platform");
    expect(within(nav).getByRole("link", { name: "How it works" })).toHaveAttribute(
      "href",
      "/#how-it-works",
    );
    expect(within(nav).getByRole("link", { name: "Why NitiCover" })).toHaveAttribute(
      "href",
      "/#why-niticover",
    );
    expect(within(nav).getByRole("link", { name: "About" })).toHaveAttribute("href", "/about");
    expect(within(nav).getByRole("link", { name: "Book a demo" })).toHaveAttribute(
      "href",
      DEMO_HREF,
    );
    expect(DEMO_HREF.startsWith("mailto:")).toBe(true);
  });

  test("marks only the link for the current page", () => {
    pathname.current = "/about";
    render(<SiteNav />);
    const nav = screen.getByRole("navigation", { name: "Primary" });

    expect(within(nav).getByRole("link", { name: "About" })).toHaveAttribute(
      "aria-current",
      "page",
    );
    for (const label of ["Platform", "How it works", "Why NitiCover", "Book a demo"]) {
      expect(within(nav).getByRole("link", { name: label })).not.toHaveAttribute("aria-current");
    }
  });

  test("marks the current page in the mobile menu too", async () => {
    pathname.current = "/platform";
    const user = userEvent.setup();
    render(<SiteNav />);
    await user.click(screen.getByRole("button", { name: "Open menu" }));
    const mobile = screen.getByRole("navigation", { name: "Mobile" });

    expect(within(mobile).getByRole("link", { name: "Platform" })).toHaveAttribute(
      "aria-current",
      "page",
    );
    expect(within(mobile).getByRole("link", { name: "About" })).not.toHaveAttribute(
      "aria-current",
    );
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

describe("SiteFooter", () => {
  test("groups links under Platform, Company and Legal", () => {
    render(<SiteFooter />);
    for (const group of ["Platform", "Company", "Legal"]) {
      expect(screen.getByRole("heading", { name: group })).toBeInTheDocument();
    }
    expect(screen.getByRole("link", { name: "Privacy" })).toBeInTheDocument();
  });

  test("reaches the pages that are not in the main nav", () => {
    render(<SiteFooter />);
    expect(screen.getByRole("link", { name: "Investors" })).toHaveAttribute("href", "/investors");
    expect(screen.getByRole("link", { name: "Join us" })).toHaveAttribute("href", "/careers");
    expect(screen.getByRole("link", { name: "Solutions" })).toHaveAttribute("href", "/solutions");
  });

  test("contact is an email link", () => {
    render(<SiteFooter />);
    expect(screen.getByRole("link", { name: "Contact" }).getAttribute("href")).toMatch(/^mailto:/);
  });

  test("carries the regulatory notices", () => {
    render(<SiteFooter />);
    expect(screen.getByText("© 2026 NitiCover Insurance Brokers Pvt. Ltd.")).toBeInTheDocument();
    expect(
      screen.getByText("Insurance is the subject matter of solicitation."),
    ).toBeInTheDocument();
  });
});

describe("not-found page", () => {
  test("has a heading and a way back home", () => {
    render(<NotFound />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /home/i })).toHaveAttribute("href", "/");
  });
});
