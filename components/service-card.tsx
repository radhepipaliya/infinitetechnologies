"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MousePointer, ArrowRight, CheckCircle } from "lucide-react"
import ImagePlaceholder from "@/components/image-placeholder"

interface Service {
  id: string
  title: string
  icon: any
  image: string
  shortDescription: string
  fullDescription: string
  features: string[]
  color: string
  bgColor: string
}

interface ServiceCardProps {
  service: Service
  index: number
  isSelected: boolean
  onSelect: () => void
}

export default function ServiceCard({ service, index, isSelected, onSelect }: ServiceCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const IconComponent = service.icon

  return (
    <div
      className={`relative h-96 transition-all duration-500 hover:-translate-y-2 ${isSelected ? "scale-105" : ""}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of Card */}
        <Card className="absolute inset-0 w-full h-full backface-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardContent className="p-0 h-full">
            <div className="relative h-48 overflow-hidden rounded-t-lg">
              <ImagePlaceholder
                width={400}
                height={300}
                alt={service.title}
                text={service.title}
                className="w-full h-full transition-transform duration-300 hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20`} />
              <div className="absolute top-4 left-4">
                <div className={`p-3 bg-white/90 rounded-full shadow-lg`}>
                  <IconComponent
                    className={`w-6 h-6 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}
                  />
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{service.shortDescription}</p>

              <div className="flex items-center justify-between">
                <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700 p-0">
                  Learn More
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Button>

                <div className="flex items-center text-xs text-gray-500">
                  <MousePointer className="w-3 h-3 mr-1" />
                  Flip me
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Back of Card */}
        <Card className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 shadow-lg">
          <CardContent className="p-6 h-full flex flex-col">
            <div className="flex items-center mb-4">
              <IconComponent
                className={`w-8 h-8 bg-gradient-to-r ${service.color} bg-clip-text text-transparent mr-3`}
              />
              <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
            </div>

            <p className="text-gray-600 text-sm mb-4 flex-1 overflow-y-auto">{service.fullDescription}</p>

            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800 text-sm">Key Features:</h4>
              <div className="grid grid-cols-2 gap-1">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-xs text-gray-600">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" />
                    <span className="truncate">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
