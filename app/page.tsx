"use client"

import dynamic from "next/dynamic"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { OrigemSection } from "@/components/origem-section"
import { ComoTrabalhoSection } from "@/components/como-trabalho-section"
import { Footer } from "@/components/footer"

// Lazy load heavy sections below the fold
const FinalInviteSection = dynamic(() => import("@/components/final-invite-section").then(mod => ({ default: mod.FinalInviteSection })), { ssr: true })
const TerapiasSection = dynamic(() => import("@/components/terapias-section").then(mod => ({ default: mod.TerapiasSection })), { ssr: true })
const OraculosSection = dynamic(() => import("@/components/oraculos-section").then(mod => ({ default: mod.OraculosSection })), { ssr: true })
const AstrologiaSection = dynamic(() => import("@/components/astrologia-section").then(mod => ({ default: mod.AstrologiaSection })), { ssr: true })
const RituaisSection = dynamic(() => import("@/components/rituais-section").then(mod => ({ default: mod.RituaisSection })), { ssr: true })
const CirculoChaveSection = dynamic(() => import("@/components/circulo-chave-section").then(mod => ({ default: mod.CirculoChaveSection })), { ssr: true })

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
