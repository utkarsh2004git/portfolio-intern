import React from 'react'
import { motion } from "framer-motion";
import avatar from "../assets/avatar.png"
import HireMeBtn from '../components/HireMeBtn';

const Home = () => {
    return (
        <>
            <div id="home" className="bg-gray-900 text-white  flex items-center justify-center  px-0 md:px-10 flex-col-reverse pt-20 md:pt-10 md:flex-row h-full min-h-screen">
                <div className=" flex flex-col justify-center w-2/3 items-center  px-3">
                    <motion.div
                        className=" font-bold"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        <>
                            <p className='text-3xl md:text-4xl'>Hi, I'm</p>
                            <div className='text-4xl md:text-7xl text-blue-400'>
                                <span className='text-3xl md:text-5xl'>Utkarsh</span> <br />Shahare
                            </div>
                            <div className='text-lg mt-3'>
                                <span className="text-gray-300 ">
                                    I love turning ideas into reality through code.
                                </span>
                                <br />

                            </div>
                            <p className="text-gray-400 text-sm mt-3 max-w-2xl">
                                A Full Stack Developer with a knack for building scalable web applications, solving real-world problems, and constantly exploring new technologies.
                            </p>
                            <div>
                                <HireMeBtn />
                            </div>
                        </>
                    </motion.div>
                </div>
                <motion.div
                    className="hover:scale-95 duration-200 cursor-pointer w-full flex justify-center md:justify-end items-end "
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                >
                    <div class="relative inline-flex items-center justify-center gap-4 group">
                        <div
                            class="absolute inset-0 duration-1000 opacity-10 transitiona-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-xl blur-lg filter group-hover:opacity-20 group-hover:duration-200"
                        ></div>
                        <div className=''>
                            <img
                                src={avatar}
                                alt="avatar"
                                className='w-sm md:w-xl'
                            />
                        </div>
                    </div>
                </motion.div>

            </div>
        </>
    );
};

export default Home;
