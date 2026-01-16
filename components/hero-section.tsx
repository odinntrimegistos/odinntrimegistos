"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { siteConfig } from "@/lib/site-data"
import { EyeOfHorus, AnkhSymbol, PyramidDecoration } from "./egyptian-decorations"

export function HeroSection() {
  const whatsappMessage = encodeURIComponent("Olá, gostaria de agendar um atendimento.")
  const whatsappLink = `${siteConfig.links.whatsapp}?text=${whatsappMessage}`

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 image-wrapper">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          className="object-cover image-unify"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/70 via-obsidian/50 to-obsidian" />
      </div>

      <div className="absolute inset-0 bg-obsidian/60" />
      <div className="absolute inset-0 temple-radial" />

      {/* Floating particles */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-1 h-1 rounded-full bg-gold"
        animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.5, 1] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-1 h-1 rounded-full bg-gold"
        animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.5, 1] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-1 h-1 rounded-full bg-gold"
        animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.5, 1] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
      />

      {/* Ambient glows */}
      <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-gold/10 blur-3xl animate-glow" />
      <div className="absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-deepred/15 blur-3xl animate-drift" />

      {/* Decorative symbols */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute left-8 md:left-16 top-1/4"
      >
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <EyeOfHorus className="w-24 md:w-32 h-auto text-gold" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, delay: 0.8 }}
        className="absolute right-8 md:right-16 top-1/3"
      >
        <motion.div
          animate={{ y: [0, 12, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <AnkhSymbol className="w-16 md:w-20 h-auto text-gold" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 2, delay: 1.1 }}
        className="absolute left-1/4 bottom-32"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <PyramidDecoration className="w-20 md:w-28 h-auto text-gold" />
        </motion.div>
      </motion.div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display text-gold tracking-[0.4em] uppercase text-sm mb-4"
        >
          {siteConfig.pillars}
        </motion.h2>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl text-bone leading-tight tracking-tight mb-6"
        >
          {siteConfig.heroLines.map((line, i) => (
            <span key={i} className={i < siteConfig.heroLines.length - 1 ? "block mb-2" : "block"}>
              {line}
            </span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-xl mx-auto mb-8 space-y-4 text-center"
        >
            <p className="text-sand/90 text-lg md:text-xl">{siteConfig.hero.intro}</p>
            {siteConfig.hero.offer && (
              <p className="text-bone font-display font-semibold">{siteConfig.hero.offer}</p>
            )}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <Link
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center mx-auto rounded-xl px-10 py-5 text-lg font-display text-bone tracking-wider transition-all duration-300 border border-[rgba(184,110,50,0.28)] bg-transparent hover:bg-opacity-5"
          >
            {siteConfig.hero.cta}
          </Link>
        </motion.div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-20 left-0 right-0">
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-gold/30" />
          <EyeOfHorus className="w-8 h-5 text-gold/40" />
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-gold/30" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <ChevronDown className="text-gold/60" size={32} />
        </motion.div>
      </motion.div>
    </section>
  )
}
