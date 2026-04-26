import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Emilia Krüger — Grafikdesign & Branding",
  description:
    "Freelance Grafikdesignerin für Brand Identity, Social Media Design, Packaging und kreative Konzepte. Lass uns dein Projekt zum Leben erwecken.",
  keywords: [
    "Grafikdesign",
    "Freelance Designer",
    "Brand Identity",
    "Logo Design",
    "Social Media Design",
    "Kreatives Design",
  ],
  openGraph: {
    title: "Emilia Krüger — Grafikdesign & Branding",
    description:
      "Freelance Grafikdesignerin für einzigartige visuelle Identitäten.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${sourceSerif.variable} h-full`}>
      <body className="min-h-full flex flex-col font-serif antialiased">
        {children}
      </body>
    </html>
  );
}
