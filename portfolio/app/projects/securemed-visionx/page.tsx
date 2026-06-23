import Link from "next/link";
import BackButton from "@/components/BackButton";
import ProjectDetailView from "@/components/ProjectDetailView";
import type { ProjectDetail } from "@/components/ProjectDetailView";
import { PatternGrid } from "@/components/DecorativeElements";
import ImageSlider from "@/components/ImageSlider";

const title = "SecureMed — VisionX 2025";

const gallery = ["/images/visionx_cert.png"];

const detail: ProjectDetail = {
  subtitle: "Finalist · Top 17 Teams · Business Idea Presentation Track · Team of 3",
  role: "Idea Generation & Financial Modeling",
  overview:
    "Presented SecureMed, an AI, blockchain, and IoT-based drug authentication platform addressing counterfeit medicine in the pharmaceutical supply chain, reaching the finals of a national AI innovation challenge under the Business Idea Presentation track.",
  highlights: [
    "Reached finalist status among **17** competing teams nationally.",
    "Contributed to core concept development of SecureMed, shaping the AI, blockchain, and IoT-based solution design.",
    "Presented a business case projecting an **$11M valuation** after five years.",
  ],
  tools: [
    "Business Idea Pitching",
    "Idea Generation",
    "Financial Modeling",
    "AI",
    "Blockchain",
    "IoT",
  ],
};

export default function SecureMedVisionXPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="relative pt-6 md:pt-10 pb-8 px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        <PatternGrid className="absolute top-10 right-10 w-40 h-40 opacity-30 hidden md:block" />
        <div className="relative z-10">
          <BackButton label="Back to Home" fallbackHref="/" />
          <ImageSlider slides={gallery} fit="contain" />
          <div className="text-center mt-4">
            <h1 className="font-display font-bold text-headline-md text-on-surface mb-3 leading-tight">
              {title}
            </h1>
            <p className="text-label-mono text-on-surface-variant mb-1 text-center">{detail.subtitle}</p>
            <p className="text-label-mono text-primary text-center">{detail.role}</p>
            <Link
              href="/projects/securemed"
              className="inline-flex items-center gap-1.5 text-body-md text-sm text-on-surface-variant hover:text-primary transition-colors mt-4"
            >
              <span className="material-symbols-outlined text-sm">link</span>
              Same core project, presented at the Future Bangladesh Challenge
            </Link>
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
