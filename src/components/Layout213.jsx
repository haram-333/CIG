"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { motion } from "framer-motion";

export function Layout213() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-background-secondary">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              className="w-full object-cover rounded-2xl shadow-xl"
              alt="Students in a supportive environment"
            />
          </motion.div>
          <motion.div
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-5 text-4xl font-bold text-slate-900 md:mb-6 md:text-5xl lg:text-6xl">
              Why Choose Us?
            </h2>
            <p className="md:text-lg text-slate-600 mb-6">
              Choosing College for Innovation and Growth means choosing a supportive higher education environment where students are encouraged to achieve their full potential.
            </p>
            <ul className="list-disc pl-5 text-slate-600 md:text-lg space-y-2 mb-8">
              <li>A welcoming and inclusive learning environment</li>
              <li>Support for adult and mature learners</li>
              <li>Foundation Year routes into degree-level study</li>
              <li>Career-focused undergraduate programmes</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Learn More" className="bg-primary-500 hover:bg-primary-900 text-white transition-colors">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
