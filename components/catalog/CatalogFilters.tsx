"use client";

import { CatalogCategory } from "@/data/catalog";
import Input from "@/components/ui/Input";
import { cn } from "@/lib/cn";

export default function CatalogFilters({
  categories,
  query,
  setQuery,
  activeCategory,
  setActiveCategory
}: {
  categories: CatalogCategory[];
  query: string;
  setQuery: (v: string) => void;
  activeCategory: string | "all";
  setActiveCategory: (v: string | "all") => void;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <p className="text-sm font-semibold text-white">Filtrar</p>

      <div className="mt-4">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar producto (ej: lámparas, kits, filtros...)"
          aria-label="Buscar producto"
        />
      </div>

      <div className="mt-5">
        <p className="text-xs font-medium tracking-[0.2em] text-white/60">
          CATEGORÍAS
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory("all")}
            className={cn(
              "rounded-full border px-3 py-1.5 text-xs transition",
              activeCategory === "all"
                ? "border-white/20 bg-white text-neutral-950"
                : "border-white/10 bg-white/5 text-white/80 hover:bg-white/10"
            )}
          >
            Todas
          </button>

          {categories.map((c) => (
            <button
              key={c.slug}
              onClick={() => setActiveCategory(c.slug)}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs transition",
                activeCategory === c.slug
                  ? "border-white/20 bg-white text-neutral-950"
                  : "border-white/10 bg-white/5 text-white/80 hover:bg-white/10"
              )}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
