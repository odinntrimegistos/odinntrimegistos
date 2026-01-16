"use client"

import { Card, CardContent } from "@/components/ui/card"
import { EgyptianDivider } from "@/components/egyptian-decorations"
import { AnimatedSection, AnimatedStagger, AnimatedCard } from "@/components/animations"
import { siteConfig, formatPrice } from "@/lib/site-data"
import { motion } from "framer-motion"
import Link from "next/link"
import ImageBackground from "@/components/image-background"

export function CombosSection() {
  const combos = siteConfig.combos
  const whatsappLink = siteConfig.links.whatsapp

  return (
    <section id="combos" className="py-24 md:py-32 relative overflow-hidden bg-graphite/50">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <ImageBackground
          src="/images/combo-1.jpg"
          alt="combos background"
          wrapperClassName="absolute inset-0"
          imgClassName="object-cover image-unify opacity-20"
          overlayClassName="absolute inset-0 bg-gradient-to-b from-graphite/60 to-graphite/30"
        />
      </div>
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <p className="font-display text-gold tracking-[0.3em] uppercase text-xs mb-4">Caminhos Recomendados</p>
          <h2 className="font-display text-3xl md:text-4xl tracking-wide mb-2 text-bone">COMBOS</h2>
          <p className="text-sand/70 mb-6">Pacotes pensados para necessidades específicas</p>
          <EgyptianDivider />
        </AnimatedSection>

        {/* Combos dos Oráculos */}
        <div className="mb-16">
          <AnimatedSection className="mb-8">
            <h3 className="font-display text-xl text-gold mb-2">{combos.oraculos.title}</h3>
            <p className="text-sand/60 text-sm">{combos.oraculos.subtitle}</p>
          </AnimatedSection>

          <AnimatedStagger className="grid md:grid-cols-2 gap-5">
            {combos.oraculos.items.map((combo, i) => (
              <AnimatedCard key={i}>
                <motion.div whileHover={{ y: -4 }} className="h-full">
                  <Card className="etched bg-obsidian/60 backdrop-blur border-0 hover:border-gold/30 transition-all h-full rounded-xl">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3 mb-4">
                        <span className="text-2xl">{combo.symbol}</span>
                        <div className="flex-1">
                          <h4 className="font-display text-lg text-bone">{combo.name}</h4>
                          <p className="text-sand/60 text-xs">{combo.services}</p>
                        </div>
                        <span className="font-display text-gold text-xl">{formatPrice(combo.price)}</span>
                      </div>
                      <div className="space-y-2 text-sm">
                        <p className="text-sand/70">
                          <span className="text-gold">Para quem é:</span> {combo.forWho}
                        </p>
                        <p className="text-sand/70">
                          <span className="text-gold">Por que funciona:</span> {combo.whyWorks}
                        </p>
                      </div>
                      <Link
                        href={`${whatsappLink}?text=${encodeURIComponent(`Olá, tenho interesse no ${combo.name}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gold/70 hover:text-gold text-sm transition-colors mt-4"
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

        {/* Combos da Jornada */}
        <div>
          <AnimatedSection className="mb-8">
            <h3 className="font-display text-xl text-gold mb-2">{combos.jornada.title}</h3>
            <p className="text-sand/60 text-sm">{combos.jornada.subtitle}</p>
          </AnimatedSection>

          <AnimatedStagger className="grid md:grid-cols-2 gap-5">
            {combos.jornada.items.map((combo, i) => (
              <AnimatedCard key={i}>
                <motion.div whileHover={{ y: -4 }} className="h-full">
                  <Card className="etched bg-obsidian/60 backdrop-blur border-0 hover:border-gold/30 transition-all h-full rounded-xl">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3 mb-4">
                        <span className="w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold font-display text-sm">
                          {combo.number}
                        </span>
                        <div className="flex-1">
                          <h4 className="font-display text-lg text-bone">{combo.name}</h4>
                          <p className="text-sand/60 text-xs">{combo.services}</p>
                        </div>
                        <span className="font-display text-gold text-xl">{formatPrice(combo.price)}</span>
                      </div>
                      <div className="space-y-2 text-sm">
                        <p className="text-sand/70">
                          <span className="text-gold">Para quem é:</span> {combo.forWho}
                        </p>
                        <p className="text-sand/70">
                          <span className="text-gold">Por que funciona:</span> {combo.whyWorks}
                        </p>
                      </div>
                      <Link
                        href={`${whatsappLink}?text=${encodeURIComponent(`Olá, tenho interesse no ${combo.name}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gold/70 hover:text-gold text-sm transition-colors mt-4"
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
