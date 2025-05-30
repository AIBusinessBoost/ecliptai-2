'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function CTABanner() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  return (
    <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Start Recovering Lost Revenue Today
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-10">
            Join hundreds of businesses already using EcliptAI to automate their follow-ups and recover lost revenue.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#contact" 
              className="bg-white text-primary-600 hover:bg-gray-100 font-medium px-8 py-3 rounded-full transition-colors shadow-lg hover:shadow-xl"
            >
              Schedule a Demo
            </a>
            <a 
              href="#calculator" 
              className="bg-transparent hover:bg-white/10 text-white border border-white font-medium px-8 py-3 rounded-full transition-colors"
            >
              Calculate Your Savings
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
