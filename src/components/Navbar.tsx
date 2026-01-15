import React, { useState, useContext } from "react";
import { useTheme } from "@/hooks/useTheme";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "sonner";
import { AuthContext } from "@/contexts/authContext";
import { LanguageContext, Language } from "@/contexts/languageContext";

const Navbar = () => {
    const {
        theme,
        toggleTheme
    } = useTheme();

    const {
        isAuthenticated,
        logout,
        user
    } = useContext(AuthContext);

    const {
        language,
        setLanguage,
        t
    } = useContext(LanguageContext);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  


    const handleLogout = () => {
        logout();
        toast.success(language === 'zh' ? "已成功退出登录" : "Successfully logged out");
        navigate("/");
    };

    const handleLoginClick = () => {
        navigate("/login");
    };

    // 切换语言
    const handleLanguageToggle = () => {
        setLanguage(language === 'zh' ? 'en' : 'zh');
    };

    return (
        <header
            className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 shadow-sm">
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center">
                            <img
                                src="https://lf-code-agent.coze.cn/obj/x-ai-cn/346738007298/attachment/cred_log_20260115200403.jpg"
                                alt="链清 Cred"
                                className="h-10 w-auto mr-3 rounded-lg" />
                            <></>
                        </Link>
                    </div>
                    {}
            <nav className="hidden md:flex items-center space-x-8">
                        <Link
                            to="/"
                            className={`transition-colors ${location.pathname === "/" ? "text-blue-600 dark:text-blue-400 font-medium" : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"}`}>{t('home')}</Link>
                        <Link
                            to="/solution"
                            className={`transition-colors ${location.pathname === "/solution" ? "text-blue-600 dark:text-blue-400 font-medium" : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"}`}>{t('solution')}</Link>
                        <Link
                            to="/international-cases"
                            className={`transition-colors ${location.pathname === "/international-cases" ? "text-blue-600 dark:text-blue-400 font-medium" : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"}`}>{t('internationalCases')}</Link>
                        <Link
                            to="/platform-mode"
                            className={`transition-colors ${location.pathname === "/platform-mode" ? "text-blue-600 dark:text-blue-400 font-medium" : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"}`}>{t('platformMode')}</Link>
                        <Link
                            to="/core-advantages"
                            className={`transition-colors ${location.pathname === "/core-advantages" ? "text-blue-600 dark:text-blue-400 font-medium" : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"}`}>{t('coreAdvantages')}</Link>
                        <Link
                            to="/creditor-right-registration"
                            className={`transition-colors ${location.pathname === "/creditor-right-registration" ? "text-blue-600 dark:text-blue-400 font-medium" : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"}`}>{t('creditorRightRegistration')}</Link>
                        <Link
                            to="/debt-confirmation"
                            className={`transition-colors ${location.pathname === "/debt-confirmation" ? "text-blue-600 dark:text-blue-400 font-medium" : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"}`}>{t('debtConfirmation')}</Link>
                        <Link
                            to="/contact"
                            className={`transition-colors ${location.pathname === "/contact" ? "text-blue-600 dark:text-blue-400 font-medium" : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"}`}>{t('contact')}</Link>
                    </nav>
                    <div className="flex items-center space-x-4">
                        {/* 语言切换按钮 */}
                        <button
                            onClick={handleLanguageToggle}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center justify-center"
                            aria-label="切换语言">
                            <i className={`fas fa-globe text-gray-700 dark:text-gray-300 mr-1`}></i>
                            <span className="hidden md:inline text-sm font-medium">{language.toUpperCase()}</span>
                        </button>
                        
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            aria-label="切换主题">
                            {theme === "light" ? <i className="fas fa-moon text-gray-700"></i> : <i className="fas fa-sun text-yellow-400"></i>}
                        </button>

                        {}
                        {isAuthenticated ? <div className="relative">
                            <button
                                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                                className="flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-gray-800 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-gray-700 transition-colors">
                                <div
                                    className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                                    <span className="font-medium">{user?.username.charAt(0).toUpperCase()}</span>
                                </div>
                                <span className="hidden md:inline font-medium">{user?.username}</span>
                                <i
                                    className={`fas ${isUserMenuOpen ? "fa-chevron-up" : "fa-chevron-down"} text-sm`}></i>
                            </button>
                            {isUserMenuOpen && <div
                                className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden z-10">
                                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                                    <div className="font-semibold">{user?.username}</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">{user?.email}</div>
                                </div>
                                <button
                                    onClick={handleLogout}
                                    className="w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center space-x-2">
                                    <i className="fas fa-sign-out-alt text-red-500"></i>
                                    <span>{t('logout')}</span>
                                </button>
                            </div>}
                        </div> : <button
                            onClick={handleLoginClick}
                            className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors">{t('login')} / {t('register')}
                                          </button>}
                        <button
                            className="md:hidden p-2"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="打开菜单">
                            <i
                                className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-gray-700 dark:text-gray-300`}></i>
                        </button>
                    </div>
                </div>
                {}
                 {isMenuOpen && <div className="md:hidden mt-4 pb-4 space-y-3 animate-fadeIn">
                        <Link
                            to="/"
                            className={`block transition-colors py-2 ${location.pathname === "/" ? "text-blue-600 dark:text-blue-400 font-medium" : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"}`}>{t('home')}</Link>
                        <Link
                            to="/solution"
                            className={`block transition-colors py-2 ${location.pathname === "/solution" ? "text-blue-600 dark:text-blue-400 font-medium" : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"}`}>{t('solution')}</Link>
                        <Link
                            to="/international-cases"
                            className={`block transition-colors py-2 ${location.pathname === "/international-cases" ? "text-blue-600 dark:text-blue-400 font-medium" : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"}`}>{t('internationalCases')}</Link>
                        <Link
                            to="/platform-mode"
                            className={`block transition-colors py-2 ${location.pathname === "/platform-mode" ? "text-blue-600 dark:text-blue-400 font-medium" : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"}`}>{t('platformMode')}</Link>
                        <Link
                            to="/core-advantages"
                            className={`block transition-colors py-2 ${location.pathname === "/core-advantages" ? "text-blue-600 dark:text-blue-400 font-medium" : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"}`}>{t('coreAdvantages')}</Link>
                        <Link
                            to="/creditor-right-registration"
                            className={`block transition-colors py-2 ${location.pathname === "/creditor-right-registration" ? "text-blue-600 dark:text-blue-400 font-medium" : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"}`}>{t('creditorRightRegistration')}</Link>
                        <Link
                            to="/debt-confirmation"
                            className={`block transition-colors py-2 ${location.pathname === "/debt-confirmation" ? "text-blue-600 dark:text-blue-400 font-medium" : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"}`}>{t('debtConfirmation')}</Link>
                        <Link
                            to="/contact"
                            className={`block transition-colors py-2 ${location.pathname === "/contact" ? "text-blue-600 dark:text-blue-400 font-medium" : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"}`}>{t('contact')}</Link>
                        {isAuthenticated ? <button
                            onClick={handleLogout}
                            className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full transition-colors">{t('logout')}
                                          </button> : <>
                        <button
                            onClick={handleLoginClick}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors">{t('login')} / {t('register')}
                                          </button>

                    </>}
                </div>}
            </div>
        </header>
    );
};

export default Navbar;