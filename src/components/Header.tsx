"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { count, openCart } = useCart();

  return (
    <header className="fixed top-0 left-0 w-full z-40">
      <div className="w-full flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-2 bg-cream pl-3 pr-10 py-3 rounded-br-[60px] shadow-sm"
        >
          <Image
            src="/logo.png"
            alt="Energías Alternas"
            width={283}
            height={170}
            className="h-19 w-auto object-contain"
            priority
          />
          <span className="text-lg font-bold display tracking-tight hidden sm:inline">
            Energías <span className="text-orange">Alternas</span>
          </span>
        </a>

        <div className="flex items-center gap-5 pr-6 py-4">
          <nav className="hidden md:flex items-center gap-8 text-base font-semibold text-ink">
            <a href="#catalogo" className="transition-colors hover:text-orange">Catálogo</a>
            <a href="#mapa" className="transition-colors hover:text-orange">Cómo funciona</a>
            <a href="#como-elegir" className="transition-colors hover:text-orange">Cómo elegir</a>
          </nav>

          <button
            onClick={openCart}
            aria-label="Ver carrito"
            className="relative p-2 rounded-full hover:bg-black/5 transition-colors"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {count > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </button>

          <a
            href="#contacto"
            className="px-4 py-2 rounded-full text-white text-sm font-semibold bg-ink transition-colors hover:bg-orange"
          >
            Cotizar
          </a>
        </div>
      </div>
    </header>
  );
}