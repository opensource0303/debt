import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="pt-28 pb-20 bg-gray-900 bg-grid overflow-hidden relative">
            {}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute -right-32 top-20 w-64 h-64 bg-blue-600/20 rounded-full filter blur-3xl"></div>
                <div
                    className="absolute left-1/4 bottom-10 w-80 h-80 bg-purple-600/20 rounded-full filter blur-3xl"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center">
                    <div
                        className="lg:w-1/2 mb-10 lg:mb-0"
                        style={{
                            margin: "0px",
                            padding: "0px"
                        }}>
                        <motion.div
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
                            <div className="mb-6">
                                <img
                                    src="https://s.coze.cn/t/z8Q93p0xjqM/"
                                    alt="链清 Cred"
                                    className="w-24 h-auto" />
                            </div>
                            <h1
                                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 text-shadow">链清<br />
                                <span
                                    className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">Cred</span>
                            </h1>
                            <p
                                className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">赋能核心企业，以核心企业为载体进行供应链金融的区块链改造，促进债务凭证在核心企业供应链范围内自由流动，降低供应链体系的外部融资需求与内部循环负债水平。
                                                            </p>
                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                <Link to="/solutions-cases">
                                    <button
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">解决方案与案例
                                                                            </button>
                                </Link>
                                <Link to="/macau-advantages">
                                    <button
                                        className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-full text-lg font-medium border border-gray-700 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">澳门优势
                                                                            </button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                    <motion.div
                        className="lg:w-1/2"
                        initial={{
                            opacity: 0,
                            x: 20
                        }}
                        animate={{
                            opacity: 1,
                            x: 0
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2
                        }}>
                        <div className="relative">
                            <div
                                className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-75"></div>
                            <img
                                src="https://lf-code-agent.coze.cn/obj/x-ai-cn/346738007298/attachment/风格_20260119194444.png"
                                alt="Cred Platform"
                                className="relative z-10 rounded-2xl shadow-xl w-full h-auto" />
                        </div>
                    </motion.div>
                </div>
                {}
                <div className="mt-24">
                    <p className="text-center text-gray-400 mb-8">平台核心亮点</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:shadow-lg transition-shadow hover:border-blue-500/50"
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
                            }}>
                            <div className="text-blue-400 text-3xl mb-4">
                                <i className="fas fa-balance-scale"></i>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">法律优势</h3>
                            <p className="text-gray-400">澳门《商业法典》与葡萄牙及欧洲大陆法系一脉相承，为引入成熟的欧洲清算规则提供了法理基础。</p>
                        </motion.div>
                        <motion.div
                            className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:shadow-lg transition-shadow hover:border-blue-500/50"
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
                            }}>
                            <div className="text-blue-400 text-3xl mb-4">
                                <i className="fas fa-money-bill-wave"></i>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">资金优势</h3>
                            <p className="text-gray-400">澳门作为自由港，资金成本显著低于内地，且拥有大量沉淀的离岸人民币，为平台提供资金支持。</p>
                        </motion.div>
                        <motion.div
                            className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:shadow-lg transition-shadow hover:border-blue-500/50"
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
                            }}>
                            <div className="text-blue-400 text-3xl mb-4">
                                <i className="fas fa-shield-alt"></i>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">隐私计算</h3>
                            <p className="text-gray-400">采用零知识证明和多方安全计算技术，在保护商业秘密的同时实现数据有效利用，解决跨境风控痛点。</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;