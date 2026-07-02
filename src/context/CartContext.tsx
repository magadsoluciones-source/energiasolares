"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type CartItem = {
  slug: string;
  name: string;
  price: string;
  emoji: string;
  accent: "orange" | "purple" | "teal";
  qty: number;
};

type CartContextType = {
  items: CartItem[];
  isOpen: boolean;
  count: number;
  addToCart: (item: Omit<CartItem, "qty">) => void;
  removeFromCart: (slug: string) => void;
  openCart: () => void;
  closeCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  function addToCart(item: Omit<CartItem, "qty">) {
    setItems((prev) => {
      const existing = prev.find((p) => p.slug === item.slug);
      if (existing) {
        return prev.map((p) => (p.slug === item.slug ? { ...p, qty: p.qty + 1 } : p));
      }
      return [...prev, { ...item, qty: 1 }];
    });
    setIsOpen(true);
  }

  function removeFromCart(slug: string) {
    setItems((prev) => prev.filter((p) => p.slug !== slug));
  }

  const count = items.reduce((sum, i) => sum + i.qty, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        count,
        addToCart,
        removeFromCart,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de CartProvider");
  return ctx;
}