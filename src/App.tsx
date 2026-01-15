import { Routes, Route, useLocation } from "react-router-dom";
import Home from "@/pages/Home";
import { useState, useEffect } from "react";
import { AuthContext, User } from '@/contexts/authContext';
import SolutionPage from '@/pages/SolutionPage';
import InternationalCasesPage from '@/pages/InternationalCasesPage';
import PlatformModePage from '@/pages/PlatformModePage';
import CoreAdvantagesPage from '@/pages/CoreAdvantagesPage';
import ContactPage from '@/pages/ContactPage';
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';
import ForgotPasswordPage from '@/pages/ForgotPasswordPage';
import CreditorRightRegistrationPage from '@/pages/CreditorRightRegistrationPage';
import DebtConfirmationPage from '@/pages/DebtConfirmationPage';
import { LanguageProvider } from '@/contexts/languageContext';

// 滚动到顶部组件
const ScrollToTop = () => {
  const location = useLocation();
  
  useEffect(() => {
    // 当路由改变时，滚动到页面顶部
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location]);
  
  return null;
};

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  // 模拟登录功能
  const login = async (username: string, password: string): Promise<boolean> => {
    // 这里应该是实际的API调用，现在使用模拟数据
    return new Promise((resolve) => {
      setTimeout(() => {
        if (username && password) {
          setIsAuthenticated(true);
          setUser({
            id: 'user-1',
            username,
            email: `${username}@example.com`,
            role: 'user',
            isAuthenticated: true
          });
          resolve(true);
        } else {
          resolve(false);
        }
      }, 500);
    });
  };

  // 模拟注册功能
  const register = async (username: string, email: string, password: string): Promise<boolean> => {
    // 这里应该是实际的API调用，现在使用模拟数据
    return new Promise((resolve) => {
      setTimeout(() => {
        if (username && email && password) {
          setIsAuthenticated(true);
          setUser({
            id: `user-${Date.now()}`,
            username,
            email,
            role: 'user',
            isAuthenticated: true
          });
          resolve(true);
        } else {
          resolve(false);
        }
      }, 500);
    });
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <LanguageProvider>
      <AuthContext.Provider
        value={{ 
          isAuthenticated, 
          setIsAuthenticated, 
          logout,
          user,
          setUser,
          login,
          register
        }}
      >
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solution" element={<SolutionPage />} />
          <Route path="/international-cases" element={<InternationalCasesPage />} />
          <Route path="/platform-mode" element={<PlatformModePage />} />
          <Route path="/core-advantages" element={<CoreAdvantagesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/creditor-right-registration" element={<CreditorRightRegistrationPage />} />
          <Route path="/debt-confirmation" element={<DebtConfirmationPage />} />
        </Routes>
      </AuthContext.Provider>
    </LanguageProvider>
  );
}
