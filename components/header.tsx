"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useI18n } from "@/lib/i18n"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { locale } = useI18n()

  const navLinks =
    locale === "pt"
      ? [
          { href: "/#origem", label: "ORIGEM" },
          { href: "/#metodologia", label: "METODOLOGIA" },
          { href: "/#alquimia", label: "ALQUIMIA" },
          { href: "/#oraculos", label: "ORÁCULOS" },
          { href: "/#astrologia", label: "ASTROLOGIA" },
          { href: "/#rituais", label: "RITUAIS" },
          { href: "/#circulo-chave", label: "CÍRCULO DA CHAVE" },
        ]
      : [
          { href: "/#origem", label: "ORIGIN" },
          { href: "/#metodologia", label: "METHODOLOGY" },
          { href: "/#alquimia", label: "ALCHEMY" },
          { href: "/#oraculos", label: "ORACLES" },
          { href: "/#astrologia", label: "ASTROLOGY" },
          { href: "/#rituais", label: "RITUALS" },
          { href: "/#circulo-chave", label: "KEY CIRCLE" },
        ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-obsidian/95 backdrop-blur-sm border-b border-gold/10" : "bg-transparent",
      )}
    >
      <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group" aria-label="Odinn Trimegistos">
            <Image
              src="/images/logo-favicon.png"
              alt="Logo Odinn Trimegistos"
              width={160}
              height={60}
              priority
              className="h-10 w-auto object-contain drop-shadow-[0_0_12px_rgba(255,214,137,0.22)] transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <span className="font-display text-lg tracking-[.2em] text-gold hover:text-gold-bright transition-colors">
              ODINN TRIMEGISTOS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm tracking-wide text-sand/70 hover:text-gold transition-colors",
                  pathname === link.href && "text-gold",
                )}
              >
                {link.label}
              </Link>
            ))}

            <LanguageSwitcher className="ml-3" />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden relative">
            <button
              className="text-gold"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {isMobileMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-56 rounded-md border border-gold/10 bg-obsidian/95 backdrop-blur-sm shadow-lg shadow-black/30 z-50">
                <div className="p-3 flex flex-col gap-3">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "text-sand/80 hover:text-gold transition-colors",
                        pathname === link.href && "text-gold",
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}

                  <div className="pt-2 border-t border-gold/10">
                    <div className="flex items-center justify-between">
                      <p className="text-xs tracking-[0.3em] uppercase text-gold/70">
                        {locale === "pt" ? "Idioma" : "Language"}
                      </p>
                      <LanguageSwitcher />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>

      </div>
    </header>
  )
}
