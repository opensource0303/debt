import React, { Suspense, lazy, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// 优化导入方式
import Hero from '@/components/Hero';
import About from '@/components/About';
import Advantages from '@/components/Advantages';
import News from '@/components/News';
import Contact from '@/components/Contact';

export default function Home() {
  // 优化背景动画性能
  useEffect(() => {
    const html = document.documentElement;
    // 添加硬件加速提示
    html.style.willChange = 'background-position';
    return () => {
      html.style.willChange = '';
    };
  }, []);

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