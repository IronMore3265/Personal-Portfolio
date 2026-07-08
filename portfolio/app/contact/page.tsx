import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "Contact — Nabil Fuad Raiyan",
  description:
    "Get in touch with Nabil Fuad Raiyan by email or LinkedIn for business analytics, supply chain, and process optimization opportunities.",
};

export default function ContactPage() {
  return <HomeContent scrollTo="contact" />;
}
