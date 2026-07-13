"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa6";

export function Layout149() {
  return (
    <section id="partnership" className="px-[5%] py-24 md:py-32 lg:py-40 bg-white">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="mb-16 md:mb-20 lg:mb-24">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto flex max-w-3xl flex-col items-center text-center"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[2px] bg-secondary-500" />
                <p className="font-bold text-secondary-500 uppercase tracking-[0.3em] text-sm md:text-base">
                  Partnership
                </p>
                <div className="w-12 h-[2px] bg-secondary-500" />
              </div>
              
              <h2 className="mb-8 text-5xl font-serif text-primary-900 leading-tight md:text-6xl lg:text-7xl">
                Your degree is awarded by the <br />
                <span className="italic text-secondary-500 font-light">University of Wolverhampton</span>
              </h2>
              
              <p className="md:text-xl text-slate-600 font-light leading-relaxed mb-10 max-w-2xl">
                You study with us in Bristol. You graduate with a full honors
                degree from a prestigious, established UK university. This
                partnership gives you the best of both worlds: the intimacy of a
                small college and the weight of a large, respected institution
                behind your qualification.
              </p>
              
              <div className="flex items-center justify-center gap-4 px-8 py-4 bg-background-secondary rounded-full border border-primary-900/10 mb-10">
                <FaGraduationCap className="text-secondary-500 text-3xl" />
                <span className="text-primary-900 font-bold tracking-wide text-lg">Fully Accredited UK Degree</span>
              </div>
              
              <div className="flex flex-wrap items-center justify-center gap-6">
                <Button className="bg-primary-900 hover:bg-secondary-500 hover:text-primary-900 text-white border-none px-10 py-6 text-lg tracking-wide rounded-full font-bold transition-colors duration-300">
                  Partner Details
                </Button>
                <button className="flex items-center gap-2 text-primary-900 hover:text-secondary-500 transition-colors duration-300 text-lg font-medium group">
                  About Wolverhampton
                  <RxChevronRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-[2.5rem] overflow-hidden shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop"
            className="w-full h-[500px] md:h-[600px] lg:h-[700px] object-cover"
            alt="University of Wolverhampton graduation ceremony"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-transparent mix-blend-multiply" />
        </motion.div>
      </div>
    </section>
  );
}
