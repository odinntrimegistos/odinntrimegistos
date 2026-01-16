"use client"

import { ShieldCheck, Heart, User } from "lucide-react"
import { EgyptianDivider } from "@/components/egyptian-decorations"
import { AnimatedSection, AnimatedStagger, AnimatedItem } from "@/components/animations"
import { motion } from "framer-motion"
import { siteConfig } from "@/lib/site-data"

const ethicsIcons = [ShieldCheck, Heart, User]

export function EthicsSection() {
  const etica = siteConfig.etica

  return (
    <section id="etica" className="py-24 md:py-32 relative bg-graphite/50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-12">
          <p className="font-display text-gold tracking-[0.3em] uppercase text-xs mb-4">Postura</p>
          <h2 className="font-display text-3xl md:text-4xl tracking-wide mb-6 text-bone">{etica.title}</h2>
          <EgyptianDivider />
        </AnimatedSection>

        <AnimatedStagger className="grid md:grid-cols-3 gap-6">
          {etica.items.map((item, i) => {
            const Icon = ethicsIcons[i]
            return (
              <AnimatedItem key={i}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="text-center p-6 rounded-xl bg-obsidian/50 border border-gold/10 hover:border-gold/30 transition-all"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full border border-gold/30 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <p className="text-sand/80 text-sm">{item}</p>
                </motion.div>
              </AnimatedItem>
            )
          })}
        </AnimatedStagger>
      </div>
    </section>
  )
}
