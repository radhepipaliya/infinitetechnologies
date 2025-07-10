"use client"

import { useState } from "react"
import Image from "next/image"

interface ImagePlaceholderProps {
  width: number
  height: number
  alt: string
  className?: string
  text?: string
}

export default function ImagePlaceholder({
  width,
  height,
  alt,
  className = "",
  text = "Image Placeholder",
}: ImagePlaceholderProps) {
  const [imageError, setImageError] = useState(false)

  // Create a simple SVG placeholder
  const createPlaceholderSVG = (w: number, h: number, label: string) => {
    const svg = `
      <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#8B5CF6;stop-opacity:0.8" />
            <stop offset="100%" style="stop-color:#3B82F6;stop-opacity:0.8" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad)"/>
        <text x="50%" y="50%" fontFamily="Arial, sans-serif" fontSize="16" fill="white" textAnchor="middle" dy=".3em">${label}</text>
      </svg>
    `
    return `data:image/svg+xml;base64,${btoa(svg)}`
  }

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      <Image
        src={createPlaceholderSVG(width, height, text) || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-full object-cover rounded-lg"
        priority
      />
    </div>
  )
}
