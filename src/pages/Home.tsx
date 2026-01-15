import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Advantages from '@/components/Advantages';
import News from '@/components/News';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { LanguageContext } from '@/contexts/languageContext';

export default function Home() {
  const { t } = useContext(LanguageContext);
  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Advantages />
        <News />
        
      {/* 平台核心功能区域 */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('platform.features')}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('platform.features.desc')}
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* 债权登记卡片 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="h-4 bg-blue-600"></div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl mr-4">
                    <i className="fas fa-file-invoice-dollar"></i>
                  </div>
                     <h3 className="text-2xl font-bold">{t('platform.registerCreditor')}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {t('platform.registerCreditor.desc')}
                    </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                    <span className="text-gray-600 dark:text-gray-300">便捷的债权信息录入</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                    <span className="text-gray-600 dark:text-gray-300">安全的证明材料上传</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                    <span className="text-gray-600 dark:text-gray-300">专业的债权审核流程</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                    <span className="text-gray-600 dark:text-gray-300">多种债务解决方案</span>
                  </li>
                </ul>
                <Link to="/creditor-right-registration">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 w-full">
                      {t('platform.registerCreditor.btn')}
                    </button>
                </Link>
              </div>
            </motion.div>
            
            {/* 债务确认卡片 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="h-4 bg-green-600"></div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 text-xl mr-4">
                    <i className="fas fa-check-circle"></i>
                  </div>
                     <h3 className="text-2xl font-bold">{t('platform.confirmDebt')}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {t('platform.confirmDebt.desc')}
                    </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                    <span className="text-gray-600 dark:text-gray-300">待确认债务列表查看</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                    <span className="text-gray-600 dark:text-gray-300">详细债务信息核对</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                    <span className="text-gray-600 dark:text-gray-300">一键确认或拒绝操作</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                    <span className="text-gray-600 dark:text-gray-300">专业的争议处理机制</span>
                  </li>
                </ul>
                <Link to="/debt-confirmation">
                    <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 w-full">
                      {t('platform.confirmDebt.btn')}
                    </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Contact />
    </main>
    <Footer />
  </div>
  );
}