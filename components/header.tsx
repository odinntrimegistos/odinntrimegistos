"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/site-data"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isHomePage = pathname === "/"
  const getHref = (hash: string) => (isHomePage ? hash : `/${hash}`)

  const navLinks = [
    { href: getHref("#oraculos"), label: siteConfig.oraculos?.title ?? "Oráculos" },
    { href: getHref("#rituais"), label: siteConfig.rituais?.title ?? "Rituais" },
    { href: getHref("#circulo"), label: siteConfig.circuloChave?.title ?? "Círculo" },
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
          <Link href="/" className="font-display text-lg tracking-[.2em] text-gold hover:text-gold-bright transition-colors">
            ODINN TRIMEGISTOS
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
            <Link
              href={getHref("#contato")}
              className="inline-flex items-center rounded-lg px-5 py-2 text-sm font-medium text-bone tracking-wide transition-all ml-2 border border-[rgba(184,110,50,0.28)] bg-transparent"
            >
              {siteConfig.hero?.cta ?? "Agendar"}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gold"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gold/10 pt-4">
            <div className="flex flex-col gap-4">
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
              <Link
                href={getHref("#contato")}
                className="btn-ritual rounded-lg px-5 py-3 text-center font-medium text-bone mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {siteConfig.hero?.cta ?? "Agendar Atendimento"}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
