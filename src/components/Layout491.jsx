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
    return clsx("cursor-pointer border-b border-white/10 py-8 transition-colors duration-300", {
      "border-secondary-500": activeTab === index,
    });
  };
  const getActiveTitleStyles = (index) => {
    return clsx("text-2xl font-serif md:text-3xl lg:text-4xl transition-colors duration-300", {
      "text-secondary-500": activeTab === index,
      "text-slate-400 hover:text-white": activeTab !== index,
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

export function Layout491() {
  const useActive = useRelume();
  
  const scrollToModules = (e) => {
    e.preventDefault();
    document.getElementById("modules-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="course-details" className="relative px-[5%] py-24 md:py-32 lg:py-40 bg-primary-900 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary-500/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
      </div>

      <div className="container relative z-10 max-w-7xl mx-auto">
        <div className="mx-auto mb-20 max-w-4xl text-center md:mb-24 lg:mb-32">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-12 h-[2px] bg-secondary-500" />
            <p className="font-bold text-secondary-500 uppercase tracking-[0.3em] text-sm md:text-base">
              Business
            </p>
            <div className="w-12 h-[2px] bg-secondary-500" />
          </div>
          
          <h1 className="mb-8 text-5xl font-serif text-white leading-tight md:text-6xl lg:text-7xl">
            BA (Hons) Business & <span className="italic text-secondary-500 font-light">Tourism Management</span>
          </h1>
          <p className="md:text-xl text-slate-300 leading-relaxed font-light mx-auto max-w-3xl">
            Bristol is a living case study. You will analyze a top-tier tourist
            economy while mastering the principles of modern management,
            marketing, and enterprise.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <Button className="bg-secondary-500 hover:bg-secondary-600 text-primary-900 border-none px-10 py-6 text-lg tracking-wide rounded-full font-bold">
              Apply Now
            </Button>
            <button
              onClick={scrollToModules}
              className="flex items-center gap-2 text-white hover:text-secondary-500 transition-colors duration-300 text-lg font-medium px-4 py-2 group"
            >
              Explore Modules
              <RxChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
        
        <div id="modules-section" className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20 pt-10">
          <div className="relative grid auto-cols-fr grid-cols-1 grid-rows-[auto_auto] items-start md:items-stretch">
            <div
              onClick={useActive.setActiveTabSetter(0)}
              className={useActive.getActiveTabButtonStyles(0)}
            >
              <h2 className={useActive.getActiveTitleStyles(0)}>
                Core Business Strategy
              </h2>
              <motion.div
                initial={false}
                animate={useActive.getActiveTabButtonContentStyles(0)}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="mt-4 text-slate-300 font-light text-lg leading-relaxed">
                  Grasp the fundamentals of finance, marketing, and
                  organizational behavior. These are the foundational tools of corporate leadership and management.
                </p>
              </motion.div>
            </div>
            
            <div
              onClick={useActive.setActiveTabSetter(1)}
              className={useActive.getActiveTabButtonStyles(1)}
            >
              <h2 className={useActive.getActiveTitleStyles(1)}>
                Global Tourism Economics
              </h2>
              <motion.div
                initial={false}
                animate={useActive.getActiveTabButtonContentStyles(1)}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="mt-4 text-slate-300 font-light text-lg leading-relaxed">
                  Analyze how international markets fluctuate and examine the environmental and economic impacts of global tourism on local infrastructures.
                </p>
              </motion.div>
            </div>
            
            <div
              onClick={useActive.setActiveTabSetter(2)}
              className={useActive.getActiveTabButtonStyles(2)}
            >
              <h2 className={useActive.getActiveTitleStyles(2)}>
                Enterprise & Innovation
              </h2>
              <motion.div
                initial={false}
                animate={useActive.getActiveTabButtonContentStyles(2)}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="mt-4 text-slate-300 font-light text-lg leading-relaxed">
                  Develop your own business plans and learn how to incubate startup ideas. Focus on disruptive technologies reshaping the hospitality sector.
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
                      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
                      alt: "Business strategy meeting",
                    },
                  },
                  {
                    image: {
                      src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop",
                      alt: "Global tourism airplane",
                    },
                  },
                  {
                    image: {
                      src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop",
                      alt: "Enterprise innovation startup",
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
