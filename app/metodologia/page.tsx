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
import { siteConfig } from "@/lib/site-data"

export const metadata = {
  title: siteConfig.metodologia.metadata.title,
  description: siteConfig.metodologia.metadata.description,
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
