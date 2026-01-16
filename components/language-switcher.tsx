"use client"

import { useI18n } from "@/lib/i18n"
import { cn } from "@/lib/utils"

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useI18n()

  const toggleLocale = () => {
    setLocale(locale === "pt" ? "en" : "pt")
  }

  return (
    <button
      onClick={toggleLocale}
      className={cn(
        "flex items-center gap-1.5 px-2 py-1 rounded border border-gold/20 hover:border-gold/40",
        "text-xs tracking-wider text-sand/70 hover:text-gold transition-all",
        "bg-obsidian/50 hover:bg-obsidian/80",
        className,
      )}
      aria-label={locale === "pt" ? "Switch to English" : "Mudar para Português"}
    >
      <span className={cn(locale === "pt" ? "text-gold" : "text-sand/50")}>PT</span>
      <span className="text-gold/30">|</span>
      <span className={cn(locale === "en" ? "text-gold" : "text-sand/50")}>EN</span>
    </button>
  )
}
