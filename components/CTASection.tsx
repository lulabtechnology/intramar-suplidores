import Container from "@/components/Container";
import FadeIn from "@/components/motion/FadeIn";
import ButtonLink from "@/components/ui/ButtonLink";
import { site } from "@/data/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function CTASection() {
  const wa = buildWhatsAppLink(site.whatsappPhone, "Hola, necesito una cotización. ¿Me pueden ayudar?");

  return (
    <section className="border-t border-slate-200/70 bg-transparent">
      <Container className="py-16">
        <FadeIn>
          <div className="surface overflow-hidden p-8 md:p-10">
            <div className="hairline" />
            <h3 className="mt-6 text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
              ¿Necesitas una cotización rápida?
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-700">
              Escríbenos por WhatsApp o envíanos un email con la categoría y el listado de productos que necesitas.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={wa} variant="primary">WhatsApp</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">Contacto</ButtonLink>
            </div>

            <p className="mt-5 text-xs text-slate-600">
              WhatsApp principal: {site.whatsappPhone} · Tel secundario: {site.phones[1]}
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
