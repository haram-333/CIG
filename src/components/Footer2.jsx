"use client";

import { Button, Input } from "@relume_io/relume-ui";
import React, { useState } from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

const useForm = () => {
  const [email, setEmail] = useState("");
  const handleSetEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email });
  };
  return {
    email,
    handleSetEmail,
    handleSubmit,
  };
};

export function Footer2() {
  const formState = useForm();
  return (
    <footer id="footer" className="bg-primary-900 text-white pt-16 md:pt-24 pb-6 overflow-hidden relative flex flex-col justify-between min-h-[600px]">
      
      {/* Massive Background Typography Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden opacity-[0.03]">
        <h1 className="text-[13vw] leading-none font-black tracking-tighter whitespace-nowrap text-white uppercase text-center w-full px-[5%]">
          INNOVATION
        </h1>
      </div>

      <div className="container px-[5%] mx-auto max-w-7xl relative z-10 flex-grow flex flex-col justify-between">
        
        {/* Top Grid: Links & Newsletter */}
        <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-20">
          
          {/* Logo & Newsletter (Spans 5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <a href="#" className="inline-block mb-10">
                <span className="text-4xl font-serif font-bold tracking-tight text-white drop-shadow-md">
                  C<span className="text-secondary-500">I</span>G
                </span>
              </a>
              <h3 className="mb-4 text-xl font-serif text-white">Join our newsletter</h3>
              <p className="mb-6 text-slate-300 font-light max-w-sm">
                Stay up to date on features, releases, and upcoming open events at our Bristol campus.
              </p>
              <form
                className="w-full max-w-sm relative"
                onSubmit={formState.handleSubmit}
              >
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formState.email}
                  onChange={formState.handleSetEmail}
                  className="bg-primary-900/50 backdrop-blur-md border border-white/20 text-white placeholder:text-slate-400 h-14 rounded-full pl-6 pr-32 focus:border-secondary-500 transition-colors"
                />
                <Button 
                  title="Subscribe" 
                  className="absolute right-1 top-1 bottom-1 h-12 rounded-full bg-secondary-500 hover:bg-white text-primary-900 border-none font-bold px-6 transition-colors shadow-lg"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          {/* Links (Spans 7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-12">
            <div className="flex flex-col">
              <h4 className="mb-6 font-bold text-white uppercase tracking-wider text-sm drop-shadow-sm">Study</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-300 hover:text-secondary-500 transition-colors">Programmes</a></li>
                <li><a href="#" className="text-slate-300 hover:text-secondary-500 transition-colors">Admissions</a></li>
                <li><a href="#" className="text-slate-300 hover:text-secondary-500 transition-colors">Bristol</a></li>
                <li><a href="#" className="text-slate-300 hover:text-secondary-500 transition-colors">Contact</a></li>
                <li><a href="#" className="text-slate-300 hover:text-secondary-500 transition-colors">About</a></li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h4 className="mb-6 font-bold text-white uppercase tracking-wider text-sm drop-shadow-sm">Support</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-300 hover:text-secondary-500 transition-colors">Foundation year</a></li>
                <li><a href="#" className="text-slate-300 hover:text-secondary-500 transition-colors">Employability</a></li>
                <li><a href="#" className="text-slate-300 hover:text-secondary-500 transition-colors">Mission</a></li>
                <li><a href="#" className="text-slate-300 hover:text-secondary-500 transition-colors">Partnership</a></li>
                <li><a href="#" className="text-slate-300 hover:text-secondary-500 transition-colors">Student life</a></li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h4 className="mb-6 font-bold text-white uppercase tracking-wider text-sm drop-shadow-sm">Connect</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-300 hover:text-secondary-500 transition-colors flex items-center gap-2"><BiLogoInstagram className="text-lg"/> Instagram</a></li>
                <li><a href="#" className="text-slate-300 hover:text-secondary-500 transition-colors flex items-center gap-2"><BiLogoLinkedinSquare className="text-lg"/> LinkedIn</a></li>
                <li><a href="#" className="text-slate-300 hover:text-secondary-500 transition-colors flex items-center gap-2"><FaXTwitter className="text-lg"/> Twitter</a></li>
                <li><a href="#" className="text-slate-300 hover:text-secondary-500 transition-colors flex items-center gap-2"><BiLogoYoutube className="text-lg"/> YouTube</a></li>
                <li><a href="#" className="text-slate-300 hover:text-secondary-500 transition-colors flex items-center gap-2"><BiLogoFacebookCircle className="text-lg"/> Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Privacy */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/10 text-slate-400 text-sm mt-auto">
          <p>© {new Date().getFullYear()} College for Innovation and Growth.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
