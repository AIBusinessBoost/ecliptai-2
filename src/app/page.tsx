'use client'

import { useEffect, useState } from 'react'
import WebGLBackground from '@/components/WebGLBackground'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import RevenueCalculator from '@/components/RevenueCalculator'
import Features from '@/components/Features'
import Solutions from '@/components/Solutions'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  
  useEffect(() => {
    // Simulate loading time for WebGL initialization
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500)
    
    return () => clearTimeout(timer)
  }, [])
  
  return (
    <main className="relative">
      {!isLoaded && (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
          <div className="text-center">
            <div className="text-3xl font-display font-bold gradient-text mb-4">EcliptAI</div>
            <div className="w-16 h-16 border-t-4 border-b-4 border-primary-600 rounded-full animate-spin mx-auto"></div>
          </div>
        </div>
      )}
      
      <WebGLBackground />
      <Navbar />
      
      <div className="parallax-container">
        <Hero />
        <Stats />
        <RevenueCalculator />
        <Features />
        <Solutions />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
