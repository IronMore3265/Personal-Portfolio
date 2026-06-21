"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "About Me", href: "/#about" },
    { label: "My Projects", href: "/projects" },
    { label: "Contact me", href: "/#contact" },
  ];

  return (
    <>
      <nav
        className={`w-full top-0 sticky z-50 transition-all duration-300 ease-in-out border-b border-outline-variant ${
          scrolled
            ? "bg-background/95 backdrop-blur-lg shadow-sm"
            : "bg-background/90 backdrop-blur-md"
        }`}
      >
        <div className="flex justify-between items-center py-3 px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-headline-md font-bold text-primary border-b-2 border-primary tracking-tight hover:opacity-80 transition-opacity"
          >
            Nabil.
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-display text-body-md text-on-surface-variant hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA + Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="/#contact"
              className="bg-primary text-on-primary px-6 py-3 font-display font-bold text-label-mono hover:opacity-80 transition-opacity"
            >
              Let&apos;s Talk
            </Link>
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            >
              <span
                className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background transition-all duration-500 md:hidden flex flex-col items-center justify-center gap-8 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-headline-md font-display font-bold text-primary hover:text-on-surface-variant transition-colors"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/#contact"
          onClick={() => setMenuOpen(false)}
          className="mt-4 bg-primary text-on-primary px-8 py-4 font-display font-bold text-label-mono"
        >
          Let&apos;s Talk
        </Link>
      </div>
    </>
  );
}
