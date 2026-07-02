"use client";

import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

const bg = {
  orange: "bg-gradient-to-br from-[#FFF3E9] to-[#FDE7D4]",
  purple: "bg-gradient-to-br from-[#F3E9FB] to-[#E7D6F5]",
  teal: "bg-gradient-to-br from-[#E9F7EF] to-[#D4EFDF]",
};
const text = {
  orange: "text-orange",
  purple: "text-purple",
  teal: "text-teal",
};
const badgeBg = {
  orange: "bg-orange",
  purple: "bg-purple",
  teal: "bg-teal",
};

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="card-lift bg-white rounded-2xl p-6 border border-black/5 relative">
      {product.featured && (
        <span
          className={`absolute -top-3 right-6 text-[11px] font-semibold text-white px-3 py-1 rounded-full ${badgeBg[product.accent]}`}
        >
          Más elegido
        </span>
      )}
      <div className={`w-full h-40 rounded-xl mb-5 flex items-center justify-center ${bg[product.accent]}`}>
        <span className="text-5xl">{product.emoji}</span>
      </div>
      <p className={`text-xs font-semibold mb-1 ${text[product.accent]}`}>{product.tierLabel}</p>
      <h3 className="text-lg font-bold mb-2">{product.name}</h3>
      <p className="text-sm text-black/60 mb-4">{product.description}</p>
      <div className="flex items-center justify-between mb-3">
        <span className="font-bold">{product.price}</span>
        <a href="#contacto" className={`text-sm font-semibold ${text[product.accent]}`}>
          Cotizar →
        </a>
      </div>
      <button
        onClick={() =>
          addToCart({
            slug: product.slug,
            name: product.name,
            price: product.price,
            emoji: product.emoji,
            accent: product.accent,
          })
        }
        className="w-full py-2.5 rounded-full border border-black/15 text-sm font-semibold hover:bg-ink hover:text-white hover:border-ink transition-colors"
      >
        Agregar al carrito
      </button>
    </div>
  );
}