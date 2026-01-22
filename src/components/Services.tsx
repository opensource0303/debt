import React from 'react';
import { motion } from 'framer-motion';
// 添加 React.memo 以优化性能

const Services = () => {
  
  // 核心业务数据
  const services = [
    {
      title: "智能化债",
      description: "电子确权+智能轧差，把乱账变清账，化解三角债、多角债。通过先进的区块链技术和智能算法，实现债权债务的快速匹配和高效冲抵，为企业和政府解决债务难题。",
      icon: "fa-balance-scale",
      color: "bg-blue-600"
    },
    {
      title: "国际发债",
      description: "专注离岸人民币债券发行，助力全球化融资，拓展国际市场资本。利用澳门独特的金融优势和国际化平台，为企业提供便捷高效的跨境融资渠道，降低融资成本，提升国际影响力。",
      icon: "fa-exchange-alt",
      color: "bg-green-600"
    },
    {
      title: "债权资产工厂",
      description: "打造AAA级高可信资产供给端，运用AI、区块链、大数据等技术，筛选并盘活应收账款、债权和困境资产，构建标准化、清洁、可审计、可披露、可定价、可转让的资产包/产品。",
      icon: "fa-industry",
      color: "bg-purple-600"
    },
    {
      title: "资产持续管理",
      description: "为投资者提供全面的尽职调查、法律结构设计、资产接管、重组谈判与管理、风险分层、持续回款报告及资产处置建议，确保投资增值，并定期提供执行与处置报告。",
      icon: "fa-chart-line",
      color: "bg-indigo-600"
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      {/* 装饰元素 */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -left-32 top-20 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl"
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
          <h2 className="section-title">核心业务</h2>
          <p className="section-description">
            Cred可信达，信任驱动，智能引领。致力于解决中国企业与政府的债务问题，激活资产潜力，连接全球资金，推动经济高效、可持续发展。
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col bg-gray-900/70 backdrop-blur-md rounded-2xl border border-gray-700 overflow-hidden group hover:shadow-xl hover:border-blue-500/30 transition-all duration-300"
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
          className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-10 text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">安全、智能、可靠的国际化资产交易与管理平台</h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
            凭借AAA级信用保障，我们打造一个安全、智能、可靠的国际化资产交易与管理平台，助力全球投资者实现资产增值。
          </p>
          <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full text-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
            了解更多
          </button>
        </motion.div>
      </div>
    </section>
  );
}

// 使用 React.memo 优化组件渲染性能
export default React.memo(Services);