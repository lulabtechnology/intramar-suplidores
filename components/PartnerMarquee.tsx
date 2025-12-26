"use client";

import Image from "next/image";
import Container from "@/components/Container";
import FadeIn from "@/components/motion/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/data/site";

export default function PartnerMarquee() {
  const logos = [...site.partners, ...site.partners];

  return (
    <section className="border-t border-white/10 bg-neutral-950">
      <Container className="py-16">
        <FadeIn>
          <SectionHeading
            eyebrow="ORGANIZATIONS"
            title="Organizations & Partners"
            description="Logos mostrados como referencia visual (sin afirmaciones adicionales)."
          />
        </FadeIn>

        <div
          className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5"
          aria-label="Logos de organizaciones y partners"
        >
          <div className="marquee flex items-center gap-10 py-6 [animation-play-state:running] hover:[animation-play-state:paused]">
            {logos.map((p, idx) => (
              <div
                key={`${p.name}-${idx}`}
                className="relative h-10 w-[140px] shrink-0 opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0"
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
