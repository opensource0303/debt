import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PlatformModePage = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">平台模式与治理结构</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center">
            澳门多角债解决平台采用公私合营（PPP）模式，结合政府监管与市场效率
          </p>
        </motion.section>

        {/* 平台属性与治理结构 */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">公私合营（PPP）模式</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                参照印度RXIL模式，结合政府公信力与市场活力
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {/* 政府/监管侧 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 text-2xl mb-6 mx-auto">
                  <i className="fas fa-landmark"></i>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">政府/监管侧</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
                  澳门金融管理局（AMCM）或政府产业基金持股，确立公信力与监管背书
                </p>
                <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-600 dark:text-blue-400 text-center">核心职责</h4>
                  <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-3">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                      <span>推动立法，确立平台的法律地位与强制力</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                      <span>提供政策支持与监管框架</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                      <span>确保平台运行符合金融安全与稳定要求</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                      <span>代表政府参与平台重大决策</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* 基础设施侧 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 text-2xl mb-6 mx-auto">
                  <i className="fas fa-server"></i>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">基础设施侧</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
                  澳门中央证券托管结算一人有限公司（MCSD）参与，解决清算结算通道
                </p>
                <div className="bg-green-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-green-600 dark:text-green-400 text-center">核心职责</h4>
                  <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-3">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                      <span>提供安全、高效的清算结算基础设施</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                      <span>确保资金与债权凭证的安全流转</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                      <span>对接澳门金融市场基础设施</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                      <span>提供技术系统支持与运维保障</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* 技术/运营侧 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 text-2xl mb-6 mx-auto">
                  <i className="fas fa-laptop-code"></i>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">技术/运营侧</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
                  引入具有成熟算法经验的私营科技公司，确保平台的敏捷性和用户体验
                </p>
                <div className="bg-purple-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-purple-600 dark:text-purple-400 text-center">核心职责</h4>
                  <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-3">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                      <span>开发和维护平台技术系统</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                      <span>提供用户界面与操作体验优化</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                      <span>开发高级算法（如图计算引擎）</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                      <span>负责平台日常运营与客户服务</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="mt-12 bg-blue-600 text-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-center">PPP模式的优势</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="text-yellow-300 mr-3 mt-1">
                    <i className="fas fa-balance-scale"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">兼顾公信力与效率</h4>
                    <p className="text-blue-100 text-sm">
                      政府参与确保平台具有足够的公信力和政策支持，私营部门参与则保证了平台的运营效率和创新能力。
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-yellow-300 mr-3 mt-1">
                    <i className="fas fa-handshake"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">风险共担</h4>
                    <p className="text-blue-100 text-sm">
                      政府和私营部门共同承担平台运营风险，提高了平台的抗风险能力和可持续性。
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-yellow-300 mr-3 mt-1">
                    <i className="fas fa-rocket"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">资源互补</h4>
                    <p className="text-blue-100 text-sm">
                      政府提供政策、监管和公信力资源，私营部门提供技术、运营和市场资源，实现优势互补。
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-yellow-300 mr-3 mt-1">
                    <i className="fas fa-users"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">多方参与治理</h4>
                    <p className="text-blue-100 text-sm">
                      建立多方参与的治理结构，确保平台决策的科学性和公正性，避免单一主体决策的局限性。
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 交易流程 */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">平台交易流程</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                双轨制引擎的具体运作流程
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-16">
              {/* 引擎 A 交易流程 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3">A</span>
                  多边净额清算流程
                </h3>
                
                <div className="relative">
                  {/* 连接线 */}
                  <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-blue-200 dark:bg-blue-800 z-0"></div>
                  
                  {/* 步骤 1 */}
                  <div className="relative z-10 flex mb-8">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">1</div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">数据归集</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        参与者通过电子门户上传其"应付账款"清单（包含债权人税号、发票号、金额）。系统基于"债务人申报"而非债权人申报，确保债务的承认是先决条件。
                      </p>
                    </div>
                  </div>
                  
                  {/* 步骤 2 */}
                  <div className="relative z-10 flex mb-8">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">2</div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">算法匹配</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        系统使用TETRIS高级图计算算法，识别简单环路和复杂的长链、多层嵌套环路，寻找闭环中的最小公分母。
                      </p>
                    </div>
                  </div>
                  
                  {/* 步骤 3 */}
                  <div className="relative z-10 flex mb-8">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">3</div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">清算执行</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        算法瞬间将各方的债务余额减记，最大化全网清算金额，无需任何外部资金注入即可释放资产负债表空间。
                      </p>
                    </div>
                  </div>
                  
                  {/* 步骤 4 */}
                  <div className="relative z-10 flex">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">4</div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">法律确认</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        系统生成具有法律效力的"抵销通知书"，直接作为会计凭证，企业据此注销应收应付账款。
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* 引擎 B 交易流程 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 mr-3">B</span>
                  债权流转与融资流程
                </h3>
                
                <div className="relative">
                  {/* 连接线 */}
                  <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-purple-200 dark:bg-purple-800 z-0"></div>
                  
                  {/* 步骤 1 */}
                  <div className="relative z-10 flex mb-8">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">1</div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">发票上传与确认</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        供应商上传发票，核心买家（如博彩公司、政府部门）在平台上进行数字确认（Acceptance），将商业纠纷风险转化为准主权信用风险。
                      </p>
                    </div>
                  </div>
                  
                  {/* 步骤 2 */}
                  <div className="relative z-10 flex mb-8">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">2</div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">生成债权凭证</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        平台生成标准化的电子债权凭证（类似于罗马尼亚的补偿令或印度的Factoring Unit），作为可流转的金融工具。
                      </p>
                    </div>
                  </div>
                  
                  {/* 步骤 3 */}
                  <div className="relative z-10 flex mb-8">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">3</div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">融资方竞价</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        多个融资方（澳门银行、离岸人民币资金池等）对债权凭证进行竞价（利率），由于买家信用极高，竞价结果往往远低于供应商自己去银行贷款的利率。
                      </p>
                    </div>
                  </div>
                  
                  {/* 步骤 4 */}
                  <div className="relative z-10 flex">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">4</div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">资金结算</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        一旦成交，资金T+1日到账供应商。若买家违约，银行只能找买家追索，不得向供应商追索，彻底剥离中小企业的负债风险。
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 盈利模式 */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">盈利模式</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                参考印度RXIL经验，构建可持续的商业模式
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {/* 交易佣金 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-green-600 dark:text-green-400 text-3xl mb-6">
                  <i className="fas fa-exchange-alt"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">交易佣金</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  按融资额的一定比例收取，这是平台的主要收入来源。
                </p>
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">0.3%</div>
                <div className="text-gray-500 dark:text-gray-400 text-sm">融资额比例</div>
              </div>
              
              {/* 清算服务费 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-blue-600 dark:text-blue-400 text-3xl mb-6">
                  <i className="fas fa-calculator"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">清算服务费</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  按多边净额清算量的一定比例收取，作为公共服务性质的收入。
                </p>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">0.1%</div>
                <div className="text-gray-500 dark:text-gray-400 text-sm">清算量比例</div>
              </div>
              
              {/* SaaS 订阅费 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-purple-600 dark:text-purple-400 text-3xl mb-6">
                  <i className="fas fa-cloud"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">SaaS订阅费</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  向核心企业提供供应链债务管理工具的年费。
                </p>
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">分级定价</div>
                <div className="text-gray-500 dark:text-gray-400 text-sm">按企业规模收取</div>
              </div>
              
              {/* 数据服务费 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-amber-600 dark:text-amber-400 text-3xl mb-6">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">数据服务费</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  向境外资金方提供基于大数据的信用分析报告。
                </p>
                <div className="text-3xl font-bold text-amber-600 dark:text-amber-400">定制化</div>
                <div className="text-gray-500 dark:text-gray-400 text-sm">按报告类型收取</div>
              </div>
            </motion.div>
            
            <motion.div 
              className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-10 text-center text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">盈利预测与可持续性</h3>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                参考印度RXIL（年利润5000万人民币级，处理量2000亿级），澳门平台初期可能需要政府补贴，但长期具备盈利能力。随着交易量呈指数级增长，边际成本极低，利润率高。
              </p>
               {/* 移除没有实际功能的按钮 */}
            </motion.div>
          </div>
        </section>

        {/* 实施路径 */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">实施路径</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                "政府引导、市场运作、试点先行、分步推进"的实施策略
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* 第一阶段 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="h-3 bg-blue-600"></div>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl mr-4">
                      <i className="fas fa-flag-checkered"></i>
                    </div>
                    <h3 className="text-2xl font-bold">第一阶段</h3>
                  </div>
                  <h4 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">制度设计与封闭试点</h4>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-6">1 年</div>
                  
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0 mt-0.5">1</div>
                      <div>
                        <h5 className="font-semibold mb-1">成立工作专班</h5>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">由市金融局牵头，联合工信、国资、司法、税务等部门及法律、金融专家，统筹平台设计与推进工作。</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0 mt-0.5">2</div>
                      <div>
                        <h5 className="font-semibold mb-1">完成基础建设</h5>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">完成平台规则体系（协议范本等）设计；开发核心系统；设立境内运营主体与澳门清算中心。</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0 mt-0.5">3</div>
                      <div>
                        <h5 className="font-semibold mb-1">开展封闭试点</h5>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">选择一个市政府投资的重点项目供应链或一家市属核心国企的供应链开展试点，验证"确权-轧差-结算"全流程。</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>
              
              {/* 第二阶段 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="h-3 bg-green-600"></div>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 text-xl mr-4">
                      <i className="fas fa-rocket"></i>
                    </div>
                    <h3 className="text-2xl font-bold">第二阶段</h3>
                  </div>
                  <h4 className="text-xl font-semibold mb-4 text-green-600 dark:text-green-400">扩大试点与政策赋能</h4>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-6">1-2 年</div>
                  
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mr-3 flex-shrink-0 mt-0.5">1</div>
                      <div>
                        <h5 className="font-semibold mb-1">评估优化</h5>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">总结试点经验，完善技术和规则，提升平台性能和用户体验。</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mr-3 flex-shrink-0 mt-0.5">2</div>
                      <div>
                        <h5 className="font-semibold mb-1">扩大试点范围</h5>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">将试点扩展至若干个重点产业园或产业集群。出台政策，鼓励甚至要求市属国企将符合条件的应付账款纳入平台处理。</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mr-3 flex-shrink-0 mt-0.5">3</div>
                      <div>
                        <h5 className="font-semibold mb-1">建立信用联动机制</h5>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">探索将企业在平台上的履约记录纳入本市公共信用信息平台，形成正向激励机制。</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>
              
              {/* 第三阶段 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="h-3 bg-purple-600"></div>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 text-xl mr-4">
                      <i className="fas fa-globe"></i>
                    </div>
                    <h3 className="text-2xl font-bold">第三阶段</h3>
                  </div>
                  <h4 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">市场化推广与跨境资本化</h4>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-6">远期</div>
                  
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 mr-3 flex-shrink-0 mt-0.5">1</div>
                      <div>
                        <h5 className="font-semibold mb-1">全面市场化运营</h5>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">平台服务向全市各类企业开放，实现规模化运营和可持续发展。</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 mr-3 flex-shrink-0 mt-0.5">2</div>
                      <div>
                        <h5 className="font-semibold mb-1">探索资产证券化</h5>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">对于平台上形成的优质、稳定的应收账款资产包，通过境外交易所面向专业投资者发行资产支持证券，引入境外低成本资金。</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 mr-3 flex-shrink-0 mt-0.5">3</div>
                      <div>
                        <h5 className="font-semibold mb-1">形成良性循环</h5>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">实现"境内确权、境外融资、资金回流"的良性循环，为更多企业提供优质的金融服务。</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 政策建议 */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">政策建议</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                为确保平台顺利启动、行稳致远的关键支持措施
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-2 gap-8"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                    <i className="fas fa-file-signature"></i>
                  </div>
                  <h3 className="text-2xl font-bold">明确政策支持</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  建议市政府以适当形式肯定平台建设方向，将其纳入本市优化营商环境、防范化解金融风险的重点工作，为平台发展提供明确的政策指引和支持。
                </p>
                <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">预期效果</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    通过政策明确支持，增强市场信心，吸引更多企业参与平台，加速平台网络效应的形成。
                  </p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mr-4">
                    <i className="fas fa-industry"></i>
                  </div>
                  <h3 className="text-2xl font-bold">开放试点场景</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  为平台一期试点协调开放政府投资项目链条，并为国企率先参与提供必要的引导与考核激励，确保试点工作顺利开展。
                </p>
                <div className="bg-green-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-green-600 dark:text-green-400">预期效果</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    通过重点场景突破，快速验证平台模式的可行性和有效性，为后续全面推广积累经验。
                  </p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
                    <i className="fas fa-plug"></i>
                  </div>
                  <h3 className="text-2xl font-bold">依法审慎提供数据核验便利</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  协调相关部门，在依法合规、确保安全的前提下，为平台的企业与票据信息核验提供必要的便利化接口，降低平台运营成本。
                </p>
                <div className="bg-purple-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-purple-600 dark:text-purple-400">预期效果</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    通过数据核验便利，提高平台的风控能力和运营效率，增强市场参与者对平台的信任。
                  </p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center text-amber-600 dark:text-amber-400 mr-4">
                    <i className="fas fa-users-cog"></i>
                  </div>
                  <h3 className="text-2xl font-bold">强化组织保障</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  依托工作专班，持续协调解决平台建设与运营中涉及的跨部门、跨领域问题，为平台发展提供有力的组织保障。
                </p>
                <div className="bg-amber-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-amber-600 dark:text-amber-400">预期效果</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    通过高效的组织协调，突破体制机制障碍，确保平台建设和运营工作顺利推进。
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PlatformModePage;