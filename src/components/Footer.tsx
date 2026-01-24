import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    const quickLinks = [{
        name: "首页",
        href: "/"
    }, {
        name: "产品服务",
        href: "/product-services"
    }, {
        name: "特色优势",
        href: "/platform-mode"
    }];

    return (
         <footer className="bg-gray-900/80 backdrop-blur-md text-white py-12 border-t border-gray-800 safe-bottom">
            <div className="container mx-auto px-4">
                 <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8">
                     <div className="md:col-span-4">
                         <div className="flex items-center mb-4">
                             <img
                                 src="https://s.coze.cn/t/x5GlETxxCsM/"
                                 alt="可信达 Cred"
                                 className="h-10 mr-3" />
                         </div>
                        <p className="text-gray-400 mb-4 text-sm">我们致力于解决中国企业与政府的债务问题，激活资产潜力，连接全球资金，推动经济高效、可持续发展。
                            凭借AAA级信用保障，我们打造一个安全、智能、可靠的国际化资产交易与管理平台，助力全球投资者实现资产增值。</p>
                        <div className="flex space-x-3">
                            {["weixin", "weibo", "linkedin", "twitter"].map((social, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-blue-400 hover:bg-blue-900/30 transition-all duration-300 hover:scale-110"
                                    style={{
                                        minWidth: "32px",
                                        minHeight: "32px"
                                    }}
                                >
                                    <i className={`fab fa-${social}`}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="md:col-span-2 flex flex-col items-center">
                        <h4 className="text-lg font-bold mb-4 text-center">快速链接</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index} className="text-center">
                                    <Link
                                        to={link.href}
                                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300 py-1 block text-center w-full pl-0 mobile-optimized"
                                        style={{
                                            touchAction: "manipulation"
                                        }}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                         <li className="text-center">
                            <Link
                                to="/contact"
                                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 py-2 block text-center w-full pl-0 mobile-optimized"
                                style={{
                                    touchAction: "manipulation"
                                }}
                            >
                                咨询我们
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="md:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <ul className="space-y-3">
                                <li className="flex items-start space-x-3">
                                    <i className="fas fa-map-marker-alt text-blue-400 mt-1"></i>
                                    <span className="text-gray-400">珠海市横琴华发商都</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <i className="fas fa-phone-alt text-blue-400"></i>
                                    <span className="text-gray-400">+853-2888-8888</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <i className="fas fa-envelope text-blue-400"></i>
                                    <span className="text-gray-400">bruce@cred.top</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <i className="fas fa-clock text-blue-400"></i>
                                    <span className="text-gray-400">周一至周五: 9:00 - 18:00</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold mb-4">订阅更新</h4>
                            <p className="text-gray-400 mb-3 text-sm">订阅我们的通讯，获取最新的供应链金融资讯和解决方案</p>
                            <form className="flex flex-col sm:flex-row gap-2">
                                <input
                                    type="email"
                                    placeholder="您的邮箱地址"
                                    className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white w-full focus:outline-none focus:ring-2 focus:ring-blue-500 form-input-mobile"
                                    style={{ touchAction: "manipulation" }}
                                />
                                <button
                                    type="submit"
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors whitespace-nowrap mobile-touch-target"
                                    style={{ touchAction: "manipulation" }}
                                >
                                    订阅
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-center md:text-left mb-4 md:mb-0">© {new Date().getFullYear()}澳门债权交易中心. 保留所有权利.</p>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                        <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">隐私政策</a>
                        <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">使用条款</a>
                        <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">法律声明</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default React.memo(Footer);