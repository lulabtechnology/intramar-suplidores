import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/Container";
import FadeIn from "@/components/motion/FadeIn";
import QuoteCTA from "@/components/QuoteCTA";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Sobre — INTRAMAR SUPLIDORES S.A",
  description: "Información general y contacto de INTRAMAR SUPLIDORES S.A (Panamá)."
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="Sobre INTRAMAR"
        description="Información general y formas de contacto para cotizaciones."
        imageSrc={site.images.warehouse1}
        crumbs={[
          { label: "Inicio", href: "/" },
          { label: "Sobre", href: "/about" }
        ]}
      />

      <Container className="py-12">
        <div className="grid gap-6 lg:grid-cols-12">
          <FadeIn className="lg:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <h2 className="text-xl font-semibold tracking-tight text-white">
                {site.company}
              </h2>
              <p className="mt-3 text-sm leading-6 text-neutral-300">
                Sitio institucional y catálogo por categorías. Aquí puedes explorar el listado
                de productos y solicitar una cotización por WhatsApp o email.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold text-white">R.U.C.</p>
                  <p className="mt-1 text-sm text-neutral-300">{site.ruc}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold text-white">Ubicación</p>
                  <p className="mt-1 text-sm text-neutral-300">{site.address}</p>
                </div>
              </div>

              <p className="mt-6 text-sm leading-6 text-neutral-300">
                Para precios, cantidades, opciones y disponibilidad, contáctanos indicando la categoría
                y los productos que necesitas.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.05} className="lg:col-span-5">
            <QuoteCTA
              title="Cotiza con tu lista"
              description="Envíanos por WhatsApp o email la categoría y el listado de productos que necesitas."
            />
          </FadeIn>
        </div>
      </Container>
    </>
  );
}
