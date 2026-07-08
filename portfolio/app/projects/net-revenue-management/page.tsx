import BackButton from "@/components/BackButton";
import ProjectDetailView from "@/components/ProjectDetailView";
import type { ProjectDetail } from "@/components/ProjectDetailView";
import { PatternGrid } from "@/components/DecorativeElements";
import ImageSlider from "@/components/ImageSlider";

const title = "Net Revenue Management (NRM) — FMCG Case Study";

const gallery = [
  "/images/unit_growth.png",
  "/images/value_growth.png",
  "/images/forecast.png",
];

const detail: ProjectDetail = {
  subtitle: "Guided Project · DataCamp",
  overview:
    "A structured business case simulating the role of a category manager at an FMCG company, analyzing the shampoo market and identifying revenue growth opportunities using the five pillars of Net Revenue Management.",
  whatIDid: [
    "Analyzed a large external sales dataset covering monthly shampoo sales by region, subcategory, brand, and supplier across 2018–2023, using **PivotTables** and **VLOOKUP** to extract category-level KPIs — market share, monthly growth, **YTD**, and **MAT** — against competitors.",
    "Applied all **5 NRM pillars** — **Brand Portfolio Pricing**, **Pack Price Architecture**, **Mix Management**, **Promotion Management**, and **Trade Terms Management** — to identify business opportunities and revenue gaps.",
    "Built a **Profitability Matrix** using **gross margin %** and **net sales contribution**, mapping each product to its profitability tier to prioritize mix decisions.",
    "Quantified three growth buckets — natural market growth, an organic shampoo line extension, and a new **50ml pack** format — projecting total net sales from **~$20.6M** to **~$21.4M** for 2024.",
    "Consolidated all findings into a single shampoo category dashboard summarizing category size (**$98.5M MAT**), company performance, and forward-looking recommendations.",
  ],
  tools: [
    "Excel",
    "PivotTables",
    "VLOOKUP",
    "NRM Framework",
    "KPI Calculation",
    "Forecasting",
    "FMCG Analytics",
  ],
  attribution: "Project sourced from DataCamp. Dataset and company are fictitious.",
};

export default function NetRevenueManagementPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="relative pt-6 md:pt-10 pb-8 px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        <PatternGrid className="absolute top-10 right-10 w-40 h-40 opacity-30 hidden md:block" />
        <div className="relative z-10">
          <BackButton label="Back to Projects" fallbackHref="/all-projects" />
          {gallery.length > 0 && <ImageSlider slides={gallery} fit="contain" />}
          <div className="text-center mt-4">
            <h1 className="font-display font-bold text-headline-md text-on-surface mb-3 leading-tight">
              {title}
            </h1>
            <p className="text-label-mono text-on-surface-variant mb-6 text-center">
              {detail.subtitle}
            </p>
            <a
              href="https://drive.google.com/drive/folders/1Y6piZRq1VGouqxzVnE6ICimRafnjbNHN?usp=sharing"
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
