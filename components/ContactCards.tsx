import Container from "@/components/Container";
import FadeIn from "@/components/motion/FadeIn";
import ButtonLink from "@/components/ui/ButtonLink";
import { site } from "@/data/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function ContactCards() {
  const wa1 = buildWhatsAppLink(site.phones[0], "Hola, necesito una cotización. ¿Me pueden ayudar?");
  const wa2 = buildWhatsAppLink(site.phones[1], "Hola, necesito una cotización. ¿Me pueden ayudar?");
  return (
    <Container className="py-12">
      <div className="grid gap-4 lg:grid-cols-3">
        <FadeIn>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold text-white">WhatsApp</p>
            <p className="mt-2 text-sm text-neutral-300">
              Principal: {site.phones[0]} <br />
              Alterno: {site.phones[1]}
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <ButtonLink href={wa1} variant="primary">WhatsApp principal</ButtonLink>
              <ButtonLink href={wa2} variant="secondary">WhatsApp alterno</ButtonLink>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.03}>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold text-white">Email</p>
            <div className="mt-3 space-y-2 text-sm text-neutral-300">
              {site.emails.map((e) => (
                <a key={e} className="block hover:text-white" href={`mailto:${e}`}>
                  {e}
                </a>
              ))}
            </div>
            <p className="mt-4 text-xs text-white/50">
              Recomendación: envía categoría + listado de productos.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.06}>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold text-white">Oficina</p>
            <p className="mt-2 text-sm text-neutral-300">{site.address}</p>
            <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-semibold text-white">Contacto</p>
              <p className="mt-2 text-sm text-neutral-300">
                {site.contact.name} — {site.contact.role} <br />
                {site.contact.phone}
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </Container>
  );
}
