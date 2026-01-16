import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { QuemSouSection } from "@/components/quem-sou-section"
import { ComoTrabalhoSection } from "@/components/como-trabalho-section"
import { OraculosSection } from "@/components/oraculos-section"
import { AstrologiaSection } from "@/components/astrologia-section"
import { RituaisSection } from "@/components/rituais-section"
import { MentoriasSection } from "@/components/mentorias-section"
import { CombosSection } from "@/components/combos-section"
import { CirculoChaveSection } from "@/components/circulo-chave-section"
import { EthicsSection } from "@/components/ethics-section"
import { EncerramentoSection } from "@/components/encerramento-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <QuemSouSection />
      <ComoTrabalhoSection />
      <OraculosSection />
      <AstrologiaSection />
      <RituaisSection />
      <MentoriasSection />
      <CombosSection />
      <CirculoChaveSection />
      <EthicsSection />
      <EncerramentoSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
