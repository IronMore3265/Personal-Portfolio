"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "About Me", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "My Projects", href: "/#projects" },
  { label: "Achievements", href: "/#achievements" },
];

// Detail pages that belong under the "Achievements" section; everything
// else under /projects belongs under "My Projects".
const achievementSlugs = new Set([
  "mastermind",
  "prodluxe",
  "econovision",
  "securemed",
  "securemed-visionx",
]);

// Maps a non-home route to the nav section that should stay underlined.
function sectionForPath(path: string): string {
  if (path === "/projects") return "projects";
  if (path.startsWith("/projects/")) {
    const slug = path.split("/")[2];
    return achievementSlugs.has(slug) ? "achievements" : "projects";
  }
  return "";
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const visibleSections = useRef<Set<string>>(new Set());
  // When a nav link is clicked, lock the underline to its target and ignore
  // the sections the smooth-scroll passes through until we actually arrive.
  const activeLock = useRef<string | null>(null);
  const lockTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  const handleNavClick = (href: string) => {
    const id = href.split("#")[1];
    if (!id) return;
    activeLock.current = id;
    setActiveSection(id);
    if (lockTimer.current) clearTimeout(lockTimer.current);
    // Safety release in case the target never crosses the detection band.
    lockTimer.current = setTimeout(() => {
      activeLock.current = null;
    }, 1500);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Scroll-spy: highlight the nav link for the section currently in view.
  // Only active on the home page, where these sections exist.
  useEffect(() => {
    if (pathname !== "/") return;
    const ids = navLinks.map((l) => l.href.split("#")[1]);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    visibleSections.current.clear();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visibleSections.current.add(entry.target.id);
          else visibleSections.current.delete(entry.target.id);
        });
        // First section (in nav order) currently in the band wins; if none
        // are in view (e.g. scrolled up into the hero), clear the underline.
        const next = ids.find((id) => visibleSections.current.has(id)) ?? "";
        // While locked to a clicked target, ignore sections we pass through
        // and only release once that target reaches the band.
        if (activeLock.current) {
          if (next === activeLock.current) {
            activeLock.current = null;
            if (lockTimer.current) clearTimeout(lockTimer.current);
            setActiveSection(next);
          }
          return;
        }
        setActiveSection(next);
      },
      // Thin band ~40% down the viewport decides the "active" section.
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [pathname]);

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
            {navLinks.map((link) => {
              const current =
                pathname === "/" ? activeSection : sectionForPath(pathname);
              const active = current === link.href.split("#")[1];
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative font-display text-body-md transition-colors duration-300 ${
                    active
                      ? "text-primary"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      active ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA + Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="/#contact"
              className="bg-primary text-on-primary px-6 py-3 font-display font-bold text-label-mono hover:opacity-80 transition-opacity"
            >
              Contact me
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
            onClick={() => {
              setMenuOpen(false);
              handleNavClick(link.href);
            }}
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
          Contact me
        </Link>
      </div>
    </>
  );
}
