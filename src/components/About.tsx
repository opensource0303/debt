import React from 'react';
import { motion } from 'framer-motion';

const About = () => {  
  return (
    <section id="about" className="py-24 bg-gray-900 bg-grid relative">
      {/* 装饰元素 */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute right-0 bottom-0 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl"
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">产品概述</h2>
           <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              "可信达"平台利用权威区块链技术和隐私计算，专注于解决企业间及个人间的三角债、多角债问题，通过数字化、标准化和市场化手段，实现债务有效清偿和资产盘活。
            </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
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
          >
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">核心价值</h3>
                         <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                           "可信达"平台通过创新技术和商业模式，为解决三角债问题提供了全面、高效、安全的解决方案，实现债务有效清偿和资产盘活。
                         </p>
                        
                        <div className="grid grid-cols-1 gap-5 mb-10">
                          <motion.div 
                            className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
                            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="text-blue-400 text-2xl font-bold mb-2 flex items-center">
                              <i className="fas fa-flag mr-3"></i>为国分忧，为企排雷
                            </div>
                          </motion.div>
                          
                          <motion.div 
                            className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
                            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="text-blue-400 text-2xl font-bold mb-2 flex items-center">
                              <i className="fas fa-magic mr-3"></i>化债化得好，腐朽变神奇
                            </div>
                          </motion.div>
                          
                          <motion.div 
                            className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
                            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="text-blue-400 text-2xl font-bold mb-2 flex items-center">
                              <i className="fas fa-butterfly mr-3"></i>助力解困，化茧成蝶
                            </div>
                          </motion.div>
                        </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;