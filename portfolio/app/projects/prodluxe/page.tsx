import Link from "next/link";
import ProjectDetailView from "@/components/ProjectDetailView";
import type { ProjectDetail } from "@/components/ProjectDetailView";
import { PatternGrid } from "@/components/DecorativeElements";
import ImageSlider from "@/components/ImageSlider";

const title = "ProdLuxe — Herbal Detox Powder Startup";

const gallery = [
  "/images/Lemon%203%20side.png",
  "/images/Lemon.png",
  "/images/uihp_cert.pdf",
];

const detail: ProjectDetail = {
  subtitle: "Cofounder · Pre-Seed Funded · Team of 3",
  overview:
    "Cofounded ProdLuxe, a startup developing a herbal detox powder product, taken from concept through to selection in a national entrepreneurship accelerator cohort and pre-seed funding.",
  highlights: [
    "Selected as one of the cohort teams in a national entrepreneurship accelerator program, out of a competitive applicant pool.",
    "Secured a **pre-seed grant** to develop the product and business model.",
    "Gained mentorship and networking support that shaped product direction and go-to-market strategy, as part of a 3-member founding team.",
  ],
  tools: ["Entrepreneurship", "Product Development", "Business Strategy", "Cofounder"],
};

export default function ProdLuxePage() {
  return (
    <div>
      {/* Page Header */}
      <section className="relative pt-16 md:pt-24 pb-8 px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        <PatternGrid className="absolute top-10 right-10 w-40 h-40 opacity-30 hidden md:block" />
        <div className="relative z-10">
          <Link
            href="/"
            className="inline-flex items-center text-label-mono text-on-surface-variant hover:text-primary transition-colors mb-8"
          >
            <span className="material-symbols-outlined mr-2 text-sm">arrow_back</span>
            Back to Home
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
