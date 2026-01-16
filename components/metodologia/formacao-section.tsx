import { GraduationCap } from "lucide-react"

const formacoes = [
  "Hermetismo clássico e filosofia trimegista",
  "Tarot simbólico e arquetípico",
  "Astrologia tradicional e aplicada",
  "Alquimia espiritual",
  "Cabala hermética",
  "Runas do Elder Futhark",
  "Práticas de respiração e presença",
  "Estudo comparado de tradições simbólicas",
  "Experiência direta em atendimentos e mentorias",
]

export function FormacaoSection() {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-graphite to-slate/30 border border-gold/15">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-gold/10 border border-gold/20">
              <GraduationCap className="w-6 h-6 text-gold" />
            </div>
            <h2 className="font-display text-2xl text-bone tracking-wide">FORMAÇÃO E BASE DE CONHECIMENTO</h2>
          </div>

          <p className="text-sand/80 mb-8">
            Minha formação é construída a partir de estudo contínuo e prática real, incluindo:
          </p>

          <div className="grid md:grid-cols-2 gap-3 mb-8">
            {formacoes.map((item) => (
              <div key={item} className="flex items-center gap-3 p-3 rounded-lg bg-obsidian/50 border border-gold/5">
                <span className="w-2 h-2 rounded-full bg-gold/50 flex-shrink-0" />
                <span className="text-sand/80 text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-gold/10 space-y-2">
            <p className="text-sand/60">Não reproduzo dogmas.</p>
            <p className="text-gold">Trabalho com o que foi vivido, testado e integrado.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
