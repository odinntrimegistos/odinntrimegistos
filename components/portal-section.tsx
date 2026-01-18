"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { EgyptianDivider } from "@/components/egyptian-decorations"
import { AnimatedSection, AnimatedStagger, AnimatedCard } from "@/components/animations"

const portalItems = [
  {
    title: "O MAGO",
    subtitle: "Origem, método, postura",
    description: "A história, a arquitetura do trabalho e a ética que sustenta o processo.",
    href: "/o-mago",
  },
  {
    title: "O VER",
    subtitle: "Diagnóstico do real",
    description: "Tarot, Runas e Astrologia para mapear padrão, tempo e escolha com precisão.",
    href: "/o-ver",
  },
  {
    title: "O AGIR",
    subtitle: "Execução e assentamento",
    description: "Rituais e mentorias para transformar visão em direção — e direção em ação.",
    href: "/o-agir",
  },
  {
    title: "A ORDEM",
    subtitle: "Continuidade e progressão",
    description: "O Círculo da Chave: um eixo para sustentar caminho, métrica e presença.",
    href: "/a-ordem",
  },
]

export function PortalSection() {
  return (
    <section id="portal" className="relative overflow-hidden bg-graphite/50">
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
        <AnimatedSection className="text-center mb-14">
          <p className="font-display text-gold tracking-[0.3em] uppercase text-xs mb-4">O Portal</p>
          <h2 className="font-display text-3xl md:text-4xl tracking-wide mb-4 text-bone">ESCOLHA A ENTRADA</h2>
          <p className="text-sand/70 max-w-2xl mx-auto">Quatro portas. Um eixo: ver com honestidade, agir com intenção.</p>
          <EgyptianDivider className="mt-8" />
        </AnimatedSection>

        <AnimatedStagger className="grid md:grid-cols-2 gap-6">
          {portalItems.map((item) => (
            <AnimatedCard key={item.href}>
              <motion.div whileHover={{ y: -4 }} className="h-full">
                <Link href={item.href} className="block h-full">
                  <Card className="etched bg-obsidian/60 backdrop-blur border-0 hover:border-gold/30 transition-all h-full rounded-xl group">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-display text-2xl text-bone tracking-wide">{item.title}</h3>
                          <p className="text-gold/80 text-sm mt-1">{item.subtitle}</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gold/60 group-hover:text-gold group-hover:translate-x-0.5 transition-all" />
                      </div>
                      <p className="text-sand/70 mt-4 leading-relaxed">{item.description}</p>
                      <div className="mt-6 h-px bg-gradient-to-r from-gold/20 via-gold/10 to-transparent" />
                      <p className="mt-4 text-gold/70 text-sm tracking-wide">Entrar</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            </AnimatedCard>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  )
}
