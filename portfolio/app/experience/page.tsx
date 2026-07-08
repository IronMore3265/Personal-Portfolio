import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "Experience — Nabil Fuad Raiyan",
  description:
    "Professional and leadership experience of Nabil Fuad Raiyan, including industrial training at Reckitt Benckiser and student organization leadership at BUET.",
};

export default function ExperiencePage() {
  return <HomeContent scrollTo="experience" />;
}
