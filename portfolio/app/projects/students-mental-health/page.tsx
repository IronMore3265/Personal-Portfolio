import BackButton from "@/components/BackButton";
import ProjectDetailView from "@/components/ProjectDetailView";
import type { ProjectDetail } from "@/components/ProjectDetailView";
import { PatternGrid } from "@/components/DecorativeElements";
import ImageSlider from "@/components/ImageSlider";

const title = "Analyzing Students' Mental Health using SQL";

const gallery = [
  "/images/mentalhealth.jpg",
];

const detail: ProjectDetail = {
  subtitle: "Guided Project · DataCamp",
  overview:
    "Explored survey data from a study on international university students to investigate whether studying abroad affects mental health — and whether length of stay amplifies that effect.",
  whatIDid: [
    "Queried and filtered a **PostgreSQL** database of student records using **WHERE**, **GROUP BY**, and **ORDER BY** to isolate international students from domestic ones.",
    "Computed group-level averages for three validated mental health scores — **PHQ-9** (depression), **SCS** (social connectedness), and **ASISS** (acculturative stress) — segmented by length of stay.",
    "Found patterns consistent with the original published study: longer stays correlated with shifts in depression and stress scores among international students.",
  ],
  tools: ["SQL", "Data Analysis"],
  attribution:
    "Project sourced from DataCamp.",
};

export default function StudentsMentalHealthPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="relative pt-6 md:pt-10 pb-8 px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        <PatternGrid className="absolute top-10 right-10 w-40 h-40 opacity-30 hidden md:block" />
        <div className="relative z-10">
          <BackButton label="Back to Projects" fallbackHref="/projects" />
          <ImageSlider slides={gallery} fit="contain" />
          <div className="text-center mt-4">
            <h1 className="font-display font-bold text-headline-md text-on-surface mb-3 leading-tight">
              {title}
            </h1>
            <p className="text-label-mono text-on-surface-variant mb-6 text-center">
              {detail.subtitle}
            </p>
            <a
              href="https://drive.google.com/drive/folders/1_jKECeOoZvqs92gq-KH3j-f66TRr6YRr?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 text-body-md text-sm text-on-surface-variant hover:text-primary transition-colors mt-4"
            >
              <span className="material-symbols-outlined text-sm">link</span>
              Project Files
            </a>
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
