export function SigilBody({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className}>
      <circle cx="60" cy="60" r="44" fill="none" stroke="rgba(184,155,74,.55)" strokeWidth="2" />
      <path d="M60 16v88M26 60h68" stroke="rgba(184,155,74,.35)" strokeWidth="2" />
      <path d="M40 40l40 40M80 40L40 80" stroke="rgba(184,155,74,.25)" strokeWidth="2" />
    </svg>
  )
}

export function SigilMind({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className}>
      <circle cx="60" cy="60" r="44" fill="none" stroke="rgba(184,155,74,.55)" strokeWidth="2" />
      <path d="M24 60c12-18 60-18 72 0c-12 18-60 18-72 0Z" fill="none" stroke="rgba(184,155,74,.35)" strokeWidth="2" />
      <circle cx="60" cy="60" r="6" fill="rgba(184,155,74,.35)" />
    </svg>
  )
}

export function SigilSoul({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className}>
      <circle cx="60" cy="60" r="44" fill="none" stroke="rgba(184,155,74,.55)" strokeWidth="2" />
      <path d="M60 26l24 24-24 44-24-44 24-24Z" fill="none" stroke="rgba(184,155,74,.35)" strokeWidth="2" />
      <path d="M60 26v68" stroke="rgba(184,155,74,.22)" strokeWidth="2" />
    </svg>
  )
}
