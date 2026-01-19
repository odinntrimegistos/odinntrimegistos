"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { EgyptianDivider } from "@/components/egyptian-decorations"
import { AnimatedSection, AnimatedCard } from "@/components/animations"
import { formatPrice } from "@/lib/format"
import { useSiteConfig } from "@/lib/use-site-config"
import { useI18n } from "@/lib/i18n"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import ImageBackground from "@/components/image-background"

export function MentoriasSection() {
  const siteConfig = useSiteConfig()
  const { locale } = useI18n()
  const mentorias = siteConfig.mentorias
  const whatsappLink = siteConfig.links.whatsapp

  return (
    <section id="mentorias" className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <ImageBackground
          src="/images/mentor-1.jpg"
          alt="mentorias background"
          wrapperClassName="absolute inset-0"
          imgClassName="object-cover image-unify opacity-25"
          overlayClassName="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent"
        />
      </div>
      {/* Gradientes de transição superior e inferior com fade */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.1 }}
        className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-graphite/80 via-graphite/30 to-transparent pointer-events-none z-10"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.1 }}
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-graphite/80 via-graphite/30 to-transparent pointer-events-none z-10"
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl tracking-wide mb-2 text-bone uppercase">{mentorias.title}</h2>
          {mentorias.subtitle && <p className="text-sand/70 text-lg mb-6">{mentorias.subtitle}</p>}
          <EgyptianDivider />
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {mentorias.programs.map((program, i) => (
            <AnimatedCard key={i} delay={i * 0.1}>
              <motion.div whileHover={{ y: -4 }} className="h-full">
                <Card
                  className={`etched bg-obsidian/60 backdrop-blur border-0 transition-all h-full rounded-xl flex flex-col ${program.highlight ? "md:col-span-3 border-2 border-gold/40 hover:border-gold/60 shadow-[0_0_40px_rgba(184,155,74,0.2)]" : "hover:border-gold/20"}`}
                >
                  {/* Removed highlight ribbon text block as requested */}
                  <CardContent className={`p-6 lg:p-8 flex-1 flex flex-col ${program.highlight ? "md:flex-row md:items-center md:gap-8" : ""}`}>
                    <div className={program.highlight ? "flex-1" : ""}>
                      <h3 className={`font-display text-bone mb-2 ${program.highlight ? "text-3xl md:text-4xl" : "text-2xl"}`}>
                        {program.name}
                      </h3>
                      {program.duration && (
                        <p className={`text-gold/80 mb-4 ${program.highlight ? "text-base" : "text-sm"}`}>
                          {program.duration}
                        </p>
                      )}
                      <p className={`text-sand/80 leading-relaxed ${program.highlight ? "text-base" : ""}`}>
                        {program.description}
                      </p>
                    </div>

                    <div className={`mt-6 space-y-4 ${program.highlight ? "md:mt-0 md:min-w-[280px]" : ""}`}>
                      <div className={`px-6 py-4 bg-graphite/40 rounded-lg text-center ${program.highlight ? "border border-gold/20" : ""}`}>
                        <p className={`font-display text-gold whitespace-nowrap ${program.highlight ? "text-4xl" : "text-3xl"}`}>
                          {formatPrice(program.price)}
                          {program.priceLabel && <span className="text-lg text-sand/60">{program.priceLabel}</span>}
                        </p>
                        {program.priceAlt && (
                          <p className="text-sand/60 text-sm mt-1">{program.priceAlt}</p>
                        )}
                      </div>

                      <Link
                        href={`${whatsappLink}?text=${encodeURIComponent(
                          locale === "pt"
                            ? `Olá, tenho interesse em: ${program.name}`
                            : `Hello, I'm interested in: ${program.name}`,
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button
                          className={`w-full group ${program.highlight ? "bg-gold hover:bg-gold-bright text-obsidian font-semibold py-6 text-base" : "bg-gold/10 hover:bg-gold/20 text-gold border border-gold/30"}`}
                        >
                          {program.highlight
                            ? locale === "pt"
                              ? "Aplicar para o Caminho de Hermes"
                              : "Apply for Hermes Path"
                            : locale === "pt"
                              ? "Entrar na Mentoria"
                              : "Join Mentoring"}
                          <ArrowRight className={`ml-2 group-hover:translate-x-1 transition-transform ${program.highlight ? "w-5 h-5" : "w-4 h-4"}`} />
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
