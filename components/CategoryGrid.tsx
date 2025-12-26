import Link from "next/link";
import FadeIn from "@/components/motion/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/Container";
import { catalog } from "@/data/catalog";

const Icon = ({ name }: { name: string }) => {
  const common = "h-5 w-5 text-white/80";
  switch (name) {
    case "TEXTILES":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path d="M7 7l5-3 5 3v14H7V7Z" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M7 9h10" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      );
    case "ENERGÍA":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path d="M13 2L4 14h7l-1 8 10-14h-7l0-6Z" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      );
    case "KITS":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path d="M4 8h16v12H4V8Z" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M8 8V6a4 4 0 0 1 8 0v2" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      );
    default:
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path d="M12 3l9 6-9 6-9-6 9-6Z" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M3 15l9 6 9-6" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      );
  }
};

export default function CategoryGrid() {
  return (
    <section id="categories" className="border-t border-white/10 bg-neutral-950">
      <Container className="py-16">
        <FadeIn>
          <SectionHeading
            eyebrow="CATEGORÍAS"
            title="Explora el catálogo por categoría"
            description="Selecciona una categoría para ver el listado de productos. Para precios y disponibilidad, contáctanos para cotizar."
          />
        </FadeIn>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {catalog.map((c, idx) => (
            <FadeIn key={c.slug} delay={idx * 0.03}>
              <Link
                href={`/products/${c.slug}`}
                className="group block rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                      <Icon name={c.name} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{c.name}</p>
                      <p className="mt-1 text-xs text-neutral-300">
                        Ver listado de productos
                      </p>
                    </div>
                  </div>
                  <span className="text-white/40 transition group-hover:text-white/70">↗</span>
                </div>

                <p className="mt-4 text-sm text-neutral-300">
                  {c.items.slice(0, 3).join(", ")}
                  {c.items.length > 3 ? "…" : ""}
                </p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
