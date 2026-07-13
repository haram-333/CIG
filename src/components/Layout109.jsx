"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { motion } from "framer-motion";

export function Layout109() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-background-secondary">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 font-semibold text-secondary-500 uppercase tracking-widest md:mb-4">Admissions</p>
            <h3 className="text-4xl font-bold text-slate-900 leading-[1.2] md:text-5xl lg:text-6xl">
              Fair, Transparent, and Accessible
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="mb-5 text-slate-600 md:mb-6 md:text-lg">
              College for Innovation and Growth is committed to providing a fair, transparent, and accessible admissions process for students who wish to enter higher education. We understand that every learner’s journey is different.
            </p>
            <h4 className="font-bold text-slate-900 mt-6 mb-2">Who Can Apply?</h4>
            <ul className="my-4 list-disc pl-5 text-slate-600 space-y-2">
              <li>Aged 18 or above</li>
              <li>Mature learners returning to education</li>
              <li>Adults aged 19+ seeking career progression</li>
              <li>Learners from disadvantaged or underrepresented backgrounds</li>
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button title="Apply Now" className="bg-primary-500 hover:bg-primary-900 text-white border-none">
                Apply Now
              </Button>
            </div>
          </motion.div>
        </div>
        <motion.img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          className="w-full h-[500px] md:h-[600px] lg:h-[800px] object-cover rounded-[2rem] shadow-2xl"
          alt="Students walking on campus"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </section>
  );
}
