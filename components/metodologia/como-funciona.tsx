"use client"

import { Eye, Brain, Sparkles } from "lucide-react"
import { useSiteConfig } from "@/lib/use-site-config"

export function ComoFunciona() {
  const siteConfig = useSiteConfig()
  const { comoFunciona } = siteConfig.metodologia

  const iconMap = {
    eye: Eye,
    brain: Brain,
    sparkles: Sparkles,
  } as const

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-obsidian to-graphite/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl md:text-3xl text-bone mb-4 tracking-wide">{comoFunciona.title}</h2>
          <p className="text-sand/70">{comoFunciona.description}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {comoFunciona.movimentos.map((mov) => {
            const Icon = iconMap[mov.iconKey as keyof typeof iconMap]

            return (
            <div
              key={mov.num}
              className="relative p-6 rounded-xl bg-slate/30 border border-gold/10 hover:border-gold/25 transition-colors group"
            >
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center">
                <span className="text-gold font-display text-sm">{mov.num}</span>
              </div>

              {Icon && <Icon className="w-8 h-8 text-gold/60 mb-4 group-hover:text-gold transition-colors" />}

              <h3 className="font-display text-lg text-bone mb-2">{mov.title}</h3>
              <p className="text-sand/70 text-sm">{mov.description}</p>
            </div>
            )
          })}
        </div>

        <div className="text-center space-y-2">
          {comoFunciona.closing.map((line, index) => (
            <p key={index} className={line.className}>
              {line.text}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
