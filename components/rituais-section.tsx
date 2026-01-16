"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { EgyptianDivider } from "@/components/egyptian-decorations"
import { AnimatedSection, AnimatedStagger, AnimatedCard } from "@/components/animations"
import { siteConfig, formatPrice } from "@/lib/site-data"
import { motion } from "framer-motion"
import { Clock, Flame } from "lucide-react"
import Link from "next/link"
import ImageBackground from "@/components/image-background"

export function RituaisSection() {
  const rituais = siteConfig.rituais
  const whatsappLink = siteConfig.links.whatsapp

  return (
    <section id="rituais" className="py-24 md:py-32 relative overflow-hidden bg-graphite/50">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <ImageBackground
          src="/images/ritual-1.jpg"
          alt="ritual background"
          wrapperClassName="absolute inset-0"
          imgClassName="object-cover image-unify opacity-30"
          overlayClassName="absolute inset-0 bg-gradient-to-b from-deepred/5 to-transparent"
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Intro */}
        <AnimatedSection className="text-center mb-16">
          
          <h2 className="font-display text-3xl md:text-4xl tracking-wide mb-6 text-bone">{rituais.title}</h2>
          <EgyptianDivider className="mb-8" />

          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-bone text-lg text-left">{rituais.intro}</p>
            <p className="text-sand/80 text-left">{rituais.description}</p>
            <p className="text-bone font-display italic pt-4">{rituais.closing}</p>
          </div>
        </AnimatedSection>

        {/* Services Grid */}
        <AnimatedStagger className="grid md:grid-cols-2 gap-5 mb-16">
          {rituais.services.map((service, i) => (
            <AnimatedCard key={i}>
              <motion.div whileHover={{ y: -4 }} className="h-full">
                <Card className="etched bg-obsidian/60 backdrop-blur border-0 hover:border-deepred/40 transition-all h-full rounded-xl group hover:shadow-[0_0_30px_rgba(139,69,69,0.15)]">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-bone text-lg font-display tracking-wide">{service.name}</CardTitle>
                    <div className="flex items-center justify-between mt-3">
                      {service.duration && (
                        <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border bg-deepred/20 text-bone border-deepred/30">
                          <Clock className="w-3 h-3" />
                          {service.duration}
                        </span>
                      )}
                      <span className="font-display text-gold font-semibold text-xl">{formatPrice(service.price)}</span>
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

        {/* Invocações */}
        <AnimatedSection>
          <Card className="etched bg-obsidian/80 border-deepred/30 rounded-xl overflow-hidden">
            <div className="bg-gradient-to-r from-deepred/20 via-deepred/10 to-deepred/20 py-3 border-b border-deepred/20">
              <div className="flex items-center justify-center gap-3">
                <Flame className="w-5 h-5 text-deepred" />
                <p className="font-display text-bone tracking-wider">{rituais.invocacoes.title}</p>
                <Flame className="w-5 h-5 text-deepred" />
              </div>
            </div>
            <CardContent className="p-8 text-center space-y-4">
              <p className="text-gold font-display text-lg">{rituais.invocacoes.subtitle}</p>
              <p className="text-sand/80 text-left">{rituais.invocacoes.description}</p>
              <p className="text-bone font-medium text-left">{rituais.invocacoes.note}</p>
              <p className="text-sand/70 text-sm">{rituais.invocacoes.detail}</p>
              <p className="text-sand/60 text-sm italic pt-4">{rituais.invocacoes.closing}</p>
              <Link
                href={`${whatsappLink}?text=${encodeURIComponent("Olá, gostaria de saber mais sobre Invocações Personalizadas")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center mt-4 btn-ritual rounded-lg px-6 py-3 text-bone hover:shadow-[0_0_20px_rgba(139,69,69,0.3)] transition-all text-center"
              >
                Consultar disponibilidade
              </Link>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  )
}
