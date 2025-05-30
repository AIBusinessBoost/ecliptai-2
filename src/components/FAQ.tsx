'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function FAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  
  const faqs = [
    {
      question: "How does EcliptAI recover lost revenue?",
      answer: "EcliptAI uses artificial intelligence to automatically follow up on missed calls, abandoned carts, and other lost opportunities. Our system identifies when potential revenue is at risk and takes immediate action through personalized outreach via calls, texts, or emails to re-engage customers and close sales that would otherwise be lost."
    },
    {
      question: "How long does it take to set up EcliptAI?",
      answer: "Most businesses can be fully set up with EcliptAI in just 1-2 days. Our team handles the integration with your existing systems, and our user-friendly dashboard makes it easy to customize your automation settings. We also provide comprehensive onboarding to ensure you get the most out of the platform."
    },
    {
      question: "Will EcliptAI work with my existing systems?",
      answer: "Yes, EcliptAI is designed to integrate seamlessly with most popular business systems. We support integration with major CRM platforms (Salesforce, HubSpot, etc.), phone systems, email marketing tools, and e-commerce platforms. If you have a custom system, our team can work with you to develop a custom integration."
    },
    {
      question: "How much revenue can I expect to recover?",
      answer: "While results vary by industry and business, our customers typically recover 15-30% of previously lost revenue. Factors that influence results include your current follow-up processes, average transaction value, and volume of missed opportunities. Our calculator can help you estimate potential recovery based on your specific business metrics."
    },
    {
      question: "Is EcliptAI compliant with privacy regulations?",
      answer: "Absolutely. EcliptAI is designed with privacy compliance in mind. We adhere to GDPR, CCPA, and other relevant privacy regulations. Our platform includes features for consent management, data retention policies, and privacy preference centers to ensure your customer communications remain compliant."
    },
    {
      question: "What kind of support does EcliptAI provide?",
      answer: "We offer comprehensive support including 24/7 technical assistance, regular check-ins with your dedicated success manager, and access to our knowledge base and training resources. Enterprise plans include additional support options such as custom training sessions and priority response times."
    }
  ]
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about EcliptAI and how it can help your business.
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className="font-display font-bold text-lg">{faq.question}</span>
                  <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Still have questions? We're here to help.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
            >
              <span>Contact our support team</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
