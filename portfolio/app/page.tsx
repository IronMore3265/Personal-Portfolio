"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import ExperienceRow from "@/components/ExperienceRow";
import SkillBadge from "@/components/SkillBadge";
import { PatternGrid, DiagonalLine, GradientBlob } from "@/components/DecorativeElements";
import {
  useHeroAnimation,
  useRevealAnimations,
  useCountUp,
} from "@/lib/animations";

const skills = [
  { name: "MS Excel", icon: "/images/excel.svg" },
  { name: "Power BI", icon: "/images/powerbi.svg" },
  { name: "Python", icon: "/images/python.svg" },
  { name: "SPSS", icon: "/images/spss.svg" },
  { name: "AutoCAD", icon: "/images/autocad.svg" },
  { name: "SolidWorks", icon: "/images/solidworks.svg" },
];

const experiences = [
  {
    date: "Nov 2025",
    title: "Industrial Training",
    company: "Reckitt Benckiser Bangladesh PLC",
    bullets: [
      "Led 5S implementation on the Dettol production line, resulting in a verified +16.25% capacity increase.",
      "Proposed and designed a comprehensive Harpic 5S improvement framework.",
      "Applied advanced Lean methodologies including VSM (Value Stream Mapping), ECRS, and SMED.",
    ],
  },
];

export default function Home() {
  const heroRef = useHeroAnimation();
  const revealRef = useRevealAnimations();

  const statProjects = useCountUp(10, 2, "+");
  const statCapacity = useCountUp(16, 2, "%");
  const statEmission = useCountUp(93, 2, "%");

  return (
    <div ref={revealRef}>
      {/* ===== HERO SECTION ===== */}
      <section
        ref={heroRef}
        className="relative pt-16 md:pt-24 pb-24 md:pb-40 px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto min-h-[70vh] flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16"
      >
        {/* Decorative Elements */}
        <PatternGrid className="absolute top-20 left-10 w-32 h-32 opacity-50 hidden md:block" />
        <DiagonalLine className="absolute bottom-20 right-20 w-48 hidden md:block transform rotate-45 origin-right" />

        {/* Text Content */}
        <div className="w-full md:w-1/2 z-10 relative">
          <h1 className="text-headline-lg-mobile md:text-display text-primary mb-6">
            <span className="hero-greeting font-light block">Hello!</span>
            <span className="hero-name block">I&apos;m Nabil Fuad Raiyan</span>
          </h1>
          <div className="hero-subtitle flex items-center gap-4 mb-8">
            <h2 className="text-headline-md text-on-surface-variant">
              IPE Graduate, BUET
            </h2>
          </div>
          <p className="hero-description text-body-lg text-on-surface-variant mb-10 max-w-lg">
            Blending Lean manufacturing and data-driven problem solving.
            I&apos;m a process optimizer, data analyst, and organizational
            leader focused on sustainable engineering solutions.
          </p>
          <div className="hero-buttons flex flex-col sm:flex-row gap-6">
            <Button href="/#contact" variant="primary" icon="arrow_forward">
              Let&apos;s Talk
            </Button>
            <Button
              href="https://drive.google.com/your-cv-link"
              variant="secondary"
              icon="download"
              target="_blank"
            >
              Download CV
            </Button>
          </div>
        </div>

        {/* Profile Image */}
        <div className="w-full md:w-1/2 relative flex justify-center z-10">
          <GradientBlob className="hero-blob absolute inset-0 z-0 rounded-full scale-110" />
          <div className="hero-image relative z-10 w-full max-w-sm md:max-w-md aspect-square bg-surface-container-high rounded-full overflow-hidden border-4 border-background">
            <Image
              src="/images/profile NBL.png"
              alt="Nabil Fuad Raiyan"
              width={500}
              height={500}
              priority
              className="w-full h-full object-cover grayscale-[75%] contrast-125"
            />
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE SECTION ===== */}
      <section
        className="w-full py-24 md:py-section-gap px-margin-mobile md:px-margin-desktop relative overflow-hidden"
        id="experience"
      >
        <PatternGrid className="absolute top-0 right-0 w-64 h-64 opacity-10" />
        <div className="max-w-[1440px] mx-auto">
          <SectionHeading icon="work" title="Experience" />
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, i) => (
              <ExperienceRow key={i} {...exp} className="reveal-left" />
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT / EDUCATION & SKILLS ===== */}
      <section
        className="py-24 md:py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto"
        id="about"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education */}
          <div className="reveal-up">
            <h2 className="text-headline-md mb-8 border-b border-outline-variant pb-4 text-primary">
              Education
            </h2>
            <div className="mb-8">
              <h3 className="font-display text-body-lg font-bold text-on-surface">
                BSc in Industrial and Production Engineering
              </h3>
              <p className="text-body-md text-on-surface-variant">
                BUET (2022–2026)
              </p>
            </div>

            <h2 className="text-headline-md mb-8 mt-16 border-b border-outline-variant pb-4 text-primary">
              Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill) => (
                <SkillBadge key={skill.name} {...skill} />
              ))}
            </div>
          </div>

          {/* Thesis Highlight */}
          <div className="reveal-up">
            <h2 className="text-headline-md mb-8 border-b border-outline-variant pb-4 text-primary">
              Thesis Highlight
            </h2>
            <div className="bg-surface-container p-8 border border-outline-variant dark:bg-surface-container-high">
              <span className="text-label-mono text-on-surface-variant block mb-4">
                Research • 2025–2026
              </span>
              <h3 className="text-headline-md mb-4 text-on-surface">
                CNC Turning Optimization
              </h3>
              <p className="text-body-md text-on-surface-variant mb-6">
                Comprehensive study on sustainable manufacturing processes,
                achieving a 93% reduction in carbon emissions through
                optimized cutting parameters and advanced multi-objective
                optimization algorithms.
              </p>
              <div className="flex gap-4 flex-wrap">
                <span className="text-label-mono px-3 py-1 bg-surface-variant dark:bg-surface-container-highest text-on-surface-variant">
                  Sustainable Manufacturing
                </span>
                <span className="text-label-mono px-3 py-1 bg-surface-variant dark:bg-surface-container-highest text-on-surface-variant">
                  Multi-objective Optimization
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ROW ===== */}
      <section className="border-y border-outline-variant bg-surface-bright py-16 px-margin-mobile md:px-margin-desktop dark:bg-surface-container">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="reveal-up">
            <span
              ref={statProjects}
              className="text-display text-primary block mb-2"
            >
              0
            </span>
            <span className="text-label-mono text-on-surface-variant">
              Projects Completed
            </span>
          </div>
          <div className="reveal-up">
            <span
              ref={statCapacity}
              className="text-display text-primary block mb-2"
            >
              0
            </span>
            <span className="text-label-mono text-on-surface-variant">
              Capacity Increase
            </span>
          </div>
          <div className="reveal-up">
            <span
              ref={statEmission}
              className="text-display text-primary block mb-2"
            >
              0
            </span>
            <span className="text-label-mono text-on-surface-variant">
              Emission Reduction
            </span>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS PREVIEW ===== */}
      <section className="py-24 md:py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        <SectionHeading icon="view_cozy" title="Notable Projects" />
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[280px] gap-6">
          {/* Featured Project */}
          <div className="md:col-span-2 md:row-span-2 bg-surface-container border border-outline-variant p-8 flex flex-col justify-between group hover:border-primary transition-colors duration-300 reveal-scale dark:bg-surface-container-high">
            <div className="flex justify-between items-start">
              <span className="bg-primary text-on-primary text-label-mono px-3 py-1 text-xs">
                Research
              </span>
              <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">
                arrow_outward
              </span>
            </div>
            <div>
              <h3 className="text-headline-md mb-4 text-on-surface">
                Thesis Project: CNC Turning Optimization
              </h3>
              <p className="text-body-md text-on-surface-variant max-w-lg">
                Comprehensive study on sustainable manufacturing processes,
                achieving a 93% reduction in carbon emissions.
              </p>
            </div>
          </div>

          {/* Small Cards */}
          <div className="bg-surface-container border border-outline-variant p-8 flex flex-col justify-between group hover:border-primary transition-colors duration-300 reveal-scale dark:bg-surface-container-high">
            <span className="bg-surface-variant text-label-mono px-3 py-1 text-xs w-fit dark:bg-surface-container-highest">
              Competition
            </span>
            <div>
              <h3 className="font-display text-body-lg font-bold mb-2 text-on-surface">
                Mastermind 2.0
              </h3>
              <p className="text-body-md text-on-surface-variant text-sm">
                Secured 1st Runners-up position in national competition.
              </p>
            </div>
          </div>

          <div className="bg-primary text-on-primary p-8 flex flex-col justify-between group reveal-scale dark:bg-surface-container-highest dark:border dark:border-outline-variant">
            <div className="flex justify-between items-start">
              <span className="border border-on-primary text-label-mono px-3 py-1 text-xs dark:border-outline-variant">
                Industrial
              </span>
              <span className="material-symbols-outlined text-on-primary/50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform dark:text-on-surface-variant">
                arrow_outward
              </span>
            </div>
            <div>
              <h3 className="font-display text-body-lg font-bold mb-2">
                Reckitt Benckiser 5S/Lean
              </h3>
              <p className="text-body-md text-primary-fixed-dim text-sm dark:text-on-surface-variant">
                Led implementation on Dettol line resulting in significant
                capacity boost.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 reveal-up">
          <Button href="/projects" variant="secondary" icon="arrow_forward">
            View All Projects
          </Button>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section
        className="py-24 md:py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-t border-outline-variant text-center dark:bg-surface-container"
        id="contact"
      >
        <div className="max-w-2xl mx-auto">
          <span className="material-symbols-outlined text-4xl mb-6 text-primary block reveal-fade">
            mail
          </span>
          <h2 className="text-display font-bold text-primary mb-8 tracking-tight reveal-up">
            Say Hi, <br />
            and let&apos;s talk data.
          </h2>
          <p className="text-body-lg text-on-surface-variant mb-12 reveal-up">
            Have a process to optimize or data to analyze? Reach out and
            let&apos;s chat.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 reveal-up">
            <Button href="mailto:nabil.buet20@gmail.com" variant="primary">
              nabil.buet20@gmail.com
            </Button>
            <Button
              href="https://linkedin.com/in/nabilfuad19"
              variant="secondary"
              icon="open_in_new"
              target="_blank"
            >
              LinkedIn Profile
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
