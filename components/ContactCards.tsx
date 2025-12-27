import Container from "@/components/Container";
import FadeIn from "@/components/motion/FadeIn";
import ButtonLink from "@/components/ui/ButtonLink";
import { site } from "@/data/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function ContactCards() {
  const wa = buildWhatsAppLink(
    site.whatsappPhone,
    "Hola, necesito una cotización. ¿Me pueden ayudar?"
  );

  return (
    <Container className="py-12">
      <div className="grid gap-6 lg:grid-cols-2">
        <FadeIn>
          <div className="surface p-8">
            <p className="text-xs font-bold tracking-[0.22em] text-slate-500">
              CONTACTO (WHATSAPP)
            </p>

            <div className="mt-3 space-y-2 text-sm text-slate-800">
              <p className="font-semibold">{site.whatsappPhone}</p>
              <p className="font-semibold">{site.phones[1]}</p>
            </div>

            <div className="mt-6">
              <ButtonLink href={wa} variant="primary" className="w-full">
                Escribir por WhatsApp
              </ButtonLink>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="surface p-8">
            <p className="text-xs font-bold tracking-[0.22em] text-slate-500">
              EMAIL
            </p>

            <div className="mt-3 space-y-2 text-sm text-slate-800">
              {site.emails.map((e) => (
                <a
                  key={e}
                  href={`mailto:${e}`}
                  className="block font-semibold hover:underline"
                >
                  {e}
                </a>
              ))}
            </div>

            <p className="mt-5 text-xs text-slate-500">
              Recomendación: envía categoría + listado de productos.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="surface p-8 lg:col-span-2">
            <p className="text-xs font-bold tracking-[0.22em] text-slate-500">
              UBICACIÓN
            </p>
            <p className="mt-3 text-sm font-semibold text-slate-800">
              {site.address}
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {site.contacts.map((c) => (
                <div
                  key={c.name}
                  className="rounded-2xl border border-slate-200 bg-white/70 p-4"
                >
                  <p className="text-sm font-extrabold tracking-tight text-slate-900">
                    {c.name.toUpperCase()}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-700">
                    {c.phone}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </Container>
  );
}
