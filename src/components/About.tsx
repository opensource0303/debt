import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { LanguageContext } from '@/contexts/languageContext';

const About = () => {
  const { t } = useContext(LanguageContext);
  
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('about.title')}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('about.description')}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=debt%20network%20visualization%20with%20privacy%20computing%20concept&sign=cb9c5db5985584e606d3986ef2835e32"
              alt="Cred Platform Concept"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t('about.coreConcept')}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {t('about.valueDescription')}
            </p>
            
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t('about.value.proposition')}</h4>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="text-blue-600 dark:text-blue-400 mr-3 mt-1">
                  <i className="fas fa-user-check"></i>
                </div>
                <div>
                  <h5 className="font-semibold mb-1">{t('about.value.user')}</h5>
                  <p className="text-gray-600 dark:text-gray-300">{t('about.value.userDesc')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-blue-600 dark:text-blue-400 mr-3 mt-1">
                  <i className="fas fa-chart-line"></i>
                </div>
                <div>
                  <h5 className="font-semibold mb-1">{t('about.value.market')}</h5>
                  <p className="text-gray-600 dark:text-gray-300">{t('about.value.marketDesc')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-blue-600 dark:text-blue-400 mr-3 mt-1">
                  <i className="fas fa-gavel"></i>
                </div>
                <div>
                  <h5 className="font-semibold mb-1">{t('about.value.regulatory')}</h5>
                  <p className="text-gray-600 dark:text-gray-300">{t('about.value.regulatoryDesc')}</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-xl">
                <div className="text-blue-600 dark:text-blue-400 text-3xl font-bold mb-2">社交网络</div>
                <div className="text-gray-600 dark:text-gray-300">挖掘隐性债务路径</div>
              </div>
              <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-xl">
                <div className="text-blue-600 dark:text-blue-400 text-3xl font-bold mb-2">隐私计算</div>
                <div className="text-gray-600 dark:text-gray-300">保护商业秘密</div>
              </div>
              <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-xl">
                <div className="text-blue-600 dark:text-blue-400 text-3xl font-bold mb-2">双向确权</div>
                <div className="text-gray-600 dark:text-gray-300">确保债务真实性</div>
              </div>
              <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-xl">
                <div className="text-blue-600 dark:text-blue-400 text-3xl font-bold mb-2">区块链存证</div>
                <div className="text-gray-600 dark:text-gray-300">提供法律保障</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;