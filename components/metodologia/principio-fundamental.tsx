export function PrincipioFundamental() {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Introduction */}
        <div className="mb-16 space-y-6 text-sand/90 text-lg leading-relaxed">
          <p>Meu trabalho nasce do encontro entre tradição, experiência prática e observação profunda do ser humano.</p>
          <p>
            Não sigo dogmas, não repito fórmulas prontas e não uso espiritualidade como fuga da realidade. Tudo o que
            aplico nos atendimentos tem <span className="text-gold">função, coerência simbólica e impacto prático</span>
            .
          </p>
          <p>
            Chamo esse caminho de <span className="text-bone font-medium">Metodologia Trimegista</span> porque ele se
            baseia na integração entre <span className="text-gold">consciência, propósito e ação</span>.
          </p>
        </div>

        {/* Principio Fundamental Box */}
        <div className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-graphite to-slate/50 border border-gold/20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="px-4 py-1 text-xs tracking-[.2em] text-gold bg-obsidian border border-gold/30 rounded-full">
              PRINCÍPIO FUNDAMENTAL
            </span>
          </div>

          <p className="text-2xl md:text-3xl text-bone font-display text-center leading-relaxed mt-4">
            A verdadeira transformação acontece quando <span className="text-gold">corpo, mente e alma</span> caminham
            juntos.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4 rounded-xl bg-obsidian/50">
              <p className="text-sand/80 text-sm">
                Qualquer trabalho espiritual que ignore o <span className="text-bone">corpo</span> vira{" "}
                <span className="text-gold/80">fantasia</span>.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-obsidian/50">
              <p className="text-sand/80 text-sm">
                Qualquer trabalho que ignore a <span className="text-bone">mente</span> vira{" "}
                <span className="text-gold/80">confusão</span>.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-obsidian/50">
              <p className="text-sand/80 text-sm">
                Qualquer trabalho que ignore a <span className="text-bone">alma</span> vira{" "}
                <span className="text-gold/80">vazio</span>.
              </p>
            </div>
          </div>

          <p className="text-sand/70 text-center mt-8">
            Minha metodologia organiza essas três dimensões de forma progressiva, respeitando o tempo, a história e os
            limites de cada pessoa.
          </p>
        </div>
      </div>
    </section>
  )
}
