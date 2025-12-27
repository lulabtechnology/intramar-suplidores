import Container from "@/components/Container";
import FadeIn from "@/components/motion/FadeIn";
import ButtonLink from "@/components/ui/ButtonLink";
import { site } from "@/data/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function CTASection() {
  const wa = buildWhatsAppLink(site.whatsappPhone, "Hola, necesito una cotización. ¿Me pueden ayudar?");
  return (
    <section className="border-t border-white/10 bg-neutral-950">
      <Container className="py-16">
        <FadeIn>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-8 md:p-10">
            <h3 className="text-2xl font-semibold tracking-tight text-white">
              ¿Necesitas una cotización rápida?
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-300">
              Escríbenos por WhatsApp o envíanos un email con la categoría y el listado de productos que necesitas.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={wa} variant="primary">WhatsApp</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">Contacto</ButtonLink>
            </div>

            <p className="mt-5 text-xs text-white/50">
              WhatsApp: {site.whatsappPhone} · Email: {site.emails[1]}
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
