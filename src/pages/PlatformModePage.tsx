import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PlatformModePage = () => {
const advantages = [{
        title: "系统化化债能力",
        subtitle: "将“乱账”变“清账”",
        description: "以电子确权与智能轧差为基础，从根本上化解结构性债务风险，服务经济长期稳定运行。",
        icon: "fa-balance-scale",
        color: "from-blue-600 to-indigo-600",
        delay: 0
    }, {
        title: "资产激活能力",
        subtitle: "盘活资产、释放价值",
        description: "将应收账款、债权与困境资产转化为可交易、可定价的标准化资产包，为政府和企业释放被锁死的资产价值。",
        icon: "fa-rocket",
        color: "from-green-600 to-teal-600",
        delay: 0.1
    }, {
        title: "先进技术底座",
        subtitle: "技术让信任可验证",
        description: "运用AI、区块链、隐私技术、大数据技术，增强资产确权、定价与风控能力，为政府、企业和投资者提供可核验的信用基础。",
        icon: "fa-microchip",
        color: "from-purple-600 to-pink-600",
        delay: 0.2
    }, {
        title: "国际资本直连能力",
        subtitle: "让中国资产对话全球资金",
        description: "具备离岸人民币发债与跨境融资能力，帮助地方政府和企业对接长期、稳定、合规的国际资本来源。",
        icon: "fa-globe",
        color: "from-amber-600 to-orange-600",
        delay: 0.3
    }];

    return (
        <div className="min-h-screen text-white tech-gradient-bg">
            <div className="bg-overlay min-h-screen">
                <Navbar />
                <main className="pt-16 pb-16">
                    {}
                    <motion.section
                        className="container mx-auto px-6 md:px-8 mb-12 mt-8"
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
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">特色优势</h1>
                         <p
  className="text-xl text-gray-300 max-w-3xl mx-auto text-center leading-relaxed">Cred交易所凭借四大核心能力，为解决债务问题提供全方位解决方案
                                                    </p>
                    </motion.section>
                    {}
                    <section className="py-16 relative mb-20">
                        <div className="absolute inset-0 overflow-hidden">
                            <motion.div
                                className="absolute right-0 top-1/2 w-80 h-80 bg-blue-600/10 rounded-full filter blur-3xl transform -translate-y-1/2"
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
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                {advantages.map((advantage, index) => <motion.div
                                    key={index}
                                     className="bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-gray-700 flex flex-col"
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
                                        duration: 0.6,
                                        delay: advantage.delay
                                    }}
                                    whileHover={{
                                        y: -5,
                                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
                                    }}>
                                    <div className={`h-2 bg-gradient-to-r ${advantage.color}`}></div>
                                     <div className="p-6 sm:p-8 flex flex-col h-full">
                                        <div className="flex items-center mb-5">
                                            <div
                                                className={`w-14 h-14 rounded-full bg-gradient-to-r ${advantage.color} flex items-center justify-center text-white text-2xl mr-4 shrink-0`}>
                                                <i className={`fas ${advantage.icon}`}></i>
                                            </div>
                                            <div>
                                                <h3 className="text-xl sm:text-2xl font-bold">{advantage.title}</h3>
                                                <p className="text-blue-300 text-base sm:text-lg">{advantage.subtitle}</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 flex-grow">
                                            {advantage.description}</p>
                                        <motion.div
                                            className={`h-1 w-20 bg-gradient-to-r ${advantage.color} rounded-full mt-auto`}
                                            initial={{
                                                width: 0
                                            }}
                                            whileInView={{
                                                width: 80
                                            }}
                                            viewport={{
                                                once: true
                                            }}
                                            transition={{
                                                duration: 0.8,
                                                delay: advantage.delay + 0.3
                                            }}></motion.div>
                                    </div>
                                </motion.div>)}
                            </div>
                        </div>
                    </section>
                    {}
                    <section className="py-16 bg-gray-900/70 relative mb-20">
                        <div className="absolute inset-0 overflow-hidden">
                            <motion.div
                                className="absolute -left-32 bottom-0 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl"
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
                        <div className="container mx-auto px-6 md:px-8 relative z-10">
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
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">技术与创新</h2>
                                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">我们融合先进技术与创新模式，打造高效、安全、可靠的资产交易与管理平台
                                                                    </p>
                            </motion.div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                                    className="bg-gray-800/90 backdrop-blur-md p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 group"
                                    whileHover={{
                                        y: -5
                                    }}>
                                    <div
                                        className="text-blue-400 text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <i className="fas fa-shield-alt"></i>
                                    </div>
                                    <h3
                                        className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text">隐私计算技术</h3>
                                    <p className="text-gray-300 leading-relaxed">采用零知识证明和多方安全计算技术，在严格保护参与方商业秘密与隐私信息的前提下，精准挖掘债务闭环。
                                                                            </p>
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
                                    className="bg-gray-800/90 backdrop-blur-md p-8 rounded-2xl border border-gray-700 hover:border-green-500/50 hover:shadow-xl transition-all duration-300 group"
                                    whileHover={{
                                        y: -5
                                    }}>
                                    <div
                                        className="text-green-400 text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <i className="fas fa-link"></i>
                                    </div>
                                    <h3
                                        className="text-xl font-bold mb-4 bg-gradient-to-r from-green-400 to-teal-400 text-transparent bg-clip-text">权威区块链存证</h3>
                                    <p className="text-gray-300 leading-relaxed">区块链存证和电子签章技术确保债务清偿全流程具备法律效力，为后续司法衔接提供标准化证据。
                                                                            </p>
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
                                    className="bg-gray-800/90 backdrop-blur-md p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 hover:shadow-xl transition-all duration-300 group"
                                    whileHover={{
                                        y: -5
                                    }}>
                                    <div
                                        className="text-purple-400 text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <i className="fas fa-brain"></i>
                                    </div>
                                    <h3
                                        className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">AI与大数据分析</h3>
                                    <p className="text-gray-300 leading-relaxed">运用人工智能和大数据技术，构建智能风控模型，提升风险管理能力和决策效率，实现资产精准定价。
                                                                            </p>
                                </motion.div>
                                {}
                                <></>
                                {}
                                <></>
                                {}
                                <></>
                            </div>
                        </div>
                    </section>
                    {}
                    <motion.section
                        className="py-20 text-center relative mb-16"
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
                        <div className="container mx-auto px-6 md:px-8">
                            <div className="max-w-3xl mx-auto">
                                 <motion.h2
  className="text-3xl md:text-4xl font-bold text-white mb-6"
  initial={{
      y: 20
  }}
  whileInView={{
      y: 0
  }}
  viewport={{
      once: true
  }}
  transition={{
      duration: 0.6,
      delay: 0.2
  }}>Cred交易所，连接资产，连接信任
                                                                    </motion.h2>
                                <motion.p
                                    className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                                    initial={{
                                        y: 20
                                    }}
                                    whileInView={{
                                        y: 0
                                    }}
                                    viewport={{
                                        once: true
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.4
                                    }}>我们致力于通过创新技术和专业服务，构建安全、智能、可靠的国际化资产交易与管理平台
                                                                    </motion.p>
                            </div>
                        </div>
                    </motion.section>
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default PlatformModePage;