'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }
  
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Recover Lost Revenue with <span className="gradient-text">AI Automation</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto"
          >
            EcliptAI helps businesses recover up to 30% of lost revenue through intelligent automation of missed calls, follow-ups, and customer engagement.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a 
              href="#calculator" 
              className="bg-primary-600 hover:bg-primary-700 text-white font-medium px-8 py-3 rounded-full transition-colors shadow-lg hover:shadow-xl"
            >
              Calculate Your Savings
            </a>
            <a 
              href="#contact" 
              className="bg-white hover:bg-gray-100 text-gray-800 font-medium px-8 py-3 rounded-full border border-gray-300 transition-colors shadow-md hover:shadow-lg"
            >
              Schedule a Demo
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 max-w-5xl mx-auto"
        >
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-2">
              <img 
                src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="EcliptAI Dashboard" 
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-primary-100 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-secondary-100 rounded-full opacity-50 blur-3xl"></div>
    </section>
  )
}
