import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MetodologiaHero } from "@/components/metodologia/metodologia-hero"
import { PrincipioFundamental } from "@/components/metodologia/principio-fundamental"
import { ComoFunciona } from "@/components/metodologia/como-funciona"
import { PraticasSection } from "@/components/metodologia/praticas-section"
import { PilaresMetodologia } from "@/components/metodologia/pilares-metodologia"
import { FormacaoSection } from "@/components/metodologia/formacao-section"
import { EticaMetodologia } from "@/components/metodologia/etica-metodologia"
import { EssenciaSection } from "@/components/metodologia/essencia-section"

export const metadata = {
  title: "Metodologia Trimegista | Odinn Trimegistos",
  description:
    "A ciência simbólica aplicada à vida real. Conheça a Metodologia Trimegista: Tarot, Astrologia, Runas, Rituais e Alquimia para transformação consciente.",
}

export default function MetodologiaPage() {
  return (
    <main className="min-h-screen bg-obsidian">
      <Header />

      <MetodologiaHero />
      <PrincipioFundamental />
      <ComoFunciona />
      <PraticasSection />
      <PilaresMetodologia />
      <FormacaoSection />
      <EticaMetodologia />
      <EssenciaSection />

      <Footer />
    </main>
  )
}
