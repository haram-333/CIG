"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { motion } from "framer-motion";

export function Layout398() {
  return (
    <section id="student-support" className="px-[5%] py-16 md:py-24 lg:py-28 bg-background-primary">
      <div className="container">
        <motion.div 
          className="mb-12 md:mb-18 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 font-semibold text-secondary-500 uppercase tracking-wider md:mb-4">Student Support</p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Supporting Your Success
            </h1>
            <p className="md:text-lg text-slate-600">
              We recognise that students may enter higher education with different levels of confidence, experience, and personal responsibility. Our aim is to provide a supportive environment where students feel respected, encouraged, and able to succeed.
            </p>
          </div>
        </motion.div>
        
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8">
            <motion.div 
              className="flex flex-col border border-border-primary bg-background-secondary rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex w-full flex-col items-center justify-center self-start">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
                  alt="Students studying together"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <p className="mb-2 text-sm font-semibold text-primary-500 uppercase">Guidance</p>
                <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Academic Support
                </h2>
                <p className="text-slate-600">
                  Receive support with academic writing, research skills, referencing, study planning, and time management. We help you prepare for assessments and understand feedback.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex flex-col border border-border-primary bg-background-secondary rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Personal & Pastoral
                </h2>
                <p className="text-slate-600">
                  Guidance from tutors and support staff for your personal wellbeing. We advise on managing study commitments and provide encouragement for students returning to education.
                </p>
              </div>
            </motion.div>
          </div>
          
          <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8">
            <motion.div 
              className="flex flex-col border border-border-primary bg-primary-900 text-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <h2 className="mb-3 text-2xl font-bold text-white md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Careers & Employability
                </h2>
                <p className="text-gray-300">
                  Develop your employability skills and plan for future progression with CV preparation, interview practice, and employer engagement opportunities.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex flex-col border border-border-primary bg-background-secondary rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex w-full flex-col items-center justify-center self-start">
                <img
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop"
                  alt="Student receiving mentorship"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <p className="mb-2 text-sm font-semibold text-primary-500 uppercase">Environment</p>
                <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Inclusive Learning
                </h2>
                <p className="text-slate-600">
                  An inclusive learning environment where students from all backgrounds are treated with dignity, respect, and equality of opportunity.
                </p>
              </div>
            </motion.div>
          </div>
          
          <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8">
            <motion.div 
              className="flex flex-col border border-border-primary bg-background-secondary rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex w-full flex-col items-center justify-center self-start">
                <img
                  src="https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=800&auto=format&fit=crop"
                  alt="Student support counseling"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <p className="mb-2 text-sm font-semibold text-primary-500 uppercase">Accessibility</p>
                <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Accessible Resources
                </h2>
                <p className="text-slate-600">
                  Benefit from accessible learning resources, facilities, and fair access to support. We ensure that your educational needs are met at every step.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex flex-col border border-border-primary bg-background-secondary rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Language & Development
                </h2>
                <p className="text-slate-600">
                  Specialized English language and academic writing development for students who need extra support to thrive in a university environment.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
