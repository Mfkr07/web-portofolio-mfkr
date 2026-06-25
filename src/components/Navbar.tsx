"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "ABOUT ME", href: "#about" },
    { name: "SKILLS", href: "#skills" },
    { name: "PROJECT", href: "#projects" },
    { name: "CONTACT", href: "mailto:mfkrass@gmail.com" }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full h-16 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-crimson-maroon shadow-[0_2px_20px_rgba(0,0,0,0.5)] border-b border-old-gold/20' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-[1200px] h-full mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-display text-xl text-old-gold font-bold tracking-wider hover:text-ember-gold transition-colors">
            mfkr.DEV
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-heading text-[13px] font-semibold tracking-[2px] text-smoke-white hover:text-old-gold hover-underline-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <a
              href="mailto:mfkrass@gmail.com"
              className="font-heading text-[13px] font-semibold tracking-[1px] text-old-gold border-2 border-old-gold/70 bg-transparent hover:bg-old-gold hover:text-deep-void px-5 py-2.5 rounded-[2px] shadow-[0_0_10px_rgba(201,168,76,0.15)] hover:shadow-[0_0_15px_rgba(232,184,75,0.4)] transition-all duration-200"
            >
              HIRE ME
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-smoke-white hover:text-old-gold transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 w-full bg-deep-void/95 border-b border-old-gold/20 z-40 md:hidden flex flex-col px-6 py-8 space-y-6 backdrop-blur-md"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-heading text-[15px] font-semibold tracking-[2px] text-smoke-white hover:text-old-gold text-center transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="mailto:mfkrass@gmail.com"
              onClick={() => setIsOpen(false)}
              className="font-heading text-[15px] font-semibold tracking-[1px] text-center text-old-gold border border-old-gold bg-transparent py-3 rounded-[2px] hover:bg-old-gold hover:text-deep-void transition-all duration-200"
            >
              HIRE ME
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
