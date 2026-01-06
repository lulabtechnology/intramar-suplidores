import Image from "next/image";
import Container from "@/components/Container";
import FadeIn from "@/components/motion/FadeIn";
import ButtonLink from "@/components/ui/ButtonLink";
import { site } from "@/data/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function Hero() {
  const wa = buildWhatsAppLink(
    site.whatsappPhone,
    "Hola, necesito una cotización. ¿Me pueden ayudar?"
  );

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero.jpg"
          alt="Hero"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 backdrop-blur-[4px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/88 via-white/72 to-white/92" />
        <div className="absolute -left-40 top-10 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
        <div className="absolute right-[-80px] top-28 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl" />
      </div>

      <Container className="relative py-16 md:py-24">
        <FadeIn>
          <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs text-slate-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500" />
            <span className="font-semibold text-slate-900">{site.company}</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
            <span className="grad-text">Suministros confiables</span>
            <br />
            <span className="grad-text">cuando más se necesitan</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          {/* ✅ SUBTÍTULO NUEVO EXACTO COMO PEDISTE */}
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-800 md:text-lg">
            Catálogo por categorías: textiles, insumos marinos y equipamiento de buceo, kits, agua,
            energía solar y renovable, productos agrícolas. Cotiza por WhatsApp o email.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={wa} variant="primary">
              Cotizar por WhatsApp
            </ButtonLink>
            <ButtonLink href="#categories" variant="secondary">
              Ver categorías
            </ButtonLink>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            <div className="surface surface-hover p-5">
              <p className="text-sm font-bold text-slate-900">Contacto (WhatsApp)</p>
              <p className="mt-2 text-sm font-semibold text-slate-700">{site.whatsappPhone}</p>
              <p className="mt-1 text-sm font-semibold text-slate-700">{site.phones[1]}</p>
            </div>

            <div className="surface surface-hover p-5">
              <p className="text-sm font-bold text-slate-900">Email</p>
              <p className="mt-2 text-sm font-semibold text-slate-700">{site.emails[0]}</p>
            </div>

            <div className="surface surface-hover p-5">
              <p className="text-sm font-bold text-slate-900">Ubicación</p>
              <p className="mt-2 text-sm text-slate-700">{site.address}</p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
