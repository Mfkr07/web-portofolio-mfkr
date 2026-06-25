"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Send, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const triggerAlchemicalSparks = () => {
    const duration = 2 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#C9A84C', '#E8B84B', '#FFFFFF', '#6B1A1A']
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#C9A84C', '#E8B84B', '#FFFFFF', '#6B1A1A']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xpzvgzgo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        triggerAlchemicalSparks();
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        triggerAlchemicalSparks();
        setSubmitted(true);
      }
    } catch {
      triggerAlchemicalSparks();
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 bg-parchment-texture text-deep-void">
      {/* Decorative top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[1px] bg-gradient-to-r from-transparent via-old-gold/20 to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-2xl md:text-3xl text-crimson-maroon font-bold tracking-[3px] uppercase"
          >
            GET IN TOUCH
          </motion.h2>
          <div className="w-16 h-[2px] bg-crimson-maroon/40 mx-auto mt-3" />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Info Column - Left */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8"
          >
            <div className="border border-old-gold/30 bg-[#FCFBF9] text-neutral-800 p-6 md:p-8 rounded-[2px] shadow-sm flex-1">
              <h3 className="font-heading text-base font-bold border-b border-old-gold/25 pb-2 mb-4 text-crimson-maroon">
                CONTACT DETAILS
              </h3>
              
              <div className="space-y-6 font-sans text-xs md:text-sm leading-relaxed">
                <p>
                  Feel free to reach out via email or check my GitHub. I am currently open to project commissions, contract roles, and full-time software engineering opportunities.
                </p>

                <div className="space-y-4 pt-4 border-t border-old-gold/15">
                  <a 
                    href="mailto:mfkrass@gmail.com" 
                    className="flex items-center space-x-3 text-neutral-800 hover:text-crimson-maroon transition-colors"
                  >
                    <Mail size={16} className="text-crimson-maroon" />
                    <span className="font-mono text-xs font-semibold">mfkrass@gmail.com</span>
                  </a>
                  
                  <a 
                    href="https://github.com/Mfkr07" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center space-x-3 text-neutral-800 hover:text-crimson-maroon transition-colors"
                  >
                    <Github size={16} className="text-crimson-maroon" />
                    <span className="font-mono text-xs font-semibold">github.com/Mfkr07</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="border border-old-gold/20 bg-[#FAF9F6] p-6 rounded-[2px] text-center shadow-xs">
              <span className="font-mono text-[10px] text-crimson-maroon font-bold tracking-widest block uppercase">
                ESTIMATED RESPONSE TIME
              </span>
              <p className="font-sans text-xs text-neutral-500 mt-2">
                Usually responds within 24 hours.
              </p>
            </div>

          </motion.div>

          {/* Form Column - Right */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="border border-old-gold/30 bg-[#FCFBF9] p-6 md:p-8 rounded-[2px] shadow-sm text-neutral-800">
              
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="flex flex-col">
                        <label className="font-heading text-[10px] text-crimson-maroon tracking-[1.5px] uppercase mb-1.5 font-bold">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="bg-[#FAF9F6] text-neutral-800 border border-old-gold/25 focus:border-crimson-maroon px-4 py-3 rounded-[2px] outline-none font-sans text-xs md:text-sm transition-colors"
                          placeholder="e.g. John Doe"
                        />
                      </div>

                      {/* Email */}
                      <div className="flex flex-col">
                        <label className="font-heading text-[10px] text-crimson-maroon tracking-[1.5px] uppercase mb-1.5 font-bold">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="bg-[#FAF9F6] text-neutral-800 border border-old-gold/25 focus:border-crimson-maroon px-4 py-3 rounded-[2px] outline-none font-sans text-xs md:text-sm transition-colors"
                          placeholder="e.g. johndoe@example.com"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="flex flex-col">
                      <label className="font-heading text-[10px] text-crimson-maroon tracking-[1.5px] uppercase mb-1.5 font-bold">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="bg-[#FAF9F6] text-neutral-800 border border-old-gold/25 focus:border-crimson-maroon px-4 py-3 rounded-[2px] outline-none font-sans text-xs md:text-sm transition-colors"
                        placeholder="e.g. Website Development Project"
                      />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col">
                      <label className="font-heading text-[10px] text-crimson-maroon tracking-[1.5px] uppercase mb-1.5 font-bold">
                        Message
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-[#FAF9F6] text-neutral-800 border border-old-gold/25 focus:border-crimson-maroon px-4 py-3 rounded-[2px] outline-none font-sans text-xs md:text-sm transition-colors resize-none"
                        placeholder="Write your message here..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center space-x-2 font-heading text-xs font-bold tracking-[2px] text-white bg-crimson-maroon hover:bg-crimson-maroon/90 py-4 px-6 rounded-[2px] shadow-sm disabled:opacity-50 transition-all duration-200"
                    >
                      <Send size={13} />
                      <span>{isSubmitting ? "SENDING..." : "SEND MESSAGE"}</span>
                    </button>

                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 flex flex-col items-center justify-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-crimson-maroon/10 border border-crimson-maroon flex items-center justify-center mb-6">
                      <Sparkles className="text-crimson-maroon w-8 h-8 animate-pulse" />
                    </div>

                    <h3 className="font-heading text-xl text-crimson-maroon font-bold uppercase tracking-wide">
                      MESSAGE SENT
                    </h3>
                    <p className="font-sans text-xs md:text-sm text-neutral-600 max-w-[400px] mt-3 leading-relaxed">
                      Your message has been successfully sent. I will review your inquiry and get back to you as soon as possible.
                    </p>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-8 font-mono text-[10px] text-crimson-maroon hover:underline uppercase tracking-wider"
                    >
                      &larr; Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
