import type { MetadataRoute } from "next";

// Required for metadata routes under `output: export` (Next 16).
export const dynamic = "force-static";

const BASE_URL = "https://nabil-pp.vercel.app";

// Project detail slugs under /projects/*. Keep in sync with app/projects/*.
const projectSlugs = [
  "cnc-turning",
  "motohaul",
  "reckitt-5s",
  "students-mental-health",
  "customer-churn-excel",
  "mastermind",
  "prodluxe",
  "econovision",
  "securemed",
  "securemed-visionx",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${BASE_URL}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...projectSlugs.map((slug) => ({
      url: `${BASE_URL}/projects/${slug}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
