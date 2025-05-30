'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const MotionNav = motion.nav

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <MotionNav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <div className="relative h-10 w-10 mr-2">
                <Image 
                  src="/images/ecliptai-logo.svg" 
                  alt="EcliptAI Logo" 
                  width={40} 
                  height={40} 
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">EcliptAI</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-blue-400 font-medium transition-colors">Features</a>
            <a href="#solutions" className="text-gray-300 hover:text-blue-400 font-medium transition-colors">Solutions</a>
            <a href="#testimonials" className="text-gray-300 hover:text-blue-400 font-medium transition-colors">Testimonials</a>
            <a href="#contact" className="text-gray-300 hover:text-blue-400 font-medium transition-colors">Contact</a>
            <a href="#calculator" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transition-all shadow-md hover:shadow-lg">
              Calculate Savings
            </a>
          </div>
          
          <button 
            className="md:hidden text-gray-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
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
        
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 py-4 bg-gray-800 rounded-lg shadow-lg"
            >
              <a href="#features" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 rounded-md">Features</a>
              <a href="#solutions" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 rounded-md">Solutions</a>
              <a href="#testimonials" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 rounded-md">Testimonials</a>
              <a href="#contact" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 rounded-md">Contact</a>
              <a href="#calculator" className="block px-4 py-2 mt-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md font-medium hover:from-blue-600 hover:to-purple-700 transition-all">
                Calculate Savings
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MotionNav>
  )
}
