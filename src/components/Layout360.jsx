"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { motion } from "framer-motion";

export function Layout360() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-primary-50">
      <div className="container">
        <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-3 font-semibold text-primary-500 uppercase tracking-widest md:mb-4">Courses</p>
            <h2 className="rb-5 mb-5 text-4xl font-bold text-slate-900 md:mb-6 md:text-5xl lg:text-6xl">
              Degrees with Direction
            </h2>
            <p className="md:text-lg text-slate-600">
              Two distinct pathways designed to meet the demands of a changing world, in partnership with the University of Wolverhampton.
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 lg:gap-12">
          <motion.div
            className="border border-primary-100 bg-background-secondary rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center justify-center h-64 overflow-hidden bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                className="size-full object-cover transition-transform duration-500 hover:scale-105"
                alt="Business and Tourism"
              />
            </div>
            <div className="p-8 lg:p-10">
              <p className="mb-3 text-sm font-bold text-secondary-500 uppercase tracking-wider">Business</p>
              <h3 className="mb-4 text-2xl font-bold text-slate-900 leading-[1.3] md:text-3xl">
                BA (Hons) Business & Tourism Management with Foundation Year
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                Designed for students who want to develop knowledge and skills in business, tourism, hospitality, management, customer experience, enterprise, and service industries.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button title="Course Details" className="bg-primary-500 hover:bg-primary-900 text-white">
                  Course Details
                </Button>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="border border-primary-100 bg-background-secondary rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center justify-center h-64 overflow-hidden bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                className="size-full object-cover transition-transform duration-500 hover:scale-105"
                alt="Public Health"
              />
            </div>
            <div className="p-8 lg:p-10">
              <p className="mb-3 text-sm font-bold text-secondary-500 uppercase tracking-wider">Health</p>
              <h3 className="mb-4 text-2xl font-bold text-slate-900 leading-[1.3] md:text-3xl">
                BSc (Hons) Public Health with Foundation Year
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                Designed for students who want to develop knowledge and skills in public health, health promotion, community wellbeing, preventative healthcare, health inequalities, and public service improvement.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button title="Course Details" className="bg-primary-500 hover:bg-primary-900 text-white">
                  Course Details
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
