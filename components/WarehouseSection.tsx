import Image from "next/image";
import Container from "@/components/Container";
import FadeIn from "@/components/motion/FadeIn";
import { site } from "@/data/site";

export default function WarehousingSection() {
  return (
    <section className="border-t border-slate-200/70 bg-transparent">
      <Container className="py-16">
        <FadeIn>
          <p className="text-xs font-bold tracking-[0.22em] text-slate-500">OPERACIÓN</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Warehousing & Logistics
          </h2>
          <p className="mt-3 text-sm text-slate-700">
            Sección visual basada en tus fotos de bodega. Texto genérico (sin inventar números).
          </p>
        </FadeIn>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <FadeIn>
            <div className="surface p-6">
              <ul className="space-y-3 text-sm text-slate-700">
                <li>• Espacios para recepción y resguardo de mercancía según necesidad.</li>
                <li>• Preparación y organización de pedidos para coordinación de despacho.</li>
                <li>• Soporte logístico para proyectos y entregas (sin cifras ni promesas específicas).</li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="surface overflow-hidden">
              <div className="relative aspect-[16/10]">
                <Image
                  src={site.images.warehouse1}
                  alt="Warehouse"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/55 to-transparent" />
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
