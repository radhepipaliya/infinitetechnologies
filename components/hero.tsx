"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import ModelViewer from "@/components/model-viewer"

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  return (
    <main ref={heroRef} className="relative z-10 py-16 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight">
            Empowering Your Digital Future
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl">
            We deliver cutting-edge IT solutions tailored to your business needs, combining innovation with reliability
            to drive your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-lg font-semibold transition-all duration-300 bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <ModelViewer
              src="/gaming_setup.glb"
              alt="3D Gaming Setup Model"
              className="w-full max-w-lg h-96 md:h-[500px] rounded-2xl shadow-2xl bg-gradient-to-br from-purple-100 to-blue-100"
            />
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl -z-10"></div>
          </div>
        </div>
      </div>
    </main>
  )
}
