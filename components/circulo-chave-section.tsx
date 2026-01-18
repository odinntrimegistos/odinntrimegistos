"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { EgyptianDivider } from "@/components/egyptian-decorations"
import { AnimatedSection, AnimatedStagger, AnimatedCard, AnimatedItem } from "@/components/animations"
import { useSiteConfig } from "@/lib/site-config"
import { useI18n } from "@/lib/i18n"
import { motion } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/components/ui/carousel"
import { Key, Gift, Scale } from "lucide-react"
import ImageBackground from "@/components/image-background"

export function CirculoChaveSection() {
  const siteConfig = useSiteConfig()
  const { locale } = useI18n()
  const circulo = siteConfig.circuloChave

  const [ranksApi, setRanksApi] = useState<CarouselApi>()
  const [ranksCurrent, setRanksCurrent] = useState(0)
  const [ranksCount, setRanksCount] = useState(0)

  useEffect(() => {
    if (!ranksApi) return
    setRanksCount(ranksApi.scrollSnapList().length)
    setRanksCurrent(ranksApi.selectedScrollSnap())
    ranksApi.on('select', () => setRanksCurrent(ranksApi.selectedScrollSnap()))

    const container = ranksApi.containerNode()
    let isScrolling = false
    const handleWheel = (e: WheelEvent) => {
      const horizontalIntent = Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey
      if (!horizontalIntent) return
      e.preventDefault()
      if (!isScrolling) {
        isScrolling = true
        const delta = Math.abs(e.deltaX) > 0 ? e.deltaX : e.deltaY
        if (delta > 0) ranksApi.scrollNext()
        else ranksApi.scrollPrev()
        setTimeout(() => (isScrolling = false), 300)
      }
    }
    container.addEventListener('wheel', handleWheel, { passive: false })
    return () => container.removeEventListener('wheel', handleWheel)
  }, [ranksApi])

  const labels = locale === "pt" ? { currency: "Moeda" } : { currency: "Currency" }

  return (
    <section id="circulo-chave" className="relative overflow-hidden py-12 md:py-16">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <ImageBackground
          src="/images/chaves.png"
          alt="chaves background"
          wrapperClassName="absolute inset-0"
          imgClassName="object-cover image-unify opacity-30"
          overlayClassName="absolute inset-0 bg-gradient-to-b from-graphite/70 to-graphite/40"
        />
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
        <AnimatedSection className="text-center mb-12">
          <p className="font-display text-gold tracking-[0.3em] uppercase text-xs mb-4">{locale === 'pt' ? 'Sistema de Fidelidade' : 'Loyalty System'}</p>
          <h2 className="font-display text-4xl md:text-5xl tracking-wide mb-6 text-bone uppercase">{circulo.title}</h2>
          <EgyptianDivider className="mb-8" />

          {circulo.intro && (
            <p className="text-sand/80 max-w-2xl mx-auto mb-6 leading-relaxed">{circulo.intro}</p>
          )}

          {circulo.logica && (
            <div className="max-w-2xl mx-auto mb-8 text-left">
              <p className="text-bone font-display mb-2">{circulo.logica.title}</p>
              <p className="text-sand/70 text-sm leading-relaxed">{circulo.logica.description}</p>
            </div>
          )}
        </AnimatedSection>

        {/* Cargos */}
        <div className="mb-10">
          <AnimatedSection className="text-center mb-5">
            <h3 className="font-display text-xl text-gold mb-2">{circulo.cargos.title}</h3>
          </AnimatedSection>

          <Carousel
            setApi={setRanksApi}
            opts={{ align: 'start', loop: false, dragFree: true, containScroll: 'trimSnaps', watchDrag: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {circulo.cargos.ranks.map((rank, i) => (
                <CarouselItem key={i} className="pl-2 md:pl-4 md:basis-1/3">
                  <motion.div whileHover={{ y: -2 }} className="h-full">
                    <Card className={`etched bg-obsidian/60 backdrop-blur border-0 transition-all h-full rounded-lg ${rank.highlight ? 'border-gold/30 hover:border-gold/50' : 'hover:border-gold/20'}`}>
                      <CardContent className="p-5">
                        {rank.grau && <p className="text-gold/60 text-[10px] uppercase tracking-widest mb-2">{rank.grau}</p>}
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-2xl">{rank.symbol}</span>
                          <div className="flex-1">
                            <h4 className="font-display text-lg text-bone leading-tight">{rank.name}</h4>
                            <p className="text-gold/80 text-xs">{locale === 'pt' ? 'Ao completar' : 'Upon reaching'} {rank.range}</p>
                          </div>
                        </div>
                        <p className="text-sand/70 text-sm mb-3 leading-relaxed">{rank.description}</p>
                        <div className="border-t border-gold/10 pt-3 mt-3">
                          <p className="text-gold text-xs font-display mb-2">{locale === 'pt' ? 'A Recompensa:' : 'The Reward:'}</p>
                          <ul className="space-y-2">
                            {rank.benefits.map((benefit, j) => (
                              <li key={j} className="text-sand/70 text-xs flex items-start gap-2 leading-relaxed">
                                <span className="text-gold text-sm mt-0.5">•</span>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                        {rank.note && <p className="text-bone text-[10px] italic mt-3 pt-2 border-t border-gold/10">{rank.note}</p>}
                      </CardContent>

                      {rank.highlight && (
                        <div className="bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20 py-1.5 text-center border-t border-gold/20">
                          <p className="text-gold text-[10px] uppercase tracking-wider">{locale === 'pt' ? 'Nível Máximo' : 'Max Level'}</p>
                        </div>
                      )}
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
            {Array.from({ length: ranksCount }).map((_, index) => (
              <button
                key={index}
                onClick={() => ranksApi?.scrollTo(index)}
                className={`h-2 rounded-full transition-all ${index === ranksCurrent ? 'w-8 bg-gold' : 'w-2 bg-sand/30 hover:bg-sand/50'}`}
                aria-label={locale === 'pt' ? `Ir para cargo ${index + 1}` : `Go to rank ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Extras and Rules */}
        <AnimatedStagger className="grid md:grid-cols-2 gap-4 mb-8">
          <AnimatedItem>
            <div className="bg-graphite/50 border border-gold/10 rounded-lg p-4 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <Gift className="w-4 h-4 text-gold" />
                <h4 className="font-display text-base text-bone">{circulo.extras.title}</h4>
              </div>
              <ul className="space-y-1.5 flex-1">
                {circulo.extras.items.map((item, i) => (
                  <li key={i} className="text-sand/70 text-xs flex items-start gap-1.5">
                    <span className="text-gold">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedItem>

          <AnimatedItem>
            <div className="bg-graphite/50 border border-gold/10 rounded-lg p-4 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <Scale className="w-4 h-4 text-gold" />
                <h4 className="font-display text-base text-bone">{circulo.regras.title}</h4>
              </div>
              <ul className="space-y-1.5 flex-1">
                {circulo.regras.items.map((item, i) => (
                  <li key={i} className="text-sand/70 text-xs flex items-start gap-1.5">
                    <span className="text-gold">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedItem>
        </AnimatedStagger>

        
      </div>
    </section>
  )
}
