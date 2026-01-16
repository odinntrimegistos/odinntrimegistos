import Link from "next/link"

export function EssenciaSection() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-block px-4 py-1 rounded-full border border-gold/30 bg-gold/5 mb-8">
          <span className="text-xs tracking-[.2em] text-gold">EM ESSÊNCIA</span>
        </div>

        <h2 className="font-display text-2xl md:text-3xl text-bone mb-8 leading-relaxed">
          A Metodologia Trimegista não promete iluminação instantânea.
          <br />
          <span className="text-gold">Ela oferece clareza contínua, maturidade e coerência.</span>
        </h2>

        <p className="text-sand/70 mb-8">É um caminho para quem quer:</p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <span className="px-4 py-2 rounded-full bg-slate/30 border border-gold/10 text-sand/80 text-sm">
            Compreender a própria vida
          </span>
          <span className="px-4 py-2 rounded-full bg-slate/30 border border-gold/10 text-sand/80 text-sm">
            Assumir escolhas com consciência
          </span>
          <span className="px-4 py-2 rounded-full bg-slate/30 border border-gold/10 text-sand/80 text-sm">
            Viver com mais verdade
          </span>
        </div>

        <div className="space-y-1 text-sand/50 mb-12">
          <p>Sem fantasia.</p>
          <p>Sem fuga.</p>
          <p className="text-gold">Com presença.</p>
        </div>

        <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-gold/40 to-transparent mb-12" />

        <Link
          href="/#servicos"
          className="inline-flex items-center gap-2 btn-ritual rounded-lg px-8 py-4 font-medium text-bone tracking-wide transition-all"
        >
          Ver Serviços e Mentorias
        </Link>
      </div>
    </section>
  )
}
