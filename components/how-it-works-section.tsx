"use client"

import { MessageCircle, Search, Sparkles, CheckCircle } from "lucide-react"
import { EgyptianDivider } from "@/components/egyptian-decorations"
import { AnimatedSection, AnimatedStagger, AnimatedItem } from "@/components/animations"
import { motion } from "framer-motion"
import { siteConfig } from "@/lib/site-data"

const movements = siteConfig.comoTrabalho?.movements || []
const steps = movements.map((m: { number: string; title: string; subtitle: string; description: string; name?: string }, i: number) => {
  const icons = [MessageCircle, Search, Sparkles, CheckCircle]
  return {
    icon: icons[i] ?? MessageCircle,
    number: String(i + 1).padStart(2, "0"),
    title: m.title,
    description: m.description,
  }
})

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="relative overflow-hidden">
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
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="font-display text-gold tracking-[0.3em] uppercase text-xs mb-4">O Processo</p>

          <h2 className="font-display text-3xl md:text-4xl tracking-wide mb-6 text-bone">{siteConfig.comoTrabalho?.title ?? "COMO FUNCIONA"}</h2>

          <EgyptianDivider className="mb-6" />

          <p className="text-sand/80 max-w-2xl mx-auto">{siteConfig.comoTrabalho?.intro ?? "Simples e direto. Quatro passos entre você e a clareza que busca."}</p>
        </AnimatedSection>

        <AnimatedStagger className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <AnimatedItem key={index}>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className="flex gap-5 group etched rounded-xl p-5 bg-graphite/40 hover:border-gold/30 transition-all"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 border border-gold/30 flex items-center justify-center group-hover:border-gold/60 group-hover:bg-gold/5 transition-all duration-300 rounded-lg">
                    <step.icon className="w-6 h-6 text-gold" />
                  </div>
                </div>
                <div>
                  <span className="text-gold/50 text-xs tracking-widest">{step.number}</span>
                  <h3 className="font-display text-lg text-bone mb-2 tracking-wide">{step.title}</h3>
                  <p className="text-sand/70 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            </AnimatedItem>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  )
}
