"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="relative w-10 h-10 flex items-center justify-center border border-outline-variant hover:border-primary transition-colors"
    >
      <span className="material-symbols-outlined text-xl text-on-surface transition-transform duration-300"
        style={{ transform: dark ? "rotate(180deg)" : "rotate(0deg)" }}>
        {dark ? "light_mode" : "dark_mode"}
      </span>
    </button>
  );
}
