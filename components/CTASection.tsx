import Container from "@/components/Container";
import FadeIn from "@/components/motion/FadeIn";
import ButtonLink from "@/components/ui/ButtonLink";
import { site } from "@/data/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function CTASection() {
  const wa = buildWhatsAppLink(site.whatsappPhone, "Hola, necesito una cotización. ¿Me pueden ayudar?");

  return (
    <section className="border-t border-white/10 bg-transparent">
      <Container className="py-16">
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur md:p-10">
            <div className="pointer-events-none absolute inset-0 opacity-70">
              <div className="absolute -left-28 -top-28 h-72 w-72 rounded-full bg-sky-400/25 blur-3xl" />
              <div className="absolute -right-28 top-10 h-72 w-72 rounded-full bg-emerald-400/18 blur-3xl" />
              <div className="absolute left-1/3 bottom-[-140px] h-80 w-80 rounded-full bg-cyan-300/16 blur-3xl" />
            </div>

            <div className="relative">
              <p className="text-xs font-medium tracking-[0.2em] text-white/70">
                COTIZACIONES
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                ¿Necesitas una cotización rápida?
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-200">
                Escríbenos por WhatsApp o envíanos un email con la categoría y el listado de productos que necesitas.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={wa} variant="primary">WhatsApp</ButtonLink>
                <ButtonLink href="/contact" variant="secondary">Contacto</ButtonLink>
              </div>

              <p className="mt-5 text-xs text-white/60">
                WhatsApp: {site.whatsappPhone} · Email: {site.emails[1]}
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
