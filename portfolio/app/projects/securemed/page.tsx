import Link from "next/link";
import BackButton from "@/components/BackButton";
import ProjectDetailView from "@/components/ProjectDetailView";
import type { ProjectDetail } from "@/components/ProjectDetailView";
import { PatternGrid } from "@/components/DecorativeElements";
import ImageSlider from "@/components/ImageSlider";

const title = "SecureMed — Future Bangladesh Challenge 2025";

const gallery = ["/images/tbd_cert.png"];

const detail: ProjectDetail = {
  subtitle: "Finalist · Top 10 of 700+ Teams · National Policy Challenge · Team of 2",
  role: "Idea Generation & Financial Modeling",
  overview:
    "Proposed SecureMed, an integrated AI, blockchain, and IoT-based drug authentication system designed to combat counterfeit medicines and strengthen national healthcare integrity, as a policy solution in a national-level challenge.",
  highlights: [
    "Advanced to the **Top 10** out of **700+** competing teams nationwide.",
    "Contributed to core concept development of SecureMed, shaping the AI, blockchain, and IoT-based solution design.",
    "Modeled commercial viability with a **2.56-year payback period**, supporting the business case presented to judges.",
  ],
  tools: [
    "Policy Research",
    "Idea Generation",
    "Financial Modeling",
    "AI",
    "Blockchain",
    "IoT",
  ],
};

export default function SecureMedPage() {
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
              href="/projects/securemed-visionx"
              className="inline-flex items-center gap-1.5 text-body-md text-sm text-on-surface-variant hover:text-primary transition-colors mt-4"
            >
              <span className="material-symbols-outlined text-sm">link</span>
              Same core project, presented at VisionX 2025
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
