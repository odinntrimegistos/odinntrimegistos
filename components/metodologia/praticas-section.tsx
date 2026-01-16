import { Layers, Moon, Compass, Flame, FlaskConical, Wind, Brain } from "lucide-react"

const praticas = [
  {
    icon: Layers,
    title: "TAROT",
    subtitle: "Oráculo de Consciência",
    description: "Utilizo o Tarot como linguagem simbólica profunda, não como instrumento de previsão fatalista.",
    aplicacoes: [
      "Leitura de padrões emocionais e mentais",
      "Compreensão de conflitos internos",
      "Clareza sobre escolhas e possibilidades",
      "Orientação em momentos de decisão",
    ],
    nota: "As cartas funcionam como espelho. Elas revelam o que já está ativo na psique e na vida.",
  },
  {
    icon: Moon,
    title: "ASTROLOGIA",
    subtitle: "Leitura do Tempo e dos Ciclos",
    description: "A Astrologia é utilizada como ferramenta de contextualização do momento de vida.",
    aplicacoes: ["Mapa natal", "Trânsitos atuais", "Ciclos de amadurecimento e encerramento"],
    objetivos: ["Em que fase está", "O que pede movimento", "O que pede paciência", "O que pede encerramento"],
    nota: "A astrologia devolve tempo e maturidade às decisões.",
  },
  {
    icon: Compass,
    title: "RUNAS",
    subtitle: "Direção e Verdade",
    description: "As runas são utilizadas como oráculo direto e objetivo.",
    aplicacoes: ["Escolhas", "Consequências", "Forças ativas no momento", "Desafios que não podem mais ser evitados"],
    nota: "As runas não suavizam. Elas mostram o que precisa ser encarado com honestidade.",
  },
  {
    icon: Flame,
    title: "RITUAIS SIMBÓLICOS",
    subtitle: "Passagem e Integração",
    description: "Os rituais que conduzo não pertencem a religiões institucionais. São rituais simbólicos conscientes.",
    aplicacoes: ["Marcar encerramentos", "Sustentar decisões", "Abrir novos ciclos", "Integrar mudanças internas"],
    nota: "O ritual não pede algo ao invisível. Ele organiza a intenção e ancora a escolha no corpo e na consciência.",
  },
  {
    icon: FlaskConical,
    title: "ALQUIMIA",
    subtitle: "Transformação Interior",
    description: "A alquimia é a base filosófica do meu método.",
    aplicacoes: [
      "Compreender processos internos",
      "Dissolver padrões antigos",
      "Integrar aprendizados",
      "Transformar consciência em postura",
    ],
    nota: "O ciclo alquímico (Nigredo, Albedo, Citrinitas e Rubedo) orienta tanto atendimentos pontuais quanto o processo completo do Opus Magnum.",
  },
  {
    icon: Wind,
    title: "CORPO, RESPIRAÇÃO E PRESENÇA",
    subtitle: "Vaso Alquímico",
    description: "Sem corpo presente, não existe transformação real.",
    aplicacoes: ["Respiração (pranayama funcional)", "Presença corporal", "Percepção de tensões e ritmo vital"],
    nota: "O corpo é tratado como vaso alquímico do processo espiritual.",
  },
  {
    icon: Brain,
    title: "LEITURA DE PADRÕES PSÍQUICOS",
    subtitle: "Consciência Aplicada",
    description: "Ao longo dos atendimentos, trabalho a identificação de padrões inconscientes.",
    aplicacoes: [
      "Padrões emocionais recorrentes",
      "Mecanismos de defesa",
      "Repetições inconscientes",
      "Conflitos entre desejo, medo e ação",
    ],
    nota: "Isso não é terapia clínica, mas consciência aplicada.",
  },
]

export function PraticasSection() {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-2xl md:text-3xl text-bone mb-4 tracking-wide">
            PRÁTICAS UTILIZADAS NOS ATENDIMENTOS
          </h2>
          <p className="text-sand/70 max-w-2xl mx-auto">
            Todas as práticas, saberes e ferramentas que emprego, sempre de forma integrada e ética.
          </p>
        </div>

        <div className="space-y-8">
          {praticas.map((pratica, index) => (
            <div
              key={pratica.title}
              className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-graphite/80 to-slate/30 border border-gold/10 hover:border-gold/20 transition-all group"
            >
              {/* Icon and Title */}
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gold/10 border border-gold/20 group-hover:bg-gold/15 transition-colors">
                  <pratica.icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-bone tracking-wide">{pratica.title}</h3>
                  <p className="text-gold/80 text-sm">{pratica.subtitle}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sand/80 mb-6">{pratica.description}</p>

              {/* Applications */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-xs text-gold/60 tracking-wider mb-3">
                    {pratica.objetivos ? "O OBJETIVO É AJUDAR A COMPREENDER" : "APLICAÇÕES"}
                  </p>
                  <ul className="space-y-2">
                    {pratica.aplicacoes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sand/70 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold/50 mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {pratica.objetivos && (
                  <div>
                    <p className="text-xs text-gold/60 tracking-wider mb-3">COMPREENDER</p>
                    <ul className="space-y-2">
                      {pratica.objetivos.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sand/70 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold/50 mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Note */}
              <div className="pt-4 border-t border-gold/10">
                <p className="text-sand/60 text-sm italic">{pratica.nota}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
