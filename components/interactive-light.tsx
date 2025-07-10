"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Target, Rocket, Shield, Users } from "lucide-react"

const visionPoints = [
  { icon: Users, text: "Trusted Technology Partner", color: "text-blue-500" },
  { icon: Rocket, text: "Empowers Businesses", color: "text-purple-500" },
  { icon: Shield, text: "Secure and Scalable IT Solutions", color: "text-green-500" },
  { icon: Target, text: "Driving Digital Transformation", color: "text-orange-500" },
]

const cubeColors = ["#ff4d4d", "#4dd2ff", "#ffff4d", "#ff4df2", "#00ffff"]

export default function InteractiveLight() {
  const [isLightOn, setIsLightOn] = useState(false)
  const [cubes, setCubes] = useState<Array<{ id: number; color: string; size: number; left: number; top: number }>>([])

  const toggleLight = () => {
    const newLightState = !isLightOn
    setIsLightOn(newLightState)

    if (newLightState && cubes.length === 0) {
      const newCubes = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        color: cubeColors[Math.floor(Math.random() * cubeColors.length)],
        size: 10 + Math.random() * 30,
        left: Math.random() * 100,
        top: Math.random() * 100,
      }))
      setCubes(newCubes)
    } else if (!newLightState) {
      setCubes([])
    }
  }

  return (
    <section
      className={`relative py-20 px-6 overflow-hidden transition-all duration-1000 ${
        isLightOn ? "bg-gradient-to-br from-purple-100 to-blue-100" : "bg-gray-100"
      }`}
    >
      {/* Tubelight Effect */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gray-300 rounded-full overflow-hidden">
        <div
          className={`h-full transition-all duration-1000 ${
            isLightOn
              ? "bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 shadow-lg shadow-purple-400/50"
              : "bg-gray-400"
          }`}
          style={{
            width: isLightOn ? "100%" : "0%",
            boxShadow: isLightOn ? "0 0 20px rgba(147, 51, 234, 0.8)" : "none",
          }}
        />
      </div>

      {/* Animated Cubes */}
      {cubes.map((cube) => (
        <div
          key={cube.id}
          className="absolute animate-bounce opacity-70 rounded-lg"
          style={{
            width: `${cube.size}px`,
            height: `${cube.size}px`,
            left: `${cube.left}%`,
            top: `${cube.top}%`,
            backgroundColor: cube.color,
            boxShadow: `0 0 15px ${cube.color}`,
            animationDuration: `${2 + Math.random() * 3}s`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <Button
            onClick={toggleLight}
            size="lg"
            className={`mb-8 transition-all duration-300 ${
              isLightOn
                ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg shadow-purple-500/25"
                : "bg-gray-600 hover:bg-gray-700"
            }`}
          >
            <Lightbulb className="w-5 h-5 mr-2" />
            {isLightOn ? "Switch OFF" : "Switch ON"}
          </Button>

          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 transition-all duration-1000 ${
              isLightOn ? "bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent" : "text-gray-700"
            }`}
          >
            Our Vision
          </h2>

          <p
            className={`text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-12 transition-colors duration-1000 ${
              isLightOn ? "text-gray-700" : "text-gray-600"
            }`}
          >
            To be the trusted technology partner that empowers businesses through innovative, secure, and scalable IT
            solutions—driving digital transformation for a smarter, more connected world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visionPoints.map((point, index) => {
            const IconComponent = point.icon
            return (
              <Card
                key={index}
                className={`transition-all duration-500 hover:shadow-lg hover:-translate-y-2 ${
                  isLightOn ? "bg-white/80 backdrop-blur-sm shadow-lg" : "bg-white"
                }`}
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <CardContent className="p-6 text-center">
                  <IconComponent className={`w-12 h-12 mx-auto mb-4 ${point.color}`} />
                  <h3 className="font-semibold text-gray-800 mb-2">{point.text}</h3>
                  <div
                    className={`w-full h-1 rounded-full transition-all duration-1000 ${
                      isLightOn ? "bg-gradient-to-r from-purple-400 to-blue-400" : "bg-gray-300"
                    }`}
                  />
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
