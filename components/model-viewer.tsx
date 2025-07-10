"use client"

import { useEffect, useRef } from "react"

interface ModelViewerProps {
  src: string
  alt: string
  className?: string
  autoRotate?: boolean
  cameraControls?: boolean
}

export default function ModelViewer({
  src,
  alt,
  className = "",
  autoRotate = true,
  cameraControls = true,
}: ModelViewerProps) {
  const viewerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Dynamically import model-viewer to avoid SSR issues
    import("@google/model-viewer").then(() => {
      if (viewerRef.current) {
        const modelViewer = document.createElement("model-viewer")
        modelViewer.src = src
        modelViewer.alt = alt
        if (autoRotate) modelViewer.setAttribute("auto-rotate", "")
        if (cameraControls) modelViewer.setAttribute("camera-controls", "")
        modelViewer.setAttribute("disable-zoom", "")
        modelViewer.className = `w-full h-full ${className}`

        viewerRef.current.appendChild(modelViewer)
      }
    })

    return () => {
      if (viewerRef.current) {
        viewerRef.current.innerHTML = ""
      }
    }
  }, [src, alt, className, autoRotate, cameraControls])

  return (
    <div ref={viewerRef} className={`relative ${className}`} role="img" aria-label={alt}>
      {/* Fallback content */}
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full animate-pulse"></div>
          <p className="text-gray-600">Loading 3D Model...</p>
        </div>
      </div>
    </div>
  )
}
