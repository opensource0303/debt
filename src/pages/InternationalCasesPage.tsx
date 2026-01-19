import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const InternationalCasesPage = () => {
  return (
        <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="pt-24 pb-16">
        {/* 页面标题 */}
        <motion.section 
          className="container mx-auto px-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">国际成功案例研究</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center">
            深入剖析全球各国多角债解决平台的运作机制、法律框架、盈利模式及成败经验
          </p>
        </motion.section>

        {/* 国家级公用事业模式 */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">国家级公用事业模式</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                欧洲东部及中南部国家在从计划经济向市场经济转型过程中建立的强制性或半强制性多边清算体系
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-16">
              {/* 斯洛文尼亚 AJPES */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="h-4 bg-blue-600"></div>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl mr-4">
                      <i className="fas fa-landmark"></i>
                    </div>
                    <h3 className="text-2xl font-bold">斯洛文尼亚 AJPES</h3>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    斯洛文尼亚的公共法律记录和相关服务局（AJPES）运营着世界上最成熟、运行时间最长的国家级多边债务清算系统。该系统源于前南斯拉夫时期的社会会计局（SDK），在国家独立后被法律制度化。
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <div className="text-blue-600 dark:text-blue-400 mr-3 mt-1">
                        <i className="fas fa-gavel"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">立法强制性与自愿性结合</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">在危机时期，政府通过《防止逾期付款法》强制要求企业参与清算；目前同时支持强制性轮次和自愿性轮次。</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="text-blue-600 dark:text-blue-400 mr-3 mt-1">
                        <i className="fas fa-calculator"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">TETRIS 算法</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">系统使用高级图计算算法，不仅能识别简单环路，还能处理复杂的长链和多层嵌套环路。</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="text-blue-600 dark:text-blue-400 mr-3 mt-1">
                        <i className="fas fa-balance-scale"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">法律终局性</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">系统生成的"抵销通知书"具有法律效力，直接作为会计凭证，无需资金实际划转。</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">运营成效</h4>
                    <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-2">
                      <li className="flex items-center">
                        <i className="fas fa-check-circle text-green-500 mr-2"></i>
                        1992年经济危机期间，清算债务量达GDP的7.58%
                      </li>
                      <li className="flex items-center">
                        <i className="fas fa-check-circle text-green-500 mr-2"></i>
                        某单月运行中，1,807家公司参与，清算22,779张逾期发票，总金额1,737万欧元
                      </li>
                      <li className="flex items-center">
                        <i className="fas fa-check-circle text-green-500 mr-2"></i>
                        费率仅为成功抵销金额的0.11%，远低于银行转账手续费
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
              
              {/* 罗马尼亚 CPPI/SIC */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="h-4 bg-yellow-600"></div>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center text-yellow-600 dark:text-yellow-400 text-xl mr-4">
                      <i className="fas fa-landmark"></i>
                    </div>
                    <h3 className="text-2xl font-bold">罗马尼亚 CPPI/SIC</h3>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    罗马尼亚设立了工业人员培训中心（CPPI）下属的布加勒斯特分部来管理计算机化补偿系统（SIC - Sistemul Informatic de Compensare）。
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <div className="text-yellow-600 dark:text-yellow-400 mr-3 mt-1">
                        <i className="fas fa-file-contract"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">专用支付工具</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">创造了"补偿令"（Ordinul de compensare）这一专门的法律文书，被国家法规认定为具有法律效力的非货币支付工具。</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="text-yellow-600 dark:text-yellow-400 mr-3 mt-1">
                        <i className="fas fa-building"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">国企强制参与</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">对于国有资本或国家持股企业，使用该系统进行债务清理是强制性的，明确了国有企业作为"核心节点"的责任。</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="text-yellow-600 dark:text-yellow-400 mr-3 mt-1">
                        <i className="fas fa-signature"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">电子签名要求</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">企业需在SIC平台注册并使用合格电子签名（Qualified Electronic Signature），确保交易安全。</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-yellow-600 dark:text-yellow-400">运营模式</h4>
                    <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-2">
                      <li className="flex items-center">
                        <i className="fas fa-check-circle text-green-500 mr-2"></i>
                        账户创建 → 发票上传 → 循环识别 → 凭证生成
                      </li>
                      <li className="flex items-center">
                        <i className="fas fa-check-circle text-green-500 mr-2"></i>
                        国有企业必须上传逾期发票，私营企业自愿上传
                      </li>
                      <li className="flex items-center">
                        <i className="fas fa-check-circle text-green-500 mr-2"></i>
                        费率通常在0.02% - 0.1%之间，作为公共服务
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 监管下的市场化交易模式 */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">监管下的市场化交易模式</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                印度的贸易应收账款贴现系统（TReDS）解决了"无法抵销但需要融资的债务"
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden max-w-4xl mx-auto"
            >
              <div className="h-4 bg-green-600"></div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 text-xl mr-4">
                    <i className="fas fa-exchange-alt"></i>
                  </div>
                  <h3 className="text-2xl font-bold">印度 TReDS/RXIL</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4">监管框架</h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      TReDS是由印度储备银行（RBI）根据《2007年支付和结算系统法》授权建立的制度性机制。
                    </p>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <div className="text-green-600 dark:text-green-400 mr-3 mt-1">
                          <i className="fas fa-gavel"></i>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-1">强制入驻</h5>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">所有营业额超过25亿卢比的大型企业以及所有中央公共部门企业必须在TReDS平台注册。</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="text-green-600 dark:text-green-400 mr-3 mt-1">
                          <i className="fas fa-university"></i>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-1">交易所格局</h5>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">主要有RXIL、M1xchange和Invoicemart三大平台，形成良性竞争格局。</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold mb-4">交易模式</h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      TReDS的核心是反向保理竞价（Reverse Factoring Auction）机制。
                    </p>
                    
                    <ol className="space-y-3 text-gray-600 dark:text-gray-300 text-sm mb-6">
                      <li className="flex">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mr-3 mt-0.5">1</span>
                        <span><strong>上传与接受：</strong>供应商上传发票，核心买家在平台上进行数字确认。</span>
                      </li>
                      <li className="flex">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mr-3 mt-0.5">2</span>
                        <span><strong>竞价：</strong>多个融资方对保理单元进行竞价（利率），降低融资成本。</span>
                      </li>
                      <li className="flex">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mr-3 mt-0.5">3</span><span><strong>无追索权：</strong>一旦成交，资金T+1日到账供应商。若买家违约，银行只能找买家追索。</span>
                      </li>
                    </ol>
                  </div>
                </div>
                
                <div className="bg-green-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3 text-green-600 dark:text-green-400">成功经验与启示</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium mb-2">盈利情况</h5>
                      <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-2">
                        <li className="flex items-start">
                          <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                          <span>RXIL 2024-25财年净利润翻倍至5亿卢比（约4800万澳门元）</span>
                        </li>
                        <li className="flex items-start">
                          <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                          <span>M1xchange 2024-25财年实现净利润1.2亿卢比，营收增长80%</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">关键启示</h5>
                      <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-2">
                        <li className="flex items-start">
                          <i className="fas fa-lightbulb text-yellow-500 mr-2 mt-1"></i>
                          <span>强制核心买家入驻解决了平台冷启动难题</span>
                        </li>
                        <li className="flex items-start">
                          <i className="fas fa-lightbulb text-yellow-500 mr-2 mt-1"></i>
                          <span>监管驱动可创造市场，证明该模式的商业可持续性</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 国际私营与前沿科技模式 */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">国际私营与前沿科技模式</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                私营资本驱动的先进交易所及区块链技术尝试的经验与教训
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* 美国 C2FO */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 text-xl mr-4">
                    <i className="fas fa-hand-holding-usd"></i>
                  </div>
                  <h3 className="text-2xl font-bold">美国 C2FO</h3>
                </div>
                
                <h4 className="text-xl font-semibold mb-4">动态折扣（Dynamic Discounting）模式</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  不依赖银行资金，而是利用核心买家（如沃尔玛、Costco）自身的闲置现金，实现供应商快速回款。
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="text-purple-600 dark:text-purple-400 mr-3 mt-1">
                      <i className="fas fa-lightbulb"></i>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">"Name Your Rate"模式</h5>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">供应商登录平台，提出愿意给予的折扣率。买家的资金管理系统根据自身的资金回报要求，自动匹配并接受报价。</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-purple-600 dark:text-purple-400 mr-3 mt-1">
                      <i className="fas fa-balance-scale"></i>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">双赢模式</h5>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">对买家而言，这是无风险的高收益理财；对供应商而言，无需信贷审批即可获得现金。</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-purple-600 dark:text-purple-400 mr-3 mt-1">
                      <i className="fas fa-chart-line"></i>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">盈利模式</h5>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">不从供应商收取会员费，而是从买家获得的折扣收益中抽取分成，或者根据交易量收取交易费。</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2 text-purple-600 dark:text-purple-400">对澳门的启示</h5>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    这是一种非常适合现金充裕型企业（如澳门博彩企业）的模式，可以考虑将其作为平台的补充功能，激活本地企业的闲置资金。
                  </p>
                </div>
              </motion.div>
              
              {/* 区块链联盟的失败教训 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center text-red-600 dark:text-red-400 text-xl mr-4">
                    <i className="fas fa-exclamation-triangle"></i>
                  </div>
                  <h3 className="text-2xl font-bold">区块链联盟的失败教训</h3>
                </div>
                
                <h4 className="text-xl font-semibold mb-4">技术至上主义的风险</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  近年来，多个备受瞩目的区块链贸易融资平台相继破产，为技术创新提供了重要的警示。
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="text-red-600 dark:text-red-400 mr-3 mt-1">
                      <i className="fas fa-times-circle"></i>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">we.trade (2022年破产)</h5>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">由IBM和12家欧洲大银行支持。失败原因在于治理结构僵化、成本过高以及缺乏足够的网络密度。</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-red-600 dark:text-red-400 mr-3 mt-1">
                      <i className="fas fa-times-circle"></i>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Marco Polo (2023年破产)</h5>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">基于R3 Corda技术。失败原因在于试图创造全新的金融工具而非优化现有流程，且与企业ERP系统集成困难。</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-red-600 dark:text-red-400 mr-3 mt-1">
                      <i className="fas fa-times-circle"></i>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Contour (2023年关闭)</h5>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">专注于信用证（LC）数字化。失败原因在于信用证涉及多方，要让所有方都在同一链上极为困难。</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-red-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2 text-red-600 dark:text-red-400">关键教训</h5>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    技术必须服务于业务。斯洛文尼亚和印度的中心化数据库模式虽然技术上不如区块链"性感"，但效率更高、成本更低、监管更易。区块链应仅用于特定的跨法域信任环节（如澳门与内地的数据核验）。
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 案例对比总结 */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">国际案例对比总结</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                不同模式的特点与对澳门平台建设的启示
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="overflow-x-auto"
            >
              <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="py-4 px-6 text-left text-lg font-semibold">特征维度</th>
                    <th className="py-4 px-6 text-left text-lg font-semibold">斯洛文尼亚 (AJPES)</th>
                    <th className="py-4 px-6 text-left text-lg font-semibold">罗马尼亚 (CPPI/SIC)</th>
                    <th className="py-4 px-6 text-left text-lg font-semibold">印度 (TReDS/RXIL)</th>
                    <th className="py-4 px-6 text-left text-lg font-semibold">美国 (C2FO)</th>
                    <th className="py-4 px-6 text-left text-lg font-semibold">建议澳门模式</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="py-4 px-6 font-medium">核心功能</td>
                    <td className="py-4 px-6 text-gray-600 dark:text-gray-300">多边净额清算</td>
                    <td className="py-4 px-6 text-gray-600 dark:text-gray-300">债务补偿</td>
                    <td className="py-4 px-6 text-gray-600 dark:text-gray-300">票据融资竞价</td>
                    <td className="py-4 px-6 text-gray-600 dark:text-gray-300">动态折扣</td>
                    <td className="py-4 px-6 font-medium text-blue-600 dark:text-blue-400">混合模式(清算+融资)</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-900">
                    <td className="py-4 px-6 font-medium">属性</td>
                    <td className="py-4 px-6 text-gray-600 dark:text-gray-300">国有公用事业</td>
                    <td className="py-4 px-6 text-gray-600 dark:text-gray-300">国有机构</td>
                    <td className="py-4 px-6 text-gray-600 dark:text-gray-300">公私合营</td>
                    <td className="py-4 px-6 text-gray-600 dark:text-gray-300">私营独角兽</td>
                    <td className="py-4 px-6 font-medium text-blue-600 dark:text-blue-400">公私合营</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">强制性</td>
                    <td className="py-4 px-6 text-gray-600 dark:text-gray-300">历史上强制，现部分强制</td>
                    <td className="py-4 px-6 text-gray-600 dark:text-gray-300">国企强制，私企自愿</td>
                    <td className="py-4 px-6 text-gray-600 dark:text-gray-300">大型买家强制注册</td>
                    <td className="py-4 px-6 text-gray-600 dark:text-gray-300">完全自愿</td>
                    <td className="py-4 px-6 font-medium text-blue-600 dark:text-blue-400">核心节点强制注册</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-900">
                    <td className="py-4 px-6 font-medium">技术核心</td>
                    <td className="py-4 px-6 text-gray-600 dark:text-gray-300">中心化数据库+TETRIS算法</td>
                    <td className="py-4 px-6 text-gray-600 dark:text-gray-300">中心化数据库</td>
                    <td className="py-4 px-6 text-gray-600 dark:text-gray-300">中心化竞价引擎</td>
                    <td className="py-4 px-6 text-gray-600 dark:text-gray-300">云计算+AI匹配</td>
                    <td className="py-4 px-6 font-medium text-blue-600 dark:text-blue-400">中心化引擎+跨境隐私计算</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">资金来源</td>
                    <td className="py-4 px-6 text-gray-600 dark:text-gray-300">无需外部资金(内循环)</td>
                    <td className="py-4 px-6 text-gray-600 dark:text-gray-300">无需外部资金</td>
                    <td className="py-4 px-6 text-gray-600 dark:text-gray-300">银行/非银机构(竞价)</td>
                    <td className="py-4 px-6 text-gray-600 dark:text-gray-300">买家自有资金</td>
                    <td className="py-4 px-6 font-medium text-blue-600 dark:text-blue-400">离岸人民币/银行资金</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-900">
                    <td className="py-4 px-6 font-medium">费率模型</td>
                    <td className="py-4 px-6 text-gray-600 dark:text-gray-300">极低(0.11%)</td>
                    <td className="py-4 px-6 text-gray-600 dark:text-gray-300">极低(行政收费)</td>
                    <td className="py-4 px-6 text-gray-600 dark:text-gray-300">中等(0.25%-0.5%)</td>
                    <td className="py-4 px-6 text-gray-600 dark:text-gray-300">分成模式</td>
                    <td className="py-4 px-6 font-medium text-blue-600 dark:text-blue-400">分层收费(清算低/融资中)</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">主要启示</td>
                    <td className="py-4 px-6 text-gray-600 dark:text-gray-300">法律强制力是启动关键</td>
                    <td className="py-4 px-6 text-gray-600 dark:text-gray-300">专用支付工具有效</td>
                    <td className="py-4 px-6 text-gray-600 dark:text-gray-300">监管驱动可创造市场</td>
                    <td className="py-4 px-6 text-gray-600 dark:text-gray-300">激活核心企业闲置资金</td>
                    <td className="py-4 px-6 font-medium text-blue-600 dark:text-blue-400">立法先行，技术为辅</td>
                  </tr>
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>

        {/* 关键启示 */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">关键启示</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                国际经验对澳门多角债平台建设的重要借鉴
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-10">
                <div className="text-blue-600 dark:text-blue-400 text-4xl mb-8 text-center">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h3 className="text-2xl font-bold mb-6 text-center">国际经验的核心启示</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-blue-600 dark:text-blue-400 mr-4 mt-1">
                      <i className="fas fa-gavel text-2xl"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">法律强制力是启动关键</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        斯洛文尼亚的成功源于法律强制申报，印度的成功源于强制核心买家入驻。法律强制力解决了多边清算中最大的难题——"搭便车"问题，即关键节点不参与导致闭环无法形成。
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-purple-600 dark:text-purple-400 mr-4 mt-1">
                      <i className="fas fa-handshake text-2xl"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">公私合营模式兼顾公信力与效率</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        纯国资可能缺乏市场敏锐度，纯私资难以推动立法和跨部门数据打通。参照印度RXIL模式，由政府监管侧、基础设施侧和技术运营侧共同组成的PPP模式，能够兼顾公信力和市场效率。
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-green-600 dark:text-green-400 mr-4 mt-1">
                      <i className="fas fa-cogs text-2xl"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">技术必须服务于业务</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        we.trade等区块链先驱的失败，往往是因为试图用技术手段去解决商业互信和网络效应的问题。斯洛文尼亚和印度的中心化数据库模式虽然技术上不如区块链"性感"，但效率更高、成本更低、监管更易。
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-amber-600 dark:text-amber-400 mr-4 mt-1">
                      <i className="fas fa-route text-2xl"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">渐进式实施路径更易成功</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        采用"政府引导、市场运作、试点先行、分步推进"的策略，从小范围试点开始，逐步扩大影响力，是平台建设的明智选择。匈牙利激进的破产触发机制导致了数万家原本在长期看具有偿付能力但面临暂时流动性短缺的企业被迫进入破产清算程序，这是澳门平台应该避免的教训。
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
                    通过"政府立法推动 + 市场化运营 + 适度技术创新（针对跨境痛点）"，澳门完全有能力建立一个辐射大湾区、连接葡语国家的特色金融资产交易平台。
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

export default InternationalCasesPage;