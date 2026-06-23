import type { Metadata } from "next";
import { Montserrat, Inter, Geist } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
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
      className={`${montserrat.variable} ${inter.variable} ${geist.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:wdth,wght@75..125,100..700&display=swap"
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
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
