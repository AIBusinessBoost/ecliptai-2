'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Solutions() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const solutions = [
    {
      title: "For Small Businesses",
      description: "Affordable AI automation that helps small businesses compete with larger companies by maximizing every lead and opportunity.",
      image: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: [
        "Automated call follow-ups",
        "Email marketing automation",
        "Simple CRM integration",
        "Affordable monthly plans"
      ]
    },
    {
      title: "For Service Providers",
      description: "Specialized solutions for service businesses to reduce no-shows, automate appointment reminders, and increase bookings.",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: [
        "Appointment scheduling",
        "Automated reminders",
        "Review collection",
        "Customer reactivation"
      ]
    },
    {
      title: "For Enterprise",
      description: "Scalable AI solutions for large organizations with complex needs, multiple locations, and high call volumes.",
      image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: [
        "Advanced analytics",
        "Custom integrations",
        "Multi-location support",
        "Dedicated account manager"
      ]
    }
  ]
  
  return (
    <section id="solutions" className="py-20">
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
              Tailored Solutions for Your Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer specialized AI automation solutions designed for different business types and needs.
            </p>
          </div>
          
          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="solution-card"
              >
                <div className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} bg-white rounded-2xl shadow-xl overflow-hidden`}>
                  <div className="md:w-1/2">
                    <img 
                      src={solution.image} 
                      alt={solution.title} 
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl font-display font-bold mb-4">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {solution.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {solution.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a 
                      href="#contact" 
                      className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
                    >
                      <span>Learn more</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
