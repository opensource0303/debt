import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LanguageContext } from '@/contexts/languageContext';

const Advantages = () => {
  const { t } = useContext(LanguageContext);
  
  const advantages = [
    {
      title: "lowCost",
      description: "lowCostDesc",
      icon: "fa-chart-pie"
    },
    {
      title: "privacyProtection",
      description: "privacyProtectionDesc",
      icon: "fa-user-shield"
    },
    {
      title: "legalGuarantee",
      description: "legalGuaranteeDesc",
      icon: "fa-gavel"
    },
    {
      title: "socialNetworkMatching",
      description: "socialNetworkMatchingDesc",
      icon: "fa-network-wired"
    },
    {
      title: "flexibleOffset",
      description: "flexibleOffsetDesc",
      icon: "fa-calculator"
    },
    {
      title: "multiChannelMonetization",
      description: "multiChannelMonetizationDesc",
      icon: "fa-exchange-alt"
    }
  ];

  return (
    <section id="advantages" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('advantages.title')}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('advantages.description')}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-5 p-6 bg-blue-50 dark:bg-gray-700 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-blue-600 dark:text-blue-400 text-2xl mt-1">
                <i className={`fas ${advantage.icon}`}></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t(advantage.title)}</h3>
                <p className="text-gray-600 dark:text-gray-300">{t(advantage.description)}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-10 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">{t('advantages.learnMore')}</h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            {t('advantages.footerDesc')}
          </p>
          <Link to="/core-advantages">
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full text-lg font-medium transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
              {t('advantages.seeMore')}
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Advantages;