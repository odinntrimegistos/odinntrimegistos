"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Flame, Key } from "lucide-react"

import { EgyptianDivider } from "@/components/egyptian-decorations"
import { AnimatedSection, AnimatedStagger, AnimatedCard } from "@/components/animations"
import { Card, CardContent } from "@/components/ui/card"
import { useI18n } from "@/lib/i18n"

export function MetaphorsSection() {
  const { locale } = useI18n()
  const router = useRouter()
  const [isTorching, setIsTorching] = useState(false)

  const content =
    locale === "pt"
      ? {
          eyebrow: "Navegação Visual",
          title: "AS METÁFORAS",
          cards: [
            {
              title: "A TOCHA E O MAPA",
              eyebrow: "A VISÃO",
              visualLabel: "(Oráculos & Astrologia)",
              description:
                "Imagine caminhar no escuro. Você tropeça e se perde. A Tocha serve para ver onde está o buraco e onde está a ponte. Função: Diagnóstico & Clareza.",
              cta: "ACENDER A TOCHA",
              href: "/o-ver",
              isTorch: true,
              Icon: Flame,
            },
            {
              title: "O MARTELO E O FOGO",
              eyebrow: "A AÇÃO",
              visualLabel: "(Rituais & Magia)",
              description:
                "Ver o caminho não basta se houver uma pedra gigante bloqueando a passagem. O Martelo serve para quebrar inércias e limpar o terreno. Função: Ação & Mudança.",
              cta: "MOVER AS PEDRAS",
              href: "/o-agir",
              Icon: Flame,
            },
            {
              title: "A CHAVE MESTRA",
              eyebrow: "A CONSTÂNCIA",
              visualLabel: "(Círculo da Chave)",
              description:
                "Quem caminha muito tempo sabe: ter um porto seguro faz diferença. Para quem decidiu construir uma base sólida e contínua. Função: Pertencimento & Acesso.",
              cta: "PEGAR A CHAVE",
              href: "/a-ordem",
              Icon: Key,
            },
          ],
        }
      : {
          eyebrow: "Visual Navigation",
          title: "THE METAPHORS",
          cards: [
            {
              title: "THE TORCH AND THE MAP",
              eyebrow: "VISION",
              visualLabel: "(Oracles & Astrology)",
              description:
                "Imagine walking in the dark. You stumble and get lost. The Torch shows where the hole is and where the bridge is. Function: Diagnosis & Clarity.",
              cta: "LIGHT THE TORCH",
              href: "/o-ver",
              isTorch: true,
              Icon: Flame,
            },
            {
              title: "THE HAMMER AND THE FIRE",
              eyebrow: "ACTION",
              visualLabel: "(Rituals & Magic)",
              description:
                "Seeing the path isn't enough if a giant stone blocks the way. The Hammer breaks inertia and clears the ground. Function: Action & Change.",
              cta: "MOVE THE STONES",
              href: "/o-agir",
              Icon: Flame,
            },
            {
              title: "THE MASTER KEY",
              eyebrow: "CONSTANCY",
              visualLabel: "(Key Circle)",
              description:
                "Those who walk a long time know: having a safe harbor matters. For those who decided to build a solid and continuous base. Function: Belonging & Access.",
              cta: "TAKE THE KEY",
              href: "/a-ordem",
              Icon: Key,
            },
          ],
        }
  return (
    <section id="metaforas" className="relative overflow-hidden">
      {/* Gradientes de transição superior e inferior com fade */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.1 }}
        className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-obsidian/80 via-obsidian/30 to-transparent pointer-events-none z-10"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.1 }}
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-obsidian/80 via-obsidian/30 to-transparent pointer-events-none z-10"
      />
      {isTorching && (
        <div className="pointer-events-none fixed inset-0 z-[60]">
          <div className="torch-flash" />
          <div className="torch-fire" />
        </div>
      )}
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-14">
          <p className="font-display text-gold tracking-[0.3em] uppercase text-xs mb-4">{content.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-4xl tracking-wide text-bone">{content.title}</h2>
          <EgyptianDivider className="mt-10" />
        </AnimatedSection>

        <AnimatedStagger className="grid lg:grid-cols-3 gap-6">
          {content.cards.map((c) => (
            <AnimatedCard key={c.title}>
              <motion.div whileHover={{ y: -6 }} className="h-full text-center">
                <Card className="etched bg-obsidian/60 backdrop-blur border-0 hover:border-gold/30 transition-all h-full rounded-xl overflow-hidden">
                  <div className="relative p-6 pb-0">
                    <div className="absolute -top-24 -right-16 w-72 h-72 rounded-full bg-gold/10 blur-3xl" />
                    <div className="absolute -bottom-28 -left-20 w-72 h-72 rounded-full bg-deepred/10 blur-3xl" />

                    <p className="text-gold/80 text-xs tracking-[0.35em] uppercase">{c.eyebrow}</p>
                    <p className="font-display text-bone text-xl mt-3">{c.title}</p>
                    <p className="text-gold/70 text-xs mt-1">{c.visualLabel}</p>

                    <div className="mt-6 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full border border-gold/25 bg-graphite/40 flex items-center justify-center">
                        <c.Icon className="w-7 h-7 text-gold" />
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6 pt-5">
                    <p className="text-sand/75 text-sm leading-relaxed text-center">{c.description}</p>
                    <div className="mt-6 flex justify-center">
                      {c.isTorch ? (
                        <button
                          type="button"
                          onClick={() => {
                            if (isTorching) return
                            setIsTorching(true)
                            setTimeout(() => router.push(c.href), 380)
                          }}
                          className="torch-button inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-bone text-xs tracking-widest"
                          aria-label={c.cta}
                        >
                          <Flame className="w-4 h-4 torch-icon" />
                          {c.cta}
                        </button>
                      ) : (
                        <Link
                          href={c.href}
                          className="btn-ritual inline-flex items-center justify-center rounded-lg px-6 py-3 text-bone text-xs tracking-widest"
                        >
                          {c.cta}
                        </Link>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedCard>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  )
}
