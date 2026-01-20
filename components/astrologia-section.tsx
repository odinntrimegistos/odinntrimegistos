"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { EgyptianDivider } from "@/components/egyptian-decorations"
import { AnimatedSection } from "@/components/animations"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/components/ui/carousel"
import { formatPrice } from "@/lib/format"
import { useSiteConfig } from "@/lib/use-site-config"
import { useI18n } from "@/lib/i18n"
import { Clock, Check } from "lucide-react"
import Link from "next/link"
import ImageBackground from "@/components/image-background"

export function AstrologiaSection() {
  const siteConfig = useSiteConfig()
  const { locale } = useI18n()
  const astrologia = siteConfig.astrologia
  const whatsappLink = siteConfig.links.whatsapp
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })

    // Habilitar scroll horizontal com roda do mouse / Shift+wheel para forçar
    const container = api.containerNode()
    let isScrolling = false

    const handleWheel = (e: WheelEvent) => {
      const horizontalIntent = Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey
      if (!horizontalIntent) return // permite scroll vertical normal

      e.preventDefault()

      if (!isScrolling) {
        isScrolling = true
        const delta = Math.abs(e.deltaX) > 0 ? e.deltaX : e.deltaY
        if (delta > 0) {
          api.scrollNext()
        } else {
          api.scrollPrev()
        }
        setTimeout(() => {
          isScrolling = false
        }, 300)
      }
    }

    container.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      container.removeEventListener('wheel', handleWheel)
    }
  }, [api])

  const labels =
    locale === "pt"
      ? {
          detailsTitle: "Trata-se de entender:",
        }
      : {
          detailsTitle: "This helps you understand:",
        }

  return (
    <section id="astrologia" className="relative overflow-hidden py-12 md:py-16">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <ImageBackground
          src="/images/astro-bg.jpg"
          alt={locale === 'pt' ? 'fundo de astrologia' : 'astrology background'}
          wrapperClassName="absolute inset-0"
          imgClassName="object-cover image-unify opacity-40 object-center scale-100"
          overlayClassName="absolute inset-0 bg-gradient-to-b from-obsidian/50 to-obsidian/30"
        />
      </div>
      <div className="absolute inset-0 temple-radial opacity-30" />
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
        {/* Header only (match Oráculos pattern) */}
        <AnimatedSection className="text-center mb-8">
          <p className="font-display text-gold tracking-[0.3em] uppercase text-xs mb-4">{locale === 'pt' ? 'Hermética' : 'Hermetic'}</p>
          <h2 className="font-display text-4xl md:text-5xl tracking-wide mb-2 text-bone uppercase">{astrologia.title}</h2>
          <EgyptianDivider className="mb-4" />
        </AnimatedSection>

        {/* Services */}
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: false,
            dragFree: true,
            containScroll: "trimSnaps",
            watchDrag: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {astrologia.services.map((service, i) => (
              <CarouselItem key={i} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="h-full select-none">
                  <motion.div whileHover={{ y: -4 }} className="h-full" onPointerDownCapture={(e) => e.stopPropagation()}>
                    <Card
                      className={`etched bg-obsidian/60 backdrop-blur border-0 hover:border-oxide/40 transition-all rounded-xl h-full flex flex-col ${i >= 2 ? "border-oxide/20" : ""}`}
                    >
                      <CardHeader className="pb-2">
                        <div className="flex flex-col gap-3">
                          <div className="flex items-start gap-3">
                            
                            <div>
                              <CardTitle className="text-bone text-lg font-display tracking-wide">{service.name}</CardTitle>
                              <p className="text-gold/80 text-xs">{service.subtitle}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full border bg-oxide/20 text-sand border-oxide/30">
                              <Clock className="w-3 h-3" />
                              {service.duration}
                            </span>
                            <span className="font-display text-gold font-semibold text-xl">
                              {formatPrice(service.price)}
                            </span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3 flex-grow flex flex-col">
                        <p className="text-sand/80 text-sm">{service.description}</p>

                        {service.details && (
                          <div className="bg-graphite/40 p-3 rounded-lg flex-grow">
                            <p className="text-bone text-xs mb-2">{labels.detailsTitle}</p>
                            <ul className="space-y-1.5">
                              {service.details.map((detail, j) => (
                                <li key={j} className="flex items-start gap-2 text-sand/70 text-xs">
                                  <Check className="w-3 h-3 text-gold mt-0.5 flex-shrink-0" />
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <Link
                          href={`${whatsappLink}?text=${encodeURIComponent(
                            locale === "pt" ? `Olá, gostaria de agendar: ${service.name}` : `Hello, I'd like to book: ${service.name}`,
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-gold/70 hover:text-gold text-sm transition-colors mt-auto"
                        >
                          {siteConfig.hero?.cta ?? (locale === "pt" ? "Agendar" : "Book")}
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 rounded-full transition-all ${
                index === current
                  ? "w-8 bg-gold"
                  : "w-2 bg-sand/30 hover:bg-sand/50"
              }`}
              aria-label={locale === 'pt' ? `Ir para slide ${index + 1}` : `Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
