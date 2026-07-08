import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "About — Nabil Fuad Raiyan",
  description:
    "Education and skills of Nabil Fuad Raiyan — IPE graduate from BUET blending Lean manufacturing with data-driven problem solving.",
};

export default function AboutPage() {
  return <HomeContent scrollTo="about" />;
}
