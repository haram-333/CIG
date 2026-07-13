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
      "text-slate-500 hover:text-secondary-500": activeTab !== index,
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

export function Layout491_2() {
  const useActive = useRelume();
  
  const scrollToAccess = (e) => {
    e.preventDefault();
    document.getElementById("access-tabs")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="access" className="relative px-[5%] py-24 md:py-32 lg:py-40 bg-background-secondary overflow-hidden">
      <div className="container relative z-10 max-w-7xl mx-auto">
        <div className="mx-auto mb-20 max-w-4xl text-center md:mb-24 lg:mb-32">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-12 h-[2px] bg-secondary-500" />
            <p className="font-bold text-secondary-500 uppercase tracking-[0.3em] text-sm md:text-base">
              Access
            </p>
            <div className="w-12 h-[2px] bg-secondary-500" />
          </div>
          
          <h1 className="mb-8 text-5xl font-serif text-primary-900 leading-tight md:text-6xl lg:text-7xl">
            We find talent where the <br className="hidden lg:block" />
            <span className="italic text-secondary-500 font-light">system stopped looking</span>
          </h1>
          <p className="md:text-xl text-slate-600 leading-relaxed font-light mx-auto max-w-3xl">
            Our widening participation strategy is not a box-ticking exercise.
            It is the reason the college exists. We actively recruit students
            from low-participation neighborhoods and underrepresented groups.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <Button className="bg-primary-900 hover:bg-secondary-500 hover:text-primary-900 text-white border-none px-10 py-6 text-lg tracking-wide rounded-full font-bold transition-colors duration-300">
              Join Our Community
            </Button>
            <button
              onClick={scrollToAccess}
              className="flex items-center gap-2 text-primary-900 hover:text-secondary-500 transition-colors duration-300 text-lg font-medium px-4 py-2 group"
            >
              See Our Approach
              <RxChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
        
        <div id="access-tabs" className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20 pt-10">
          <div className="relative grid auto-cols-fr grid-cols-1 grid-rows-[auto_auto] items-start md:items-stretch">
            <div
              onClick={useActive.setActiveTabSetter(0)}
              className={useActive.getActiveTabButtonStyles(0)}
            >
              <h2 className={useActive.getActiveTitleStyles(0)}>
                Targeted Outreach
              </h2>
              <motion.div
                initial={false}
                animate={useActive.getActiveTabButtonContentStyles(0)}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="mt-4 text-slate-600 font-light text-lg leading-relaxed">
                  We go into communities, not just wait for applications. Our
                  team works with local charities and adult education centers to
                  find hidden potential.
                </p>
              </motion.div>
            </div>
            
            <div
              onClick={useActive.setActiveTabSetter(1)}
              className={useActive.getActiveTabButtonStyles(1)}
            >
              <h2 className={useActive.getActiveTitleStyles(1)}>
                Financial Support
              </h2>
              <motion.div
                initial={false}
                animate={useActive.getActiveTabButtonContentStyles(1)}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="mt-4 text-slate-600 font-light text-lg leading-relaxed">
                  Removing economic barriers is our priority. We offer comprehensive bursaries, tailored grants, and flexible payment plans for eligible students.
                </p>
              </motion.div>
            </div>
            
            <div
              onClick={useActive.setActiveTabSetter(2)}
              className={useActive.getActiveTabButtonStyles(2)}
            >
              <h2 className={useActive.getActiveTitleStyles(2)}>
                Mentorship Programs
              </h2>
              <motion.div
                initial={false}
                animate={useActive.getActiveTabButtonContentStyles(2)}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="mt-4 text-slate-600 font-light text-lg leading-relaxed">
                  From day one, you are paired with industry professionals and alumni mentors who understand your journey and help guide your career path.
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
                      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
                      alt: "Targeted outreach community",
                    },
                  },
                  {
                    image: {
                      src: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
                      alt: "Financial planning and support",
                    },
                  },
                  {
                    image: {
                      src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
                      alt: "Mentorship and guidance",
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
