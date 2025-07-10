"use client"

import { useState, useEffect } from "react"
import ModelViewer from "@/components/model-viewer"

const messages = [
  "🤔 Thinking about the future of tech...",
  "💬 Need a custom CRM or AI chatbot?",
  "🌐 We build websites & apps tailored for you!",
  "📈 Automate your business with AI today!",
]

export default function AICharacter() {
  const [currentMessage, setCurrentMessage] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentMessage((prev) => (prev + 1) % messages.length)
        setIsVisible(true)
      }, 300)
    }, 4000)

    setIsVisible(true)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative flex justify-center">
            <div className="relative">
              <ModelViewer
                src="/3d_female_robot.glb"
                alt="AI Assistant 3D Model"
                className="w-full max-w-md h-96 md:h-[500px] animate-bounce-slow"
              />

              {/* Speech Bubble */}
              <div
                className={`absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg max-w-xs text-center transition-all duration-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
              >
                <p className="text-sm font-medium text-gray-800">{messages[currentMessage]}</p>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white/95"></div>
              </div>
            </div>
          </div>

          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Infinite Technology
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              We blend creativity with cutting-edge technology to deliver powerful digital experiences. Our AI-powered
              solutions help businesses automate processes, enhance customer engagement, and drive growth in the digital
              age.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 bg-white/50 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold text-purple-600">50+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-white/50 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
