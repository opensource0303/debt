import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {
            name,
            value
        } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success("您的信息已提交成功，我们将尽快与您联系！");

        setFormData({
            name: "",
            email: "",
            phone: "",
            message: ""
        });
    };

    return (
        <section id="contact" className="py-24 relative">
            {}
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
            <></>
        </section>
    );
};

export default React.memo(Contact);