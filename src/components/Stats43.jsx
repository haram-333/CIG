"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { motion } from "framer-motion";

export function Stats43() {
  const stats = [
    {
      title: "Widening Participation",
      value: "Access",
      description: "Fair access and opportunities for diverse and underrepresented learners.",
    },
    {
      title: "Foundation Year",
      value: "Pathways",
      description: "Structured pathways into undergraduate study to build academic confidence.",
    },
    {
      title: "Flexible Routes",
      value: "Support",
      description: "Designed specifically for mature and non-traditional learners.",
    },
    {
      title: "Career-Focused",
      value: "Success",
      description: "Teaching and learning that is relevant to employers and regional workforce needs.",
    },
  ];

  return (
    <section id="progression" className="relative px-[5%] py-24 md:py-32 lg:py-40 bg-primary-900 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-secondary-500/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] bg-primary-500/30 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-[0.45fr_1fr] lg:items-center lg:gap-x-24">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[2px] bg-secondary-500" />
              <p className="font-bold text-secondary-500 uppercase tracking-widest text-sm">Progression</p>
            </div>
            
            <h2 className="mb-6 text-4xl font-serif text-white md:text-5xl lg:text-6xl leading-[1.1]">
              Higher Education That <span className="italic text-secondary-500 font-light">Supports Progression</span>
            </h2>
            
            <p className="md:text-xl text-slate-300 font-light leading-relaxed mb-10">
              At College for Innovation and Growth, we focus on delivering education that is highly relevant to students, employers, and regional workforce needs.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <Button 
                title="Learn More" 
                className="bg-transparent border border-secondary-500 text-secondary-500 hover:bg-secondary-500 hover:text-primary-900 transition-all duration-300 px-8 py-6 text-lg tracking-wide"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                className="group relative border border-white/10 bg-white/5 backdrop-blur-xl p-8 lg:p-10 rounded-3xl overflow-hidden hover:bg-white/10 hover:border-secondary-500/50 transition-all duration-500"
              >
                {/* Number Watermark */}
                <div className="absolute -top-4 -right-4 text-[8rem] font-serif font-bold text-white/[0.03] group-hover:text-secondary-500/[0.05] transition-colors duration-500 pointer-events-none">
                  0{index + 1}
                </div>
                
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <h3 className="mb-6 text-lg font-semibold tracking-wide text-secondary-500 uppercase text-sm">
                    {stat.title}
                  </h3>
                  
                  <div>
                    <p className="mb-4 text-4xl lg:text-5xl font-serif text-white leading-tight">
                      {stat.value}
                    </p>
                    <div className="h-px w-12 bg-white/20 group-hover:bg-secondary-500/50 group-hover:w-full transition-all duration-700 ease-in-out mb-6" />
                    <p className="text-slate-300 font-light leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
