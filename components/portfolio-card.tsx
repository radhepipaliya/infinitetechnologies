"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, ExternalLink, Calendar, User, CheckCircle } from "lucide-react"
import ImagePlaceholder from "@/components/image-placeholder"

interface PortfolioItem {
  id: number
  title: string
  description: string
  tools: string[]
  category: string
  videoId: string
  image: string
  year: string
  client: string
  status: string
  features: string[]
}

interface PortfolioCardProps {
  item: PortfolioItem
  index: number
}

export default function PortfolioCard({ item, index }: PortfolioCardProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "live":
        return "bg-green-100 text-green-800"
      case "completed":
        return "bg-blue-100 text-blue-800"
      case "archived":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-purple-100 text-purple-800"
    }
  }

  return (
    <>
      <Card
        className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
        style={{
          animationDelay: `${index * 100}ms`,
        }}
      >
        <CardContent className="p-0">
          {/* Image Section */}
          <div className="relative h-48 overflow-hidden">
            <ImagePlaceholder
              width={400}
              height={300}
              alt={item.title}
              text={item.title}
              className={`w-full h-full transition-all duration-500 group-hover:scale-110 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
            />
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100 animate-pulse" />
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Play Button */}
            <Button
              onClick={() => setIsVideoOpen(true)}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-purple-600 rounded-full w-16 h-16 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
            >
              <Play className="w-6 h-6 ml-1" />
            </Button>

            {/* Status Badge */}
            <Badge className={`absolute top-4 right-4 ${getStatusColor(item.status)}`}>{item.status}</Badge>
          </div>

          {/* Content Section */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <Badge variant="outline" className="text-xs">
                {item.category}
              </Badge>
              <div className="flex items-center text-xs text-gray-500">
                <Calendar className="w-3 h-3 mr-1" />
                {item.year}
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
              {item.title}
            </h3>

            <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.description}</p>

            {/* Client Info */}
            <div className="flex items-center mb-4 text-sm text-gray-500">
              <User className="w-4 h-4 mr-2" />
              <span>Client: {item.client}</span>
            </div>

            {/* Tools */}
            <div className="flex flex-wrap gap-2 mb-4">
              {item.tools.slice(0, 3).map((tool, idx) => (
                <Badge key={idx} variant="secondary" className="text-xs">
                  {tool}
                </Badge>
              ))}
              {item.tools.length > 3 && (
                <Badge variant="secondary" className="text-xs">
                  +{item.tools.length - 3} more
                </Badge>
              )}
            </div>

            {/* Features */}
            <div className="space-y-1 mb-4">
              {item.features.slice(0, 2).map((feature, idx) => (
                <div key={idx} className="flex items-center text-xs text-gray-600">
                  <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Button
                onClick={() => setIsVideoOpen(true)}
                size="sm"
                className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                <Play className="w-4 h-4 mr-2" />
                Watch Demo
              </Button>
              <Button variant="outline" size="sm" className="px-3 bg-transparent">
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Video Modal */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1`}
              title={`${item.title} video`}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
            <Button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 p-0"
            >
              ×
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
