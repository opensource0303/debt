import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LanguageContext } from "@/contexts/languageContext";

const Hero = () => {
    const {
        t
    } = useContext(LanguageContext);

    return (
        <section
            className="pt-28 pb-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center">
                    <div
                        className="lg:w-1/2 mb-10 lg:mb-0"
                        style={{
                            margin: "0px",
                            padding: "0px"
                        }}>
                        <motion.div
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
                            <h1
                                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
                                {t("hero.title")}<br />
                                <span className="text-blue-600 dark:text-blue-400">Cred</span>
                            </h1>
                            <p
                                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                {t("hero.subtitle")}
                            </p>
                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                <Link to="/solution">
                                    <button
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                                        {t("hero.button.solution")}
                                    </button>
                                </Link>
                                <Link to="/international-cases">
                                    <button
                                        className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-full text-lg font-medium border border-blue-600 dark:border-blue-400 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                                        {t("hero.button.cases")}
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                    <motion.div
                        className="lg:w-1/2"
                        initial={{
                            opacity: 0,
                            x: 20
                        }}
                        animate={{
                            opacity: 1,
                            x: 0
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2
                        }}>
                        <div className="relative">
                            <div
                                className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-lg opacity-75"></div>
                            <img
                                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=macau%20financial%20technology%20platform%20dashboard%20with%20data%20visualization&sign=1f292c8fdc80ff220ca282520803a694"
                                alt="Cred Platform"
                                className="relative z-10 rounded-2xl shadow-xl w-full h-auto" />
                        </div>
                    </motion.div>
                </div>
                {}
                 <div className="mt-24">
                    <p className="text-center text-gray-500 dark:text-gray-400 mb-8">{t('hero.highlights')}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
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
                                duration: 0.5
                            }}>
                            <div className="text-blue-600 dark:text-blue-400 text-3xl mb-4">
                                <i className="fas fa-balance-scale"></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t('hero.legalAdvantage')}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{t('hero.legalAdvantageDesc')}</p>
                        </motion.div>
                        <motion.div
                            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
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
                                duration: 0.5,
                                delay: 0.1
                            }}>
                            <div className="text-blue-600 dark:text-blue-400 text-3xl mb-4">
                                <i className="fas fa-money-bill-wave"></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t('hero.capitalAdvantage')}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{t('hero.capitalAdvantageDesc')}</p>
                        </motion.div>
                        <motion.div
                            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
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
                                duration: 0.5,
                                delay: 0.2
                            }}>
                            <div className="text-blue-600 dark:text-blue-400 text-3xl mb-4">
                                <i className="fas fa-database"></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t('hero.dataAdvantage')}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{t('hero.dataAdvantageDesc')}</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;