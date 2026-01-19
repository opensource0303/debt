import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  
  // 快速链接数据
  const quickLinks = [
    { name: "首页", href: "/" },
    { name: "解决方案与案例", href: "/solutions-cases" },
    { name: "澳门优势", href: "/macau-advantages" },
    { name: "平台模式", href: "/platform-mode" }
  ];
  
  return (
    <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="https://lf-code-agent.coze.cn/obj/x-ai-cn/346738007298/attachment/logo_20260119194448.png" 
                alt="链清 Cred" 
                className="h-8 mr-3" 
              />
              <div className="text-xl font-bold">Cred</div>
            </div>
            <p className="text-gray-400 mb-6">
              赋能核心企业，促进债务凭证在供应链范围内自由流动
            </p>
          </div>
         
          <div>
            <h4 className="text-lg font-bold mb-6">快速链接</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  联系我们
                </Link>
              </li>
            </ul>
           </div>
             
           <div>
            <h4 className="text-lg font-bold mb-6">联系我们</h4>
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
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} 澳门债权交易中心. 保留所有权利.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;