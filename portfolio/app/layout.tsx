import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Montserrat, Geist } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geist = Geist({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Nabil Fuad Raiyan — Portfolio",
  description:
    "IPE Graduate from BUET. Blending Lean manufacturing and data-driven problem solving. Process optimizer, data analyst, and organizational leader.",
  keywords: [
    "Nabil Fuad Raiyan",
    "Portfolio",
    "Industrial Engineering",
    "BUET",
    "Data Analysis",
    "Lean Manufacturing",
  ],
  authors: [{ name: "Nabil Fuad Raiyan" }],
  icons: {
    icon: "/images/N. tr.svg",
  },
  openGraph: {
    title: "Nabil Fuad Raiyan — Portfolio",
    description:
      "IPE Graduate from BUET. Process optimizer, data analyst, and organizational leader focused on sustainable engineering solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${geist.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/* Discovery links for automated / AI agents (D3) */}
        <link rel="describedby" href="/llms.txt" type="text/plain" />
        <link rel="api-catalog" href="/.well-known/api-catalog" />
        {/* Structured data for search engines and AI agents (C3) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Nabil Fuad Raiyan",
              url: "https://nabil-pp.vercel.app",
              email: "mailto:nfraiyan122002@gmail.com",
              jobTitle: "Industrial & Production Engineer / Data Analyst",
              description:
                "IPE Graduate from BUET. Blending Lean manufacturing and data-driven problem solving. Process optimizer, data analyst, and organizational leader.",
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Bangladesh University of Engineering and Technology (BUET)",
              },
              knowsAbout: [
                "Industrial Engineering",
                "Lean Manufacturing",
                "Data Analysis",
                "Process Optimization",
                "Excel",
                "SQL",
                "Power BI",
                "Python",
              ],
            }),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,wght@6..144,1..1000&display=swap"
          rel="stylesheet"
        />
        {/* Prevent FOUC on dark mode */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-on-surface antialiased overflow-x-hidden">
        <ScrollToTop />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
