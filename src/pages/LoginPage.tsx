import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 模拟登录验证
      if (formData.username && formData.password) {
        toast.success('登录成功！');
        navigate('/');
      } else {
        toast.error('用户名或密码错误，请重试');
      }
    } catch (error) {
      toast.error('登录失败，请稍后再试');
    } finally {
      setLoading(false);
    }
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
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
          <h2 className="text-3xl font-bold text-white text-center">登录</h2>
          <p className="text-blue-100 text-center mt-2">欢迎回到澳门债权交易中心</p>
        </div>
        
        <div className="p-6 md:p-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="username" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">用户名</label>
               <input
                 type="text"
                 id="username"
                 name="username"
                 value={formData.username}
                 onChange={handleChange}
                 required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors mobile-optimized form-input-mobile"
            placeholder="请输入您的用户名"
            style={{ touchAction: "manipulation" }}
                 />
            </div>
            
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">密码</label>
                    <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors mobile-optimized form-input-mobile"
          placeholder="请输入您的密码"
          style={{ touchAction: "manipulation" }}
              />
            </div>
            
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 text-blue-600 dark:text-blue-400 focus:ring-blue-500 border-gray-300 dark:border-gray-700 rounded"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-600 dark:text-gray-400">记住我</label>
              </div>
              <Link to="/forgot-password" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">忘记密码？</Link>
            </div>
            
            <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center mobile-touch-target"
                style={{ touchAction: "manipulation" }}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    登录中...
                  </>
                ) : "登录"}
              </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              还没有账号？ <Link to="/register" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">立即注册</Link>
            </p>
          </div>
          
          <div className="mt-8">
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
              </div>
              <div className="relative px-4 bg-white dark:bg-gray-800">
                <span className="text-sm text-gray-500 dark:text-gray-400">其他登录方式</span>
              </div>
            </div>
            
            <div className="mt-4 grid grid-cols-3 gap-4">
              <button className="inline-flex justify-center items-center py-2 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 mobile-touch-target">
                <i className="fab fa-weixin text-green-500 text-xl"></i>
              </button>
              <button className="inline-flex justify-center items-center py-2 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 mobile-touch-target">
                <i className="fab fa-qq text-blue-500 text-xl"></i>
              </button>
              <button className="inline-flex justify-center items-center py-2 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 mobile-touch-target">
                <i className="fab fa-linkedin text-blue-700 text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
       </div>
      </div>
  );
};

export default LoginPage;