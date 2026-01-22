import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// 组件导入
import Hero from '@/components/Hero';
import About from '@/components/About';
import Advantages from '@/components/Advantages';
import News from '@/components/News';
import Contact from '@/components/Contact';

export default function Home() {
  // 检测是否为移动设备
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // 检测设备类型
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
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

  // 性能优化：在移动设备上减少不必要的复杂动画
  useEffect(() => {
    if (isMobile) {
      // 简化某些动画效果以提高移动设备性能
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('mobile-simplify');
            }
          });
        },
        { threshold: 0.1 }
      );

      // 为需要优化的元素添加观察器
      document.querySelectorAll('.card-hover, .animate-fadeIn').forEach(el => {
        observer.observe(el);
      });

      return () => {
        observer.disconnect();
      };
    }
  }, [isMobile]);
  
  // 优化组件渲染性能 - 避免不必要的重渲染

   return (
    <div className="min-h-screen text-white tech-gradient-bg smooth-scroll">
      <div className="bg-overlay min-h-screen">
        <Navbar />
        <main className="pb-12">
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