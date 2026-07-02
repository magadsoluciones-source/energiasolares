"use client";

import { useCart } from "@/context/CartContext";

function parsePrice(price: string): number {
  const digits = price.replace(/[^0-9]/g, "");
  return digits ? parseInt(digits, 10) : 0;
}

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeFromCart, count } = useCart();
  const total = items.reduce((sum, i) => sum + parsePrice(i.price) * i.qty, 0);

  return (
    <>
      {isOpen && <div className="fixed inset-0 z-50 bg-black/40" onClick={closeCart} />}

      <aside
        className={
          "fixed top-0 right-0 h-full w-full max-w-sm bg-white z-50 shadow-2xl transition-transform duration-300 flex flex-col " +
          (isOpen ? "translate-x-0" : "translate-x-full")
        }
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-black/10">
          <h2 className="font-bold display text-lg">Tu carrito ({count})</h2>
          <button onClick={closeCart} className="text-black/50 hover:text-black text-2xl leading-none">
            &times;
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <p className="text-black/50 text-sm mt-8 text-center">Aun no has agregado productos.</p>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.slug} className="flex items-center gap-3 border-b border-black/5 pb-4">
                  <div className="w-12 h-12 rounded-lg bg-cream flex items-center justify-center text-2xl flex-shrink-0">
                    {item.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold truncate">{item.name}</p>
                    <p className="text-xs text-black/50">Cantidad: {item.qty}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold whitespace-nowrap">{item.price}</p>
                    <button onClick={() => removeFromCart(item.slug)} className="text-xs text-black/40 hover:text-orange">
                      Quitar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-black/10">
            <div className="flex items-center justify-between mb-4 text-sm font-semibold">
              <span>Total estimado</span>
              <span>Q {total.toLocaleString("es-GT")}</span>
            </div>
            <a
              href="#contacto"
              onClick={closeCart}
              className="block text-center px-6 py-3 rounded-full text-white font-semibold bg-ink hover:bg-orange transition-colors"
            >
              Cotizar estos productos
            </a>
          </div>
        )}
      </aside>
    </>
  );
}