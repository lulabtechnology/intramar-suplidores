import Container from "@/components/Container";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white/60">
      <Container className="py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white/70 p-6">
            <p className="text-sm font-extrabold text-slate-900">
              {site.company}
            </p>
            <p className="mt-2 text-xs font-semibold text-slate-600">
              {site.ruc}
            </p>
            <p className="mt-3 text-sm text-slate-700">{site.address}</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white/70 p-6">
            <p className="text-xs font-bold tracking-[0.22em] text-slate-500">
              CONTACTO (WHATSAPP)
            </p>
            <p className="mt-3 text-sm font-semibold text-slate-800">
              {site.whatsappPhone}
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-800">
              {site.phones[1]}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white/70 p-6">
            <p className="text-xs font-bold tracking-[0.22em] text-slate-500">
              EMAIL
            </p>
            <div className="mt-3 space-y-2">
              {site.emails.map((e) => (
                <a
                  key={e}
                  href={`mailto:${e}`}
                  className="block text-sm font-semibold text-slate-800 hover:underline"
                >
                  {e}
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-8 text-xs text-slate-500">
          © {new Date().getFullYear()} {site.company}. Todos los derechos reservados.
        </p>
      </Container>
    </footer>
  );
}
