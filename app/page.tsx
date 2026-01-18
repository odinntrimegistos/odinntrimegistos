"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { OrigemSection } from "@/components/origem-section"
import { ComoTrabalhoSection } from "@/components/como-trabalho-section"
import { FinalInviteSection } from "@/components/final-invite-section"
import { TerapiasSection } from "@/components/terapias-section"
import { OraculosSection } from "@/components/oraculos-section"
import { AstrologiaSection } from "@/components/astrologia-section"
import { RituaisSection } from "@/components/rituais-section"
import { CirculoChaveSection } from "@/components/circulo-chave-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <OrigemSection />
      <ComoTrabalhoSection />
      <TerapiasSection />
      <OraculosSection />
      <AstrologiaSection />
      <RituaisSection />
      <CirculoChaveSection />
      <FinalInviteSection />
      <Footer />
    </main>
  )
}
