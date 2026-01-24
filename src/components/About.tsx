import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const About = () => {
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

    return (
        <section id="about" className="py-24 relative">
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute right-0 bottom-0 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl"
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
                <motion.div
                    className="text-center max-w-3xl mx-auto"
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
                    <h2
                        className="section-title mb-8"
                        style={{
                            fontSize: "48px"
                        }}>公司介绍</h2>
                    <p className="section-description leading-relaxed">Cred可信达，信任驱动，智能引领。致力于解决中国企业与政府的债务问题，激活资产潜力，连接全球资金，推动经济高效、可持续发展。凭借AAA级信用保障，我们打造一个安全、智能、可靠的国际化资产交易与管理平台。</p>
                </motion.div>
            </div>
        </section>
    );
};

export default React.memo(About);