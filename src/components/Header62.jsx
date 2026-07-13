"use client";

import React from "react";
import { motion } from "framer-motion";

export function Header62() {
  return (
    <section id="vision-mission" className="relative px-[5%] py-24 md:py-32 lg:py-40 bg-background-secondary overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-secondary-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-primary-900/5 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 max-w-7xl mx-auto">
        
        {/* Header Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20 md:mb-32 text-center max-w-5xl mx-auto"
        >
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-12 h-[2px] bg-secondary-500" />
            <p className="font-bold text-secondary-500 uppercase tracking-[0.3em] text-sm md:text-base">
              Purpose
            </p>
            <div className="w-12 h-[2px] bg-secondary-500" />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-serif text-primary-900 leading-[1.05]">
            Empowering Individuals & <br className="hidden md:block" />
            <span className="italic text-secondary-500 font-light">Strengthening Communities</span>
          </h1>
        </motion.div>

        {/* Asymmetrical Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          
          {/* Vision Card (Light) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="group relative bg-white p-10 md:p-16 rounded-[2.5rem] shadow-2xl hover:shadow-3xl transition-shadow duration-500"
          >
            <div className="absolute -top-10 right-10 text-[8rem] font-serif font-bold text-slate-100 opacity-50 group-hover:text-secondary-500/10 transition-colors duration-500 select-none">
              &ldquo;
            </div>
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-serif text-secondary-500 mb-8 italic">
                Our Vision
              </h3>
              <div className="w-16 h-1 bg-primary-900 mb-8 group-hover:w-full transition-all duration-700 ease-in-out" />
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
                To become a leading provider of inclusive and accessible higher education that empowers individuals, strengthens communities, and promotes long-term social and economic mobility.
              </p>
            </div>
          </motion.div>

          {/* Mission Card (Dark, Staggered) */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="group relative bg-primary-900 p-10 md:p-16 rounded-[2.5rem] shadow-2xl hover:shadow-3xl transition-shadow duration-500 lg:mt-32"
          >
            <div className="absolute -top-10 left-10 text-[8rem] font-serif font-bold text-white/[0.03] group-hover:text-secondary-500/10 transition-colors duration-500 select-none">
              &rdquo;
            </div>
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-serif text-secondary-500 mb-8 italic">
                Our Mission
              </h3>
              <div className="w-16 h-1 bg-white mb-8 group-hover:w-full group-hover:bg-secondary-500 transition-all duration-700 ease-in-out" />
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
                Deliver fair and inclusive access to higher education, support widening participation within underserved communities, and provide high-quality, industry-aligned academic provision.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
