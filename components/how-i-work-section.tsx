"use client"

import { EgyptianDivider } from "@/components/egyptian-decorations"
import { AnimatedSection, AnimatedStagger, AnimatedItem } from "@/components/animations"
import { motion } from "framer-motion"
import { siteConfig } from "@/lib/site-data"
import { Sparkles, Clock, Flame } from "lucide-react"

const toolIcons = [Sparkles, Clock, Flame]

export function HowIWorkSection() {
  const content = siteConfig.content.howIWork

  return (
    <section id="como-trabalho" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-12">
          <p className="font-display text-gold tracking-[0.3em] uppercase text-xs mb-4">Metodologia</p>

          <h2 className="font-display text-3xl md:text-4xl tracking-wide mb-8 text-bone">{content.title}</h2>

          <EgyptianDivider className="mb-8" />

          <p className="text-sand/80 max-w-2xl mx-auto">{content.intro}</p>
        </AnimatedSection>

        <AnimatedStagger className="space-y-6 max-w-2xl mx-auto mb-12">
          {content.tools.map((tool, index) => {
            const Icon = toolIcons[index]
            return (
              <AnimatedItem key={index}>
                <motion.div
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 p-5 rounded-xl bg-graphite/50 border border-gold/10 hover:border-gold/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg border border-gold/30 flex items-center justify-center group-hover:bg-gold/10 transition-all">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <span className="text-gold font-display text-lg">{tool.name}</span>
                    <span className="text-sand/70 ml-2">{tool.description}</span>
                  </div>
                </motion.div>
              </AnimatedItem>
            )
          })}
        </AnimatedStagger>

        <AnimatedItem>
          <motion.p
            className="text-sand/80 text-center max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {content.conclusion}
          </motion.p>
        </AnimatedItem>
      </div>
    </section>
  )
}
