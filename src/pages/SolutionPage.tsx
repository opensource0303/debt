import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SolutionPage = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">多角债解决方案</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center">
            澳门多角债解决平台提供全方位的债权交易和债务解决服务，基于国际成功经验，结合澳门独特优势。
          </p>
        </motion.section>

        {/* 多角债问题分析 */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div 
              className="grid md:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">多角债的形成机制与流动性陷阱</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  在现代供应链中，债务关系很少是线性的。它们形成复杂的网络结构（Network Topology）。当核心节点（如大型基建国企、政府部门）延迟付款时，这种压力会沿着供应链传导，形成"星型-树状"的债务累积。
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  更复杂的是，在经济活动密集的区域，债务往往形成闭环。例如，一家澳门建筑分包商（A）等待内地总包方（B）的工程款，导致其无力支付横琴材料供应商（C）的货款，而材料供应商（C）又欠付一家为总包方（B）提供物流服务的企业（D）运费。在这个简化模型中，若 D 欠 B（或 B 的关联方）款项，就形成了一个潜在的抵销闭环。
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  在缺乏多边视角的情况下，A、B、C、D 都处于流动性紧缩状态，甚至面临破产风险。然而，通过多边净额清算（Multilateral Netting），这些相互的债务可以在瞬间被抵销，无需任何外部资金注入即可释放资产负债表空间。
                </p>
              </div>
              <div>
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=debt%20network%20visualization%20in%20supply%20chain&sign=f5e7382d2c480d3b9224bbad6debc26f"
                  alt="多角债网络结构"
                  className="rounded-2xl shadow-xl w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* 双轨制引擎解决方案 */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">双轨制引擎解决方案</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                澳门平台采取"双引擎"策略，全方位解决不同类型的债务问题
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-16">
              {/* 引擎 A */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 shadow-lg"
              >
                <div className="text-blue-600 dark:text-blue-400 text-4xl mb-6">
                  <i className="fas fa-cogs"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4">引擎 A：多边净额清算</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  基于斯洛文尼亚模式，针对纯粹流动性错配型债务，利用高级图计算算法识别并抵销闭环债务。
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="text-blue-600 dark:text-blue-400 mr-3 mt-1">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">强制申报机制</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">要求所有承接政府工程的供应商、博彩持牌企业，必须将超过一定期限（如60天）的应付账款信息上报至平台。</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-blue-600 dark:text-blue-400 mr-3 mt-1">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">图计算引擎</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">引入类似TETRIS的高级图计算算法，识别复杂的债务闭环。</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-blue-600 dark:text-blue-400 mr-3 mt-1">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">法律终局性</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">系统生成的"抵销通知书"具有法律效力，直接作为会计凭证。</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-blue-600 dark:text-blue-400 mr-3 mt-1">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">低费率模式</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">极低费率（如0.05%）或按笔收费，作为公共服务。</p>
                    </div>
                  </div>
                </div>
                
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=multilateral%20netting%20algorithm%20visualization&sign=41b855ff7f21d3b1dcbe8a54a059819a"
                  alt="多边净额清算"
                  className="rounded-xl w-full h-auto"
                />
              </motion.div>
              
              {/* 引擎 B */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 shadow-lg"
              >
                <div className="text-purple-600 dark:text-purple-400 text-4xl mb-6">
                  <i className="fas fa-exchange-alt"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4">引擎 B：债权流转与融资</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  基于印度TReDS模式，针对核心节点挤占型债务，提供高效的债权融资解决方案。
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="text-purple-600 dark:text-purple-400 mr-3 mt-1">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">核心企业确权</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">核心企业（博彩公司、政府部门）在平台进行确权（Acceptance），生成电子债权凭证。</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-purple-600 dark:text-purple-400 mr-3 mt-1">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">竞价收购机制</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">引入澳门银行、离岸人民币资金池进行竞价收购，降低融资成本。</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-purple-600 dark:text-purple-400 mr-3 mt-1">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">无追索权融资</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">一旦成交，资金T+1日到账供应商。若买家违约，银行只能找买家追索。</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-purple-600 dark:text-purple-400 mr-3 mt-1">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">市场化费率</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">市场化费率（如0.3%-0.5%），由融资方或受益方承担。</p>
                    </div>
                  </div>
                </div>
                
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=supply%20chain%20finance%20platform%20dashboard&sign=fcece814a266f811355074e937a3eed2"
                  alt="债权流转与融资"
                  className="rounded-xl w-full h-auto"
                />
              </motion.div>
            </div>
          </div>
        </section>

         {/* 三层架构解决方案 */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">三层架构解决方案</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                "境内、澳门、银行"分工协作，确保合规与效率
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* 境内层 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="h-2 bg-blue-600"></div>
                <div className="p-8">
                  <div className="text-blue-600 dark:text-blue-400 text-3xl mb-6">
                    <i className="fas fa-landmark"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-4">境内层：资产确权与数据管理</h3>
                  <div className="mb-4">
                    <h4 className="font-semibold text-blue-600 dark:text-blue-400">主体</h4>
                    <p className="text-gray-600 dark:text-gray-300">在横琴设立一家"数字供应链科技服务公司"</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-blue-600 dark:text-blue-400">核心职能</h4>
                    <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                        <span>引导企业上传合同、发票、对账单等基础资料</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                        <span>提供线上对账、确权服务</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                        <span>形成标准化的"电子债权凭证"</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                        <span>对数据进行脱敏、加密处理</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">合规重点</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      严格遵守《中华人民共和国数据安全法》与《中华人民共和国个人信息保护法》，所有数据收集、处理活动均需获得企业授权，以"合法、正当、必要"和"最小范围"为原则，保障企业商业秘密与相关个人信息安全。
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* 澳门层 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="h-2 bg-purple-600"></div>
                <div className="p-8">
                  <div className="text-purple-600 dark:text-purple-400 text-3xl mb-6">
                    <i className="fas fa-exchange-alt"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-4">澳门层：多边净额清算</h3>
                  <div className="mb-4">
                    <h4 className="font-semibold text-purple-600 dark:text-purple-400">主体</h4>
                    <p className="text-gray-600 dark:text-gray-300">在澳门申请设立"跨境债务清算服务中心"（非交易所）</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-purple-600 dark:text-purple-400">核心职能</h4>
                    <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                        <span>接收境内脱敏后的债权债务数据</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                        <span>运行复杂的多边净额轧差算法</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                        <span>识别可抵销的债务闭环</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                        <span>生成具有法律约束力的《净额结算指令》或《抵销确认书》</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-purple-600 dark:text-purple-400">独特优势</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      利用澳门相对灵活的金融创新环境、与国际接轨的法律体系以及"一国两制"下的跨境协作便利，作为风险隔离与制度创新的中间层。
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* 银行层 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="h-2 bg-green-600"></div>
                <div className="p-8">
                  <div className="text-green-600 dark:text-green-400 text-3xl mb-6">
                    <i className="fas fa-university"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-4">银行层：资金结算与支付执行</h3>
                  <div className="mb-6">
                    <h4 className="font-semibold text-green-600 dark:text-green-400">核心流程</h4>
                    <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                        <span>澳门清算中心不设立资金池，不触碰资金流</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                        <span>各参与企业在其开户银行，依据《净额结算指令》完成资金划转</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                        <span>严格按照事先签订的多方协议执行</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-green-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-600 dark:text-green-400">融资功能补充</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      如需要融资功能，已设立CRED澳门数字债权交易所，一家注册于开曼的"区块链债券交易所"，可把确权后的债权/净额后余额标准化为债券型数字凭证，在该交易所发行、流通。
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

         {/* 核心问题应对方案 */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">核心问题应对方案</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                针对性解决平台运营中的关键挑战
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* 解决"债务不确认"难题 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center text-amber-600 dark:text-amber-400 text-2xl mb-6">
                  <i className="fas fa-check-circle"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">解决"债务不确认"难题</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  债权无法获得债务人确认是平台运作的最大障碍，我们通过多重策略逐步化解。
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-amber-600 dark:text-amber-400 mr-3 mt-1">
                      <i className="fas fa-building"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">从强组织场景切入</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">首选政府投资项目供应链、大型国企生态圈等场景进行试点，核心企业配合意愿可通过行政引导、考核激励等方式增强。</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-amber-600 dark:text-amber-400 mr-3 mt-1">
                      <i className="fas fa-chess"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">渐进式确权流程</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">允许部分确认、分期确认，并配套线上争议解决机制，降低确权门槛。</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-amber-600 dark:text-amber-400 mr-3 mt-1">
                      <i className="fas fa-gavel"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">政策工具引导</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">建议政府部门将大型企业（特别是国企）在平台上的账款确认与支付情况，纳入企业绩效考核或信用评价体系。</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* 解决"数据安全、合规"难题 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 text-2xl mb-6">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">解决"数据安全、合规"难题</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  确保数据安全与合规，解决数据核验成本过高的问题。
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-green-600 dark:text-green-400 mr-3 mt-1">
                      <i className="fas fa-layer-group"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">数据分层处理</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">原始敏感数据存留于境内运营主体服务器；向澳门清算中心传输的是经过脱敏、加密处理的必要字段及数据哈希值，用于算法匹配。</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-green-600 dark:text-green-400 mr-3 mt-1">
                      <i className="fas fa-plug"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">政府数据接口审慎设计</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">如税务、市场监管部门提供信息核验便利，应严格限定为"结果性核验"（如发票真伪、企业状态），并以政务数据共享的相关规定为依据。</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-green-600 dark:text-green-400 mr-3 mt-1">
                      <i className="fas fa-database"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">零知识证明技术</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">采用联邦学习或零知识证明技术，实现"数据可用不可见"，既保护数据隐私，又实现数据有效利用。</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* 与《保障中小企业款项支付条例》形成协同 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 text-2xl mb-6">
                  <i className="fas fa-balance-scale"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">与《保障中小企业款项支付条例》协同</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  平台建设将契合保护中小企业的政策导向，形成协同效应。
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-blue-600 dark:text-blue-400 mr-3 mt-1">
                      <i className="fas fa-bolt"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">缩短支付链条</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">加速资金清算，从根本上缓解中小企业被拖欠问题，保障中小企业合法权益。</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-blue-600 dark:text-blue-400 mr-3 mt-1">
                      <i className="fas fa-ban"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">禁止变相延期</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">明确禁止利用抵销安排变相延长对中小企业的法定或约定付款期限，确保中小企业及时收款。</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-blue-600 dark:text-blue-400 mr-3 mt-1">
                      <i className="fas fa-hand-holding-heart"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">"化债输血"</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">在后期融资阶段，优先将涉及中小企业应收账款的优质资产包进行证券化，引入境外资金直接偿付中小企业。</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SolutionPage;