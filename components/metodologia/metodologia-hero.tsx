import { EgyptianCorner } from "@/components/egyptian-decorations"
import { siteConfig } from "@/lib/site-data"

export function MetodologiaHero() {
  const { hero } = siteConfig.metodologia

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background effects */}
      <div className="absolute inset-0 temple-radial opacity-60" />
      <div className="absolute inset-0 temple-grid opacity-20" />

      {/* Decorative corners */}
      <EgyptianCorner position="top-left" />
      <EgyptianCorner position="top-right" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/20 bg-gold/5 mb-8">
          <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="text-sm text-gold/80 tracking-wide">{hero.badge}</span>
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
