"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { RxChevronDown, RxArrowRight, RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import clsx from "clsx";

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const isMobile = useMediaQuery("(max-width: 991px)");
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const openOnMobileDropdownMenu = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const openOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(true);
  };
  const closeOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";
  
  return {
    toggleMobileMenu,
    openOnDesktopDropdownMenu,
    closeOnDesktopDropdownMenu,
    openOnMobileDropdownMenu,
    animateMobileMenu,
    animateDropdownMenu,
    animateDropdownMenuIcon,
    isMobileMenuOpen,
    scrolled,
  };
};

export function Navbar9() {
  const useActive = useRelume();
  
  return (
    <section
      id="navbar"
      className="fixed top-0 left-0 right-0 z-[999] flex w-full justify-center pt-6 px-[5%] pointer-events-none transition-transform duration-300"
    >
      <div className={clsx(
        "pointer-events-auto relative z-50 flex w-full max-w-6xl items-center justify-between rounded-full bg-white/80 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/50 px-6 transition-all duration-300",
        useActive.scrolled ? "py-2" : "py-3"
      )}>
        <a href="#" className="flex items-center gap-2 z-50">
          <span className="text-2xl font-serif font-bold text-primary-900 tracking-tight">
            C<span className="text-secondary-500">I</span>G
          </span>
        </a>
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-1 z-50">
          <a
            href="#"
            className="px-5 py-2.5 text-sm font-medium text-slate-700 hover:text-primary-900 transition-colors rounded-full hover:bg-slate-100/60"
          >
            Programmes
          </a>
          <a
            href="#"
            className="px-5 py-2.5 text-sm font-medium text-slate-700 hover:text-primary-900 transition-colors rounded-full hover:bg-slate-100/60"
          >
            Admissions
          </a>
          <a
            href="#"
            className="px-5 py-2.5 text-sm font-medium text-slate-700 hover:text-primary-900 transition-colors rounded-full hover:bg-slate-100/60"
          >
            Bristol
          </a>
          <div
            className="relative"
            onMouseEnter={useActive.openOnDesktopDropdownMenu}
            onMouseLeave={useActive.closeOnDesktopDropdownMenu}
          >
            <button
              className="flex items-center gap-1 px-5 py-2.5 text-sm font-medium text-slate-700 hover:text-primary-900 transition-colors rounded-full hover:bg-slate-100/60"
              onClick={useActive.openOnMobileDropdownMenu}
            >
              <span>About</span>
              <motion.span
                animate={useActive.animateDropdownMenuIcon}
                variants={{
                  rotated: { rotate: 180 },
                  initial: { rotate: 0 },
                }}
                transition={{ duration: 0.3 }}
              >
                <RxChevronDown className="text-lg" />
              </motion.span>
            </button>
            <AnimatePresence>
              <motion.nav
                variants={{
                  open: {
                    opacity: 1,
                    y: 0,
                    display: "block",
                  },
                  close: {
                    opacity: 0,
                    y: 10,
                    display: "none",
                  },
                }}
                animate={useActive.animateDropdownMenu}
                initial="close"
                exit="close"
                transition={{ duration: 0.2 }}
                className="absolute left-1/2 top-[calc(100%+0.5rem)] w-[500px] -translate-x-1/2 overflow-hidden rounded-3xl bg-white/95 backdrop-blur-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] border border-slate-100"
              >
                <div className="p-5 grid grid-cols-2 gap-2">
                  <a
                    href="#"
                    className="group flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-slate-50"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary-500/10 text-secondary-500 transition-transform group-hover:scale-110">
                      <RxArrowRight className="size-5" />
                    </div>
                    <div className="flex flex-col">
                      <h5 className="font-serif font-bold text-primary-900 text-[15px] mb-0.5">Mission</h5>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Our purpose and commitment to access.
                      </p>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="group flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-slate-50"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary-500/10 text-secondary-500 transition-transform group-hover:scale-110">
                      <RxArrowRight className="size-5" />
                    </div>
                    <div className="flex flex-col">
                      <h5 className="font-serif font-bold text-primary-900 text-[15px] mb-0.5">Vision</h5>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        A future where every student can thrive.
                      </p>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="group flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-slate-50"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary-500/10 text-secondary-500 transition-transform group-hover:scale-110">
                      <RxArrowRight className="size-5" />
                    </div>
                    <div className="flex flex-col">
                      <h5 className="font-serif font-bold text-primary-900 text-[15px] mb-0.5">Values</h5>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        The principles that guide our college.
                      </p>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="group flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-slate-50"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary-500/10 text-secondary-500 transition-transform group-hover:scale-110">
                      <RxArrowRight className="size-5" />
                    </div>
                    <div className="flex flex-col">
                      <h5 className="font-serif font-bold text-primary-900 text-[15px] mb-0.5">Contact</h5>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Speak with our team about your future.
                      </p>
                    </div>
                  </a>
                </div>
                <div className="bg-slate-50 px-6 py-4 flex items-center justify-between border-t border-slate-100">
                  <p className="text-xs text-slate-600 font-medium">Looking for a new career?</p>
                  <a href="#" className="text-xs text-primary-900 font-bold hover:text-secondary-500 transition-colors">Get in touch &rarr;</a>
                </div>
              </motion.nav>
            </AnimatePresence>
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-3 z-50">
          <Button className="bg-transparent hover:bg-slate-100 text-primary-900 border border-slate-300 rounded-full px-5 py-2 text-sm font-bold transition-colors">
            Apply
          </Button>
          <Button className="bg-primary-900 hover:bg-secondary-500 hover:text-primary-900 text-white border-none rounded-full px-5 py-2 text-sm font-bold transition-colors shadow-md">
            Register
          </Button>
        </div>
        
        {/* Mobile Toggle Button */}
        <button
          className="flex size-10 cursor-pointer items-center justify-center lg:hidden z-50 text-2xl text-primary-900 hover:bg-slate-100 rounded-full transition-colors"
          onClick={useActive.toggleMobileMenu}
        >
          {useActive.isMobileMenuOpen ? <RxCross2 /> : <RxHamburgerMenu />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        <motion.div
          variants={{ open: { height: "100dvh" }, close: { height: 0 } }}
          animate={useActive.animateMobileMenu}
          initial="close"
          exit="close"
          className="absolute left-0 right-0 top-0 w-full overflow-hidden lg:hidden bg-white z-40 pointer-events-auto"
          transition={{ duration: 0.4 }}
        >
          <motion.div
            variants={{ open: { y: 0, opacity: 1 }, close: { y: "-10%", opacity: 0 } }}
            animate={useActive.animateMobileMenu}
            initial="close"
            exit="close"
            transition={{ duration: 0.4 }}
            className="flex h-dvh flex-col overflow-auto px-[5%] pb-8 pt-28"
          >
            <div className="flex flex-col gap-4">
              <a href="#" className="block py-4 text-2xl font-serif font-bold text-primary-900 border-b border-slate-100">
                Programmes
              </a>
              <a href="#" className="block py-4 text-2xl font-serif font-bold text-primary-900 border-b border-slate-100">
                Admissions
              </a>
              <a href="#" className="block py-4 text-2xl font-serif font-bold text-primary-900 border-b border-slate-100">
                Bristol
              </a>
              <div>
                <button
                  className="flex w-full items-center justify-between py-4 text-2xl font-serif font-bold text-primary-900 border-b border-slate-100"
                  onClick={useActive.openOnMobileDropdownMenu}
                >
                  <span>About</span>
                  <motion.span
                    animate={useActive.animateDropdownMenuIcon}
                    variants={{
                      rotated: { rotate: 180 },
                      initial: { rotate: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <RxChevronDown />
                  </motion.span>
                </button>
                <AnimatePresence>
                  <motion.div
                    variants={{
                      open: { opacity: 1, height: "auto", marginTop: "1rem" },
                      close: { opacity: 0, height: 0, marginTop: 0 },
                    }}
                    animate={useActive.animateDropdownMenu}
                    initial="close"
                    exit="close"
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col gap-4 pl-4 pb-4 border-b border-slate-100">
                      <a href="#" className="text-lg font-medium text-slate-600">Mission</a>
                      <a href="#" className="text-lg font-medium text-slate-600">Vision</a>
                      <a href="#" className="text-lg font-medium text-slate-600">Values</a>
                      <a href="#" className="text-lg font-medium text-slate-600">Contact</a>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="mt-8 flex flex-col gap-4">
                <Button className="w-full bg-transparent text-primary-900 border border-slate-300 rounded-full py-4 text-lg font-bold">
                  Apply
                </Button>
                <Button className="w-full bg-primary-900 text-white border-none rounded-full py-4 text-lg font-bold">
                  Register
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
