"use client"

import Link from "next/link"
import { EgyptianDivider } from "@/components/egyptian-decorations"
import { AnimatedSection } from "@/components/animations"
import { motion } from "framer-motion"
import { useSiteConfig } from "@/lib/use-site-config"
import { useI18n } from "@/lib/i18n"
import { ArrowRight } from "lucide-react"

export function EncerramentoSection() {
  const siteConfig = useSiteConfig()
  const { locale } = useI18n()
  const encerramento = siteConfig.encerramento
  const whatsappMessage = encodeURIComponent(
    locale === "pt" ? "Olá, gostaria de agendar um atendimento." : "Hello, I would like to book a session.",
  )
  const whatsappLink = `${siteConfig.links.whatsapp}?text=${whatsappMessage}`

  return (
    <section className="relative overflow-hidden">
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
      <div className="absolute inset-0 temple-radial opacity-40" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <AnimatedSection>
          <EgyptianDivider className="mb-12" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 mb-12"
          >
            {encerramento?.text && (
              <p className="font-display text-2xl md:text-3xl text-bone">{encerramento.text}</p>
            )}
            {encerramento?.subtext && (
              <p className="text-sand/80 text-lg">{encerramento.subtext}</p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ritual inline-flex items-center justify-center gap-3 rounded-xl px-10 py-5 font-medium text-bone tracking-wider transition-all duration-300 hover:shadow-[0_0_40px_rgba(184,155,74,0.3)] text-lg"
            >
              {siteConfig.hero?.cta ?? "Agendar Atendimento"}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <EgyptianDivider className="mt-12" />
        </AnimatedSection>
      </div>
    </section>
  )
}
