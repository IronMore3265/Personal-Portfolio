"use client";

import { useState } from "react";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { PatternGrid } from "@/components/DecorativeElements";
import { useRevealAnimations } from "@/lib/animations";

type ProjectCategory = "all" | "academic" | "software";
type SoftwareFilter = "all" | "excel" | "powerbi" | "python";

interface Project {
  tag: string;
  title: string;
  description: string;
  category: "academic" | "software";
  softwareType?: SoftwareFilter;
  variant: "light" | "dark" | "featured";
  colSpan?: number;
  rowSpan?: number;
}

const projects: Project[] = [
  {
    tag: "Research",
    title: "Thesis Project: CNC Turning Optimization",
    description:
      "Comprehensive study on sustainable manufacturing processes, achieving a 93% reduction in carbon emissions through optimized cutting parameters.",
    category: "academic",
    variant: "featured",
    colSpan: 2,
    rowSpan: 2,
  },
  {
    tag: "Competition",
    title: "Mastermind 2.0",
    description: "Secured 1st Runners-up position in national competition.",
    category: "academic",
    variant: "light",
  },
  {
    tag: "Global Case",
    title: "ISCEA Global Supply Chain Case",
    description: "Awarded 60% Scholarship for exceptional performance.",
    category: "academic",
    variant: "light",
    colSpan: 2,
  },
  {
    tag: "Innovation",
    title: "University Innovation Hub",
    description: "Secured pre-seed grant for innovative engineering solution.",
    category: "academic",
    variant: "light",
  },
  {
    tag: "Industrial",
    title: "Reckitt Benckiser 5S/Lean Project",
    description:
      "Led 5S implementation on Dettol production line resulting in +16.25% capacity increase.",
    category: "software",
    softwareType: "excel",
    variant: "dark",
  },
  {
    tag: "Data Analysis",
    title: "Sales Performance Dashboard",
    description:
      "Built comprehensive Power BI dashboard for real-time sales tracking and KPI monitoring.",
    category: "software",
    softwareType: "powerbi",
    variant: "light",
    colSpan: 2,
  },
  {
    tag: "Automation",
    title: "Production Line Optimizer",
    description:
      "Python-based simulation and optimization tool for manufacturing line balancing.",
    category: "software",
    softwareType: "python",
    variant: "featured",
    colSpan: 2,
    rowSpan: 2,
  },
  {
    tag: "Analysis",
    title: "Supply Chain Cost Model",
    description:
      "Advanced Excel model for multi-echelon supply chain cost analysis with scenario planning.",
    category: "software",
    softwareType: "excel",
    variant: "light",
  },
  {
    tag: "Visualization",
    title: "Quality Control Analytics",
    description:
      "Power BI solution for statistical process control and defect root cause analysis.",
    category: "software",
    softwareType: "powerbi",
    variant: "dark",
  },
  {
    tag: "Machine Learning",
    title: "Demand Forecasting Engine",
    description:
      "Python ML pipeline for demand prediction using ARIMA and XGBoost models.",
    category: "software",
    softwareType: "python",
    variant: "light",
    colSpan: 2,
  },
];

const categoryFilters: { label: string; value: ProjectCategory }[] = [
  { label: "All Projects", value: "all" },
  { label: "Academic Projects", value: "academic" },
  { label: "Software-based Projects", value: "software" },
];

const softwareFilters: { label: string; value: SoftwareFilter }[] = [
  { label: "All", value: "all" },
  { label: "Microsoft Excel", value: "excel" },
  { label: "Power BI", value: "powerbi" },
  { label: "Python", value: "python" },
];

export default function ProjectsPage() {
  const [category, setCategory] = useState<ProjectCategory>("all");
  const [softwareFilter, setSoftwareFilter] = useState<SoftwareFilter>("all");
  const revealRef = useRevealAnimations();

  const filteredProjects = projects.filter((p) => {
    if (category === "all") return true;
    if (category !== p.category) return false;
    if (category === "software" && softwareFilter !== "all") {
      return p.softwareType === softwareFilter;
    }
    return true;
  });

  return (
    <div ref={revealRef}>
      {/* Page Header */}
      <section className="relative pt-16 md:pt-24 pb-12 px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        <PatternGrid className="absolute top-10 right-10 w-40 h-40 opacity-30 hidden md:block" />
        <div className="relative z-10">
          <Link
            href="/"
            className="inline-flex items-center text-label-mono text-on-surface-variant hover:text-primary transition-colors mb-8"
          >
            <span className="material-symbols-outlined mr-2 text-sm">
              arrow_back
            </span>
            Back to Home
          </Link>
          <SectionHeading icon="view_cozy" title="All Projects" />
        </div>
      </section>

      {/* Filters */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto mb-12">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categoryFilters.map((f) => (
            <button
              key={f.value}
              onClick={() => {
                setCategory(f.value);
                setSoftwareFilter("all");
              }}
              className={`px-8 py-3 font-display font-bold text-label-mono transition-all duration-300 border ${
                category === f.value
                  ? "bg-primary text-on-primary border-primary"
                  : "bg-surface-container text-primary border-outline-variant hover:border-primary dark:bg-surface-container-high dark:text-on-surface"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Software sub-filters */}
        <div
          className={`flex justify-center gap-8 border-b border-outline-variant pb-4 transition-all duration-500 ${
            category === "software"
              ? "opacity-100 max-h-20"
              : "opacity-0 max-h-0 overflow-hidden"
          }`}
        >
          {softwareFilters.map((f) => (
            <button
              key={f.value}
              onClick={() => setSoftwareFilter(f.value)}
              className={`text-label-mono transition-colors duration-300 ${
                softwareFilter === f.value
                  ? "text-primary border-b-2 border-primary"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto pb-24 md:pb-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[280px] gap-6">
          {filteredProjects.map((project, i) => (
            <ProjectCard
              key={`${project.title}-${i}`}
              tag={project.tag}
              title={project.title}
              description={project.description}
              variant={project.variant}
              colSpan={project.colSpan}
              rowSpan={project.rowSpan}
              className="reveal-scale"
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-24">
            <span className="material-symbols-outlined text-6xl text-outline-variant mb-4 block">
              folder_off
            </span>
            <p className="text-body-lg text-on-surface-variant">
              No projects found for this filter.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
