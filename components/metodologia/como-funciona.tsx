import { Eye, Brain, Sparkles } from "lucide-react"

export function ComoFunciona() {
  const movimentos = [
    {
      icon: Eye,
      num: "1",
      title: "Leitura",
      description: "Compreensão clara do momento",
    },
    {
      icon: Brain,
      num: "2",
      title: "Consciência",
      description: "Entendimento dos padrões e ciclos",
    },
    {
      icon: Sparkles,
      num: "3",
      title: "Integração",
      description: "Aplicação real na vida cotidiana",
    },
  ]

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-obsidian to-graphite/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl md:text-3xl text-bone mb-4 tracking-wide">COMO FUNCIONA NA PRÁTICA</h2>
          <p className="text-sand/70">
            Cada atendimento — seja pontual ou em mentoria — é conduzido a partir de três movimentos essenciais:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {movimentos.map((mov) => (
            <div
              key={mov.num}
              className="relative p-6 rounded-xl bg-slate/30 border border-gold/10 hover:border-gold/25 transition-colors group"
            >
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center">
                <span className="text-gold font-display text-sm">{mov.num}</span>
              </div>

              <mov.icon className="w-8 h-8 text-gold/60 mb-4 group-hover:text-gold transition-colors" />

              <h3 className="font-display text-lg text-bone mb-2">{mov.title}</h3>
              <p className="text-sand/70 text-sm">{mov.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center space-y-2">
          <p className="text-sand/60 italic">Nada é feito para impressionar.</p>
          <p className="text-gold font-medium">Tudo é feito para funcionar.</p>
        </div>
      </div>
    </section>
  )
}
