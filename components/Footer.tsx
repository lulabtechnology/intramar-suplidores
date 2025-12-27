import Container from "@/components/Container";
import { site } from "@/data/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function Footer() {
  const wa = buildWhatsAppLink(site.whatsappPhone, "Hola, necesito una cotización. ¿Me pueden ayudar?");

  return (
    <footer className="border-t border-slate-200/70 bg-transparent">
      <Container className="py-12 text-sm">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="surface p-6">
            <p className="text-slate-900 font-extrabold">{site.company}</p>
            <p className="mt-2 text-slate-700">R.U.C. {site.ruc}</p>
            <p className="mt-2 text-slate-700">{site.address}</p>
          </div>

          <div className="surface p-6">
            <p className="text-slate-900 font-extrabold">CONTACTO</p>

            <a className="mt-3 block text-slate-900 font-semibold hover:underline" href={wa}>
              WhatsApp (principal): {site.whatsappPhone}
            </a>

            <p className="mt-2 text-slate-700">
              Tel (secundario): {site.phones[1]}
            </p>

            <p className="mt-5 text-slate-900 font-extrabold">EMAIL</p>
            <div className="mt-2 space-y-2">
              {site.emails.map((e) => (
                <a key={e} className="block text-slate-700 hover:text-slate-900 hover:underline" href={`mailto:${e}`}>
                  {e}
                </a>
              ))}
            </div>
          </div>

          <div className="surface p-6">
            <p className="text-slate-900 font-extrabold">PERSONAS DE CONTACTO</p>

            <div className="mt-4 space-y-3">
              {site.contacts.map((c) => (
                <div key={c.name} className="rounded-xl border border-slate-200 bg-white/60 p-4">
                  <p className="text-slate-900 font-extrabold tracking-tight">{c.name}</p>
                  <p className="mt-1 text-slate-700">{c.phone}</p>
                </div>
              ))}
            </div>

            <p className="mt-5 text-xs text-slate-600">
              Sitio catálogo / institucional. Cotizaciones por WhatsApp o email.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-xs text-slate-600">
          © {new Date().getFullYear()} {site.company}. Todos los derechos reservados.
        </div>
      </Container>
    </footer>
  );
}
