"use client"

import { ShieldCheck, Heart, User } from "lucide-react"
import { EgyptianDivider } from "@/components/egyptian-decorations"
import { AnimatedSection, AnimatedStagger, AnimatedItem } from "@/components/animations"
import { motion } from "framer-motion"
import { useSiteConfig } from "@/lib/site-config"
import { useI18n } from "@/lib/i18n"

const ethicsIcons = [ShieldCheck, Heart, User]

export function EthicsSection() {
  const siteConfig = useSiteConfig()
  const { locale } = useI18n()
  const etica = siteConfig.etica

  const labels = locale === "pt" ? { eyebrow: "Postura" } : { eyebrow: "Ethos" }

  return (
    <section id="etica" className="relative bg-graphite/50 overflow-hidden">
      {/* Gradientes de transição superior e inferior com fade */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.1 }}
        className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-obsidian/80 via-obsidian/30 to-transparent pointer-events-none z-10"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.1 }}
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-obsidian/80 via-obsidian/30 to-transparent pointer-events-none z-10"
      />
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-12">
          <p className="font-display text-gold tracking-[0.3em] uppercase text-xs mb-4">{labels.eyebrow}</p>
          {etica?.title && (
            <h2 className="font-display text-3xl md:text-4xl tracking-wide mb-6 text-bone">{etica.title}</h2>
          )}
          <EgyptianDivider />
        </AnimatedSection>

        {Array.isArray(etica?.items) && (
          <AnimatedStagger className="grid md:grid-cols-3 gap-6">
          {etica.items.map((item: string, i: number) => {
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
        )}
      </div>
    </section>
  )
}
