"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isHomeLike } from "@/lib/nav";

interface BackButtonProps {
  label: string;
  fallbackHref: string;
}

export default function BackButton({ label, fallbackHref }: BackButtonProps) {
  const router = useRouter();
  // Start from the caller-provided fallback, then refine to the real origin
  // once we can read the navigation history on the client.
  const [origin, setOrigin] = useState({ label, href: fallbackHref });

  useEffect(() => {
    let prev = "";
    try {
      prev = sessionStorage.getItem("nav:previous") || "";
    } catch {
      /* ignore */
    }
    if (!prev) return;
    if (prev === "/all-projects") {
      setOrigin({ label: "Back to Projects", href: "/all-projects" });
    } else if (isHomeLike(prev)) {
      setOrigin({ label: "Back to Home", href: "/" });
    }
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If we arrived here via in-app navigation, go back so the previous
    // page's scroll position (and filter state) is restored; otherwise
    // navigate to the resolved origin.
    if (typeof window !== "undefined" && window.history.length > 1) {
      e.preventDefault();
      router.back();
    }
  };

  return (
    <a
      href={origin.href}
      onClick={handleClick}
      className="inline-flex items-center text-label-mono text-on-surface-variant hover:text-primary transition-colors mb-8"
    >
      <span className="material-symbols-outlined mr-2 text-sm">arrow_back</span>
      {origin.label}
    </a>
  );
}
