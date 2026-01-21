import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="pt-32 pb-24 bg-gray-900 bg-grid overflow-hidden relative">
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute -right-32 top-20 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl"
                    animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.3, 0.4, 0.3]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}></motion.div>
                <motion.div
                    className="absolute left-1/4 bottom-10 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.3, 0.2]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}></motion.div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <motion.div
                        className="lg:w-1/2"
                        initial={{
                            opacity: 0,
                            y: 30
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 0.8
                        }}>
                        <div className="mb-6">
                            <motion.img
                                src="https://s.coze.cn/t/z8Q93p0xjqM/"
                                alt="可信达 Cred"
                                className="w-24 h-auto" />
                        </div>
                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-[clamp(2.5rem,5vw,4rem)] font-bold text-white leading-tight mb-6 text-shadow"
                            initial={{
                                y: 20,
                                opacity: 0
                            }}
                            animate={{
                                y: 0,
                                opacity: 1
                            }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8
                            }}>可信达<br />
                            <span
                                className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">Cred</span>
                        </motion.h1>
                        <motion.p
                            className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl"
                            initial={{
                                y: 20,
                                opacity: 0
                            }}
                            animate={{
                                y: 0,
                                opacity: 1
                            }}
                            transition={{
                                delay: 0.4,
                                duration: 0.8
                            }}>化解债务危机，盘活困境资产<br />出品债权资产，赋能产业布局
                                                                                </motion.p>
                        <motion.div
                            className="flex flex-col sm:flex-row flex-wrap gap-4"
                            initial={{
                                y: 20,
                                opacity: 0
                            }}
                            animate={{
                                y: 0,
                                opacity: 1
                            }}
                            transition={{
                                delay: 0.5,
                                duration: 0.8
                            }}>
                            <Link to="/solutions-cases">
                                <button className="btn-primary text-lg px-8 py-4">解决方案与案例</button>
                            </Link>
                            <Link to="/macau-advantages">
                                <button className="btn-secondary text-lg px-8 py-4">澳门优势</button>
                            </Link>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="lg:w-1/2"
                        initial={{
                            opacity: 0,
                            x: 50
                        }}
                        animate={{
                            opacity: 1,
                            x: 0
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.6
                        }}>
                        <div className="relative">
                            <div
                                className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-75 animate-pulse"></div>
          {/* 添加图片加载优化 */}
          <motion.img
            src="https://lf-code-agent.coze.cn/obj/x-ai-cn/346738007298/attachment/无汉字_20260121134928.png"
            alt="Cred Platform"
            className="relative z-10 rounded-2xl shadow-xl w-full h-auto"
            loading="lazy"
            whileHover={{
              scale: 1.02
            }}
            transition={{
              duration: 0.3
            }} />
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    className="mt-32"
                    initial={{
                        opacity: 0,
                        y: 30
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    viewport={{
                        once: true
                    }}
                    transition={{
                        duration: 0.8
                    }}>
                    <h2 className="section-title text-center">平台核心亮点</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:shadow-lg transition-all duration-300 hover:border-blue-500/50 card-hover"
                            whileHover={{
                                y: -5
                            }}
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
                            <h3 className="text-xl font-bold text-white mb-3">法律优势</h3>
                            <p className="text-gray-400 leading-relaxed">澳门《商业法典》与葡萄牙及欧洲大陆法系一脉相承，为引入成熟的欧洲清算规则提供了法理基础。
                                                                                            </p>
                        </motion.div>
                        <motion.div
                            className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:shadow-lg transition-all duration-300 hover:border-blue-500/50 card-hover"
                            whileHover={{
                                y: -5
                            }}
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
                            <h3 className="text-xl font-bold text-white mb-3">资金优势</h3>
                            <p className="text-gray-400 leading-relaxed">澳门作为自由港，资金成本显著低于内地，且拥有大量沉淀的离岸人民币，为平台提供资金支持。
                                                                                            </p>
                        </motion.div>
                        <motion.div
                            className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:shadow-lg transition-all duration-300 hover:border-blue-500/50 card-hover"
                            whileHover={{
                                y: -5
                            }}
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
                            <h3 className="text-xl font-bold text-white mb-3">隐私计算</h3>
                            <p className="text-gray-400 leading-relaxed">采用零知识证明和多方安全计算技术，在保护商业秘密的同时实现数据有效利用，解决跨境风控痛点。
                                                                                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;