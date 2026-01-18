"use client"

import Link from "next/link"
import { motion } from "framer-motion"

import { EgyptianDivider } from "@/components/egyptian-decorations"
import { AnimatedSection, AnimatedStagger, AnimatedItem } from "@/components/animations"
import { useI18n } from "@/lib/i18n"

export function ArsenalSection() {
  const { locale } = useI18n()

  const content =
    locale === "pt"
      ? {
          title: "TECNOLOGIA ANCESTRAL PARA PROBLEMAS MODERNOS",
          cta: "EXPLORAR TODAS AS FERRAMENTAS",
          cards: [
            {
              number: "1",
              title: "O DIAGNÓSTICO",
              subtitle: "(Oráculos & Runas)",
              text: "Para quem precisa de clareza imediata. O Tarot funciona como um espelho da mente, revelando as travas. As Runas são a bússola estratégica, apontando a melhor ação prática. Onde você está e para onde deve ir.",
            },
            {
              number: "2",
              title: "O CENÁRIO",
              subtitle: "(Astrologia Hermética)",
              text: "Para quem busca entender o tempo. Não lemos horóscopo; lemos o manual de instruções do seu momento. Mapeamos seus ciclos e a mecânica dos relacionamentos. Quem você é e qual é o seu tempo.",
            },
            {
              number: "3",
              title: "A ENGENHARIA",
              subtitle: "(Rituais & Magia)",
              text: "Para quem precisa mover obstáculos. Quando o diagnóstico mostra uma pedra que não pode ser desviada, usamos a Alta Magia para limpar o terreno e construir vontade. Como mudar o que parece imutável.",
            },
          ],
        }
      : {
          title: "ANCIENT TECH FOR MODERN PROBLEMS",
          cta: "EXPLORE ALL TOOLS",
          cards: [
            {
              number: "1",
              title: "THE DIAGNOSIS",
              subtitle: "(Oracles & Runes)",
              text: "For those who need immediate clarity. Tarot mirrors the mind and reveals blocks. Runes are the strategic compass, pointing to the best practical action. Where you are and where to go.",
            },
            {
              number: "2",
              title: "THE SCENARIO",
              subtitle: "(Hermetic Astrology)",
              text: "For those who want to understand time. We don’t read horoscopes; we read the manual of your moment. We map cycles and relationship mechanics. Who you are and what your time is.",
            },
            {
              number: "3",
              title: "THE ENGINEERING",
              subtitle: "(Rituals & Magic)",
              text: "For those who need to move obstacles. When diagnosis reveals a stone you cannot bypass, we use High Magic to clear the ground and build will. How to change what seems immutable.",
            },
          ],
        }
  return (
    <section id="arsenal" className="relative overflow-hidden bg-graphite/50">
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
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-14">
          <h3 className="font-display text-2xl md:text-3xl tracking-wide text-bone">
            {content.title}
          </h3>
          <EgyptianDivider className="mt-10" />
        </AnimatedSection>

        <AnimatedStagger className="grid md:grid-cols-3 gap-6">
          {content.cards.map((item) => (
            <AnimatedItem key={item.number}>
              <motion.div
                whileHover={{ y: -4 }}
                className="h-full rounded-xl bg-obsidian/60 backdrop-blur border border-gold/10 hover:border-gold/30 transition-all p-6 text-center"
              >
                <div className="flex flex-col items-center gap-2">
                  <p className="font-display text-gold text-2xl">{item.number}.</p>
                  <div>
                    <p className="font-display text-bone tracking-wide">{item.title}</p>
                    <p className="text-gold/70 text-xs mt-1">{item.subtitle}</p>
                  </div>
                </div>
                <p className="text-sand/75 text-sm leading-relaxed mt-4">{item.text}</p>
              </motion.div>
            </AnimatedItem>
          ))}
        </AnimatedStagger>

        <AnimatedSection className="text-center mt-14">
          <Link
            href="/o-ver"
            className="btn-ritual inline-flex items-center justify-center rounded-xl px-10 py-4 font-medium text-bone tracking-widest text-sm transition-all duration-300 hover:shadow-[0_0_40px_rgba(184,155,74,0.22)]"
          >
            {content.cta}
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
