import { Suspense } from "react"
import Hero from "@/components/hero"
import AICharacter from "@/components/ai-character"
import TechShowcase from "@/components/tech-showcase"
import BubbleBackground from "@/components/bubble-background"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <BubbleBackground />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <Hero />
        <AICharacter />
        <TechShowcase />
      </Suspense>
    </div>
  )
}
