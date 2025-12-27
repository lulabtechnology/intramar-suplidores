import Container from "@/components/Container";
import { site } from "@/data/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function Footer() {
  const wa = buildWhatsAppLink(site.whatsappPhone, "Hola, necesito una cotización. ¿Me pueden ayudar?");

  return (
    <footer className="border-t border-white/10 bg-transparent">
      <div className="h-px w-full bg-gradient-to-r from-sky-400/30 via-cyan-300/30 to-emerald-300/30" />

      <Container className="py-12 text-sm text-neutral-200">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="glass p-6">
            <p className="text-neutral-100 font-semibold">{site.company}</p>
            <p className="mt-2 text-white/70">R.U.C. {site.ruc}</p>
            <p className="mt-2 text-white/70">{site.address}</p>
          </div>

          <div className="glass p-6">
            <p className="text-neutral-100 font-semibold">Contacto</p>
            <a className="mt-3 block hover:text-white" href={wa}>
              WhatsApp: {site.whatsappPhone}
            </a>
            <p className="mt-2 text-white/60">Tel alterno: {site.phones[1]}</p>

            <p className="mt-5 text-neutral-100/90 font-medium">Email</p>
            <div className="mt-2 space-y-2">
              {site.emails.map((e) => (
                <a key={e} className="block text-white/70 hover:text-white" href={`mailto:${e}`}>
                  {e}
                </a>
              ))}
            </div>
          </div>

          <div className="glass p-6">
            <p className="text-neutral-100 font-semibold">Responsable</p>
            <p className="mt-2 text-white/70">{site.contact.name}</p>
            <p className="mt-1 text-white/70">{site.contact.role}</p>
            {site.contact.phone ? <p className="mt-1 text-white/60">{site.contact.phone}</p> : null}

            <p className="mt-6 text-xs text-white/50">
              Sitio catálogo / institucional. Cotizaciones por WhatsApp o email.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/50">
          © {new Date().getFullYear()} {site.company}. Todos los derechos reservados.
        </div>
      </Container>
    </footer>
  );
}
