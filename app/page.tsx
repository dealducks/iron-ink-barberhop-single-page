"use client"

import { useState, useEffect, useRef } from "react"
import { Header } from "@/components/sections/Header"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Services } from "@/components/sections/Services"
import { Gallery } from "@/components/sections/Gallery"
import { Legacy } from "@/components/sections/Legacy"
import { Testimonials } from "@/components/sections/Testimonials"
import { Booking } from "@/components/sections/Booking"
import { Contact } from "@/components/sections/Contact"
import { Footer } from "@/components/sections/Footer"

export default function IronInkBarbershop() {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />

      <Hero heroRef={heroRef} scrollY={scrollY} />

      <About />

      <Services servicesRef={servicesRef} />

      <Gallery />

      <Legacy />

      <Testimonials />

      <Booking />

      <Contact />

      <Footer />

      {/* Custom Styles */}
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .font-script {
          font-family: 'Brush Script MT', cursive;
        }
        
        .text-shadow-gold {
          text-shadow: 0 0 20px rgba(245, 158, 11, 0.5);
        }
        
        .glow-amber {
          box-shadow: 0 0 30px rgba(245, 158, 11, 0.3);
        }
      `}</style>
    </div>
  )
}
