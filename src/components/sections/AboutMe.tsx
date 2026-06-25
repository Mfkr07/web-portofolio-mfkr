"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const AboutMe = () => {
  return (
    <section id="about" className="relative py-20 bg-parchment-texture text-deep-void">
      {/* Subtle top shading gradient to blend out of the dark Hero section */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-deep-void to-transparent opacity-20 pointer-events-none" />

      <div className="max-w-[800px] mx-auto px-6 md:px-12 flex justify-center">
        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full bg-[#FCFBF9] border border-old-gold/30 rounded-[2px] shadow-[0_6px_25px_rgba(139,107,43,0.12)] overflow-hidden"
        >
          {/* Ship Featured Image */}
          <div className="relative w-full aspect-[16/9] border-b border-old-gold/20 overflow-hidden group">
            <img
              src="/images/about-featured.jpg"
              alt="Albion Ship Journey"
              className="w-full h-full object-cover filter sepia-[0.1] contrast-[1.02]"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
          </div>

          {/* Card Body */}
          <div className="p-8 md:p-10">
            {/* Title */}
            <h2 className="font-heading text-2xl md:text-3xl text-crimson-maroon font-bold tracking-wider mb-6 text-left">
              ABOUT ME
            </h2>

            {/* Two-Column Bio Text */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans text-xs md:text-sm text-neutral-800 leading-relaxed">
              <div className="space-y-4">
                <p>
                  I am a dedicated <span className="text-[#E88A1F] font-semibold">Full Stack Developer</span> with a passion for building reliable, high-performance web applications. My development process focuses on clean architecture, seamless database integration, and creating highly responsive, intuitive user experiences that solve real-world problems.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  With expertise in modern frameworks like <span className="text-[#E88A1F] font-semibold">Flutter,Next.js, React, and Laravel</span>, I write optimized, maintainable code for both front-end interfaces and back-end APIs. I strive to deliver production-ready software solutions that strictly follow industry-standard security and scalability best practices.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
