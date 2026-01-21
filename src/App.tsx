import { useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "@/pages/Home";
import SolutionCasesPage from '@/pages/SolutionCasesPage';
import MacauAdvantagesPage from '@/pages/MacauAdvantagesPage';
import PlatformModePage from '@/pages/PlatformModePage';
import ContactPage from '@/pages/ContactPage';
import SolutionPage from '@/pages/SolutionPage';

// 滚动到顶部组件
const ScrollToTop = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location]);
  
  return null;
};

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* 使用 React.lazy 进行组件懒加载 */}
        <Route path="/" element={<Home />} />
        <Route path="/solutions-cases" element={<SolutionCasesPage />} />
        <Route path="/macau-advantages" element={<MacauAdvantagesPage />} />
        <Route path="/platform-mode" element={<PlatformModePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/solution" element={<SolutionPage />} />
      </Routes>
    </>
  );
}
