"use client";

import { Button } from "@relume_io/relume-ui";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { RxChevronRight } from "react-icons/rx";

const useRelume = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const xPartOne = useTransform(scrollYProgress, [0, 1], ["0vw", "-35vw"]);
  const xPartTwo = useTransform(scrollYProgress, [0, 1], ["-35vw", "0vw"]);
  return {
    sectionRef,
    xPartOne,
    xPartTwo,
  };
};

export function Layout414() {
  const hooks = useRelume();
  return (
    <section
      id="bristol-impact"
      ref={hooks.sectionRef}
      className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28 bg-background-secondary"
    >
      <div className="container">
        <div className="flex flex-col items-center">
          <motion.div 
            className="rb-12 mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-8 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <p className="mb-3 font-semibold text-secondary-500 uppercase tracking-wider md:mb-4">Regional Impact</p>
              <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl text-primary-900">
                Why Bristol?
              </h2>
            </div>
            <div>
              <p className="md:text-lg text-slate-600 mb-6">
                Bristol is one of the UK’s fastest-growing and most economically diverse cities, with increasing demand for skilled graduates across business, tourism, public health, healthcare, and professional services.
              </p>
              <p className="md:text-lg text-slate-600">
                We aim to contribute to Bristol’s educational, social, and economic development by supporting learners to progress from limited qualification backgrounds into higher education and skilled careers, addressing key regional skills needs.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button title="Community" className="bg-primary-900 hover:bg-primary-800 text-white">
                  Local Communities
                </Button>
                <Button
                  title="Skills"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Regional Skills
                </Button>
              </div>
            </div>
          </motion.div>
          
          <div className="flex w-screen flex-col items-center gap-4 overflow-hidden mt-10">
            <motion.div
              className="flex size-full flex-nowrap items-center justify-center gap-4"
              style={{ translateX: hooks.xPartOne }}
            >
              <div className="w-[40vw] flex-none md:w-[30vw]">
                <img
                  className="aspect-[4/3] w-full object-cover rounded-xl shadow-md"
                  src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=800&auto=format&fit=crop"
                  alt="Bristol Cityscape"
                />
              </div>
              <div className="w-[40vw] flex-none md:w-[30vw]">
                <img
                  className="aspect-[4/3] w-full object-cover rounded-xl shadow-md"
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                  alt="Team working together"
                />
              </div>
              <div className="w-[40vw] flex-none md:w-[30vw]">
                <img
                  className="aspect-[4/3] w-full object-cover rounded-xl shadow-md"
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop"
                  alt="Modern office space"
                />
              </div>
              <div className="w-[40vw] flex-none md:w-[30vw]">
                <img
                  className="aspect-[4/3] w-full object-cover rounded-xl shadow-md"
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop"
                  alt="Healthcare professional"
                />
              </div>
              <div className="w-[40vw] flex-none md:w-[30vw]">
                <img
                  className="aspect-[4/3] w-full object-cover rounded-xl shadow-md"
                  src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=800&auto=format&fit=crop"
                  alt="Bristol Cityscape"
                />
              </div>
              <div className="w-[40vw] flex-none md:w-[30vw]">
                <img
                  className="aspect-[4/3] w-full object-cover rounded-xl shadow-md"
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                  alt="Team working together"
                />
              </div>
              <div className="w-[40vw] flex-none md:w-[30vw]">
                <img
                  className="aspect-[4/3] w-full object-cover rounded-xl shadow-md"
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop"
                  alt="Modern office space"
                />
              </div>
              <div className="w-[40vw] flex-none md:w-[30vw]">
                <img
                  className="aspect-[4/3] w-full object-cover rounded-xl shadow-md"
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop"
                  alt="Healthcare professional"
                />
              </div>
            </motion.div>
            
            <motion.div
              className="flex size-full flex-nowrap items-center justify-center gap-4"
              style={{ translateX: hooks.xPartTwo }}
            >
              <div className="w-[40vw] flex-none md:w-[30vw]">
                <img
                  className="aspect-[4/3] w-full object-cover rounded-xl shadow-md"
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop"
                  alt="Business meeting"
                />
              </div>
              <div className="w-[40vw] flex-none md:w-[30vw]">
                <img
                  className="aspect-[4/3] w-full object-cover rounded-xl shadow-md"
                  src="https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=800&auto=format&fit=crop"
                  alt="Bristol Suspension Bridge"
                />
              </div>
              <div className="w-[40vw] flex-none md:w-[30vw]">
                <img
                  className="aspect-[4/3] w-full object-cover rounded-xl shadow-md"
                  src="https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=800&auto=format&fit=crop"
                  alt="Students in classroom"
                />
              </div>
              <div className="w-[40vw] flex-none md:w-[30vw]">
                <img
                  className="aspect-[4/3] w-full object-cover rounded-xl shadow-md"
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800&auto=format&fit=crop"
                  alt="Team collaboration"
                />
              </div>
              <div className="w-[40vw] flex-none md:w-[30vw]">
                <img
                  className="aspect-[4/3] w-full object-cover rounded-xl shadow-md"
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop"
                  alt="Business meeting"
                />
              </div>
              <div className="w-[40vw] flex-none md:w-[30vw]">
                <img
                  className="aspect-[4/3] w-full object-cover rounded-xl shadow-md"
                  src="https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=800&auto=format&fit=crop"
                  alt="Bristol Suspension Bridge"
                />
              </div>
              <div className="w-[40vw] flex-none md:w-[30vw]">
                <img
                  className="aspect-[4/3] w-full object-cover rounded-xl shadow-md"
                  src="https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=800&auto=format&fit=crop"
                  alt="Students in classroom"
                />
              </div>
              <div className="w-[40vw] flex-none md:w-[30vw]">
                <img
                  className="aspect-[4/3] w-full object-cover rounded-xl shadow-md"
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800&auto=format&fit=crop"
                  alt="Team collaboration"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
