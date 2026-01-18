"use client"

import { useMemo } from "react"
import { useI18n, type Locale } from "@/lib/i18n"
import { siteConfig as siteConfigPt } from "@/lib/site-data"
import { siteConfigEn } from "@/lib/site-data.en"

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value)
}

function deepMerge<T>(base: T, override: Partial<T> | undefined): T {
  if (override === undefined) return base

  // Arrays: override fully.
  if (Array.isArray(base)) {
    return (override as T) ?? base
  }

  // Objects: merge recursively.
  if (isPlainObject(base) && isPlainObject(override)) {
    const result: Record<string, unknown> = { ...base }
    for (const [key, overrideValue] of Object.entries(override)) {
      const baseValue = (base as Record<string, unknown>)[key]

      if (overrideValue === undefined) {
        result[key] = baseValue
        continue
      }

      if (Array.isArray(baseValue)) {
        result[key] = overrideValue
        continue
      }

      if (isPlainObject(baseValue) && isPlainObject(overrideValue)) {
        result[key] = deepMerge(baseValue, overrideValue)
        continue
      }

      result[key] = overrideValue
    }
    return result as T
  }

  // Primitives: override.
  return (override as T) ?? base
}

export function getSiteConfig(locale: Locale) {
  const merged = locale === "en" ? deepMerge(siteConfigPt, siteConfigEn) : siteConfigPt
  const normalizeWhatsApp = (val?: string) => {
    if (!val) return undefined
    if (/^https?:\/\//i.test(val)) return val
    const digits = val.replace(/\D/g, "")
    return digits ? `https://wa.me/${digits}` : undefined
  }
  const normalizeInstagram = (val?: string) => {
    if (!val) return undefined
    if (/^https?:\/\//i.test(val)) return val
    const handle = val.replace(/^@/, "").trim()
    return handle ? `https://instagram.com/${handle}` : undefined
  }
  const envLinks = {
    whatsapp: normalizeWhatsApp(process.env.NEXT_PUBLIC_WHATSAPP),
    instagram: normalizeInstagram(process.env.NEXT_PUBLIC_INSTAGRAM),
    email: process.env.NEXT_PUBLIC_EMAIL,
  }
  return {
    ...merged,
    links: {
      ...(merged as any).links,
      whatsapp: envLinks.whatsapp || (merged as any).links?.whatsapp,
      instagram: envLinks.instagram || (merged as any).links?.instagram,
      email: envLinks.email || (merged as any).links?.email,
    },
    etica:
      (merged as any).etica ?? {
        title: "ÉTICA E RESPONSABILIDADE",
        items: [
          "Atendimentos confidenciais",
          "Não substituem acompanhamento médico ou psicológico",
          "O símbolo orienta — a escolha é sempre sua",
        ],
      },
    encerramento:
      (merged as any).encerramento ?? {
        text: "Você não precisa acreditar em nada.",
        subtext: "Precisa apenas estar disposto a ver com clareza.",
      },
    metodologia:
      (merged as any).metodologia ?? {
        metadata: {
          title: "Caminho de Hermes | Odinn Trimegistos",
          description: "Conheça o Caminho de Hermes: Tarot, Astrologia, Runas, Rituais e Alquimia para transformação consciente.",
        },
        hero: { badge: "", title: "CAMINHO DE HERMES", subtitle: "Conhecimento aplicado à vida real" },
        principioFundamental: {
          intro: [],
          label: "PRINCÍPIO FUNDAMENTAL",
          statement: [],
          cards: [],
        },
        comoFunciona: {
          title: "COMO FUNCIONA NA PRÁTICA",
          description: "",
          movimentos: [],
          closing: [],
        },
        praticas: {
          title: "PRÁTICAS UTILIZADAS NOS ATENDIMENTOS",
          description: "",
          items: [],
        },
        pilares: {
          title: "OS PILARES DA METODOLOGIA",
          description: "",
          items: [],
          closing: [],
        },
        formacao: {
          title: "FORMAÇÃO E BASE DE CONHECIMENTO",
          intro: "",
          items: [],
          closing: [],
        },
        etica: {
          title: "ÉTICA E RESPONSABILIDADE",
          principles: [],
          closing: "",
        },
        essencia: {
          badge: "EM ESSÊNCIA",
          titleLines: [],
          titleHighlightLineIndex: 0,
          intro: "",
          chips: [],
          closing: [],
          cta: { href: "/#servicos", label: "Ver Serviços e Mentorias" },
        },
      },
  }
}

export function useSiteConfig() {
  const { locale } = useI18n()
  return useMemo(() => getSiteConfig(locale), [locale])
}
