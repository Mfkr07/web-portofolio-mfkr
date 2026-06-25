"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CounterProps {
  end: number;
  suffix: string;
  duration?: number;
}

const StatCounter: React.FC<CounterProps> = ({ end, suffix, duration = 1500 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden pt-20 md:pt-24 pb-8 md:pb-12 bg-deep-void">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/images/Hero2.jpeg')",
        }}
      />
      {/* Dark overlay matching the design */}
      <div className="absolute inset-0 bg-gradient-to-t from-deep-void via-deep-void/50 to-deep-void/25 z-1" />

      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12 z-10 flex flex-col md:flex-row items-center md:items-start justify-between min-h-[520px] md:min-h-[620px] pb-12">

        {/* Profile Photo - Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative w-[280px] h-[340px] md:w-[420px] md:h-[520px] lg:w-[460px] lg:h-[580px] flex items-end justify-start order-2 md:order-1 mt-8 md:mt-0"
        >
          {/* Masked profile cutout with a fade-out at the bottom */}
          <div
            className="w-full h-full bg-contain bg-bottom bg-no-repeat"
            style={{
              backgroundImage: "url('/images/profile-removebg-preview.png')",
              maskImage: "linear-gradient(to top, transparent 0%, black 15%)",
              WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 15%)"
            }}
          />
        </motion.div>

        {/* Text and Stats - Right Side */}
        <div className="flex-1 md:pl-24 lg:pl-32 text-center md:text-left order-1 md:order-2 flex flex-col justify-start md:pt-36 pb-6">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-mono text-xs text-old-gold font-bold tracking-[4px] uppercase italic mb-1"
          >
            FULL STACK UNEMPLOYMENT
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-display text-4xl sm:text-5xl lg:text-[60px] font-bold text-white leading-none tracking-wide mb-2"
          >
            M. FAKHRI ASSHOFI
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="font-sans text-sm italic text-smoke-white/80 mb-14 pl-1"
          >
            Building responsive, clean, and high-performance web applications with modern technologies.
          </motion.p>

          {/* Stat Counters Section - Custom Horizontal Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-row space-x-10 sm:space-x-14 md:space-x-16 justify-center md:justify-start w-full"
          >
            {/* Stat 1 */}
            <div className="flex flex-col text-left">
              <span className="font-display text-3xl md:text-4xl text-old-gold font-bold">
                <StatCounter end={200} suffix="-" />
              </span>
              <span className="font-sans text-[10px] text-smoke-white/50 tracking-wide mt-1">
                Projects Completed
              </span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col text-left">
              <span className="font-display text-3xl md:text-4xl text-old-gold font-bold">
                <StatCounter end={300} suffix="+" />
              </span>
              <span className="font-sans text-[10px] text-smoke-white/50 tracking-wide mt-1">
                Manga/hwa/hua read
              </span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col text-left">
              <span className="font-display text-3xl md:text-4xl text-old-gold font-bold">
                <StatCounter end={2050} suffix="+" />
              </span>
              <span className="font-sans text-[10px] text-smoke-white/50 tracking-wide mt-1">
                Hours in Albion online
              </span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
