"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";
import { RxPlus } from "react-icons/rx";
import { motion } from "framer-motion";

export function Faq6() {
  return (
    <section id="experience-faq" className="px-[5%] py-24 md:py-32 lg:py-40 bg-background-secondary overflow-hidden">
      <div className="container max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-x-24">
          
          {/* Left Column: Heading & Context */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="w-12 h-[2px] bg-secondary-500" />
              <p className="font-bold text-secondary-500 uppercase tracking-[0.3em] text-sm md:text-base">
                Community
              </p>
            </div>
            
            <h2 className="mb-8 text-5xl md:text-6xl lg:text-[5.5rem] font-serif text-primary-900 leading-[1.05]">
              Experience <br />
              <span className="italic text-secondary-500 font-light">Student Life</span>
            </h2>
            
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light mb-12 max-w-md">
              Find answers about student life, the city, and your future community. We're here to make your transition into higher education seamless and exciting.
            </p>
            
            <Button 
              title="Contact" 
              className="bg-primary-900 hover:bg-secondary-500 hover:text-primary-900 text-white px-10 py-6 text-lg border-none transition-all duration-500 shadow-xl font-medium tracking-wide rounded-full"
            >
              Get in Touch
            </Button>
          </motion.div>

          {/* Right Column: Sleek Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-8 lg:mt-0"
          >
            <Accordion
              type="multiple"
              className="grid items-start justify-stretch w-full border-t border-primary-900/10"
            >
              <AccordionItem
                value="item-0"
                className="border-b border-primary-900/10"
              >
                <AccordionTrigger
                  icon={
                    <RxPlus className="size-6 shrink-0 text-primary-900 transition-transform duration-300 md:size-8" />
                  }
                  className="py-6 md:py-8 text-xl md:text-3xl font-serif text-primary-900 hover:text-secondary-500 transition-colors [&[data-state=open]>svg]:rotate-45"
                >
                  What is student life like?
                </AccordionTrigger>
                <AccordionContent className="pb-8 pr-12 text-slate-600 text-lg font-light leading-relaxed">
                  It is rich and varied. You join a tight-knit community of mature
                  learners and career changers. There are societies, city
                  excursions, and social events built around your timetable. The
                  classroom is just the start.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem
                value="item-1"
                className="border-b border-primary-900/10"
              >
                <AccordionTrigger
                  icon={
                    <RxPlus className="size-6 shrink-0 text-primary-900 transition-transform duration-300 md:size-8" />
                  }
                  className="py-6 md:py-8 text-xl md:text-3xl font-serif text-primary-900 hover:text-secondary-500 transition-colors [&[data-state=open]>svg]:rotate-45"
                >
                  Are there clubs and societies?
                </AccordionTrigger>
                <AccordionContent className="pb-8 pr-12 text-slate-600 text-lg font-light leading-relaxed">
                  Yes. We have groups for business enterprise, public health debate,
                  and cultural exploration. You can also start your own. The college
                  funds good ideas that build community.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem
                value="item-2"
                className="border-b border-primary-900/10"
              >
                <AccordionTrigger
                  icon={
                    <RxPlus className="size-6 shrink-0 text-primary-900 transition-transform duration-300 md:size-8" />
                  }
                  className="py-6 md:py-8 text-xl md:text-3xl font-serif text-primary-900 hover:text-secondary-500 transition-colors [&[data-state=open]>svg]:rotate-45"
                >
                  How do I meet people?
                </AccordionTrigger>
                <AccordionContent className="pb-8 pr-12 text-slate-600 text-lg font-light leading-relaxed">
                  Through small seminar groups, peer mentoring, and our welcome week
                  program. We design the first month to forge connections. You will
                  know faces and names quickly.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem
                value="item-3"
                className="border-b border-primary-900/10"
              >
                <AccordionTrigger
                  icon={
                    <RxPlus className="size-6 shrink-0 text-primary-900 transition-transform duration-300 md:size-8" />
                  }
                  className="py-6 md:py-8 text-xl md:text-3xl font-serif text-primary-900 hover:text-secondary-500 transition-colors [&[data-state=open]>svg]:rotate-45"
                >
                  What about the Bristol life?
                </AccordionTrigger>
                <AccordionContent className="pb-8 pr-12 text-slate-600 text-lg font-light leading-relaxed">
                  Bristol is your extended campus. It is a city of independent
                  spirit, street art, and a booming food scene. We use its
                  galleries, businesses, and neighborhoods as learning spaces.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem
                value="item-4"
                className="border-b border-primary-900/10"
              >
                <AccordionTrigger
                  icon={
                    <RxPlus className="size-6 shrink-0 text-primary-900 transition-transform duration-300 md:size-8" />
                  }
                  className="py-6 md:py-8 text-xl md:text-3xl font-serif text-primary-900 hover:text-secondary-500 transition-colors [&[data-state=open]>svg]:rotate-45"
                >
                  Is there wellbeing support available?
                </AccordionTrigger>
                <AccordionContent className="pb-8 pr-12 text-slate-600 text-lg font-light leading-relaxed">
                  Absolutely. We have dedicated mental health and counselling
                  services on site. Your personal tutor is also trained to spot when
                  you need help and connect you fast.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
