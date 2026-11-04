import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * SideScrollerToggle:
 * Proportional, sleek horizontal side-scroller / slider switch.
 */
export const SideScrollerToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      type="button"
      role="switch"
      aria-checked={darkMode}
      aria-label="Toggle theme"
      title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      className={`relative inline-flex items-center w-13 h-7 sm:w-14 sm:h-7.5 rounded-full p-0.5 sm:p-1 transition-all duration-300 select-none cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 shadow-inner ${
        darkMode
          ? 'bg-slate-900 border border-indigo-500/40 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]'
          : 'bg-slate-200 border border-slate-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]'
      }`}
    >
      {/* Background Icons on Track */}
      <div className="absolute inset-0 flex justify-between items-center px-1.5 sm:px-2 pointer-events-none">
        <Sun
          className={`w-2.5 h-2.5 sm:w-3 sm:h-3 transition-all duration-300 ${
            darkMode ? 'opacity-20 text-amber-200 scale-90' : 'opacity-100 text-amber-500 scale-100'
          }`}
        />
        <Moon
          className={`w-2.5 h-2.5 sm:w-3 sm:h-3 transition-all duration-300 ${
            darkMode ? 'opacity-100 text-indigo-400 scale-100' : 'opacity-20 text-slate-400 scale-90'
          }`}
        />
      </div>

      {/* Sliding Thumb ("Side Scroller") */}
      <motion.div
        layout
        transition={{
          type: 'spring',
          stiffness: 550,
          damping: 28,
        }}
        className={`w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-full flex items-center justify-center shadow-md relative z-10 transition-colors ${
          darkMode
            ? 'ml-auto bg-gradient-to-tr from-indigo-600 to-purple-500 text-white shadow-indigo-950/60'
            : 'bg-gradient-to-tr from-amber-400 to-orange-400 text-amber-950 shadow-orange-500/30'
        }`}
      >
        {darkMode ? (
          <Moon className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-white/20" />
        ) : (
          <Sun className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-amber-950/20" />
        )}
      </motion.div>
    </button>
  );
};

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Achievements', href: '#achievements', id: 'achievements' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Beyond Code', href: '#hobbies', id: 'hobbies' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      const sections = navLinks.map(l => document.getElementById(l.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-2.5 sm:py-3 backdrop-blur-xl bg-white/92 dark:bg-slate-950/92 border-b border-slate-200 dark:border-slate-800 shadow-xs'
            : 'py-3.5 sm:py-4 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex justify-between items-center">
          {/* Brand Logo */}
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            className="group flex items-center gap-2 cursor-pointer shrink-0"
          >
            <div className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-xl bg-gradient-to-tr from-primary-600 via-indigo-600 to-primary-400 flex items-center justify-center text-white font-black text-base sm:text-lg shadow-xs group-hover:scale-105 transition-transform">
              L
            </div>
            <span className="text-base sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors truncate max-w-[170px] sm:max-w-none">
              Lakkshanya Suresh
            </span>
          </motion.a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-900/70 px-3 py-1.5 rounded-full border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-primary-600 dark:text-primary-400 font-bold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Slider + Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <SideScrollerToggle
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
            />

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-1.5 sm:p-2 rounded-xl text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-slate-800"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden px-4 sm:px-6 pt-2 pb-5 backdrop-blur-2xl bg-white/98 dark:bg-slate-950/98 border-b border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl"
            >
              <div className="flex flex-col space-y-1 pt-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl font-semibold text-sm transition-colors ${
                        isActive
                          ? 'text-primary-600 dark:text-primary-400 font-bold bg-slate-50 dark:bg-slate-900'
                          : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900'
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-primary-600" />}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Floating Back to Top Button */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: scrolled ? 1 : 0, x: scrolled ? 0 : 20 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-5 right-5 z-40 hidden sm:flex flex-col items-center gap-2"
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-2.5 sm:p-3 rounded-full bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 shadow-lg hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-all hover:scale-110 group cursor-pointer"
          title="Back to Top"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </motion.div>
    </>
  );
};

export default Navbar;
