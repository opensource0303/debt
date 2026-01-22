import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const About = () => {
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
  
  return (
    <section id="about" className="py-24 relative">
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
          <h2 className="section-title">关于我们</h2>
          <p className="section-description">
            Cred可信达，信任驱动，智能引领。致力于解决中国企业与政府的债务问题，激活资产潜力，连接全球资金，推动经济高效、可持续发展。凭借AAA级信用保障，我们打造一个安全、智能、可靠的国际化资产交易与管理平台。
          </p>
        </motion.div>
        
        <div className={`${isMobile ? 'flex flex-col' : 'grid md:grid-cols-2'} gap-12 lg:gap-16 items-center`}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`${isMobile ? 'order-2 mt-8' : ''}`}
          >
            <div className="relative">
              <div 
                className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-75"
                animate={{
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              ></div>
              <motion.img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=debt%20network%20visualization%20with%20privacy%20computing%20concept&sign=cb9c5db5985584e606d3986ef2835e32"
                alt="Cred Platform Concept"
                className="relative z-10 rounded-2xl shadow-xl w-full h-auto"
                loading="lazy"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={isMobile ? 'order-1' : ''}
          >
            <h3 className={`font-bold text-white mb-6 ${isMobile ? 'text-xl md:text-2xl text-center' : 'text-2xl md:text-3xl'}`}>核心价值</h3>
            <p className={`text-gray-300 mb-8 leading-relaxed ${isMobile ? 'text-base md:text-lg' : 'text-xl'}`}>
              "可信达"平台通过创新技术和商业模式，为解决三角债问题提供了全面、高效、安全的解决方案，实现债务有效清偿和资产盘活。
            </p>
            
            <div className="grid grid-cols-1 gap-6 mb-12">
              <motion.div 
                className="bg-gray-900/70 backdrop-blur-md p-6 rounded-xl border border-gray-700"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-blue-400 text-2xl font-bold mb-2 flex items-center">
                  <i className="fas fa-flag mr-3"></i>为国分忧，为企排雷
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-gray-900/70 backdrop-blur-md p-6 rounded-xl border border-gray-700"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-blue-400 text-2xl font-bold mb-2 flex items-center">
                  <i className="fas fa-magic mr-3"></i>化债化得好，腐朽变神奇
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-gray-900/70 backdrop-blur-md p-6 rounded-xl border border-gray-700"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-blue-400 text-2xl font-bold mb-2 flex items-center">
                  <i className="fas fa-butterfly mr-3"></i><i className="fas fa-arrow-up-right-from-square mr-3"></i>助力解困，化茧成蝶
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(About);