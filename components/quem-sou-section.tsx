"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { EgyptianDivider } from "@/components/egyptian-decorations"
import { AnimatedSection, AnimatedStagger, AnimatedItem } from "@/components/animations"
import { useI18n } from "@/lib/i18n"

export function QuemSouSection() {
  const { locale } = useI18n()
  const content =
    locale === "pt"
      ? {
          eyebrow: "Trajetória",
          title: "O ARQUITETO DA REALIDADE",
          intro: [
            "Esqueça a imagem do sábio intocável meditando no topo da montanha. A minha história é bem mais suja de terra do que isso.",
            "Eu não sou um guru. Sou apenas um sobrevivente do caos que, por necessidade, aprendeu a desenhar mapas. E minha jornada não começa em templos dourados, mas num lugar onde a natureza aprendeu a devorar a pedra.",
          ],
          sections: [
            {
              heading: "ONDE A FLORESTA ALMOÇA PALÁCIOS",
              paragraphs: [
                "Eu nasci em Belém do Pará. Chamavam de \"Paris n'America\", mas o que eu via era uma batalha silenciosa. Palácios de mármore europeu tentando, em vão, resistir ao avanço úmido da floresta amazônica.",
                "Cresci vendo estátuas de deuses gregos cobertas de musgo. Ali, aprendi minha primeira lição de magia sem ler nenhum livro: A Natureza sempre vence a Forma.",
                "Desde moleque, eu sentia as correntes invisíveis que moviam as pessoas. Mas intuição sem técnica é só confusão. Eu precisava entender a mecânica da coisa.",
              ],
            },
            {
              heading: "14 ANOS DE MERGULHO",
              paragraphs: [
                "Durante 14 anos, eu me dediquei a estudar o invisível. Enquanto a vida corria lá fora, eu mergulhava na Magia, na Arte e no Ocultismo. Não foi um hobby de fim de semana; foi uma obsessão.",
                "Eu devorei sistemas, decifrei símbolos e entendi a teoria por trás da realidade. Eu tinha o conhecimento. Eu tinha a \"espada\". Mas saber usar a espada no treino é uma coisa; usá-la na guerra é outra.",
                "Teoria sem cicatriz é apenas filosofia barata. Eu precisava do teste real.",
              ],
            },
            {
              heading: "4 ANOS DE ESTRADA",
              paragraphs: [
                "Larguei a segurança e fui para o mundo. Por 4 anos, vivi como um Andarilho. Fui testar minha magia no asfalto, longe de casa, como um estranho em terras estranhas.",
                "Foi nesses 4 anos de estrada que eu encarnei o arquétipo de Odin: o deus que não fica sentado no trono, mas se disfarça de viajante e sacrifica o conforto para ganhar Sabedoria real.",
                "A estrada limpou o que era supérfluo. O que funcionava nos livros, mas falhava na vida real, eu descartei. Fiquei apenas com o que era sólido.",
              ],
            },
            {
              heading: "A DESCOBERTA DA TECNOLOGIA",
              paragraphs: [
                "Nessa mistura de estudo profundo e vivência bruta, a ficha caiu. Quando aprofundei nas Runas do Norte e no Hermetismo Egípcio, percebi que eles não eram \"mitologia\". Eram manuais técnicos.",
                "Eles descreviam exatamente as mesmas forças selvagens que eu sentia na Amazônia e que eu via na estrada, só que eles davam nome e estrutura para tudo aquilo.",
                "Percebi que o Pajé na floresta e o Mago na biblioteca são a mesma pessoa: um tradutor de mundos. Alguém que entra no caos e sai de lá com uma cura.",
              ],
            },
            {
              heading: "POR QUE \"ODINN TRIMEGISTOS\"?",
              paragraphs: [
                "Muita gente pergunta. Não escolhi esse nome para soar importante. Escolhi porque é a descrição exata da minha ferramenta de trabalho.",
                "ODINN é o método. É a parte de mim que foi para a estrada. O sacrifício, a rudeza, a solidão necessária para olhar para o abismo e não piscar.",
                "TRIMEGISTOS é a meta. Significa \"O Três Vezes Grande\". É a síntese dos meus 14 anos de estudo. A união do Corpo (a terra), da Mente (a estrutura) e da Alma (a vontade).",
                "Basicamente? Sou um homem que passou 14 anos afiando a ferramenta e 4 anos aprendendo a usá-la no mundo real.",
              ],
            },
            {
              heading: "O QUE EU POSSO FAZER POR VOCÊ",
              paragraphs: [
                "Muitas pessoas chegam até mim vivendo como a floresta de onde eu vim: cheias de vida, mas emaranhadas, confusas, sufocadas pelo próprio crescimento desordenado.",
                "Você não precisa de alguém para passar a mão na sua cabeça e dizer que vai ficar tudo bem. Você precisa de alguém que lhe entregue o mapa do terreno, uma lanterna forte e uma pá.",
                "O meu ofício é trazer a Lógica Hermética para o seu caos. Eu uso os oráculos e os rituais como engenharia para abrir clareiras na sua mente, firmar alicerces na sua vontade e permitir que você pare de apenas sobreviver e comece a construir.",
                "Eu trago a estrutura da pedra para quem está perdido na selva.",
                "Agora você sabe quem eu sou. A pergunta é: o que você precisa agora?",
              ],
            },
          ],
          ctas: [
            { label: "QUERO ENTENDER O QUE ESTÁ ACONTECENDO COMIGO", href: "/o-ver#oraculos" },
            { label: "JÁ ENTENDI, PRECISO MUDAR A REALIDADE", href: "/o-agir#rituais" },
          ],
        }
      : {
          eyebrow: "Journey",
          title: "THE ARCHITECT OF REALITY",
          intro: [
            "Forget the image of the untouchable sage meditating on a mountain top. My story is far more stained with earth than that.",
            "I am not a guru. I am a survivor of chaos who, by necessity, learned to draw maps. My journey doesn’t begin in golden temples, but in a place where nature learned to devour stone.",
          ],
          sections: [
            {
              heading: "WHERE THE FOREST EATS PALACES",
              paragraphs: [
                "I was born in Belém do Pará. They called it \"Paris n'America\", but what I saw was a silent battle: European marble palaces trying— in vain — to resist the humid advance of the Amazon forest.",
                "I grew up watching statues of Greek gods covered in moss. There I learned my first lesson of magic without reading a single book: Nature always defeats Form.",
                "Since I was a kid, I felt the invisible currents that move people. But intuition without technique is just confusion. I needed to understand the mechanics.",
              ],
            },
            {
              heading: "14 YEARS OF IMMERSION",
              paragraphs: [
                "For 14 years, I devoted myself to studying the invisible. While life moved outside, I dove into Magic, Art, and the Occult. It wasn’t a weekend hobby; it was an obsession.",
                "I devoured systems, decoded symbols, and understood the theory behind reality. I had the knowledge. I had the \"sword.\" But using the sword in training is one thing; using it in war is another.",
                "Theory without scar is cheap philosophy. I needed the real test.",
              ],
            },
            {
              heading: "4 YEARS ON THE ROAD",
              paragraphs: [
                "I left safety behind and went into the world. For 4 years, I lived as a wanderer. I tested my magic on the asphalt, far from home, a stranger in strange lands.",
                "In those four years, I embodied Odin’s archetype: the god who doesn’t sit on the throne, but disguises himself as a traveler and sacrifices comfort to gain real Wisdom.",
                "The road cleaned away what was superfluous. What worked in books but failed in real life, I discarded. I kept only what was solid.",
              ],
            },
            {
              heading: "THE DISCOVERY OF THE TECHNOLOGY",
              paragraphs: [
                "In this mix of deep study and raw experience, it clicked. When I went deeper into Northern Runes and Egyptian Hermeticism, I realized they weren’t \"mythology.\" They were technical manuals.",
                "They described the same wild forces I felt in the Amazon and saw on the road— but they gave them names and structure.",
                "I realized the forest shaman and the library mage are the same person: a translator of worlds. Someone who enters chaos and returns with a cure.",
              ],
            },
            {
              heading: "WHY \"ODINN TRIMEGISTOS\"?",
              paragraphs: [
                "People ask a lot. I didn’t choose the name to sound important. I chose it because it precisely describes my working tool.",
                "ODINN is the method: the part of me that went to the road. The sacrifice, the roughness, the solitude required to stare into the abyss and not blink.",
                "TRIMEGISTOS is the goal: the ‘Thrice-Great.’ The synthesis of my 14 years of study — the union of Body (earth), Mind (structure), and Soul (will).",
                "In short? I spent 14 years sharpening the tool and 4 years learning to use it in the real world.",
              ],
            },
            {
              heading: "WHAT I CAN DO FOR YOU",
              paragraphs: [
                "Many people reach me living like the forest I came from: full of life, but tangled, confused, suffocated by their own disordered growth.",
                "You don’t need someone to pat your head and say everything will be fine. You need someone who hands you the terrain map, a strong lantern, and a shovel.",
                "My craft is to bring Hermetic Logic to your chaos. I use oracles and rituals as engineering to open clearings in your mind, lay foundations in your will, and help you stop merely surviving and start building.",
                "I bring the structure of stone to those lost in the jungle.",
                "Now you know who I am. The question is: what do you need now?",
              ],
            },
          ],
          ctas: [
            { label: "I WANT TO UNDERSTAND WHAT'S HAPPENING", href: "/o-ver#oraculos" },
            { label: "I UNDERSTAND — I NEED TO CHANGE REALITY", href: "/o-agir#rituais" },
          ],
        }

  return (
    <section id="quem-sou" className="py-24 md:py-32 relative overflow-hidden bg-graphite/50">
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
      <div className="absolute inset-0 grain-animated" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-12">
          <p className="font-display text-gold tracking-[0.3em] uppercase text-xs mb-4">{content.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-4xl tracking-wide mb-8 text-bone">{content.title}</h2>
          <EgyptianDivider className="mb-8" />
          <div className="max-w-3xl mx-auto space-y-4 text-sand/80">
            {content.intro.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedStagger className="space-y-8">
          {content.sections.map((section) => (
            <AnimatedItem key={section.heading}>
              <h3 className="font-display text-lg text-gold mb-3 text-center">{section.heading}</h3>
              <div className="space-y-4 text-center">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-sand/80 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </AnimatedItem>
          ))}
        </AnimatedStagger>

        <AnimatedSection className="mt-10">
          <div className="flex flex-col gap-4 items-center">
            {content.ctas.map((cta) => (
              <Link
                key={cta.label}
                href={cta.href}
                className="btn-ritual inline-flex items-center justify-center rounded-lg px-6 py-3 text-bone text-xs md:text-sm tracking-widest"
              >
                {cta.label}
              </Link>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
