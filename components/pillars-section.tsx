"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { EgyptianDivider } from "@/components/egyptian-decorations"
import { AnimatedSection, AnimatedStagger, AnimatedCard } from "@/components/animations"
import { SigilBody, SigilMind, SigilSoul } from "@/components/sigils"
import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n"

export function PillarsSection() {
  const { locale } = useI18n()

  const pillars =
    locale === "pt"
      ? [
          {
            icon: SigilBody,
            title: "Corpo",
            subtitle: "Energia, Presença & Alquimia Corporal",
            description:
              "Trabalhos que atuam diretamente no campo energético. Mapeamento de tensões, respiração consciente e reorganização da presença física. Como o pilar Djed que sustenta estabilidade.",
            symbol: "Djed + Algiz",
            bgClass: "bg-pillar-body",
            image: "/images/pillar-1.jpg",
          },
          {
            icon: SigilMind,
            title: "Mente",
            subtitle: "Ritmos, Símbolos & Correspondências",
            description:
              "Tarot, Astrologia, Runas, Cabala. Ferramentas para entender onde você está, seus ciclos e padrões. O Ankh une céu e terra, o Valknut conecta destinos.",
            symbol: "Ankh + Valknut",
            bgClass: "bg-pillar-mind",
            image: "/images/pillar-2.jpg",
          },
          {
            icon: SigilSoul,
            title: "Alma",
            subtitle: "Sentido, Propósito & Ação Consciente",
            description:
              "Intervenções para mover o que está parado. Propósito, transformação alquímica, rituais de direção. Sob a proteção do Olho de Hórus.",
            symbol: "Olho de Hórus + Algiz",
            bgClass: "bg-pillar-soul",
            image: "/images/pillar-3.jpg",
          },
        ]
      : [
          {
            icon: SigilBody,
            title: "Body",
            subtitle: "Energy, Presence & Body Alchemy",
            description:
              "Work that acts directly on the energy field. Mapping tensions, conscious breathing, and physical presence reorganization. Like the Djed pillar that sustains stability.",
            symbol: "Djed + Algiz",
            bgClass: "bg-pillar-body",
            image: "/stone-iron-salt-texture-with-protective-nordic-run.jpg",
          },
          {
            icon: SigilMind,
            title: "Mind",
            subtitle: "Rhythms, Symbols & Correspondences",
            description:
              "Tarot, Astrology, Runes, Kabbalah. Tools to understand where you are, your cycles and patterns. The Ankh unites heaven and earth, the Valknut connects destinies.",
            symbol: "Ankh + Valknut",
            bgClass: "bg-pillar-mind",
            image: "/abstract-tarot-cards-and-astrological-chart-lines-.jpg",
          },
          {
            icon: SigilSoul,
            title: "Soul",
            subtitle: "Meaning, Purpose & Conscious Action",
            description:
              "Interventions to move what is stuck. Purpose, alchemical transformation, direction rituals. Under the protection of the Eye of Horus.",
            symbol: "Eye of Horus + Algiz",
            bgClass: "bg-pillar-soul",
            image: "/minimalist-ritual-altar-with-low-candles--alchemic.jpg",
          },
        ]

  const labels =
    locale === "pt"
      ? {
          label: "Os Três Pilares",
          title: "CORPO, MENTE E ALMA",
          description:
            "Três dimensões. Uma integração. Cada pilar cuida de um aspecto da sua existência — e trabalham juntos para resultados reais.",
        }
      : {
          label: "The Three Pillars",
          title: "BODY, MIND AND SOUL",
          description:
            "Three dimensions. One integration. Each pillar takes care of an aspect of your existence — and they work together for real results.",
        }

  return (
    <section id="pilares" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <motion.svg
          viewBox="0 0 400 400"
          className="w-[600px] h-[600px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Triple interconnected circles */}
          <motion.circle
            cx="200"
            cy="140"
            r="80"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-gold animate-draw-line"
          />
          <motion.circle
            cx="140"
            cy="240"
            r="80"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-gold animate-draw-line"
            style={{ animationDelay: "0.3s" }}
          />
          <motion.circle
            cx="260"
            cy="240"
            r="80"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-gold animate-draw-line"
            style={{ animationDelay: "0.6s" }}
          />
          {/* Central triangle */}
          <motion.path
            d="M200,140 L140,240 L260,240 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-gold animate-draw-line"
            style={{ animationDelay: "0.9s" }}
          />
        </motion.svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <p className="font-display text-gold tracking-[0.3em] uppercase text-xs mb-4">{labels.label}</p>

          <h2 className="font-display text-3xl md:text-4xl tracking-wide mb-6 text-bone">{labels.title}</h2>

          <EgyptianDivider className="mb-6" />

          <p className="text-sand/80 max-w-2xl mx-auto">{labels.description}</p>
        </AnimatedSection>

        <AnimatedStagger className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <AnimatedCard key={index}>
              <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                <Card className="etched bg-graphite/65 backdrop-blur border-0 hover:border-gold/30 transition-all duration-300 h-full group rounded-2xl shadow-[0_18px_60px_rgba(0,0,0,.55)] overflow-hidden">
                  <div className="relative h-32 overflow-hidden">
                    <Image
                      src={pillar.image || "/placeholder.svg"}
                      alt=""
                      fill
                      className="object-cover image-unify opacity-40 group-hover:opacity-60 transition-opacity duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-graphite" />
                  </div>

                  <CardHeader className="text-center pb-4 relative -mt-8">
                    <motion.div
                      className="mx-auto mb-4 opacity-90 group-hover:opacity-100 transition-opacity relative"
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      <pillar.icon className="w-16 h-16 relative z-10" />
                    </motion.div>
                    <CardTitle className="font-display text-gold text-xl tracking-wide">{pillar.title}</CardTitle>
                    <p className="text-sand/70 text-sm uppercase tracking-wider">{pillar.subtitle}</p>
                    {pillar.symbol && (
                      <p className="text-gold-muted/50 text-xs mt-2 tracking-widest">{pillar.symbol}</p>
                    )}
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-sand/80 leading-relaxed">{pillar.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedCard>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  )
}
