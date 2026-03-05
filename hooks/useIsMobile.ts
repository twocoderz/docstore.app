"use client";

import { useState, useEffect } from "react";

/**
 * Returns true when viewport width is below the given breakpoint (default 1024 = lg).
 * Uses matchMedia for performance; returns `null` on initial server render
 * so the page can decide what to show before hydration via CSS.
 */
export function useIsMobile(breakpoint: number = 1024): boolean | null {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, [breakpoint]);

  return isMobile;
}
