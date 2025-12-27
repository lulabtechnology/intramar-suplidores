import Link from "next/link";
import Container from "@/components/Container";
import FadeIn from "@/components/motion/FadeIn";
import { catalog } from "@/data/catalog";

export default function CategoryGrid() {
  return (
    <section id="categories" className="border-t border-slate-200/70 bg-transparent">
      <Container className="py-16">
        <FadeIn>
          <p className="text-xs font-bold tracking-[0.22em] text-slate-500">CATEGORÍAS</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Explora el catálogo por categoría
          </h2>
          <p className="mt-3 text-sm text-slate-700">
            Selecciona una categoría para ver el listado de productos. Para precios y disponibilidad, contáctanos para cotizar.
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {catalog.map((c, idx) => (
            <FadeIn key={c.slug} delay={idx * 0.03}>
              <Link href={`/products/${c.slug}`} className="surface surface-hover block p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-extrabold text-slate-900">{c.name}</p>
                    <p className="mt-1 text-sm text-slate-700">Ver listado de productos</p>
                  </div>
                  <span className="text-slate-500">↗</span>
                </div>
                <p className="mt-3 text-sm text-slate-700">
                  {c.items.slice(0, 5).join(", ")}
                  {c.items.length > 5 ? "..." : ""}
                </p>
                <div className="mt-4 hairline" />
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
