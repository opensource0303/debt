import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MacauAdvantagesPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">澳门优势</h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto text-center">利用澳门独特的制度、资金和数据优势，打造领先的供应链金融创新平台
                                                          </p>
                </motion.section>
                {}
                <section className="py-16 bg-gray-900 bg-grid relative">
                    <div className="absolute inset-0 overflow-hidden">
                        <div
                            className="absolute right-0 top-1/2 w-80 h-80 bg-blue-600/10 rounded-full filter blur-3xl transform -translate-y-1/2"></div>
                    </div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="grid md:grid-cols-3 gap-8">
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
                                    duration: 0.5
                                }}
                                className="bg-gray-800/90 rounded-2xl shadow-lg overflow-hidden border border-gray-700">
                                <div className="h-4 bg-blue-600"></div>
                                <div className="p-8">
                                    <div className="text-blue-600 dark:text-blue-400 text-4xl mb-6">
                                        <i className="fas fa-balance-scale"></i>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">制度优势</h3>
                                    <p className="text-gray-200 mb-6">澳门作为特别行政区，拥有独立的法律体系和司法管辖权，为区块链金融创新提供了灵活的制度环境。
                                                                                                  </p>
                                    <div className="space-y-4 mb-6">
                                        <div className="flex items-start">
                                            <div className="text-blue-600 dark:text-blue-400 mr-3 mt-1">
                                                <i className="fas fa-check-circle"></i>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-1">独立法律体系</h4>
                                                <p
                                                    className="text-gray-600 dark:text-gray-300 text-sm"
                                                    style={{
                                                        color: "#B6BBCC"
                                                    }}>基于葡萄牙法律体系，与国际接轨，为金融创新提供稳定、透明的法律保障</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="text-blue-600 dark:text-blue-400 mr-3 mt-1">
                                                <i className="fas fa-check-circle"></i>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-1">灵活的立法环境</h4>
                                                <p
                                                    className="text-gray-600 dark:text-gray-300 text-sm"
                                                    style={{
                                                        color: "#B6BBCC"
                                                    }}>可根据平台发展需要，制定专门的法律法规和监管框架，支持金融科技创新</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="text-blue-600 dark:text-blue-400 mr-3 mt-1">
                                                <i className="fas fa-check-circle"></i>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-1">国际认可</h4>
                                                <p
                                                    className="text-gray-600 dark:text-gray-300 text-sm"
                                                    style={{
                                                        color: "#B6BBCC"
                                                    }}>澳门的法律体系得到国际社会广泛认可，有利于吸引国际投资者和金融机构参与平台</p>
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
                                    duration: 0.5,
                                    delay: 0.1
                                }}
                                className="bg-gray-800/90 rounded-2xl shadow-lg overflow-hidden border border-gray-700">
                                <div className="h-4 bg-green-600"></div>
                                <div className="p-8">
                                    <div className="text-green-600 dark:text-green-400 text-4xl mb-6">
                                        <i className="fas fa-money-bill-wave"></i>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">资金优势</h3>
                                    <p className="text-gray-200 mb-6">澳门作为国际金融中心，拥有丰富的资金资源和多元化的金融机构，为供应链金融提供强大的资金支持。
                                                                                                  </p>
                                    <div className="space-y-4 mb-6">
                                        <div className="flex items-start">
                                            <div className="text-green-600 dark:text-green-400 mr-3 mt-1">
                                                <i className="fas fa-check-circle"></i>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-1">低成本资金</h4>
                                                <p
                                                    className="text-gray-600 dark:text-gray-300 text-sm"
                                                    style={{
                                                        color: "#B6BBCC"
                                                    }}>作为自由港，资金成本显著低于内地，有利于降低平台融资成本，提升市场竞争力</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="text-green-600 dark:text-green-400 mr-3 mt-1">
                                                <i className="fas fa-check-circle"></i>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-1">离岸人民币优势</h4>
                                                <p
                                                    className="text-gray-600 dark:text-gray-300 text-sm"
                                                    style={{
                                                        color: "#B6BBCC"
                                                    }}>拥有大量沉淀的离岸人民币，为内地企业提供跨境融资支持，解决跨境贸易中的资金结算问题</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="text-green-600 dark:text-green-400 mr-3 mt-1">
                                                <i className="fas fa-check-circle"></i>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-1">多元化金融机构</h4>
                                                <p
                                                    className="text-gray-600 dark:text-gray-300 text-sm"
                                                    style={{
                                                        color: "#B6BBCC"
                                                    }}>聚集了众多国际银行和金融机构，为平台提供多元化的资金来源和金融服务支持</p>
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
                                    duration: 0.5,
                                    delay: 0.2
                                }}
                                className="bg-gray-800/90 rounded-2xl shadow-lg overflow-hidden border border-gray-700">
                                <div className="h-4 bg-purple-600"></div>
                                <div className="p-8">
                                    <div className="text-purple-600 dark:text-purple-400 text-4xl mb-6">
                                        <i className="fas fa-database"></i>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">数据特区优势</h3>
                                    <p className="text-gray-200 mb-6">横琴粤澳深度合作区作为"数据海关"，为跨境数据流动提供了创新试点，解决了供应链金融中的数据核验难题。
                                                                                                  </p>
                                    <div className="space-y-4 mb-6">
                                        <div className="flex items-start">
                                            <div className="text-purple-600 dark:text-purple-400 mr-3 mt-1">
                                                <i className="fas fa-check-circle"></i>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-1">横琴深合区政策</h4>
                                                <p
                                                    className="text-gray-600 dark:text-gray-300 text-sm"
                                                    style={{
                                                        color: "#B6BBCC"
                                                    }}>作为"数据海关"，在数据跨境流动方面享有特殊政策，为平台解决跨境数据合规问题提供便利</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="text-purple-600 dark:text-purple-400 mr-3 mt-1">
                                                <i className="fas fa-check-circle"></i>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-1">隐私计算技术</h4>
                                                <p
                                                    className="text-gray-600 dark:text-gray-300 text-sm"
                                                    style={{
                                                        color: "#B6BBCC"
                                                    }}>采用联邦学习或零知识证明技术，实现"数据可用不可见"，既保护数据隐私，又实现数据有效利用</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="text-purple-600 dark:text-purple-400 mr-3 mt-1">
                                                <i className="fas fa-check-circle"></i>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-1">跨境风控能力</h4>
                                                <p
                                                    className="text-gray-600 dark:text-gray-300 text-sm"
                                                    style={{
                                                        color: "#B6BBCC"
                                                    }}>解决了跨境贸易中的风控痛点，提高了平台的风险管理能力和交易安全性</p>
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
                            className="absolute -left-32 top-20 w-64 h-64 bg-purple-600/10 rounded-full filter blur-3xl"></div>
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
                                }}>区位与政策优势</h2>
                            <p
                                className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                                style={{
                                    color: "#B6BBCC"
                                }}>澳门独特的区位优势和政策支持，为供应链金融创新提供了理想环境
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
                            className="grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <img
                                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=macau%20financial%20district%20skyline&sign=5183b249364e3b34b989a86ae98724aa"
                                    alt="澳门金融区"
                                    className="rounded-2xl shadow-xl w-full h-auto" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-6">独特的"一国两制"优势</h3>
                                <p className="text-gray-200 mb-6 leading-relaxed">澳门作为中国与世界的桥梁，凭借"一国两制"的独特优势，在制度创新、资金流动、人才交流等方面具备显著优势，为供应链金融平台的发展提供了理想条件。
                                                                                        </p>
                                <div className="space-y-6">
                                    <div className="bg-gray-800/90 p-6 rounded-xl border border-gray-700">
                                        <h4 className="text-xl font-semibold mb-3 text-blue-400">粤港澳大湾区核心节点</h4>
                                        <p className="text-gray-200">作为粤港澳大湾区的重要组成部分，澳门连接内地与国际市场，为供应链金融平台提供了广阔的市场空间和丰富的应用场景。
                                                                                                             </p>
                                    </div>
                                    <div className="bg-gray-800/90 p-6 rounded-xl border border-gray-700">
                                        <h4 className="text-xl font-semibold mb-3 text-green-400">政策支持体系</h4>
                                        <p className="text-gray-200">澳门政府积极推动金融创新和产业多元化，出台了一系列支持金融科技发展的政策措施，为供应链金融平台提供了有力的政策保障。
                                                                                                             </p>
                                    </div>
                                    <div className="bg-gray-800/90 p-6 rounded-xl border border-gray-700">
                                        <h4 className="text-xl font-semibold mb-3 text-purple-400">国际合作平台</h4>
                                        <p className="text-gray-200">澳门与葡语国家和地区保持着密切联系，是中国与葡语国家商贸合作服务平台，为供应链金融平台的国际化发展提供了独特优势。
                                                                                                             </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
                {}
                <section className="py-16 bg-gray-900 bg-grid relative">
                    <div className="absolute inset-0 overflow-hidden">
                        <div
                            className="absolute left-0 bottom-0 w-80 h-80 bg-blue-600/10 rounded-full filter blur-3xl"></div>
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
                                }}>技术创新优势</h2>
                            <p
                                className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                                style={{
                                    color: "#B6BBCC"
                                }}>依托先进技术，打造安全、高效、智能的供应链金融平台
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
                                className="bg-gray-800/90 rounded-2xl shadow-lg p-8 border border-gray-700">
                                <div className="text-blue-400 text-4xl mb-6">
                                    <i className="fas fa-shield-alt"></i>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">隐私计算与区块链技术</h3>
                                <p className="text-gray-200 mb-6">我们采用先进的隐私计算和区块链技术，确保交易数据的安全性、隐私性和不可篡改性。
                                                                                         </p>
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-start">
                                        <div className="text-blue-400 mr-3 mt-1">
                                            <i className="fas fa-check-circle"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1 text-blue-300">零知识证明</h4>
                                            <p className="text-gray-200 text-sm">在不泄露具体交易数据的情况下，验证交易的真实性和有效性</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="text-blue-400 mr-3 mt-1">
                                            <i className="fas fa-check-circle"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1 text-blue-300">多方安全计算</h4>
                                            <p className="text-gray-200 text-sm">多个参与方在不共享原始数据的情况下，共同完成数据计算和分析</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="text-blue-400 mr-3 mt-1">
                                            <i className="fas fa-check-circle"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1 text-blue-300">权威区块链存证</h4>
                                            <p className="text-gray-200 text-sm">利用区块链技术对交易数据进行存证，确保数据的不可篡改性和可追溯性</p>
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
                                className="bg-gray-800/90 rounded-2xl shadow-lg p-8 border border-gray-700">
                                <div className="text-green-400 text-4xl mb-6">
                                    <i className="fas fa-brain"></i>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">智能风控与数据分析</h3>
                                <p className="text-gray-200 mb-6">通过大数据分析和人工智能技术，构建智能风控模型，提升风险管理能力和决策效率。
                                                                                          </p>
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-start">
                                        <div className="text-green-400 mr-3 mt-1">
                                            <i className="fas fa-check-circle"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1 text-green-300">供应链图谱分析</h4>
                                            <p className="text-gray-200 text-sm">构建供应链网络图谱，识别关键节点和风险传导路径，提升风险预警能力</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="text-green-400 mr-3 mt-1">
                                            <i className="fas fa-check-circle"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1 text-green-300">智能合约自动化</h4>
                                            <p className="text-gray-200 text-sm">利用智能合约实现交易自动化执行，降低操作风险和人工成本</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="text-green-400 mr-3 mt-1">
                                            <i className="fas fa-check-circle"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1 text-green-300">实时风险监控</h4>
                                            <p className="text-gray-200 text-sm">建立实时风险监控系统，及时发现和处置潜在风险，保障平台安全运行</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
                {}
                <></>
            </main>
            <Footer />
      </div>
             </div>
  );
};

export default MacauAdvantagesPage;