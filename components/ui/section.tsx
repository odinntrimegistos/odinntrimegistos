import * as React from 'react'

type SectionProps = {
  id?: string
  className?: string
  container?: boolean
  children?: React.ReactNode
}

export function Section({ id, className = '', container = true, children }: SectionProps) {
  return (
    <div id={id} className={"py-12 md:py-16 " + className}>
      {container ? <div className="max-w-5xl mx-auto px-6">{children}</div> : children}
    </div>
  )
}

export default Section
