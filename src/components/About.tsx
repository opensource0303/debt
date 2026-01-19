import React from 'react';
import { motion } from 'framer-motion';

const About = () => {  
  return (
    <section id="about" className="py-20 bg-gray-900 bg-grid relative">
      {/* 装饰元素 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-blue-600/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">产品概述</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            "链清"是一款聚焦企业间及个人间"三角债"痛点的数字化互助清偿平台，核心逻辑是通过"债务登记确权+社交网络拓扑匹配+隐私计算技术赋能"，实现债务自动冲抵。
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div
                className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-75"></div>
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=debt%20network%20visualization%20with%20privacy%20computing%20concept&sign=cb9c5db5985584e606d3986ef2835e32"
                alt="Cred Platform Concept"
                className="relative z-10 rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">核心理念与价值主张</h3>
          <p className="text-gray-200 mb-6 leading-relaxed">
            "链清"平台无需新增资金注入，通过优化债务关系流转效率，降低全社会整体负债规模，为企业及个人提供低成本、高效率、强合规的债务清偿解决方案，同时盘活存量债权资产，改善市场信用环境。
            </p>
            
            <h4 className="text-xl font-bold text-white mb-4">核心价值主张</h4>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="text-blue-400 mr-3 mt-1">
                  <i className="fas fa-user-check"></i>
                </div>
                <div>
                  <h5 className="font-semibold mb-1 text-white">对用户</h5>
                  <p className="text-gray-300">低成本解决债务纠纷，快速盘活沉淀债权，降低坏账风险</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-blue-400 mr-3 mt-1">
                  <i className="fas fa-chart-line"></i>
                </div>
                <div>
                  <h5 className="font-semibold mb-1 text-white">对市场</h5>
                  <p className="text-gray-300">提升资金流转效率，缓解三角债对经济循环的阻滞，优化供应链信用生态</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-blue-400 mr-3 mt-1">
                  <i className="fas fa-gavel"></i>
                </div>
                <div>
                  <h5 className="font-semibold mb-1 text-white">对监管</h5>
                  <p className="text-gray-300">形成标准化债务清偿证据链，助力规范市场信用秩序，提供债务风险监测数据支撑</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                <div className="text-blue-400 text-3xl font-bold mb-2">社交网络</div>
                <div className="text-gray-300">挖掘隐性债务路径</div>
              </div>
              <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                <div className="text-blue-400 text-3xl font-bold mb-2">隐私计算</div>
                <div className="text-gray-300">保护商业秘密</div>
              </div>
              <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                <div className="text-blue-400 text-3xl font-bold mb-2">双向确权</div>
                <div className="text-gray-300">确保债务真实性</div>
              </div>
              <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                <div className="text-blue-400 text-3xl font-bold mb-2">区块链存证</div>
                <div className="text-gray-300">提供法律保障</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;