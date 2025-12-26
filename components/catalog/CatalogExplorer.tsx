"use client";

import { useMemo, useState } from "react";
import { catalog } from "@/data/catalog";
import CatalogFilters from "@/components/catalog/CatalogFilters";
import CatalogResults from "@/components/catalog/CatalogResults";
import { normalizeText } from "@/lib/text";

export default function CatalogExplorer() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | "all">("all");

  const results = useMemo(() => {
    const q = normalizeText(query);

    const cats =
      activeCategory === "all"
        ? catalog
        : catalog.filter((c) => c.slug === activeCategory);

    const blocks = cats
      .map((c) => {
        const items = q
          ? c.items.filter((it) => normalizeText(it).includes(q))
          : c.items;

        return { category: c, items };
      })
      .filter((b) => b.items.length > 0);

    return blocks;
  }, [query, activeCategory]);

  const emptyState = results.length === 0;

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <CatalogFilters
          categories={catalog}
          query={query}
          setQuery={setQuery}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </div>

      <div className="lg:col-span-8">
        <CatalogResults results={results} emptyState={emptyState} />
      </div>
    </div>
  );
}
