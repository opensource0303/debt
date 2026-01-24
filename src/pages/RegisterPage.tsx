import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
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

    // 表单验证
    if (formData.password !== formData.confirmPassword) {
      toast.error('两次输入的密码不一致');
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      toast.error('密码长度至少为6位');
      setLoading(false);
      return;
    }

    try {
      // 模拟注册
      toast.success('注册成功！');
      navigate('/');
    } catch (error) {
      toast.error('注册失败，请稍后再试');
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
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6">
          <h2 className="text-3xl font-bold text-white text-center">注册</h2>
          <p className="text-purple-100 text-center mt-2">加入澳门债权交易中心</p>
        </div>
        
        <div className="p-6 md:p-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">用户名</label>
               <input
                 type="text"
                 id="username"
                 name="username"
                 value={formData.username}
                 onChange={handleChange}
                 required
                     className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors mobile-optimized form-input-mobile"
                     placeholder="请输入您的用户名"
                     style={{ touchAction: "manipulation" }}
                 />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">邮箱</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors form-input-mobile"
                  placeholder="请输入您的邮箱"
                  style={{ touchAction: "manipulation" }}
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">电话</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors form-input-mobile"
                  placeholder="请输入您的电话"
                  style={{ touchAction: "manipulation" }}
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">密码</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors form-input-mobile"
                  placeholder="请设置您的密码（至少6位）"
                  style={{ touchAction: "manipulation" }}
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">确认密码</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors form-input-mobile"
                  placeholder="请再次输入密码"
                  style={{ touchAction: "manipulation" }}
              />
            </div>
            
            <div className="mb-6">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="agreement"
                  className="w-4 h-4 mt-1 text-purple-600 dark:text-purple-400 focus:ring-purple-500 border-gray-300 dark:border-gray-700 rounded"
                  required
                />
                <label htmlFor="agreement" className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                  我已阅读并同意 <a href="#" className="text-purple-600 dark:text-purple-400 hover:underline">服务条款</a> 和 <a href="#" className="text-purple-600 dark:text-purple-400 hover:underline">隐私政策</a>
                </label>
              </div>
            </div>
            
            <button
                type="submit"
                disabled={loading}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 flex items-center justify-center mobile-touch-target"
                style={{ touchAction: "manipulation" }}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    注册中...
                  </>
                ) : "立即注册"}
              </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              已有账号？ <Link to="/login" className="text-purple-600 dark:text-purple-400 font-medium hover:underline">返回登录</Link>
            </p>
          </div>
        </div>
      </motion.div>
       </div>
      </div>
  );
};

export default RegisterPage;