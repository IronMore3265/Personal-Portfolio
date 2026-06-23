import Link from "next/link";
import ProjectDetailView from "@/components/ProjectDetailView";
import type { ProjectDetail } from "@/components/ProjectDetailView";
import { PatternGrid } from "@/components/DecorativeElements";
import ImageSlider from "@/components/ImageSlider";

const title = "MotoHaul — Motorized Self-Unloading Wheelbarrow";

const gallery = [
  "/images/group_wheelbarrow.jpg",
  "/images/wheelbarrow.jpg",
  "/images/MotoHaul_Video%20Demonstration.mp4",
];

const detail: ProjectDetail = {
  subtitle: "Undergraduate Product Design Project · Team of 6",
  role: "Mechanical Analysis (ANSYS) · Project Coordination & Lead",
  overview:
    "A motorized, self-unloading wheelbarrow built to reduce physical strain and unloading time for dump cleaners, construction workers, and farmers — addressing the manual handling injuries and productivity losses common with traditional push wheelbarrows.",
  keyFeatures: [
    "Motorized wheels for effortless transport of heavy loads",
    "Integrated braking system for operator safety",
    "Automated unloading mechanism, eliminating manual tipping",
  ],
  contribution: [
    "Led project coordination across design, financial modeling, and market-research workstreams, aligning a 6-member team around a single product roadmap and final deliverable.",
    "Performed mechanical feasibility and fatigue-life analysis of the chassis and load-bearing components using **ANSYS**, validating structural durability under repeated **80–100kg** load cycles.",
    "Prepared and presented the final poster and live product demonstration, consolidating engineering, financial, and market findings into one cohesive story.",
  ],
  outcomes: [
    "Delivered a working prototype carrying and unloading **80–100kg** per cycle, with **12+ hours** of battery backup on a full charge.",
    "Modeled commercial viability at **74% ROI**, a **10.72-year payback period**, and break-even at **401 units**.",
    "Sized the addressable market at **$814.2M TAM**, with a serviceable obtainable market of **1,438 units**.",
  ],
  tools: ["ANSYS", "Mechanical Analysis", "Product Design", "Cross-functional Leadership"],
};

export default function MotoHaulPage() {
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
          <ImageSlider slides={gallery} />
          <div className="text-center mt-4">
            <h1 className="font-display font-bold text-headline-md text-on-surface mb-3 leading-tight">
              {title}
            </h1>
            <p className="text-label-mono text-on-surface-variant mb-1 text-center">{detail.subtitle}</p>
            <p className="text-label-mono text-primary text-center">{detail.role}</p>
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
