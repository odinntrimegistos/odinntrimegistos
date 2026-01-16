"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { EgyptianDivider } from "@/components/egyptian-decorations"
import { AnimatedSection, AnimatedStagger, AnimatedCard } from "@/components/animations"
import { siteConfig, formatPrice } from "@/lib/site-data"
import { motion } from "framer-motion"
import { Clock, Check } from "lucide-react"
import Link from "next/link"

export function AstrologiaSection() {
  const astrologia = siteConfig.astrologia
  const whatsappLink = siteConfig.links.whatsapp

  return (
    <section id="astrologia" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 temple-radial opacity-30" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Intro */}
        <AnimatedSection className="text-center mb-16">
          
          <h2 className="font-display text-3xl md:text-4xl tracking-wide mb-6 text-bone">{astrologia.title}</h2>
          <EgyptianDivider className="mb-8" />

          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-bone text-lg text-left">{astrologia.intro}</p>
            <p className="text-sand/80 text-left">{astrologia.description}</p>
            <p className="text-sand/70 text-sm text-left">{astrologia.note}</p>
            <p className="text-sand/70 text-sm text-left">{astrologia.subNote}</p>
            <p className="text-bone font-display italic pt-4 font-bold text-xl">{astrologia.closing}</p>
          </div>
        </AnimatedSection>

        {/* Services */}
        <AnimatedStagger className="space-y-6">
          {astrologia.services.map((service, i) => (
            <AnimatedCard key={i}>
              <motion.div whileHover={{ y: -4 }}>
                <Card
                  className={`etched bg-obsidian/60 backdrop-blur border-0 hover:border-oxide/40 transition-all rounded-xl ${i >= 2 ? "border-oxide/20" : ""}`}
                >
                  <CardHeader className="pb-3">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-start gap-4">
                        
                        <div>
                          <CardTitle className="text-bone text-xl font-display tracking-wide">{service.name}</CardTitle>
                          <p className="text-gold/80 text-sm">{service.subtitle}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border bg-oxide/20 text-sand border-oxide/30">
                          <Clock className="w-3 h-3" />
                          {service.duration}
                        </span>
                        <span className="font-display text-gold font-semibold text-2xl">
                          {formatPrice(service.price)}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sand/80">{service.description}</p>

                    {service.details && (
                      <div className="bg-graphite/40 p-4 rounded-lg">
                        <p className="text-bone text-sm mb-3">Trata-se de entender:</p>
                        <ul className="space-y-2">
                          {service.details.map((detail, j) => (
                            <li key={j} className="flex items-start gap-2 text-sand/70 text-sm">
                              <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <p className="text-sand/60 text-sm">
                      <span className="text-gold">Indicado para:</span> {service.indications}
                    </p>

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

        {/* Sinastry Note */}
        <AnimatedSection className="mt-12">
          
        </AnimatedSection>
      </div>
    </section>
  )
}
