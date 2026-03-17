import React, { useState, useEffect } from 'react';
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { FaDownload, FaPaperPlane } from "react-icons/fa";
import { motion } from 'framer-motion';
import space from "../../assets/img/ogprofile.jpg";
const LandPage = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="relative min-h-screen overflow-hidden bg-gray-900" id="home">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
                    style={{
                        left: mousePosition.x * 0.05,
                        top: mousePosition.y * 0.05
                    }}
                ></div>
                <div
                    className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"
                    style={{
                        right: mousePosition.x * 0.03,
                        bottom: mousePosition.y * 0.03
                    }}
                ></div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%234f46e5\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
            </div>

            {/* Header */}
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-gray-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <motion.a
                        href="#home"
                        className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Portfolio.
                    </motion.a>

                    <nav className="hidden md:flex gap-8">
                        {['Home', 'About', 'Experience', 'Portfolio', 'Contact'].map((item, index) => (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-gray-300 hover:text-white transition-colors relative group"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                            </motion.a>
                        ))}
                    </nav>
                </div>
            </header>

            {/* Hero Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 min-h-screen flex items-center">
                <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
                    {/* Left Content */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="space-y-4">
                            <motion.div
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                                Available for work
                            </motion.div>

                            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                                <span className="text-white">Hi, I'm </span>
                                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    Debashish
                                </span>
                            </h1>

                            <h2 className="text-2xl md:text-3xl text-gray-400 font-light">
                                Front End Developer
                            </h2>

                            <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
                                I'm a passionate front end dvelopement crafting seamless digital experiences from front-end finesse to back-end power. I build scalable, user-centric web applications.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <motion.a
                                href="#contact"
                                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold overflow-hidden"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    <FaPaperPlane />
                                    Let's Talk
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </motion.a>

                            <motion.a
                                href="/CV.pdf"
                                download
                                className="group px-8 py-4 border border-white/20 rounded-full text-white font-semibold hover:bg-white/10 transition-all flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaDownload className="group-hover:animate-bounce" />
                                Download CV
                            </motion.a>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 pt-4">
                            <div className="flex gap-4 pt-4">
                                {[
                                    { icon: AiFillLinkedin, link: "https://www.linkedin.com/in/itsme-debashish-jena/" },
                                    { icon: AiFillGithub, link: "https:github.com/debj-Decoded" },
                                    { icon: AiFillInstagram, link: "https://www.instagram.com/_.black_burry/" },
                                ].map(({ icon: Icon, link }, index) => (
                                    <motion.a
                                        key={index}
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-blue-500/50 transition-all"
                                        whileHover={{ y: -5 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 + index * 0.1 }}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Content - Image */}
                    <motion.div
                        className="relative flex justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative w-80 h-80 md:w-96 md:h-96">
                            {/* Glowing Ring */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow opacity-75 blur-lg"></div>

                            {/* Image Container */}
                            <div className="absolute inset-2 rounded-full overflow-hidden bg-gray-800 border-4 border-gray-800">
                                <img
                                    src={space}
                                    alt="Hero"
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                className="absolute -top-4 -right-4 bg-gray-800 border border-white/10 rounded-2xl p-4 shadow-xl"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 3 }}
                            >
                                <span className="text-3xl">🚀</span>
                            </motion.div>

                            <motion.div
                                className="absolute -bottom-4 -left-4 bg-gray-800 border border-white/10 rounded-2xl p-4 shadow-xl"
                                animate={{ y: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 3, delay: 1.5 }}
                            >
                                <span className="text-3xl">💻</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
        </div>
    );
};

export default LandPage;