"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { SECTION_PATHS } from "@/lib/nav";

/**
 * Forces the window to the top on forward (Link) navigations, which the
 * App Router can miss because <body> is the scroll container (overflow-x-hidden).
 * Skips back/forward (popstate) so the BackButton's scroll restoration still
 * works, skips hash URLs so anchor links scroll to their target, and skips the
 * clean section routes (/about, …) so HomeContent can scroll to its section.
 *
 * Also records the previous route in sessionStorage so BackButton can label
 * itself with the actual origin ("Back to Home" vs "Back to Projects").
 */
export default function ScrollToTop() {
  const pathname = usePathname();
  const isPop = useRef(false);

  useEffect(() => {
    const onPopState = () => {
      isPop.current = true;
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  // Track route history (previous -> current) for origin-aware back buttons.
  useEffect(() => {
    try {
      const prev = sessionStorage.getItem("nav:current");
      if (prev !== null && prev !== pathname) {
        sessionStorage.setItem("nav:previous", prev);
      }
      sessionStorage.setItem("nav:current", pathname);
    } catch {
      /* sessionStorage unavailable — ignore */
    }
  }, [pathname]);

  useEffect(() => {
    if (isPop.current) {
      // Back/forward navigation — let the browser restore the saved position.
      isPop.current = false;
      return;
    }
    if (window.location.hash) {
      // Anchor link — let the hash target handle scrolling.
      return;
    }
    if (pathname in SECTION_PATHS) {
      // Clean section route — HomeContent scrolls to the section itself.
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
