import Image from "next/image";
import Container from "@/components/Container";
import FadeIn from "@/components/motion/FadeIn";
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
    desc: "Opciones portátiles para uso práctico.",
    img: site.images.solarLamp2
  },
  {
    title: "Abanicos",
    desc: "Opciones de ventilación para diferentes escenarios de uso.",
    img: site.images.solarFan1
  },
  {
    title: "Kits solares",
    desc: "Soluciones solares según el requerimiento.",
    img: site.images.solarKit1
  }
];

export default function FeaturedSolar() {
  const wa = buildWhatsAppLink(
    site.whatsappPhone,
    "Hola, quiero cotizar lámparas/linternas solares y abanicos. ¿Me apoyan?"
  );

  return (
    <section className="border-t border-slate-200/70 bg-transparent">
      <Container className="py-16">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <FadeIn>
            <p className="text-xs font-bold tracking-[0.22em] text-slate-500">DESTACADO</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              <span className="grad-text">Energía solar y renovable</span>
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-700">
              Sección destacada para lámparas y linternas solares, y abanicos. Contáctanos para cotizar.
            </p>
          </FadeIn>

          <FadeIn delay={0.05}>
            <ButtonLink href={wa} variant="primary">Cotizar</ButtonLink>
          </FadeIn>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {solarCards.map((c, idx) => (
            <FadeIn key={c.title} delay={idx * 0.03}>
              <div className="surface surface-hover overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={c.img}
                    alt={c.title}
                    fill
                    className="object-cover transition duration-500 hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/55 to-transparent" />
                </div>
                <div className="p-5">
                  <p className="text-sm font-extrabold text-slate-900">{c.title}</p>
                  <p className="mt-2 text-sm text-slate-700">{c.desc}</p>
                  <div className="mt-4 hairline" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
