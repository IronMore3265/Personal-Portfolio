import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "Achievements — Nabil Fuad Raiyan",
  description:
    "Competition results, startup, and recognitions of Nabil Fuad Raiyan across national business case, policy-making, and innovation challenges.",
};

export default function AchievementsPage() {
  return <HomeContent scrollTo="achievements" />;
}
