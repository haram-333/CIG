"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { motion } from "framer-motion";

export function Header15() {
  return (
    <section id="hero" className="relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      >
        <div 
          className="absolute inset-0 size-full"
          dangerouslySetInnerHTML={{
            __html: `
              <video 
                class="w-full h-full object-cover object-center" 
                autoplay 
                loop 
                muted 
                playsinline 
              >
                <source src="/hero.mp4" type="video/mp4" />
              </video>
            `
          }}
        />
        <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-primary-950/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/90 to-black/80" />
      </motion.div>

      <div className="container relative z-10 text-center px-[5%] mt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mx-auto max-w-6xl"
        >
          <p className="text-secondary-500 font-sans font-semibold tracking-[0.2em] uppercase mb-6 md:mb-8 text-sm md:text-base drop-shadow-md">
            College for Innovation and Growth
          </p>
          <h1 className="text-6xl font-serif text-white md:text-8xl lg:text-[7rem] leading-[1.05] mb-8 drop-shadow-2xl">
            Opening Doors,<br />
            <span className="text-secondary-500 italic">Raising Aspirations.</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
            A UK-based higher education provider committed to delivering accessible, inclusive, and career-focused undergraduate study in Bristol.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button title="Apply Now" className="bg-secondary-500 hover:bg-[#b5952f] text-primary-900 px-8 py-4 text-base md:text-lg border-none transition-all duration-300 shadow-xl font-semibold">
              Apply Now
            </Button>
            <button 
              title="Discover Courses" 
              className="border-2 border-white/70 text-white hover:bg-white hover:text-primary-900 px-8 py-4 text-base md:text-lg transition-all duration-300 font-semibold inline-flex items-center justify-center shadow-xl"
            >
              Discover Courses
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
