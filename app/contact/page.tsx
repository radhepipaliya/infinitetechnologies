"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, MessageCircle, Car, Building } from "lucide-react"
import NetworkBackground from "@/components/network-background"
import TicTacToe from "@/components/tic-tac-toe"
import ContactForm from "@/components/contact-form"

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["A/F-43, Amrapali Complex", "Bopal Cross Road, near Kotak Mahindra Bank", "Ahmedabad-380058"],
    color: "text-blue-500",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 63594 80914", "Available 24/7"],
    color: "text-green-500",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["infinitetechnology06@gmail.com", "We'll respond within 24 hours"],
    color: "text-purple-500",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Closed"],
    color: "text-orange-500",
  },
]

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer web development, mobile app development, graphic design, digital marketing, and custom software solutions.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 2-6 months.",
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer 24/7 support and maintenance packages to ensure your digital solutions run smoothly.",
  },
  {
    question: "What's your development process?",
    answer:
      "We follow a structured approach: Discovery, Planning, Design, Development, Testing, and Launch with regular client updates.",
  },
]

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <NetworkBackground />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              Contact Us
            </h1>
            <p
              className={`text-lg md:text-xl leading-relaxed max-w-4xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              "The future belongs to those who innovate, connect, and take action."
              <br />
              <span className="text-purple-200">— Infinite Technology</span>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ready to start your next project? We're here to help you bring your ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <Card
                  key={index}
                  className={`text-center p-6 hover:shadow-lg transition-all duration-500 hover:-translate-y-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: `${index * 100 + 600}ms` }}
                >
                  <CardContent className="p-0">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center`}>
                      <IconComponent className={`w-8 h-8 ${info.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Tic Tac Toe Game */}
            <div>
              <TicTacToe />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Visit Our Office
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Located in the heart of Ahmedabad, our office is easily accessible and equipped with modern facilities to
              serve you better.
            </p>
          </div>

          <div className="relative group">
            <Card className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-2">
              <CardContent className="p-0 relative">
                <div className="relative h-96 md:h-[500px] overflow-hidden">
                  <iframe
                    className="w-full h-full transition-all duration-300 group-hover:scale-105"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d592.8527079149901!2d72.4777631!3d23.0288411!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc9aeacd773d8d31%3A0x9229a7c405cb5b3e!2sInfinite%20Technology!5e1!3m2!1sen!2sin!4v1749802125810!5m2!1sen!2sin"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Infinite Technology Office Location"
                  />

                  {/* Overlay with hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Interactive overlay button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                    <Button
                      asChild
                      size="lg"
                      className="bg-white/95 text-purple-600 hover:bg-white hover:text-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 pointer-events-auto"
                    >
                      <a
                        href="https://www.google.com/maps?q=Infinite+Technology"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <MapPin className="w-5 h-5" />
                        Open in Google Maps
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Map info overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2">Infinite Technology</h3>
                      <div className="space-y-1 text-sm opacity-90">
                        <p>A/F-43, Amrapali Complex</p>
                        <p>Bopal Cross Road, near Kotak Mahindra Bank</p>
                        <p>Ahmedabad-380058, Gujarat, India</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-sm opacity-90 mb-1">
                        <Clock className="w-4 h-4 mr-1" />
                        Open Now
                      </div>
                      <div className="text-xs opacity-75">Mon-Fri: 9AM-6PM</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Decorative elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-2xl blur-xl -z-10 group-hover:from-purple-600/20 group-hover:to-blue-600/20 transition-all duration-500" />
          </div>

          {/* Additional location info */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Easy to Find</h3>
                <p className="text-gray-600 text-sm">
                  Located near major landmarks and easily accessible by public transport
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                  <Car className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Parking Available</h3>
                <p className="text-gray-600 text-sm">Ample parking space available for visitors and clients</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center">
                  <Building className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Modern Facilities</h3>
                <p className="text-gray-600 text-sm">State-of-the-art office with modern amenities and meeting rooms</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">Find answers to common questions about our services and process.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                      <div
                        className={`transform transition-transform duration-200 ${expandedFaq === index ? "rotate-180" : ""}`}
                      >
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${expandedFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help transform your business with innovative digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Start a Conversation
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 bg-transparent"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
