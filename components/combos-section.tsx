"use client"

import { Card, CardContent } from "@/components/ui/card"
import { EgyptianDivider } from "@/components/egyptian-decorations"
import { AnimatedSection, AnimatedStagger, AnimatedCard } from "@/components/animations"
import { formatPrice } from "@/lib/format"
import { useSiteConfig } from "@/lib/use-site-config"
import { useI18n } from "@/lib/i18n"
import { motion } from "framer-motion"
import Link from "next/link"
import ImageBackground from "@/components/image-background"

export function CombosSection() {
  const siteConfig = useSiteConfig()
  const { locale } = useI18n()
  const combos = siteConfig.combos
  const whatsappLink = siteConfig.links.whatsapp
  const ctaLabel = siteConfig.combos?.ctaLabel

  const labels =
    locale === "pt"
      ? {
          eyebrow: "Caminhos Recomendados",
          title: "COMBOS",
          subtitle: "Pacotes pensados para necessidades específicas",
          forWho: "Para quem é:",
          why: "Por que funciona:",
          ctaFallback: "Agendar",
        }
      : {
          eyebrow: "Recommended Paths",
          title: "COMBOS",
          subtitle: "Packages designed for specific needs",
          forWho: "For whom:",
          why: "Why it works:",
          ctaFallback: "Book",
        }

  return (
    <section id="combos" className="py-12 md:py-16 relative overflow-hidden bg-graphite/50">
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
        <AnimatedSection className="text-center mb-12">
          <p className="font-display text-gold tracking-[0.3em] uppercase text-xs mb-4">{labels.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-4xl tracking-wide mb-2 text-bone">{labels.title}</h2>
          <p className="text-sand/70 mb-6">{labels.subtitle}</p>
          <EgyptianDivider />
        </AnimatedSection>

        {/* Combos dos Oráculos */}
        <div className="mb-12">
          <AnimatedSection className="mb-6">
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
                          <span className="text-gold">{labels.forWho}</span> {combo.forWho}
                        </p>
                        <p className="text-sand/70">
                          <span className="text-gold">{labels.why}</span> {combo.whyWorks}
                        </p>
                      </div>
                      <Link
                        href={`${whatsappLink}?text=${encodeURIComponent(
                          locale === "pt" ? `Olá, tenho interesse no ${combo.name}` : `Hello, I'm interested in ${combo.name}`,
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gold/70 hover:text-gold text-sm transition-colors mt-4"
                      >
                        {ctaLabel ?? siteConfig.hero?.cta ?? labels.ctaFallback}
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
                          <span className="text-gold">{labels.forWho}</span> {combo.forWho}
                        </p>
                        <p className="text-sand/70">
                          <span className="text-gold">{labels.why}</span> {combo.whyWorks}
                        </p>
                      </div>
                      <Link
                        href={`${whatsappLink}?text=${encodeURIComponent(
                          locale === "pt" ? `Olá, tenho interesse no ${combo.name}` : `Hello, I'm interested in ${combo.name}`,
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gold/70 hover:text-gold text-sm transition-colors mt-4"
                      >
                        {ctaLabel ?? siteConfig.hero?.cta ?? labels.ctaFallback}
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
