// Shared navigation helpers for the single-page sections that also have
// clean URLs (/about, /experience, /achievements, /contact).

// Clean path -> on-page section id.
export const SECTION_PATHS: Record<string, string> = {
  "/about": "about",
  "/experience": "experience",
  "/achievements": "achievements",
  "/contact": "contact",
};

// Sections that live on the home page and are reached by scrolling.
export const SCROLL_SECTIONS = new Set(Object.values(SECTION_PATHS));

// A path is "home-like" if it renders the full home page (the home route or
// any of the clean section routes), i.e. all sections are present in the DOM.
export function isHomeLike(pathname: string): boolean {
  return pathname === "/" || pathname in SECTION_PATHS;
}

// Approximate sticky-navbar height, so a section isn't hidden underneath it.
export const NAV_OFFSET = 80;

export function scrollToSection(
  id: string,
  behavior: ScrollBehavior = "smooth"
): void {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  window.scrollTo({ top: Math.max(0, top), behavior });
}
