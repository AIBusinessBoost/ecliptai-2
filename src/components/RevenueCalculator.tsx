'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function RevenueCalculator() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const [formData, setFormData] = useState({
    missedCalls: 20,
    avgDealValue: 1000,
    conversionRate: 20
  })
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: parseFloat(value)
    })
  }
  
  // Calculate potential revenue recovery
  const potentialRevenue = Math.round(
    formData.missedCalls * 
    (formData.avgDealValue * (formData.conversionRate / 100)) * 
    30 // Monthly calculation
  )
  
  const annualRevenue = potentialRevenue * 12
  
  return (
    <section id="calculator" className="py-20 relative">
      <div className="absolute -top-10 left-0 right-0 h-20 bg-gray-50" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }}></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Calculate Your Revenue Recovery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how much revenue you could recover by automating your missed calls and follow-ups.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-10 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
                <h3 className="text-2xl font-display font-bold mb-6">
                  Revenue Recovery Calculator
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block mb-2 font-medium">
                      Average Missed Calls Per Day
                    </label>
                    <input
                      type="range"
                      name="missedCalls"
                      min="1"
                      max="100"
                      value={formData.missedCalls}
                      onChange={handleChange}
                      className="w-full h-2 bg-white/30 rounded-full appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between mt-1 text-sm">
                      <span>1</span>
                      <span className="font-bold">{formData.missedCalls}</span>
                      <span>100</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block mb-2 font-medium">
                      Average Deal Value ($)
                    </label>
                    <input
                      type="range"
                      name="avgDealValue"
                      min="100"
                      max="10000"
                      step="100"
                      value={formData.avgDealValue}
                      onChange={handleChange}
                      className="w-full h-2 bg-white/30 rounded-full appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between mt-1 text-sm">
                      <span>$100</span>
                      <span className="font-bold">${formData.avgDealValue.toLocaleString()}</span>
                      <span>$10,000</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block mb-2 font-medium">
                      Conversion Rate (%)
                    </label>
                    <input
                      type="range"
                      name="conversionRate"
                      min="1"
                      max="50"
                      value={formData.conversionRate}
                      onChange={handleChange}
                      className="w-full h-2 bg-white/30 rounded-full appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between mt-1 text-sm">
                      <span>1%</span>
                      <span className="font-bold">{formData.conversionRate}%</span>
                      <span>50%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-display font-bold mb-6">
                  Your Potential Recovery
                </h3>
                
                <div className="space-y-8">
                  <div>
                    <p className="text-gray-600 mb-2">Monthly Revenue Recovery</p>
                    <div className="text-4xl font-display font-bold text-primary-600">
                      ${potentialRevenue.toLocaleString()}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-gray-600 mb-2">Annual Revenue Recovery</p>
                    <div className="text-4xl font-display font-bold text-secondary-600">
                      ${annualRevenue.toLocaleString()}
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <a 
                      href="#contact" 
                      className="block w-full bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-full transition-colors text-center shadow-lg hover:shadow-xl"
                    >
                      Get Started with EcliptAI
                    </a>
                    <p className="text-sm text-gray-500 mt-3 text-center">
                      No credit card required. Start recovering lost revenue today.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
