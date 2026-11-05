import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import { CONTACT_CONFIG } from './data/portfolioData';
import { Github, Linkedin, WhatsApp } from './components/icons';
import { Mail, MapPin } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <div className="min-h-screen bg-[#fbfaff] dark:bg-[#080612] text-slate-900 dark:text-[#f3f0fa] transition-colors duration-300 relative overflow-x-hidden selection:bg-violet-600 selection:text-white">
      {/* Subtle Atmospheric Glow Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 sm:w-[500px] sm:h-[500px] rounded-full bg-violet-600/10 dark:bg-violet-700/15 blur-3xl" />
        <div className="absolute top-1/3 -left-40 w-80 h-80 sm:w-[450px] sm:h-[450px] rounded-full bg-indigo-600/10 dark:bg-purple-900/20 blur-3xl" />
      </div>

      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="relative z-10">
        <div id="home" className="pt-20 sm:pt-24 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
          <Hero />
        </div>

        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Education />
        <Hobbies />
        <Contact />
      </main>

      {/* Modern High-End Footer */}
      <footer className="relative z-10 border-t border-slate-200 dark:border-violet-500/15 bg-white/80 dark:bg-[#070510]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200/80 dark:border-white/[0.06]">
            {/* Identity */}
            <div className="text-center md:text-left">
              <a href="#home" className="inline-flex items-center gap-2.5 group">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-600 text-white flex items-center justify-center font-black text-sm shadow-md shadow-violet-500/20 group-hover:scale-105 transition-transform">
                  L
                </div>
                <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  Lakkshanya Suresh
                </span>
              </a>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1.5 flex items-center justify-center md:justify-start gap-1.5 font-medium">
                <MapPin className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
                <span>AI & Full Stack Engineer • Chennai, India</span>
              </p>
            </div>

            {/* Quick Navigation Links */}
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-semibold text-slate-600 dark:text-slate-400">
              <a href="#about" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">About</a>
              <a href="#skills" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Projects</a>
              <a href="#experience" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Experience</a>
              <a href="#achievements" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Achievements</a>
              <a href="#hobbies" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Creative Pursuits</a>
              <a href="#contact" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Contact</a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
              <a
                href={CONTACT_CONFIG.github.url}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] hover:border-violet-500/50 hover:bg-violet-50 dark:hover:bg-violet-950/40 hover:text-violet-600 dark:hover:text-violet-400 flex items-center justify-center transition-all hover:scale-105 text-slate-700 dark:text-slate-300"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={CONTACT_CONFIG.linkedin.url}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] hover:border-blue-500/50 hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:text-blue-600 dark:hover:text-blue-400 flex items-center justify-center transition-all hover:scale-105 text-slate-700 dark:text-slate-300"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${CONTACT_CONFIG.whatsapp.waNumber}?text=${encodeURIComponent(CONTACT_CONFIG.whatsapp.defaultMessage)}`}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] hover:border-emerald-500/50 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center justify-center transition-all hover:scale-105 text-slate-700 dark:text-slate-300"
                title="WhatsApp"
              >
                <WhatsApp className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${CONTACT_CONFIG.email.address}`}
                className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] hover:border-violet-500/50 hover:bg-violet-50 dark:hover:bg-violet-950/40 hover:text-violet-600 dark:hover:text-violet-400 flex items-center justify-center transition-all hover:scale-105 text-slate-700 dark:text-slate-300"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="pt-6 text-center text-xs text-slate-500 dark:text-slate-400 font-medium">
            <p>
              © {new Date().getFullYear()} Lakkshanya Suresh. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
