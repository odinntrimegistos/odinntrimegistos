"use client"

import Link from "next/link"
import { useSiteConfig } from "@/lib/use-site-config"

export function OCaminhoSection() {
  const siteConfig = useSiteConfig()
  const caminho = siteConfig?.metodologia?.caminho

  if (!caminho) return null

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-graphite/20 to-obsidian">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl text-bone tracking-wide">
            {caminho.title}
          </h2>
        </div>

        <div className="space-y-6 text-sand/80 leading-relaxed mb-12">
          {caminho.intro?.map((p: string, i: number) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="space-y-8 mb-12">
          {caminho.acts?.map((act: { key: string; title: string; quote?: string; process: string; vivencia: string }) => (
            <div key={act.key} className="p-6 rounded-2xl bg-slate/30 border border-gold/10">
              <h3 className="font-display text-lg text-bone mb-2">{act.title}</h3>
              {act.quote && (
                <p className="text-gold/80 italic mb-4">“{act.quote}”</p>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs text-gold/60 tracking-wider mb-2">O PROCESSO</p>
                  <p className="text-sand/80 text-sm">{act.process}</p>
                </div>
                <div>
                  <p className="text-xs text-gold/60 tracking-wider mb-2">A VIVÊNCIA</p>
                  <p className="text-sand/80 text-sm">{act.vivencia}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {caminho.closing && (
          <p className="text-center text-sand/70 mb-10">{caminho.closing}</p>
        )}

        {caminho.cta && (
          <div className="text-center">
            <Link href={caminho.cta.href} className="inline-flex items-center gap-2 btn-ritual rounded-lg px-8 py-4 font-medium text-bone tracking-wide">
              {caminho.cta.label}
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
