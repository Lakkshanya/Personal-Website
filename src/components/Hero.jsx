import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, MessageSquare, ArrowRight, GraduationCap } from 'lucide-react';
import { Github, Linkedin, WhatsApp } from './icons';
import profileImg from '../assets/Lakkshanya.jpg';
import { CONTACT_CONFIG } from '../data/portfolioData';

const TITLES = [
  "AI & Full Stack Developer",
  "Deep Learning Researcher",
  "React Native Mobile Engineer",
  "High-Performance Systems Architect"
];

const Hero = () => {
  const [text, setText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = TITLES[titleIndex];
    const typingSpeed = isDeleting ? 28 : 60;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentTitle.length) {
        setText(currentTitle.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (!isDeleting && charIndex === currentTitle.length) {
        setTimeout(() => setIsDeleting(true), 2200);
      } else if (isDeleting && charIndex > 0) {
        setText(currentTitle.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % TITLES.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, titleIndex]);

  return (
    <section className="min-h-[80vh] flex items-center py-8 sm:py-12 md:py-16 relative">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Hero Copy */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 text-left space-y-4 sm:space-y-5 order-2 lg:order-1"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-violet-100 dark:bg-violet-950/60 text-violet-800 dark:text-violet-300 border border-violet-200 dark:border-violet-800/80 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Open to AI / ML & Full Stack Roles</span>
            <span className="text-violet-400 dark:text-violet-500">•</span>
            <span className="text-slate-600 dark:text-slate-400 text-xs font-normal">SRMIST '27</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.12]">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 dark:from-violet-400 dark:via-indigo-300 dark:to-cyan-300 bg-clip-text text-transparent">
              Lakkshanya
            </span>
          </h1>

          {/* Dynamic Typewriter Role */}
          <div className="min-h-[40px] sm:min-h-[44px] flex items-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-800 dark:text-slate-100 flex items-center">
              <span>{text}</span>
              <span className="inline-block w-0.5 sm:w-1 h-6 sm:h-8 ml-1 bg-violet-600 dark:bg-violet-400 animate-pulse align-middle rounded-full" />
            </h2>
          </div>

          {/* Value Proposition */}
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl font-normal">
            Specializing in engineering end-to-end intelligent systems, deep learning workflows, and high-performance mobile & web architectures. Ranked topper with a <span className="font-bold text-violet-700 dark:text-violet-300">9.93 CGPA</span> and published Scopus researcher.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <a
              href="#projects"
              className="px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-700 hover:from-violet-700 hover:to-indigo-800 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group"
            >
              <FolderGit2 className="w-4 h-4" />
              <span>Explore Featured Work</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="px-6 py-3.5 rounded-xl font-bold text-sm bg-white dark:bg-[#0e1424] border border-slate-300 dark:border-white/[0.1] hover:border-violet-500/50 dark:hover:border-violet-400/50 text-slate-800 dark:text-slate-100 hover:text-violet-600 dark:hover:text-violet-400 shadow-sm hover:-translate-y-0.5 active:translate-y-0 backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Get In Touch</span>
            </a>
          </div>

          {/* Direct Social Buttons */}
          <div className="flex items-center gap-2.5 pt-2">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mr-1">
              Direct:
            </span>
            <a
              href={CONTACT_CONFIG.github.url}
              target="_blank"
              rel="noreferrer"
              title="GitHub Profile"
              className="p-2.5 rounded-xl bg-white dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] hover:border-violet-500/50 hover:bg-violet-50 dark:hover:bg-violet-950/40 text-slate-700 dark:text-slate-200 hover:text-violet-600 dark:hover:text-violet-400 hover:scale-105 transition-all shadow-xs"
            >
              <Github className="w-4.5 h-4.5" />
            </a>
            <a
              href={CONTACT_CONFIG.linkedin.url}
              target="_blank"
              rel="noreferrer"
              title="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-white dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] hover:border-blue-500/50 hover:bg-blue-50 dark:hover:bg-blue-950/40 text-slate-700 dark:text-slate-200 hover:text-blue-600 hover:scale-105 transition-all shadow-xs"
            >
              <Linkedin className="w-4.5 h-4.5" />
            </a>
            <a
              href={`https://wa.me/${CONTACT_CONFIG.whatsapp.waNumber}?text=${encodeURIComponent(CONTACT_CONFIG.whatsapp.defaultMessage)}`}
              target="_blank"
              rel="noreferrer"
              title="WhatsApp Chat"
              className="p-2.5 rounded-xl bg-white dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] hover:border-emerald-500/50 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-slate-700 dark:text-slate-200 hover:text-emerald-500 hover:scale-105 transition-all shadow-xs"
            >
              <WhatsApp className="w-4.5 h-4.5" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Clean, Polished Portrait Display without Scopus Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2"
        >
          <div className="relative group">
            {/* Glowing Atmospheric Aura */}
            <div className="absolute -inset-2 rounded-[2.8rem] bg-gradient-to-tr from-violet-600/20 via-indigo-500/15 to-cyan-500/20 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Geometric Underlay Accent Frame */}
            <div className="absolute -inset-1 rounded-[2.6rem] bg-gradient-to-tr from-violet-600/40 via-indigo-500/30 to-purple-500/40 rotate-2 group-hover:rotate-4 transition-transform duration-500" />
            
            {/* Main Portrait Container */}
            <div className="relative z-10 w-60 h-76 sm:w-72 sm:h-92 md:w-80 md:h-[410px] rounded-[2.3rem] sm:rounded-[2.5rem] p-2 sm:p-2.5 bg-white dark:bg-[#0c101d] border-2 border-slate-200 dark:border-white/[0.1] shadow-2xl transition-all duration-500 group-hover:-translate-y-1">
              <div className="w-full h-full rounded-[1.9rem] sm:rounded-[2.1rem] overflow-hidden bg-slate-100 dark:bg-slate-950 relative">
                <img
                  src={profileImg}
                  alt="Lakkshanya Suresh"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Floating Metric Chip: CGPA (Top Right) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -top-3 -right-2 sm:-right-4 z-20 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-2xl bg-white/95 dark:bg-[#0f1424]/95 border border-slate-200 dark:border-white/[0.12] shadow-xl backdrop-blur-md flex items-center gap-2 group-hover:scale-105 transition-transform"
            >
              <div className="w-7 h-7 rounded-xl bg-amber-500/15 text-amber-500 flex items-center justify-center font-bold text-xs">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 block -mb-0.5">Academic Rank</span>
                <span className="text-xs sm:text-sm font-black text-slate-900 dark:text-white">9.93 CGPA</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
