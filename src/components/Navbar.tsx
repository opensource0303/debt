import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const [isMobile, setIsMobile] = useState(false);

    // 检测窗口大小变化 - 优化版
    useEffect(() => {
        // 初始检测
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIsMobile();
        
        // 节流处理窗口大小变化事件
        let resizeTimeout: number;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(checkIsMobile, 100);
        };
        
        window.addEventListener("resize", handleResize, { passive: true });

        return () => {
            window.removeEventListener("resize", handleResize);
            clearTimeout(resizeTimeout);
        };
    }, []);

    // 处理滚动事件 - 优化版
    useEffect(() => {
        // 仅在非移动设备上启用滚动监听
        if (!isMobile) {
            const handleScroll = () => {
                setScrolled(window.scrollY > 10);
            };

            // 节流处理滚动事件
            let scrollTimeout: number;
            const throttledScroll = () => {
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => {
                    requestAnimationFrame(handleScroll);
                }, 50);
            };

            window.addEventListener("scroll", throttledScroll, { passive: true });

            return () => {
                window.removeEventListener("scroll", throttledScroll);
                clearTimeout(scrollTimeout);
            };
        }
    }, [isMobile]);

  // 菜单项数据
  const navItems = [
    { name: "首页", href: "/" },
    { name: "产品服务", href: "/product-services" },
    { name: "特色优势", href: "/platform-mode" },
    { name: "咨询我们", href: "/contact" }
  ];

    // 处理菜单开关
    const toggleMenu = useCallback(() => {
        setIsMenuOpen(prev => !prev);
    }, []);

    // 导航链接组件
    const NavLink = React.memo(({ item }: { item: { name: string; href: string } }) => (
        <Link
            key={item.href}
            to={item.href}
            className={`transition-all duration-300 py-2 relative touch-target ${
                location.pathname === item.href 
                    ? "text-blue-400 font-medium" 
                    : "text-gray-300 hover:text-blue-400"
            }`}
            onClick={() => {
                if (isMobile) {
                    setIsMenuOpen(false);
                }
            }}
        >
            {item.name}
            {location.pathname === item.href && (
                <motion.div
                    layoutId="navIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400"
                    initial={false}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30
                    }}
                />
            )}
        </Link>
    ));

    // 移动端导航项组件
    const MobileNavItem = React.memo(({ item }: { item: { name: string; href: string } }) => (
        <motion.a
            key={item.href}
            href={item.href}
            className={`block transition-colors py-4 px-5 rounded-lg ${
                location.pathname === item.href 
                    ? "text-blue-400 font-medium bg-gray-800/50" 
                    : "text-gray-300 hover:text-blue-400"
            }`}
            onClick={(e) => {
                e.preventDefault();
                window.location.href = item.href;
                setIsMenuOpen(false);
            }}
            // 在移动设备上简化动画以提高性能
            whileTap={isMobile ? undefined : { scale: 0.98 }}
        >
            {item.name}
        </motion.a>
    ));

    // 移动设备上使用更简单的动画配置
    const mobileAnimationConfig = {
        duration: 0.2,
        ease: "linear"
    };

    // 桌面设备上使用更流畅的动画配置
    const desktopAnimationConfig = {
        duration: 0.3,
        ease: "easeInOut"
    };

    const menuAnimationConfig = isMobile ? mobileAnimationConfig : desktopAnimationConfig;

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled 
                    ? "bg-gray-900/95 backdrop-blur-md shadow-md border-b border-gray-800 py-2" 
                    : "bg-transparent/70 backdrop-blur-sm py-4"
            } nav-mobile`}
            style={{
                willChange: "background-color, box-shadow"
            }}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <img
                            src="https://s.coze.cn/t/x5GlETxxCsM/"
                            alt="可信达 Cred"
                            className="h-8 mr-3"
                        />
                    </div>

                    {/* 桌面导航 */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <NavLink key={item.href} item={item} />
                        ))}
                    </nav>

                    {/* 移动端菜单按钮 - 优化触摸目标 */}
                    <button
                        className="md:hidden p-4 text-gray-300 hover:bg-gray-800 rounded-full transition-colors touch-target"
                        onClick={toggleMenu}
                        aria-label={isMenuOpen ? "关闭菜单" : "打开菜单"}
                        aria-expanded={isMenuOpen}
                        style={{
                            minWidth: "48px",
                            minHeight: "48px",
                            touchAction: "manipulation"
                        }}
                    >
                        <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
                    </button>
                </div>

                {/* 移动端导航菜单 */}
                <motion.div
                    initial={false}
                    animate={{
                        height: isMenuOpen ? "auto" : 0,
                        opacity: isMenuOpen ? 1 : 0
                    }}
                    className="md:hidden overflow-hidden"
                    transition={menuAnimationConfig}
                >
                    <div className="space-y-3 py-4 border-t border-gray-800">
                        {navItems.map((item) => (
                            <MobileNavItem key={item.href} item={item} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </header>
    );
};

// 使用 React.memo 优化组件渲染
export default React.memo(Navbar);