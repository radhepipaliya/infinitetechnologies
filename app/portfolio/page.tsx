"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar, Users, Award } from "lucide-react"
import RocketAnimation from "@/components/rocket-animation"
import PortfolioCard from "@/components/portfolio-card"
import FilterTabs from "@/components/filter-tabs"

const portfolioItems = [
  {
    id: 1,
    title: "Tourism Management System",
    description:
      "Discover your next adventure with our Tourism Management System! From iconic landmarks to hidden gems, our platform offers seamless tour planning, secure booking, and personalized travel packages. Manage your profile, view travel history, and get assistance—all in one place. Your journey starts here!",
    tools: ["Python", "HTML", "CSS", "JavaScript"],
    category: "Web Application",
    videoId: "faZApnsDadg",
    image: "tourism-system",
    year: "2024",
    client: "Travel Agency",
    status: "Completed",
    features: ["User Authentication", "Booking System", "Payment Integration", "Admin Dashboard"],
  },
  {
    id: 2,
    title: "HTML CSS Templates",
    description:
      "Explore modern and responsive HTML templates to boost your web development projects. Simple, clean, and easy-to-use designs for any purpose!",
    tools: ["HTML", "CSS", "JavaScript"],
    category: "Template",
    videoId: "5eFfLPnpSig",
    image: "html-templates",
    year: "2024",
    client: "Open Source",
    status: "Completed",
    features: ["Responsive Design", "Modern UI", "Cross-browser Compatible", "SEO Optimized"],
  },
  {
    id: 3,
    title: "Dress to Impress",
    description:
      "Dress to Impress is a comprehensive e-commerce platform dedicated to fashion enthusiasts. Built with Django, this web application offers a seamless shopping experience with features including user authentication, product browsing, shopping cart management, and order tracking.",
    tools: ["HTML", "CSS", "Django", "JavaScript"],
    category: "E-commerce",
    videoId: "HEJvieEvN-o",
    image: "dress-to-impress",
    year: "2023",
    client: "Fashion Retailer",
    status: "Completed",
    features: ["Shopping Cart", "Payment Gateway", "Order Tracking", "User Profiles"],
  },
  {
    id: 4,
    title: "Beauty Parlour",
    description:
      "Welcome to Beauty Parlour – your destination for creative styling and premium beauty services tailored exclusively for women. From professional hair care to rejuvenating skin treatments, our expert team is here to enhance your natural beauty.",
    tools: ["HTML", "CSS", "JavaScript", "PHP", "Python"],
    category: "Business Website",
    videoId: "wpeoLrpvuk8",
    image: "beauty-parlour",
    year: "2023",
    client: "Beauty Salon",
    status: "Completed",
    features: ["Appointment Booking", "Service Catalog", "Gallery", "Contact Forms"],
  },
  {
    id: 5,
    title: "Infinite Technology's Legacy Website",
    description:
      "Old Website of our company which is fully responsive and also created professionally and best for normal and functional websites and local businesses.",
    tools: ["HTML", "CSS", "JavaScript", "PHP", "Python"],
    category: "Corporate Website",
    videoId: "GMhILcrRrBI",
    image: "legacy-website",
    year: "2022",
    client: "Infinite Technology",
    status: "Archived",
    features: ["Responsive Design", "Contact Forms", "Service Pages", "About Section"],
  },
  {
    id: 6,
    title: "Infinite Technology's Modern Website",
    description:
      "Infinite Technology is a cutting-edge IT solutions website featuring modern UI/UX design, 3D animations, AI integrations, and responsive layouts, built using advanced frontend technologies and interactive web experiences.",
    tools: ["HTML", "CSS", "JavaScript", "React", "Three.js"],
    category: "Corporate Website",
    videoId: "StkemNQiRAA",
    image: "modern-website",
    year: "2024",
    client: "Infinite Technology",
    status: "Live",
    features: ["3D Animations", "AI Integration", "Modern UI/UX", "Interactive Elements"],
  },
  {
    id: 7,
    title: "Pro Academys",
    description:
      "ProAcademys is an India-based online education platform offering high-quality, affordable courses in Data Science, AI, Machine Learning, Python Programming, and Professional English Communication with hands-on projects and industry-relevant skills.",
    tools: ["Python", "HTML", "JavaScript", "Laravel"],
    category: "Education Platform",
    videoId: "m5y2kcT5tpg",
    image: "pro-academys",
    year: "2024",
    client: "ProAcademys",
    status: "Live",
    features: ["Course Management", "Video Streaming", "Progress Tracking", "Certification"],
  },
]

const categories = [
  "All",
  "Web Application",
  "E-commerce",
  "Business Website",
  "Corporate Website",
  "Template",
  "Education Platform",
]

const stats = [
  { icon: Award, number: 15, label: "Projects Completed", suffix: "+" },
  { icon: Users, number: 25, label: "Happy Clients", suffix: "+" },
  { icon: Calendar, number: 3, label: "Years Experience", suffix: "+" },
  { icon: ExternalLink, number: 10, label: "Live Projects", suffix: "+" },
]

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [filteredItems, setFilteredItems] = useState(portfolioItems)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredItems(portfolioItems)
    } else {
      setFilteredItems(portfolioItems.filter((item) => item.category === selectedCategory))
    }
  }, [selectedCategory])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-purple-50 to-blue-50">
        <RocketAnimation />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              Our Portfolio
            </h1>
            <p
              className={`text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-12 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              Explore our collection of innovative projects that showcase our expertise in web development, mobile
              applications, and digital solutions. Each project represents our commitment to excellence and client
              satisfaction.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <Card
                    key={index}
                    className={`text-center p-6 hover:shadow-lg transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                    style={{ transitionDelay: `${index * 100 + 600}ms` }}
                  >
                    <CardContent className="p-0">
                      <IconComponent className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-gray-800 mb-1">
                        {stat.number}
                        {stat.suffix}
                      </div>
                      <div className="text-gray-600 text-sm">{stat.label}</div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <FilterTabs
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <PortfolioCard key={item.id} item={item} index={index} />
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No projects found</h3>
              <p className="text-gray-600">Try selecting a different category to see more projects.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's collaborate to bring your vision to life with our proven expertise and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Project
              <ExternalLink className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 bg-transparent"
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
