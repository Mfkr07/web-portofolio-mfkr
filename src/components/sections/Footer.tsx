"use client";

import React from 'react';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative py-16 bg-deep-void border-t border-old-gold/20 text-smoke-white font-sans">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12">

        {/* Column 1: Identity Card (5 cols) */}
        <div className="md:col-span-5 flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-old-gold animate-pulse" />
            <h3 className="font-display text-lg md:text-xl text-old-gold font-bold tracking-[2px] uppercase">
              M. FAKHRI ASSHOFI
            </h3>
          </div>
          <p className="font-mono text-[10px] text-smoke-white/50 tracking-wider uppercase">
            Full Stack Web Developer
          </p>
          <p className="text-xs text-smoke-white/60 leading-relaxed max-w-[340px]">
            Building clean, optimized, and high-performance web applications. Specialized in React, Next.js, Laravel, and flutter mobile developments.
          </p>
          {/* Action Call */}
          <div className="pt-2">
            <a
              href="mailto:mfkrass@gmail.com?subject=Inquiry%20regarding%20Full%20Stack%20Development"
              className="inline-flex items-center space-x-2 font-heading text-[10px] font-bold tracking-[2px] text-deep-void bg-old-gold hover:bg-old-gold/90 py-2.5 px-5 rounded-[2px] shadow-sm transition-all duration-200 uppercase"
            >
              <Mail size={12} />
              <span>Contact Me</span>
            </a>
          </div>
        </div>

        {/* Column 2: Navigation Links (3 cols) */}
        <div className="md:col-span-3 flex flex-col space-y-4">
          <h4 className="font-heading text-xs font-bold text-old-gold tracking-[2px] uppercase">
            Navigation
          </h4>
          <div className="flex flex-col space-y-2.5 font-sans text-xs text-smoke-white/50">
            <a href="#hero" className="hover:text-old-gold transition-colors flex items-center space-x-1.5">
              <span>&rsaquo;</span> <span>Home</span>
            </a>
            <a href="#about" className="hover:text-old-gold transition-colors flex items-center space-x-1.5">
              <span>&rsaquo;</span> <span>About</span>
            </a>
            <a href="#skills" className="hover:text-old-gold transition-colors flex items-center space-x-1.5">
              <span>&rsaquo;</span> <span>Skills</span>
            </a>
            <a href="#projects" className="hover:text-old-gold transition-colors flex items-center space-x-1.5">
              <span>&rsaquo;</span> <span>Projects</span>
            </a>
          </div>
        </div>

        {/* Column 3: Contact Coordinates (4 cols) */}
        <div className="md:col-span-4 flex flex-col space-y-4">
          <h4 className="font-heading text-xs font-bold text-old-gold tracking-[2px] uppercase">
            Contact Coordinates
          </h4>
          <div className="space-y-3 font-sans text-xs text-smoke-white/60">
            <div className="flex items-center space-x-2.5">
              <Mail size={14} className="text-old-gold" />
              <a href="mailto:mfkrass@gmail.com" className="hover:text-old-gold transition-colors font-mono text-[11px]">
                mfkrass@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-2.5">
              <Github size={14} className="text-old-gold" />
              <a href="https://github.com/Mfkr07" target="_blank" rel="noopener noreferrer" className="hover:text-old-gold transition-colors font-mono text-[11px]">
                github.com/Mfkr07
              </a>
            </div>
            <div className="flex items-center space-x-2.5">
              <MapPin size={14} className="text-old-gold" />
              <span className="font-mono text-[11px]">
                Palembang, Indonesia
              </span>
            </div>
          </div>

          {/* Social Network Grid */}
          <div className="flex items-center space-x-3 pt-2">
            <a
              href="https://github.com/Mfkr07"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-old-gold/20 hover:border-old-gold/60 text-smoke-white/50 hover:text-old-gold flex items-center justify-center transition-all duration-200"
              title="GitHub"
            >
              <Github size={14} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-old-gold/20 hover:border-old-gold/60 text-smoke-white/50 hover:text-old-gold flex items-center justify-center transition-all duration-200"
              title="LinkedIn"
            >
              <Linkedin size={14} />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar: Copyright & Sigils */}
      <div className="border-t border-old-gold/10 w-full pt-8 pb-4">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[9px] text-smoke-white/30 tracking-[1.5px] uppercase">
          <div>
            &copy; {new Date().getFullYear()} M. FAKHRI ASSHOFI. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center space-x-4">
            <span>V2.0.0</span>
            <span>&bull;</span>
            <span className="text-old-gold/50">BUILT WITH NEXT.JS &amp; VANILLA CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
