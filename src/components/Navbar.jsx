import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUp, Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { WhatsApp } from './icons';
import { CONTACT_CONFIG } from '../data/portfolioData';

const NAV_LINKS = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Awards', href: '#achievements', id: 'achievements' },
  { name: 'Education', href: '#education', id: 'education' },
  { name: 'Pursuits', href: '#hobbies', id: 'hobbies' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

/**
 * Modern Tactile Theme Slider Switch
 */
export const SideScrollerToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      type="button"
      role="switch"
      aria-checked={darkMode}
      aria-label="Toggle theme"
      title={darkMode ? "Switch to Light Theme" : "Switch to Dark Theme"}
      className={`relative inline-flex items-center w-14 h-7 sm:w-15 sm:h-7.5 rounded-full p-1 transition-all duration-300 select-none cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 ${
        darkMode
          ? 'bg-[#101626] border border-violet-500/40 shadow-[inset_0_2px_6px_rgba(0,0,0,0.8)]'
          : 'bg-slate-200 border border-slate-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.12)]'
      }`}
    >
      {/* Background Icons on Track */}
      <div className="absolute inset-0 flex justify-between items-center px-2 pointer-events-none">
        <Sun
          className={`w-3 h-3 transition-all duration-300 ${
            darkMode ? 'opacity-20 text-amber-200 scale-75' : 'opacity-100 text-amber-500 scale-100'
          }`}
        />
        <Moon
          className={`w-3 h-3 transition-all duration-300 ${
            darkMode ? 'opacity-100 text-indigo-300 scale-100' : 'opacity-20 text-slate-400 scale-75'
          }`}
        />
      </div>

      {/* Sliding Thumb */}
      <motion.div
        layout
        transition={{
          type: 'spring',
          stiffness: 600,
          damping: 32,
        }}
        className={`w-5 h-5 rounded-full flex items-center justify-center shadow-md relative z-10 transition-colors ${
          darkMode
            ? 'ml-auto bg-gradient-to-tr from-violet-600 to-indigo-500 text-white shadow-violet-950/70'
            : 'bg-gradient-to-tr from-amber-400 to-orange-400 text-amber-950 shadow-orange-500/30'
        }`}
      >
        {darkMode ? (
          <Moon className="w-2.5 h-2.5 fill-white/20" />
        ) : (
          <Sun className="w-2.5 h-2.5 fill-amber-950/20" />
        )}
      </motion.div>
    </button>
  );
};

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      const sections = NAV_LINKS.map(l => document.getElementById(l.id)).filter(Boolean);
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
            ? 'py-2.5 backdrop-blur-2xl bg-white/92 dark:bg-[#070913]/92 border-b border-slate-200 dark:border-white/[0.08] shadow-sm'
            : 'py-3.5 sm:py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex justify-between items-center">
          {/* Brand Logo with Glow */}
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            className="group flex items-center gap-2.5 cursor-pointer shrink-0"
          >
            <div className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-purple-500 p-[1px] shadow-sm group-hover:shadow-violet-500/25 transition-all">
              <div className="w-full h-full rounded-[11px] bg-white dark:bg-[#0d1222] flex items-center justify-center text-violet-600 dark:text-violet-400 font-black text-base sm:text-lg group-hover:scale-95 transition-transform">
                L
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-extrabold tracking-tight text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                Lakkshanya Suresh
              </span>
              <span className="hidden sm:inline-block text-[10px] font-semibold text-slate-500 dark:text-slate-400 -mt-1 tracking-wider uppercase">
                AI & Full Stack Engineer
              </span>
            </div>
          </motion.a>

          {/* Desktop Nav Links Pill Container */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/90 dark:bg-white/[0.05] px-2.5 py-1.5 rounded-full border border-slate-200/90 dark:border-white/[0.08] backdrop-blur-md shadow-xs">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-white font-bold'
                      : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 shadow-xs"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action: Slider + Quick Talk CTA + Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <SideScrollerToggle
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
            />

            {/* Quick Contact CTA on Desktop */}
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-violet-600 hover:bg-violet-700 text-white shadow-sm hover:scale-102 transition-all cursor-pointer"
            >
              <Sparkles className="w-3 h-3 text-white" />
              <span>Let's Talk</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-colors border border-slate-200 dark:border-white/[0.08]"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer with High-Polish Responsive Layout */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -12, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="lg:hidden px-4 sm:px-6 pt-3 pb-6 backdrop-blur-2xl bg-white/98 dark:bg-[#070913]/98 border-b border-slate-200 dark:border-white/[0.08] shadow-2xl overflow-hidden"
            >
              {/* Status Banner in Mobile Menu */}
              <div className="mb-3 px-3 py-2 rounded-xl bg-violet-50 dark:bg-white/[0.04] border border-violet-200 dark:border-white/[0.06] flex items-center justify-between text-xs font-medium">
                <span className="flex items-center gap-2 text-violet-800 dark:text-violet-300 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Available for Opportunities
                </span>
                <span className="text-[11px] text-slate-600 dark:text-slate-400">Class of '27</span>
              </div>

              {/* Nav Items */}
              <div className="grid grid-cols-2 gap-1.5 pt-1">
                {NAV_LINKS.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all ${
                        isActive
                          ? 'text-white bg-gradient-to-r from-violet-600 to-indigo-600 font-bold shadow-xs'
                          : 'text-slate-800 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/[0.05]'
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </a>
                  );
                })}
              </div>

              {/* Direct Actions in Mobile Drawer */}
              <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/[0.08] flex items-center gap-2">
                <a
                  href={`https://wa.me/${CONTACT_CONFIG.whatsapp.waNumber}?text=${encodeURIComponent(CONTACT_CONFIG.whatsapp.defaultMessage)}`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/20"
                >
                  <WhatsApp className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </a>
                <a
                  href={`mailto:${CONTACT_CONFIG.email.address}`}
                  onClick={() => setIsOpen(false)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-violet-600/20"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Email Direct</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Floating Back to Top Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: scrolled ? 1 : 0, scale: scrolled ? 1 : 0.8 }}
        transition={{ duration: 0.25 }}
        className="fixed bottom-6 right-5 sm:right-6 z-40 flex flex-col items-center gap-2 pointer-events-auto"
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-3 rounded-full bg-white dark:bg-[#0f1424] text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-white/[0.1] shadow-xl backdrop-blur-md hover:bg-violet-600 hover:text-white dark:hover:bg-violet-600 hover:scale-110 active:scale-95 transition-all cursor-pointer group"
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
