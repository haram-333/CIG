"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { motion } from "framer-motion";

export function Layout465() {
  return (
    <section id="programmes" className="relative px-[5%] py-24 md:py-32 lg:py-40 bg-background-secondary overflow-hidden">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Typography */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-[2px] bg-secondary-500" />
              <p className="font-bold text-secondary-500 uppercase tracking-[0.3em] text-sm md:text-base">
                Programmes
              </p>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-primary-900 leading-[1.1] mb-10">
              Proposed <span className="italic text-secondary-500 font-light">Undergraduate</span> Programmes
            </h2>
            
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-12 font-light">
              College for Innovation and Growth is working towards the delivery of undergraduate programmes in Bristol in partnership with the University of Wolverhampton. These programmes support students progressing into professional careers.
            </p>
            
            <div>
              <Button 
                title="View Courses" 
                className="bg-primary-900 hover:bg-secondary-500 hover:text-primary-900 text-white px-10 py-6 text-lg border-none transition-all duration-500 shadow-xl font-medium tracking-wide"
              >
                View Courses
              </Button>
            </div>
          </motion.div>
          
          {/* Right Side: Staggered Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10">
            {/* Card 1: Business */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="group relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
                alt="Business and Tourism"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                <p className="text-secondary-500 font-bold uppercase tracking-widest text-sm mb-3">
                  Business & Tourism
                </p>
                <h3 className="text-2xl md:text-3xl font-serif text-white leading-tight mb-4 group-hover:text-secondary-500 transition-colors duration-500">
                  BA (Hons) Business and Tourism Management
                </h3>
                <div className="h-[2px] w-12 bg-secondary-500 mb-4 group-hover:w-full transition-all duration-700 ease-in-out" />
                <p className="text-slate-300 font-light text-sm md:text-base">
                  With Foundation Year
                </p>
              </div>
            </motion.div>

            {/* Card 2: Public Health (Staggered downwards) */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="group relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl sm:mt-20"
            >
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop"
                alt="Public Health"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                <p className="text-secondary-500 font-bold uppercase tracking-widest text-sm mb-3">
                  Public Health
                </p>
                <h3 className="text-2xl md:text-3xl font-serif text-white leading-tight mb-4 group-hover:text-secondary-500 transition-colors duration-500">
                  BSc (Hons) Public Health
                </h3>
                <div className="h-[2px] w-12 bg-secondary-500 mb-4 group-hover:w-full transition-all duration-700 ease-in-out" />
                <p className="text-slate-300 font-light text-sm md:text-base">
                  With Foundation Year
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
