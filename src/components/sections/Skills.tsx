"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '@/lib/skills';
import { SkillIcon } from '../ui/SkillIcons';

export const Skills = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  // Triple the skills array to ensure enough width for seamless loop
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <section id="skills" className="relative py-20 bg-parchment-texture text-deep-void overflow-hidden">
      {/* Decorative divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[1px] bg-gradient-to-r from-transparent via-old-gold/20 to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Title */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-2xl md:text-3xl text-crimson-maroon tracking-[3px] uppercase font-bold"
          >
            TECHNICAL SKILLS
          </motion.h2>
          <div className="w-16 h-[2px] bg-crimson-maroon/40 mx-auto mt-3" />
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        {/* Shadow Overlay Left & Right for Depth */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F0E6D0] via-[#F0E6D0]/60 to-transparent z-30 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F0E6D0] via-[#F0E6D0]/60 to-transparent z-30 pointer-events-none" />

        {/* Scrolling Row */}
        <div className="animate-marquee-ltr flex gap-6 md:gap-8 hover:[animation-play-state:paused] py-2 px-4">
          {duplicatedSkills.map((skill, index) => {
            return (
              <div
                key={`${skill.name}-${index}`}
                className="flex flex-col items-center flex-shrink-0 group select-none transition-transform duration-300 hover:scale-105"
              >
                {/* Frame and Icon Container */}
                <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
                  {/* T8 Masterpiece Frame Overlay */}
                  <img 
                    src={`${basePath}/images/frame_T8_masterpiece-removebg-preview.png`} 
                    alt="T8 Masterpiece Frame"
                    className="absolute inset-0 w-full h-full object-contain z-10 pointer-events-none transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(232,184,75,0.7)]"
                  />

                  {/* Skill Icon - Centered inside the frame, rendered on top of the frame center */}
                  <div className="z-20 flex items-center justify-center w-10 h-10 md:w-12 md:h-12">
                    <SkillIcon 
                      name={skill.iconName} 
                      className="w-full h-full filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] brightness-110 contrast-110 group-hover:scale-110 transition-transform duration-300" 
                    />
                  </div>
                </div>

                {/* Skill Name - Displayed below the frame */}
                <span className="font-heading text-[10px] md:text-xs font-bold text-neutral-800 mt-2 text-center tracking-wide uppercase group-hover:text-crimson-maroon transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
