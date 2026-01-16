"use client"

import { Card, CardContent } from "@/components/ui/card"
import { EgyptianDivider } from "@/components/egyptian-decorations"
import { AnimatedSection, AnimatedStagger, AnimatedCard, AnimatedItem } from "@/components/animations"
import { siteConfig } from "@/lib/site-data"
import { motion } from "framer-motion"
import { Key, Gift, Scale } from "lucide-react"
import ImageBackground from "@/components/image-background"

export function CirculoChaveSection() {
  const circulo = siteConfig.circuloChave

  return (
    <section id="circulo" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <ImageBackground
          src="/images/circulo.jpg"
          alt="circulo background"
          wrapperClassName="absolute inset-0"
          imgClassName="object-cover image-unify opacity-22"
          overlayClassName="absolute inset-0 bg-gradient-to-b from-graphite/70 to-graphite/40"
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          
          <h2 className="font-display text-3xl md:text-4xl tracking-wide mb-2 text-bone">{circulo.title}</h2>
          <p className="text-gold">{circulo.subtitle}</p>
          <EgyptianDivider className="my-8" />

          <div className="inline-flex items-center gap-3 bg-graphite/50 border border-gold/20 rounded-full px-6 py-3">
            <Key className="w-5 h-5 text-gold" />
            <span className="text-bone">
              Moeda: <span className="text-gold">{circulo.moeda.name}</span>
            </span>
            <span className="text-sand/50">|</span>
            <span className="text-sand/70 text-sm">{circulo.moeda.rule}</span>
          </div>
        </AnimatedSection>

        {/* Cargos */}
        <div className="mb-16">
          <AnimatedSection className="text-center mb-8">
            <h3 className="font-display text-xl text-gold">{circulo.cargos.title}</h3>
          </AnimatedSection>

          <AnimatedStagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {circulo.cargos.ranks.map((rank, i) => (
              <AnimatedCard key={i}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className={`h-full ${rank.highlight ? "md:col-span-2 lg:col-span-1" : ""}`}
                >
                  <Card
                    className={`etched bg-obsidian/60 backdrop-blur border-0 transition-all h-full rounded-xl ${rank.highlight ? "border-gold/30 hover:border-gold/50" : "hover:border-gold/20"}`}
                  >
                    {rank.highlight && (
                      <div className="bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20 py-2 text-center border-b border-gold/20">
                        <p className="text-gold text-xs uppercase tracking-wider">Grau Máximo</p>
                      </div>
                    )}
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl">{rank.symbol}</span>
                        <div>
                          <h4 className="font-display text-lg text-bone">{rank.name}</h4>
                          <p className="text-gold/80 text-xs">{rank.range}</p>
                        </div>
                      </div>
                      <p className="text-sand/70 text-sm mb-4">{rank.description}</p>
                      <ul className="space-y-1.5">
                        {rank.benefits.map((benefit, j) => (
                          <li key={j} className="text-sand/60 text-xs flex items-start gap-2">
                            <span className="text-gold">•</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                      {rank.note && (
                        <p className="text-bone text-xs italic mt-4 pt-3 border-t border-gold/10">{rank.note}</p>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedCard>
            ))}
          </AnimatedStagger>
        </div>

        {/* Extras and Rules */}
        <AnimatedStagger className="grid md:grid-cols-2 gap-6">
          <AnimatedItem>
            <div className="bg-graphite/50 border border-gold/10 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Gift className="w-5 h-5 text-gold" />
                <h4 className="font-display text-lg text-bone">{circulo.extras.title}</h4>
              </div>
              <ul className="space-y-2">
                {circulo.extras.items.map((item, i) => (
                  <li key={i} className="text-sand/70 text-sm flex items-start gap-2">
                    <span className="text-gold">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedItem>

          <AnimatedItem>
            <div className="bg-graphite/50 border border-gold/10 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-5 h-5 text-gold" />
                <h4 className="font-display text-lg text-bone">{circulo.regras.title}</h4>
              </div>
              <ul className="space-y-2">
                {circulo.regras.items.map((item, i) => (
                  <li key={i} className="text-sand/70 text-sm flex items-start gap-2">
                    <span className="text-gold">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedItem>
        </AnimatedStagger>
      </div>
    </section>
  )
}
