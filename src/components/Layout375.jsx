"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { motion } from "framer-motion";

export function Layout375() {
  const smallCards = [
    {
      label: "Inclusivity",
      title: "A place for everyone",
      desc: "We actively remove barriers so every background belongs here.",
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop",
      btn: "Belong"
    },
    {
      label: "Empowerment",
      title: "Unlock your potential",
      desc: "Providing the tools and confidence needed to advance your career.",
      img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=600&auto=format&fit=crop",
      btn: "Grow"
    },
    {
      label: "Community",
      title: "Stronger together",
      desc: "Forge lifelong connections in a supportive, tight-knit network.",
      img: "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=600&auto=format&fit=crop",
      btn: "Connect"
    },
    {
      label: "Innovation",
      title: "Future-focused learning",
      desc: "Adapting modern techniques to prepare you for tomorrow's challenges.",
      img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=600&auto=format&fit=crop",
      btn: "Discover"
    }
  ];

  return (
    <section id="values" className="px-[5%] py-24 md:py-32 lg:py-40 bg-primary-900 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container relative z-10 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 lg:mb-32"
        >
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-12 h-[2px] bg-secondary-500" />
              <p className="font-bold text-secondary-500 uppercase tracking-[0.3em] text-sm md:text-base">
                Values
              </p>
              <div className="w-12 h-[2px] bg-secondary-500" />
            </div>
            
            <h2 className="mb-6 text-5xl font-serif text-white md:mb-8 md:text-6xl lg:text-[5.5rem] leading-[1.1]">
              The principles we <br /> <span className="italic text-secondary-500 font-light">stand on</span>
            </h2>
            <p className="md:text-xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
              Our values are not just words on a wall. They are the hard choices we
              make every day to ensure your success.
            </p>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
            
            {/* 4 Small Cards */}
            {smallCards.map((card, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group flex flex-col bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-secondary-500/20"
              >
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent" />
                </div>
                <div className="flex flex-col justify-between flex-1 p-8">
                  <div>
                    <p className="mb-3 text-sm font-semibold text-secondary-500 uppercase tracking-wider">{card.label}</p>
                    <h3 className="mb-3 text-2xl font-serif text-white">
                      {card.title}
                    </h3>
                    <p className="text-slate-300 font-light leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                  <div className="mt-8 flex items-center">
                    <button className="flex items-center gap-2 text-white hover:text-secondary-500 transition-colors group/btn">
                      <span className="font-medium tracking-wide">{card.btn}</span>
                      <RxChevronRight className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Large Card (Spans 2 columns, 2 rows) */}
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="group flex flex-col bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-secondary-500/20 sm:col-span-2 sm:col-start-1 sm:row-span-2 sm:row-start-3 lg:col-span-2 lg:col-start-3 lg:row-span-2 lg:row-start-1"
            >
              <div className="relative h-64 md:h-[400px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                  alt="Students collaborating"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/20 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col justify-center p-8 md:p-12 lg:p-16">
                <div>
                  <p className="mb-4 text-sm font-semibold text-secondary-500 uppercase tracking-wider">Excellence</p>
                  <h3 className="mb-6 text-4xl font-serif text-white leading-[1.15] md:text-5xl lg:text-6xl">
                    Quality in every lecture, <br className="hidden lg:block" />
                    every interaction, and <br className="hidden lg:block" />
                    <span className="italic text-secondary-500 font-light">every outcome.</span>
                  </h3>
                  <p className="text-xl text-slate-300 font-light leading-relaxed max-w-md">
                    We refuse to lower the bar. We raise the support so you can
                    clear it.
                  </p>
                </div>
                <div className="mt-10 flex flex-wrap items-center gap-6">
                  <Button className="bg-secondary-500 hover:bg-secondary-600 text-primary-900 border-none px-8 py-6 rounded-full font-bold tracking-wide">
                    Discover Quality
                  </Button>
                  <button className="flex items-center gap-2 text-white hover:text-secondary-500 transition-colors group/btn text-lg font-medium">
                    Our Standards
                    <RxChevronRight className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
