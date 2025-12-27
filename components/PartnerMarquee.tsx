"use client";

import Image from "next/image";
import Container from "@/components/Container";
import FadeIn from "@/components/motion/FadeIn";
import { motion } from "framer-motion";

const partners = [
  { src: "/images/partners/pnud.png", alt: "PNUD" },
  { src: "/images/partners/fao.png", alt: "FAO" },
  { src: "/images/partners/unops.png", alt: "UNOPS" },
  { src: "/images/partners/oim.png", alt: "OIM" },
  { src: "/images/partners/wfp.png", alt: "WFP" },
  { src: "/images/partners/unicef.png", alt: "UNICEF" },
  { src: "/images/partners/unhcr.png", alt: "UNHCR" },
  { src: "/images/partners/aecid.png", alt: "AECID" },
];

export default function PartnerMarquee() {
  // duplicamos para loop suave
  const row = [...partners, ...partners];

  return (
    <section className="border-t border-slate-200/70 bg-transparent">
      <Container className="py-14">
        <FadeIn>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Organizations & Partners
          </h2>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="mt-8 surface overflow-hidden px-4 py-6">
            {/* máscara suave para que se vea PRO */}
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />

              <motion.div
                className="flex items-center gap-10"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 24, ease: "linear", repeat: Infinity }}
                style={{ width: "max-content" }}
              >
                {row.map((p, i) => (
                  <div
                    key={`${p.src}-${i}`}
                    className="flex h-16 w-40 items-center justify-center rounded-xl border border-slate-200 bg-white/70"
                  >
                    {/* IMPORTANTE: SIN grayscale, SIN opacity rara */}
                    <Image
                      src={p.src}
                      alt={p.alt}
                      width={160}
                      height={64}
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
