import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackgroundAmbient } from "@/components/BackgroundAmbient";

export const metadata: Metadata = {
  title: "Vellora Couture | Premium Fashion Boutique",
  description:
    "Timeless Fashion for a Modern You. A curated boutique of designer wear, ethnic collections and contemporary styles crafted for every occasion.",
  keywords: [
    "Vellora Couture",
    "Luxury Fashion Boutique",
    "Bridal Couture",
    "Ethnic Wear",
    "Designer Lehengas",
    "Contemporary Couture",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0c040b] text-[#f7ebe1] antialiased min-h-screen flex flex-col justify-between selection:bg-[#ddb765]/30 selection:text-white">
        <BackgroundAmbient />
        <Navbar />
        <main className="relative z-10 flex-grow pt-20 sm:pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
