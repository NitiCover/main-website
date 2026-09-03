"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import ReactDOM from "react-dom";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const AIRTABLE_SRC =
  "https://airtable.com/embed/appq140XDu34aOfhx/pagLGl5YkxkyGVAMU/form";

type SlotContextValue = {
  setSlot: (el: HTMLDivElement | null) => void;
  loaded: boolean;
};

const SlotContext = createContext<SlotContextValue | null>(null);

/**
 * Wraps the app so the persistent preload iframe (mounted once, high up in
 * the tree) and the on-page placeholder it snaps onto can share a ref
 * without prop-drilling through the route tree.
 */
export function AirtableSlotProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  ReactDOM.preconnect("https://airtable.com");
  ReactDOM.preconnect("https://static.airtable.com", { crossOrigin: "" });
  ReactDOM.prefetchDNS("https://airtable.com");

  const slotRef = useRef<HTMLDivElement | null>(null);
  const [loaded, setLoaded] = useState(false);

  const setSlot = useCallback((el: HTMLDivElement | null) => {
    slotRef.current = el;
  }, []);

  return (
    <SlotContext.Provider value={{ setSlot, loaded }}>
      {children}
      <AirtablePreload slotRef={slotRef} loaded={loaded} onLoad={() => setLoaded(true)} />
    </SlotContext.Provider>
  );
}

/** Placeholder rendered on /waitlist — the warm iframe snaps to fill this. */
export function AirtableSlot() {
  const ctx = useContext(SlotContext);
  return (
    <div
      ref={ctx?.setSlot}
      className={cn(
        "overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm",
        !ctx?.loaded && "animate-pulse bg-[#0e2c54]/5",
      )}
      style={{ height: 900 }}
    />
  );
}

function AirtablePreload({
  slotRef,
  loaded,
  onLoad,
}: {
  slotRef: React.RefObject<HTMLDivElement | null>;
  loaded: boolean;
  onLoad: () => void;
}) {
  const pathname = usePathname();
  const isWaitlist = pathname === "/waitlist";
  const [rect, setRect] = useState<DOMRect | null>(null);
  const frameRef = useRef<HTMLIFrameElement | null>(null);

  // Track the slot's screen position every frame while on /waitlist so the
  // iframe stays glued to it through scroll/resize — it's a single iframe
  // that's never unmounted, so nothing reloads.
  useEffect(() => {
    if (!isWaitlist) return;
    let raf: number;
    const tick = () => {
      if (slotRef.current) setRect(slotRef.current.getBoundingClientRect());
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isWaitlist, slotRef]);

  const visible = isWaitlist && rect;

  return (
    <iframe
      ref={frameRef}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      title={visible ? "NitiCover waitlist form" : undefined}
      className={cn(
        "fixed z-40 block",
        visible ? "rounded-xl transition-opacity duration-300" : "opacity-0",
        visible && !loaded && "opacity-0",
        visible && loaded && "opacity-100",
      )}
      style={
        visible
          ? {
              top: rect.top,
              left: rect.left,
              width: rect.width,
              height: rect.height,
              background: "transparent",
              pointerEvents: "auto",
            }
          : {
              top: 0,
              left: 0,
              width: 1,
              height: 1,
              pointerEvents: "none",
              background: "transparent",
            }
      }
      src={AIRTABLE_SRC}
      frameBorder={0}
      scrolling="no"
      loading="eager"
      onLoad={onLoad}
    />
  );
}
