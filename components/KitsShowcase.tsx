import Image from "next/image";
import Container from "@/components/Container";
import FadeIn from "@/components/motion/FadeIn";
import { catalog } from "@/data/catalog";

export default function KitsSection() {
  const kits = catalog.find((c) => c.slug === "kits");

  if (!kits) return null;

  return (
    <section className="border-t border-slate-200/70 bg-transparent">
      <Container className="py-16">
        <FadeIn>
          <p className="text-xs font-bold tracking-[0.22em] text-slate-500">
            KITS
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Kits según las necesidades de nuestros clientes
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-700">
            Listado organizado para consulta rápida. Para cotización, contáctanos.
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {kits.items.map((k) => (
            <FadeIn key={k}>
              <div className="surface surface-hover p-6">
                <p className="text-base font-extrabold tracking-tight text-slate-900">
                  {k}
                </p>
                <p className="mt-2 text-sm text-slate-700">
                  Solicita disponibilidad y opciones por WhatsApp o email.
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* IMAGEN ÚNICA DE KITS */}
        <FadeIn delay={0.1}>
          <div className="mt-10 surface overflow-hidden">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/images/kits/kits-01.jpg"
                alt="Kits"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/35 to-transparent" />
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
