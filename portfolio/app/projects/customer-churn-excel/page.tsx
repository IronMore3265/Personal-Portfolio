import BackButton from "@/components/BackButton";
import ProjectDetailView from "@/components/ProjectDetailView";
import type { ProjectDetail } from "@/components/ProjectDetailView";
import { PatternGrid } from "@/components/DecorativeElements";
import ImageSlider from "@/components/ImageSlider";

const title = "Customer Churn Analysis — Excel Case Study";

const gallery = [
  "/images/Analysis Overview.png",
];

const detail: ProjectDetail = {
  subtitle: "Guided Project · DataCamp",
  overview:
    "Investigated churn behavior for a fictitious telecom company to understand not just the overall churn rate, but why customers leave — and which segments are most at risk.",
  whatIDid: [
    "Computed an overall churn rate of **26.86%** across **6,687 customers**, with senior customers churning at a significantly higher rate of **38.2%**.",
    "Built **PivotTables** to break down churn by demographics (age band, senior status), contract type (month-to-month, one-year, two-year), data plan usage, and geography (state-level).",
    "Identified month-to-month contracts as the highest-risk segment — churn rates exceeding **70–80%** in early tenure months (1–24 months).",
    "Found that customers on unlimited data plans but using under 5GB churned at **34.7%** vs **12.3%** for those without the plan, highlighting a pricing-value mismatch.",
    "Assembled findings into a structured churn analysis dashboard consolidating key metrics and segment comparisons.",
  ],
  tools: ["Excel", "PivotTables", "Calculated Fields", "Dashboard Design", "Data Analysis"],
  attribution:
    "Project sourced from DataCamp. Dataset from a fictitious telecom company (Databel).",
};

export default function CustomerChurnExcelPage() {
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
              href="https://drive.google.com/drive/folders/1pBdhRIoMMDWt-uP39hm_BgncbIa3Wzbw?usp=sharing"
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
