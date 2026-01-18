"use client"

import { Shield, Heart, Scale, Compass } from "lucide-react"
import { useSiteConfig } from "@/lib/site-config"

export function EticaMetodologia() {
  const siteConfig = useSiteConfig()
  const { etica } = siteConfig.metodologia

  const iconMap = {
    shield: Shield,
    heart: Heart,
    scale: Scale,
    compass: Compass,
  } as const

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-obsidian to-graphite/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl md:text-3xl text-bone mb-4 tracking-wide">{etica.title}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {etica.principles.map((item) => {
            const Icon = iconMap[item.iconKey as keyof typeof iconMap]

            return (
              <div key={item.text} className="flex items-center gap-4 p-5 rounded-xl bg-slate/20 border border-gold/10">
                {Icon && <Icon className="w-5 h-5 text-gold/70 flex-shrink-0" />}
                <span className="text-sand/80">{item.text}</span>
              </div>
            )
          })}
        </div>

        <p className="text-center text-gold/80 italic">
          {etica.closing}
        </p>
      </div>
    </section>
  )
}
