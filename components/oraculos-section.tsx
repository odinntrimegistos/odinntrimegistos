"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { EgyptianDivider } from "@/components/egyptian-decorations"
import { AnimatedSection, AnimatedStagger, AnimatedCard } from "@/components/animations"
import { siteConfig, formatPrice } from "@/lib/site-data"
import { motion } from "framer-motion"
import { Clock } from "lucide-react"
import Link from "next/link"
import ImageBackground from "@/components/image-background"

export function OraculosSection() {
  const oraculos = siteConfig.oraculos
  const tarot = siteConfig.tarot
  const runas = siteConfig.runas
  const whatsappLink = siteConfig.links.whatsapp

  return (
    <section id="oraculos" className="py-24 md:py-32 relative overflow-hidden bg-graphite/50">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <ImageBackground
          src="/images/oraculos-1.jpg"
          alt="oraculos background"
          wrapperClassName="absolute inset-0"
          imgClassName="object-cover image-unify opacity-30"
          overlayClassName="absolute inset-0 bg-gradient-to-r from-graphite/70 to-graphite/40"
        />
      </div>
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Intro */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl tracking-wide mb-2 text-bone">{oraculos.title}</h2>
          <p className="font-display text-xl text-gold/80 mb-6">{oraculos.subtitle}</p>
          <EgyptianDivider className="mb-8" />

          <div className="max-w-2xl mx-auto space-y-4 text-left">
            <p className="text-bone text-lg">{oraculos.intro}</p>
            <p className="text-sand/80">{oraculos.description}</p>
            <div className="grid md:grid-cols-2 gap-4 py-4">
              <p className="text-sand/70 italic font-bold">"{oraculos.tarotDesc}"</p>
              <p className="text-sand/70 italic font-bold">"{oraculos.runasDesc}"</p>
            </div>
            <p className="text-sand/70 text-sm">{oraculos.note}</p>
            <p className="text-bone font-display italic text-center pt-4 text-xl font-bold">{oraculos.closing}</p>
          </div>
        </AnimatedSection>

        {/* TAROT */}
        <div className="mb-20">
          <AnimatedSection className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              
              <h3 className="font-display text-2xl md:text-3xl text-gold tracking-wide">{tarot.title}</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-gold/20 to-transparent" />
            </div>
          </AnimatedSection>

          <AnimatedStagger className="grid md:grid-cols-2 gap-5 mb-8">
            {tarot.services.map((service, i) => (
              <AnimatedCard key={i}>
                <motion.div whileHover={{ y: -4 }} className="h-full">
                  <Card className="etched bg-obsidian/60 backdrop-blur border-0 hover:border-gold/30 transition-all h-full rounded-xl group">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-bone text-lg font-display tracking-wide">{service.name}</CardTitle>
                      <div className="flex items-center justify-between mt-3">
                        <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border bg-gold/10 text-gold border-gold/30">
                          <Clock className="w-3 h-3" />
                          {service.duration}
                        </span>
                        <span className="font-display text-gold font-semibold text-xl">
                          {formatPrice(service.price)}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sand/70 text-sm">{service.description}</p>
                      <Link
                        href={`${whatsappLink}?text=${encodeURIComponent(`Olá, gostaria de agendar: ${service.name}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gold/70 hover:text-gold text-sm transition-colors"
                      >
                        {siteConfig.hero?.cta ?? "Agendar →"}
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedCard>
            ))}
          </AnimatedStagger>

          {/* Tarot por Pergunta */}
          <AnimatedSection>
            <div className="bg-obsidian/40 border border-gold/10 rounded-xl p-6">
              <h4 className="font-display text-lg text-bone mb-4">{tarot.perguntas.title}</h4>
              <div className="grid sm:grid-cols-3 gap-4">
                {tarot.perguntas.items.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="bg-graphite/50 p-4 rounded-lg border border-gold/10 hover:border-gold/30 transition-all text-center"
                  >
                    <p className="text-bone font-display mb-1">{item.name}</p>
                    <p className="text-sand/60 text-xs mb-2">{item.detail}</p>
                    <p className="text-gold font-display text-lg">{formatPrice(item.price)}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* RUNAS */}
        <div>
          <AnimatedSection className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              
              <h3 className="font-display text-2xl md:text-3xl text-gold tracking-wide">{runas.title}</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-gold/20 to-transparent" />
            </div>
          </AnimatedSection>

          <AnimatedStagger className="grid md:grid-cols-2 gap-5">
            {runas.services.map((service, i) => (
              <AnimatedCard key={i}>
                <motion.div whileHover={{ y: -4 }} className="h-full">
                  <Card className="etched bg-obsidian/60 backdrop-blur border-0 hover:border-bone/20 transition-all h-full rounded-xl group">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-bone text-lg font-display tracking-wide">{service.name}</CardTitle>
                      <div className="flex items-center justify-between mt-3">
                        <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border bg-bone/10 text-bone border-bone/30">
                          <Clock className="w-3 h-3" />
                          {service.duration}
                        </span>
                        <span className="font-display text-gold font-semibold text-xl">
                          {formatPrice(service.price)}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sand/70 text-sm">{service.description}</p>
                      <Link
                        href={`${whatsappLink}?text=${encodeURIComponent(`Olá, gostaria de agendar: ${service.name}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gold/70 hover:text-gold text-sm transition-colors"
                      >
                        {siteConfig.hero?.cta ?? "Agendar →"}
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedCard>
            ))}
          </AnimatedStagger>
        </div>
      </div>
    </section>
  )
}
