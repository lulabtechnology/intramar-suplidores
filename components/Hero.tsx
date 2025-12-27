import Image from "next/image";
import Container from "@/components/Container";
import FadeIn from "@/components/motion/FadeIn";
import ButtonLink from "@/components/ui/ButtonLink";
import { site } from "@/data/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function Hero() {
  const wa = buildWhatsAppLink(site.whatsappPhone, "Hola, necesito una cotización. ¿Me pueden ayudar?");

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={site.images.warehouse2}
          alt="Warehouse"
          fill
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/70 to-neutral-950" />
      </div>

      <Container className="relative py-16 md:py-24">
        <FadeIn>
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
            {site.company} — Panamá
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
            {site.home.hero.headline}
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-200 md:text-lg">
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
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-medium text-white">WhatsApp</p>
              <p className="mt-1 text-sm text-neutral-300">{site.phones[0]}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-medium text-white">Email</p>
              <p className="mt-1 text-sm text-neutral-300">{site.emails[1]}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-medium text-white">Ubicación</p>
              <p className="mt-1 text-sm text-neutral-300">{site.address}</p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
