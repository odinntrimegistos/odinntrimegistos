import Link from "next/link"
import { siteConfig } from "@/lib/site-data"

export function EssenciaSection() {
  const { essencia } = siteConfig.metodologia

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-block px-4 py-1 rounded-full border border-gold/30 bg-gold/5 mb-8">
          <span className="text-xs tracking-[.2em] text-gold">{essencia.badge}</span>
        </div>

        <h2 className="font-display text-2xl md:text-3xl text-bone mb-8 leading-relaxed">
          {essencia.titleLines.map((line, index) => (
            <span
              key={index}
              className={index === essencia.titleHighlightLineIndex ? "text-gold" : undefined}
            >
              {line}
              {index < essencia.titleLines.length - 1 ? <br /> : null}
            </span>
          ))}
        </h2>

        <p className="text-sand/70 mb-8">{essencia.intro}</p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {essencia.chips.map((chip) => (
            <span key={chip} className="px-4 py-2 rounded-full bg-slate/30 border border-gold/10 text-sand/80 text-sm">
              {chip}
            </span>
          ))}
        </div>

        <div className="space-y-1 text-sand/50 mb-12">
          {essencia.closing.map((line, index) => (
            <p key={index} className={line.className}>
              {line.text}
            </p>
          ))}
        </div>

        <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-gold/40 to-transparent mb-12" />

        <Link
          href={essencia.cta.href}
          className="inline-flex items-center gap-2 btn-ritual rounded-lg px-8 py-4 font-medium text-bone tracking-wide transition-all"
        >
          {essencia.cta.label}
        </Link>
      </div>
    </section>
  )
}
