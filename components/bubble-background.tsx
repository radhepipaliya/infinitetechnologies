"use client"

import { useEffect, useRef } from "react"

export default function BubbleBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const createBubble = () => {
      const bubble = document.createElement("div")
      bubble.className = "bubble"

      const size = Math.random() * 20 + 10
      const left = Math.random() * 100
      const duration = Math.random() * 10 + 5
      const delay = Math.random() * 5

      bubble.style.cssText = `
        position: fixed;
        width: ${size}px;
        height: ${size}px;
        left: ${left}%;
        bottom: -50px;
        background: rgba(147, 51, 234, 0.1);
        border-radius: 50%;
        pointer-events: none;
        animation: floatUp ${duration}s linear infinite;
        animation-delay: ${delay}s;
        z-index: 1;
      `

      container.appendChild(bubble)

      setTimeout(
        () => {
          if (container.contains(bubble)) {
            container.removeChild(bubble)
          }
        },
        (duration + delay) * 1000,
      )
    }

    const interval = setInterval(createBubble, 500)

    return () => {
      clearInterval(interval)
      if (container) {
        container.innerHTML = ""
      }
    }
  }, [])

  return (
    <>
      <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0" aria-hidden="true" />
      <style jsx>{`
        @keyframes floatUp {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </>
  )
}
