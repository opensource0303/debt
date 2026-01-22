import { Routes, Route, useLocation } from "react-router-dom";
import Home from "@/pages/Home";
import SolutionCasesPage from '@/pages/SolutionCasesPage';
import MacauAdvantagesPage from '@/pages/MacauAdvantagesPage';
import PlatformModePage from '@/pages/PlatformModePage';
import ContactPage from '@/pages/ContactPage';
import SolutionPage from '@/pages/SolutionPage';

// 简化滚动到顶部逻辑
const ScrollToTop = () => {
  const location = useLocation();
  
  // 使用 useLayoutEffect 替代 useEffect 以获得更好的性能
  useLocation();
  
  return null;
};

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
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
