"use client";

import Link from "next/link";
import { CatalogCategory } from "@/data/catalog";
import FadeIn from "@/components/motion/FadeIn";

export default function CatalogResults({
  results,
  emptyState
}: {
  results: { category: CatalogCategory; items: string[] }[];
  emptyState: boolean;
}) {
  if (emptyState) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
        <p className="text-sm font-semibold text-white">Sin resultados</p>
        <p className="mt-2 text-sm text-neutral-300">
          Prueba con otra palabra o cambia la categoría.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {results.map((block, idx) => (
        <FadeIn key={block.category.slug} delay={idx * 0.03}>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-white">{block.category.name}</p>
                <p className="mt-1 text-xs text-white/50">
                  {block.items.length} item(s)
                </p>
              </div>
              <Link
                href={`/products/${block.category.slug}`}
                className="text-sm text-white/70 hover:text-white"
              >
                Ver categoría ↗
              </Link>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {block.items.map((it) => (
                <span
                  key={it}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80"
                >
                  {it}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
