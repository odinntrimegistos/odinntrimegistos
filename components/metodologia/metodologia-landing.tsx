import { MetodologiaHero } from "@/components/metodologia/metodologia-hero"
import { OCaminhoSection } from "@/components/metodologia/o-caminho-section"
import { PrincipioFundamental } from "@/components/metodologia/principio-fundamental"
import { ComoFunciona } from "@/components/metodologia/como-funciona"
import { PraticasSection } from "@/components/metodologia/praticas-section"
import { PilaresMetodologia } from "@/components/metodologia/pilares-metodologia"
import { FormacaoSection } from "@/components/metodologia/formacao-section"
import { EticaMetodologia } from "@/components/metodologia/etica-metodologia"
import { EssenciaSection } from "@/components/metodologia/essencia-section"

export function MetodologiaLanding() {
  return (
    <div id="metodologia" className="scroll-mt-24 bg-obsidian">
      <MetodologiaHero compact />
      <OCaminhoSection />
      <PrincipioFundamental />
      <ComoFunciona />
      <PraticasSection />
      <PilaresMetodologia />
      <FormacaoSection />
      <EticaMetodologia />
      <EssenciaSection />
    </div>
  )
}
