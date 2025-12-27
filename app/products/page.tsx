"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import FadeIn from "@/components/motion/FadeIn";
import { catalog } from "@/data/catalog";

export default function ProductsPage() {
  const [q, setQ] = useState("");
  const [active, setActive] = useState<string>("all");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    const base = active === "all" ? catalog : catalog.filter((c) => c.slug === active);

    if (!query) return base;

    return base
      .map((c) => {
        const items = c.items.filter((it) => it.toLowerCase().includes(query));
        const nameHit = c.name.toLowerCase().includes(query);
        return nameHit ? c : { ...c, items };
      })
      .filter((c) => c.name.toLowerCase().includes(query) || c.items.length > 0);
  }, [q, active]);

  return (
    <>
      <PageHeader
        breadcrumb="Inicio / Productos"
        eyebrow="CATÁLOGO"
        title="Catálogo por categorías"
        description="Explora y filtra por categoría o busca un producto específico. Para precios y opciones, contáctanos para cotizar."
        imageSrc="/images/hero/hero.jpg"
        imageFit="cover"
      />

      <section className="bg-transparent">
        <Container className="py-10">
          <FadeIn>
            <div className="surface p-6">
              <p className="text-sm font-extrabold text-slate-900">Filtrar</p>

              <div className="mt-4 grid gap-4 md:grid-cols-3">
                <div className="md:col-span-2">
                  <label className="text-xs font-semibold text-slate-600">
                    Buscar producto
                  </label>
                  <input
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder="Buscar (ej: lámparas, filtros, guantes...)"
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none focus:ring-2 focus:ring-sky-200"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-600">
                    Categoría
                  </label>
                  <select
                    value={active}
                    onChange={(e) => setActive(e.target.value)}
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none focus:ring-2 focus:ring-sky-200"
                  >
                    <option value="all">Todas</option>
                    {catalog.map((c) => (
                      <option key={c.slug} value={c.slug}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-6 hairline" />

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {filtered.map((c, idx) => (
                  <FadeIn key={c.slug} delay={idx * 0.03}>
                    <Link
                      href={`/products/${c.slug}`}
                      className="surface surface-hover block p-6"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs font-bold tracking-[0.22em] text-slate-500">
                            CATEGORÍA
                          </p>
                          <p className="mt-2 text-lg font-extrabold text-slate-900">
                            {c.name}
                          </p>
                          <p className="mt-2 text-sm text-slate-700">
                            {c.description}
                          </p>
                        </div>
                        <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                          Ver
                        </span>
                      </div>

                      <p className="mt-4 text-xs font-semibold text-slate-600">
                        Productos (ejemplos)
                      </p>
                      <p className="mt-2 text-sm text-slate-700">
                        {c.items.slice(0, 6).join(", ")}
                        {c.items.length > 6 ? "..." : ""}
                      </p>

                      <div className="mt-5 hairline" />
                    </Link>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
