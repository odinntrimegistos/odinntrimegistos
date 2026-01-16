"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { EgyptianDivider } from "@/components/egyptian-decorations"
import { AnimatedSection, AnimatedCard } from "@/components/animations"
import { siteConfig, formatPrice } from "@/lib/site-data"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import ImageBackground from "@/components/image-background"

export function MentoriasSection() {
  const mentorias = siteConfig.mentorias
  const whatsappLink = siteConfig.links.whatsapp

  return (
    <section id="mentorias" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <ImageBackground
          src="/images/mentor-1.jpg"
          alt="mentorias background"
          wrapperClassName="absolute inset-0"
          imgClassName="object-cover image-unify opacity-25"
          overlayClassName="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          
          <h2 className="font-display text-3xl md:text-4xl tracking-wide mb-6 text-bone">{mentorias.title}</h2>
          <EgyptianDivider />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {mentorias.programs.map((program, i) => (
            <AnimatedCard key={i}>
              <motion.div whileHover={{ y: -4 }} className="h-full">
                <Card
                  className={`etched bg-obsidian/60 backdrop-blur border-0 transition-all h-full rounded-xl ${program.highlight ? "border-gold/30 hover:border-gold/50 hover:shadow-[0_0_40px_rgba(184,155,74,0.15)]" : "hover:border-gold/20"}`}
                >
                  {program.highlight && (
                    <div className="bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20 py-2 text-center border-b border-gold/20">
                      <div className="flex items-center justify-center gap-2">
                        <Sparkles className="w-4 h-4 text-gold" />
                        <p className="text-gold text-xs uppercase tracking-wider">Processo Completo</p>
                      </div>
                    </div>
                  )}
                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="font-display text-2xl text-bone mb-2">{program.name}</h3>
                    {program.duration && <p className="text-gold/80 text-sm mb-4">{program.duration}</p>}
                    <p className="text-sand/80 mb-6 flex-1">{program.description}</p>

                    <div className="space-y-4">
                      <div className="text-center py-4 bg-graphite/40 rounded-lg">
                        <p className="font-display text-3xl text-gold">
                          {formatPrice(program.price)}
                          {program.priceLabel && <span className="text-lg text-sand/60">{program.priceLabel}</span>}
                        </p>
                        {program.priceAlt && <p className="text-sand/60 text-sm mt-1">{program.priceAlt}</p>}
                      </div>

                      <Link
                        href={`${whatsappLink}?text=${encodeURIComponent(`Olá, tenho interesse em: ${program.name}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <Button
                          className={`w-full group ${program.highlight ? "bg-gold hover:bg-gold-bright text-obsidian" : "bg-gold/10 hover:bg-gold/20 text-gold border border-gold/30"}`}
                        >
                          {program.highlight ? "Aplicar para o Opus Magnum" : "Entrar na Mentoria"}
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}
