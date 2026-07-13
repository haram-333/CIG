"use client";

import { Button, Checkbox, Input, Label, Textarea } from "@relume_io/relume-ui";
import React from "react";
import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";

export function Contact7() {
  return (
    <section id="contact" className="px-[5%] py-16 md:py-24 lg:py-32 bg-white">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <div className="mb-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[2px] bg-secondary-500" />
                <p className="font-bold text-secondary-500 uppercase tracking-widest text-sm">Get In Touch</p>
              </div>
              <h2 className="mb-6 text-5xl font-serif text-primary-900 md:text-6xl lg:text-7xl leading-tight">
                Let's start the <span className="italic font-light text-secondary-500">conversation</span>
              </h2>
              <p className="md:text-xl text-slate-600 font-light leading-relaxed">
                Speak to our team about your future. We are here to help you navigate your educational journey, from application to graduation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-full bg-background-secondary flex items-center justify-center mb-2">
                  <HiOutlineMail className="w-6 h-6 text-primary-900" />
                </div>
                <h4 className="text-xl font-serif font-bold text-primary-900">Email Us</h4>
                <a href="mailto:info@collegeforinnovationandgrowth.co.uk" className="text-slate-600 hover:text-secondary-500 transition-colors break-all">
                  info@collegeforinnovationandgrowth.co.uk
                </a>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-full bg-background-secondary flex items-center justify-center mb-2">
                  <HiOutlineLocationMarker className="w-6 h-6 text-primary-900" />
                </div>
                <h4 className="text-xl font-serif font-bold text-primary-900">Visit Us</h4>
                <span className="text-slate-600">
                  College for Innovation and Growth,<br />Bristol, UK
                </span>
              </div>
            </div>

            <form className="space-y-6 bg-background-secondary p-8 md:p-10 rounded-[2rem] border border-primary-900/5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="grid w-full items-center">
                  <Label htmlFor="name" className="mb-2 text-primary-900 font-bold text-sm uppercase tracking-wide">
                    Name
                  </Label>
                  <Input type="text" id="name" className="border-none bg-white rounded-xl h-14 px-4 focus:ring-2 focus:ring-secondary-500" placeholder="John Doe" />
                </div>
                <div className="grid w-full items-center">
                  <Label htmlFor="email" className="mb-2 text-primary-900 font-bold text-sm uppercase tracking-wide">
                    Email
                  </Label>
                  <Input type="email" id="email" className="border-none bg-white rounded-xl h-14 px-4 focus:ring-2 focus:ring-secondary-500" placeholder="john@example.com" />
                </div>
              </div>
              <div className="grid w-full items-center">
                <Label htmlFor="message" className="mb-2 text-primary-900 font-bold text-sm uppercase tracking-wide">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  className="min-h-[150px] border-none bg-white rounded-xl p-4 focus:ring-2 focus:ring-secondary-500"
                />
              </div>
              <div className="flex items-center space-x-3 pt-2">
                <Checkbox id="terms" className="border-slate-300 rounded text-secondary-500 focus:ring-secondary-500" />
                <Label htmlFor="terms" className="cursor-pointer text-slate-600 text-sm">
                  I accept the Terms and Privacy Policy
                </Label>
              </div>
              <div className="pt-4">
                <Button className="w-full sm:w-auto bg-primary-900 hover:bg-secondary-500 hover:text-primary-900 text-white border-none px-10 py-6 text-lg tracking-wide rounded-full font-bold transition-colors duration-300">
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 md:order-2 h-[400px] md:h-full min-h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl relative"
          >
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
              alt="Bristol campus"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary-900/10 mix-blend-multiply" />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
