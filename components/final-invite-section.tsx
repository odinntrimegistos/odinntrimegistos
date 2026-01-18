"use client"

import Link from "next/link"
import { motion } from "framer-motion"

import { EgyptianDivider } from "@/components/egyptian-decorations"
import { AnimatedSection } from "@/components/animations"
import { SigilMind } from "@/components/sigils"
import { siteConfig } from "@/lib/site-data"
import { useI18n } from "@/lib/i18n"
import ImageBackground from "@/components/image-background"

export function FinalInviteSection() {
  const { locale } = useI18n()
  const whatsappMessage = encodeURIComponent(
    locale === "pt" ? "Olá, quero entender meu momento." : "Hello, I want to understand my moment.",
  )
  const whatsappLink = `${siteConfig.links.whatsapp}?text=${whatsappMessage}`

  const content =
    locale === "pt"
      ? {
          text: "O caos é poderoso, mas a ordem é soberana. Se você está pronto para sair do ruído e entrar na clareza, a porta está aberta.",
          cta: "ABRIR A PORTA",
        }
      : {
          text: "Chaos is powerful, but order is sovereign. If you're ready to leave the noise and enter clarity, the door is open.",
          cta: "OPEN THE DOOR",
        }

  return (
    <section id="contato" className="relative overflow-hidden bg-obsidian py-12 md:py-16">
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
      <div className="absolute inset-0 temple-radial opacity-40" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <AnimatedSection>
          <EgyptianDivider className="mb-12" />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-2xl md:text-3xl text-bone"
          >
            {content.text}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-10"
          >
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-copper inline-flex items-center justify-center rounded-xl px-10 py-4 font-display text-bone tracking-[0.14em]"
            >
              {content.cta}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.25 }}
            className="mt-14 flex items-center justify-center"
            aria-label="Logo Sigilo Odinn Trimegistos"
          >
            <SigilMind className="w-20 h-20 text-gold/60" />
          </motion.div>

          <EgyptianDivider className="mt-12" />
        </AnimatedSection>
      </div>
    </section>
  )
}
