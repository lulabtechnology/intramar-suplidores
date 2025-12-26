import Image from "next/image";
import Container from "@/components/Container";
import FadeIn from "@/components/motion/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/data/site";

const bullets = [
  "Espacios para recepción y resguardo de mercancía según necesidad.",
  "Preparación y organización de pedidos para coordinación de despacho.",
  "Soporte logístico para proyectos y entregas (sin cifras ni promesas específicas)."
];

export default function WarehouseSection() {
  return (
    <section className="border-t border-white/10 bg-neutral-950">
      <Container className="py-16">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <FadeIn>
              <SectionHeading
                eyebrow="OPERACIÓN"
                title="Warehousing & Logistics"
                description="Sección visual basada en tus fotos de bodega. Texto genérico (sin inventar números)."
              />
            </FadeIn>

            <div className="mt-6 space-y-3">
              {bullets.map((b, i) => (
                <FadeIn key={b} delay={i * 0.03}>
                  <div className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <span className="mt-1 h-2 w-2 rounded-full bg-white/70" />
                    <p className="text-sm text-neutral-300">{b}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <FadeIn>
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={site.images.warehouse1}
                    alt="Warehouse"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-neutral-950/60 via-transparent to-neutral-950/30" />
                </div>
                <div className="p-5">
                  <p className="text-sm font-semibold text-white">
                    Infraestructura y soporte operativo
                  </p>
                  <p className="mt-2 text-sm text-neutral-300">
                    Coordinación basada en requerimientos del cliente (cotización por WhatsApp/email).
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
