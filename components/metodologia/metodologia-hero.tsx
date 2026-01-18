"use client"
import { EgyptianCorner } from "@/components/egyptian-decorations"
import { useSiteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"

export function MetodologiaHero({ compact = false }: { compact?: boolean }) {
  const siteConfig = useSiteConfig()
  const { hero } = siteConfig.metodologia

  return (
    <section
      className={cn(
        "relative flex items-center justify-center overflow-hidden",
        compact ? "min-h-[36vh] pt-16 pb-12" : "min-h-[60vh] pt-24 pb-16",
      )}
    >
      {/* Background video */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          className="w-full h-full object-cover opacity-40 block motion-safe:block motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hermes-hero-poster.svg"
          aria-hidden="true"
        >
          <source src="/videos/hermes-hero.mp4" type="video/mp4" />
        </video>
        <div className="hidden motion-reduce:block h-full w-full bg-gradient-to-b from-obsidian to-graphite/30" />
      </div>

      {/* Background effects and readability overlay */}
      <div className="absolute inset-0 bg-obsidian/50" />
      <div className="absolute inset-0 temple-radial opacity-60" />
      <div className="absolute inset-0 temple-grid opacity-20" />

      {/* Decorative corners */}
      <EgyptianCorner position="top-left" />
      <EgyptianCorner position="top-right" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
          <span aria-label="Caduceu de Hermes" className="text-6xl md:text-7xl lg:text-8xl text-gold">☤</span>
        </div>

        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-bone mb-6 tracking-wide">
          {hero.title}
        </h1>

        <p className="text-xl md:text-2xl text-gold/90 font-light mb-8">{hero.subtitle}</p>

        <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </div>
    </section>
  )
}
