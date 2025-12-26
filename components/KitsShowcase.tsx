import Container from "@/components/Container";
import FadeIn from "@/components/motion/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import { catalog } from "@/data/catalog";

export default function KitsShowcase() {
  const kits = catalog.find((c) => c.slug === "kits")?.items ?? [];
  return (
    <section className="border-t border-white/10 bg-neutral-950">
      <Container className="py-16">
        <FadeIn>
          <SectionHeading
            eyebrow="KITS"
            title="Kits por tipo"
            description="Listado organizado para consulta rápida. Para cotización, contáctanos."
          />
        </FadeIn>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {kits.map((k, idx) => (
            <FadeIn key={k} delay={idx * 0.02}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
                <p className="text-sm font-semibold text-white">{k}</p>
                <p className="mt-2 text-sm text-neutral-300">
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
