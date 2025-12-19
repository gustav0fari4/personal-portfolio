import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gustavo Faria | Portfolio",
  description:
    "Computing Science student in Dublin building full-stack and optimisation projects. Stamp 4 eligible for full-time work in Ireland.",
  metadataBase: new URL("https://personal-portfolio-sigma-black.vercel.app"),
  openGraph: {
    title: "Gustavo Faria | Portfolio",
    description:
      "Full-stack and optimisation projects (Next.js/Node, SQL/MySQL, Python).",
    url: "https://personal-portfolio-sigma-black.vercel.app",
    siteName: "Gustavo Faria",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gustavo Faria | Portfolio",
    description: "Full-stack and optimisation projects (Next.js/Node, SQL/MySQL, Python).",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}