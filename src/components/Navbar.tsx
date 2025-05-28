'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-display font-bold gradient-text">EcliptAI</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Features</a>
            <a href="#solutions" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Solutions</a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Contact</a>
            <a href="#calculator" className="bg-primary-600 text-white px-5 py-2 rounded-full font-medium hover:bg-primary-700 transition-colors">
              Calculate Savings
            </a>
          </div>
          
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <a href="#features" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Features</a>
            <a href="#solutions" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Solutions</a>
            <a href="#testimonials" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Testimonials</a>
            <a href="#contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Contact</a>
            <a href="#calculator" className="block mx-4 mt-2 text-center bg-primary-600 text-white px-5 py-2 rounded-full font-medium hover:bg-primary-700">
              Calculate Savings
            </a>
          </div>
        )}
      </div>
    </motion.nav>
  )
}
