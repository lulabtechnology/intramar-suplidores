import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactCards from "@/components/ContactCards";
import Container from "@/components/Container";
import FadeIn from "@/components/motion/FadeIn";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contacto — INTRAMAR SUPLIDORES S.A",
  description: "WhatsApp, emails y dirección para cotizaciones con INTRAMAR SUPLIDORES S.A (Panamá)."
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contacto"
        description="Cotiza por WhatsApp o email. Te respondemos con base en tu requerimiento."
        imageSrc={site.images.warehouse2}
        crumbs={[
          { label: "Inicio", href: "/" },
          { label: "Contacto", href: "/contact" }
        ]}
      />

      <ContactCards />

      <Container className="pb-14">
        <FadeIn>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
            <h2 className="text-lg font-semibold tracking-tight text-white">
              Sugerencia para cotizar
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-neutral-300">
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                <span>Indica la categoría (ej: Energía, Kits, Agua).</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                <span>Lista los productos (ej: lámparas solares, linternas solares, abanicos).</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                <span>Incluye cantidad y cualquier detalle importante.</span>
              </li>
            </ul>
          </div>
        </FadeIn>
      </Container>
    </>
  );
}
