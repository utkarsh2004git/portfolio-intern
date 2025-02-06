import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const ContactMe = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            setError(true);
            setTimeout(() => setError(false), 500);
        } else {
            toast.success('Your request is sent!', {
                style: { background: "#1e2939", color: "white" }
            }
            )
            setFormData({ name: "", email: "", message: "" });
        }
    };

    return (
        <>
            <hr className="opacity-10" />
            <section className="bg-gray-900 text-white  px-6 min-h-fit py-16 flex items-center justify-center" id="contact">

                <motion.div
                    className="max-w-2xl w-full bg-gray-800 p-8 rounded-xl shadow-lg"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold text-center">Contact Me</h2>
                    <p className="text-gray-400 text-center mt-2">Let's work together! Send me a message.</p>

                    <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                        <motion.input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none ${error && !formData.name ? "border-red-500" : ""
                                }`}
                            whileTap={{ scale: 0.98 }}
                        />

                        <motion.input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none ${error && !formData.email ? "border-red-500" : ""
                                }`}
                            whileTap={{ scale: 0.98 }}
                        />

                        <motion.textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            className={`w-full resize-none px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none ${error && !formData.message ? "border-red-500" : ""
                                }`}
                            whileTap={{ scale: 0.98 }}

                        />

                        <motion.button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-600 cursor-pointer text-white font-bold py-2 rounded-lg transition"

                        >
                            Send Message
                        </motion.button>
                    </form>
                </motion.div>
            </section>
        </>
    );
};

export default ContactMe;
