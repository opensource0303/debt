import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProductServicePage = () => {
    const services = [{
        title: "智能化债",
        description: "电子确权+智能轧差，把乱账变清账，化解三角债、多角债。",
        icon: "fa-balance-scale",
        color: "from-blue-600 to-indigo-600",

        details: [
            "通过先进的区块链技术和智能算法，实现债权债务的快速匹配和高效冲抵",
            "提供电子确权服务，确保债务关系的真实性和法律效力",
            "运用图计算和大数据技术，精准识别复杂的债务闭环",
            "生成具有法律约束力的净额结算指令，实现无资金的债务清算"
        ]
    }, {
        title: "国际发债",
        description: "专注离岸人民币债券发行（澳交所MOX等），助力全球化融资，拓展国际市场资本。",
        icon: "fa-exchange-alt",
        color: "from-green-600 to-teal-600",

        details: [
            "提供澳门交易所（MOX）债券发行的全流程服务",
            "协助企业制定国际化融资策略，降低融资成本",
            "对接国际投资者，拓展融资渠道",
            "提供专业的债券结构设计和法律咨询服务"
        ]
    }, {
        title: "债权资产工厂",
        description: "打造AAA级高可信资产供给端，运用AI、区块链、大数据等技术，筛选并盘活应收账款、债权和困境资产，构建标准化、清洁、可审计、可披露、可定价、可转让的资产包/产品。",
        icon: "fa-industry",
        color: "from-purple-600 to-pink-600",

        details: [
            "应用人工智能和大数据技术进行资产筛选和风险评估",
            "使用区块链技术确保资产信息的透明、安全和不可篡改",
            "提供资产标准化和结构化服务，提升资产流动性",
            "构建多层次、多元化的资产池，满足不同投资者需求"
        ]
    }, {
        title: "资产持续管理",
        description: "为投资者提供全面的尽职调查、法律结构设计、资产接管、重组谈判与管理、风险分层、持续回款报告及资产处置建议，确保投资增值，并定期提供执行与处置报告。",
        icon: "fa-chart-line",
        color: "from-amber-600 to-orange-600",

        details: [
            "提供全面的资产尽职调查和风险评估服务",
            "设计优化的法律结构，保障投资者权益",
            "实施专业的资产接管和重组管理",
            "提供定期的资产执行和处置报告，确保投资透明度"
        ]
    }];

    return (
        <div className="min-h-screen text-white tech-gradient-bg">
            <div className="bg-overlay min-h-screen">
                <Navbar />
                <main className="pt-24 pb-16">
                    {}
                    <motion.section
                        className="container mx-auto px-6 md:px-8 mb-16"
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
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">产品服务</h1>
                        <p
                            className="text-xl text-gray-300 max-w-3xl mx-auto text-center leading-relaxed">我们提供全方位的金融解决方案，帮助企业有效解决债务问题，优化资产结构，提升融资能力
                                                     </p>
                    </motion.section>
                    {}
                    <section className="py-16 bg-gray-900/70 relative mb-20">
                        <div className="absolute inset-0 overflow-hidden">
                            <motion.div
                                className="absolute right-0 bottom-0 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl"
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
                            <div className="grid md:grid-cols-2 gap-8">
                                {services.map((service, index) => <motion.div
                                    key={index}
                                    className="bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden border border-gray-700"
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
                                        delay: index * 0.1
                                    }}
                                    whileHover={{
                                        y: -5,
                                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
                                    }}>
                                    <div className={`bg-gradient-to-r ${service.color} p-1`}>
                                        <div className="bg-gray-900 p-8">
                                            <div className="flex items-center mb-6">
                                                <div
                                                    className={`w-14 h-14 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-white text-2xl mr-4`}>
                                                    <i className={`fas ${service.icon}`}></i>
                                                </div>
                                                <h3 className="text-2xl font-bold">{service.title}</h3>
                                            </div>
                                            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                                                {service.description}
                                            </p>
                                            <div className="space-y-4">
                                                {service.details.map((detail, idx) => <div key={idx} className="flex items-start">
                                                    <i className="fas fa-check-circle text-green-400 mr-3 mt-1"></i>
                                                    <span className="text-gray-300">{detail}</span>
                                                </div>)}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>)}
                            </div>
                        </div>
                    </section>
                    {}
                    <section className="py-16 bg-gray-900/70 relative mb-20">
                        <div className="absolute inset-0 overflow-hidden">
                            <motion.div
                                className="absolute -left-32 top-20 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl"
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
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">服务优势</h2>
                                <p className="text-xl text-gray-300 max-w-3xl mx-auto">我们的产品服务融合了国际先进经验与本地市场特性，为客户创造独特价值
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
                                    className="bg-gray-800/90 backdrop-blur-md p-8 rounded-2xl border border-gray-700 hover:shadow-xl transition-shadow duration-300">
                                    <div className="text-blue-400 text-3xl mb-6">
                                        <i className="fas fa-shield-alt"></i>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">安全可信</h3>
                                    <p className="text-gray-300 leading-relaxed">采用区块链、零知识证明等前沿技术，确保交易安全和数据隐私，为客户提供值得信赖的服务环境。
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
                                    className="bg-gray-800/90 backdrop-blur-md p-8 rounded-2xl border border-gray-700 hover:shadow-xl transition-shadow duration-300">
                                    <div className="text-green-400 text-3xl mb-6">
                                        <i className="fas fa-bolt"></i>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">高效便捷</h3>
                                    <p className="text-gray-300 leading-relaxed">提供一站式解决方案，简化复杂流程，显著提高债务解决和资产盘活的效率，降低客户操作成本。
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
                                    className="bg-gray-800/90 backdrop-blur-md p-8 rounded-2xl border border-gray-700 hover:shadow-xl transition-shadow duration-300">
                                    <div className="text-purple-400 text-3xl mb-6">
                                        <i className="fas fa-globe"></i>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">国际视野</h3>
                                    <p className="text-gray-300 leading-relaxed">结合澳门国际金融中心优势，链接全球资源，为客户提供国际化的融资渠道和资产配置机会。
                                                                            </p>
                                </motion.div>
                            </div>
                        </div>
                    </section>
                    {}
                    <motion.section
                        className="py-16 text-center relative mb-16"
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
                            <></>
                        </div>
                    </motion.section>
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default ProductServicePage;