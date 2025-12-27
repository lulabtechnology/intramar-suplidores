import Image from "next/image";
import Container from "@/components/Container";
import FadeIn from "@/components/motion/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import ButtonLink from "@/components/ui/ButtonLink";
import { site } from "@/data/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const solarCards = [
  {
    title: "Lámparas solares",
    desc: "Iluminación solar para distintos entornos y necesidades.",
    img: site.images.solarLamp1
  },
  {
    title: "Linternas solares",
    desc: "Opciones portátiles para uso práctico en campo o instalaciones.",
    img: site.images.solarLamp2
  },
  {
    title: "Abanicos",
    desc: "Opciones de ventilación para diferentes escenarios de uso.",
    img: site.images.solarFan1
  },
  {
    title: "Kits solares",
    desc: "Conjuntos de soluciones solares según el requerimiento del proyecto.",
    img: site.images.solarKit1
  }
];

export default function FeaturedSolar() {
  const wa = buildWhatsAppLink(
    site.whatsappPhone,
    "Hola, quiero cotizar lámparas/linternas solares y abanicos. ¿Me apoyan?"
  );

  return (
    <section className="border-t border-white/10 bg-transparent">
      <Container className="py-16">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <FadeIn>
            <SectionHeading
              eyebrow="DESTACADO"
              title="Energía solar y renovable"
              description="Sección destacada para lámparas y linternas solares, y abanicos. Contáctanos para cotizar."
            />
          </FadeIn>
          <FadeIn delay={0.05}>
            <ButtonLink href={wa} variant="secondary">
              Cotizar
            </ButtonLink>
          </FadeIn>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {solarCards.map((c, idx) => (
            <FadeIn key={c.title} delay={idx * 0.03}>
              <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition hover:bg-white/10 hover:border-white/20">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={c.img}
                    alt={c.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                </div>

                <div className="p-5">
                  <p className="text-sm font-semibold text-white">{c.title}</p>
                  <p className="mt-2 text-sm text-neutral-200">{c.desc}</p>

                  <div className="mt-4 h-px w-full bg-gradient-to-r from-sky-400/30 via-cyan-300/30 to-emerald-300/30" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.12}>
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-neutral-200 backdrop-blur">
            <span className="text-white/90 font-medium">Nota:</span>{" "}
            Para precios, cantidades y opciones, contáctanos por WhatsApp o email.
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
