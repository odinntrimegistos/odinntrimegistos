"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type Locale = "pt" | "en"

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const translations = {
  pt: {
    // Navigation
    "nav.about": "Sobre",
    "nav.pillars": "Pilares",
    "nav.services": "Serviços",
    "nav.howItWorks": "Como Funciona",
    "nav.ethics": "Ética",
    "nav.contact": "Contato",
    "nav.schedule": "Agendar",
    "nav.scheduleAppointment": "Agendar Atendimento",

    // Hero
    "hero.title": "Odinn Trimegistos",
    "hero.subtitle": "Mago e Mentor Espiritual",
    "hero.tagline": "Magia não é sobre acreditar. É sobre funcionar.",
    "hero.cta": "Iniciar Jornada",
    "hero.learnMore": "Conhecer Mais",

    // About
    "about.title": "Sobre Mim",
    "about.experience": "12 anos de estudo e prática",
    "about.p1":
      "Eu não nasci com dons especiais. Não fui escolhido por nenhuma entidade, não tive nenhuma experiência mística na infância e não carrego nenhuma linhagem espiritual secreta.",
    "about.p2":
      "Comecei como cético. Cresci numa família católica nominal que não praticava nada além do Natal. Minha aproximação com o oculto veio pela filosofia — queria entender por que tantas pessoas inteligentes ao longo da história levaram essas coisas a sério.",
    "about.p3":
      "Estudei tudo que pude: hermetismo, cabala, astrologia tradicional, tarot, goécia, magia do caos, tradições nórdicas, espiritismo, umbanda. Não como crente, mas como pesquisador. E em algum momento, a pesquisa virou prática.",
    "about.p4":
      "Percebi que não importava muito em que eu acreditava. O que importava era que as técnicas funcionavam.",
    "about.quote":
      "Hoje trabalho com magia como um técnico: sem fé cega, sem promessas milagrosas, sem ego inflado. Meu trabalho é empírico — observo o que funciona, descarto o que não funciona, e ajusto conforme necessário.",

    // Pillars
    "pillars.title": "Os Três Pilares",
    "pillars.subtitle": "Corpo, Mente e Alma",
    "pillars.body.title": "Corpo",
    "pillars.body.description":
      "Limpeza, proteção e reorganização do campo energético. Trabalhos que atuam na estrutura.",
    "pillars.mind.title": "Mente",
    "pillars.mind.description": "Clareza e autoconhecimento através de tarot, astrologia e mentoria.",
    "pillars.soul.title": "Alma",
    "pillars.soul.description": "Rituais de transformação para mover energias e provocar mudanças concretas.",

    // Services
    "services.title": "Serviços",
    "services.subtitle": "Escolha o pilar que ressoa com sua necessidade atual",
    "services.schedule": "Agendar",
    "services.startingFrom": "a partir de",

    // Service Categories
    "services.corpo.title": "Corpo",
    "services.corpo.subtitle": "Limpeza, proteção e reorganização energética",
    "services.corpo.description":
      "Trabalhos que atuam diretamente no campo energético, removendo interferências e fortalecendo sua estrutura.",

    "services.mente.title": "Mente",
    "services.mente.subtitle": "Clareza, autoconhecimento e direção",
    "services.mente.description":
      "Ferramentas de leitura e orientação para entender onde você está e para onde pode ir.",

    "services.alma.title": "Alma",
    "services.alma.subtitle": "Rituais e trabalhos de transformação",
    "services.alma.description":
      "Intervenções mágicas para mover energias, abrir caminhos e provocar mudanças concretas.",

    // Service Items - Corpo
    "services.corpo.limpeza.name": "Limpeza energética pessoal",
    "services.corpo.limpeza.description": "Remoção de cargas, miasmas e interferências acumuladas no seu campo.",
    "services.corpo.ambiente.name": "Limpeza energética de ambientes",
    "services.corpo.ambiente.description": "Purificação de espaços físicos que acumulam energias densas.",
    "services.corpo.protecao.name": "Proteção energética",
    "services.corpo.protecao.description": "Criação de escudos e defesas para situações específicas.",
    "services.corpo.banimento.name": "Banimento",
    "services.corpo.banimento.description": "Expulsão de presenças e influências indesejadas.",
    "services.corpo.corte.name": "Corte energético",
    "services.corpo.corte.description": "Desconexão de vínculos que drenam ou aprisionam.",

    // Service Items - Mente
    "services.mente.tarotObj.name": "Tarot objetivo",
    "services.mente.tarotObj.description": "Resposta direta para uma questão específica.",
    "services.mente.tarotProf.name": "Tarot profundo",
    "services.mente.tarotProf.description": "Análise completa de uma situação ou área da vida.",
    "services.mente.mapa.name": "Mapa astral natal",
    "services.mente.mapa.description": "Leitura completa do seu mapa de nascimento.",
    "services.mente.ciclos.name": "Astrologia de ciclos e previsões",
    "services.mente.ciclos.description": "Trânsitos, progressões e o que esperar do período.",
    "services.mente.integrado.name": "Tarot + Astrologia integrados",
    "services.mente.integrado.description": "Visão cruzada das duas ferramentas.",
    "services.mente.mentoria.name": "Mentoria espiritual individual",
    "services.mente.mentoria.description": "Orientação prática para sua jornada.",

    // Service Items - Alma
    "services.alma.prosperidade.name": "Prosperidade e riqueza",
    "services.alma.prosperidade.description": "Ritual para desbloquear fluxos de abundância.",
    "services.alma.caminhos.name": "Abertura de caminhos",
    "services.alma.caminhos.description": "Desobstrução de oportunidades travadas.",
    "services.alma.reorg.name": "Reorganização energética da vida",
    "services.alma.reorg.description": "Trabalho amplo para reordenar múltiplas áreas.",
    "services.alma.adocamento.name": "Adoçamento energético",
    "services.alma.adocamento.description": "Suavização de relações e situações.",
    "services.alma.diagnostico.name": "Diagnóstico energético de relacionamento",
    "services.alma.diagnostico.description": "Leitura do campo relacional entre duas pessoas.",
    "services.alma.personalizado.name": "Ritual personalizado",
    "services.alma.personalizado.description": "Trabalho sob medida para sua necessidade específica.",
    "services.alma.acompanhamento.name": "Acompanhamento mensal",
    "services.alma.acompanhamento.description": "Suporte contínuo com sessões e orientações.",

    // How it Works
    "howItWorks.title": "Como Funciona",
    "howItWorks.subtitle": "Um processo simples e direto",
    "howItWorks.step1.title": "Contato Inicial",
    "howItWorks.step1.description":
      "Você me conta brevemente o que está buscando. Sem formulários longos — uma conversa direta.",
    "howItWorks.step2.title": "Avaliação",
    "howItWorks.step2.description":
      "Analiso sua situação e indico o serviço mais adequado. Às vezes o que você acha que precisa não é o que realmente vai resolver.",
    "howItWorks.step3.title": "Agendamento",
    "howItWorks.step3.description": "Definimos data, horário e forma de pagamento. Trabalho com Pix e cartão.",
    "howItWorks.step4.title": "Execução",
    "howItWorks.step4.description":
      "Realizo o trabalho e te dou um retorno claro sobre o que foi feito e o que esperar.",

    // Ethics
    "ethics.title": "Minha Ética",
    "ethics.subtitle": "Princípios inegociáveis",
    "ethics.item1": "Não faço trabalhos para prejudicar terceiros. Magia destrutiva existe, mas não é meu caminho.",
    "ethics.item2": "Não prometo resultados impossíveis. Sou honesto sobre limitações — minhas e da prática.",
    "ethics.item3": "Não crio dependência. Meu objetivo é que você precise cada vez menos de mim.",
    "ethics.item4": "Não misturo fé com técnica. Você não precisa acreditar em nada específico.",
    "ethics.item5": "Confidencialidade absoluta. O que você me conta fica entre nós.",
    "ethics.closing":
      "Se você está buscando alguém que vai te dizer o que você quer ouvir, não sou eu. Se quer respostas honestas e trabalho sério, podemos conversar.",

    // Contact
    "contact.title": "Iniciar Conversa",
    "contact.subtitle": "O primeiro passo é simples",
    "contact.description":
      "Entre em contato pelo WhatsApp ou Instagram. Conte brevemente o que está buscando. Sem compromisso — a conversa inicial é gratuita.",
    "contact.whatsapp": "WhatsApp",
    "contact.instagram": "Instagram",
    "contact.email": "Email",

    // Footer
    "footer.quote": "Eu não te digo no que acreditar. Eu te ajudo a enxergar.",
    "footer.rights": "Todos os direitos reservados",
  },
  en: {
    // Navigation
    "nav.about": "About",
    "nav.pillars": "Pillars",
    "nav.services": "Services",
    "nav.howItWorks": "How It Works",
    "nav.ethics": "Ethics",
    "nav.contact": "Contact",
    "nav.schedule": "Book",
    "nav.scheduleAppointment": "Book a Session",

    // Hero
    "hero.title": "Odinn Trimegistos",
    "hero.subtitle": "Mage & Spiritual Mentor",
    "hero.tagline": "Magic is not about believing. It's about working.",
    "hero.cta": "Begin Journey",
    "hero.learnMore": "Learn More",

    // About
    "about.title": "About Me",
    "about.experience": "12 years of study and practice",
    "about.p1":
      "I wasn't born with special gifts. I wasn't chosen by any entity, had no mystical childhood experiences, and carry no secret spiritual lineage.",
    "about.p2":
      "I started as a skeptic. I grew up in a nominally Catholic family that practiced nothing beyond Christmas. My approach to the occult came through philosophy — I wanted to understand why so many intelligent people throughout history took these things seriously.",
    "about.p3":
      "I studied everything I could: hermeticism, kabbalah, traditional astrology, tarot, goetia, chaos magic, Norse traditions, spiritism, umbanda. Not as a believer, but as a researcher. And at some point, research became practice.",
    "about.p4": "I realized it didn't matter much what I believed. What mattered was that the techniques worked.",
    "about.quote":
      "Today I work with magic as a technician: without blind faith, without miraculous promises, without inflated ego. My work is empirical — I observe what works, discard what doesn't, and adjust as needed.",

    // Pillars
    "pillars.title": "The Three Pillars",
    "pillars.subtitle": "Body, Mind and Soul",
    "pillars.body.title": "Body",
    "pillars.body.description":
      "Cleansing, protection and energetic field reorganization. Work that acts on structure.",
    "pillars.mind.title": "Mind",
    "pillars.mind.description": "Clarity and self-knowledge through tarot, astrology and mentoring.",
    "pillars.soul.title": "Soul",
    "pillars.soul.description": "Transformation rituals to move energies and create concrete changes.",

    // Services
    "services.title": "Services",
    "services.subtitle": "Choose the pillar that resonates with your current need",
    "services.schedule": "Book",
    "services.startingFrom": "starting from",

    // Service Categories
    "services.corpo.title": "Body",
    "services.corpo.subtitle": "Cleansing, protection and energetic reorganization",
    "services.corpo.description":
      "Work that acts directly on the energy field, removing interference and strengthening your structure.",

    "services.mente.title": "Mind",
    "services.mente.subtitle": "Clarity, self-knowledge and direction",
    "services.mente.description": "Reading and guidance tools to understand where you are and where you can go.",

    "services.alma.title": "Soul",
    "services.alma.subtitle": "Rituals and transformation work",
    "services.alma.description": "Magical interventions to move energies, open paths and cause concrete changes.",

    // Service Items - Corpo
    "services.corpo.limpeza.name": "Personal energy cleansing",
    "services.corpo.limpeza.description": "Removal of accumulated charges, miasmas and interference from your field.",
    "services.corpo.ambiente.name": "Space energy cleansing",
    "services.corpo.ambiente.description": "Purification of physical spaces that accumulate dense energies.",
    "services.corpo.protecao.name": "Energetic protection",
    "services.corpo.protecao.description": "Creation of shields and defenses for specific situations.",
    "services.corpo.banimento.name": "Banishment",
    "services.corpo.banimento.description": "Expulsion of unwanted presences and influences.",
    "services.corpo.corte.name": "Energetic cord cutting",
    "services.corpo.corte.description": "Disconnection from bonds that drain or imprison.",

    // Service Items - Mente
    "services.mente.tarotObj.name": "Focused Tarot",
    "services.mente.tarotObj.description": "Direct answer to a specific question.",
    "services.mente.tarotProf.name": "Deep Tarot",
    "services.mente.tarotProf.description": "Complete analysis of a situation or area of life.",
    "services.mente.mapa.name": "Natal chart reading",
    "services.mente.mapa.description": "Complete reading of your birth chart.",
    "services.mente.ciclos.name": "Cycle astrology & forecasts",
    "services.mente.ciclos.description": "Transits, progressions and what to expect from the period.",
    "services.mente.integrado.name": "Tarot + Astrology integrated",
    "services.mente.integrado.description": "Cross-vision of both tools.",
    "services.mente.mentoria.name": "Individual spiritual mentoring",
    "services.mente.mentoria.description": "Practical guidance for your journey.",

    // Service Items - Alma
    "services.alma.prosperidade.name": "Prosperity and wealth",
    "services.alma.prosperidade.description": "Ritual to unblock abundance flows.",
    "services.alma.caminhos.name": "Path opening",
    "services.alma.caminhos.description": "Clearing of blocked opportunities.",
    "services.alma.reorg.name": "Life energy reorganization",
    "services.alma.reorg.description": "Broad work to reorder multiple areas.",
    "services.alma.adocamento.name": "Energetic sweetening",
    "services.alma.adocamento.description": "Softening of relationships and situations.",
    "services.alma.diagnostico.name": "Relationship energy diagnosis",
    "services.alma.diagnostico.description": "Reading of the relational field between two people.",
    "services.alma.personalizado.name": "Custom ritual",
    "services.alma.personalizado.description": "Tailored work for your specific need.",
    "services.alma.acompanhamento.name": "Monthly support",
    "services.alma.acompanhamento.description": "Ongoing support with sessions and guidance.",

    // How it Works
    "howItWorks.title": "How It Works",
    "howItWorks.subtitle": "A simple and direct process",
    "howItWorks.step1.title": "Initial Contact",
    "howItWorks.step1.description":
      "You briefly tell me what you're looking for. No long forms — a direct conversation.",
    "howItWorks.step2.title": "Assessment",
    "howItWorks.step2.description":
      "I analyze your situation and recommend the most suitable service. Sometimes what you think you need isn't what will actually solve it.",
    "howItWorks.step3.title": "Scheduling",
    "howItWorks.step3.description": "We set the date, time and payment method. I work with PayPal and card.",
    "howItWorks.step4.title": "Execution",
    "howItWorks.step4.description":
      "I perform the work and give you clear feedback on what was done and what to expect.",

    // Ethics
    "ethics.title": "My Ethics",
    "ethics.subtitle": "Non-negotiable principles",
    "ethics.item1": "I don't do work to harm others. Destructive magic exists, but it's not my path.",
    "ethics.item2": "I don't promise impossible results. I'm honest about limitations — mine and the practice's.",
    "ethics.item3": "I don't create dependency. My goal is for you to need me less and less.",
    "ethics.item4": "I don't mix faith with technique. You don't need to believe in anything specific.",
    "ethics.item5": "Absolute confidentiality. What you tell me stays between us.",
    "ethics.closing":
      "If you're looking for someone who will tell you what you want to hear, I'm not it. If you want honest answers and serious work, we can talk.",

    // Contact
    "contact.title": "Start a Conversation",
    "contact.subtitle": "The first step is simple",
    "contact.description":
      "Get in touch via WhatsApp or Instagram. Briefly tell me what you're looking for. No commitment — the initial conversation is free.",
    "contact.whatsapp": "WhatsApp",
    "contact.instagram": "Instagram",
    "contact.email": "Email",

    // Footer
    "footer.quote": "I don't tell you what to believe. I help you see.",
    "footer.rights": "All rights reserved",
  },
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("pt")

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale
    if (saved && (saved === "pt" || saved === "en")) {
      setLocale(saved)
    }
  }, [])

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale)
    localStorage.setItem("locale", newLocale)
  }

  const t = (key: string): string => {
    return translations[locale][key as keyof typeof translations.pt] || key
  }

  return <I18nContext.Provider value={{ locale, setLocale: handleSetLocale, t }}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}
