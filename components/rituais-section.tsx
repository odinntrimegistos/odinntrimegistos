"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { EgyptianDivider } from "@/components/egyptian-decorations"
import { AnimatedSection, AnimatedStagger, AnimatedCard } from "@/components/animations"
import { formatPrice } from "@/lib/format"
import { useSiteConfig } from "@/lib/site-config"
import { useI18n } from "@/lib/i18n"
import { motion } from "framer-motion"
import { Clock, Flame } from "lucide-react"
import Link from "next/link"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/components/ui/carousel"

export function RituaisSection() {
  const siteConfig = useSiteConfig()
  const { locale } = useI18n()
  const rituais = siteConfig.rituais
  const whatsappLink = siteConfig.links.whatsapp

  const [rituaisApi, setRituaisApi] = useState<CarouselApi>()
  const [rituaisCurrent, setRituaisCurrent] = useState(0)
  const [rituaisCount, setRituaisCount] = useState(0)

  useEffect(() => {
    if (!rituaisApi) return
    setRituaisCount(rituaisApi.scrollSnapList().length)
    setRituaisCurrent(rituaisApi.selectedScrollSnap())
    rituaisApi.on('select', () => setRituaisCurrent(rituaisApi.selectedScrollSnap()))
    const container = rituaisApi.containerNode()
    let isScrolling = false
    const handleWheel = (e: WheelEvent) => {
      const horizontalIntent = Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey
      if (!horizontalIntent) return
      e.preventDefault()
      if (!isScrolling) {
        isScrolling = true
        const delta = Math.abs(e.deltaX) > 0 ? e.deltaX : e.deltaY
        if (delta > 0) rituaisApi.scrollNext()
        else rituaisApi.scrollPrev()
        setTimeout(() => (isScrolling = false), 300)
      }
    }
    container.addEventListener('wheel', handleWheel, { passive: false })
    return () => container.removeEventListener('wheel', handleWheel)
  }, [rituaisApi])

  // Formatação dos pontos do Protocolo de Contratação (invocações)
  const protocolText = rituais?.invocacoes?.protocolDetails ?? ""
  const [protocolLead, protocolRest] = protocolText.split(":")
  const protocolItems = protocolRest
    ? protocolRest
        .split(/(?:\s*\d\)\s*)/)
        .filter(Boolean)
        .map((s) => s.replace(/[);\s]+$/g, "").trim())
    : []

  return (
    <section id="rituais" className="relative overflow-hidden bg-graphite/50 py-12 md:py-16">
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover object-top"
          style={{ clipPath: "inset(0 0 10% 0)" }}
        >
          <source src="/videos/rituais-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-graphite/40 via-graphite/50 to-graphite/60" />
      </div>
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
        {/* Intro */}
        <AnimatedSection className="text-center mb-12">
          <p className="font-display text-gold tracking-[0.3em] uppercase text-xs mb-4">{locale === 'pt' ? 'Rituais' : 'Rituals'}</p>
          <h2 className="font-display text-4xl md:text-5xl tracking-wide mb-6 text-bone uppercase">{rituais.title}</h2>
          <EgyptianDivider className="mb-8" />

          {(rituais.intro || rituais.description || rituais.closing) && (
            <div className="max-w-3xl mx-auto space-y-3">
              {rituais.intro && (
                <p className="text-bone text-lg text-left leading-relaxed">{rituais.intro}</p>
              )}
              {rituais.description && (
                <p className="text-sand/80 text-left leading-relaxed">{rituais.description}</p>
              )}
              {rituais.closing && (
                <p className="text-bone/90 font-display italic pt-2 text-base border-l-2 border-deepred/30 pl-4">{rituais.closing}</p>
              )}
            </div>
          )}
        </AnimatedSection>

        <Carousel
          setApi={setRituaisApi}
          opts={{ align: 'start', loop: false, dragFree: true, containScroll: 'trimSnaps', watchDrag: true }}
          className="w-full mb-16"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {rituais.services.map((service, i) => (
              <CarouselItem key={i} className="pl-2 md:pl-4 md:basis-1/2">
                <AnimatedCard>
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
                          href={`${whatsappLink}?text=${encodeURIComponent(
                            locale === "pt" ? `Olá, gostaria de agendar: ${service.name}` : `Hello, I'd like to book: ${service.name}`,
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-gold/70 hover:text-gold text-sm transition-colors"
                        >
                          {siteConfig.hero?.cta ?? (locale === "pt" ? "Agendar" : "Book")}
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                </AnimatedCard>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
        <div className="flex justify-center gap-2 mt-4 mb-12">
          {Array.from({ length: rituaisCount }).map((_, index) => (
            <button
              key={index}
              onClick={() => rituaisApi?.scrollTo(index)}
              className={`h-2 rounded-full transition-all ${index === rituaisCurrent ? 'w-8 bg-gold' : 'w-2 bg-sand/30 hover:bg-sand/50'}`}
              aria-label={locale === 'pt' ? `Ir para slide ${index + 1}` : `Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Invocações */}
        <AnimatedSection className="mt-16">
          <div className="text-center mb-8">
            <p className="font-display text-gold tracking-[0.3em] uppercase text-xs mb-4">{locale === 'pt' ? 'Anjos & Daemons' : 'Angels & Daemons'}</p>
            <h3 className="font-display text-4xl md:text-5xl tracking-wide mb-6 text-bone uppercase">{rituais.invocacoes.title}</h3>
            <EgyptianDivider className="mb-8" />
          </div>

          <Card className="etched bg-obsidian/80 border-deepred/30 rounded-xl overflow-hidden">
            {rituais.invocacoes.subtitle && (
              <div className="bg-gradient-to-r from-deepred/20 via-deepred/10 to-deepred/20 py-3 border-b border-deepred/20">
                <div className="flex items-center justify-center gap-3">
                  <Flame className="w-5 h-5 text-deepred" />
                  <p className="font-display text-bone tracking-wider">{rituais.invocacoes.subtitle}</p>
                  <Flame className="w-5 h-5 text-deepred" />
                </div>
              </div>
            )}
            <CardContent className="p-8 text-center space-y-4">
              {rituais.invocacoes.lead && (
                <p className="text-gold font-display text-lg">{rituais.invocacoes.lead}</p>
              )}

              <div className="text-left max-w-3xl mx-auto space-y-3">
                <p className="text-sand/80 leading-relaxed">{rituais.invocacoes.description}</p>

                <h4 className="font-display text-md text-bone mt-3">{locale === 'pt' ? 'ARS GOETIA (A Arte Salomônica)' : 'ARS GOETIA (The Solomonic Art)'}</h4>
                <p className="text-sand/70 text-sm">{locale === 'pt' ? 'Para resultados rápidos, materiais e terrenos. A Goetia é a chave para resolver problemas que exigem rapidez e impacto material. Lidamos com os 72 Espíritos que governam as paixões humanas, a riqueza e a influência. É a magia ideal para quando você precisa de uma solução "para ontem".' : 'For swift, material outcomes. Goetia solves urgent, concrete problems by working with the 72 spirits governing passions, wealth, and influence.'}</p>

                <h4 className="font-display text-md text-bone mt-3">{locale === 'pt' ? 'MAGIA ENOCHIANA (A Linguagem dos Anjos)' : 'ENOCHIAN MAGIC (The Angels’ Language)'}</h4>
                <p className="text-sand/70 text-sm">{locale === 'pt' ? 'Para reestruturar o destino e a evolução. Diferente da Goetia (que resolve o problema atual), a Magia Enochiana reescreve a estrutura da sua vida. Trabalhamos com hierarquias angélicas e as Torres de Vigia para acessar forças que moldam a realidade.' : 'To restructure destiny and growth. Unlike Goetia, Enochian work rewrites the structure of your life using angelic hierarchies and the Watchtowers.'}</p>

                <h4 className="font-display text-sm text-bone mt-4">{locale === 'pt' ? 'Protocolo de Contratação' : 'Engagement Protocol'}</h4>
                <p className="text-sand/70 text-sm">{rituais.invocacoes.protocol}</p>
                {protocolText && (
                  <div className="text-sand/70 text-sm">
                    {protocolLead && <p className="mb-2">{protocolLead.trim()}:</p>}
                    {protocolItems.length > 0 ? (
                      <ol className="list-decimal list-inside space-y-1">
                        {protocolItems.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ol>
                    ) : (
                      <p>{protocolText}</p>
                    )}
                  </div>
                )}

                <p className="text-bone font-medium">{locale === 'pt' ? 'Valor da Análise Prévia:' : 'Fee for the Viability Analysis:'} <span className="text-gold font-display">{formatPrice(rituais.invocacoes.analysisPrice)}</span></p>
                <p className="text-sand/60 text-sm italic pt-2">{rituais.invocacoes.closing}</p>
              </div>

              <div className="flex items-center justify-center">
                <Link
                  href={`${whatsappLink}?text=${encodeURIComponent(
                    locale === "pt"
                      ? `Olá, gostaria de solicitar a Análise de Viabilidade para uma Invocação.`
                      : `Hello, I'd like to request the Viability Analysis for an Invocation.`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center mt-4 btn-ritual rounded-lg px-6 py-3 text-bone hover:shadow-[0_0_20px_rgba(139,69,69,0.3)] transition-all text-center"
                >
                  {rituais.invocacoes.ctaLabel ?? (locale === "pt" ? "SOLICITAR ANÁLISE" : "REQUEST ANALYSIS")}
                </Link>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  )
}
