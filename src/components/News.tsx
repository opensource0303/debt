import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LanguageContext } from '@/contexts/languageContext';

const News = () => {
  const { t } = useContext(LanguageContext);
  
  const newsItems = [
    {
      title: '"链清"(Cred)平台产品设计方案正式发布',
      date: "2026-01-15",
      excerpt: '基于深度研究报告，"链清"(Cred)平台正式发布产品设计方案，旨在通过社交网络与隐私计算技术，解决企业间及个人间的三角债问题。',
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=debt%20settlement%20platform%20announcement&sign=ee564eb5fe9e8c68598de86823c233fc"
    },
    {
      title: "隐私计算技术在债务清偿领域应用研讨会召开",
      date: "2025-12-10",
      excerpt: '来自国内外的隐私计算专家齐聚一堂，探讨零知识证明和多方安全计算技术在债务清偿领域的创新应用，为"链清"平台技术路线提供专业指导。',
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=privacy%20computing%20technology%20conference&sign=dcaff15cabce0b0270aac36d066b3838"
    },
    {
      title: "社交网络拓扑匹配算法通过专家评审",
      date: "2025-11-05",
      excerpt: '"链清"平台的社交网络拓扑匹配算法通过专家评审，该算法能够精准挖掘隐性债务路径，显著提升债务闭环匹配效率，为解决三角债问题提供了技术保障。',
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=social%20network%20analysis%20technology&sign=bbd74ce2995100fef3bc25efe7709460"
    }
  ];

  return (
    <section id="news" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('news.title')}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('news.description')}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <div className="text-blue-600 dark:text-blue-400 text-sm mb-2">{item.date}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{item.excerpt}</p>
                <Link to="/international-cases" className="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center hover:underline">
                  {t('news.readMore')} <i className="fas fa-arrow-right ml-2 text-sm"></i>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
           {/* 移除重复链接按钮，已有文章卡片上的链接 */}
        </motion.div>
      </div>
    </section>
  );
};

export default News;