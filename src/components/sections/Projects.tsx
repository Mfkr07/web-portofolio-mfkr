"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/lib/projects';

export const Projects = () => {
  // Use the 6 projects but render them in a clean 2-column layout matching the prototype
  return (
    <section id="projects" className="relative py-20 bg-parchment-texture text-deep-void">
      {/* Decorative top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[1px] bg-gradient-to-r from-transparent via-old-gold/20 to-transparent" />

      <div className="max-w-[960px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-2xl md:text-3xl text-crimson-maroon tracking-[3px] uppercase font-bold"
          >
            PROJECTS
          </motion.h2>
          <div className="w-16 h-[2px] bg-crimson-maroon/40 mx-auto mt-3" />
        </div>

        {/* Projects Grid - 2 Columns on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {projects.map((project) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              key={project.id}
              className="flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative w-full aspect-[16/9] overflow-hidden border border-old-gold/30 rounded-[2px] mb-4 bg-neutral-200">
                <img 
                  src={project.thumbnail} 
                  alt={project.title} 
                  className="w-full h-full object-cover filter contrast-[1.02] sepia-[0.1]"
                />
              </div>

              {/* Project Title (Small uppercase bold) */}
              <h3 className="font-heading text-xs font-bold text-crimson-maroon tracking-wider uppercase block">
                {project.title}
              </h3>

              {/* Short Description */}
              <p className="font-sans text-[13px] text-neutral-800 leading-relaxed mt-2">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
