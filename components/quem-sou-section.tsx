"use client"

import { EgyptianDivider } from "@/components/egyptian-decorations"
import { AnimatedSection, AnimatedStagger, AnimatedItem } from "@/components/animations"
import { motion } from "framer-motion"
import { siteConfig } from "@/lib/site-data"

export function QuemSouSection() {
  const content = siteConfig.quemSouEu

  return (
    <section id="quem-sou" className="py-24 md:py-32 relative overflow-hidden bg-graphite/50">
      <div className="absolute inset-0 grain-animated" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-12">
          <p className="font-display text-gold tracking-[0.3em] uppercase text-xs mb-4">Trajetória</p>
          <h2 className="font-display text-3xl md:text-4xl tracking-wide mb-8 text-bone">{content.title}</h2>
          <EgyptianDivider className="mb-8" />
        </AnimatedSection>

        <AnimatedStagger className="space-y-6">
          {content.blocks
            ? content.blocks.map((block, i) => (
                <AnimatedItem key={i}>
                  <h3 className="font-display text-lg text-gold mb-2">{block.heading}</h3>
                  <p className="text-sand/80 leading-relaxed">{block.text}</p>
                </AnimatedItem>
              ))
            : content.paragraphs.map((paragraph, i) => (
                <AnimatedItem key={i}>
                  <p className="text-sand/80 leading-relaxed">{paragraph}</p>
                </AnimatedItem>
              ))}

          <AnimatedItem>
            <div className="bg-obsidian/40 border border-gold/10 rounded-xl p-6 my-8">
              <ul className="space-y-3">
                {content.traditions.map((tradition, i) => (
                  <li key={i} className="text-sand/70 text-sm flex items-start gap-2">
                    <span className="text-gold mt-0.5">•</span>
                    {tradition}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedItem>

          <AnimatedItem>
            <motion.p
              className="text-bone text-lg md:text-xl font-display text-center pt-4 border-t border-gold/20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {content.closing}
            </motion.p>
          </AnimatedItem>
        </AnimatedStagger>
      </div>
    </section>
  )
}
