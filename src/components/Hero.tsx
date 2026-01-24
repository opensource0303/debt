import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [startX, setStartX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const sliderRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [isLowPerformance, setIsLowPerformance] = useState(false);

    // 检测设备性能和尺寸
    useEffect(() => {
        const checkDevicePerformance = () => {
            // 检测是否为移动设备
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            
            // 简单的性能检测
            if (mobile) {
                // 检测是否为低端设备
                const isLowEnd = 
                    navigator.userAgent.includes('Android') && !navigator.userAgent.includes('Chrome/') ||
                    navigator.userAgent.includes('iPhone') && /iPhone OS [1-9]/.test(navigator.userAgent) ||
                    window.devicePixelRatio < 1.5;
                
                setIsLowPerformance(isLowEnd);
            } else {
                setIsLowPerformance(false);
            }
        };

        checkDevicePerformance();
        
        // 节流处理窗口大小变化事件
        let resizeTimeout: number;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(checkDevicePerformance, 100);
        };
        
        window.addEventListener("resize", handleResize, { passive: true });

        return () => {
            window.removeEventListener("resize", handleResize);
            clearTimeout(resizeTimeout);
        };
    }, []);

    // 幻灯片数据
    const slides = useMemo(() => [{
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
        description: "提供智能化债、国际发债、债权资产工厂、资产持续管理等全方位金融服务，帮助企业解决债务问题，优化资产结构，提升融资能力。",
        image: "https://lf-code-agent.coze.cn/obj/x-ai-cn/346738007298/attachment/轮播1_20260123002832.png",
        ctaText: "探索产品服务"
    }, {
        id: 3,
        title: "双轨制引擎",
        subtitle: "全方位解决债务问题",
        description: "采用'双引擎'策略：多边净额清算引擎解决存量三角债，供应链金融交易引擎解决增量融资需求，双轨制设计全方位解决不同类型的债务问题。",
        image: "https://lf-code-agent.coze.cn/obj/x-ai-cn/346738007298/attachment/轮播2_20260123002838.png",
        ctaText: "了解产品优势"
    }], []);

    // 幻灯片控制函数
    const goToSlide = useCallback((index: number) => {
        setCurrentSlide(index);
    }, []);

    const nextSlide = useCallback(() => {
        setCurrentSlide(prev => (prev + 1) % slides.length);
    }, [slides.length]);

    const prevSlide = useCallback(() => {
        setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
    }, [slides.length]);

    // 触摸和鼠标事件处理
    const handleTouchStart = useCallback((e: React.TouchEvent) => {
        setStartX(e.touches[0].clientX);
        setIsDragging(true);
    }, []);

    const handleTouchMove = useCallback((e: React.TouchEvent) => {
        if (!isDragging) return;
        e.preventDefault();
    }, [isDragging]);

    const handleTouchEnd = useCallback((e: React.TouchEvent) => {
        if (!isDragging) return;

        const endX = e.changedTouches[0].clientX;
        const diff = startX - endX;
        const threshold = isMobile ? 20 : 30;

        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }

        setIsDragging(false);
    }, [isDragging, startX, nextSlide, prevSlide, isMobile]);

    // 鼠标事件只在非移动设备上处理
    const handleMouseDown = useCallback((e: React.MouseEvent) => {
        if (!isMobile) {
            setStartX(e.clientX);
            setIsDragging(true);
        }
    }, [isMobile]);

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        if (!isDragging || isMobile) return;
        e.preventDefault();
    }, [isDragging, isMobile]);

    const handleMouseUp = useCallback((e: React.MouseEvent) => {
        if (!isDragging || isMobile) return;

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
    }, [isDragging, startX, nextSlide, prevSlide, isMobile]);

    const handleMouseLeave = useCallback(() => {
        if (!isMobile) {
            setIsDragging(false);
        }
    }, [isMobile]);

    // 根据设备性能调整动画配置
    const animationConfig = useMemo(() => {
        if (isLowPerformance) {
            return {
                duration: 0.2,
                ease: "linear"
            };
        }
        return {
            duration: isMobile ? 0.3 : 0.5,
            ease: "easeInOut"
        };
    }, [isMobile, isLowPerformance]);

    const imageAnimationConfig = useMemo(() => {
        if (isLowPerformance) {
            return {
                duration: 0.5,
                ease: "linear"
            };
        }
        return {
            duration: isMobile ? 1 : 1.5,
            ease: "easeInOut"
        };
    }, [isMobile, isLowPerformance]);

    const titleAnimationConfig = useMemo(() => {
        if (isLowPerformance) {
            return {
                delay: 0.1,
                duration: 0.3
            };
        }
        return {
            delay: 0.2,
            duration: isMobile ? 0.5 : 0.8
        };
    }, [isMobile, isLowPerformance]);

    return (
        <section
            className="pt-24 pb-24 overflow-hidden relative min-h-[60vh] flex items-center">
            {/* 背景装饰元素 - 只在非移动设备上显示 */}
            {!isMobile && (
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
            )}
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div
                        ref={sliderRef}
                        className="relative w-full overflow-hidden"
                        style={{
                            height: isMobile ? "400px" : "550px",
                            willChange: "transform",
                            touchAction: "manipulation" // 优化触摸行为
                        }}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseLeave}>
                        {slides.map((slide, index) => (
                            <motion.div
                                key={slide.id}
                                className={`absolute inset-0 flex flex-col md:flex-row items-center justify-center p-6 md:p-12 ${index === currentSlide ? "z-20" : "z-10"}`}
                                initial={{
                                    opacity: 0,
                                    y: 20
                                }}
                                animate={{
                                    opacity: index === currentSlide ? 1 : 0,
                                    y: index === currentSlide ? 0 : 20
                                }}
                                transition={animationConfig}
                            >
                                <div className="absolute inset-0 z-0">
                                    <motion.img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="w-full h-full object-cover object-center"
                                        initial={{
                                            scale: 1.05
                                        }}
                                        animate={{
                                            scale: 1
                                        }}
                                        transition={imageAnimationConfig}
                                        loading="lazy"
                                        style={{
                                            willChange: "transform"
                                        }} />
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
                                        transition={titleAnimationConfig}>
                                        <h1
                                            className={`font-bold text-white mb-3 leading-tight ${isMobile ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl lg:text-5xl"}`}>
                                            {slide.title}
                                        </h1>
                                        <h2
                                            className={`text-blue-300 mb-4 ${isMobile ? "text-lg" : "text-xl md:text-2xl"}`}>
                                            {slide.subtitle}
                                        </h2>
                                        <p
                                            className={`text-gray-200 mb-6 max-w-md md:max-w-lg mx-auto md:mx-0 leading-relaxed ${isMobile ? "text-sm md:text-base" : "text-base md:text-lg"}`}>
                                            {slide.description}
                                        </p>
                                    </motion.div>
                                </div>
                                <div className="hidden lg:block w-1/2 relative z-20"></div>
                            </motion.div>
                        ))}
                    </div>
                    
                    {/* 幻灯片指示器 */}
                    <div
                        className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3`}>
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-blue-500 w-8" : "bg-white/50"}`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                                style={{
                                    minWidth: "8px",
                                    minHeight: "8px",
                                    touchAction: "manipulation"
                                }}
                            />
                        ))}
                    </div>
                    
                    {/* 导航按钮 */}
                    <button
                        className={`absolute left-3 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-black/50 backdrop-blur-md hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all shadow-lg touch-target`}
                        onClick={prevSlide}
                        aria-label="Previous slide"
                        style={{
                            minWidth: "48px",
                            minHeight: "48px",
                            touchAction: "manipulation"
                        }}>
                        <i className="fas fa-chevron-left text-xl"></i>
                    </button>
                    <button
                        className={`absolute right-3 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-black/50 backdrop-blur-md hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all shadow-lg touch-target`}
                        onClick={nextSlide}
                        aria-label="Next slide"
                        style={{
                            minWidth: "48px",
                            minHeight: "48px",
                            touchAction: "manipulation"
                        }}>
                        <i className="fas fa-chevron-right text-xl"></i>
                    </button>
                </div>
            </div>
        </section>
    );
};

// 使用 React.memo 优化组件渲染
export default React.memo(Hero);