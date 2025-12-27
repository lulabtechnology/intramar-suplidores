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
          src={site.images.warehouse2}
          alt="Warehouse"
          fill
          className="object-cover opacity-25"
          priority
        />
        {/* Light overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/55 to-white/90" />
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
            <span className="grad-text">{site.home.hero.headline}</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700 md:text-lg">
            {site.home.hero.subheadline}
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={wa} variant="primary">
              {site.home.hero.primaryCta}
            </ButtonLink>
            <ButtonLink href="#categories" variant="secondary">
              {site.home.hero.secondaryCta}
            </ButtonLink>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            <div className="surface surface-hover p-5">
              <p className="text-sm font-bold text-slate-900">WhatsApp</p>
              <p className="mt-1 text-sm text-slate-700">{site.whatsappPhone}</p>
              <p className="mt-2 text-xs text-slate-500">Principal</p>
            </div>
            <div className="surface surface-hover p-5">
              <p className="text-sm font-bold text-slate-900">Email</p>
              <p className="mt-1 text-sm text-slate-700">{site.emails[1]}</p>
            </div>
            <div className="surface surface-hover p-5">
              <p className="text-sm font-bold text-slate-900">Ubicación</p>
              <p className="mt-1 text-sm text-slate-700">{site.address}</p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
