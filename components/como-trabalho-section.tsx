"use client"

import { EgyptianDivider } from "@/components/egyptian-decorations"
import { AnimatedSection, AnimatedStagger, AnimatedItem } from "@/components/animations"
import { motion } from "framer-motion"
import { siteConfig } from "@/lib/site-data"
import { Eye, Brain, Zap } from "lucide-react"

const movementIcons = [Eye, Brain, Zap]

export function ComoTrabalhoSection() {
  const content = siteConfig.comoTrabalho

  return (
    <section id="como-trabalho" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-12">
          <p className="font-display text-gold tracking-[0.3em] uppercase text-xs mb-4">Metodologia</p>
          <h2 className="font-display text-3xl md:text-4xl tracking-wide mb-8 text-bone">{content.title}</h2>
          <EgyptianDivider className="mb-8" />
          <p className="text-sand/80 max-w-xl mx-auto">{content.intro}</p>
        </AnimatedSection>

        <AnimatedStagger className="grid md:grid-cols-3 gap-6 mb-12">
          {content.movements.map((movement, i) => {
            const Icon = movementIcons[i]
            return (
              <AnimatedItem key={i}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="text-center p-6 rounded-xl bg-graphite/50 border border-gold/10 hover:border-gold/30 transition-all"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full border border-gold/30 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-display text-xl text-gold mb-2">{movement.name}</h3>
                  <p className="text-sand/70 text-sm">{movement.description}</p>
                </motion.div>
              </AnimatedItem>
            )
          })}
        </AnimatedStagger>

        <AnimatedSection>
          <p className="text-bone text-center font-display italic font-bold text-xl">{content.closing}</p>
        </AnimatedSection>
      </div>
    </section>
  )
}
