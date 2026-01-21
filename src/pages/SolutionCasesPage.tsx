import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const SolutionCasesPage = () => {
    return (
         <div className="min-h-screen text-white tech-gradient-bg">
      <div className="bg-overlay min-h-screen">
            <Navbar />
            <main className="pt-24 pb-16">
                {}
                <motion.section
                    className="container mx-auto px-4 mb-16"
                    initial={{
                        opacity: 0,
                        y: 20
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 0.8
                    }}>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">解决方案与成功案例</h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto text-center">以核心链主企业信用为背书，依托区块链隐私、安全、无法篡改特性，促进体系内债权自由流动
                                                                                                                                                          </p>
                </motion.section>
                {}
                <section className="py-16 bg-gray-900 bg-grid relative">
                    <div className="absolute inset-0 overflow-hidden">
                        <div
                            className="absolute right-0 bottom-0 w-80 h-80 bg-blue-600/10 rounded-full filter blur-3xl"></div>
                    </div>
                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            className="grid md:grid-cols-2 gap-12 items-center"
                            initial={{
                                opacity: 0
                            }}
                            whileInView={{
                                opacity: 1
                            }}
                            viewport={{
                                once: true
                            }}
                            transition={{
                                duration: 0.8
                            }}>
                            <div>
                                <h2 className="text-3xl font-bold mb-6">供应链金融区块链解决方案</h2>
                                <p className="text-gray-200 mb-6 leading-relaxed">我们的解决方案以核心企业为中心，通过区块链技术构建可信的供应链金融生态系统。在核心企业供应链体系内设置多节点，发行可转让的区块链债务凭证，促进体系内债权的自由流动，降低供应链整体融资成本。
                                                                                                                                                                                                                                        </p>
                                <div className="flex items-start">
                                    <div className="text-blue-400 mr-3 mt-1">
                                        <i className="fas fa-check-circle text-xl"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1 text-blue-300">核心企业信用背书</h4>
                                        <p className="text-gray-200">利用核心企业的高信用评级为整个供应链提供信用支持，降低中小企业融资门槛
                                                                                                                                                                                                                                                                                               </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="text-green-400 mr-3 mt-1">
                                        <i className="fas fa-check-circle text-xl"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1 text-green-300">区块链隐私安全</h4>
                                        <p className="text-gray-200">采用隐私计算和加密技术，确保交易数据安全，同时保持数据透明度和可追溯性
                                                                                                                                                                                                                                                                                               </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="text-purple-400 mr-3 mt-1">
                                        <i className="fas fa-check-circle text-xl"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1 text-purple-300">可转让债务凭证</h4>
                                        <p className="text-gray-200">发行标准化、可拆分、可转让的区块链债务凭证，提高资金使用效率
                                                                                                                                                                                                                                                                                               </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="text-amber-400 mr-3 mt-1">
                                        <i className="fas fa-check-circle text-xl"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1 text-amber-300">多节点协作</h4>
                                        <p className="text-gray-200">在供应链体系内设置多个参与节点，包括核心企业、供应商、金融机构等，共同维护生态健康
                                                                                                                                                                                                                                                                                               </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img
                                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=blockchain%20supply%20chain%20finance%20platform%20concept&sign=516a1bb1db6266acb92527ebbf63d226"
                                    alt="供应链金融区块链解决方案"
                                    className="rounded-2xl shadow-xl w-full h-auto" />
                            </div>
                        </motion.div>
                    </div>
                </section>
                {}
                <section className="py-16 bg-gray-900 bg-grid relative">
                    <div className="absolute inset-0 overflow-hidden">
                        <div
                            className="absolute left-0 top-1/2 w-80 h-80 bg-purple-600/10 rounded-full filter blur-3xl transform -translate-y-1/2"></div>
                    </div>
                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            className="text-center mb-16"
                            initial={{
                                opacity: 0,
                                y: 20
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            viewport={{
                                once: true
                            }}
                            transition={{
                                duration: 0.6
                            }}>
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                                style={{
                                    color: "#FFFFFF"
                                }}>双轨制引擎解决方案</h2>
                            <p
                                className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                                style={{
                                    color: "#34D399"
                                }}>全方位解决不同类型的债务问题，为债权方和债务方创造价值
                                                                                                                                                                                                              </p>
                        </motion.div>
                        <div className="grid md:grid-cols-2 gap-16">
                            {}
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    x: -20
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0
                                }}
                                viewport={{
                                    once: true
                                }}
                                transition={{
                                    duration: 0.6
                                }}
                                className="bg-gray-800/90 rounded-2xl p-8 shadow-lg border border-gray-700">
                                <div className="text-blue-400 text-4xl mb-6">
                                    <i className="fas fa-cogs"></i>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">多边净额清算</h3>
                                <p
                                    className="text-gray-600 dark:text-gray-300 mb-6"
                                    style={{
                                        color: "#FFFFFF"
                                    }}>针对纯粹流动性错配型债务，利用高级图计算算法识别并抵销闭环债务。
                                                                                                                                                                                                                                        </p>
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-start">
                                        <div className="text-green-400 mr-3 mt-1">
                                            <i className="fas fa-check-circle"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1 text-green-300">对债权方的价值</h4>
                                            <p className="text-gray-200 text-sm">无需新增资金即可快速清偿债务，降低坏账风险，提高资金周转效率，改善财务状况</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="text-blue-400 mr-3 mt-1">
                                            <i className="fas fa-check-circle"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1 text-blue-300">对债务方的价值</h4>
                                            <p className="text-gray-200 text-sm">优化债务结构，降低整体负债规模，缓解流动性压力，维护企业信用评级</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="text-purple-400 mr-3 mt-1">
                                            <i className="fas fa-check-circle"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1 text-purple-300">图计算引擎</h4>
                                            <p className="text-gray-200 text-sm">引入高级图计算算法，精准识别复杂的债务闭环，最大化抵销效率</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            {}
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    x: 20
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0
                                }}
                                viewport={{
                                    once: true
                                }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.2
                                }}
                                className="bg-gray-800/90 rounded-2xl p-8 shadow-lg border border-gray-700">
                                <div className="text-purple-400 text-4xl mb-6">
                                    <i className="fas fa-exchange-alt"></i>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">债权流转与融资</h3>
                                <p
                                    className="text-gray-600 dark:text-gray-300 mb-6"
                                    style={{
                                        color: "#FFFFFF"
                                    }}>针对核心节点挤占型债务，提供高效的债权融资解决方案，促进资产流动。
                                                                                                                                                                                                                                        </p>
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-start">
                                        <div className="text-green-400 mr-3 mt-1">
                                            <i className="fas fa-check-circle"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1 text-green-300">对债权方的价值</h4>
                                            <p className="text-gray-200 text-sm">将应收账款快速变现，改善现金流，降低资金占用成本，扩大业务规模</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="text-blue-400 mr-3 mt-1">
                                            <i className="fas fa-check-circle"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1 text-blue-300">对债务方的价值</h4>
                                            <p className="text-gray-200 text-sm">延长付款周期，优化资金使用，加强供应链合作关系，提升供应链稳定性</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="text-amber-400 mr-3 mt-1">
                                            <i className="fas fa-check-circle"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1 text-amber-300">竞价收购机制</h4>
                                            <p className="text-gray-200 text-sm">引入多元化资金方进行竞价，降低融资成本，提高融资效率</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
                {}
                <section className="py-16 bg-gray-900 bg-grid relative">
                    <div className="absolute inset-0 overflow-hidden">
                        <div
                            className="absolute -left-32 bottom-0 w-64 h-64 bg-purple-600/10 rounded-full filter blur-3xl"></div>
                    </div>
                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            className="text-center mb-16"
                            initial={{
                                opacity: 0,
                                y: 20
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            viewport={{
                                once: true
                            }}
                            transition={{
                                duration: 0.6
                            }}>
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                                style={{
                                    color: "#FFFFFF"
                                }}>国际成功案例</h2>
                            <p
                                className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                                style={{
                                    color: "#FFFFFF"
                                }}>借鉴全球领先实践，打造适合本地的创新解决方案
                                                                                                                                                                                                              </p>
                        </motion.div>
                        <div className="grid md:grid-cols-2 gap-16">
                            {}
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 20
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}
                                viewport={{
                                    once: true
                                }}
                                transition={{
                                    duration: 0.6
                                }}
                                className="bg-gray-800/90 rounded-2xl shadow-lg overflow-hidden border border-gray-700">
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold mb-6 flex items-center">
                                        <span
                                            className="w-10 h-10 bg-green-900/30 rounded-full flex items-center justify-center text-green-400 mr-3">1</span>印度 TReDS 模式
                                                                                                                                                                                                                                                                   </h3>
                                    <p
                                        className="text-gray-600 dark:text-gray-300 mb-6"
                                        style={{
                                            color: "#FFFFFF"
                                        }}>印度贸易应收账款贴现系统（TReDS）是一个成功的供应链金融平台，通过数字化平台连接供应商、核心企业和金融机构，解决中小企业融资难题。
                                                                                                                                                                                                                                                                  </p>
                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-start">
                                            <div className="text-green-400 mr-3 mt-1">
                                                <i className="fas fa-check-circle"></i>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-1 text-green-300">业务亮点</h4>
                                                <p className="text-gray-200 text-sm">核心企业确权后，供应商可将应收账款在平台上进行融资，资金T+1日到账，无追索权融资模式降低了供应商风险</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="text-blue-400 mr-3 mt-1">
                                                <i className="fas fa-check-circle"></i>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-1 text-blue-300">市场影响</h4>
                                                <p className="text-gray-200 text-sm">截至2024年，TReDS平台年交易额已突破2000亿卢比，为超过10万家中小企业提供融资支持</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="text-purple-400 mr-3 mt-1">
                                                <i className="fas fa-check-circle"></i>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-1 text-purple-300">成功经验</h4>
                                                <p className="text-gray-200 text-sm">监管驱动与市场运作相结合，强制大型企业参与，建立多元化融资生态，采用竞价机制降低融资成本</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            {}
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 20
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}
                                viewport={{
                                    once: true
                                }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.2
                                }}
                                className="bg-gray-800/90 rounded-2xl shadow-lg overflow-hidden border border-gray-700">
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold mb-6 flex items-center">
                                        <span
                                            className="w-10 h-10 bg-blue-900/30 rounded-full flex items-center justify-center text-blue-400 mr-3">2</span>欧洲供应链金融模式
                                                                                                                                                                                                                                                                   </h3>
                                    <p
                                        className="text-gray-600 dark:text-gray-300 mb-6"
                                        style={{
                                            color: "#FFFFFF"
                                        }}>欧洲在供应链金融领域拥有成熟的实践经验，特别是在利用数字化技术提升供应链透明度和融资效率方面走在全球前列。
                                                                                                                                                                                                                                                                  </p>
                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-start">
                                            <div className="text-green-400 mr-3 mt-1">
                                                <i className="fas fa-check-circle"></i>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-1 text-green-300">业务亮点</h4>
                                                <p className="text-gray-200 text-sm">广泛采用区块链技术确保交易安全，建立完善的供应链金融法律框架，促进跨区域供应链资金流动</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="text-blue-400 mr-3 mt-1">
                                                <i className="fas fa-check-circle"></i>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-1 text-blue-300">市场影响</h4>
                                                <p className="text-gray-200 text-sm">欧洲投资银行估计，数字化供应链金融解决方案每年为欧盟企业节省超过300亿欧元的融资成本</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="text-purple-400 mr-3 mt-1">
                                                <i className="fas fa-check-circle"></i>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-1 text-purple-300">成功经验</h4>
                                                <p className="text-gray-200 text-sm">注重法律框架建设，推动标准化进程，鼓励金融科技创新，建立多方协作机制</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
                {}
                <section className="py-16 bg-gray-900 bg-grid relative">
                    <div className="absolute inset-0 overflow-hidden">
                        <div
                            className="absolute -right-32 top-20 w-64 h-64 bg-blue-600/10 rounded-full filter blur-3xl"></div>
                    </div>
                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            className="text-center mb-16"
                            initial={{
                                opacity: 0,
                                y: 20
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            viewport={{
                                once: true
                            }}
                            transition={{
                                duration: 0.6
                            }}>
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                                style={{
                                    color: "#FFFFFF"
                                }}>解决方案</h2>
                            <p
                                className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                                style={{
                                    color: "#FFFFFF"
                                }}>为供应链各参与方创造显著价值，优化整体生态
                                                                                                                                                                                                              </p>
                        </motion.div>
                        <motion.div
                            initial={{
                                opacity: 0
                            }}
                            whileInView={{
                                opacity: 1
                            }}
                            viewport={{
                                once: true
                            }}
                            transition={{
                                duration: 0.8
                            }}
                            className="grid md:grid-cols-3 gap-8">
                            {}
                            <div
                                className="bg-gray-800/90 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-700">
                                <div
                                    className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center text-blue-400 text-2xl mb-6">
                                    <i className="fas fa-building"></i>
                                </div>
                                <h3 className="text-xl font-bold mb-4">对核心企业</h3>
                                <ul className="text-gray-600 dark:text-gray-300 space-y-4">
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-green-400 mr-3 mt-1"></i>
                                        <span className="text-gray-200">优化现金流管理，延长付款周期，提高资金使用效率</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-blue-400 mr-3 mt-1"></i>
                                        <span className="text-gray-200">加强供应链稳定性，提升供应商满意度和忠诚度</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-purple-400 mr-3 mt-1"></i>
                                        <span className="text-gray-200">降低供应链整体融资成本，提升竞争力</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-amber-400 mr-3 mt-1"></i>
                                        <span className="text-gray-200">通过区块链技术提升供应链透明度和可追溯性</span>
                                    </li>
                                </ul>
                            </div>
                            {}
                            <div
                                className="bg-gray-800/90 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-700">
                                <div
                                    className="w-16 h-16 bg-green-900/30 rounded-full flex items-center justify-center text-green-400 text-2xl mb-6">
                                    <i className="fas fa-industry"></i>
                                </div>
                                <h3 className="text-xl font-bold mb-4">对供应商</h3>
                                <ul className="text-gray-600 dark:text-gray-300 space-y-4">
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-green-400 mr-3 mt-1"></i>
                                        <span className="text-gray-200">将应收账款快速变现，改善现金流，降低资金压力</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-blue-400 mr-3 mt-1"></i>
                                        <span className="text-gray-200">以核心企业信用获取低成本融资，降低融资门槛</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-purple-400 mr-3 mt-1"></i>
                                        <span className="text-gray-200">通过债务凭证转让，优化资产结构，降低财务风险</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-amber-400 mr-3 mt-1"></i>
                                        <span className="text-gray-200">提升与核心企业的合作关系，获得更多商业机会</span>
                                    </li>
                                </ul>
                            </div>
                            {}
                            <div
                                className="bg-gray-800/90 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-700">
                                <div
                                    className="w-16 h-16 bg-purple-900/30 rounded-full flex items-center justify-center text-purple-400 text-2xl mb-6">
                                    <i className="fas fa-university"></i>
                                </div>
                                <h3 className="text-xl font-bold mb-4">对金融机构</h3>
                                <ul className="text-gray-600 dark:text-gray-300 space-y-4">
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-green-400 mr-3 mt-1"></i>
                                        <span className="text-gray-200">拓展供应链金融业务，增加优质资产投放</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-blue-400 mr-3 mt-1"></i>
                                        <span className="text-gray-200">通过区块链技术降低风控成本和操作风险</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-purple-400 mr-3 mt-1"></i>
                                        <span className="text-gray-200">获取多元化客户群体，提升综合金融服务能力</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-amber-400 mr-3 mt-1"></i>
                                        <span className="text-gray-200">参与创新金融生态建设，提升市场竞争力</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </section>
                {}
                <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
                    <div className="container mx-auto px-4 text-center">
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            viewport={{
                                once: true
                            }}
                            transition={{
                                duration: 0.6
                            }}>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">开启供应链金融创新之旅</h2>
                            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">立即联系我们，了解如何通过区块链技术优化您的供应链金融生态，降低融资成本，提升运营效率
                                                                                                                                                                                                              </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link to="/macau-advantages">
                                    <button
                                        className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full text-lg font-medium transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">了解澳门优势
                                                                                                                                                                                                                                                                  </button>
                                </Link>
                                <Link to="/contact">
                                    <button
                                        className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full text-lg font-medium transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">联系我们
                                                                                                                                                                                                                                                                  </button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
      </div>
         </div>
  );
};

export default SolutionCasesPage;