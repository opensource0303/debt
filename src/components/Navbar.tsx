import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll, {
            passive: true
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navItems = [{
        name: "首页",
        href: "/"
    }, {
        name: "解决方案与案例",
        href: "/solutions-cases"
    }, {
        name: "澳门优势",
        href: "/macau-advantages"
    }, {
        name: "产品优势",
        href: "/platform-mode"
    }, {
        name: "咨询我们",
        href: "/contact"
    }];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-gray-900/95 backdrop-blur-md shadow-md border-b border-gray-800 py-2" : "bg-transparent/70 backdrop-blur-sm py-4"}`}
            style={{
                willChange: "background-color, box-shadow"
            }}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    {}
                    <div className="flex items-center">
                        <></>
                        <span className="text-xl font-bold">Cred</span>
                    </div>
                    {}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map(item => <Link
                            key={item.href}
                            to={item.href}
                            className={`transition-all duration-300 py-2 relative ${location.pathname === item.href ? "text-blue-400 font-medium" : "text-gray-300 hover:text-blue-400"}`}>
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
                        </Link>)}
                    </nav>
                    {}
                    <div className="flex items-center">
                        <button
                            className="md:hidden p-2 text-gray-300 hover:bg-gray-800 rounded-full transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="打开菜单">
                            <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
                        </button>
                    </div>
                </div>
                {}
                <motion.div
                    initial={false}
                    animate={{
                        height: isMenuOpen ? "auto" : 0,
                        opacity: isMenuOpen ? 1 : 0
                    }}
                    className="md:hidden overflow-hidden"
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut"
                    }}>
                    <div className="space-y-3 py-4 border-t border-gray-800">
                        {navItems.map(item => <Link
                            key={item.href}
                            to={item.href}
                            className={`block transition-colors py-2 ${location.pathname === item.href ? "text-blue-400 font-medium" : "text-gray-300 hover:text-blue-400"}`}
                            onClick={() => setIsMenuOpen(false)}>
                            {item.name}
                        </Link>)}
                    </div>
                </motion.div>
            </div>
        </header>
    );
};

export default Navbar;