const steps = [
  {
    number: "01",
    color: "text-orange",
    title: "¿Qué quieres respaldar?",
    text: "Electrodomésticos puntuales o la casa entera define el tamaño del sistema.",
  },
  {
    number: "02",
    color: "text-purple",
    title: "¿Cuántas horas sin red?",
    text: "La capacidad de la batería depende de cuánto dura el corte típico en tu zona.",
  },
  {
    number: "03",
    color: "text-teal",
    title: "¿Tienes techo disponible?",
    text: "El espacio y orientación del techo definen cuántos paneles caben.",
  },
];

export default function HowToChoose() {
  return (
    <section id="como-elegir" className="py-20 bg-ink">
      <div className="max-w-6xl mx-auto px-6 text-white">
        <p className="uppercase tracking-[0.2em] text-xs font-semibold mb-3 text-gold">
          Cómo elegir
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 max-w-lg">
          Tres preguntas antes de comprar
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.number}>
              <p className={`text-4xl font-bold display mb-3 ${s.color}`}>{s.number}</p>
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-white/60 text-sm">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
