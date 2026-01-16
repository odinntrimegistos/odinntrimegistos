"use client"

import Link from "next/link"
import { EyeOfHorus } from "@/components/egyptian-decorations"
import { motion } from "framer-motion"
import ImageBackground from "@/components/image-background"
import { useI18n } from "@/lib/i18n"

export function Footer() {
  const { locale } = useI18n()

  const labels =
    locale === "pt"
      ? { quote: "Eu não te digo no que acreditar. Eu te ajudo a enxergar.", rights: "Todos os direitos reservados" }
      : { quote: "I don't tell you what to believe. I help you see.", rights: "All rights reserved" }

  return (
    <footer className="py-16 border-t border-gold/10 relative bg-obsidian overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <ImageBackground
          src="/images/footer-bg.jpg"
          alt="footer bg"
          wrapperClassName="absolute inset-0"
          imgClassName="object-cover image-unify opacity-30"
          overlayClassName="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <EyeOfHorus className="w-12 h-8 text-gold/30" />
        </motion.div>

        <div className="text-center">
          <Link
            href="/"
            className="font-display text-lg tracking-[.25em] text-gold/80 hover:text-gold transition-colors inline-block mb-4"
          >
            ODINN TRIMEGISTOS
          </Link>

          <p className="text-sm text-bone/80 italic mb-6 max-w-md mx-auto">"{labels.quote}"</p>

          <p className="text-xs text-sand/40">
            &copy; {new Date().getFullYear()} Odinn Trimegistos. {labels.rights}.
          </p>
        </div>
      </div>

      {/* Subtle bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
    </footer>
  )
}
