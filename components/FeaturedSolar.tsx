"use client";

import Image from "next/image";
import Container from "@/components/Container";
import FadeIn from "@/components/motion/FadeIn";
import ButtonLink from "@/components/ui/ButtonLink";
import { site } from "@/data/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { motion } from "framer-motion";

type Item = {
  title: string;
  desc: string;
  img: string;
};

export default function FeaturedSolar() {
  const wa = buildWhatsAppLink(
    site.whatsappPhone,
    "Hola, necesito una cotización. ¿Me pueden ayudar?"
  );

  // ✅ 3 CARDS EXACTAS
  // ✅ La tercera combina "Insumos marinos + Equipamiento de buceo"
  // ✅ Usa imagen /images/products/solar-fan-01.jpg (sin rutas nuevas)
  const items: Item[] = [
    {
      title: "Lámparas solares",
      desc: "Iluminación solar para distintos entornos y necesidades.",
      img: site.images.solarLamp1,
    },
    {
      title: "Deshidratadores solares",
      desc: "Soluciones solares para apoyar procesos de secado.",
      img: site.images.solarLamp2,
    },
    {
      title: "Insumos marinos y equipamiento de buceo",
      desc: "Suministros para operaciones marinas y accesorios de buceo según necesidad.",
      img: site.images.solarFan1, // => /images/products/solar-fan-01.jpg
    },
  ];

  return (
    <section className="border-t border-slate-200/70 bg-transparent">
      <Container className="py-16">
        <FadeIn>
          <p className="text-xs font-bold tracking-[0.22em] text-slate-500">
            DESTACADO
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            <span className="grad-text">Productos más destacados</span>
          </h2>

          <p className="mt-3 max-w-2xl text-sm text-slate-700">
            Selección de productos destacados para tu operación. Contáctanos para cotizar.
          </p>
        </FadeIn>

        {/* ✅ Grid ajustado para 3 cards */}
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <FadeIn key={it.title}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="surface surface-hover overflow-hidden"
              >
                <div className="relative h-52 w-full bg-white">
                  <Image
                    src={it.img}
                    alt={it.title}
                    fill
                    className="object-contain p-6"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>

                <div className="p-6">
                  <p className="text-base font-extrabold tracking-tight text-slate-900">
                    {it.title}
                  </p>
                  <p className="mt-2 text-sm text-slate-700">{it.desc}</p>

                  <div className="mt-4 h-px w-full bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400" />

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <ButtonLink href="/products" variant="secondary" className="w-full">
                      Ver categorías
                    </ButtonLink>
                    <ButtonLink href={wa} variant="primary" className="w-full">
                      Cotizar
                    </ButtonLink>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
