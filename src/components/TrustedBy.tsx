'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function TrustedBy() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const logos = [
    {
      name: "TechCorp",
      logo: (
        <svg viewBox="0 0 100 40" className="h-8 md:h-10 w-auto">
          <rect width="40" height="40" rx="8" fill="currentColor" />
          <path d="M50 10H90V16H50V10ZM50 22H80V28H50V22Z" fill="currentColor" />
        </svg>
      )
    },
    {
      name: "InnovateLabs",
      logo: (
        <svg viewBox="0 0 100 40" className="h-8 md:h-10 w-auto">
          <circle cx="20" cy="20" r="15" fill="currentColor" />
          <path d="M45 5H95V15H45V5ZM45 25H95V35H45V25Z" fill="currentColor" />
        </svg>
      )
    },
    {
      name: "FutureWorks",
      logo: (
        <svg viewBox="0 0 100 40" className="h-8 md:h-10 w-auto">
          <path d="M10 5L30 35L50 5H10Z" fill="currentColor" />
          <path d="M60 5H90V35H60V5Z" fill="currentColor" />
        </svg>
      )
    },
    {
      name: "GlobalSystems",
      logo: (
        <svg viewBox="0 0 100 40" className="h-8 md:h-10 w-auto">
          <circle cx="20" cy="20" r="15" fill="currentColor" />
          <rect x="45" y="5" width="50" height="30" rx="4" fill="currentColor" />
        </svg>
      )
    },
    {
      name: "NexGen",
      logo: (
        <svg viewBox="0 0 100 40" className="h-8 md:h-10 w-auto">
          <path d="M5 5L35 5L20 35L5 5Z" fill="currentColor" />
          <path d="M45 5H95L70 35H45V5Z" fill="currentColor" />
        </svg>
      )
    }
  ]
  
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-8">
            <p className="text-gray-500 font-medium">TRUSTED BY INNOVATIVE COMPANIES</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                {logo.logo}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
