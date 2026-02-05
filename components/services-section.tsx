"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { EgyptianDivider } from "@/components/egyptian-decorations"
import { AnimatedSection, AnimatedStagger, AnimatedCard } from "@/components/animations"
import { siteConfig } from "@/lib/site-data"
import { formatPrice } from "@/lib/format"
import { motion } from "framer-motion"
import { Clock, Sparkles, Star, Flame, Compass, User, Briefcase } from "lucide-react"
import Link from "next/link"

const categoryIcons = {
  tarot: Sparkles,
  astrologia: Star,
  runas: Compass,
  rituais: Flame,
  corpo: User,
  consultoria: Briefcase,
}

const categoryStyles = {
  tarot: {
    accent: "hover:border-gold/40",
    glow: "group-hover:shadow-[0_0_30px_rgba(184,155,74,0.15)]",
    badge: "bg-gold/10 text-gold border-gold/30",
  },
  astrologia: {
    accent: "hover:border-oxide/50",
    glow: "group-hover:shadow-[0_0_30px_rgba(110,91,58,0.15)]",
    badge: "bg-oxide/20 text-sand border-oxide/30",
  },
  runas: {
    accent: "hover:border-bone/30",
    glow: "group-hover:shadow-[0_0_30px_rgba(230,220,200,0.1)]",
    badge: "bg-bone/10 text-bone border-bone/30",
  },
  rituais: {
    accent: "hover:border-deepred/40",
    glow: "group-hover:shadow-[0_0_30px_rgba(139,69,69,0.2)]",
    badge: "bg-deepred/20 text-bone border-deepred/30",
  },
  corpo: {
    accent: "hover:border-gold/30",
    glow: "group-hover:shadow-[0_0_30px_rgba(184,155,74,0.1)]",
    badge: "bg-gold/5 text-sand border-gold/20",
  },
  consultoria: {
    accent: "hover:border-gold/50",
    glow: "group-hover:shadow-[0_0_30px_rgba(184,155,74,0.2)]",
    badge: "bg-gold/15 text-gold border-gold/40",
  },
}

export function ServicesSection() {
  const categories = Object.entries(siteConfig.services) as [
    keyof typeof siteConfig.services,
    (typeof siteConfig.services)[keyof typeof siteConfig.services],
  ][]

  const whatsappLink = siteConfig.whatsappHrefFor

  return (
    <section id="servicos" className="relative overflow-hidden bg-graphite/50">
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
        <AnimatedSection className="text-center mb-16">
          <p className="font-display text-gold tracking-[0.3em] uppercase text-xs mb-4">Investimento</p>

          <h2 className="font-display text-3xl md:text-4xl tracking-wide mb-6 text-bone">SERVIÇOS AVULSOS</h2>

          <EgyptianDivider className="mb-6" />

          <p className="text-sand/80 max-w-2xl mx-auto">
            Atendimentos pontuais, foco em clareza e decisão. Preços transparentes, sem surpresas.
          </p>
        </AnimatedSection>

        <div className="space-y-20">
          {categories.map(([key, category], categoryIndex) => {
            const Icon = categoryIcons[key]
            const styles = categoryStyles[key]

            return (
              <AnimatedSection key={key} delay={categoryIndex * 0.1}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row md:items-center gap-4 mb-8"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl border border-gold/30 flex items-center justify-center bg-graphite/50">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl text-gold tracking-wide">{category.title}</h3>
                      <p className="text-sand/70 text-sm mt-1">{category.subtitle}</p>
                    </div>
                  </div>
                  <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-gold/20 to-transparent ml-4" />
                </motion.div>

                <p className="text-sand/60 text-sm mb-6 max-w-3xl leading-relaxed italic">{category.description}</p>

                <AnimatedStagger
                  className={`grid gap-5 ${category.items.length === 1 ? "md:grid-cols-1 max-w-xl" : category.items.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}
                >
                  {category.items.map((service, serviceIndex) => (
                    <AnimatedCard key={serviceIndex}>
                      <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="h-full">
                        <Card
                          className={`etched bg-obsidian/60 backdrop-blur border-0 ${styles.accent} transition-all duration-300 h-full rounded-xl group ${styles.glow}`}
                        >
                          <CardHeader className="pb-3">
                            <div className="flex justify-between items-start gap-2">
                              <CardTitle className="text-bone text-base leading-tight flex-1 font-display tracking-wide">
                                {service.name}
                              </CardTitle>
                            </div>
                            <div className="flex items-center justify-between mt-3">
                              <span
                                className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border ${styles.badge}`}
                              >
                                <Clock className="w-3 h-3" />
                                {service.duration}
                              </span>
                              <span className="font-display text-gold font-semibold text-lg group-hover:text-gold-bright transition-colors">
                                {formatPrice(service.price, locale)}
                              </span>
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <p className="text-sand/70 text-sm leading-relaxed">{service.description}</p>
                            <Link href={whatsappLink?.("service", { name: service.name })} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-gold/70 hover:text-gold text-sm transition-colors">
                              {siteConfig.hero?.cta ?? "Agendar"}
                            </Link>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </AnimatedCard>
                  ))}
                </AnimatedStagger>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
