import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Preloader from "@/components/Preloader";
import { SpeedInsights } from "@vercel/speed-insights/next";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brand Easy Art – Luxurious Wall Decor & Art Gallery",
  description: "Experience the fusion of art and luxury. Handcrafted metal, wood, and canvas masterpieces for premium interiors. Curated wall art gallery.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body className="min-h-screen flex flex-col font-sans">
        <Preloader />
        <Navbar />
        <main className="flex-1 pt-12 md:pt-16">{children}</main>
        <Footer />
        <FloatingActions />
        <SpeedInsights />
      </body>
    </html>
  );
}
