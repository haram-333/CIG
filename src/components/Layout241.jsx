"use client";

import { Button } from "@relume_io/relume-ui";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

export function Layout241() {
  const [activeIndex, setActiveIndex] = useState(0); // First item open by default

  const steps = [
    {
      title: "Supportive Route",
      description: "A welcoming environment to help you return to learning with confidence. We understand that returning to education can be daunting, which is why we provide dedicated academic and pastoral support to ensure you thrive.",
    },
    {
      title: "Career Progression",
      description: "Programmes designed with real-world employability in mind to support your next step. Our courses are closely aligned with regional workforce needs, ensuring you develop skills that employers are actively looking for.",
    },
    {
      title: "Future Opportunities",
      description: "Contact us to find out more about our proposed higher education programmes. We are here to help you navigate your options and find the pathway that perfectly aligns with your long-term career aspirations.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="journey" className="relative px-[5%] py-24 md:py-32 lg:py-40 bg-primary-900 text-white overflow-hidden">
      
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary-500/10 rounded-full blur-[150px] translate-x-1/3 -translate-y-1/3" />
      </div>

      <div className="container relative z-10 max-w-7xl mx-auto">
        
        {/* Top Section - Redesigned for better flow and visibility */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20 mb-20 md:mb-32">
          <motion.div
            className="lg:w-2/3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-[2px] bg-secondary-500" />
              <p className="font-bold text-secondary-500 uppercase tracking-[0.3em] text-sm md:text-base">
                Journey
              </p>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-[5.5rem] font-serif leading-[1.05] text-white">
              Start Your Higher <span className="italic text-secondary-500 font-light block mt-2">Education Journey</span>
            </h2>
          </motion.div>
          
          <motion.div
            className="lg:w-1/3 flex flex-col items-start lg:pt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light mb-10">
              Whether you are returning to education, looking to change career, seeking progression, or ready to take the next step towards a degree, we provide a supportive route to help you move forward.
            </p>
            <Button 
              className="bg-transparent border border-secondary-500 text-secondary-500 hover:bg-secondary-500 hover:text-primary-900 transition-all duration-300 px-10 py-6 text-lg tracking-wide shadow-xl rounded-full"
            >
              Contact Us Today
            </Button>
          </motion.div>
        </div>

        {/* Accordion Section */}
        <div className="flex flex-col w-full border-t border-white/10">
          {steps.map((step, index) => {
            const isOpen = activeIndex === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="border-b border-white/10"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full group flex items-center justify-between py-10 md:py-12 text-left hover:bg-white/[0.02] transition-colors duration-500 cursor-pointer px-4 -mx-4 md:px-0 md:mx-0"
                >
                  <div className="flex items-center gap-6 md:gap-12">
                    <span className={`font-serif text-3xl md:text-4xl transition-colors duration-500 ${isOpen ? 'text-secondary-500 opacity-100' : 'text-secondary-500 opacity-40 group-hover:opacity-100'}`}>
                      0{index + 1}
                    </span>
                    <h3 className={`text-3xl md:text-5xl font-serif transition-colors duration-500 ${isOpen ? 'text-secondary-500' : 'text-white group-hover:text-secondary-500'}`}>
                      {step.title}
                    </h3>
                  </div>
                  
                  <div className="text-3xl text-secondary-500 opacity-50 group-hover:opacity-100 transition-all duration-300 transform">
                    {isOpen ? <FiMinus /> : <FiPlus />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 pl-4 md:pl-[6.5rem] pr-4 md:pr-12 text-slate-300 text-lg md:text-xl font-light leading-relaxed max-w-4xl">
                        {step.description}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
