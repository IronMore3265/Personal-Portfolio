import BackButton from "@/components/BackButton";
import ProjectDetailView from "@/components/ProjectDetailView";
import type { ProjectDetail } from "@/components/ProjectDetailView";
import { PatternGrid } from "@/components/DecorativeElements";

const title = "Analyzing Students' Mental Health — SQL Data Analysis";

const detail: ProjectDetail = {
  subtitle: "Guided Project · DataCamp",
  overview:
    "Explored survey data from a study on international university students to investigate whether studying abroad affects mental health — and whether length of stay amplifies that effect.",
  whatIDid: [
    "Queried and filtered a **PostgreSQL** database of student records using **WHERE**, **GROUP BY**, and **ORDER BY** to isolate international students from domestic ones.",
    "Computed group-level averages for three validated mental health scores — **PHQ-9** (depression), **SCS** (social connectedness), and **ASISS** (acculturative stress) — segmented by length of stay.",
    "Found patterns consistent with the original published study: longer stays correlated with shifts in depression and stress scores among international students.",
  ],
  tools: ["PostgreSQL", "SQL", "Data Analysis"],
  attribution:
    "Project sourced from DataCamp. Original study approved by ethical and regulatory boards.",
};

export default function StudentsMentalHealthPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="relative pt-6 md:pt-10 pb-8 px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        <PatternGrid className="absolute top-10 right-10 w-40 h-40 opacity-30 hidden md:block" />
        <div className="relative z-10">
          <BackButton label="Back to Projects" fallbackHref="/projects" />
          <div className="text-center mt-8">
            <h1 className="font-display font-bold text-headline-md text-on-surface mb-3 leading-tight">
              {title}
            </h1>
            <p className="text-label-mono text-on-surface-variant mb-1 text-center">
              {detail.subtitle}
            </p>
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
