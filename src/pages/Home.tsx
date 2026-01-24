import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// 组件导入
import Hero from '@/components/Hero';
import About from '@/components/About';
import Advantages from '@/components/Advantages';

export default function Home() {
  // 检测是否为移动设备
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // 检测设备类型
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile, { passive: true });
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

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
     <div className="min-h-screen text-white tech-gradient-bg smooth-scroll">
      <div className="bg-overlay min-h-screen">
        <Navbar />
         <main className="pb-16 overflow-x-hidden">
           <Hero />
           <About className="mt-24" />
           <Advantages className="mt-24" />
         </main>
         <Footer />
      </div>
    </div>
  );
}