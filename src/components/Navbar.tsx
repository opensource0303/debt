import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIsMobile();
        let resizeTimeout: number;

        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(checkIsMobile, 100);
        };

        window.addEventListener("resize", handleResize, {
            passive: true
        });

        return () => {
            window.removeEventListener("resize", handleResize);
            clearTimeout(resizeTimeout);
        };
    }, []);

    useEffect(() => {
        if (!isMobile) {
            const handleScroll = () => {
                setScrolled(window.scrollY > 10);
            };

            let scrollTimeout: number;

            const throttledScroll = () => {
                clearTimeout(scrollTimeout);

                scrollTimeout = setTimeout(() => {
                    requestAnimationFrame(handleScroll);
                }, 50);
            };

            window.addEventListener("scroll", throttledScroll, {
                passive: true
            });

            return () => {
                window.removeEventListener("scroll", throttledScroll);
                clearTimeout(scrollTimeout);
            };
        }
    }, [isMobile]);

    const navItems = [{
        name: "首页",
        href: "/"
    }, {
        name: "产品服务",
        href: "/product-services"
    }, {
        name: "特色优势",
        href: "/platform-mode"
    }, {
        name: "咨询我们",
        href: "/contact"
    }];

    const toggleMenu = useCallback(() => {
        setIsMenuOpen(prev => !prev);
    }, []);

    const NavLink = React.memo((
        {
            item
        }: {
            item: {
                name: string;
                href: string;
            };
        }
    ) => <Link
        key={item.href}
        to={item.href}
        className={`transition-all duration-300 py-2 relative touch-target ${location.pathname === item.href ? "text-blue-400 font-medium" : "text-gray-300 hover:text-blue-400"}`}
        onClick={() => {
            if (isMobile) {
                setIsMenuOpen(false);
            }
        }}>
        {item.name}
        {location.pathname === item.href && <motion.div
            layoutId="navIndicator"
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400"
            initial={false}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 30
            }} />}
    </Link>);

    const MobileNavItem = React.memo((
        {
            item
        }: {
            item: {
                name: string;
                href: string;
            };
        }
    ) => <Link
        to={item.href}
        className={`block transition-colors py-4 px-5 rounded-lg ${location.pathname === item.href ? "text-blue-400 font-medium bg-gray-800/50" : "text-gray-300 hover:text-blue-400"}`}
        onClick={() => {
            setIsMenuOpen(false);
        }}>
        {item.name}
    </Link>);

    const mobileAnimationConfig = {
        duration: 0.2,
        ease: "linear"
    };

    const desktopAnimationConfig = {
        duration: 0.3,
        ease: "easeInOut"
    };

    const menuAnimationConfig = isMobile ? mobileAnimationConfig : desktopAnimationConfig;

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-gray-900/95 backdrop-blur-md shadow-md border-b border-gray-800 py-2" : "bg-transparent/70 backdrop-blur-sm py-4"} nav-mobile`}
            style={{
                willChange: "background-color, box-shadow"
            }}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <img
                            src="https://s.coze.cn/t/HSJJvJGwKs4/"
                            alt="可信达 Cred"
                            className="h-8 mr-3" />
                    </div>
                    {}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map(item => <NavLink key={item.href} item={item} />)}
                    </nav>
                    {}
                    <button
                        className="md:hidden p-4 text-gray-300 hover:bg-gray-800 rounded-full transition-colors touch-target"
                        onClick={toggleMenu}
                        aria-label={isMenuOpen ? "关闭菜单" : "打开菜单"}
                        aria-expanded={isMenuOpen}
                        style={{
                            minWidth: "48px",
                            minHeight: "48px",
                            touchAction: "manipulation"
                        }}>
                        <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
                    </button>
                </div>
                {}
                <motion.div
                    initial={false}
                    animate={{
                        height: isMenuOpen ? "auto" : 0,
                        opacity: isMenuOpen ? 1 : 0
                    }}
                    className="md:hidden overflow-hidden"
                    transition={menuAnimationConfig}>
                    <div className="space-y-3 py-4 border-t border-gray-800">
                        {navItems.map(item => <MobileNavItem key={item.href} item={item} />)}
                    </div>
                </motion.div>
            </div>
        </header>
    );
};

export default React.memo(Navbar);