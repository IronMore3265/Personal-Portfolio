"use client";

import { useRouter } from "next/navigation";

interface BackButtonProps {
  label: string;
  fallbackHref: string;
}

export default function BackButton({ label, fallbackHref }: BackButtonProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If we arrived here via in-app navigation, go back so the previous
    // page's scroll position is restored; otherwise navigate normally.
    if (typeof window !== "undefined" && window.history.length > 1) {
      e.preventDefault();
      router.back();
    }
  };

  return (
    <a
      href={fallbackHref}
      onClick={handleClick}
      className="inline-flex items-center text-label-mono text-on-surface-variant hover:text-primary transition-colors mb-8"
    >
      <span className="material-symbols-outlined mr-2 text-sm">arrow_back</span>
      {label}
    </a>
  );
}
