import Image from "next/image";
import Link from "next/link";

const hotspots = [
  {
    top: "22%",
    left: "56%",
    color: "orange" as const,
    title: "Paneles solares",
    href: "/informacion/paneles",
  },
  {
    top: "48%",
    left: "68%",
    color: "purple" as const,
    title: "Estacion / bateria",
    href: "/informacion/bateria",
  },
  {
    top: "70%",
    left: "40%",
    color: "teal" as const,
    title: "Servicio de instalacion",
    href: "/informacion/servicio",
  },
];

const dot = {
  orange: "border-orange text-orange",
  purple: "border-purple text-purple",
  teal: "border-teal text-teal",
};

export default function Hero() {
  return (
    <>
      <section className="relative w-full min-h-[480px] md:min-h-[600px]">
        {/* La imagen se recorta sola, la seccion ya NO tiene overflow-hidden global */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/casalogosolares.jpeg"
            alt="Casa con panel solar, bateria y carga vehicular - Energias Alternas"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-ink/5" />
        </div>

        <div className="absolute inset-0">
          {hotspots.map((h) => (
            <div
              key={h.title}
              className="hotspot-wrap absolute"
              style={{ top: h.top, left: h.left }}
            >
              <Link
                href={h.href}
                className={"hotspot w-4 h-4 rounded-full bg-white border-2 block " + dot[h.color]}
                aria-label={h.title}
              />
              <div className="tooltip absolute left-6 -top-2 w-44 bg-white rounded-xl p-3 shadow-lg text-xs">
                <p className={"font-semibold " + dot[h.color]}>{h.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative z-10 w-full h-full flex flex-col pl-2 pr-4 md:pl-4 md:pr-10 pt-20 md:pt-28 pb-10 md:pb-16 min-h-[480px] md:min-h-[600px] justify-center pointer-events-none">
          <div className="max-w-[260px] sm:max-w-xs md:max-w-md pointer-events-none text-left">
            <p className="uppercase tracking-[0.15em] text-[10px] sm:text-xs font-semibold mb-3 text-gold">
              Energia que no depende de nadie
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold leading-[1.15] mb-3 md:mb-6 text-white display">
              Independencia <span className="text-gold">energetica,</span>
              <br />
              lista para instalar.
            </h1>
            <p className="hidden sm:block text-sm md:text-lg text-white/85">
              Generadores solares, baterias y paneles para el hogar guatemalteco.
              Elegimos, dimensionamos y te acompanamos, tu solo enciendes.
            </p>
          </div>
        </div>

        <p className="absolute bottom-4 right-6 z-10 text-[11px] text-white/80 bg-black/30 px-3 py-1 rounded-full">
          Toca los puntos para explorar
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-6 -mt-8 relative z-10">
        <div className="flex flex-wrap gap-6 md:gap-10 bg-white rounded-2xl px-6 py-5 w-fit shadow-lg text-sm">
          <div>
            <span className="block text-2xl font-bold display">+120</span>
            <span className="text-black/60">instalaciones</span>
          </div>
          <div>
            <span className="block text-2xl font-bold display">10 anos</span>
            <span className="text-black/60">garantia bateria</span>
          </div>
          <div>
            <span className="block text-2xl font-bold display">24h</span>
            <span className="text-black/60">respuesta tecnica</span>
          </div>
        </div>
      </div>
    </>
  );
}