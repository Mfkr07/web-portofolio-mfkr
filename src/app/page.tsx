import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/sections/Hero';
import { AboutMe } from '@/components/sections/AboutMe';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
