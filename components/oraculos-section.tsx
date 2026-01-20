"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { EgyptianDivider } from "@/components/egyptian-decorations"
import { AnimatedSection, AnimatedStagger, AnimatedCard } from "@/components/animations"
import { formatPrice } from "@/lib/format"
import { motion } from "framer-motion"
import { Clock } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/components/ui/carousel"
import Link from "next/link"
import ImageBackground from "@/components/image-background"
import { useSiteConfig } from "@/lib/use-site-config"
import { useI18n } from "@/lib/i18n"

export function OraculosSection() {
  const siteConfig = useSiteConfig()
  const { locale } = useI18n()
  const oraculos = siteConfig.oraculos
  const tarot = siteConfig.tarot
  const runas = siteConfig.runas
  const whatsappLink = siteConfig.whatsappHrefFor
  const ctaLabel = siteConfig.oraculos?.ctaLabel

  const [tarotApi, setTarotApi] = useState<CarouselApi>()
  const [runasApi, setRunasApi] = useState<CarouselApi>()
  const [tarotCurrent, setTarotCurrent] = useState(0)
  const [tarotCount, setTarotCount] = useState(0)
  const [runasCurrent, setRunasCurrent] = useState(0)
  const [runasCount, setRunasCount] = useState(0)

  useEffect(() => {
    if (!tarotApi) return
    setTarotCount(tarotApi.scrollSnapList().length)
    setTarotCurrent(tarotApi.selectedScrollSnap())
    tarotApi.on('select', () => setTarotCurrent(tarotApi.selectedScrollSnap()))
    const container = tarotApi.containerNode()
    let isScrolling = false
    const handleWheel = (e: WheelEvent) => {
      const horizontalIntent = Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey
      if (!horizontalIntent) return
      e.preventDefault()
      if (!isScrolling) {
        isScrolling = true
        const delta = Math.abs(e.deltaX) > 0 ? e.deltaX : e.deltaY
        if (delta > 0) tarotApi.scrollNext()
        else tarotApi.scrollPrev()
        setTimeout(() => (isScrolling = false), 300)
      }
    }
    container.addEventListener('wheel', handleWheel, { passive: false })
    return () => container.removeEventListener('wheel', handleWheel)
  }, [tarotApi])

  useEffect(() => {
    if (!runasApi) return
    setRunasCount(runasApi.scrollSnapList().length)
    setRunasCurrent(runasApi.selectedScrollSnap())
    runasApi.on('select', () => setRunasCurrent(runasApi.selectedScrollSnap()))
    const container = runasApi.containerNode()
    let isScrolling = false
    const handleWheel = (e: WheelEvent) => {
      const horizontalIntent = Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey
      if (!horizontalIntent) return
      e.preventDefault()
      if (!isScrolling) {
        isScrolling = true
        const delta = Math.abs(e.deltaX) > 0 ? e.deltaX : e.deltaY
        if (delta > 0) runasApi.scrollNext()
        else runasApi.scrollPrev()
        setTimeout(() => (isScrolling = false), 300)
      }
    }
    container.addEventListener('wheel', handleWheel, { passive: false })
    return () => container.removeEventListener('wheel', handleWheel)
  }, [runasApi])

  return (
    <section id="oraculos" className="relative overflow-hidden bg-obsidian py-12 md:py-16">
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
        {/* Intro */}
        <AnimatedSection className="mb-8">
          <div className="text-center">
            <p className="font-display text-gold tracking-[0.3em] uppercase text-xs mb-4">{locale === 'pt' ? 'Leituras' : 'Readings'}</p>
            <h2 className="font-display text-4xl md:text-5xl tracking-wide mb-2 text-bone uppercase">{oraculos.title}</h2>
            <EgyptianDivider className="mb-4" />
          </div>
        </AnimatedSection>

        {/* TAROT */}
        <div id="tarot" className="mb-24 scroll-mt-24">
          <AnimatedSection className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="font-display text-2xl md:text-3xl text-gold tracking-wide uppercase">{tarot.title}</h3>
              {tarot.subtitle && <span className="text-sand/60 text-sm uppercase tracking-wider">({tarot.subtitle})</span>}
              <div className="flex-1 h-px bg-gradient-to-r from-gold/20 to-transparent" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-start mb-6">
              <div className="order-2 md:order-1">
                {tarot.intro && (
                  <div>
                    <p className="text-sand/80 leading-relaxed mb-3">{tarot.intro}</p>
                    {tarot.sensacao && (
                      <p className="text-gold/70 italic font-display text-sm border-l-2 border-gold/30 pl-4">
                        {tarot.sensacao}
                      </p>
                    )}
                  </div>
                )}
              </div>
              <div className="order-1 md:order-2">
                <img
                  src="/images/tarot-bg.jpg"
                  alt={locale === 'pt' ? 'Tarot' : 'Tarot'}
                  className="w-full h-auto rounded-lg opacity-80"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Tarot por Pergunta */}
          <AnimatedSection className="mb-8">
            <div className="bg-obsidian/40 border border-gold/10 rounded-xl p-6">
              <h4 className="font-display text-lg text-bone mb-4 text-center uppercase">{tarot.perguntas.title}</h4>
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

          <Carousel
            setApi={setTarotApi}
            opts={{ align: 'start', loop: false, dragFree: true, containScroll: 'trimSnaps', watchDrag: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {tarot.services.map((service, i) => (
                <CarouselItem key={i} className="pl-2 md:pl-4 md:basis-1/2">
                  <motion.div whileHover={{ y: -4 }} className="h-full">
                    <Card className="etched bg-obsidian/60 backdrop-blur border-0 hover:border-gold/30 transition-all h-full rounded-xl group">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-bone text-lg font-display tracking-wide">{service.name}</CardTitle>
                        <div className="flex items-center justify-between mt-3">
                          <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border bg-gold/10 text-gold border-gold/30">
                            <Clock className="w-3 h-3" />
                            {service.duration}
                          </span>
                          <span className="font-display text-gold font-semibold text-xl">{formatPrice(service.price)}</span>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sand/70 text-sm">{service.description}</p>
                        <Link href={whatsappLink?.("service", { name: service.name })} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-gold/70 hover:text-gold text-sm transition-colors">
                          {ctaLabel ?? siteConfig.hero?.cta ?? (locale === 'pt' ? 'Agendar' : 'Book')}
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: tarotCount }).map((_, index) => (
              <button
                key={index}
                onClick={() => tarotApi?.scrollTo(index)}
                className={`h-2 rounded-full transition-all ${index === tarotCurrent ? 'w-8 bg-gold' : 'w-2 bg-sand/30 hover:bg-sand/50'}`}
                aria-label={locale === 'pt' ? `Ir para slide ${index + 1}` : `Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* RUNAS */}
        <div id="runas" className="mt-12 scroll-mt-24">
          <AnimatedSection className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="font-display text-2xl md:text-3xl text-gold tracking-wide uppercase">{runas.title}</h3>
              {runas.subtitle && <span className="text-sand/60 text-sm uppercase tracking-wider">({runas.subtitle})</span>}
              <div className="flex-1 h-px bg-gradient-to-r from-gold/20 to-transparent" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-start mb-6">
              <div>
                <img
                  src="/images/runas-bg.jpg"
                  alt={locale === 'pt' ? 'Runas' : 'Runes'}
                  className="w-full h-auto rounded-lg opacity-80"
                />
              </div>
              <div>
                {runas.intro && (
                  <div>
                    <p className="text-sand/80 leading-relaxed mb-3">{runas.intro}</p>
                    {runas.sensacao && (
                      <p className="text-gold/70 italic font-display text-sm border-l-2 border-gold/30 pl-4">
                        {runas.sensacao}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </AnimatedSection>

          <Carousel
            setApi={setRunasApi}
            opts={{ align: 'start', loop: false, dragFree: true, containScroll: 'trimSnaps', watchDrag: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {runas.services.map((service, i) => (
                <CarouselItem key={i} className="pl-2 md:pl-4 md:basis-1/2">
                  <motion.div whileHover={{ y: -4 }} className="h-full">
                    <Card className="etched bg-obsidian/60 backdrop-blur border-0 hover:border-bone/20 transition-all h-full rounded-xl group">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-bone text-lg font-display tracking-wide">{service.name}</CardTitle>
                        <div className="flex items-center justify-between mt-3">
                          <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border bg-bone/10 text-bone border-bone/30">
                            <Clock className="w-3 h-3" />
                            {service.duration}
                          </span>
                          <span className="font-display text-gold font-semibold text-xl">{formatPrice(service.price)}</span>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sand/70 text-sm">{service.description}</p>
                        <Link href={`${whatsappLink}?text=${encodeURIComponent(locale === 'pt' ? `Olá, gostaria de agendar: ${service.name}` : `Hello, I'd like to book: ${service.name}`)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-gold/70 hover:text-gold text-sm transition-colors">
                          {ctaLabel ?? siteConfig.hero?.cta ?? (locale === 'pt' ? 'Agendar' : 'Book')}
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: runasCount }).map((_, index) => (
              <button
                key={index}
                onClick={() => runasApi?.scrollTo(index)}
                className={`h-2 rounded-full transition-all ${index === runasCurrent ? 'w-8 bg-gold' : 'w-2 bg-sand/30 hover:bg-sand/50'}`}
                aria-label={locale === 'pt' ? `Ir para slide ${index + 1}` : `Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
