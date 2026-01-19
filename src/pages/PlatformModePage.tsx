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
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">平台模式</h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto text-center">融合隐私计算与权威区块链存证技术，打造链主供应链金融创新平台
                                  </p>
                </motion.section>
                {}
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
                                }}>技术核心优势</h2>
                            <p
                                className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                                style={{
                                    color: "#B6BBCC"
                                }}>隐私计算与权威区块链存证技术的创新应用
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
                                <div className="text-blue-600 dark:text-blue-400 text-4xl mb-6">
                                    <i className="fas fa-user-shield"></i>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">隐私计算技术</h3>
                                <p className="text-gray-200 mb-6">采用先进的隐私计算技术，在保护企业商业秘密的同时，实现数据的有效利用和价值挖掘。
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
                                <div className="text-green-600 dark:text-green-400 text-4xl mb-6">
                                    <i className="fas fa-link"></i>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">权威区块链存证</h3>
                                <p className="text-gray-200 mb-6">利用区块链技术对交易数据进行存证，确保数据的不可篡改性、可追溯性和法律效力。
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
                {}
                <section className="py-16 bg-gray-900 bg-grid relative">
                    <div className="absolute inset-0 overflow-hidden">
                        <div
                            className="absolute right-1/4 top-1/3 w-80 h-80 bg-purple-600/10 rounded-full filter blur-3xl"></div>
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
                                }}>链主供应链金融业务</h2>
                            <p
                                className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                                style={{
                                    color: "#B6BBCC"
                                }}>以核心企业为中心，构建全链条金融服务生态
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
                                    className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 text-2xl mb-6">
                                    <i className="fas fa-building"></i>
                                </div>
                                <h3 className="text-xl font-bold mb-4">核心企业信用传递</h3>
                                <p
                                    className="text-gray-600 dark:text-gray-300 mb-6"
                                    style={{
                                        color: "#B6BBCC"
                                    }}>依托核心企业的高信用评级，为供应链上下游企业提供信用支持，降低融资门槛</p>
                                <ul className="text-gray-600 dark:text-gray-300 space-y-3">
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                                        <span
                                            style={{
                                                color: "#B6BBCC"
                                            }}>信用多级传递，覆盖供应链末端小微企业</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                                        <span
                                            style={{
                                                color: "#B6BBCC"
                                            }}>降低中小企业融资成本，提高融资可得性</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                                        <span
                                            style={{
                                                color: "#B6BBCC"
                                            }}>强化供应链稳定性，促进上下游协同发展</span>
                                    </li>
                                </ul>
                            </div>
                            {}
                            <div
                                className="bg-gray-800/90 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-700">
                                <div
                                    className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 text-2xl mb-6">
                                    <i className="fas fa-exchange-alt"></i>
                                </div>
                                <h3 className="text-xl font-bold mb-4">可流转债务凭证</h3>
                                <p
                                    className="text-gray-600 dark:text-gray-300 mb-6"
                                    style={{
                                        color: "#B6BBCC"
                                    }}>基于区块链技术发行标准化、可拆分、可转让的债务凭证，提高资产流动性</p>
                                <ul className="text-gray-600 dark:text-gray-300 space-y-3">
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                                        <span
                                            style={{
                                                color: "#B6BBCC"
                                            }}>凭证标准化，提高流通效率和市场接受度</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                                        <span
                                            style={{
                                                color: "#B6BBCC"
                                            }}>支持多级拆分和转让，满足不同规模企业需求</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                                        <span
                                            style={{
                                                color: "#B6BBCC"
                                            }}>实时登记流转信息，确保交易透明可追溯</span>
                                    </li>
                                </ul>
                            </div>
                            {}
                            <div
                                className="bg-gray-800/90 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-700">
                                <div
                                    className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 text-2xl mb-6">
                                    <i className="fas fa-network-wired"></i>
                                </div>
                                <h3 className="text-xl font-bold mb-4">多节点协作网络</h3>
                                <p
                                    className="text-gray-600 dark:text-gray-300 mb-6"
                                    style={{
                                        color: "#B6BBCC"
                                    }}>在供应链体系内设置多个参与节点，共同维护生态健康发展</p>
                                <ul className="text-gray-600 dark:text-gray-300 space-y-3">
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                                        <span
                                            style={{
                                                color: "#B6BBCC"
                                            }}>核心企业、供应商、金融机构多方参与</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                                        <span
                                            style={{
                                                color: "#B6BBCC"
                                            }}>分布式信任机制，降低交易风险</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                                        <span
                                            style={{
                                                color: "#B6BBCC"
                                            }}>共同维护生态规则，促进可持续发展</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </section>
                {}
                <section className="py-16 bg-gray-900 bg-grid relative">
                    <div className="absolute inset-0 overflow-hidden">
                        <div
                            className="absolute right-0 bottom-0 w-80 h-80 bg-blue-600/10 rounded-full filter blur-3xl"></div>
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
                                }}>平台交易流程</h2>
                            <p
                                className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                                style={{
                                    color: "#B6BBCC"
                                }}>简洁高效的业务流程，为供应链各参与方创造价值
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
                                }}>
                                <h3 className="text-2xl font-bold mb-6 flex items-center">
                                    <span
                                        className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3">1</span>多边净额清算流程
                                                    </h3>
                                <div className="relative">
                                    {}
                                    <div
                                        className="absolute left-4 top-4 bottom-4 w-0.5 bg-blue-200 dark:bg-blue-800 z-0"></div>
                                    {}
                                    <div className="relative z-10 flex mb-8">
                                        <div
                                            className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">1</div>
                                        <div>
                                            <h4 className="text-lg font-semibold mb-2">数据归集</h4>
                                            <p
                                                className="text-gray-600 dark:text-gray-300 text-sm"
                                                style={{
                                                    color: "#B6BBCC"
                                                }}>参与者通过电子门户上传其"应付账款"清单，系统基于"债务人申报"确保债务的承认是先决条件。
                                                                      </p>
                                        </div>
                                    </div>
                                    {}
                                    <div className="relative z-10 flex mb-8">
                                        <div
                                            className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">2</div>
                                        <div>
                                            <h4 className="text-lg font-semibold mb-2">隐私计算匹配</h4>
                                            <p
                                                className="text-gray-600 dark:text-gray-300 text-sm"
                                                style={{
                                                    color: "#B6BBCC"
                                                }}>系统使用隐私计算技术在加密域内进行图计算，识别简单环路和复杂的长链、多层嵌套环路。
                                                                      </p>
                                        </div>
                                    </div>
                                    {}
                                    <div className="relative z-10 flex mb-8">
                                        <div
                                            className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">3</div>
                                        <div>
                                            <h4 className="text-lg font-semibold mb-2">清算执行</h4>
                                            <p
                                                className="text-gray-600 dark:text-gray-300 text-sm"
                                                style={{
                                                    color: "#B6BBCC"
                                                }}>算法瞬间将各方的债务余额减记，最大化全网清算金额，无需任何外部资金注入即可释放资产负债表空间。
                                                                      </p>
                                        </div>
                                    </div>
                                    {}
                                    <div className="relative z-10 flex">
                                        <div
                                            className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">4</div>
                                        <div>
                                            <h4 className="text-lg font-semibold mb-2">区块链存证</h4>
                                            <p
                                                className="text-gray-600 dark:text-gray-300 text-sm"
                                                style={{
                                                    color: "#B6BBCC"
                                                }}>系统将清算结果和相关凭证上链存证，生成具有法律效力的"抵销通知书"，直接作为会计凭证。
                                                                      </p>
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
                                }}>
                                <h3 className="text-2xl font-bold mb-6 flex items-center">
                                    <span
                                        className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 mr-3">2</span>链主企业债务凭证流转与融资流程
                                                    </h3>
                                <div className="relative">
                                    {}
                                    <div
                                        className="absolute left-4 top-4 bottom-4 w-0.5 bg-purple-200 dark:bg-purple-800 z-0"></div>
                                    {}
                                    <div className="relative z-10 flex mb-8">
                                        <div
                                            className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">1</div>
                                        <div>
                                            <h4 className="text-lg font-semibold mb-2">核心企业确权</h4>
                                            <p
                                                className="text-gray-600 dark:text-gray-300 text-sm"
                                                style={{
                                                    color: "#B6BBCC"
                                                }}>链主企业（如博彩公司、政府部门）在平台上对应付账款进行数字确认，基于核心信用生成标准化区块链债务凭证。
                                                                      </p>
                                        </div>
                                    </div>
                                    {}
                                    <div className="relative z-10 flex mb-8">
                                        <div
                                            className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">2</div>
                                        <div>
                                            <h4 className="text-lg font-semibold mb-2">凭证流转与拆分</h4>
                                            <p
                                                className="text-gray-600 dark:text-gray-300 text-sm"
                                                style={{
                                                    color: "#B6BBCC"
                                                }}>供应商可将收到的债务凭证持有到期、全额或部分转让给其他供应商，实现多层级供应链的资金流转。
                                                                      </p>
                                        </div>
                                    </div>
                                    {}
                                    <div className="relative z-10 flex mb-8">
                                        <div
                                            className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">3</div>
                                        <div>
                                            <h4 className="text-lg font-semibold mb-2">融资方竞价</h4>
                                            <p
                                                className="text-gray-600 dark:text-gray-300 text-sm"
                                                style={{
                                                    color: "#B6BBCC"
                                                }}>多个融资方（澳门银行、离岸人民币资金池等）对优质债务凭证进行竞价（利率），降低融资成本。
                                                                      </p>
                                        </div>
                                    </div>
                                    {}
                                    <div className="relative z-10 flex">
                                        <div
                                            className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">4</div>
                                        <div>
                                            <h4 className="text-lg font-semibold mb-2">资金结算与到期兑付</h4>
                                            <p
                                                className="text-gray-600 dark:text-gray-300 text-sm"
                                                style={{
                                                    color: "#B6BBCC"
                                                }}>融资资金T+1日到账供应商，到期后由核心企业向最终持票人兑付，全过程在区块链上可追溯。
                                                                      </p>
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
                            className="absolute left-0 top-0 w-80 h-80 bg-purple-600/10 rounded-full filter blur-3xl"></div>
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
                                }}>平台架构</h2>
                            <p
                                className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                                style={{
                                    color: "#B6BBCC"
                                }}>多层次架构设计，确保平台安全、高效、可扩展
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
                            }}>
                            <img
                                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=supply%20chain%20finance%20platform%20architecture%20with%20blockchain%20and%20privacy%20computing&sign=6b08b4fdf04e241c5afbd49bbf7a61ad"
                                alt="平台架构图"
                                className="rounded-2xl shadow-xl w-full h-auto max-w-4xl mx-auto" />
                            <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
                                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                                    <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">应用层</h3>
                                    <p className="text-gray-600 dark:text-gray-300">提供用户友好的界面，包括核心企业门户、供应商工作台、金融机构系统接口和监管平台。
                                                          </p>
                                </div>
                                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                                    <h3 className="text-xl font-bold mb-4 text-green-600 dark:text-green-400">业务逻辑层</h3>
                                    <p className="text-gray-600 dark:text-gray-300">包含多边净额清算引擎、债务凭证管理系统、融资交易系统和智能合约管理系统。
                                                          </p>
                                </div>
                                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                                    <h3 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">基础设施层</h3>
                                    <p className="text-gray-600 dark:text-gray-300">由区块链网络、隐私计算框架、大数据分析平台和安全防护体系组成。
                                                          </p>
                                </div>
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
                            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">立即联系我们，了解如何通过我们的平台优化您的供应链金融生态，降低融资成本，提升运营效率
                                              </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link to="/contact">
                                    <button
                                        className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full text-lg font-medium transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">联系我们
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