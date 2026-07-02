import Image from "next/image";

const nodes = [
  { top: "14%", left: "46%", color: "orange" as const, title: "Paneles solares", text: "Cubren el techo y generan la energía que consume la casa durante el día." },
  { top: "52%", left: "59%", color: "purple" as const, title: "Batería / estación", text: "Guarda el excedente para la noche o para cuando se corta la luz." },
  { top: "70%", left: "16%", color: "teal" as const, title: "Carga vehicular", text: "Espacio listo para un cargador de vehículo eléctrico." },
];

const dot = { orange: "border-orange text-orange", purple: "border-purple text-purple", teal: "border-teal text-teal" };

export default function SystemMap() {
  return (
    <section id="mapa" className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-10">
        <p className="uppercase tracking-[0.2em] text-xs font-semibold mb-3 text-purple">Ejemplo — así se ve instalado</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Un sistema, en una sola casa</h2>
        <p className="text-black/60 max-w-lg text-sm">
          Aún no tenemos varias sucursales que mapear, así que en lugar de un mapa de
          ubicaciones usamos esto: la misma instalación, señalando cada pieza. Es un punto
          de partida — lo ajustamos cuando definamos el contenido final contigo.
        </p>
      </div>

      <div className="relative rounded-3xl overflow-hidden border border-black/5 shadow-sm aspect-[940/448]">
        <Image src="/casalogosolares.jpeg" alt="Instalación solar completa — panel, batería y carga vehicular" fill className="object-cover" />
        {nodes.map((n) => (
          <div key={n.title} className="hotspot-wrap absolute" style={{ top: n.top, left: n.left }}>
            <button className={`hotspot w-4 h-4 rounded-full bg-white border-2 ${dot[n.color]}`} aria-label={n.title} />
            <div className="tooltip absolute left-6 top-0 w-52 bg-white rounded-xl p-3 shadow-lg text-xs z-10">
              <p className={`font-semibold mb-1 ${dot[n.color]}`}>{n.title}</p>
              <p className="text-black/60">{n.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}