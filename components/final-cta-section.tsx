"use client"

import Link from "next/link"
import { EgyptianDivider } from "@/components/egyptian-decorations"
import { AnimatedSection } from "@/components/animations"
import { motion } from "framer-motion"
import { siteConfig } from "@/lib/site-data"
import { ArrowRight } from "lucide-react"

export function FinalCTASection() {
  const whatsappMessage = encodeURIComponent("Olá, gostaria de agendar um atendimento.")
  const whatsappLink = `${siteConfig.links.whatsapp}?text=${whatsappMessage}`

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 temple-radial opacity-40" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <AnimatedSection>
          <EgyptianDivider className="mb-12" />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-2xl md:text-3xl text-bone mb-8"
          >
            {siteConfig.content.finalCTA}
          </motion.p>

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
