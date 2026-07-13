"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { motion } from "framer-motion";

export function Header65() {
  return (
    <section id="our-aim" className="relative pb-24 md:pb-32 lg:pb-40 overflow-hidden bg-background-secondary">
      {/* Infinite Marquee */}
      <div className="w-full overflow-hidden flex whitespace-nowrap border-b border-primary-900/10 py-3 mb-16 md:mb-24 bg-primary-900 text-white">
        <motion.div
          className="flex whitespace-nowrap items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        >
          <span className="text-[3rem] md:text-[5rem] lg:text-[7rem] font-serif tracking-tight pr-8 opacity-95">
            MEANINGFUL PATHWAYS <span className="text-secondary-500 mx-4 md:mx-8">•</span> INCLUSIVE EDUCATION <span className="text-secondary-500 mx-4 md:mx-8">•</span>
          </span>
          <span className="text-[3rem] md:text-[5rem] lg:text-[7rem] font-serif tracking-tight pr-8 opacity-95">
            MEANINGFUL PATHWAYS <span className="text-secondary-500 mx-4 md:mx-8">•</span> INCLUSIVE EDUCATION <span className="text-secondary-500 mx-4 md:mx-8">•</span>
          </span>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="container px-[5%] mt-12 md:mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
             <div className="aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl relative z-10">
               <img 
                 src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                 alt="Students" 
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-out"
               />
             </div>
             {/* Decorative element */}
             <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-secondary-500 rounded-full mix-blend-multiply blur-3xl opacity-30 z-0 animate-pulse" />
             <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary-900 rounded-full mix-blend-multiply blur-3xl opacity-20 z-0" />
          </motion.div>
          
          <motion.div 
            className="lg:col-span-7 flex flex-col justify-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-[2px] bg-secondary-500" />
              <p className="font-bold text-secondary-500 uppercase tracking-[0.3em] text-sm md:text-base">
                Our Aim
              </p>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-primary-900 leading-[1.1] mb-10">
              We create <span className="italic text-secondary-500 font-light">meaningful</span> pathways into higher education.
            </h2>
            
            <p className="text-lg md:text-2xl text-slate-600 leading-relaxed mb-12 max-w-2xl font-light">
              We support students from diverse, disadvantaged, and underrepresented backgrounds who may not have followed a traditional academic route—including mature learners, early school leavers, and those without standard qualifications.
            </p>
            
            <div>
              <Button 
                title="Explore Programmes" 
                className="bg-primary-900 hover:bg-secondary-500 hover:text-primary-900 text-white px-10 py-6 text-lg border-none transition-all duration-500 shadow-2xl font-medium tracking-wide"
              >
                Explore Programmes
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
