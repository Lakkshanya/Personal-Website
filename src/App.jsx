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

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-500">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main>
        <section id="home" className="section-padding pt-24 min-h-screen flex items-center">
          <Hero />
        </section>

        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Education />
        <Hobbies />
        <Contact />
      </main>

      <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-6">
            <h2 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-indigo-500 bg-clip-text text-transparent inline-block">
              Lakkshanya Suresh
            </h2>
            <p className="text-slate-500 text-sm mt-2">AI & Full Stack Developer</p>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
