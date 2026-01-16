"use client"

import Image from "next/image"
import React from "react"

type Props = {
  src: string
  alt?: string
  wrapperClassName?: string
  imgClassName?: string
  overlayClassName?: string
  priority?: boolean
}

export default function ImageBackground({
  src,
  alt = "",
  wrapperClassName = "absolute inset-0 image-wrapper",
  imgClassName = "object-cover image-unify",
  overlayClassName,
  priority = false,
}: Props) {
  return (
    <div className={wrapperClassName}>
      <Image src={src} alt={alt} fill className={imgClassName} priority={priority} />
      {overlayClassName ? <div className={overlayClassName} /> : null}
    </div>
  )
}
