import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Advantages = () => {
  
  // 产品优势数据
  const advantages = [
    {
      title: "低成本高效",
      description: "无需新增资金注入，通过优化债务关系流转效率，降低全社会整体负债规模，为企业提供低成本解决方案。",
      icon: "fa-chart-pie"
    },
    {
      title: "隐私保护",
      description: "采用零知识证明和多方安全计算技术，在严格保护参与方商业秘密与隐私信息的前提下，精准挖掘债务闭环。",
      icon: "fa-user-shield"
    },
    {
      title: "法律保障",
      description: "区块链存证和电子签章技术确保债务清偿全流程具备法律效力，为后续司法衔接提供标准化证据。",
      icon: "fa-gavel"
    },
    {
      title: "社交网络匹配",
      description: "基于社交网络分析技术，构建人脉-债务关联拓扑图，挖掘隐性债务路径，提升闭环匹配效率。",
      icon: "fa-network-wired"
    },
    {
      title: "灵活的拆分冲抵",
      description: "针对债务金额不匹配场景，自动拆分债务金额，优先实现最大额度的闭环冲抵，提升资金使用效率。",
      icon: "fa-calculator"
    },
    {
      title: "多渠道变现",
      description: "通过债权转让市场，为无法形成闭环的债务提供变现渠道，帮助债权人盘活存量资产。",
      icon: "fa-exchange-alt"
    }
  ];

  return (
    <section id="advantages" className="py-20 bg-gray-900 bg-grid relative">
      {/* 装饰元素 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-1/2 w-80 h-80 bg-blue-600/10 rounded-full filter blur-3xl transform -translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">产品优势</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            "链清"平台通过创新技术和商业模式，为解决三角债问题提供了全面、高效、安全的解决方案。
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-5 p-6 bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-blue-400 text-2xl mt-1">
                <i className={`fas ${advantage.icon}`}></i>
              </div>
              <div>
               <h3 className="text-xl font-bold text-white mb-2">{advantage.title}</h3>
               <p className="text-gray-200">{advantage.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-10 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">了解更多产品优势</h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            "链清"平台不仅解决债务问题，更能盘活存量债权资产，改善市场信用环境，为经济运行提供低成本"润滑剂"。
          </p>
          <Link to="/solutions-cases">
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full text-lg font-medium transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
              阅读更多
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Advantages;