import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { toast } from 'sonner';

const CoreAdvantagesPage = () => {
  // 移除没有实际功能的占位符函数

  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
      <Navbar />
      <main className="pt-24 pb-16">
        {/* 页面标题 */}
        <motion.section 
          className="container mx-auto px-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">澳门平台核心优势</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center">
            利用澳门独特的制度、资金和数据优势，打造跨境多角债解决平台
          </p>
        </motion.section>

        {/* 三大核心优势 */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {/* 法律优势 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="h-4 bg-blue-600"></div>
                <div className="p-8">
                  <div className="text-blue-600 dark:text-blue-400 text-4xl mb-6">
                    <i className="fas fa-balance-scale"></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">法律优势</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    澳门《商业法典》与葡萄牙及欧洲大陆法系一脉相承，为引入成熟的欧洲清算规则提供了法理基础。
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <div className="text-blue-600 dark:text-blue-400 mr-3 mt-1">
                        <i className="fas fa-check-circle"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">债权转让与抵销的法律认定</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">与欧盟标准（如斯洛文尼亚、罗马尼亚）具有高度兼容性，便于引入成熟的欧洲清算规则。</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="text-blue-600 dark:text-blue-400 mr-3 mt-1">
                        <i className="fas fa-check-circle"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">灵活的立法环境</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">作为特别行政区，澳门拥有独立的立法权，可以根据平台需求制定专门的法律法规。</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="text-blue-600 dark:text-blue-400 mr-3 mt-1">
                        <i className="fas fa-check-circle"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">国际认可的法律体系</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">澳门的法律体系得到国际社会广泛认可，有利于吸引国际投资者和金融机构参与平台。</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">核心价值</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      通过完善的法律框架，确保债权交易的合法性、安全性和可执行性，增强市场参与者的信心。
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* 资金优势 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="h-4 bg-green-600"></div>
                <div className="p-8">
                  <div className="text-green-600 dark:text-green-400 text-4xl mb-6">
                    <i className="fas fa-money-bill-wave"></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">资金优势</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    澳门作为自由港，资金成本显著低于内地，且拥有大量沉淀的离岸人民币，为平台提供低成本资金支持。
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <div className="text-green-600 dark:text-green-400 mr-3 mt-1">
                        <i className="fas fa-check-circle"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">低成本资金</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">作为国际金融中心，澳门的资金成本显著低于内地，有利于降低平台融资成本。</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="text-green-600 dark:text-green-400 mr-3 mt-1">
                        <i className="fas fa-check-circle"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">离岸人民币优势</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">拥有大量沉淀的离岸人民币，为内地企业提供跨境融资支持，解决跨境贸易中的资金结算问题。</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="text-green-600 dark:text-green-400 mr-3 mt-1">
                        <i className="fas fa-check-circle"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">自由港政策</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">自由港政策使得资金可以自由进出，简化了跨境资金流动的审批流程，提高了资金使用效率。</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-600 dark:text-green-400">核心价值</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      通过引入低成本资金，降低中小企业融资成本，提高平台的市场竞争力和吸引力。
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* 数据特区优势 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="h-4 bg-purple-600"></div>
                <div className="p-8">
                  <div className="text-purple-600 dark:text-purple-400 text-4xl mb-6">
                    <i className="fas fa-database"></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">数据特区优势</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    横琴深合区作为"数据海关"，可以部署"数据可用不可见"的隐私计算节点，解决跨境风控痛点。
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <div className="text-purple-600 dark:text-purple-400 mr-3 mt-1">
                        <i className="fas fa-check-circle"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">横琴深合区政策</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">作为"数据海关"，横琴深合区在数据跨境流动方面享有特殊政策，为平台解决跨境数据合规问题提供了便利。</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="text-purple-600 dark:text-purple-400 mr-3 mt-1">
                        <i className="fas fa-check-circle"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">隐私计算技术</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">采用联邦学习或零知识证明技术，实现"数据可用不可见"，既保护了数据隐私，又实现了数据的有效利用。</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="text-purple-600 dark:text-purple-400 mr-3 mt-1">
                        <i className="fas fa-check-circle"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">跨境风控能力</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">解决了跨境贸易中的风控痛点，提高了平台的风险管理能力和交易安全性。</p></div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-purple-600 dark:text-purple-400">核心价值</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      通过创新的数据处理模式，解决了跨境数据合规难题，为平台的跨境业务发展提供了技术保障。
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 独特的双轨制引擎 */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">独特的双轨制引擎</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                澳门平台同时具备净额清算和供应链金融两大功能，全方位解决不同类型的债务问题
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=dual%20engine%20technology%20concept%20for%20financial%20platform&sign=8ec15cf8776e163f6583fa1a56d5eaba"
                  alt="双轨制引擎"
                  className="rounded-2xl shadow-xl w-full h-auto"
                />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6">双引擎协同效应</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  澳门平台不应在"清算"和"融资"中二选一，而应包含两个引擎，形成协同效应，全方位解决不同类型的债务问题。
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-xl">
                    <h4 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">引擎 A：多边净额清算</h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      针对纯粹流动性错配型债务，利用TETRIS高级图计算算法识别并抵销闭环债务，无需外部资金注入即可释放资产负债表空间。
                    </p>
                    <div className="flex items-center text-blue-600 dark:text-blue-400">
                      <i className="fas fa-check-circle mr-2"></i>
                      <span>极低费率（如0.05%），作为公共服务</span>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-gray-700 p-6 rounded-xl">
                    <h4 className="text-xl font-semibold mb-3 text-purple-600 dark:text-purple-400">引擎 B：债权流转与融资</h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      针对核心节点挤占型债务，核心企业在平台进行确权，生成电子债权凭证，引入澳门银行、离岸人民币资金池进行竞价收购。
                    </p>
                    <div className="flex items-center text-purple-600 dark:text-purple-400">
                      <i className="fas fa-check-circle mr-2"></i>
                      <span>市场化费率（如0.3%-0.5%），由融资方承担</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-xl text-white">
                  <h4 className="text-xl font-semibold mb-3">协同优势</h4>
                  <p className="mb-4">
                    通过双轨制引擎的协同运作，澳门平台能够：
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle mr-3 mt-1"></i>
                      <span>同时解决存量债务和增量融资需求</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle mr-3 mt-1"></i>
                      <span>为不同类型的债务问题提供精准解决方案</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle mr-3 mt-1"></i>
                      <span>提高平台的市场覆盖范围和服务能力</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle mr-3 mt-1"></i>
                      <span>增强平台的可持续发展能力和盈利能力</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 战略定位与影响力 */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">战略定位与影响力</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                澳门平台不仅是解决债务问题的战术动作，更是构建现代金融基础设施的战略布局
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-16">
              {/* 战略定位 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-6">平台战略定位</h3>
                <div className="space-y-6">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center text-amber-600 dark:text-amber-400 mr-4">
                        <i className="fas fa-connectdevelop"></i>
                      </div>
                      <h4 className="text-xl font-semibold">连接节点</h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      作为连接中国内地与葡语系国家、欧盟市场的关键节点，在粤港澳大湾区深度融合的背景下，发挥"一带一路"重要支点作用。
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mr-4">
                        <i className="fas fa-rocket"></i>
                      </div>
                      <h4 className="text-xl font-semibold">创新试点</h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      作为跨境金融创新的试点平台，探索"一国两制"框架下的金融创新路径，为其他地区提供可复制、可推广的经验。
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                        <i className="fas fa-landmark"></i>
                      </div>
                      <h4 className="text-xl font-semibold">金融基础设施</h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      作为澳门现代金融基础设施的重要组成部分，提升澳门的金融服务能力和国际竞争力。
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* 社会经济影响力 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-6">社会经济影响力</h3>
                <div className="space-y-6">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center text-red-600 dark:text-red-400 mr-4">
                        <i className="fas fa-heartbeat"></i>
                      </div>
                      <h4 className="text-xl font-semibold">缓解流动性压力</h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">通过多边净额清算和供应链金融服务，有效缓解企业流动性压力，降低系统性金融风险。
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
                        <i className="fas fa-chart-line"></i>
                      </div>
                      <h4 className="text-xl font-semibold">促进经济增长</h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      优化资源配置，提高资金使用效率，促进实体经济发展，特别是中小企业的健康成长。
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-4">
                        <i className="fas fa-globe-asia"></i>
                      </div>
                      <h4 className="text-xl font-semibold">提升国际影响力</h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      提升澳门作为国际金融中心的地位和影响力，增强其在"一带一路"和粤港澳大湾区建设中的作用。
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 结语 */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">未来展望</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                通过"政府立法推动 + 市场化运营 + 适度技术创新（针对跨境痛点）"，澳门完全有能力建立一个辐射大湾区、连接葡语国家的特色金融资产交易平台，为解决全球多角债问题提供"澳门方案"。
              </p>
               {/* 移除没有实际功能的按钮 */}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CoreAdvantagesPage;