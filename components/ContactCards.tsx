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
      <div className="grid gap-4 lg:grid-cols-3">
        {/* WhatsApp / Teléfonos */}
        <FadeIn>
          <div className="surface surface-hover p-6">
            <p className="text-sm font-extrabold text-slate-900">WHATSAPP</p>
            <p className="mt-2 text-sm text-slate-700">{site.whatsappPhone}</p>
            <p className="mt-1 text-xs text-slate-500">Principal</p>

            <div className="mt-5">
              <ButtonLink href={wa} variant="primary" className="w-full">
                Escribir por WhatsApp
              </ButtonLink>
            </div>

            <div className="mt-5 rounded-xl border border-slate-200 bg-white/60 p-4">
              <p className="text-xs font-bold tracking-[0.18em] text-slate-500">
                TEL SECUNDARIO
              </p>
              <p className="mt-2 text-sm text-slate-700">{site.phones[1]}</p>
            </div>
          </div>
        </FadeIn>

        {/* Emails */}
        <FadeIn delay={0.03}>
          <div className="surface surface-hover p-6">
            <p className="text-sm font-extrabold text-slate-900">EMAIL</p>

            <div className="mt-3 space-y-2 text-sm">
              {site.emails.map((e) => (
                <a
                  key={e}
                  className="block text-slate-700 hover:text-slate-900 hover:underline"
                  href={`mailto:${e}`}
                >
                  {e}
                </a>
              ))}
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Recomendación: envía categoría + listado de productos.
            </p>
          </div>
        </FadeIn>

        {/* Ubicación + Personas de contacto */}
        <FadeIn delay={0.06}>
          <div className="surface surface-hover p-6">
            <p className="text-sm font-extrabold text-slate-900">UBICACIÓN</p>
            <p className="mt-2 text-sm text-slate-700">{site.address}</p>

            <div className="mt-6">
              <p className="text-sm font-extrabold text-slate-900">
                PERSONAS DE CONTACTO
              </p>

              <div className="mt-3 space-y-3">
                {site.contacts.map((c) => (
                  <div
                    key={c.name}
                    className="rounded-xl border border-slate-200 bg-white/60 p-4"
                  >
                    <p className="text-slate-900 font-extrabold tracking-tight">
                      {c.name}
                    </p>
                    <p className="mt-1 text-slate-700">{c.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </Container>
  );
}
