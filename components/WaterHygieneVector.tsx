import Container from "@/components/Container";
import FadeIn from "@/components/motion/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import { catalog } from "@/data/catalog";

function ListCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <p className="text-sm font-semibold text-white">{title}</p>
      <ul className="mt-4 space-y-2 text-sm text-neutral-300">
        {items.slice(0, 6).map((it) => (
          <li key={it} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function WaterHygieneVector() {
  const agua = catalog.find((c) => c.slug === "agua")?.items ?? [];
  const higiene = catalog.find((c) => c.slug === "seguridad-y-proteccion")?.items ?? [];
  const vector = catalog.find((c) => c.slug === "insumos-vectores")?.items ?? [];

  return (
    <section className="border-t border-white/10 bg-neutral-950">
      <Container className="py-16">
        <FadeIn>
          <SectionHeading
            eyebrow="SELECCIÓN"
            title="Water / Hygiene / Vector"
            description="Sub-secciones basadas en tu listado real (sin inventar productos)."
          />
        </FadeIn>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <FadeIn><ListCard title="Agua" items={agua} /></FadeIn>
          <FadeIn delay={0.03}><ListCard title="Higiene / Protección" items={higiene} /></FadeIn>
          <FadeIn delay={0.06}><ListCard title="Vectores" items={vector} /></FadeIn>
        </div>
      </Container>
    </section>
  );
}
