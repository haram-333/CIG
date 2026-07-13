"use client";

import { Button } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { RxChevronRight } from "react-icons/rx";
import clsx from "clsx";

const TabItem = ({ tabItem, index, activeTab }) => {
  if (index !== activeTab) {
    return null;
  }
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      exit={{ opacity: 0, scale: 1.02, position: "absolute" }}
      className="w-full h-full"
    >
      <img
        src={tabItem.image.src}
        alt={tabItem.image.alt}
        className="object-cover w-full h-[500px] md:h-[600px] rounded-3xl shadow-2xl"
      />
    </motion.div>
  );
};

const useRelume = () => {
  const [activeTab, setActiveTab] = useState(0);
  const setActiveTabSetter = (index) => () => setActiveTab(index);
  const getActiveTabButtonStyles = (index) => {
    return clsx("cursor-pointer border-b border-primary-900/10 py-8 transition-colors duration-300", {
      "border-secondary-500": activeTab === index,
    });
  };
  const getActiveTitleStyles = (index) => {
    return clsx("text-2xl font-serif md:text-3xl lg:text-4xl transition-colors duration-300", {
      "text-primary-900": activeTab === index,
      "text-slate-400 hover:text-secondary-500": activeTab !== index,
    });
  };
  const getActiveTabButtonContentStyles = (index) => {
    return {
      height: activeTab === index ? "auto" : 0,
      opacity: activeTab === index ? 1 : 0,
    };
  };
  return {
    setActiveTabSetter,
    getActiveTabButtonStyles,
    getActiveTabButtonContentStyles,
    getActiveTitleStyles,
    activeTab,
  };
};

export function Layout491_1() {
  const useActive = useRelume();
  
  const scrollToImpact = (e) => {
    e.preventDefault();
    document.getElementById("impact-tabs")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="impact" className="relative px-[5%] py-24 md:py-32 lg:py-40 bg-white overflow-hidden">
      <div className="container relative z-10 max-w-7xl mx-auto">
        <div className="mx-auto mb-20 max-w-4xl text-center md:mb-24 lg:mb-32">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-12 h-[2px] bg-secondary-500" />
            <p className="font-bold text-secondary-500 uppercase tracking-[0.3em] text-sm md:text-base">
              Impact
            </p>
            <div className="w-12 h-[2px] bg-secondary-500" />
          </div>
          
          <h1 className="mb-8 text-5xl font-serif text-primary-900 leading-tight md:text-6xl lg:text-7xl">
            Filling the skills gap with <br className="hidden lg:block" />
            <span className="italic text-secondary-500 font-light">homegrown talent</span>
          </h1>
          <p className="md:text-xl text-slate-600 leading-relaxed font-light mx-auto max-w-3xl">
            The South West needs managers, health professionals, and
            entrepreneurs. We build them here. Our curriculum is a direct answer
            to the regional economic strategy.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <Button className="bg-primary-900 hover:bg-secondary-500 hover:text-primary-900 text-white border-none px-10 py-6 text-lg tracking-wide rounded-full font-bold transition-colors duration-300">
              Discover Our Impact
            </Button>
            <button
              onClick={scrollToImpact}
              className="flex items-center gap-2 text-primary-900 hover:text-secondary-500 transition-colors duration-300 text-lg font-medium px-4 py-2 group"
            >
              Learn More
              <RxChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
        
        <div id="impact-tabs" className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20 pt-10">
          <div className="relative grid auto-cols-fr grid-cols-1 grid-rows-[auto_auto] items-start md:items-stretch">
            <div
              onClick={useActive.setActiveTabSetter(0)}
              className={useActive.getActiveTabButtonStyles(0)}
            >
              <h2 className={useActive.getActiveTitleStyles(0)}>
                Curriculum Alignment
              </h2>
              <motion.div
                initial={false}
                animate={useActive.getActiveTabButtonContentStyles(0)}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="mt-4 text-slate-600 font-light text-lg leading-relaxed">
                  We align every module with identified skills shortages in
                  Bristol and the surrounding areas. Your qualification is a
                  solution to a real problem.
                </p>
              </motion.div>
            </div>
            
            <div
              onClick={useActive.setActiveTabSetter(1)}
              className={useActive.getActiveTabButtonStyles(1)}
            >
              <h2 className={useActive.getActiveTitleStyles(1)}>
                Industry Partnerships
              </h2>
              <motion.div
                initial={false}
                animate={useActive.getActiveTabButtonContentStyles(1)}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="mt-4 text-slate-600 font-light text-lg leading-relaxed">
                  We work directly with top regional employers to ensure our graduates are exactly what they are looking for when entering the workforce.
                </p>
              </motion.div>
            </div>
            
            <div
              onClick={useActive.setActiveTabSetter(2)}
              className={useActive.getActiveTabButtonStyles(2)}
            >
              <h2 className={useActive.getActiveTitleStyles(2)}>
                Real-World Experience
              </h2>
              <motion.div
                initial={false}
                animate={useActive.getActiveTabButtonContentStyles(2)}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="mt-4 text-slate-600 font-light text-lg leading-relaxed">
                  Students don't just learn theory; they apply it through integrated internships, live project briefs, and hands-on consulting for local businesses.
                </p>
              </motion.div>
            </div>
          </div>
          
          <div className="flex max-h-full w-full items-center justify-center overflow-hidden relative">
            <AnimatePresence>
              <TabItem
                key={useActive.activeTab}
                tabItem={[
                  {
                    image: {
                      src: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop",
                      alt: "Students learning",
                    },
                  },
                  {
                    image: {
                      src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop",
                      alt: "Industry partnership meeting",
                    },
                  },
                  {
                    image: {
                      src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1200&auto=format&fit=crop",
                      alt: "Real world working experience",
                    },
                  }
                ][useActive.activeTab]}
                index={useActive.activeTab}
                activeTab={useActive.activeTab}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
