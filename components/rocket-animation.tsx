"use client"

import { useEffect, useRef } from "react"

interface Rocket {
  x: number
  y: number
  speed: number
  exploded: boolean
  color: string
  size: number
}

interface Spark {
  x: number
  y: number
  dx: number
  dy: number
  life: number
  color: string
}

export default function RocketAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    const rockets: Rocket[] = []
    const sparks: Spark[] = []

    const colors = ["#ff69b4", "#9370db", "#00bfff", "#ffd700", "#ff4500"]

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const launchRocket = () => {
      if (rockets.length < 8) {
        rockets.push({
          x: Math.random() * canvas.width,
          y: canvas.height + 20,
          speed: 2 + Math.random() * 2,
          exploded: false,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: 6,
        })
      }
    }

    const explode = (rocket: Rocket) => {
      for (let i = 0; i < 15; i++) {
        sparks.push({
          x: rocket.x,
          y: rocket.y,
          dx: (Math.random() - 0.5) * 4,
          dy: (Math.random() - 0.5) * 4,
          life: 30 + Math.random() * 20,
          color: rocket.color,
        })
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw rockets
      rockets.forEach((rocket, index) => {
        rocket.y -= rocket.speed

        // Check for explosion
        if (!rocket.exploded && Math.random() < 0.015 && rocket.y < canvas.height * 0.6) {
          rocket.exploded = true
          explode(rocket)
          rockets.splice(index, 1)
          return
        }

        // Remove rockets that go off screen
        if (rocket.y < -50) {
          rockets.splice(index, 1)
          return
        }

        // Draw rocket
        if (!rocket.exploded) {
          ctx.beginPath()
          ctx.moveTo(rocket.x, rocket.y)
          ctx.lineTo(rocket.x - rocket.size / 2, rocket.y + rocket.size)
          ctx.lineTo(rocket.x + rocket.size / 2, rocket.y + rocket.size)
          ctx.closePath()
          ctx.fillStyle = rocket.color
          ctx.fill()

          // Add glow effect
          ctx.shadowColor = rocket.color
          ctx.shadowBlur = 10
          ctx.fill()
          ctx.shadowBlur = 0
        }
      })

      // Update and draw sparks
      sparks.forEach((spark, index) => {
        spark.x += spark.dx
        spark.y += spark.dy
        spark.dy += 0.1 // gravity
        spark.life -= 1

        if (spark.life <= 0) {
          sparks.splice(index, 1)
          return
        }

        // Draw spark
        ctx.beginPath()
        ctx.arc(spark.x, spark.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = spark.color
        ctx.globalAlpha = spark.life / 50
        ctx.fill()
        ctx.globalAlpha = 1
      })

      // Launch new rockets randomly
      if (Math.random() < 0.03) {
        launchRocket()
      }

      animationId = requestAnimationFrame(animate)
    }

    const handleResize = () => {
      resizeCanvas()
    }

    resizeCanvas()
    animate()

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
      style={{ background: "transparent" }}
    />
  )
}
