"use client"

import Link from "next/link"
import Image from "next/image"
import { EyeOfHorus } from "@/components/egyptian-decorations"
import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n"
import { useSiteConfig } from "@/lib/use-site-config"

export function Footer() {
  const { locale } = useI18n()
  const siteConfig = useSiteConfig()

  const labels =
    locale === "pt"
      ? {
          quote: "Você não precisa acreditar em nada. Precisa apenas estar disposto a ver.",
          privacy: "Atendimentos Confidenciais.",
        }
      : { quote: "You don't need to believe anything. You only need to be willing to see.", privacy: "Confidential sessions." }

  return (
    <footer className="py-14 border-t border-gold/10 relative bg-black overflow-hidden">
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
          <Link href="/" className="inline-flex flex-col items-center gap-3 group" aria-label="Odinn Trimegistos">
            <Image
              src="/images/logo-favicon.png"
              alt="Logo Odinn Trimegistos"
              width={120}
              height={60}
              className="h-12 w-auto object-contain drop-shadow-[0_0_12px_rgba(255,214,137,0.18)] transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <span className="font-display text-sm tracking-[.35em] text-gold/80 group-hover:text-gold transition-colors">
              ODINN TRIMEGISTOS
            </span>
          </Link>

          <p className="text-sm text-bone/75 italic mt-4 max-w-xl mx-auto">&quot;{labels.quote}&quot;</p>

          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-sand/50">
            <Link href={siteConfig.whatsappHrefFor?.("finalInvite")} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
              Whatsapp
            </Link>
            <span className="text-sand/40">•</span>
            <Link
              href={siteConfig.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              Instagram
            </Link>
            <span className="text-sand/40">•</span>
            <Link
              href={`mailto:${siteConfig.links.email}`}
              className="hover:text-gold transition-colors"
            >
              E-mail
            </Link>
          </div>

          <p className="text-xs text-sand/40 mt-6">
            &copy; {new Date().getFullYear()} Odinn Trimegistos. {labels.privacy}
          </p>
        </div>
      </div>

      {/* Subtle bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
    </footer>
  )
}
