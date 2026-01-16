import { SigilBody, SigilMind, SigilSoul } from "@/components/sigils"

const pilares = [
  {
    sigil: SigilBody,
    title: "Corpo",
    description: "Presença, energia, sustentação e ritmo.",
    color: "from-slate/30 to-graphite/50",
  },
  {
    sigil: SigilMind,
    title: "Mente",
    description: "Clareza, leitura simbólica, ciclos e escolhas conscientes.",
    color: "from-graphite/50 to-slate/30",
  },
  {
    sigil: SigilSoul,
    title: "Alma",
    description: "Propósito, sentido e coerência entre quem se é e como se vive.",
    color: "from-deepred/10 to-graphite/50",
  },
]

export function PilaresMetodologia() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-graphite/20 to-obsidian">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl md:text-3xl text-bone mb-4 tracking-wide">OS PILARES DA METODOLOGIA</h2>
          <p className="text-sand/70">Nos processos recorrentes, o trabalho se organiza em três pilares:</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {pilares.map((pilar) => (
            <div
              key={pilar.title}
              className={`relative p-6 rounded-xl bg-gradient-to-br ${pilar.color} border border-gold/10 text-center group hover:border-gold/25 transition-colors`}
            >
              <pilar.sigil className="w-16 h-16 mx-auto mb-4 opacity-60 group-hover:opacity-80 transition-opacity" />
              <h3 className="font-display text-lg text-bone mb-2">{pilar.title}</h3>
              <p className="text-sand/70 text-sm">{pilar.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-sand/60 italic">
          Esses pilares não são trabalhados separadamente, mas{" "}
          <span className="text-gold/80">integrados ao longo do tempo</span>.
        </p>
      </div>
    </section>
  )
}
