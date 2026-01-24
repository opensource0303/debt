import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        subject: ""
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const {
            name,
            value
        } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success("您的信息已提交成功，我们将尽快与您联系！");

        setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
            subject: ""
        });
    };

  return (
    <div className="min-h-screen text-white tech-gradient-bg">
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
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">咨询我们</h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto text-center">如有任何关于澳门多角债解决平台的问题或合作意向，请随时与我们联系
                                                                            </p>
                </motion.section>

                <section className="py-16 relative">
                    <div className="absolute inset-0 overflow-hidden">
                        <div
                            className="absolute right-0 bottom-0 w-80 h-80 bg-blue-600/20 rounded-full filter blur-3xl"></div>
                    </div>
                     <div className="container mx-auto px-4 relative z-10">
                         <div className="grid md:grid-cols-2 gap-8">
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
                                className="bg-gray-900/70 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-700">
                                <h3 className="text-2xl font-bold mb-8">联系方式</h3>
                                <div className="space-y-8">
                                    <div className="flex items-start space-x-4">
                                        <div className="text-blue-400 text-2xl mt-1 bg-blue-900/30 w-12 h-12 rounded-full flex items-center justify-center">
                                            <i className="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold mb-1">办公地址</h4>
                                            <p className="text-gray-200">珠海市横琴华发商都</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div className="text-blue-400 text-2xl mt-1 bg-blue-900/30 w-12 h-12 rounded-full flex items-center justify-center">
                                            <i className="fas fa-phone-alt"></i>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold mb-1">联系电话</h4>
                                            <p className="text-gray-300">+853-2888-8888</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div className="text-blue-400 text-2xl mt-1 bg-blue-900/30 w-12 h-12 rounded-full flex items-center justify-center">
                                            <i className="fas fa-envelope"></i>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold mb-1">电子邮箱</h4>
                                            <p className="text-gray-300">bruce@cred.top</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div className="text-blue-400 text-2xl mt-1 bg-blue-900/30 w-12 h-12 rounded-full flex items-center justify-center">
                                            <i className="fas fa-clock"></i>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold mb-1">工作时间</h4>
                                            <p className="text-gray-300">周一至周五: 9:00 - 18:00</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-12">
                                    <h4 className="text-lg font-semibold mb-4">关注我们</h4>
                                    <div className="flex space-x-4">
                                        {["weixin", "weibo", "linkedin", "twitter"].map((social, index) => <a
                                            key={index}
                                            href="#"
                                            className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-blue-400 hover:bg-blue-900/30 transition-colors">
                                            <i className={`fab fa-${social} text-xl`}></i>
                                        </a>)}
                                    </div>
                                </div>
                                <div className="mt-12">
                                    <h4 className="text-lg font-semibold mb-4">紧急联系</h4>
                                    <div className="bg-red-900/20 p-4 rounded-lg border border-red-800/50">
                                        <p className="text-gray-300 flex items-center">
                                            <i className="fas fa-exclamation-circle text-red-400 mr-2"></i>对于平台紧急问题，请拨打 +853-2888-8888 或发送邮件至 bruce@cred.top
                                                                                                             </p>
                                    </div>
                                </div>
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
                                }}>
                                <form
                                    onSubmit={handleSubmit}
                                    className="bg-gray-900/70 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-700">
                                    <h3 className="text-2xl font-bold mb-6">发送咨询</h3>
                                    <div className="mb-6">
                                        <label
                                            htmlFor="name"
                                            className="block text-gray-300 mb-2 font-medium">姓名</label>
                     <input
                       type="text"
                       id="name"
                       name="name"
                       value={formData.name}
                       onChange={handleChange}
                       required
                        className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors mobile-optimized form-input-mobile"
                        placeholder="请输入您的姓名" 
                        style={{ touchAction: "manipulation" }} />
                                    </div>
                                    <div className="mb-6">
                                        <label
                                            htmlFor="email"
                                            className="block text-gray-300 mb-2 font-medium">邮箱</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                                            placeholder="请输入您的邮箱" />
                                    </div>
                                    <div className="mb-6">
                                        <label
                                            htmlFor="phone"
                                            className="block text-gray-300 mb-2 font-medium">电话</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                                            placeholder="请输入您的电话" />
                                    </div>
                                    <div className="mb-6">
                                        <label
                                            htmlFor="subject"
                                            className="block text-gray-300 mb-2 font-medium">咨询主题</label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors">
                                            <option value="">请选择咨询主题</option>
                                            <option value="platform-intro">平台介绍</option>
                                            <option value="business-cooperation">商务合作</option>
                                            <option value="technical-support">技术支持</option>
                                            <option value="policy-consultation">政策咨询</option>
                                            <option value="other">其他问题</option>
                                        </select>
                                    </div>
                                    <div className="mb-8">
                                        <label
                                            htmlFor="message"
                                            className="block text-gray-300 mb-2 font-medium">咨询内容</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                                            placeholder="请详细描述您关于平台的问题或合作意向"></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg font-medium transition-all transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">提交咨询
                                                                                                   </button>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section className="py-16 relative">
                    <div className="absolute inset-0 overflow-hidden">
                        <div
                            className="absolute -left-32 top-20 w-64 h-64 bg-purple-600/20 rounded-full filter blur-3xl"></div>
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
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">常见问题</h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">关于澳门多角债解决平台的常见问题解答
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
                            className="max-w-3xl mx-auto">
                            <div className="space-y-6">
                                <div
                                    className="bg-gray-900/70 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-700">
                                    <h3 className="text-xl font-semibold mb-4 text-white">什么是多角债？</h3>
                                    <p className="text-gray-300">多角债是指企业间债务链条的纠缠，形成复杂的网络结构。当企业A欠企业B，企业B欠企业C，而企业C又欠企业A时，整个链条的流动性被人为锁定。澳门多角债解决平台通过多边净额清算技术，可以在瞬间抵销这些相互的债务，无需外部资金注入即可释放资产负债表空间。
                                                                                                   </p>
                                </div>
                                <div
                                    className="bg-gray-900/70 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-700">
                                    <h3 className="text-xl font-semibold mb-4 text-white">澳门平台的双轨制引擎是什么？</h3>
                                    <p className="text-gray-300">澳门平台采用"双引擎"策略：一是建立基于斯洛文尼亚模式的"多边净额清算引擎"以解决存量三角债；二是建立基于印度TReDS模式的"供应链金融交易引擎"以解决增量融资需求。这种双轨制设计能够全方位解决不同类型的债务问题，提高平台的市场覆盖范围和服务能力。
                                                                                                   </p>
                                </div>
                                <div
                                    className="bg-gray-900/70 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-700">
                                    <h3 className="text-xl font-semibold mb-4 text-white">如何解决跨境数据合规问题？</h3>
                                    <p className="text-gray-300">澳门平台采用联邦学习或零知识证明技术，在横琴设立数据节点（受内地管辖），在澳门设立交易节点。澳门平台向横琴节点发起查询，横琴节点在本地核验发票、税务数据后，仅返回"是/否"的验证结果，而不传输原始明细数据。这符合"数据可用不可见"的原则，规避了数据跨境法律风险。
                                                                                                   </p>
                                </div>
                                <div
                                    className="bg-gray-900/70 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-700">
                                    <h3 className="text-xl font-semibold mb-4 text-white">平台的收费标准是怎样的？</h3>
                                    <p className="text-gray-300">澳门平台采用分层收费模式：对于多边净额清算服务，收取极低费率（如0.05%）或按笔收费，作为公共服务；对于债权流转与融资服务，收取市场化费率（如0.3%-0.5%），由融资方或受益方承担。此外，平台还可能收取SaaS订阅费和数据服务费等增值服务费用。
                                                                                                   </p>
                                </div>
                                <div
                                    className="bg-gray-900/70 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-700">
                                    <h3 className="text-xl font-semibold mb-4 text-white">如何参与澳门多角债解决平台？</h3>
                                    <p className="text-gray-300">企业可以通过平台官方网站或联系客服申请参与。对于核心节点企业（如承接政府工程的供应商、博彩持牌企业），根据未来可能的立法要求，超过一定期限的应付账款信息需上报至平台。其他企业可以自愿参与平台的各项服务。
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

export default ContactPage;