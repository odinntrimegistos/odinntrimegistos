"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useSiteConfig } from "@/lib/use-site-config"
import { EgyptianDivider } from "@/components/egyptian-decorations"

export function OrigemSection() {
  const siteConfig = useSiteConfig()
  const origem = siteConfig.origem

  if (!origem) return null

  return (
    <section id="origem" className="px-6 bg-graphite/40 relative py-16 md:py-20">
      {/* Gradientes de transição superior e inferior com fade */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.1 }}
        className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-obsidian/80 via-obsidian/30 to-transparent pointer-events-none z-10"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.1 }}
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-obsidian/80 via-obsidian/30 to-transparent pointer-events-none z-10"
      />
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Portrait */}
          <div className="relative rounded-2xl overflow-hidden border border-gold/10 h-[600px]">
            <div className="absolute inset-0 bg-obsidian/25" />
            <Image
              src={origem.imageSrc}
              alt="Retrato de Odinn"
              width={1200}
              height={1600}
              priority
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Right: Text */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <p className="font-display text-gold tracking-[0.3em] uppercase text-xs mb-4">A ORIGEM</p>
            <h2 className="font-display text-3xl md:text-4xl tracking-wide mb-4 text-bone uppercase">
              {origem.title}
            </h2>
              <div className="text-sand/85 leading-relaxed space-y-4">
                {origem.highlight.split('\n\n').map((paragraph: string, i: number) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
