"use client"

import { useSiteConfig } from "@/lib/site-config"

export function PrincipioFundamental() {
  const siteConfig = useSiteConfig()
  const { principioFundamental } = siteConfig.metodologia

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Introduction */}
        <div className="mb-16 space-y-6 text-sand/90 text-lg leading-relaxed">
          {principioFundamental.intro.map((parts, index) => (
            <p key={index}>
              {parts.map((part, partIndex) => (
                <span key={partIndex} className={part.className}>
                  {part.text}
                </span>
              ))}
            </p>
          ))}
        </div>

        {/* Principio Fundamental Box */}
        <div className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-graphite to-slate/50 border border-gold/20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="px-4 py-1 text-xs tracking-[.2em] text-gold bg-obsidian border border-gold/30 rounded-full">
              {principioFundamental.label}
            </span>
          </div>

          <p className="text-2xl md:text-3xl text-bone font-display text-center leading-relaxed mt-4">
            {principioFundamental.statement.map((part, index) => (
              <span key={index} className={part.className}>
                {part.text}
              </span>
            ))}
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6 text-center">
            {principioFundamental.cards.map((card, index) => (
              <div key={index} className="p-4 rounded-xl bg-obsidian/50">
                <p className="text-sand/80 text-sm">
                  {card.parts.map((part, partIndex) => (
                    <span key={partIndex} className={part.className}>
                      {part.text}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>

          <p className="text-sand/70 text-center mt-8">
            {principioFundamental.closing}
          </p>
        </div>
      </div>
    </section>
  )
}
