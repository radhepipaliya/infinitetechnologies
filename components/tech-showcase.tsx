"use client"

import { useEffect, useRef } from "react"
import ModelViewer from "@/components/model-viewer"
import { Card, CardContent } from "@/components/ui/card"

const technologies = [
  {
    name: "HTML & CSS",
    model: "/html_logo_3d_model.glb",
    description:
      "Creating modern and responsive web layouts using the latest HTML5 and CSS3 standards, ensuring cross-browser compatibility.",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Python",
    model: "/python.glb",
    description:
      "Implementing versatile server-side applications with Python, leveraging its rich ecosystem for various backend tasks.",
    color: "from-blue-500 to-yellow-500",
  },
  {
    name: "Flutter",
    model: "/flutter.glb",
    description:
      "Developing visually appealing, cross-platform mobile applications with Flutter, ensuring smooth performance on both iOS and Android.",
    color: "from-blue-400 to-cyan-400",
  },
  {
    name: "Java",
    model: "/java.glb",
    description:
      "Building robust and scalable backend applications using modern Java frameworks like Spring Boot, ensuring high performance, security, and maintainability.",
    color: "from-red-600 to-orange-600",
  },
  {
    name: "Figma",
    model: "/Figma_Logo_0611062457_texture.glb",
    description:
      "Creating collaborative and responsive design prototypes with Figma, offering real-time design feedback and easy collaboration.",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Firebase",
    model: "/Firebase_Logo_0611063747_texture.glb",
    description:
      "Integrating Firebase for real-time database solutions, offering seamless synchronization and scalability for mobile and web apps.",
    color: "from-yellow-500 to-orange-500",
  },
]

export default function TechShowcase() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = sectionRef.current?.querySelectorAll(".tech-card")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-20 px-6 bg-white overflow-hidden">
      {/* Floating Icons Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-8 h-8 opacity-20 animate-float-${i + 1}`}
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-purple-500 to-blue-500 rounded-full"></div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Our Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We specialize in cutting-edge technologies to bring your digital vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <Card
              key={tech.name}
              className="tech-card group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <ModelViewer
                    src={tech.model}
                    alt={`${tech.name} 3D Model`}
                    className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${tech.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  ></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                    {tech.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{tech.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
