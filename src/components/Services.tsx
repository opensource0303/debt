import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Services = () => {
  
  // 核心功能数据
  const services = [
    {
      title: "结构化债务登记",
      description: "支持手动录入和智能批量录入两种方式，通过OCR识别与自然语言处理技术自动提取关键要素，确保债务信息的标准化和完整性。",
      icon: "fa-file-invoice-dollar",
      color: "bg-blue-600"
    },
    {
      title: "社交网络匹配",
      description: "基于社交网络分析技术，构建人脉-债务关联拓扑图，挖掘隐性债务路径，识别债务聚集节点，提升闭环匹配效率。",
      icon: "fa-network-wired",
      color: "bg-green-600"
    },
    {
      title: "隐私计算与安全",
      description: "采用零知识证明和多方安全计算技术，在加密域内完成债务匹配，保护企业商业秘密和个人隐私，同时确保匹配准确性。",
      icon: "fa-shield-alt",
      color: "bg-indigo-600"
    },
    {
      title: "法律认可的清债证据链",
      description: "将债务登记信息、双向确权记录等关键节点数据实时上链，提供标准化冲抵协议和电子签章服务，形成完整、不可篡改的证据流。",
      icon: "fa-gavel",
      color: "bg-purple-600"
    },
    {
      title: "拆分冲抵功能",
      description: "针对债务金额不匹配场景，自动拆分债务金额，优先实现最大额度的闭环冲抵，剩余债务自动更新状态并重新进入待匹配池。",
      icon: "fa-calculator",
      color: "bg-amber-600"
    },
    {
      title: "债权转让市场",
      description: "为无法形成闭环的债务提供变现渠道，支持债权挂牌、精准匹配和交易保障，帮助债权人盘活存量资产。",
      icon: "fa-exchange-alt",
      color: "bg-red-600"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-900 bg-grid relative">
      {/* 装饰元素 */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -left-32 top-20 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl"
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">核心功能</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            "链清"平台提供全面的债务清偿服务，通过创新技术和商业模式，解决企业间及个人间的三角债问题
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden group hover:shadow-xl hover:border-blue-500/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className={`w-full p-6 flex items-start space-x-5`}>
                <motion.div 
                  className={`w-14 h-14 rounded-full ${service.color} flex items-center justify-center text-white`}
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <i className={`fas ${service.icon} text-2xl`}></i>
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              </div>
              <div className="px-6 pb-6 mt-auto">
                <motion.div 
                  className="h-0.5 w-12 bg-gray-700 group-hover:bg-blue-500 transition-colors duration-300"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
            <Link to="/solutions-cases">
              <button className="btn-primary text-lg px-8 py-4">
                阅读更多
              </button>
            </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;