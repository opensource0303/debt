import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '@/contexts/languageContext';

const Footer = () => {
  const { t } = useContext(LanguageContext);
  
  const quickLinks = [
    { name: "home", href: "/" },
    { name: "solution", href: "/solution" },
    { name: "internationalCases", href: "/international-cases" },
    { name: "platformMode", href: "/platform-mode" },
    { name: "coreAdvantages", href: "/core-advantages" }
  ];
  


  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
          <div className="text-blue-400 text-2xl font-bold mb-6">{t('footer.logo')}</div>
          <p className="text-gray-400 mb-6">
            {t('footer.slogan')}
             </p>
           </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {t(link.name)}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  {t('contact')}
                </Link>
              </li>
            </ul>
           </div>
           
           <div>
            <h4 className="text-lg font-bold mb-6">{t('contact')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt text-blue-400 mt-1"></i>
                <span className="text-gray-400">{t('contact.addressValue')}</span>
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
                <p className="text-gray-500" dangerouslySetInnerHTML={{ __html: t('footer.copyright') }}>
                </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;