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
import Contact, { CONTACT_CONFIG } from './components/Contact';
import { Github, Linkedin, WhatsApp } from './components/icons';
import { Mail, Heart } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    }
  }, []);

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
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 selection:bg-primary-500 selection:text-white">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main>
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

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-950/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-4">
            <h2 className="text-2xl font-extrabold bg-gradient-to-r from-primary-600 via-indigo-600 to-primary-400 bg-clip-text text-transparent inline-block">
              Lakkshanya Suresh
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 font-medium">
              AI / ML Engineer & Full Stack Developer • Chennai, India
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-3.5 mb-6">
            <a
              href={CONTACT_CONFIG.github.url}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:text-primary-600 dark:hover:text-primary-400 hover:scale-105 transition-all text-slate-700 dark:text-slate-300"
              title="GitHub"
            >
              <Github className="w-4.5 h-4.5" />
            </a>
            <a
              href={CONTACT_CONFIG.linkedin.url}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105 transition-all text-slate-700 dark:text-slate-300"
              title="LinkedIn"
            >
              <Linkedin className="w-4.5 h-4.5" />
            </a>
            <a
              href={`https://wa.me/${CONTACT_CONFIG.whatsapp.waNumber}?text=${encodeURIComponent(CONTACT_CONFIG.whatsapp.defaultMessage)}`}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:text-emerald-500 hover:scale-105 transition-all text-slate-700 dark:text-slate-300"
              title="WhatsApp"
            >
              <WhatsApp className="w-4.5 h-4.5" />
            </a>
            <a
              href={`mailto:${CONTACT_CONFIG.email.address}`}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:text-indigo-500 hover:scale-105 transition-all text-slate-700 dark:text-slate-300"
              title="Email"
            >
              <Mail className="w-4.5 h-4.5" />
            </a>
          </div>

          <p className="text-slate-500 dark:text-slate-400 text-xs flex items-center justify-center gap-1 font-medium">
            Designed & Developed with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" /> © {new Date().getFullYear()} Lakkshanya Suresh.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
