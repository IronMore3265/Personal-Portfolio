import Link from "next/link";
import ProjectDetailView from "@/components/ProjectDetailView";
import type { ProjectDetail } from "@/components/ProjectDetailView";
import { PatternGrid } from "@/components/DecorativeElements";
import ImageSlider from "@/components/ImageSlider";

const title = "5S Workplace Implementation at Reckitt Benckiser (Bangladesh) PLC";

const gallery = [
  "/images/harpic_line_marine.png",
  "/images/harpic_line_linear.png",
];

const detail: ProjectDetail = {
  subtitle: "Industrial Attachment · Academic Project · 4 Weeks (Nov 2025)",
  overview:
    "Industrial attachment at Reckitt Benckiser's Chattogram manufacturing facility, producing household hygiene and health products (Harpic, Dettol, Lysol), as part of an undergraduate industrial engineering program.",
  contribution: [
    "Led **5S** implementation (Sort, Set in Order, Shine, Standardize, Sustain) across the Dettol Soap Packaging Area and Harpic Marine Line to eliminate workplace disorganization and safety hazards.",
    "Applied **red-tag audits** and **Fixed Location/Fixed Item/Fixed Quantity** principles, increasing pallet truck storage from **80 to 93 units** and outer carton storage from **3,840 to 4,464 units** — a **16.25%** overall capacity increase.",
    "Introduced standardized **visual management** (floor marking, labeling, audit checklists) on the Harpic Marine Line, reducing spill-related safety hazards and improving workflow consistency.",
    "Gained cross-functional exposure to engineering utilities, GMP-compliant quality systems, and zero-liquid-discharge wastewater treatment during the attachment.",
  ],
  tools: ["5S", "Lean Manufacturing", "Process Improvement", "Visual Management"],
};

export default function Reckitt5SPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="relative pt-16 md:pt-24 pb-8 px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        <PatternGrid className="absolute top-10 right-10 w-40 h-40 opacity-30 hidden md:block" />
        <div className="relative z-10">
          <Link
            href="/projects"
            className="inline-flex items-center text-label-mono text-on-surface-variant hover:text-primary transition-colors mb-8"
          >
            <span className="material-symbols-outlined mr-2 text-sm">arrow_back</span>
            Back to Projects
          </Link>
          <ImageSlider slides={gallery} fit="contain" />
          <div className="text-center mt-4">
            <h1 className="font-display font-bold text-headline-md text-on-surface mb-3 leading-tight">
              {title}
            </h1>
            <p className="text-label-mono text-primary text-center">{detail.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Detail Body */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto pb-24 md:pb-section-gap">
        <ProjectDetailView detail={detail} />
      </section>
    </div>
  );
}
