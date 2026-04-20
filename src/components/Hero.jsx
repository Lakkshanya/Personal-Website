import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, ChevronRight } from 'lucide-react';
import { Github, Linkedin } from './icons';
import profileImg from '../assets/Lakkshanya.jpg';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Building Intelligent Systems for Real-World Impact";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center section-padding relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 glass rounded-full text-sm font-medium text-primary-600 dark:text-primary-400">
            Welcome to my Portfolio
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            Hi, I'm <span className="bg-gradient-to-r from-primary-600 to-indigo-500 bg-clip-text text-transparent">Lakkshanya</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold mb-6 flex flex-wrap gap-2">
            <span>AI & Full Stack Developer</span>
            <span className="hidden md:block">|</span>
            <span className="text-primary-500 h-8">{text}<span className="animate-pulse">|</span></span>
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 max-w-xl leading-relaxed">
            Computer Science Engineering student with strong expertise in AI/ML and full-stack development.
            Passionate about building intelligent systems that solve real-world problems in healthcare, finance, and smart automation.
          </p>

          <div className="flex gap-6 mb-8">
            <a href="https://github.com/Lakkshanya" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-primary-600 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/lakkshanya-suresh-41942a32b" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-primary-600 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Glow Effects */}
            <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-2xl animate-pulse" />

            <img
              src={profileImg}
              alt="Lakkshanya Suresh"
              className="profile-img w-[280px] h-[280px] md:w-[350px] md:h-[350px] relative z-10 bg-white dark:bg-slate-800 object-cover p-1.5"
            />

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 glass px-4 py-2 rounded-2xl z-20"
            >
              <span className="text-2xl"></span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-2xl z-20"
            >
              <span className="text-2xl"></span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
