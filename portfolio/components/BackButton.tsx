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
    e.preventDefault();
    // Returning to the projects grid restores its scroll position and active
    // filter, so go back through history there.
    if (
      origin.href === "/all-projects" &&
      typeof window !== "undefined" &&
      window.history.length > 1
    ) {
      router.back();
      return;
    }
    // Returning Home: restore the scroll position the visitor left from (the
    // section they clicked into a detail from) rather than jumping to the hero.
    if (origin.href === "/") {
      try {
        sessionStorage.setItem("home:restore", "1");
      } catch {
        /* ignore */
      }
    }
    router.push(origin.href);
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
