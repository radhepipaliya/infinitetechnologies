"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Rocket, Shield, Users, Zap } from "lucide-react"
import ParticleAnimation from "@/components/particle-animation"
import InteractiveLight from "@/components/interactive-light"
import ImagePlaceholder from "@/components/image-placeholder"

const visionPoints = [
  { icon: Users, text: "Trusted Technology Partner", color: "text-blue-500" },
  { icon: Rocket, text: "Empowers Businesses", color: "text-purple-500" },
  { icon: Shield, text: "Secure and Scalable IT Solutions", color: "text-green-500" },
  { icon: Zap, text: "Driving Digital Transformation", color: "text-orange-500" },
]

export default function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const aboutRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Mouse Bubble Effect */}
      <div
        className="fixed w-6 h-6 bg-purple-500/20 rounded-full pointer-events-none z-50 transition-all duration-100 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: "translate3d(0, 0, 0)",
        }}
      />

      {/* Hero Section */}
      <section
        ref={aboutRef}
        className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-purple-50 to-blue-50"
      >
        <ParticleAnimation />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight">
                About Us
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Infinite Technology is a next-generation startup committed to delivering innovative and scalable
                technology solutions. From startups to enterprises, we empower businesses with cutting-edge digital
                experiences.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With a passion for excellence and a drive for results, our team blends creativity, strategy, and
                technology to develop impactful digital products that transform how businesses operate and grow.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Our Services
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-lg font-semibold transition-all duration-300 bg-transparent"
                >
                  Contact Us
                </Button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-full max-w-lg h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <ImagePlaceholder
                    width={400}
                    height={500}
                    alt="About Infinite Technology"
                    text="About Us"
                    className="w-full h-full"
                  />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section with Interactive Light */}
      <InteractiveLight />

      {/* Mission Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="w-full max-w-lg h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <ImagePlaceholder
                    width={400}
                    height={500}
                    alt="Our Mission"
                    text="Our Mission"
                    className="w-full h-full"
                  />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-2xl blur-xl -z-10"></div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                We empower businesses with intelligent AI agents and advanced software solutions designed to streamline
                operations, enhance team productivity, and deliver exceptional customer experiences.
              </p>
              <p className="text-gray-400 leading-relaxed">
                By combining cutting-edge technology with user-focused design, we help organizations automate processes,
                make smarter decisions, and scale efficiently—driving measurable growth, innovation, and lasting
                competitive advantage.
              </p>

              {/* Mission Highlights */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-4 text-center">
                    <Target className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                    <h3 className="font-semibold text-white mb-1">Precision</h3>
                    <p className="text-sm text-gray-300">Targeted solutions</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-4 text-center">
                    <Rocket className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <h3 className="font-semibold text-white mb-1">Innovation</h3>
                    <p className="text-sm text-gray-300">Cutting-edge tech</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Our Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and client success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Projects Completed", icon: Target },
              { number: "25+", label: "Happy Clients", icon: Users },
              { number: "3+", label: "Years Experience", icon: Zap },
              { number: "24/7", label: "Support Available", icon: Shield },
            ].map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <IconComponent className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
