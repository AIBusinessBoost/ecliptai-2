'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const [activeIndex, setActiveIndex] = useState(0)
  
  const testimonials = [
    {
      quote: "EcliptAI has completely transformed how we handle missed calls. We're now recovering about 28% of what used to be lost revenue. The ROI has been incredible.",
      author: "Sarah Johnson",
      position: "CEO, Bright Solutions",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "As a small business owner, every lead counts. EcliptAI's automation has allowed us to follow up with every potential customer without adding staff. It's like having an extra team member.",
      author: "Michael Chen",
      position: "Owner, Chen Consulting",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "The email automation has been a game-changer for our marketing efforts. We've seen a 45% increase in engagement and our conversion rates have nearly doubled.",
      author: "Jessica Williams",
      position: "Marketing Director, TechForward",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ]
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }
  
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from businesses that have transformed their revenue recovery with EcliptAI.
            </p>
          </div>
          
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="absolute top-0 left-0 transform -translate-y-1/2 translate-x-8">
              <div className="text-6xl text-primary-300">"</div>
            </div>
            
            <div className="mb-8 md:mb-0 md:flex items-center">
              <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].author} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="md:w-2/3 md:pl-8">
                <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6">
                  {testimonials[activeIndex].quote}
                </blockquote>
                <div className="font-display font-bold text-lg">
                  {testimonials[activeIndex].author}
                </div>
                <div className="text-gray-600">
                  {testimonials[activeIndex].position}
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 md:mt-12 space-x-4">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                aria-label="Previous testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full ${activeIndex === index ? 'bg-primary-600' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
              
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                aria-label="Next testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <a 
              href="#contact" 
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium px-8 py-3 rounded-full transition-colors shadow-lg hover:shadow-xl"
            >
              Start Your Success Story
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
