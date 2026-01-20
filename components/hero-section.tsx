"use client"

import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useMemo, useRef } from "react"
import { useSiteConfig } from "@/lib/use-site-config"
import { useI18n } from "@/lib/i18n"
import { EyeOfHorus, AnkhSymbol, PyramidDecoration } from "./egyptian-decorations"
import ImageBackground from "@/components/image-background"

export function HeroSection() {
  const siteConfig = useSiteConfig()
  const { locale } = useI18n()
  const whatsappLink = siteConfig.whatsappHrefFor?.("hero")

  const sectionRef = useRef<HTMLElement | null>(null)

  const dustParticles = useMemo(
    () => [
      { top: "18%", left: "22%", size: 18, blur: 6, opacity: 0.14, duration: 10, delay: 0.2 },
      { top: "26%", left: "68%", size: 14, blur: 5, opacity: 0.12, duration: 12, delay: 1.4 },
      { top: "34%", left: "40%", size: 10, blur: 4, opacity: 0.11, duration: 9, delay: 0.8 },
      { top: "46%", left: "78%", size: 22, blur: 7, opacity: 0.13, duration: 14, delay: 2.2 },
      { top: "56%", left: "16%", size: 16, blur: 6, opacity: 0.12, duration: 11, delay: 1.1 },
      { top: "64%", left: "52%", size: 26, blur: 8, opacity: 0.12, duration: 16, delay: 0.6 },
      { top: "72%", left: "84%", size: 12, blur: 5, opacity: 0.1, duration: 10, delay: 1.9 },
      { top: "78%", left: "34%", size: 20, blur: 7, opacity: 0.11, duration: 13, delay: 2.7 },
      { top: "22%", left: "86%", size: 9, blur: 4, opacity: 0.09, duration: 8, delay: 0.4 },
      { top: "82%", left: "12%", size: 8, blur: 4, opacity: 0.08, duration: 9, delay: 1.7 },
    ],
    [],
  )

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const finePointer = window.matchMedia("(pointer: fine)").matches
    if (reduceMotion || !finePointer) return

    const handle = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width - 0.5
      const y = (event.clientY - rect.top) / rect.height - 0.5

      el.style.setProperty("--parallax-x", `${x * 14}px`)
      el.style.setProperty("--parallax-y", `${y * 10}px`)
    }

    window.addEventListener("pointermove", handle, { passive: true })
    return () => window.removeEventListener("pointermove", handle)
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        // Desktop-only parallax variables; remain 0 on mobile/reduced-motion.
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        "--parallax-x": "0px",
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        "--parallax-y": "0px",
      }}
      className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image (parallax) */}
      <div className="absolute inset-0 w-full h-full" style={{ transform: "translate3d(var(--parallax-x), var(--parallax-y), 0)" }}>
        <ImageBackground
          src="/images/bg-frame.jpg"
          alt="hero background"
          wrapperClassName="absolute inset-0"
          imgClassName="object-cover image-unify"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/70 via-obsidian/50 to-obsidian" />
      </div>

      <div className="absolute inset-0 bg-obsidian/60" />
      <div className="absolute inset-0 temple-radial" />

      {/* Golden dust / bokeh (disabled on mobile) */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none hidden md:block opacity-80"
        style={{ transform: "translate3d(var(--parallax-x), var(--parallax-y), 0)" }}
      >
        <div className="absolute inset-0 hero-dust animate-drift motion-reduce:animate-none" />

        {/* Floating bokeh particles */}
        {dustParticles.map((p, idx) => (
          <motion.div
            // eslint-disable-next-line react/no-array-index-key
            key={idx}
            className="absolute rounded-full"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              background:
                "radial-gradient(circle at 30% 30%, rgba(229, 219, 207, 0.55), rgba(200, 138, 72, 0.22) 35%, rgba(200, 138, 72, 0) 70%)",
              filter: `blur(${p.blur}px)`,
              mixBlendMode: "screen",
            }}
            animate={{
              y: [0, -18, 0],
              x: [0, 10, 0],
              opacity: [p.opacity * 0.75, p.opacity * 1.2, p.opacity * 0.75],
              scale: [1, 1.22, 1],
            }}
            transition={{
              duration: p.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Ambient glows */}
      <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-gold/10 blur-3xl animate-glow" />
      <div className="absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-deepred/15 blur-3xl animate-drift" />

      {/* Decorative symbols */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute left-8 md:left-16 top-1/4"
        style={{ transform: "translate3d(var(--parallax-x), var(--parallax-y), 0)" }}
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
        style={{ transform: "translate3d(calc(var(--parallax-x) * -0.7), var(--parallax-y), 0)" }}
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
        style={{ transform: "translate3d(var(--parallax-x), calc(var(--parallax-y) * -0.6), 0)" }}
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
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
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
          className="hero-title-imponente font-display uppercase text-5xl md:text-7xl lg:text-8xl text-bone leading-[1.02] tracking-[0.08em] mb-6"
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
          className="max-w-xl mb-7 mx-auto"
        >
          <p className="text-sand/90 text-sm md:text-sm tracking-wide leading-relaxed">{siteConfig.hero.intro}</p>
        </motion.div>

        </div>
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
        className="absolute bottom-5 left-1/2 -translate-x-1/2"
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
