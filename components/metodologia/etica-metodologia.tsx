import { Shield, Heart, Scale, Compass } from "lucide-react"

const principios = [
  {
    icon: Shield,
    text: "Todo atendimento é confidencial",
  },
  {
    icon: Heart,
    text: "O trabalho não substitui acompanhamento médico ou psicológico",
  },
  {
    icon: Scale,
    text: "Não incentivo dependência espiritual",
  },
  {
    icon: Compass,
    text: "O símbolo orienta, mas a escolha é sempre do consulente",
  },
]

export function EticaMetodologia() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-obsidian to-graphite/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl md:text-3xl text-bone mb-4 tracking-wide">ÉTICA E RESPONSABILIDADE</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {principios.map((item) => (
            <div key={item.text} className="flex items-center gap-4 p-5 rounded-xl bg-slate/20 border border-gold/10">
              <item.icon className="w-5 h-5 text-gold/70 flex-shrink-0" />
              <span className="text-sand/80">{item.text}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-gold/80 italic">
          Espiritualidade sem responsabilidade não serve ao crescimento.
        </p>
      </div>
    </section>
  )
}
