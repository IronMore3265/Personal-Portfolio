"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * Forces the window to the top on forward (Link) navigations, which the
 * App Router can miss because <body> is the scroll container (overflow-x-hidden).
 * Skips back/forward (popstate) so the BackButton's scroll restoration still
 * works, and skips hash URLs so anchor links like /#about scroll to their target.
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
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
