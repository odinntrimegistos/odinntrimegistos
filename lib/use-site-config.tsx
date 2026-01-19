"use client"

import { useMemo } from "react"
import { useI18n } from "@/lib/i18n"
import { getSiteConfig } from "@/lib/site-config"

export function useSiteConfig() {
  const { locale } = useI18n()
  return useMemo(() => getSiteConfig(locale), [locale])
}
