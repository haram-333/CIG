"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { motion } from "framer-motion";

export function Layout245() {
  const steps = [
    {
      number: "01",
      title: "Submit your application through our simple online portal",
      desc: "Fill in your details and tell us about your ambition. It takes ten minutes."
    },
    {
      number: "02",
      title: "Have an informal conversation with our admissions team",
      desc: "We want to hear your story. This is a chat, not an interrogation."
    },
    {
      number: "03",
      title: "Receive your offer and secure your place for the next intake",
      desc: "We move fast. You will know where you stand and what comes next."
    }
  ];

  return (
    <section id="admissions-process" className="relative px-[5%] py-24 md:py-32 lg:py-40 bg-primary-900 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary-500/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />

      <div className="container relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-20">
          
          {/* Left Column (Sticky) */}
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className="w-12 h-[2px] bg-secondary-500" />
                <p className="font-bold text-secondary-500 uppercase tracking-widest text-sm md:text-base">
                  Admissions
                </p>
              </div>
              <h2 className="mb-6 text-5xl font-serif text-white md:mb-8 md:text-6xl lg:text-[4.5rem] leading-[1.1]">
                Your path to a place starts with a <span className="italic text-secondary-500 font-light">conversation</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-10">
                We have stripped the complexity out of applying. The process is
                human, fast, and designed to get you a decision without the
                usual anxiety. We look at the whole person, not just a form.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <Button className="bg-secondary-500 hover:bg-secondary-600 text-primary-900 border-none px-8 py-6 rounded-full font-bold tracking-wide">
                  Apply Now
                </Button>
                <button className="flex items-center gap-2 text-white hover:text-secondary-500 transition-colors duration-300 text-lg font-medium group">
                  See all steps
                  <RxChevronRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
          
          {/* Right Column (Steps) */}
          <div className="lg:w-3/5 grid grid-cols-1 gap-8 md:gap-12 lg:mt-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative flex flex-col md:flex-row items-start gap-6 md:gap-10 p-8 md:p-12 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 transition-all duration-500"
              >
                <div className="flex-shrink-0">
                  <span className="text-6xl md:text-8xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-br from-secondary-500 to-secondary-500/30">
                    {step.number}
                  </span>
                </div>
                <div className="flex flex-col pt-2 md:pt-4">
                  <h3 className="mb-4 text-2xl font-serif text-white md:text-3xl lg:text-4xl leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-lg text-slate-300 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
