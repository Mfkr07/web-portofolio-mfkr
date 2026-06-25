"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import { projects } from '@/lib/projects';

export const Projects = () => {
  return (
    <section id="projects" className="relative py-20 bg-parchment-texture text-deep-void">
      {/* Decorative top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[1px] bg-gradient-to-r from-transparent via-old-gold/20 to-transparent" />

      <div className="max-w-[1000px] mx-auto px-6 md:px-12">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
          {projects.map((project) => (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              key={project.id}
              className="flex flex-col justify-between h-full bg-[#FCFBF9] border border-old-gold/20 hover:border-old-gold/50 p-6 rounded-[2px] shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div>
                {/* Decorative Tech Banner Placeholder */}
                <div className="relative w-full aspect-[16/9] overflow-hidden border border-old-gold/25 rounded-[1px] mb-5 bg-gradient-to-br from-[#2D2214] to-[#120E08] flex flex-col justify-between p-4 gilded-border gilded-corners shadow-[inset_0_0_20px_rgba(0,0,0,0.6)]">
                  {/* Decorative faint alchemical circles in background */}
                  <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_center,_#C9A84C_1px,_transparent_1px)] bg-[size:16px_16px]" />
                  
                  {/* Category Pill */}
                  <span className="self-start font-mono text-[9px] uppercase tracking-wider text-old-gold border border-old-gold/30 bg-old-gold/5 px-2 py-0.5 rounded-[1px]">
                    {project.category}
                  </span>

                  {/* Centered Graphic */}
                  <div className="flex flex-col items-center justify-center flex-grow text-old-gold/30 group-hover:text-old-gold/60 transition-colors duration-300">
                    <Code2 size={40} className="stroke-[1.25]" />
                  </div>

                  {/* Tech Badges at Bottom */}
                  <div className="flex flex-wrap gap-1.5 z-10">
                    {project.tech.map((t) => (
                      <span 
                        key={t}
                        className="font-mono text-[8px] uppercase tracking-[1px] bg-old-gold/10 text-[#E8B84B] px-1.5 py-0.5 rounded-[1px] border border-old-gold/15"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="font-heading text-[13px] font-bold text-crimson-maroon tracking-wider uppercase block">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="font-sans text-[13px] text-neutral-800 leading-relaxed mt-2.5">
                  {project.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-old-gold/10">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 font-heading text-[10px] font-bold tracking-[2px] text-crimson-maroon hover:text-ember-gold transition-colors uppercase group/btn"
                >
                  <Github size={13} className="text-crimson-maroon group-hover/btn:text-ember-gold transition-colors" />
                  <span>View Repository</span>
                  <ExternalLink size={9} className="opacity-50 group-hover/btn:opacity-100 group-hover/btn:translate-x-[1px] transition-all" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
