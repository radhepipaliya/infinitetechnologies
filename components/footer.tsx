"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin, Send } from "lucide-react"

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/portfolio", label: "Projects" },
  { href: "/contact", label: "Contact" },
]

const socialLinks = [
  {
    href: "https://www.facebook.com/share/1BcZkTHeeB/",
    icon: Facebook,
    label: "Facebook",
    color: "hover:text-blue-600",
  },
  {
    href: "https://www.linkedin.com/in/infinite-technologys-51aa6a35b",
    icon: Linkedin,
    label: "LinkedIn",
    color: "hover:text-blue-500",
  },
  {
    href: "https://www.instagram.com/infinite._technologys/profilecard/?igsh=MXJ1cXdlZWtyZGE1aQ==",
    icon: Instagram,
    label: "Instagram",
    color: "hover:text-pink-500",
  },
]

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white animate-pulse"
              style={{
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Company Info & Newsletter */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                Infinite Technology
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Building future-ready digital solutions across web, mobile, AI/ML, and immersive technologies. Subscribe
                to our newsletter for the latest updates and offers.
              </p>
            </div>

            {/* Newsletter Subscription */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Stay Updated</h4>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400"
                  required
                />
                <Button
                  type="submit"
                  size="sm"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-4"
                >
                  <Send size={16} />
                </Button>
              </form>
              {isSubscribed && <p className="text-green-400 text-sm animate-fade-in">✓ Thank you for subscribing!</p>}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-purple-400 mt-1 group-hover:text-purple-300 transition-colors" />
                <div className="text-gray-300 leading-relaxed">
                  <p>A/F-43, Amrapali Complex,</p>
                  <p>Bopal Cross Road, near Kotak Mahindra Bank,</p>
                  <p>Ahmedabad-380058</p>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
                <a
                  href="mailto:infinitetechnology06@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  infinitetechnology06@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
                <a href="tel:+916359480914" className="text-gray-300 hover:text-white transition-colors">
                  +91 63594 80914
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-4">
              <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-white/10 rounded-full text-gray-300 ${social.color} transition-all duration-300 hover:bg-white/20 hover:scale-110`}
                      aria-label={social.label}
                    >
                      <IconComponent size={20} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-purple-400 rounded-full group-hover:w-2 transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Additional Services */}
            <div className="pt-6">
              <h4 className="text-lg font-semibold text-white mb-4">Our Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {["Web Development", "Mobile Apps", "AI/ML", "Cloud Solutions"].map((service) => (
                  <span
                    key={service}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 hover:bg-white/20 transition-colors cursor-default"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">&copy; 2025 Infinite Technology. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600"></div>
    </footer>
  )
}
