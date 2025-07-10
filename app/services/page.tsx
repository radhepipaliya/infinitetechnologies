"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Smartphone, Palette, TrendingUp, Package, ArrowRight } from "lucide-react"
import ParticleBackground from "@/components/particle-background"
import ServiceCard from "@/components/service-card"
import AnimatedCounter from "@/components/animated-counter"

const services = [
  {
    id: "web-development",
    title: "Web Development",
    icon: Code,
    image: "web-dev", // We'll use this as text for placeholder
    shortDescription: "Powerful, responsive websites that drive results",
    fullDescription:
      "At Infinite Technologies, we specialize in crafting powerful, responsive, and user-friendly websites 💻 that help businesses stand out in the digital world 🌐. Whether it's a sleek landing page, a dynamic eCommerce platform 🛒, or a complex web application ⚙️, our team uses cutting-edge technologies like HTML5, CSS3, JavaScript, React, and Node.js 💡 to build fast, secure, and scalable solutions 🚀.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern UI/UX"],
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
  },
  {
    id: "app-development",
    title: "App Development",
    icon: Smartphone,
    image: "mobile-app",
    shortDescription: "Native and cross-platform mobile applications",
    fullDescription:
      "We specialize in 📱 iOS and Android app development, crafting high-performance native apps using Swift, Kotlin, and platform-specific SDKs to deliver the best user experience on every device. Our 🌐 web application development services focus on building robust, secure, and scalable web apps using modern frameworks like React, Node.js, and Django.",
    features: ["Native iOS & Android", "Cross-platform", "Cloud Integration", "Real-time Features"],
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    icon: Palette,
    image: "design",
    shortDescription: "Stunning visuals that communicate your brand story",
    fullDescription:
      "At Infinite Technologies, our graphic design services 🎨 are all about transforming ideas into visually stunning experiences ✨. From eye-catching logos 🧩 and brand identities 🆔 to modern UI/UX designs 🖱️ and marketing creatives 📢, we craft visuals that not only look great but also communicate your brand's story effectively 💬.",
    features: ["Brand Identity", "UI/UX Design", "Marketing Materials", "Social Media Graphics"],
    color: "from-green-500 to-teal-500",
    bgColor: "bg-green-50",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    icon: TrendingUp,
    image: "marketing",
    shortDescription: "Data-driven marketing strategies that deliver ROI",
    fullDescription:
      "Our 📈 SEO optimization services include technical audits, on-page enhancements, and ethical link-building strategies to improve organic rankings and attract high-intent traffic. We craft a 📚 content strategy using editorial calendars, pillar pages, and compelling copy that educates, inspires, and converts your audience.",
    features: ["SEO Optimization", "Social Media Marketing", "Content Strategy", "Paid Advertising"],
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
  },
  {
    id: "product-development",
    title: "Product Development",
    icon: Package,
    image: "product-dev",
    shortDescription: "Custom IT products tailored to your business needs",
    fullDescription:
      "At Infinite Technologies, our IT products 🖥️ are designed to solve real-world challenges with innovation 💡, precision 🎯, and performance ⚙️. From custom software solutions 🛠️ to ready-to-deploy digital platforms 🚀, we build scalable and secure products tailored to specific business needs.",
    features: ["Custom Software", "Cloud Solutions", "CRM Systems", "Enterprise Platforms"],
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-50",
  },
]

const stats = [
  { number: 150, label: "Projects Completed", suffix: "+" },
  { number: 50, label: "Happy Clients", suffix: "+" },
  { number: 99, label: "Success Rate", suffix: "%" },
  { number: 24, label: "Support Hours", suffix: "/7" },
]

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              Services We Provide
            </h1>
            <p
              className={`text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              At Infinite Technology, we specialize in creating powerful, visually striking digital solutions tailored
              to meet your unique business needs. Whether you're a startup establishing your online presence or an
              enterprise aiming to elevate your digital experience, our solutions are crafted for performance,
              usability, and growth.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className={`text-center p-6 hover:shadow-lg transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 100 + 600}ms` }}
              >
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Our Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions designed to transform your business and drive growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                isSelected={selectedService === service.id}
                onSelect={() => setSelectedService(selectedService === service.id ? null : service.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A streamlined approach to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your needs and goals", icon: "🔍" },
              { step: "02", title: "Strategy", description: "Creating a tailored solution plan", icon: "📋" },
              { step: "03", title: "Development", description: "Building with cutting-edge technology", icon: "⚙️" },
              { step: "04", title: "Launch", description: "Deploying and optimizing for success", icon: "🚀" },
            ].map((process, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-0">
                  <div className="text-4xl mb-4">{process.icon}</div>
                  <div className="text-sm font-bold text-purple-600 mb-2">STEP {process.step}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{process.title}</h3>
                  <p className="text-gray-600 text-sm">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our services can help you achieve your digital goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 bg-transparent"
            >
              View Our Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
