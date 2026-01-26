import { Routes, Route, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import Home from "@/pages/Home";
import PlatformModePage from '@/pages/PlatformModePage';
import ContactPage from '@/pages/ContactPage';
import SolutionPage from '@/pages/SolutionPage';
import ProductServicePage from '@/pages/ProductServicePage';

// 优化滚动到顶部功能 - 增强移动端体验
const ScrollToTop = () => {
  const location = useLocation();
  
  // 使用 useLayoutEffect 替代 useEffect 以获得更好的性能
  useLayoutEffect(() => {
    // 移动设备上使用直接滚动以提高性能
    if (window.innerWidth < 768) {
      // 为移动设备优化滚动性能
      window.scrollTo({
        top: 0,
        behavior: 'instant' // 直接滚动，不使用平滑效果
      });
    } else {
      // 桌面设备使用平滑滚动
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [location]);
  
  return null;
};

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/platform-mode" element={<PlatformModePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/solution" element={<SolutionPage />} />
        <Route path="/product-services" element={<ProductServicePage />} />
      </Routes>
    </>
  );
}
