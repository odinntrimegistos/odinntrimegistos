"use client"

import Link from "next/link"
import Image from "next/image"
import ImageBackground from "@/components/image-background"
import { MessageCircle, Mail, Instagram } from "lucide-react"
import { EgyptianDivider } from "@/components/egyptian-decorations"
import { AnimatedSection } from "@/components/animations"
import { motion } from "framer-motion"
import { siteConfig } from "@/lib/site-data"
import { useI18n } from "@/lib/i18n"

export function ContactSection() {
  const { locale } = useI18n()
  const whatsappMessage = encodeURIComponent(
    locale === "pt" ? "Olá, gostaria de agendar um atendimento." : "Hello, I would like to schedule a session.",
  )
  const whatsappLink = `${siteConfig.links.whatsapp}?text=${whatsappMessage}`

  const labels =
    locale === "pt"
      ? {
          label: "O Próximo Passo",
          title: "PRONTO?",
          p1: "Se você chegou até aqui, provavelmente não foi por acaso.",
          p2: "A conversa começa no WhatsApp. Sem compromisso, sem pressão. Me conta o que está acontecendo e vemos juntos qual o melhor caminho.",
          cta: "CHAMAR NO WHATSAPP",
        }
      : {
          label: "The Next Step",
          title: "READY?",
          p1: "If you've come this far, it probably wasn't by accident.",
          p2: "The conversation starts on WhatsApp. No commitment, no pressure. Tell me what's happening and we'll figure out the best path together.",
          cta: "MESSAGE ON WHATSAPP",
        }

  return (
    <section id="contato" className="py-24 md:py-32 relative overflow-hidden">
      <ImageBackground
        src="/images/circulo.jpg"
        alt="background"
        wrapperClassName="absolute inset-0"
        imgClassName="object-cover image-unify opacity-20"
        overlayClassName="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/80 to-obsidian/60"
      />

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gold/5 blur-3xl"
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gold/5 blur-3xl animate-glow" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-deepred/10 blur-3xl animate-drift" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <AnimatedSection>
          <p className="font-display text-gold tracking-[0.3em] uppercase text-xs mb-4">{labels.label}</p>

          <h2 className="font-display text-3xl md:text-4xl tracking-wide mb-6 text-bone">{labels.title}</h2>

          <EgyptianDivider className="mb-8" />

          <p className="text-sand/80 mb-4 leading-relaxed">{labels.p1}</p>
          <p className="text-bone mb-8 leading-relaxed">{labels.p2}</p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ritual inline-flex items-center justify-center rounded-xl px-10 py-4 font-medium text-bone tracking-widest text-sm transition-all duration-300 hover:shadow-[0_0_40px_rgba(184,155,74,0.25)] animate-pulse-gold"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                {labels.cta}
              </Link>
            </motion.div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="flex justify-center gap-6 mb-8">
            <motion.div whileHover={{ scale: 1.2, y: -2 }} transition={{ duration: 0.2 }}>
              <Link
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sand/60 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, y: -2 }} transition={{ duration: 0.2 }}>
              <Link
                href={`mailto:${siteConfig.links.email}`}
                className="text-sand/60 hover:text-gold transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </Link>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
