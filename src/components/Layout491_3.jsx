"use client";

import { Button, Dialog, DialogTrigger, DialogContent, VideoIframe } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { RxChevronRight } from "react-icons/rx";
import { FaCirclePlay } from "react-icons/fa6";
import clsx from "clsx";

const TabItem = ({ tabItem, index, activeTab }) => {
  if (index !== activeTab) {
    return null;
  }
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="size-full rounded-2xl overflow-hidden shadow-2xl"
    >
      {tabItem.image && (
        <img
          src={tabItem.image.src}
          alt={tabItem.image.alt}
          className="object-cover size-full aspect-[4/3] md:aspect-auto"
        />
      )}
      {tabItem.video && (
        <Dialog>
          <DialogTrigger className="relative flex items-center justify-center w-full h-full">
            <img
              src={tabItem.video.image.src}
              alt={tabItem.video.image.alt}
              className="object-cover size-full aspect-[4/3] md:aspect-auto"
            />
            <span className="absolute inset-0 z-10 bg-black/40 hover:bg-black/20 transition-colors duration-300" />
            <FaCirclePlay className="absolute z-20 text-white size-20 drop-shadow-lg" />
          </DialogTrigger>
          <DialogContent>
            <VideoIframe video={tabItem.video.url} />
          </DialogContent>
        </Dialog>
      )}
    </motion.div>
  );
};

const useRelume = () => {
  const [activeTab, setActiveTab] = useState(0);
  const setActiveTabSetter = (index) => () => setActiveTab(index);
  const getActiveTabButtonStyles = (index) => {
    return clsx("cursor-pointer border-b border-border-primary py-6 transition-all duration-300", {
      "opacity-100": activeTab === index,
      "opacity-40 hover:opacity-70": activeTab !== index,
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
    activeTab,
  };
};

export function Layout491_3() {
  const useActive = useRelume();
  return (
    <section id="partnerships" className="px-[5%] py-16 md:py-24 lg:py-28 bg-background-primary">
      <div className="container">
        <motion.div 
          className="mx-auto mb-12 max-w-2xl text-center md:mb-18 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 font-semibold text-secondary-500 uppercase tracking-wider md:mb-4">Partnerships and Quality</p>
          <h2 className="mb-5 text-5xl font-bold text-primary-900 md:mb-6 md:text-7xl lg:text-8xl">
            Working towards excellence
          </h2>
          <p className="md:text-lg text-slate-600">
            College for Innovation and Growth is working towards the delivery of undergraduate programmes in Bristol in partnership with the University of Wolverhampton. The proposed collaboration aims to expand access to recognised UK higher education qualifications.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            <Button title="Learn More" className="bg-primary-900 text-white hover:bg-primary-800">
              Our Partners
            </Button>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 items-center gap-x-12 md:grid-cols-2 lg:gap-x-20">
          <div className="relative mb-8 grid auto-cols-fr grid-cols-1 grid-rows-[auto_auto] items-start md:mb-0 md:items-stretch">
            <div
              onClick={useActive.setActiveTabSetter(0)}
              className={useActive.getActiveTabButtonStyles(0)}
            >
              <h3 className="text-2xl font-bold text-primary-900 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Commitment to Quality
              </h3>
              <motion.div
                initial={false}
                animate={useActive.getActiveTabButtonContentStyles(0)}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="mt-3 md:mt-4 text-slate-600">
                  We are committed to maintaining high standards across teaching and learning, student support, assessment processes, and academic guidance to ensure your success.
                </p>
              </motion.div>
            </div>
            <div
              onClick={useActive.setActiveTabSetter(1)}
              className={useActive.getActiveTabButtonStyles(1)}
            >
              <h3 className="text-2xl font-bold text-primary-900 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Academic Standards
              </h3>
              <motion.div
                initial={false}
                animate={useActive.getActiveTabButtonContentStyles(1)}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="mt-3 md:mt-4 text-slate-600">
                  Our proposed higher education provision will be delivered in line with the academic standards and quality expectations of the University of Wolverhampton, including rigorous oversight and programme monitoring.
                </p>
              </motion.div>
            </div>
            <div
              onClick={useActive.setActiveTabSetter(2)}
              className={useActive.getActiveTabButtonStyles(2)}
            >
              <h3 className="text-2xl font-bold text-primary-900 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Student-Centred Delivery
              </h3>
              <motion.div
                initial={false}
                animate={useActive.getActiveTabButtonContentStyles(2)}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="mt-3 md:mt-4 text-slate-600">
                  Our approach places students at the centre of the learning experience. We aim to provide programmes that are accessible, inclusive, career-focused, and academically robust.
                </p>
              </motion.div>
            </div>
          </div>
          <div className="flex max-h-full w-full items-center justify-center overflow-hidden">
            <AnimatePresence initial={false}>
              <TabItem
                key={0}
                tabItem={{
                  image: {
                    src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1200&auto=format&fit=crop",
                    alt: "Quality education",
                  },
                }}
                index={0}
                activeTab={useActive.activeTab}
              />
              <TabItem
                key={1}
                tabItem={{
                  image: {
                    src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop",
                    alt: "Academic standards campus",
                  },
                }}
                index={1}
                activeTab={useActive.activeTab}
              />
              <TabItem
                key={2}
                tabItem={{
                  image: {
                    src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1200&auto=format&fit=crop",
                    alt: "Student centered learning",
                  },
                }}
                index={2}
                activeTab={useActive.activeTab}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
