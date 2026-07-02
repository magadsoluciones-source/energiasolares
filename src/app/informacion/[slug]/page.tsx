import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const content: Record<
  string,
  {
    label: string;
    title: string;
    tagline: string;
    color: "orange" | "purple" | "teal";
    text: string;
    features: { title: string; desc: string }[];
    stat: { value: string; label: string };
    cta: { label: string; href: string };
  }
> = {
  paneles: {
    label: "Paneles solares",
    title: "Como funcionan los paneles",
    tagline: "El corazon de tu sistema",
    color: "orange",
    text: "Los paneles captan la luz del sol y la convierten en electricidad para tu casa durante el dia. El numero de paneles depende de tu consumo mensual: nosotros lo calculamos por ti antes de cotizar.",
    features: [
      { title: "Techo listo", desc: "Se instalan orientados para maximo rendimiento, sin modificar la estructura de tu casa." },
      { title: "Todo el dia", desc: "Producen energia mientras hay luz, incluso con nublado parcial." },
      { title: "Larga vida", desc: "Mas de 25 anos de vida util con mantenimiento minimo." },
    ],
    stat: { value: "25+", label: "anos de vida util" },
    cta: { label: "Ver paneles en el catalogo", href: "/#catalogo" },
  },
  bateria: {
    label: "Estacion / bateria",
    title: "Energia guardada para cuando la necesitas",
    tagline: "Tu respaldo contra los cortes",
    color: "purple",
    text: "La bateria almacena lo que los paneles generan de mas durante el dia, para usarlo en la noche o durante un corte de luz. Con garantia de 10 anos, es la parte que te da independencia real.",
    features: [
      { title: "Respaldo automatico", desc: "Entra en accion sola ante un corte de luz, sin que lo notes." },
      { title: "Carga inteligente", desc: "Se llena con el excedente solar del dia, sin desperdiciar nada." },
      { title: "10 anos de garantia", desc: "Cobertura extendida en la mayoria de nuestros modelos." },
    ],
    stat: { value: "10", label: "anos de garantia" },
    cta: { label: "Ver baterias en el catalogo", href: "/#catalogo" },
  },
  servicio: {
    label: "Servicio de instalacion",
    title: "Nosotros instalamos y damos seguimiento",
    tagline: "Te acompanamos de inicio a fin",
    color: "teal",
    text: "Un tecnico visita tu casa, dimensiona el sistema correcto y lo instala. Despues, tienes respuesta tecnica en menos de 24 horas ante cualquier duda o falla.",
    features: [
      { title: "Visita sin costo", desc: "Un tecnico evalua tu consumo y dimensiona el sistema ideal." },
      { title: "Instalacion certificada", desc: "Tecnicos capacitados hacen el montaje completo." },
      { title: "Soporte rapido", desc: "Respuesta tecnica en menos de 24 horas." },
    ],
    stat: { value: "24h", label: "respuesta tecnica" },
    cta: { label: "Hablar con un asesor", href: "/#contacto" },
  },
};

const accent = {
  orange: { text: "text-orange", bg: "bg-orange", soft: "bg-orange/10", from: "from-orange/90" },
  purple: { text: "text-purple", bg: "bg-purple", soft: "bg-purple/10", from: "from-purple/90" },
  teal: { text: "text-teal", bg: "bg-teal", soft: "bg-teal/10", from: "from-teal/90" },
};

export function generateStaticParams() {
  return Object.keys(content).map((slug) => ({ slug }));
}

export default async function InfoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = content[slug];
  if (!item) return notFound();
  const c = accent[item.color];

  return (
    <>
      <Header />

      {/* Banner grande con badge flotante */}
      <section className="relative w-full min-h-[380px] md:min-h-[440px] overflow-hidden">
        <Image src="/casalogosolares.jpeg" alt={item.title} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/10" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 h-full flex flex-col justify-end pb-14 pt-24 min-h-[380px] md:min-h-[440px]">
          <Link
            href="/"
            className="text-sm font-semibold text-ink bg-white/95 hover:bg-white px-4 py-2 rounded-full mb-6 inline-flex items-center gap-1.5 w-fit shadow-md"
          >
            &larr; Volver al inicio
          </Link>
          <p className={"text-xs font-semibold uppercase tracking-[0.15em] mb-2 " + c.text}>
            {item.label}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold display text-white max-w-xl leading-tight">
            {item.title}
          </h1>
          <p className="text-white/80 text-sm md:text-base mt-3 max-w-md">{item.tagline}</p>
        </div>

        <div className={"absolute top-6 right-6 md:top-10 md:right-10 z-10 rounded-2xl px-5 py-4 text-white shadow-lg " + c.bg}>
          <span className="block text-2xl md:text-3xl font-bold display">{item.stat.value}</span>
          <span className="text-xs md:text-sm text-white/90">{item.stat.label}</span>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-6 py-14">
        <p className="text-black/70 text-base md:text-lg max-w-2xl">{item.text}</p>
      </section>

      {/* Tarjetas de caracteristicas */}
      <section className={"py-14 " + c.soft}>
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {item.features.map((f) => (
            <div key={f.title} className="card-lift bg-white rounded-3xl p-6 shadow-sm border border-black/5">
              <div className={"w-9 h-9 rounded-full flex items-center justify-center mb-4 " + c.bg}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-bold display mb-2">{f.title}</h3>
              <p className="text-sm text-black/60">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className={"rounded-3xl px-8 py-10 md:py-14 text-center text-white bg-gradient-to-br " + c.from + " to-ink"}>
          <h2 className="text-2xl md:text-3xl font-bold display mb-3">Listo para dar el siguiente paso</h2>
          <p className="text-white/85 mb-6 max-w-md mx-auto text-sm md:text-base">
            Te ayudamos a dimensionar tu sistema sin compromiso.
          </p>
          <Link href={item.cta.href} className="inline-block px-7 py-3 rounded-full bg-white text-ink font-semibold">
            {item.cta.label}
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}