import type React from "react"
import type { Metadata } from "next"
import { Cinzel_Decorative, Montserrat, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { I18nClientProvider } from "@/components/i18n-provider"
import "./globals.css"

const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-display",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Odinn Trimegistos | Mago e Mentor Espiritual",
  description:
    "Mago e mentor espiritual com 12 anos de estudo e prática. Tarot, Astrologia, Hermetismo, Magia Cerimonial e rituais. Espiritualidade sem fantasia.",
  keywords: [
    "tarot",
    "astrologia",
    "magia",
    "mentor espiritual",
    "hermetismo",
    "cabala",
    "rituais",
    "limpeza energética",
    "ocultismo",
    "magia egípcia",
  ],
  authors: [{ name: "Odinn Trimegistos" }],
  openGraph: {
    title: "Odinn Trimegistos | Mago e Mentor Espiritual",
    description: "Espiritualidade sem fantasia. Clareza acima de ilusão.",
    type: "website",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${cinzel.variable} ${montserrat.variable} ${geistMono.variable} font-sans antialiased grain`}>
        <I18nClientProvider>{children}</I18nClientProvider>
        <Analytics />
      </body>
    </html>
  )
}
