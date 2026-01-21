import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  
  // 核心功能数据
  const services = [
    {
      title: "三角债、多角债清算",
      description: "利用权威区块链技术和隐私计算，为省/市、园区/行业/核心企业提供专项化债清算服务，实现债务高效冲抵。",
      icon: "fa-balance-scale",
      color: "bg-blue-600"
    },
    {
      title: "澳门交易所(MOX)合作发债",
      description: "与澳门交易所深度合作，增强融资能力，为企业提供多元化融资渠道，降低融资成本。",
      icon: "fa-exchange-alt",
      color: "bg-green-600"
    },
    {
      title: "数字化电子债权凭证多级流转 ABS",
      description: "利用丰富的跨境金融供应链，提供资产证券化服务，实现债权凭证的高效流转和价值提升。",
      icon: "fa-chart-line",
      color: "bg-indigo-600"
    },
    {
      title: "债权\"清洁化与标准化\"工厂",
      description: "引入境内外资金消化债权产品，提升资产流动性，实现不良资产的价值重估和有效利用。",
      icon: "fa-industry",
      color: "bg-purple-600"
    },
    {
      title: "隐私计算与安全",
      description: "采用零知识证明和多方安全计算技术，在加密域内完成债务匹配，保护企业商业秘密和个人隐私。",
      icon: "fa-shield-alt",
      color: "bg-amber-600"
    },
    {
      title: "法律认可的证据链",
      description: "将债务登记信息、双向确权记录等关键节点数据实时上链，提供标准化冲抵协议和电子签章服务。",
      icon: "fa-gavel",
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
          <h2 className="section-title">产品与服务</h2>
          <p className="section-description">
            "可信达"平台专注于解决三角债、多角债问题，通过区块链技术和创新商业模式，提供全方位的债务清偿和资产盘活服务
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
              <div className="w-full p-6 flex items-start space-x-5">
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
          <button className="btn-primary text-lg px-8 py-4">
            阅读更多
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;