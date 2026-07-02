"use client";

import { useMemo, useState } from "react";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";

const tierOrder = ["esencial", "hogar", "total"] as const;
type TierFilter = "todos" | (typeof tierOrder)[number];
type SortMode = "sugerido" | "asc" | "desc";

const tierLabels: Record<(typeof tierOrder)[number], string> = {
  esencial: "Esencial",
  hogar: "Hogar",
  total: "Independencia total",
};

function parsePrice(price: string): number {
  const digits = price.replace(/[^0-9]/g, "");
  return digits ? parseInt(digits, 10) : 0;
}

export default function Catalog() {
  const [tierFilter, setTierFilter] = useState<TierFilter>("todos");
  const [sort, setSort] = useState<SortMode>("sugerido");

  const filtered = useMemo(() => {
    let list = tierFilter === "todos" ? products : products.filter((p) => p.tier === tierFilter);
    if (sort === "asc") list = [...list].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    if (sort === "desc") list = [...list].sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    return list;
  }, [tierFilter, sort]);

  return (
    <section id="catalogo" className="max-w-6xl mx-auto px-6 py-20">
      <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
        <div>
          <p className="uppercase tracking-[0.2em] text-xs font-semibold mb-3 text-teal">Catalogo</p>
          <h2 className="text-3xl md:text-4xl font-bold">Elige tu nivel de respaldo</h2>
        </div>
        <p className="text-black/60 max-w-sm text-sm">
          Desde respaldo basico para electrodomesticos hasta sistemas para toda la casa.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setTierFilter("todos")}
            className={
              "px-4 py-2 rounded-full text-sm font-semibold border transition " +
              (tierFilter === "todos" ? "bg-ink text-white border-ink" : "border-black/15 text-black/70 hover:border-black/30")
            }
          >
            Todos
          </button>
          {tierOrder.map((t) => (
            <button
              key={t}
              onClick={() => setTierFilter(t)}
              className={
                "px-4 py-2 rounded-full text-sm font-semibold border transition " +
                (tierFilter === t ? "bg-ink text-white border-ink" : "border-black/15 text-black/70 hover:border-black/30")
              }
            >
              {tierLabels[t]}
            </button>
          ))}
        </div>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortMode)}
          className="px-4 py-2 rounded-full text-sm font-semibold border border-black/15 text-black/70 bg-white"
        >
          <option value="sugerido">Orden sugerido</option>
          <option value="asc">Precio: menor a mayor</option>
          <option value="desc">Precio: mayor a menor</option>
        </select>
      </div>

      {filtered.length === 0 ? (
        <p className="text-black/50 text-sm">No hay productos en esta categoria por ahora.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}
    </section>
  );
}