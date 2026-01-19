import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    const quickLinks = [{
        name: "首页",
        href: "/"
    }, {
        name: "解决方案与案例",
        href: "/solutions-cases"
    }, {
        name: "澳门优势",
        href: "/macau-advantages"
    }, {
        name: "平台模式",
        href: "/platform-mode"
    }];

    return (
        <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center mb-6">
                            <img src="https://s.coze.cn/t/TrYhakFBT0I/" alt="链清 Cred" className="h-8 mr-3" />
                            <div className="text-xl font-bold">Cred</div>
                        </div>
                        <p className="text-gray-400 mb-6">赋能核心企业，促进债务凭证在供应链范围内自由流动
                                        </p>
                        <div className="flex space-x-4">
                            {['weixin', 'weibo', 'linkedin', 'twitter'].map((social, index) => (
                                <a 
                                    key={index}
                                    href="#" 
                                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-blue-400 hover:bg-blue-900/30 transition-all duration-300 hover:scale-110"
                                >
                                    <i className={`fab fa-${social}`}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                    
                    <div>
                        <h4 className="text-lg font-bold mb-6">快速链接</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.href}
                                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link
                                    to="/contact"
                                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                                    联系我们
                                </Link>
                            </li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="text-lg font-bold mb-6">联系我们</h4>
                        <ul className="space-y-4">
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
                        <h4 className="text-lg font-bold mb-6">订阅更新</h4>
                        <p className="text-gray-400 mb-4">订阅我们的通讯，获取最新的供应链金融资讯和解决方案</p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="您的邮箱地址"
                                className="px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 text-white w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition-colors"
                            >
                                订阅
                            </button>
                        </form>
                    </div>
                </div>
                
                <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-center md:text-left mb-4 md:mb-0">
                        © {new Date().getFullYear()} 澳门债权交易中心. 保留所有权利.
                    </p>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">隐私政策</a>
                        <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">使用条款</a>
                        <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">法律声明</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;