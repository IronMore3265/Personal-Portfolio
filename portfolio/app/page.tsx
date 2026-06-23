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
} from "@/lib/animations";

const skills = [
  { name: "MS Excel", icon: "/images/excel-1.svg" },
  { name: "Power BI", icon: "/images/powerbi-1.svg" },
  { name: "Python", icon: "/images/python-1.svg" },
  { name: "MATLAB", icon: "/images/matlab-1.svg" },
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
  {
    date: "2025 – 2026",
    title: "General Secretary",
    company: "Association of Industrial and Production Engineers (AIPE), BUET",
    bullets: [
      "Served as the highest elected student representative of the IPE department, leading a 100+ member organization across academic and professional initiatives.",
      "Spearheaded IPE Fest and Career Fest — coordinating logistics, corporate outreach, speaker sessions, and cross-departmental collaboration.",
      "Launched and managed the Alumni Spotlight initiative to strengthen ties between current students and IPE alumni across industry and academia.",
      "Oversaw executive committee operations, faculty liaison, budget planning, and official departmental communications.",
    ],
  },
  {
    date: "2025 – 2026",
    title: "Assistant General Secretary",
    company: "IEOM BUET Student Chapter",
    bullets: [
      "Co-organized chapter events, workshops, and industrial seminars aligned with IEOM's professional development mission.",
      "Coordinated member engagement, inter-chapter outreach, and documentation for one of BUET's active engineering professional societies.",
    ],
  },
];

export default function Home() {
  const heroRef = useHeroAnimation();
  const revealRef = useRevealAnimations();

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
              Industrial Engineer & Data Analyst
            </h2>
          </div>
          <p className="hero-description text-body-lg text-on-surface-variant mb-10 max-w-lg">
            Blending Lean manufacturing and data-driven problem solving.
            I&apos;m a process optimizer, data analyst, and organizational
            leader focused on sustainable engineering solutions.
          </p>
          <div className="hero-buttons flex flex-col sm:flex-row gap-6">
            <Button href="/#contact" variant="primary" icon="arrow_forward">
              Contact me
            </Button>
            <Button
              href="https://drive.google.com/drive/folders/1G9RMjlelgP1kYhJzQmlhvO2Wg1tprSEs?usp=sharing"
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
              className="w-full h-full object-cover grayscale-[90%] contrast-100"
            />
          </div>
        </div>
      </section>

      {/* ===== ABOUT / EDUCATION & SKILLS ===== */}
      <section
        className="py-24 md:py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto"
        id="about"
      >
        <SectionHeading icon="person" title="About Me" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education */}
          <div className="reveal-up">
            <h2 className="text-headline-md mb-8 border-b border-outline-variant pb-4 text-primary">
              Education
            </h2>
            <div className="mb-8">
              <h3 className="font-display text-lg font-bold text-on-surface">
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

          {/* Who I Am */}
          <div className="reveal-up">
            <h2 className="text-headline-md mb-8 border-b border-outline-variant pb-4 text-primary">
              Who I Am
            </h2>
            <div className="bg-surface-container p-8 border border-outline-variant dark:bg-surface-container-high">
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                I&apos;m an Industrial and Production Engineer who&apos;s spent the last few years learning how to make systems work smarter, not just harder — manufacturing lines, supply chains, decision-making processes. My academic research focused on optimizing CNC machining parameters to cut carbon emissions, but the thread running through everything I do is using data to solve problems that actually matter, where Lean tools like 5S, VSM, and SMED meet analytics platforms like Power BI and Python. I&apos;ve led a large student engineering organization, helped my team reach the podium at a national business case competition, and secured a pre-seed grant for a product design project — experiences that taught me as much about people and execution as any classroom did. Right now, I&apos;m channeling that mix of analytical rigor and process thinking into business analytics and supply chain roles, looking for problems worth solving at scale.
              </p>
            </div>
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

      {/* ===== PROJECTS PREVIEW ===== */}
      <section id="projects" className="py-24 md:py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        <SectionHeading icon="view_cozy" title="My Projects" />
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-auto md:auto-rows-[280px] gap-6">
          {/* Featured Project */}
          <Link
            href="/projects/cnc-turning"
            className="md:col-span-2 md:row-span-2 bg-surface-container border border-outline-variant p-8 flex flex-col justify-between group hover:border-primary transition-colors duration-300 reveal-scale dark:bg-surface-container-high"
          >
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
                Carbon Emission Optimization in CNC Turning
              </h3>
              <p className="text-body-md text-on-surface-variant max-w-lg">
                Optimized CNC turning parameters using Grey Relational
                Analysis and TOPSIS, cutting carbon emissions by 93% and
                validated with regression models up to R² 99.97%.
              </p>
            </div>
          </Link>

          {/* Small Cards */}
          <Link
            href="/projects/motohaul"
            className="bg-surface-container border border-outline-variant p-8 flex flex-col justify-between group hover:border-primary transition-colors duration-300 reveal-scale dark:bg-surface-container-high"
          >
            <div className="flex justify-between items-start">
              <span className="bg-primary text-on-primary text-label-mono px-3 py-1 text-xs w-fit">
                Product Design
              </span>
              <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">
                arrow_outward
              </span>
            </div>
            <div>
              <h3 className="font-display text-lg font-bold mb-2 text-on-surface">
                MotoHaul — Motorized Self-Unloading Wheelbarrow
              </h3>
              <p className="text-body-md text-on-surface-variant text-sm">
                Motorized, self-unloading wheelbarrow designed to cut manual
                handling strain for construction and dump-cleaning workers. Led
                team coordination and validated mechanical durability via ANSYS,
                with a modeled 74% ROI.
              </p>
            </div>
          </Link>

          <Link
            href="/projects/reckitt-5s"
            className="bg-surface-container border border-outline-variant p-8 flex flex-col justify-between group hover:border-primary transition-colors duration-300 reveal-scale dark:bg-surface-container-high"
          >
            <div className="flex justify-between items-start">
              <span className="bg-primary text-on-primary text-label-mono px-3 py-1 text-xs w-fit">
                Industrial
              </span>
              <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">
                arrow_outward
              </span>
            </div>
            <div>
              <h3 className="font-display text-lg font-bold mb-2 text-on-surface">
                5S Workplace Implementation at Reckitt Benckiser (Bangladesh) PLC
              </h3>
              <p className="text-body-md text-on-surface-variant text-sm">
                Led 5S implementation across the Dettol Packaging Area and
                Harpic Marine Line during an industrial attachment, achieving a
                16.25% storage capacity increase.
              </p>
            </div>
          </Link>
        </div>

        <div className="text-center mt-12 reveal-up">
          <Button href="/projects" variant="secondary" icon="arrow_forward">
            View All Projects
          </Button>
        </div>
      </section>

      {/* ===== ACHIEVEMENTS SECTION ===== */}
      <section
        id="achievements"
        className="pb-24 md:pb-section-gap px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto"
      >
        <SectionHeading icon="emoji_events" title="Achievements" />
        <div className="grid grid-cols-1 gap-6">
          <Link
            href="/projects/mastermind"
            className="bg-surface-container border border-outline-variant p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:border-primary transition-colors duration-300 reveal-scale dark:bg-surface-container-high"
          >
            <div className="flex items-start gap-5">
              <span className="material-symbols-outlined text-4xl text-primary shrink-0">
                emoji_events
              </span>
              <div>
                <span className="bg-surface-variant text-label-mono px-3 py-1 text-xs w-fit dark:bg-surface-container-highest">
                  1st Runner-Up
                </span>
                <h3 className="font-display text-lg font-bold mt-3 mb-2 text-on-surface">
                  Mastermind 2.0 — National Business Case Competition
                </h3>
                <p className="text-body-md text-on-surface-variant text-sm">
                  1st Runner-Up out of 456 teams nationwide, advancing through
                  to the top 10 finalist round.
                </p>
              </div>
            </div>
            <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors shrink-0">
              arrow_outward
            </span>
          </Link>
          <Link
            href="/projects/prodluxe"
            className="bg-surface-container border border-outline-variant p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:border-primary transition-colors duration-300 reveal-scale dark:bg-surface-container-high"
          >
            <div className="flex items-start gap-5">
              <span className="material-symbols-outlined text-4xl text-primary shrink-0">
                emoji_events
              </span>
              <div>
                <span className="bg-surface-variant text-label-mono px-3 py-1 text-xs w-fit dark:bg-surface-container-highest">
                  Cofounder · Pre-Seed Funded
                </span>
                <h3 className="font-display text-lg font-bold mt-3 mb-2 text-on-surface">
                  ProdLuxe — Herbal Detox Powder Startup
                </h3>
                <p className="text-body-md text-on-surface-variant text-sm">
                  Cofounded a herbal detox powder startup, selected for a
                  national entrepreneurship accelerator cohort and awarded a
                  pre-seed grant.
                </p>
              </div>
            </div>
            <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors shrink-0">
              arrow_outward
            </span>
          </Link>
          <Link
            href="/projects/econovision"
            className="bg-surface-container border border-outline-variant p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:border-primary transition-colors duration-300 reveal-scale dark:bg-surface-container-high"
          >
            <div className="flex items-start gap-5">
              <span className="material-symbols-outlined text-4xl text-primary shrink-0">
                emoji_events
              </span>
              <div>
                <span className="bg-surface-variant text-label-mono px-3 py-1 text-xs w-fit dark:bg-surface-container-highest">
                  Finalist · Top 8
                </span>
                <h3 className="font-display text-lg font-bold mt-3 mb-2 text-on-surface">
                  EconoVision — National Policy-Making Competition
                </h3>
                <p className="text-body-md text-on-surface-variant text-sm">
                  Advanced to the finals of a national-level policy-making
                  competition, placing among the top 8 teams nationwide.
                </p>
              </div>
            </div>
            <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors shrink-0">
              arrow_outward
            </span>
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/projects/securemed"
              className="bg-surface-container border border-outline-variant p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:border-primary transition-colors duration-300 reveal-scale dark:bg-surface-container-high"
            >
              <div className="flex items-start gap-5">
                <span className="material-symbols-outlined text-4xl text-primary shrink-0">
                  emoji_events
                </span>
                <div>
                  <span className="bg-surface-variant text-label-mono px-3 py-1 text-xs w-fit dark:bg-surface-container-highest">
                    Finalist · Top 10
                  </span>
                  <h3 className="font-display text-lg font-bold mt-3 mb-2 text-on-surface">
                    SecureMed — Future Bangladesh Challenge 2025
                  </h3>
                  <p className="text-body-md text-on-surface-variant text-sm">
                    Reached finalist status in the Top 10 out of 700+ teams in a
                    national policy-making challenge with an AI, blockchain, and
                    IoT-based drug authentication system to combat counterfeit
                    medicines.
                  </p>
                </div>
              </div>
              <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors shrink-0">
                arrow_outward
              </span>
            </Link>
            <Link
              href="/projects/securemed-visionx"
              className="bg-surface-container border border-outline-variant p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:border-primary transition-colors duration-300 reveal-scale dark:bg-surface-container-high"
            >
              <div className="flex items-start gap-5">
                <span className="material-symbols-outlined text-4xl text-primary shrink-0">
                  emoji_events
                </span>
                <div>
                  <span className="bg-surface-variant text-label-mono px-3 py-1 text-xs w-fit dark:bg-surface-container-highest">
                    Finalist · Top 17
                  </span>
                  <h3 className="font-display text-lg font-bold mt-3 mb-2 text-on-surface">
                    SecureMed — VisionX 2025
                  </h3>
                  <p className="text-body-md text-on-surface-variant text-sm">
                    Reached finalist status among 17 teams in a national AI
                    innovation challenge with an AI, blockchain, and IoT-based
                    drug authentication platform.
                  </p>
                </div>
              </div>
              <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors shrink-0">
                arrow_outward
              </span>
            </Link>
          </div>
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
            and let&apos;s connect.
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
              href="https://www.linkedin.com/in/nabilfuad19"
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
