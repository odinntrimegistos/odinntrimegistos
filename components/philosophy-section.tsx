"use client"

import { EgyptianDivider } from "@/components/egyptian-decorations"
import { AnimatedSection } from "@/components/animations"
import { useI18n } from "@/lib/i18n"
import ImageBackground from "@/components/image-background"

export function PhilosophySection() {
  const { locale } = useI18n()

  const content =
    locale === "pt"
      ? {
          title: "DA FLORESTA À PEDRA",
          paragraphs: [
            "Eu sou Odinn Trimegistos. Nasci onde a mata engole a cidade, e desde cedo aprendi uma verdade dura: força sem direção é apenas cansaço.",
            "Minha caminhada não começou com fé cega, mas com observação. Eu aprendi a ver os padrões ocultos, a nomear o que parecia confuso, e a buscar a estrutura por trás do caos.",
            "Meu ofício não é místico por capricho; é técnico por necessidade. Eu uno a sabedoria antiga (o Norte) com a estrutura lógica (o Hermetismo) para criar uma Arquitetura de Vida.",
          ],
        }
      : {
          title: "FROM FOREST TO STONE",
          paragraphs: [
            "Have you ever felt like you're walking in circles in the forest? I was born where the jungle swallows the city, and I learned early a hard truth: force without direction is just exhaustion.",
            "My craft isn't mystical by whim; it's technical by necessity. I unite ancient wisdom (the North) with logical structure (Hermeticism) to build an Architecture of Life.",
          ],
        }
  return (
    <section id="filosofia" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <ImageBackground
          src="/images/raizes.jpeg"
          alt="raizes background"
          wrapperClassName="absolute inset-0"
          imgClassName="object-cover image-unify opacity-35"
          overlayClassName="absolute inset-0 bg-gradient-to-b from-graphite/60 via-obsidian/80 to-obsidian"
        />
        <div className="absolute inset-0 opacity-20 temple-radial" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center">
          <h2 className="font-display text-3xl md:text-4xl tracking-wide text-bone">{content.title}</h2>
          <EgyptianDivider className="my-10" />

          <div className="max-w-3xl mx-auto space-y-6 text-center">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-sand/80 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
