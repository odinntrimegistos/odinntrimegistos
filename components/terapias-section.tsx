"use client"

import { motion } from "framer-motion"
import { useSiteConfig } from "@/lib/site-config"
import { AnimatedSection, AnimatedCard } from "@/components/animations"

export function TerapiasSection() {
  const siteConfig = useSiteConfig()
  const content = siteConfig.terapias

  if (!content) return null

  return (
    <section id="alquimia" className="relative overflow-hidden bg-obsidian py-12 md:py-16">
      {/* Gradientes de transição superior e inferior com fade */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.1 }}
        className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-graphite/80 via-graphite/30 to-transparent pointer-events-none z-10"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.1 }}
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-graphite/80 via-graphite/30 to-transparent pointer-events-none z-10"
      />
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-12">
          <p className="font-display text-gold tracking-[0.3em] uppercase text-xs mb-4">{content.subtitle}</p>
          <h2 className="font-display text-4xl md:text-5xl text-bone mb-4 uppercase">{content.title}</h2>
          {content.intro && <p className="text-sand/60 max-w-2xl mx-auto">{content.intro}</p>}
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {content.programs.map((program, i) => (
            <AnimatedCard key={i} className="bg-graphite/40 backdrop-blur-sm border border-sand/10 rounded-lg p-6 hover:border-gold/30 transition-all flex flex-col">
              {/* Type Badge */}
              <div className="text-xs font-mono text-gold/70 mb-3 uppercase tracking-wider border-b border-sand/10 pb-3">
                {program.type}
              </div>

              {/* Name */}
              <h3 className="font-display text-2xl text-bone mb-2">{program.name}</h3>

              {/* Tagline */}
              <p className="text-sand/70 italic text-sm mb-4">{program.tagline}</p>

              {/* Description */}
              <p className="text-sand/80 text-sm mb-6 leading-relaxed flex-grow">{program.description}</p>

              {/* Price */}
              <div className="mb-6">
                <div className="text-gold font-display text-3xl">
                  R$ {program.price}
                  {program.priceLabel && <span className="text-lg text-sand/60"> {program.priceLabel}</span>}
                </div>
              </div>

              {/* CTA */}
              <motion.a
                href="https://wa.me/5591981429696"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3 bg-gold/10 hover:bg-gold/20 border border-gold/30 rounded text-gold font-mono text-sm transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {program.ctaLabel}
              </motion.a>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}
