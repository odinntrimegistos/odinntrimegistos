"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { EgyptianDivider } from "@/components/egyptian-decorations"
import { AnimatedSection, AnimatedStagger, AnimatedCard, AnimatedItem } from "@/components/animations"
import { siteConfig, formatPrice } from "@/lib/site-data"
import { motion } from "framer-motion"
import { User, Brain, Heart, ArrowRight, Check, Clock, Flame } from "lucide-react"

const pillarIcons = { corpo: User, mente: Brain, alma: Heart }

export function MentoringSection() {
  const mentoringData = siteConfig.mentorias || (siteConfig as any).mentoring || {}
  const programs = mentoringData.programs || []
  const mensal = programs[0] || {}
  const opus = programs[1] || {}
  const disclaimer = mentoringData.disclaimer || []
  const title = mentoringData.title || "ACOMPANHAMENTO"

  return (
    <section id="mentoria" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 temple-radial opacity-30" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="font-display text-gold tracking-[0.3em] uppercase text-xs mb-4">{title}</p>
          <h2 className="font-display text-3xl md:text-4xl tracking-wide mb-6 text-bone">{title}</h2>
          <EgyptianDivider className="mb-6" />
        </AnimatedSection>

        {/* Mentoria Mensal */}
        <AnimatedCard className="mb-12">
          <Card className="etched backdrop-blur border-0 bg-obsidian/50 hover:border-gold/30 transition-all rounded-xl p-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left: Info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{mensal.symbol ?? ""}</span>
                  <div>
                    <h3 className="font-display text-2xl text-bone tracking-wide">{mensal.name ?? mensal.title}</h3>
                    <p className="text-gold text-sm uppercase tracking-wider">{mensal.subtitle ?? mensal.priceLabel ?? ""}</p>
                  </div>
                </div>

                <p className="text-sand/80 mb-6 italic">{mensal.tagline ?? mensal.description}</p>

                {/* Format */}
                <div className="mb-6">
                  <h4 className="text-bone text-sm uppercase tracking-wider mb-3">Formato</h4>
                  <ul className="space-y-2">
                    {mensal.format.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sand/70 text-sm">
                        <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Objective */}
                <div className="mb-6">
                  <h4 className="text-bone text-sm uppercase tracking-wider mb-3">Objetivo</h4>
                  <p className="text-sand/70 text-sm">{mensal.objective ?? mensal.description}</p>
                </div>

                {/* Pillars */}
                <div className="mb-6">
                  <h4 className="text-bone text-sm uppercase tracking-wider mb-3">Trabalho nos pilares</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {Object.entries(mensal.pillars).map(([key, value]) => {
                      const Icon = pillarIcons[key as keyof typeof pillarIcons]
                      return (
                        <div key={key} className="flex items-start gap-2 bg-graphite/40 p-3 rounded-lg">
                          <Icon className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-bone text-xs font-medium capitalize">{key}</p>
                            <p className="text-sand/60 text-xs">{value}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Indications */}
                <div>
                    <h4 className="text-bone text-sm uppercase tracking-wider mb-3">Indicada para quem</h4>
                  <ul className="space-y-1">
                    {(mensal.indications || []).map((item: any, i: number) => (
                      <li key={i} className="text-sand/70 text-sm">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right: Price and CTA */}
              <div className="md:w-64 flex flex-col items-center justify-center text-center p-6 bg-graphite/30 rounded-xl border border-gold/10">
                <p className="text-sand/50 text-xs uppercase tracking-wider mb-2">Investimento</p>
                <p className="font-display text-4xl text-gold mb-1">{formatPrice(mensal.price ?? 0)}</p>
                <p className="text-sand/60 text-sm mb-6">{mensal.priceLabel ?? mensal.priceLabel}</p>
                <Button className="w-full group bg-gold/10 hover:bg-gold/20 text-gold border border-gold/30 hover:border-gold/50">
                  {mensal.cta ?? "Entrar na Mentoria"}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </Card>
        </AnimatedCard>

        {/* Opus Magnum */}
        <AnimatedCard className="mb-12">
          <Card className="etched backdrop-blur border-0 bg-gold/5 border-gold/20 hover:border-gold/40 hover:shadow-[0_0_60px_rgba(184,155,74,0.15)] transition-all rounded-xl overflow-hidden">
            {/* Premium badge */}
            <div className="bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20 py-2 text-center border-b border-gold/20">
              <p className="text-gold text-xs uppercase tracking-[0.3em] font-medium">Processo Iniciático Completo</p>
            </div>

            <div className="p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <span className="text-3xl mb-3 block">{opus.symbol ?? ""}</span>
                <h3 className="font-display text-3xl md:text-4xl text-bone tracking-wide mb-2">{opus.name}</h3>
                <p className="text-gold uppercase tracking-wider mb-4">{opus.subtitle}</p>
                <p className="text-bone italic max-w-xl mx-auto">{opus.tagline}</p>
              </div>

              <EgyptianDivider className="mb-8" />

                <p className="text-sand/80 text-center max-w-2xl mx-auto mb-8">{opus.description}</p>

              {/* Duration and Format */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-graphite/40 p-6 rounded-xl border border-gold/10">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-5 h-5 text-gold" />
                    <h4 className="text-bone font-medium">Duração</h4>
                  </div>
                  <p className="text-gold text-lg font-display">{opus.duration}</p>
                </div>
                <div className="bg-graphite/40 p-6 rounded-xl border border-gold/10">
                  <h4 className="text-bone font-medium mb-4">Formato</h4>
                  <ul className="space-y-2">
                    {opus.format.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sand/70 text-sm">
                        <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Alchemical Phases */}
              <div className="mb-8">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Flame className="w-5 h-5 text-gold" />
                  <h4 className="text-bone font-display text-xl tracking-wide">As Fases do Processo</h4>
                </div>
                <AnimatedStagger className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {opus.phases.map((phase, i) => (
                    <AnimatedItem key={i}>
                      <motion.div
                        whileHover={{ y: -4 }}
                        className="bg-obsidian/60 p-5 rounded-xl border border-gold/10 hover:border-gold/30 transition-all text-center h-full"
                      >
                        <p className="text-gold font-display text-lg mb-1">{phase.name}</p>
                        <p className="text-bone text-sm font-medium mb-2">{phase.title}</p>
                        <p className="text-sand/60 text-xs">{phase.description}</p>
                      </motion.div>
                    </AnimatedItem>
                  ))}
                </AnimatedStagger>
              </div>

              {/* Objectives */}
              <div className="mb-8">
                <h4 className="text-bone text-sm uppercase tracking-wider mb-4 text-center">Objetivo do Opus Magnum</h4>
                <div className="flex flex-wrap justify-center gap-3">
                  {opus.objectives.map((obj, i) => (
                    <span
                      key={i}
                      className="bg-graphite/50 px-4 py-2 rounded-full text-sand/70 text-sm border border-gold/10"
                    >
                      {obj}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-center text-bone italic mb-8">{opus.closingNote}</p>

              {/* Indications */}
              <div className="mb-8 bg-graphite/30 p-6 rounded-xl border border-gold/10">
                <h4 className="text-bone text-sm uppercase tracking-wider mb-4">Indicado para quem</h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {opus.indications.map((item, i) => (
                    <p key={i} className="text-sand/70 text-sm">
                      • {item}
                    </p>
                  ))}
                </div>
              </div>

              {/* Price and CTA */}
              <div className="text-center bg-gradient-to-b from-gold/5 to-transparent p-8 rounded-xl border border-gold/20">
                <p className="text-sand/50 text-xs uppercase tracking-wider mb-2">Investimento</p>
                <p className="font-display text-5xl text-gold mb-2">{formatPrice(opus.price ?? 0)}</p>
                <p className="text-sand/60 text-sm mb-6">{opus.priceNote ?? opus.priceLabel}</p>
                <Button size="lg" className="group bg-gold hover:bg-gold-bright text-obsidian font-medium px-8">
                  {opus.cta ?? "Aplicar"}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </Card>
        </AnimatedCard>

        {/* Disclaimer */}
        <AnimatedSection>
          <div className="text-center">
            <p className="text-sand/50 text-xs uppercase tracking-wider mb-4">Posicionamento Importante</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {disclaimer.map((item, i) => (
                <p key={i} className="text-sand/60 text-sm">
                  • {item}
                </p>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
