import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Advantages from '@/components/Advantages';
import News from '@/components/News';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen text-white tech-gradient-bg">
      <div className="bg-overlay min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Advantages />
          <News />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}