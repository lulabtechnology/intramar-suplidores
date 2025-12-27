"use client";

import Image from "next/image";
import Container from "@/components/Container";
import FadeIn from "@/components/motion/FadeIn";
import { site } from "@/data/site";

export default function PartnerMarquee() {
  const logos = [...site.partners, ...site.partners];

  return (
    <section className="border-t border-slate-200/70 bg-transparent">
      <Container className="py-16">
        <FadeIn>
          <p className="text-xs font-bold tracking-[0.22em] text-slate-500">ORGANIZATIONS</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Organizations & Partners
          </h2>
          <p className="mt-3 text-sm text-slate-700">
            Logos mostrados como referencia visual (sin afirmaciones adicionales).
          </p>
        </FadeIn>

        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200/70 bg-white/70 backdrop-blur">
          <div className="hairline" />
          <div className="marquee flex items-center gap-10 py-6 hover:[animation-play-state:paused]">
            {logos.map((p, idx) => (
              <div
                key={`${p.name}-${idx}`}
                className="relative h-10 w-[140px] shrink-0 opacity-90 grayscale transition hover:opacity-100 hover:grayscale-0"
              >
                <Image src={p.src} alt={p.name} fill className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
