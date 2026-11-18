import { render } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";

const pathname = vi.hoisted(() => ({ current: "/" }));

vi.mock("next/navigation", () => ({ usePathname: () => pathname.current }));
vi.mock("@react-three/fiber", () => ({
  Canvas: () => <div data-testid="particle-canvas" />,
  useFrame: () => {},
}));

import { ParticleField } from "./particle-field";

describe("ParticleField", () => {
  test.each(["/", "/waitlist"])("is not rendered on %s", (path) => {
    pathname.current = path;
    const { queryByTestId } = render(<ParticleField />);
    expect(queryByTestId("particle-canvas")).not.toBeInTheDocument();
  });

  test("still renders on the inner marketing pages", () => {
    pathname.current = "/platform";
    const { getByTestId } = render(<ParticleField />);
    expect(getByTestId("particle-canvas")).toBeInTheDocument();
  });
});
