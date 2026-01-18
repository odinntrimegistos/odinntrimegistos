"use client"

import Image from "next/image"
import ImageBackground from "@/components/image-background"
import { EgyptianDivider } from "@/components/egyptian-decorations"
import { AnimatedSection, AnimatedStagger, AnimatedItem } from "@/components/animations"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useI18n } from "@/lib/i18n"
import { siteConfig } from "@/lib/site-data"
import { Repeat, XCircle, Lock, Compass } from "lucide-react"
import { useScroll, useTransform } from "framer-motion"

const situationIcons = [Repeat, XCircle, Lock, Compass]

export function AboutSection() {
  const { locale } = useI18n()
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const imageX = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"])

  const content = siteConfig.content.whenItMakesSense

  return (
    <section id="sobre" ref={sectionRef} className="py-24 md:py-32 bg-graphite/50 relative overflow-hidden">
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
      <motion.div className="absolute inset-0 opacity-20" style={{ x: imageX }}>
        <ImageBackground
          src="/images/about.jpg"
          alt="background"
          wrapperClassName="absolute inset-0"
          imgClassName="object-cover image-unify"
          overlayClassName="absolute inset-0 bg-gradient-to-r from-graphite via-graphite/80 to-graphite"
        />
      </motion.div>

      <div className="absolute inset-0 grain-animated" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-12">
          <p className="font-display text-gold tracking-[0.3em] uppercase text-xs mb-4">Propósito</p>

          <h2 className="font-display text-3xl md:text-4xl tracking-wide mb-8 text-bone">{content.title}</h2>

          <EgyptianDivider className="mb-8" />
        </AnimatedSection>

        <AnimatedStagger className="space-y-8 max-w-3xl mx-auto">
          <AnimatedItem>
            <p className="text-bone text-xl md:text-2xl text-center font-display">{content.intro}</p>
          </AnimatedItem>

          <AnimatedItem>
            <p className="text-sand/80 text-center mb-6">{content.subtitle}</p>
          </AnimatedItem>

          <AnimatedItem>
            <div className="grid sm:grid-cols-2 gap-4">
              {content.situations.map((situation, index) => {
                const Icon = situationIcons[index]
                return (
                  <motion.div
                    key={index}
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-obsidian/40 border border-gold/10 hover:border-gold/30 transition-all"
                  >
                    <Icon className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-sand/80 text-sm leading-relaxed">{situation}</span>
                  </motion.div>
                )
              })}
            </div>
          </AnimatedItem>

          <AnimatedItem>
            <motion.p
              className="text-bone italic border-l-2 border-gold/40 pl-6 py-3 bg-gold/5 text-left etched rounded-r-lg text-base md:text-lg"
              whileInView={{ borderColor: "rgba(184, 155, 74, 0.6)" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {content.conclusion}
            </motion.p>
          </AnimatedItem>
        </AnimatedStagger>
      </div>
    </section>
  )
}
