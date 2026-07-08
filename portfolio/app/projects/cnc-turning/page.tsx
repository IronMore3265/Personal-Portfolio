import BackButton from "@/components/BackButton";
import ProjectDetailView from "@/components/ProjectDetailView";
import type { ProjectDetail } from "@/components/ProjectDetailView";
import { PatternGrid } from "@/components/DecorativeElements";
import ImageSlider from "@/components/ImageSlider";

const title = "Carbon Emission Optimization in CNC Turning";

const gallery = [
  "/images/IMG_0580.jpg",
  "/images/Stage5_Fig1_PieCharts_Energy_CE.png",
  "/images/Stage5_Fig4_StackedBar_CE_perExperiment.png",
  "/images/Stage8_Fig3_Residual_Diagnostics.png",
];

const detail: ProjectDetail = {
  subtitle: "Undergraduate Thesis · Industrial & Production Engineering",
  role: "Collaborative Research · Team of 3 People",
  overview:
    "A sustainability-focused thesis investigating how cutting parameters in CNC turning — speed, feed, and depth of cut — affect energy consumption and carbon emissions, with the goal of identifying machining conditions that cut environmental impact without sacrificing performance.",
  methodology: [
    "Conducted 30 full-factorial CNC turning experiments under dry and wet cutting conditions on a **Haas CNC lathe**, measuring energy consumption and emissions across varying parameter combinations.",
    "Processed experimental data and performed **Grey Relational Analysis (GRA)** and **TOPSIS** multi-objective optimization calculations in **Excel** and **MATLAB**, cross-validated, to identify the optimal speed-feed-depth combination.",
    "Built and validated power-law regression models in **Minitab** to predict energy consumption and emissions directly from cutting parameters.",
  ],
  outcomes: [
    "Reduced carbon emissions by **93%** and energy consumption by **91%** versus baseline cutting parameters.",
    "Brought specific energy consumption (SEC) down to **23.3 J/mm³** — the efficient-zone benchmark.",
    "Validated predictive models with **R² up to 99.97%**, enabling sustainable process planning without further physical testing.",
  ],
  tools: ["Microsoft Excel", "Matlab", "Minitab", "Sustainable Manufacturing"],
};

export default function CncTurningPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="relative pt-6 md:pt-10 pb-8 px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        <PatternGrid className="absolute top-10 right-10 w-40 h-40 opacity-30 hidden md:block" />
        <div className="relative z-10">
          <BackButton label="Back to Projects" fallbackHref="/all-projects" />
          <ImageSlider slides={gallery} fit="contain" />
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
