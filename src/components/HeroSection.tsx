import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Github, Instagram, Linkedin, Mail, MessageCircle, ChevronDown, FileText } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import resume from '../assets/resume.pdf'
import profile from '../assets/profile.png'

const HeroSection = () => {
    const [showScroll, setShowScroll] = useState(true);

    const handleScrollClick = () => {
        setShowScroll(false);
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
        });
    };

    return (
        <section className="h-screen flex items-center justify-center relative">
            <div className="container">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    <motion.img
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        src={profile}
                        alt="Profile"
                        className="rounded-full w-64 h-64 object-cover mb-8 ring-4 ring-[#DDFE35] transition-transform hover:scale-105 duration-300"
                    />
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 3, delay: 0.5 }}
                        className="text-5xl font-bold mb-4 text-[#DDFE35]"
                    >
                        Muhammad Yahya
                    </motion.h1>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 0.5, delay: 1 }}
                        className="overflow-hidden"
                    >
                        <p className="text-2xl mb-6">Python Django - ReactJS Developer</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="overflow-hidden"
                    >
                        <p className="text-xl mb-6 text-[#DDFE35]">
                            <Typewriter
                                words={['just a <dev> in digital {world.create()};']}
                                loop={false}
                                cursor
                                cursorStyle="_"
                                typeSpeed={50}
                                deleteSpeed={0}
                            />
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 3, delay: 1.5 }}
                        className="flex gap-6 justify-center"
                    >
                        <a
                            href="https://github.com/yahyabhatti10"
                            className="hover:text-[#DDFE35] transition-all hover:scale-110 duration-300"
                        >
                            <Github size={28} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/muhammad-yahya10/"
                            className="hover:text-[#DDFE35] transition-all hover:scale-110 duration-300"
                        >
                            <Linkedin size={28} />
                        </a>
                        <a
                            href="https://www.instagram.com/ctrl_alt_devv/"
                            className="hover:text-[#DDFE35] transition-all hover:scale-110 duration-300"
                        >
                            <Instagram size={28} />
                        </a>
                        <a
                            href="https://wa.me/3218814089"
                            className="hover:text-[#DDFE35] transition-all hover:scale-110 duration-300"
                        >
                            <MessageCircle size={28} />
                        </a>
                        <a
                            href="mailto:muhammadyahya.work@gmail.com"
                            className="hover:text-[#DDFE35] transition-all hover:scale-110 duration-300"
                        >
                            <Mail size={28} />
                        </a>
                        <a
                            href={resume}
                            className="hover:text-[#DDFE35] transition-all hover:scale-110 duration-300"
                            title="Resume"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FileText size={28} />
                        </a>
                    </motion.div>
                </div>
                <div className="flex w-full justify-center bottom-8 pt-[50px]">
                    <AnimatePresence>
                        {showScroll && (
                            <motion.button
                                onClick={handleScrollClick}
                                className="left-1/2 -translate-x-1/2 text-[#DDFE35] cursor-pointer hover:scale-110 transition-transform"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    y: [0, 10, 0],
                                }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{
                                    y: {
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    },
                                }}
                            >
                                <ChevronDown size={40} className="filter drop-shadow-[0_0_8px_#DDFE35]" />
                            </motion.button>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
