import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
// 使用 React.memo 优化组件性能


const Contact = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 模拟表单提交
    toast.success('您的信息已提交成功，我们将尽快与您联系！');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* 装饰元素 */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute right-0 bottom-0 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        ></motion.div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">联系我们</h2>
          <p className="section-description">
            如有任何关于澳门多角债解决平台的问题或合作意向，请随时与我们联系。
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-900/70 backdrop-blur-md p-8 rounded-2xl border border-gray-700 hover:shadow-xl hover:border-blue-500/30 transition-all duration-300"
          >
              <h3 className="text-2xl font-bold text-white mb-8">联系我们</h3>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="text-blue-400 text-xl mt-1 bg-blue-900/30 w-12 h-12 rounded-full flex items-center justify-center">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">办公地址</h4>
                    <p className="text-gray-300">珠海市横琴华发商都</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-blue-400 text-xl mt-1 bg-blue-900/30 w-12 h-12 rounded-full flex items-center justify-center">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">联系电话</h4>
                    <p className="text-gray-300">+853-2888-8888</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-blue-400 text-xl mt-1 bg-blue-900/30 w-12 h-12 rounded-full flex items-center justify-center">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">电子邮箱</h4>
                    <p className="text-gray-300">bruce@cred.top</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-blue-400 text-xl mt-1 bg-blue-900/30 w-12 h-12 rounded-full flex items-center justify-center">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">工作时间</h4>
                    <p className="text-gray-300">周一至周五: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="text-lg font-semibold mb-4">关注我们</h4>
                <div className="flex space-x-4">
                  {['weixin', 'weibo', 'linkedin', 'twitter'].map((social, index) => (
                    <motion.a 
                      key={index}
                      href="#" 
                      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-blue-400 hover:bg-blue-900/30 transition-all duration-300"
                      whileHover={{ y: -3, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className={`fab fa-${social}`}></i>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-gray-900/70 backdrop-blur-md p-8 rounded-2xl border border-gray-700 hover:shadow-xl hover:border-blue-500/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">发送咨询</h3>
              
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">姓名</label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors mobile-optimized"
                  placeholder="请输入您的姓名"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">邮箱</label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors mobile-optimized"
                  placeholder="请输入您的邮箱"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-300 mb-2 font-medium">电话</label>
                <motion.input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors mobile-optimized"
                  placeholder="请输入您的电话"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />
              </div>
              
              <div className="mb-8">
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">留言内容</label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors mobile-optimized"
                  placeholder="请输入您关于平台的问题或合作意向"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                ></motion.textarea>
              </div>
              
              <motion.button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                发送咨询
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Contact);