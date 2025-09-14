"use client"

import { Button } from "@/components/ui/button"
import { Scale, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black py-20 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,theme(colors.gold.500/10),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,theme(colors.gold.400/5),transparent_50%)]" />
      
      <div className="container relative mx-auto px-4 text-center">
        <div className="mx-auto max-w-4xl">
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="rounded-full bg-gold-500/10 p-4 ring-1 ring-gold-500/20">
              <Scale className="h-12 w-12 text-gold-500" />
            </div>
          </div>

          {/* Main heading */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gold-400 sm:text-5xl md:text-6xl lg:text-7xl">
            Meet Your{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 bg-clip-text text-transparent">
                AI Lawyers
              </span>
              <Sparkles className="absolute -right-8 -top-4 h-6 w-6 text-gold-400 animate-pulse" />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mb-8 text-lg text-gray-300 sm:text-xl md:text-2xl">
            Specialized AI agents with deep legal knowledge across various practice areas. 
            Get expert guidance powered by cutting-edge artificial intelligence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button 
              variant="gold" 
              size="lg" 
              className="text-lg font-semibold shadow-2xl shadow-gold-500/25 hover:shadow-gold-500/40 transition-all duration-300"
            >
              Explore AI Lawyers
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-gold-500/30 text-gold-300 hover:bg-gold-500/10 hover:border-gold-400 transition-all duration-300"
            >
              Learn More
            </Button>
          </div>

          {/* Stats or features */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-400">24/7</div>
              <div className="text-sm text-gray-400">Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-400">10+</div>
              <div className="text-sm text-gray-400">Legal Specialties</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-400">100%</div>
              <div className="text-sm text-gray-400">AI-Powered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}