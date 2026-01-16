"use client"

import { Star, Flame, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { EgyptianDivider, EyeOfHorus } from "@/components/egyptian-decorations"
import { AnimatedSection, AnimatedStagger, AnimatedCard } from "@/components/animations"

const pillars = [
  {
    icon: Star,
    title: "Astrologia",
    subtitle: "O Saber",
    tagline: "Seu GPS. Entenda o tempo para parar de brigar com o destino.",
    description:
      'A ciência do diagnóstico. Usamos o céu como um GPS técnico para entender o desenho da sua alma e o tempo das coisas. É o fim do "dar murro em ponta de faca".',
  },
  {
    icon: Flame,
    title: "Alquimia",
    subtitle: "O Fazer",
    tagline: "Sua limpeza. Transmute o peso em movimento e riqueza.",
    description:
      "A arte da transmutação. É onde a limpeza acontece. Usamos o princípio de Solve et Coagula para dissolver os bloqueios do ego e da energia e coagular uma nova realidade de força e prosperidade.",
  },
  {
    icon: Shield,
    title: "Teurgia",
    subtitle: "O Ser",
    tagline: "Seu escudo. Proteção e conexão real com o Sagrado.",
    description:
      "O trabalho divino. É a blindagem e a conexão direta com o Sagrado. Através de ritos e símbolos, estabelecemos uma autoridade espiritual para que você não caminhe sozinho no mundo.",
  },
]

export function MethodologySection() {
  return (
    <section id="metodologia" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <EyeOfHorus className="w-12 h-8 text-gold mx-auto mb-6" />

          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">A Ciência da Realização</p>

          <h2
            className="text-3xl md:text-4xl tracking-wide mb-6 text-foreground"
            style={{ fontFamily: "var(--font-display)" }}
          >
            METODOLOGIA TRIMEGISTOS
          </h2>

          <EgyptianDivider className="mb-6" />

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Três pilares. Uma integração. A síntese entre o Saber, o Fazer e o Ser que transforma conhecimento em
            realidade vivida.
          </p>
        </AnimatedSection>

        <AnimatedStagger className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <AnimatedCard key={index}>
              <Card className="bg-card/50 backdrop-blur border-gold/10 hover:border-gold/30 transition-all duration-300 h-full group">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 border border-gold/30 flex items-center justify-center group-hover:border-gold/60 group-hover:bg-gold/5 transition-all duration-300">
                    <pillar.icon className="w-8 h-8 text-gold" />
                  </div>
                  <CardTitle className="text-gold text-xl tracking-wide" style={{ fontFamily: "var(--font-display)" }}>
                    {pillar.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm uppercase tracking-wider">{pillar.subtitle}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-foreground text-sm italic mb-4 border-l-2 border-gold/50 pl-3 text-left">
                    {pillar.tagline}
                  </p>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {pillar.description}
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
