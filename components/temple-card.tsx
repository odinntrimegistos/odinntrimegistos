import type React from "react"
import { cn } from "@/lib/utils"

interface TempleCardProps {
  children: React.ReactNode
  className?: string
}

export function TempleCard({ children, className }: TempleCardProps) {
  return (
    <div
      className={cn(
        "etched rounded-2xl bg-graphite/70 shadow-[0_18px_60px_rgba(0,0,0,.55)] backdrop-blur-sm p-6 md:p-8",
        className,
      )}
    >
      {children}
    </div>
  )
}
