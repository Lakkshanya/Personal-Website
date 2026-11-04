import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, FolderGit2, MessageCircle } from 'lucide-react';
import { Github, Linkedin, WhatsApp } from './icons';
import profileImg from '../assets/Lakkshanya.jpg';
import { CONTACT_CONFIG } from './Contact';

const Hero = () => {
  const [text, setText] = useState('');
  const titles = [
    "AI & Full Stack Developer",
    "React Native Mobile Engineer",
    "Deep Learning Researcher",
    "Building Intelligent Scalable Systems"
  ];
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const typingSpeed = isDeleting ? 30 : 65;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentTitle.length) {
        setText(currentTitle.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (!isDeleting && charIndex === currentTitle.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex > 0) {
        setText(currentTitle.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, titleIndex]);

  return (
    <section className="min-h-[82vh] flex items-center py-10 md:py-16 relative">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
        {/* Left Column: Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 text-left space-y-5"
        >
          {/* Welcome Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-violet-50 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300 border border-violet-200/80 dark:border-violet-800/60 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-violet-600 dark:text-amber-400" />
            <span>Computer Science Engineering • SRMIST</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-500 dark:from-violet-400 dark:via-indigo-300 dark:to-purple-300 bg-clip-text text-transparent">
              Lakkshanya
            </span>
          </h1>

          {/* Typewriter Subheading */}
          <div className="min-h-[36px] flex items-center">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100">
              {text}
              <span className="inline-block w-0.5 h-6 ml-1 bg-primary-600 dark:bg-primary-400 animate-pulse align-middle rounded-full" />
            </span>
          </div>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
            Specializing in architecting end-to-end intelligent systems, deep learning workflows, and high-performance mobile & web applications. Passionate about solving high-impact problems across healthcare, fintech, and campus operations.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-primary-600 via-indigo-600 to-primary-700 hover:from-primary-700 hover:to-indigo-800 text-white shadow-md shadow-primary-500/20 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <FolderGit2 className="w-4 h-4" />
              <span>Explore Projects</span>
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-xl font-bold text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary-500 dark:hover:border-primary-400 text-slate-800 dark:text-slate-100 hover:text-primary-600 dark:hover:text-primary-400 shadow-xs hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Get In Touch</span>
            </a>
          </div>

          {/* Direct Social Icons */}
          <div className="flex items-center gap-3 pt-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1">
              Connect:
            </span>
            <a
              href={CONTACT_CONFIG.github.url}
              target="_blank"
              rel="noreferrer"
              title="GitHub Profile"
              className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-800 dark:hover:border-slate-200 text-slate-700 dark:text-slate-200 hover:scale-105 transition-all shadow-xs"
            >
              <Github className="w-4.5 h-4.5" />
            </a>
            <a
              href={CONTACT_CONFIG.linkedin.url}
              target="_blank"
              rel="noreferrer"
              title="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 text-slate-700 dark:text-slate-200 hover:text-blue-600 hover:scale-105 transition-all shadow-xs"
            >
              <Linkedin className="w-4.5 h-4.5" />
            </a>
            <a
              href={`https://wa.me/${CONTACT_CONFIG.whatsapp.waNumber}?text=${encodeURIComponent(CONTACT_CONFIG.whatsapp.defaultMessage)}`}
              target="_blank"
              rel="noreferrer"
              title="Chat on WhatsApp"
              className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 text-slate-700 dark:text-slate-200 hover:text-emerald-500 hover:scale-105 transition-all shadow-xs"
            >
              <WhatsApp className="w-4.5 h-4.5" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Sophisticated Squircle Portrait Holder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-5 flex justify-center items-center"
        >
          <div className="relative group cursor-pointer">
            {/* Geometric Underlay Accent Frame */}
            <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-tr from-violet-600/40 via-indigo-500/30 to-purple-500/40 border border-violet-400/40 dark:border-violet-500/30 rotate-3 group-hover:rotate-5 transition-transform duration-500" />
            
            {/* Main Portrait Shape Holder */}
            <div className="relative z-10 w-56 h-72 sm:w-72 sm:h-92 md:w-80 md:h-[400px] rounded-[2.2rem] sm:rounded-[2.5rem] p-2 sm:p-2.5 bg-white dark:bg-slate-900 border-2 border-slate-200/90 dark:border-slate-800 shadow-2xl transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-[1.01]">
              <div className="w-full h-full rounded-[1.8rem] sm:rounded-[2rem] overflow-hidden bg-slate-100 dark:bg-slate-950">
                <img
                  src={profileImg}
                  alt="Lakkshanya Suresh"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
