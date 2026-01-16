"use client"

import { Brain, Users, Gem } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { EgyptianDivider, AnkhSymbol } from "@/components/egyptian-decorations"
import { AnimatedSection, AnimatedStagger, AnimatedCard } from "@/components/animations"
import { motion } from "framer-motion"

const journeys = [
  {
    icon: Brain,
    title: "Mentoria Estratégica Individual",
    duration: "Sessão Única 60 min",
    price: "R$ 300",
    description:
      "Uma hora de filosofia aplicada. Usamos a Árvore da Vida para mapear onde sua vida travou e quais alavancas mentais e espirituais você precisa puxar para mudar o jogo.",
    highlight: false,
  },
  {
    icon: Users,
    title: "O Caminho de Hermes",
    duration: "Acompanhamento Mensal",
    price: "R$ 1.200",
    description:
      "4 encontros presenciais ou online + Suporte direto. Para momentos de transição, crises ou mudança de carreira. Eu acompanho seu passo a passo semanalmente, ajustando o diagnóstico astrológico, mantendo sua energia limpa e provendo suporte espiritual contínuo.",
    highlight: true,
  },
  {
    icon: Gem,
    title: "A Grande Obra",
    duration: "Jornada Alquímica de 7 Meses",
    price: "R$ 7.000",
    description:
      'O programa premium de reconstrução total da identidade. Percorremos os 7 estágios da alma (Calcinação, Dissolução, Separação, Conjunção, Fermentação, Destilação e Coagulação). É o processo de queimar quem você "acha que é" para manifestar o seu "Estado de Ouro" — sucesso real e paz profunda.',
    highlight: true,
  },
]

export function JourneysSection() {
  return (
    <section id="jornadas" className="py-24 md:py-32 relative overflow-hidden">
      {/* Decorative corner */}
      <motion.div
        initial={{ opacity: 0, rotate: 10 }}
        whileInView={{ opacity: 0.1, rotate: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute top-10 right-10 hidden lg:block"
      >
        <AnkhSymbol className="w-12 h-16 text-gold" />
      </motion.div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Transformação Estrutural</p>

          <h2
            className="text-3xl md:text-4xl tracking-wide mb-6 text-foreground"
            style={{ fontFamily: "var(--font-display)" }}
          >
            JORNADAS DE ACOMPANHAMENTO
          </h2>

          <EgyptianDivider className="mb-6" />

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Para quem deseja deixar de ser o passageiro e assumir o volante da própria vida.
          </p>
        </AnimatedSection>

        <AnimatedStagger className="grid gap-6">
          {journeys.map((journey, index) => (
            <AnimatedCard key={index}>
              <Card
                className={`backdrop-blur border-gold/10 hover:border-gold/30 transition-all duration-300 ${
                  journey.highlight ? "bg-gold/5 border-gold/20" : "bg-card/50"
                }`}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className={`w-14 h-14 flex items-center justify-center border transition-all duration-300 ${journey.highlight ? "border-gold/40 bg-gold/10" : "border-gold/20"}`}
                      >
                        <journey.icon className="w-7 h-7 text-gold" />
                      </motion.div>
                      <div>
                        <CardTitle
                          className="text-foreground text-xl mb-1"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {journey.title}
                        </CardTitle>
                        <p className="text-muted-foreground text-sm">{journey.duration}</p>
                      </div>
                    </div>
                    <div className="text-left md:text-right">
                      <span className="text-gold text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                        {journey.price}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed text-base">
                    {journey.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </AnimatedCard>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  )
}
