import React from "react";
import { motion } from "framer-motion";
import projects from "../projectData/project";
import { FaCode } from "react-icons/fa";


const Portfolio = () => {
    return (
        <>
        <hr className="opacity-10"/>
            <section  className="bg-gray-900 text-white py-20 px-6" id="portfolio">
                <div className="text-center mb-12">
                    <motion.h1
                        className="text-4xl font-bold"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        Portfolio
                    </motion.h1>
                    <motion.p
                        className="text-gray-400 mt-2 text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Some of my recent projects
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto  md:px-5 ">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 cursor-pointer border border-blue-400"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
                            <div className="p-3">
                                <h2 className="text-2xl font-semibold">{project.title}</h2>
                                <p className="text-gray-400 mt-2">{project.description}</p>
                                <div className="flex justify-center">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    className="inline-block mt-3 px-4 py-2 text-blue-400 border border-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition cursor-pointer"
                                >
                                    View Project
                                </a>
                                
                                </div>
                            </div>
                           
                        </motion.div>
                    ))}
                </div>
            </section>
            
        </>
    );
};

export default Portfolio;
