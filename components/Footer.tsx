import Container from "@/components/Container";
import { site } from "@/data/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function Footer() {
  const wa1 = buildWhatsAppLink(site.phones[0], "Hola, necesito una cotización. ¿Me pueden ayudar?");
  const wa2 = buildWhatsAppLink(site.phones[1], "Hola, necesito una cotización. ¿Me pueden ayudar?");

  return (
    <footer className="border-t border-white/10 bg-neutral-950">
      <Container className="py-12 text-sm text-neutral-300">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-2">
            <p className="text-neutral-100 font-semibold">{site.company}</p>
            <p>R.U.C. {site.ruc}</p>
            <p>{site.address}</p>
          </div>

          <div className="space-y-2">
            <p className="text-neutral-100 font-semibold">Contacto</p>
            <a className="block hover:text-white" href={wa1}>
              WhatsApp: {site.phones[0]}
            </a>
            <a className="block hover:text-white" href={wa2}>
              WhatsApp alterno: {site.phones[1]}
            </a>
            <p className="mt-2 text-neutral-100/80 font-medium">Email</p>
            {site.emails.map((e) => (
              <a key={e} className="block hover:text-white" href={`mailto:${e}`}>
                {e}
              </a>
            ))}
          </div>

          <div className="space-y-2">
            <p className="text-neutral-100 font-semibold">Responsable</p>
            <p>{site.contact.name}</p>
            <p>{site.contact.role}</p>
            <p>{site.contact.phone}</p>
            <p className="pt-2 text-xs text-white/40">
              Sitio catálogo / institucional. Cotizaciones por WhatsApp o email.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/40">
          © {new Date().getFullYear()} {site.company}. Todos los derechos reservados.
        </div>
      </Container>
    </footer>
  );
}
