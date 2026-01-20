import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const PlatformModePage = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <Navbar />
            <main className="pt-24 pb-16">
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
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">产品优势</h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto text-center">
                        领先的技术核心优势，为您提供安全、高效的解决方案
                    </p>
                </motion.section>
                
                <section className="py-16 bg-gray-900 bg-grid relative">
                    <div className="absolute inset-0 overflow-hidden">
                        <div
                            className="absolute left-1/4 top-1/2 w-80 h-80 bg-blue-600/10 rounded-full filter blur-3xl transform -translate-y-1/2"></div>
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
                                }}>核心技术优势</h2>
                            <p
                                className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                                style={{
                                    color: "#B6BBCC"
                                }}>隐私计算与权威区块链存证技术的创新应用
                                                                                </p>
                        </motion.div>
                        <div className="grid md:grid-cols-2 gap-16">
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
                                <div className="text-blue-600 dark:text-blue-400 text-4xl mb-6">
                                    <i className="fas fa-user-shield"></i>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">隐私计算技术</h3>
                                <p className="text-gray-200 mb-6">采用先进的隐私计算技术，在保护企业商业秘密的同时，实现三角债、多角债的高效清算。
                                                                                          </p>
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-start">
                                        <div className="text-blue-600 dark:text-blue-400 mr-3 mt-1">
                                            <i className="fas fa-check-circle"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1">零知识证明</h4>
                                            <p
                                                className="text-gray-600 dark:text-gray-300 text-sm"
                                                style={{
                                                    color: "#B6BBCC"
                                                }}>在不泄露具体交易数据的情况下，验证交易的真实性和有效性，保护企业商业秘密</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="text-blue-600 dark:text-blue-400 mr-3 mt-1">
                                            <i className="fas fa-check-circle"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1">多方安全计算</h4>
                                            <p
                                                className="text-gray-600 dark:text-gray-300 text-sm"
                                                style={{
                                                    color: "#B6BBCC"
                                                }}>多个参与方在不共享原始数据的情况下，共同完成数据计算和分析，实现数据"可用不可见"</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="text-blue-600 dark:text-blue-400 mr-3 mt-1">
                                            <i className="fas fa-check-circle"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1">联邦学习</h4>
                                            <p
                                                className="text-gray-600 dark:text-gray-300 text-sm"
                                                style={{
                                                    color: "#B6BBCC"
                                                }}>在数据不出本地的情况下，联合多方数据进行模型训练，提升风控模型的准确性</p>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=privacy%20computing%20technology%20visualization&sign=56d80e44a1ac07e502fc795d1571aaef"
                                    alt="隐私计算技术"
                                    className="rounded-xl w-full h-auto" />
                            </motion.div>
                            
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
                                <div className="text-green-600 dark:text-green-400 text-4xl mb-6">
                                    <i className="fas fa-link"></i>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">权威区块链存证</h3>
                                <p className="text-gray-200 mb-6">利用区块链技术对交易数据进行存证，支持与澳门交易所(MOX)合作发债，增强融资能力。
                                                                                          </p>
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-start">
                                        <div className="text-green-600 dark:text-green-400 mr-3 mt-1">
                                            <i className="fas fa-check-circle"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1">不可篡改</h4>
                                            <p
                                                className="text-gray-600 dark:text-gray-300 text-sm"
                                                style={{
                                                    color: "#B6BBCC"
                                                }}>利用区块链分布式账本技术，确保交易数据一旦上链，无法被篡改，保障数据的真实性和完整性</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="text-green-600 dark:text-green-400 mr-3 mt-1">
                                            <i className="fas fa-check-circle"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1">可追溯性</h4>
                                            <p
                                                className="text-gray-600 dark:text-gray-300 text-sm"
                                                style={{
                                                    color: "#B6BBCC"
                                                }}>所有交易记录均有时间戳和完整的流转路径，实现全流程可追溯，便于审计和监管</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="text-green-600 dark:text-green-400 mr-3 mt-1">
                                            <i className="fas fa-check-circle"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1">法律保障</h4>
                                            <p
                                                className="text-gray-600 dark:text-gray-300 text-sm"
                                                style={{
                                                    color: "#B6BBCC"
                                                }}>符合《电子签名法》等相关法律法规要求，具备法律效力，为交易提供法律保障</p>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=blockchain%20technology%20for%20document%20verification&sign=ff4f06b8a3ee35cfd904edcebc81b7fd"
                                    alt="区块链存证技术"
                                    className="rounded-xl w-full h-auto" />
                            </motion.div>
                        </div>
                    </div>
                </section>
                
                <section className="py-16 bg-gray-900 bg-grid relative">
                    <div className="absolute inset-0 overflow-hidden">
                        <div
                            className="absolute right-0 bottom-0 w-80 h-80 bg-purple-600/10 rounded-full filter blur-3xl"></div>
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
                                }}>核心价值</h2>
                            <p
                                className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                                style={{
                                    color: "#B6BBCC"
                                }}>我们的使命与价值主张
                                                                                </p>
                        </motion.div>
                        <div className="grid md:grid-cols-3 gap-8">
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
                                className="bg-gray-800/90 rounded-2xl shadow-lg p-8 border border-gray-700">
                                <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center text-blue-400 text-3xl mb-6">
                                    <i className="fas fa-flag"></i>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">为国分忧，为企排雷</h3>
                                <p className="text-gray-200">
                                    协助政府和企业有效解决三角债、多角债问题，防范化解金融风险，维护经济社会稳定发展。
                                </p>
                            </motion.div>
                            
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
                                className="bg-gray-800/90 rounded-2xl shadow-lg p-8 border border-gray-700">
                                <div className="w-16 h-16 bg-purple-900/30 rounded-full flex items-center justify-center text-purple-400 text-3xl mb-6">
                                    <i className="fas fa-magic"></i>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">化债化得好，腐朽变神奇</h3>
                                <p className="text-gray-200">
                                    通过创新技术和商业模式，将不良债权转化为可流通的金融资产，实现资产价值的重新发现和提升。
                                </p>
                            </motion.div>
                            
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
                                className="bg-gray-800/90 rounded-2xl shadow-lg p-8 border border-gray-700">
                                <div className="w-16 h-16 bg-green-900/30 rounded-full flex items-center justify-center text-green-400 text-3xl mb-6">
                                    <i className="fas fa-butterfly"></i>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">助力解困，化茧成蝶</h3>
                                <p className="text-gray-200">
                                    帮助陷入债务困境的企业和个人摆脱困境，重获新生，实现可持续发展和转型升级。
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>
                
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
                            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">立即联系我们，了解如何通过我们的平台解决三角债问题，盘活存量资产，提升企业竞争力
                                                                                </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link to="/contact">
                                    <button
                                        className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full text-lg font-medium transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">咨询我们
                                                                                                    </button>
                                </Link>
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