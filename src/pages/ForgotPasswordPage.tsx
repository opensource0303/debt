import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const ForgotPasswordPage = () => {
  const [formData, setFormData] = useState({
    email: ''
  });
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // 模拟API请求延迟
    setTimeout(() => {
      // 简单的模拟发送重置密码邮件逻辑
      if (formData.email) {
        setEmailSent(true);
        toast.success('重置密码邮件已发送，请查收！');
      } else {
        toast.error('请输入您的邮箱');
      }
      setLoading(false);
    }, 1000);
  };

  const handleBackToLogin = () => {
    navigate('/login');
  };

  return (
      <div className="min-h-screen tech-gradient-bg flex items-center justify-center py-12 px-4">
       <div className="bg-overlay min-h-screen absolute inset-0 opacity-70"></div>
      <div className="relative z-10 w-full max-w-md px-4 safe-top safe-bottom">
      <motion.div 
        className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-6">
          <h2 className="text-3xl font-bold text-white text-center">重置密码</h2>
          <p className="text-indigo-100 text-center mt-2">找回您的账号访问权限</p>
        </div>
        
        <div className="p-6 md:p-8">
          {!emailSent ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">邮箱</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors mobile-optimized form-input-mobile"
    placeholder="请输入您注册时使用的邮箱"
    style={{ touchAction: "manipulation" }}
    />
  </div>
                
              <div className="mb-6">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  我们将向您的邮箱发送重置密码的链接，请按照邮件中的指示操作。
                </p>
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 flex items-center justify-center mobile-touch-target"
                style={{ touchAction: "manipulation" }}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    发送中...
                  </>
                ) : "发送重置链接"}
              </button>
            </form>
          ) : (
            <div className="text-center">
              <div className="text-6xl text-green-500 mb-6">
                <i className="fas fa-check-circle"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">邮件已发送</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                我们已向您的邮箱 <strong>{formData.email}</strong> 发送了重置密码的链接，请查收邮件并按照指示操作。
              </p>
              <button
                onClick={handleBackToLogin}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 mobile-touch-target"
                style={{ touchAction: "manipulation" }}
              >
                返回登录
              </button>
            </div>
          )}
          
          <div className="mt-6 text-center">
            <button
              onClick={handleBackToLogin}
              className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
            >
              <i className="fas fa-arrow-left mr-1"></i> 返回登录页面
            </button>
          </div>
        </div>
      </motion.div>
       </div>
      </div>
  );
};

export default ForgotPasswordPage;