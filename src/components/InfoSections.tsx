const sections = [
  {
    id: "paneles",
    color: "orange" as const,
    label: "Paneles solares",
    title: "Como funcionan los paneles",
    text: "Los paneles captan la luz del sol y la convierten en electricidad para tu casa durante el dia. El numero de paneles depende de tu consumo mensual: nosotros lo calculamos por ti antes de cotizar.",
    cta: { label: "Ver paneles en el catalogo", href: "#catalogo" },
  },
  {
    id: "bateria",
    color: "purple" as const,
    label: "Estacion / bateria",
    title: "Energia guardada para cuando la necesitas",
    text: "La bateria almacena lo que los paneles generan de mas durante el dia, para usarlo en la noche o durante un corte de luz. Con garantia de 10 anos, es la parte que te da independencia real.",
    cta: { label: "Ver baterias en el catalogo", href: "#catalogo" },
  },
  {
    id: "servicio",
    color: "teal" as const,
    label: "Servicio de instalacion",
    title: "Nosotros instalamos y damos seguimiento",
    text: "Un tecnico visita tu casa, dimensiona el sistema correcto y lo instala. Despues, tienes respuesta tecnica en menos de 24 horas ante cualquier duda o falla.",
    cta: { label: "Hablar con un asesor", href: "#contacto" },
  },
];

const accent = {
  orange: { text: "text-orange", bg: "bg-orange", bgSoft: "bg-orange/10" },
  purple: { text: "text-purple", bg: "bg-purple", bgSoft: "bg-purple/10" },
  teal: { text: "text-teal", bg: "bg-teal", bgSoft: "bg-teal/10" },
};

export default function InfoSections() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-12 max-w-lg">
        <p className="uppercase tracking-[0.2em] text-xs font-semibold mb-3 text-purple">
          Como funciona tu sistema
        </p>
        <h2 className="text-3xl md:text-4xl font-bold display mb-3">
          Tres piezas, un solo sistema
        </h2>
        <p className="text-black/60 text-sm">
          Estos son los puntos que viste en la imagen de arriba, explicados uno por uno.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {sections.map((s) => {
          const c = accent[s.color];
          return (
            <div
              key={s.id}
              id={s.id}
              className="scroll-mt-28 card-lift bg-white rounded-3xl border border-black/5 shadow-sm p-8 flex flex-col"
            >
              <div className={"w-10 h-10 rounded-full flex items-center justify-center mb-5 " + c.bgSoft}>
                <span className={"w-3 h-3 rounded-full " + c.bg} />
              </div>
              <p className={"text-xs font-semibold uppercase tracking-wide mb-2 " + c.text}>
                {s.label}
              </p>
              <h3 className="text-lg font-bold display mb-3">{s.title}</h3>
              <p className="text-sm text-black/60 mb-6 flex-1">{s.text}</p>
              <a href={s.cta.href} className={"text-sm font-semibold " + c.text}>
                {s.cta.label} &rarr;
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
