"use client"

import { EgyptianDivider } from "@/components/egyptian-decorations"
import { AnimatedSection, AnimatedStagger, AnimatedItem } from "@/components/animations"
import { motion } from "framer-motion"
import { useSiteConfig } from "@/lib/use-site-config"
import { useI18n } from "@/lib/i18n"
import { Eye, Brain, Zap } from "lucide-react"

const movementIcons = [Eye, Brain, Zap]

export function ComoTrabalhoSection() {
  const siteConfig = useSiteConfig()
  const { locale } = useI18n()
  const content = siteConfig.comoTrabalho
  const steps = content.steps ?? []
  const introParagraphs = content.introParagraphs ?? []

  const labels = locale === "pt" ? { eyebrow: "Como eu trabalho" } : { eyebrow: "How I Work" }

  return (
    <section id="metodologia" className="relative overflow-hidden py-16 md:py-20">
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
        <AnimatedSection className="text-center mb-8">
          <p className="font-display text-gold tracking-[0.3em] uppercase text-xs mb-4">{labels.eyebrow}</p>
          <h2 className="font-display text-4xl md:text-5xl tracking-wide mb-8 text-bone uppercase">{content.title}</h2>
          <EgyptianDivider className="mb-8" />
          {content.lead ? (
            <p className="text-bone font-display text-lg md:text-xl max-w-2xl mx-auto mb-4">{content.lead}</p>
          ) : null}

          <p className="text-sand/80 max-w-2xl mx-auto leading-relaxed">{content.intro}</p>

          {introParagraphs.length ? (
            <div className="mt-6 space-y-4 max-w-2xl mx-auto text-left">
              {introParagraphs.map((p, idx) => (
                // eslint-disable-next-line react/no-array-index-key
                <p key={idx} className="text-sand/75 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          ) : null}
        </AnimatedSection>

        {((steps.length ? steps : content.movements ?? []).length > 0) && (
        <AnimatedStagger className="grid md:grid-cols-3 gap-5 mb-8">
          {(steps.length ? steps : content.movements ?? []).map((stepOrMovement: { number?: string; title?: string; subtitle?: string; description?: string; name?: string; paragraphs?: string[] }, i: number) => {
            const Icon = movementIcons[i] ?? Eye
            const title = stepOrMovement.title ? `${stepOrMovement.number}. ${stepOrMovement.title}` : stepOrMovement.name
            const subtitle = stepOrMovement.subtitle
            const text = stepOrMovement.paragraphs ? stepOrMovement.paragraphs.join(" ") : stepOrMovement.description

            return (
              <AnimatedItem key={i}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="text-left p-5 rounded-xl bg-graphite/50 border border-gold/10 hover:border-gold/30 transition-all h-full"
                >
                  <div className="w-12 h-12 mb-3 rounded-full border border-gold/30 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-display text-lg text-gold mb-1">{title}</h3>
                  {subtitle ? <p className="text-sand/70 text-xs mb-2">({subtitle})</p> : null}
                  <p className="text-sand/75 text-sm leading-relaxed">{text}</p>
                </motion.div>
              </AnimatedItem>
            )
          })}
        </AnimatedStagger>
        )}

        {content.note && (
          <AnimatedSection>
            <p className="text-sand/60 text-center text-sm mt-12 pt-8">{content.note}</p>
          </AnimatedSection>
        )}
      </div>
    </section>
  )
}
