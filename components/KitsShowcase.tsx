import Container from "@/components/Container";
import FadeIn from "@/components/motion/FadeIn";
import { catalog } from "@/data/catalog";

export default function KitsSection() {
  const kits = catalog.find((c) => c.slug === "kits");

  if (!kits) return null;

  return (
    <section className="border-t border-slate-200/70 bg-transparent">
      <Container className="py-16">
        <FadeIn>
          <p className="text-xs font-bold tracking-[0.22em] text-slate-500">KITS</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Kits por tipo
          </h2>
          <p className="mt-3 text-sm text-slate-700">
            Listado organizado para consulta rápida. Para cotización, contáctanos.
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {kits.items.map((k, idx) => (
            <FadeIn key={k} delay={idx * 0.02}>
              <div className="surface surface-hover p-6">
                <p className="text-sm font-extrabold text-slate-900">{k}</p>
                <p className="mt-2 text-sm text-slate-700">
                  Solicita disponibilidad y opciones por WhatsApp/email.
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
