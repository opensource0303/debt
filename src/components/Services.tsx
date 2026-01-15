import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LanguageContext } from '@/contexts/languageContext';

const Services = () => {
  const { t } = useContext(LanguageContext);
  
  const services = [
    {
      title: "structuredDebtRegistration",
      description: "structuredDebtRegistrationDesc",
      icon: "fa-file-invoice-dollar",
      color: "bg-blue-600"
    },
    {
      title: "socialNetworkMatching",
      description: "socialNetworkMatchingServiceDesc",
      icon: "fa-network-wired",
      color: "bg-green-600"
    },
    {
      title: "privacyComputing",
      description: "privacyComputingDesc",
      icon: "fa-shield-alt",
      color: "bg-indigo-600"
    },
    {
      title: "legalEvidence",
      description: "legalEvidenceDesc",
      icon: "fa-gavel",
      color: "bg-purple-600"
    },
    {
      title: "splitOffset",
      description: "splitOffsetDesc",
      icon: "fa-calculator",
      color: "bg-amber-600"
    },
    {
      title: "creditorTransferMarket",
      description: "creditorTransferMarketDesc",
      icon: "fa-exchange-alt",
      color: "bg-red-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('services.title')}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('services.description')}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className={`w-14 h-14 rounded-full ${service.color} flex items-center justify-center text-white mb-6`}>
                <i className={`fas ${service.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/solution">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              {t('services.seeMore')}
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;