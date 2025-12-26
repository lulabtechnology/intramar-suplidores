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
    title: "Abanicos solares",
    desc: "Soluciones de ventilación con enfoque en uso eficiente de energía.",
    img: site.images.solarFan1
  },
  {
    title: "Kits solares",
    desc: "Conjuntos de soluciones solares según el requerimiento del proyecto.",
    img: site.images.solarKit1
  }
];

export default function FeaturedSolar() {
  const wa = buildWhatsAppLink(site.phones[0], "Hola, quiero cotizar lámparas/linternas solares y abanicos. ¿Me apoyan?");
  return (
    <section className="border-t border-white/10 bg-neutral-950">
      <Container className="py-16">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <FadeIn>
            <SectionHeading
              eyebrow="DESTACADO"
              title="Solar Lighting & Cooling"
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
              <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:bg-white/10">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={c.img}
                    alt={c.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
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

        <FadeIn delay={0.12}>
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-neutral-300">
            <span className="text-white/80 font-medium">Nota:</span>{" "}
            Para precios, cantidades y opciones, contáctanos por WhatsApp o email.
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
