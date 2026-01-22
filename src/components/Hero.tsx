import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [startX, setStartX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const sliderRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIsMobile();
        window.addEventListener("resize", checkIsMobile);

        return () => {
            window.removeEventListener("resize", checkIsMobile);
        };
    }, []);

  const slides = [{
    id: 1,
    title: "可信达 (Cred)",
    subtitle: "供应链金融区块链解决方案平台",
    description: "利用权威区块链技术和隐私计算，专注于解决企业间及个人间的三角债、多角债问题，通过数字化、标准化和市场化手段，实现债务有效清偿和资产盘活。",
    image: "https://lf-code-agent.coze.cn/obj/x-ai-cn/346738007298/attachment/无logo_20260121201828.png",
    ctaText: "了解解决方案"
  }, {
    id: 2,
    title: "创新金融科技",
    subtitle: "赋能实体经济",
    description: "基于澳门独特的制度、资金和数据优势，打造领先的供应链金融创新平台，为企业提供全方位的金融解决方案。",
    image: "https://lf-code-agent.coze.cn/obj/x-ai-cn/346738007298/attachment/轮播1_20260123002832.png",
    ctaText: "探索澳门优势"
  }, {
    id: 3,
    title: "双轨制引擎",
    subtitle: "全方位解决债务问题",
    description: "采用'双引擎'策略：多边净额清算引擎解决存量三角债，供应链金融交易引擎解决增量融资需求，双轨制设计全方位解决不同类型的债务问题。",
    image: "https://lf-code-agent.coze.cn/obj/x-ai-cn/346738007298/attachment/轮播2_20260123002838.png",
    ctaText: "查看成功案例"
  }];

// 移除自动轮播的定时器，保留手动控制功能

  // 使用 React.useCallback 优化函数引用，避免不必要的重渲染
  const goToSlide = React.useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const nextSlide = React.useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = React.useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

    const handleTouchStart = (e: React.TouchEvent) => {
        setStartX(e.touches[0].clientX);
        setIsDragging(true);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging)
            return;

        e.preventDefault();
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (!isDragging)
            return;

        const endX = e.changedTouches[0].clientX;
        const diff = startX - endX;
        const threshold = isMobile ? 30 : 50;

        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }

        setIsDragging(false);
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        setStartX(e.clientX);
        setIsDragging(true);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging)
            return;

        e.preventDefault();
    };

    const handleMouseUp = (e: React.MouseEvent) => {
        if (!isDragging)
            return;

        const endX = e.clientX;
        const diff = startX - endX;

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }

        setIsDragging(false);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    return (
        <section
            className="pt-24 pb-24 overflow-hidden relative min-h-[60vh] flex items-center">
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute -right-32 top-20 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl"
                    animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.3, 0.4, 0.3]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}></motion.div>
                <motion.div
                    className="absolute left-1/4 bottom-10 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.3, 0.2]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}></motion.div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div
                        ref={sliderRef}
                        className="relative w-full overflow-hidden"
                        style={{
                            height: isMobile ? "400px" : "550px",
                            willChange: 'transform'
                        }}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseLeave}
                    >
                        {slides.map((slide, index) => (
                            <motion.div
                                key={slide.id}
                                className={`absolute inset-0 flex flex-col md:flex-row items-center justify-center p-6 md:p-12 ${index === currentSlide ? "z-20" : "z-10"}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ 
                                    opacity: index === currentSlide ? 1 : 0,
                                    y: index === currentSlide ? 0 : 20
                                }}
                                transition={{ 
                                    duration: 0.5,
                                    ease: "easeInOut"
                                }}
                            >
                                <div className="absolute inset-0 z-0">
                                    <motion.img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="w-full h-full object-cover object-center"
                                        initial={{ scale: 1.05 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 1.5 }}
                                        loading="lazy"
                                        style={{ willChange: 'transform' }} // 添加硬件加速
                                    />
                                    <div className="absolute inset-0 bg-black/30 z-10"></div>
                                </div>
                                <div className="relative z-20 w-full md:w-1/2 text-center md:text-left">
                                    <motion.div
                                        initial={{
                                            y: 30,
                                            opacity: 0
                                        }}
                                        animate={{
                                            y: 0,
                                            opacity: 1
                                        }}
                                        transition={{
                                            delay: 0.2,
                                            duration: 0.8
                                        }}>
                                        <h1
                                            className={`font-bold text-white mb-3 leading-tight ${isMobile ? "text-2xl" : "text-3xl md:text-4xl lg:text-5xl"}`}>
                                            {slide.title}
                                        </h1>
                                        <h2
                                            className={`text-blue-300 mb-4 ${isMobile ? "text-lg" : "text-xl md:text-2xl"}`}>
                                            {slide.subtitle}
                                        </h2>
                                        <p
                                            className={`text-gray-200 mb-6 max-w-md md:max-w-lg mx-auto md:mx-0 leading-relaxed ${isMobile ? "text-sm" : "text-base md:text-lg"}`}>
                                            {slide.description}
                                        </p>
                                        <div
                                            className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start">
                                            <></>
                                            <></>
                                        </div>
                                    </motion.div>
                                </div>
                                <div className="hidden lg:block w-1/2 relative z-20"></div>
                            </motion.div>
                        ))}
                    </div>
                    <div
                        className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2 md:space-x-3 ${isMobile ? "space-x-3" : ""}`}>
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-blue-500 w-8 md:w-12" : "bg-white/50"} ${isMobile ? "h-2" : ""}`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                                style={{
                                    minWidth: isMobile ? "10px" : "8px",
                                    minHeight: isMobile ? "10px" : "8px"
                                }}
                            />
                        ))}
                    </div>
                    <button
                        className={`absolute left-3 top-1/2 transform -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-black/50 backdrop-blur-md hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all shadow-lg ${isMobile ? "w-12 h-12" : ""}`}
                        onClick={prevSlide}
                        aria-label="Previous slide"
                        style={{
                            minWidth: "48px",
                            minHeight: "48px"
                        }}>
                        <i
                            className={`fas fa-chevron-left ${isMobile ? "text-xl" : "text-lg md:text-xl"}`}></i>
                    </button>
                    <button
                        className={`absolute right-3 top-1/2 transform -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-black/50 backdrop-blur-md hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all shadow-lg ${isMobile ? "w-12 h-12" : ""}`}
                        onClick={nextSlide}
                        aria-label="Next slide"
                        style={{
                            minWidth: "48px",
                            minHeight: "48px"
                        }}>
                        <i
                            className={`fas fa-chevron-right ${isMobile ? "text-xl" : "text-lg md:text-xl"}`}></i>
                    </button>
                </div>
                <motion.div
                    className="mt-32"
                    initial={{
                        opacity: 0,
                        y: 30
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    viewport={{
                        once: true
                    }}
                    transition={{
                        duration: 0.8
                    }}>
                    <h2 className="section-title text-center">平台核心亮点</h2>
                    <div
                        className={`grid gap-6 md:gap-8 ${isMobile ? "grid-cols-1" : "grid-cols-1 md:grid-cols-3"}`}>
                        <motion.div
                            className="bg-gray-900/70 backdrop-blur-md p-5 md:p-6 rounded-xl border border-gray-700 hover:shadow-lg transition-all duration-300 hover:border-blue-500/50 card-hover"
                            whileHover={{
                                y: -5
                            }}
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
                            <div className="text-blue-400 text-3xl mb-4">
                                <i className="fas fa-balance-scale"></i>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">法律优势</h3>
                            <p className="text-gray-400 leading-relaxed">澳门《商业法典》与葡萄牙及欧洲大陆法系一脉相承，为引入成熟的欧洲清算规则提供了法理基础。</p>
                        </motion.div>
                        <motion.div
                            className="bg-gray-900/70 backdrop-blur-md p-5 md:p-6 rounded-xl border border-gray-700 hover:shadow-lg transition-all duration-300 hover:border-blue-500/50 card-hover"
                            whileHover={{
                                y: -5
                            }}
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
                            <div className="text-blue-400 text-3xl mb-4">
                                <i className="fas fa-money-bill-wave"></i>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">资金优势</h3>
                            <p className="text-gray-400 leading-relaxed">澳门作为自由港，资金成本显著低于内地，且拥有大量沉淀的离岸人民币，为平台提供资金支持。</p>
                        </motion.div>
                        <motion.div
                            className="bg-gray-900/70 backdrop-blur-md p-5 md:p-6 rounded-xl border border-gray-700 hover:shadow-lg transition-all duration-300 hover:border-blue-500/50 card-hover"
                            whileHover={{
                                y: -5
                            }}
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
                            <div className="text-blue-400 text-3xl mb-4">
                                <i className="fas fa-shield-alt"></i>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">隐私计算</h3>
                            <p className="text-gray-400 leading-relaxed">采用零知识证明和多方安全计算技术，在保护商业秘密的同时实现数据有效利用，解决跨境风控痛点。</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;