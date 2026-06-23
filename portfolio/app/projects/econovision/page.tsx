import Link from "next/link";
import ProjectDetailView from "@/components/ProjectDetailView";
import type { ProjectDetail } from "@/components/ProjectDetailView";
import { PatternGrid } from "@/components/DecorativeElements";
import ImageSlider from "@/components/ImageSlider";

const title = "EconoVision — National Policy-Making Competition";

const gallery = ["/images/natecon_cert.jpg"];

const detail: ProjectDetail = {
  subtitle: "Finalist (Top 8 of 111 Teams) · Team of 2",
  overview:
    "Competed in EconoVision, the policy-making segment of NatEcon 2.0, a national-level case competition, advancing through multiple rounds of policy research and analytical writing to reach the finals.",
  highlights: [
    "Advanced from a field of **111 teams** to the finals, placing among the **top 8** nationally.",
    "Strengthened policy research and analytical writing skills by developing comprehensive policy frameworks, as part of a 2-member team.",
  ],
  tools: ["Policy Research", "Analytical Writing", "Case Competition"],
};

export default function EconoVisionPage() {
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
