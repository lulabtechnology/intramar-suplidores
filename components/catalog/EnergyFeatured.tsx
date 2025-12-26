import Image from "next/image";
import FadeIn from "@/components/motion/FadeIn";
import ButtonLink from "@/components/ui/ButtonLink";
import { site } from "@/data/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const featured = [
  {
    title: "Lámparas y linternas solares",
    desc: "Opciones de iluminación solar para distintos entornos.",
    img: site.images.solarLamp3
  },
  {
    title: "Abanicos solares",
    desc: "Soluciones de ventilación con uso eficiente de energía.",
    img: site.images.solarFan2
  }
];

export default function EnergyFeatured() {
  const wa = buildWhatsAppLink(
    site.phones[0],
    "Hola, quiero cotizar lámparas/linternas solares y abanicos. ¿Me ayudan?"
  );

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-medium tracking-[0.2em] text-white/60">
            DESTACADO EN ENERGÍA
          </p>
          <p className="mt-3 text-lg font-semibold tracking-tight text-white">
            Solar Lighting & Cooling
          </p>
          <p className="mt-2 text-sm text-neutral-300">
            Sección destacada para lámparas/linternas solares y abanicos.
          </p>
        </div>
        <ButtonLink href={wa} variant="secondary">
          Cotizar
        </ButtonLink>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {featured.map((c, idx) => (
          <FadeIn key={c.title} delay={idx * 0.03}>
            <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10">
              <div className="relative aspect-[4/3]">
                <Image src={c.img} alt={c.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 to-transparent" />
              </div>
              <div className="p-5">
                <p className="text-sm font-semibold text-white">{c.title}</p>
                <p className="mt-2 text-sm text-neutral-300">{c.desc}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
