"use client";

import { Button } from "@relume_io/relume-ui";
import { motion } from "framer-motion";
import React from "react";

export function Cta57() {
  return (
    <section id="cta" className="relative px-[5%] py-24 md:py-32 lg:py-48 bg-primary-900 overflow-hidden">
      {/* Premium Glow Backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="mx-auto w-full max-w-4xl text-center flex flex-col items-center">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[2px] bg-secondary-500" />
            <p className="font-bold text-secondary-500 uppercase tracking-[0.3em] text-sm md:text-base">
              Join Us
            </p>
            <div className="w-12 h-[2px] bg-secondary-500" />
          </div>

          <h1 className="flex flex-col items-center overflow-hidden mb-6">
            <motion.span
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="block text-6xl font-serif text-white md:text-8xl lg:text-[7rem] leading-none mb-2"
            >
              Take the
            </motion.span>
            <motion.span
              initial={{ y: "-100%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="block text-6xl font-serif md:text-8xl lg:text-[7rem] leading-none italic text-secondary-500 font-light"
            >
              first step
            </motion.span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:text-xl text-slate-300 font-light leading-relaxed max-w-2xl mt-4"
          >
            Register your interest now and we will send you a full prospectus,
            course details, and an invitation to our next open event.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button className="bg-secondary-500 hover:bg-white text-primary-900 border-none px-12 py-6 text-lg tracking-wide rounded-full font-bold transition-all duration-300 w-full sm:w-auto shadow-[0_0_40px_rgba(212,175,55,0.3)]">
              Register Now
            </Button>
            <Button className="bg-transparent hover:bg-white/10 text-white border border-white/20 px-12 py-6 text-lg tracking-wide rounded-full font-medium transition-colors duration-300 w-full sm:w-auto">
              Download Prospectus
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
