import { Layers, Moon, Compass, Flame, FlaskConical, Wind, Brain } from "lucide-react"
import { siteConfig } from "@/lib/site-data"

export function PraticasSection() {
  const praticasConfig = siteConfig.metodologia.praticas

  const iconMap = {
    layers: Layers,
    moon: Moon,
    compass: Compass,
    flame: Flame,
    flask: FlaskConical,
    wind: Wind,
    brain: Brain,
  } as const

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-2xl md:text-3xl text-bone mb-4 tracking-wide">
            {praticasConfig.title}
          </h2>
          <p className="text-sand/70 max-w-2xl mx-auto">
            {praticasConfig.description}
          </p>
        </div>

        <div className="space-y-8">
          {praticasConfig.items.map((pratica) => {
            const Icon = iconMap[pratica.iconKey as keyof typeof iconMap]

            return (
            <div
              key={pratica.title}
              className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-graphite/80 to-slate/30 border border-gold/10 hover:border-gold/20 transition-all group"
            >
              {/* Icon and Title */}
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gold/10 border border-gold/20 group-hover:bg-gold/15 transition-colors">
                  {Icon && <Icon className="w-6 h-6 text-gold" />}
                </div>
                <div>
                  <h3 className="font-display text-xl text-bone tracking-wide">{pratica.title}</h3>
                  <p className="text-gold/80 text-sm">{pratica.subtitle}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sand/80 mb-6">{pratica.description}</p>

              {/* Applications */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-xs text-gold/60 tracking-wider mb-3">
                    {pratica.objetivos ? "O OBJETIVO É AJUDAR A COMPREENDER" : "APLICAÇÕES"}
                  </p>
                  <ul className="space-y-2">
                    {pratica.aplicacoes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sand/70 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold/50 mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {pratica.objetivos && (
                  <div>
                    <p className="text-xs text-gold/60 tracking-wider mb-3">COMPREENDER</p>
                    <ul className="space-y-2">
                      {pratica.objetivos.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sand/70 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold/50 mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Note */}
              <div className="pt-4 border-t border-gold/10">
                <p className="text-sand/60 text-sm italic">{pratica.nota}</p>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
