"use client";

import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { motion } from "framer-motion";

export function Layout508() {
  return (
    <section id="widening-participation" className="px-[5%] py-16 md:py-24 lg:py-28 bg-background-secondary">
      <div className="container">
        <motion.div 
          className="mx-auto mb-12 w-full max-w-2xl text-center md:mb-18 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 font-semibold text-secondary-500 uppercase tracking-wider md:mb-4">Widening Participation</p>
          <h2 className="mb-5 text-5xl font-bold text-primary-900 md:mb-6 md:text-7xl lg:text-8xl">
            Access to Higher Education
          </h2>
          <p className="md:text-lg text-slate-600">
            College for Innovation and Growth is committed to widening participation. We believe that ability and ambition should not be limited by background, age, previous educational experience, or personal circumstances.
          </p>
        </motion.div>
        
        <motion.div 
          className="relative grid auto-cols-fr grid-cols-1 gap-x-12 border border-border-primary lg:gap-x-0 rounded-2xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs defaultValue="tab-1" className="grid bg-background-primary">
            <TabsList className="order-2 flex-col md:order-1 md:flex-row bg-background-secondary">
              <TabsTrigger
                value="tab-1"
                className="flex w-full items-start justify-start gap-4 whitespace-normal border-0 border-t p-6 text-md font-bold leading-[1.4] duration-300 data-[state=active]:bg-primary-900 data-[state=active]:text-white text-primary-900 md:items-center md:justify-center md:border-b md:border-r md:border-t-0 md:px-8 md:py-6 md:text-xl md:last-of-type:border-r-0 md:data-[state=active]:[border-bottom:1px_solid_transparent]"
              >
                Access
              </TabsTrigger>
              <TabsTrigger
                value="tab-2"
                className="flex w-full items-start justify-start gap-4 whitespace-normal border-0 border-t p-6 text-md font-bold leading-[1.4] duration-300 data-[state=active]:bg-primary-900 data-[state=active]:text-white text-primary-900 md:items-center md:justify-center md:border-b md:border-r md:border-t-0 md:px-8 md:py-6 md:text-xl md:last-of-type:border-r-0 md:data-[state=active]:[border-bottom:1px_solid_transparent]"
              >
                Learners
              </TabsTrigger>
              <TabsTrigger
                value="tab-3"
                className="flex w-full items-start justify-start gap-4 whitespace-normal border-0 border-t p-6 text-md font-bold leading-[1.4] duration-300 data-[state=active]:bg-primary-900 data-[state=active]:text-white text-primary-900 md:items-center md:justify-center md:border-b md:border-r md:border-t-0 md:px-8 md:py-6 md:text-xl md:last-of-type:border-r-0 md:data-[state=active]:[border-bottom:1px_solid_transparent]"
              >
                Pathways
              </TabsTrigger>
              <TabsTrigger
                value="tab-4"
                className="flex w-full items-start justify-start gap-4 whitespace-normal border-0 border-t p-6 text-md font-bold leading-[1.4] duration-300 data-[state=active]:bg-primary-900 data-[state=active]:text-white text-primary-900 md:items-center md:justify-center md:border-b md:border-r md:border-t-0 md:px-8 md:py-6 md:text-xl md:last-of-type:border-r-0 md:data-[state=active]:[border-bottom:1px_solid_transparent]"
              >
                Commitment
              </TabsTrigger>
            </TabsList>
            
            <TabsContent
              value="tab-1"
              className="order-1 data-[state=active]:animate-tabs md:order-2"
            >
              <div className="grid grid-cols-1 gap-y-12 p-6 md:grid-cols-2 md:items-center md:gap-x-12 md:p-8 lg:gap-x-20 lg:p-12">
                <div className="rounded-xl overflow-hidden shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"
                    className="w-full object-cover h-64 md:h-auto md:aspect-square"
                    alt="Students walking together"
                  />
                </div>
                <div>
                  <p className="mb-3 font-semibold text-secondary-500 uppercase tracking-widest md:mb-4">Inclusion</p>
                  <h2 className="rb-5 mb-5 text-4xl font-bold leading-[1.2] text-primary-900 md:mb-6 md:text-5xl lg:text-6xl">
                    Breaking down the barriers to education
                  </h2>
                  <p className="text-slate-600 md:text-lg">
                    We are dedicated to supporting learners from diverse educational, cultural, and socio-economic backgrounds by providing flexible study pathways, strong student support, and progression opportunities into higher education and professional careers.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button title="Apply" className="bg-secondary-500 text-primary-900 hover:bg-secondary-600 border-none">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent
              value="tab-2"
              className="order-1 data-[state=active]:animate-tabs md:order-2"
            >
              <div className="grid grid-cols-1 gap-y-12 p-6 md:grid-cols-2 md:items-center md:gap-x-12 md:p-8 lg:gap-x-20 lg:p-12">
                <div className="rounded-xl overflow-hidden shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop"
                    className="w-full object-cover h-64 md:h-auto md:aspect-square"
                    alt="Adult learner"
                  />
                </div>
                <div>
                  <p className="mb-3 font-semibold text-secondary-500 uppercase tracking-widest md:mb-4">Support</p>
                  <h2 className="rb-5 mb-5 text-4xl font-bold leading-[1.2] text-primary-900 md:mb-6 md:text-5xl lg:text-6xl">
                    Supporting Non-Traditional Learners
                  </h2>
                  <p className="text-slate-600 md:text-lg mb-4">
                    Our proposed programmes are specifically designed to support:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-slate-700 list-disc list-inside">
                    <li>Mature learners (19+)</li>
                    <li>Those without traditional qualifications</li>
                    <li>Early school leavers</li>
                    <li>First-generation students</li>
                    <li>Individuals seeking career change</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent
              value="tab-3"
              className="order-1 data-[state=active]:animate-tabs md:order-2"
            >
              <div className="grid grid-cols-1 gap-y-12 p-6 md:grid-cols-2 md:items-center md:gap-x-12 md:p-8 lg:gap-x-20 lg:p-12">
                <div className="rounded-xl overflow-hidden shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop"
                    className="w-full object-cover h-64 md:h-auto md:aspect-square"
                    alt="Pathways to success"
                  />
                </div>
                <div>
                  <p className="mb-3 font-semibold text-secondary-500 uppercase tracking-widest md:mb-4">Foundation</p>
                  <h2 className="rb-5 mb-5 text-4xl font-bold leading-[1.2] text-primary-900 md:mb-6 md:text-5xl lg:text-6xl">
                    Foundation Year Pathways
                  </h2>
                  <p className="text-slate-600 md:text-lg">
                    Foundation Year programmes provide an accessible route into undergraduate study. They are particularly suitable for students who need additional academic preparation, have been away from education for some time, or want to build confidence before degree-level study.
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent
              value="tab-4"
              className="order-1 data-[state=active]:animate-tabs md:order-2"
            >
              <div className="grid grid-cols-1 gap-y-12 p-6 md:grid-cols-2 md:items-center md:gap-x-12 md:p-8 lg:gap-x-20 lg:p-12">
                <div className="rounded-xl overflow-hidden shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1200&auto=format&fit=crop"
                    className="w-full object-cover h-64 md:h-auto md:aspect-square"
                    alt="Our commitment to students"
                  />
                </div>
                <div>
                  <p className="mb-3 font-semibold text-secondary-500 uppercase tracking-widest md:mb-4">Values</p>
                  <h2 className="rb-5 mb-5 text-4xl font-bold leading-[1.2] text-primary-900 md:mb-6 md:text-5xl lg:text-6xl">
                    Our Commitment to You
                  </h2>
                  <p className="text-slate-600 md:text-lg mb-4">
                    We aim to support students holistically by providing:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-slate-700 list-disc list-inside">
                    <li>Fair access to admissions</li>
                    <li>Academic & pastoral support</li>
                    <li>Inclusive teaching</li>
                    <li>Wellbeing support</li>
                    <li>A supportive learning community</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
