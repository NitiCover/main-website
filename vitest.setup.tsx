import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import type { CSSProperties } from "react";
import { afterEach, vi } from "vitest";

afterEach(() => {
  cleanup();
});

// Static image imports resolve to plain strings under vitest, so next/image
// cannot build its blur placeholder. Render a plain img instead, keeping the
// props that affect rendering (style, className) and dropping the rest.
vi.mock("next/image", () => ({
  default: ({
    src,
    alt,
    style,
    className,
    sizes,
  }: {
    src: string | { src: string };
    alt: string;
    style?: CSSProperties;
    className?: string;
    sizes?: string;
  }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={typeof src === "string" ? src : src.src}
      alt={alt}
      style={style}
      className={className}
      sizes={sizes}
    />
  ),
}));
