"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { motion } from "framer-motion";

export function Layout419() {
  const scrollItems = [
    {
      title: "Postgraduate Study",
      desc: "Progress to a master's degree at the University of Wolverhampton or another leading institution. Your foundation is built to last.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
      alt: "Graduates celebrating",
    },
    {
      title: "Career Advancement",
      desc: "Step directly into the workforce. Our strong industry connections and practical curriculum ensure you are job-ready from day one.",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop",
      alt: "Professional in an office",
    },
    {
      title: "Entrepreneurship",
      desc: "Launch your own venture. With dedicated mentorship and a network of innovative thinkers, we help turn your ideas into reality.",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200&auto=format&fit=crop",
      alt: "Entrepreneurs collaborating",
    },
    {
      title: "Leadership Roles",
      desc: "Take charge of your future. We cultivate the leadership skills and emotional intelligence required to manage teams and drive change.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
      alt: "Business meeting presentation",
    },
  ];

  return (
    <section id="progression" className="bg-primary-900 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
        
        {/* Left Sticky Column */}
        <div className="relative">
          <div className="md:sticky md:top-0 h-auto md:h-screen flex items-center pt-24 pb-12 md:py-0">
            <div className="mx-[5%] max-w-lg md:ml-[10vw] md:mr-12 lg:mr-20">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[2px] bg-secondary-500" />
                <p className="font-bold text-secondary-500 uppercase tracking-widest text-sm md:text-base">
                  Progression
                </p>
              </div>
              
              <h2 className="mb-6 text-5xl font-serif text-white md:mb-8 md:text-6xl lg:text-[4.5rem] leading-[1.1]">
                The door opens. The corridor <span className="italic text-secondary-500 font-light">stretches far ahead</span>
              </h2>
              
              <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-10">
                Your undergraduate degree is the launchpad, not the destination.
                We prepare you for the next leap, whether that is a master's
                degree, a professional qualification, or a leadership role.
              </p>
              
              <div className="flex flex-wrap items-center gap-6">
                <Button className="bg-secondary-500 hover:bg-secondary-600 text-primary-900 border-none px-8 py-6 rounded-full font-bold tracking-wide transition-colors">
                  Your Future
                </Button>
                <button className="flex items-center gap-2 text-white hover:text-secondary-500 transition-colors duration-300 text-lg font-medium group">
                  Next Steps
                  <RxChevronRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Scrolling Column */}
        <div className="bg-background-secondary text-primary-900">
          {scrollItems.map((item, index) => (
            <div
              key={index}
              className="sticky top-0 flex h-screen flex-col justify-center px-[5%] py-10 md:px-16"
            >
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-20% 0px -20% 0px" }}
                transition={{ duration: 0.6 }}
                className="max-w-xl w-full bg-white p-6 md:p-8 rounded-[2rem] shadow-2xl border border-primary-900/5"
              >
                <div className="mb-8 overflow-hidden rounded-2xl aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-secondary-500 font-serif text-2xl font-bold">0{index + 1}</span>
                  <h3 className="text-2xl font-serif font-bold md:text-3xl text-primary-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-slate-600 text-lg font-light leading-relaxed pl-10 border-l border-secondary-500/30">
                  {item.desc}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
