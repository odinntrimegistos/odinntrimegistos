import { SigilBody, SigilMind, SigilSoul } from "@/components/sigils"
import { siteConfig } from "@/lib/site-data"

export function PilaresMetodologia() {
  const pilaresConfig = siteConfig.metodologia.pilares

  const sigilMap = {
    body: SigilBody,
    mind: SigilMind,
    soul: SigilSoul,
  } as const

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-graphite/20 to-obsidian">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl md:text-3xl text-bone mb-4 tracking-wide">{pilaresConfig.title}</h2>
          <p className="text-sand/70">{pilaresConfig.description}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {pilaresConfig.items.map((pilar) => {
            const Sigil = sigilMap[pilar.sigilKey as keyof typeof sigilMap]

            return (
            <div
              key={pilar.title}
              className={`relative p-6 rounded-xl bg-gradient-to-br ${pilar.color} border border-gold/10 text-center group hover:border-gold/25 transition-colors`}
            >
              {Sigil && (
                <Sigil className="w-16 h-16 mx-auto mb-4 opacity-60 group-hover:opacity-80 transition-opacity" />
              )}
              <h3 className="font-display text-lg text-bone mb-2">{pilar.title}</h3>
              <p className="text-sand/70 text-sm">{pilar.description}</p>
            </div>
            )
          })}
        </div>

        <p className="text-center text-sand/60 italic">
          {pilaresConfig.closing.map((part, index) => (
            <span key={index} className={part.className}>
              {part.text}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
