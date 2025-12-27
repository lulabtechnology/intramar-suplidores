import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import BrandBackgroundLight from "@/components/BrandBackgroundLight";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "INTRAMAR SUPLIDORES S.A",
    template: "%s | INTRAMAR SUPLIDORES S.A"
  },
  description:
    "Sitio institucional y catálogo de productos por categorías para cotizaciones por WhatsApp o email.",
  openGraph: {
    title: "INTRAMAR SUPLIDORES S.A",
    description: "Catálogo por categorías para cotizaciones por WhatsApp o email.",
    type: "website"
  },
  icons: { icon: "/icon.svg" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen text-slate-900 antialiased">
        <BrandBackgroundLight />

        <a href="#content" className="skip-link">Saltar al contenido</a>

        <Navbar />

        <main id="content" className="min-h-[70vh] outline-none">
          {children}
        </main>

        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
