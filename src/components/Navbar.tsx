import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

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
        name: "平台模式",
        href: "/platform-mode"
    }, {
        name: "联系我们",
        href: "/contact"
    }];

    return (
        <header
            className="fixed top-0 left-0 right-0 bg-gray-900/90 backdrop-blur-md z-50 shadow-sm border-b border-gray-800">
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center">
                            <img
                                src="https://s.coze.cn/t/eP1Al9TDvUA/"
                                alt="链清 Cred"
                                className="h-10 w-auto mr-3" />
                        </Link>
                    </div>
                    {}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map(item => <Link
                            key={item.href}
                            to={item.href}
                            className={`transition-colors ${location.pathname === item.href ? "text-blue-400 font-medium" : "text-gray-300 hover:text-blue-400"}`}>
                            {item.name}
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
                {isMenuOpen && <div
                    className="md:hidden mt-4 pb-4 space-y-3 animate-fadeIn bg-gray-900 border-t border-gray-800 pt-4">
                    {navItems.map(item => <Link
                        key={item.href}
                        to={item.href}
                        className={`block transition-colors py-2 ${location.pathname === item.href ? "text-blue-400 font-medium" : "text-gray-300 hover:text-blue-400"}`}
                        onClick={() => setIsMenuOpen(false)}>
                        {item.name}
                    </Link>)}
                </div>}
            </div>
        </header>
    );
};

export default Navbar;