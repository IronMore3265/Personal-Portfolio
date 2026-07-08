import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "Projects — Nabil Fuad Raiyan",
  description:
    "Featured engineering, process-optimization, and data-analytics projects by Nabil Fuad Raiyan.",
};

export default function ProjectsPage() {
  return <HomeContent scrollTo="projects" />;
}
