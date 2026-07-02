export type Product = {
  slug: string;
  tier: "esencial" | "hogar" | "total";
  tierLabel: string;
  name: string;
  description: string;
  price: string;
  accent: "orange" | "purple" | "teal";
  emoji: string;
  featured?: boolean;
};

// Para agregar un producto nuevo, solo copia un bloque y cambia los datos.
// No hay que tocar ningún componente.
export const products: Product[] = [
  {
    slug: "generador-portatil-1000w",
    tier: "esencial",
    tierLabel: "Respaldo esencial",
    name: "Generador portátil 1000W",
    description: "Ideal para cortes cortos: router, refrigeradora chica, luces.",
    price: "Q XXXXX",
    accent: "orange",
    emoji: "🔋",
  },
  {
    slug: "estacion-solar-3000w",
    tier: "hogar",
    tierLabel: "Respaldo hogar",
    name: "Estación solar ",
    description: "Sostiene la casa varias horas: neveras, bombas de agua, wifi.",
    price: "XXXXXX",
    accent: "purple",
    emoji: "⚡",
    featured: true,
  },
  {
    slug: "6000w-baterias",
    tier: "total",
    tierLabel: "Independencia total",
    name: "Sistema 6000W + baterías ",
    description: "Casa completa, incluso sin conexión a la red por días.",
    price: "XXXXXXX",
    accent: "teal",
    emoji: "🏠",
  },
];
