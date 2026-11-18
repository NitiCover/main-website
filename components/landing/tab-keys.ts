import type { KeyboardEvent } from "react";

/**
 * WAI-ARIA tabs keyboard model with automatic activation: arrow keys move
 * focus and select, Home/End jump to the ends. Returns the new index, or
 * null when the key is not a tab navigation key.
 */
export function nextTabIndex(
  event: KeyboardEvent<HTMLElement>,
  index: number,
  count: number,
  orientation: "horizontal" | "vertical",
): number | null {
  const prev = orientation === "horizontal" ? "ArrowLeft" : "ArrowUp";
  const next = orientation === "horizontal" ? "ArrowRight" : "ArrowDown";

  let target: number;
  switch (event.key) {
    case prev:
      target = (index - 1 + count) % count;
      break;
    case next:
      target = (index + 1) % count;
      break;
    case "Home":
      target = 0;
      break;
    case "End":
      target = count - 1;
      break;
    default:
      return null;
  }

  event.preventDefault();
  const tabs = event.currentTarget
    .closest('[role="tablist"]')
    ?.querySelectorAll<HTMLElement>('[role="tab"]');
  tabs?.[target]?.focus();
  return target;
}
