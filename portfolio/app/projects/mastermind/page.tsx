import Link from "next/link";
import ProjectDetailView from "@/components/ProjectDetailView";
import type { ProjectDetail } from "@/components/ProjectDetailView";
import { PatternGrid } from "@/components/DecorativeElements";
import ImageSlider from "@/components/ImageSlider";

const title = "Mastermind 2.0 — National Business Case Competition";

const gallery = ["/images/mastermind_cert.png"];

const detail: ProjectDetail = {
  subtitle: "1st Runner-Up · Team of 4",
  overview:
    "Competed in Mastermind 2.0, a national business case competition, advancing through multiple elimination rounds against a field of 456 teams to reach the final stage.",
  highlights: [
    "Advanced from an initial pool of **456 teams** to the **top 10 finalists**, then to the final round — under tight deadlines during the final weeks of the semester.",
    "Secured **1st Runner-Up**, the competition's podium finish, as part of a 4-member team.",
  ],
  tools: ["Business Case Analysis", "Strategic Problem-Solving", "Team Collaboration"],
};

export default function MastermindPage() {
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
