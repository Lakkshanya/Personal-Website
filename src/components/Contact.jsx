import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ExternalLink, Copy, Check, MapPin, Sparkles } from 'lucide-react';
import { Github, Linkedin, WhatsApp } from './icons';

/* =========================================================================
 * 📌 PROFILE & CONTACT LINKS CONFIGURATION:
 * 
 * Update your phone number, email address, GitHub, and LinkedIn links here.
 * When visitors click on each card, it directs them immediately to connect!
 * ========================================================================= */
export const CONTACT_CONFIG = {
  // 1. WhatsApp Configuration
  // - phone: Human-readable display number
  // - waNumber: Country code + number without '+' or spaces (e.g. '919790416750')
  // - defaultMessage: Pre-filled greeting when WhatsApp opens
  whatsapp: {
    phone: '+91 9790416750',
    waNumber: '919790416750',
    defaultMessage: 'Hi Lakkshanya! I visited your portfolio and would like to connect with you.',
  },

  // 2. Email Configuration
  email: {
    address: 'lakkshanyasuresh@gmail.com',
    defaultSubject: 'Connecting via Portfolio: Lakkshanya Suresh',
  },

  // 3. GitHub Profile Configuration
  github: {
    url: 'https://github.com/Lakkshanya',
    display: 'github.com/Lakkshanya',
  },

  // 4. LinkedIn Profile Configuration
  linkedin: {
    url: 'https://www.linkedin.com/in/lakkshanya-suresh-41942a32b',
    display: 'linkedin.com/in/lakkshanya-suresh',
  },

  // Location
  location: {
    city: 'Chennai',
    state: 'Tamil Nadu, India',
    status: 'Available for full-time & internship opportunities',
  }
};

const Contact = () => {
  const [copiedKey, setCopiedKey] = useState(null);

  const copyToClipboard = (text, key, e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const contactCards = [
    {
      key: 'whatsapp',
      title: 'WhatsApp',
      subtitle: 'Instant direct chat & calls',
      value: CONTACT_CONFIG.whatsapp.phone,
      copyText: CONTACT_CONFIG.whatsapp.phone,
      actionText: 'Chat on WhatsApp',
      href: `https://wa.me/${CONTACT_CONFIG.whatsapp.waNumber}?text=${encodeURIComponent(CONTACT_CONFIG.whatsapp.defaultMessage)}`,
      icon: WhatsApp,
      iconBg: 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/90 dark:border-emerald-800/60',
      buttonBg: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20',
      badge: 'Fastest Response',
      cardHoverGlow: 'hover:border-emerald-400/60 hover:shadow-emerald-500/15 dark:hover:border-emerald-500/40',
      underlayGradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    },
    {
      key: 'email',
      title: 'Email',
      subtitle: 'Professional inquiries & proposals',
      value: CONTACT_CONFIG.email.address,
      copyText: CONTACT_CONFIG.email.address,
      actionText: 'Send an Email',
      href: `mailto:${CONTACT_CONFIG.email.address}?subject=${encodeURIComponent(CONTACT_CONFIG.email.defaultSubject)}`,
      icon: Mail,
      iconBg: 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/90 dark:border-indigo-800/60',
      buttonBg: 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/20',
      badge: 'Official Inquiries',
      cardHoverGlow: 'hover:border-indigo-400/60 hover:shadow-indigo-500/15 dark:hover:border-indigo-500/40',
      underlayGradient: 'from-indigo-500/20 via-purple-500/10 to-transparent',
    },
    {
      key: 'linkedin',
      title: 'LinkedIn',
      subtitle: 'Professional networking & career',
      value: CONTACT_CONFIG.linkedin.display,
      copyText: CONTACT_CONFIG.linkedin.url,
      actionText: 'Connect on LinkedIn',
      href: CONTACT_CONFIG.linkedin.url,
      icon: Linkedin,
      iconBg: 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/90 dark:border-blue-800/60',
      buttonBg: 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20',
      badge: 'Professional Network',
      cardHoverGlow: 'hover:border-blue-400/60 hover:shadow-blue-500/15 dark:hover:border-blue-500/40',
      underlayGradient: 'from-blue-500/20 via-cyan-500/10 to-transparent',
    },
    {
      key: 'github',
      title: 'GitHub',
      subtitle: 'Repositories, code & open source',
      value: CONTACT_CONFIG.github.display,
      copyText: CONTACT_CONFIG.github.url,
      actionText: 'Explore Repositories',
      href: CONTACT_CONFIG.github.url,
      icon: Github,
      iconBg: 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700',
      buttonBg: 'bg-slate-900 hover:bg-black dark:bg-slate-800 dark:hover:bg-slate-700 text-white shadow-md shadow-slate-900/20',
      badge: 'Codebase & Projects',
      cardHoverGlow: 'hover:border-violet-400/60 hover:shadow-violet-500/15 dark:hover:border-violet-500/40',
      underlayGradient: 'from-purple-500/20 via-slate-500/10 to-transparent',
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-20 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 md:mb-14"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2.5">
          Get In Touch
        </h2>
        <div className="w-16 sm:w-20 h-1.5 bg-gradient-to-r from-primary-600 to-indigo-500 mx-auto rounded-full mb-3" />
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base font-normal px-2">
          Click any card below to open WhatsApp, draft an email, or visit my profiles directly.
        </p>
      </motion.div>

      {/* Creative & Artistic Shape Holders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 max-w-5xl mx-auto mb-10">
        {contactCards.map((card, idx) => (
          <div key={card.key} className="relative group">
            {/* Artistic Underlay Frame with Subtle Offset Rotation */}
            <div
              className={`absolute -inset-1 rounded-tl-[2.2rem] sm:rounded-tl-[3rem] rounded-br-[2.2rem] sm:rounded-br-[3rem] rounded-tr-2xl rounded-bl-2xl bg-gradient-to-br ${card.underlayGradient} opacity-60 group-hover:opacity-100 group-hover:rotate-1 transition-all duration-500 blur-xs`}
            />

            {/* Main Asymmetrical Sculpted Card */}
            <motion.a
              href={card.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.45 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`relative z-10 bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800/90 rounded-tl-[2rem] sm:rounded-tl-[2.8rem] rounded-br-[2rem] sm:rounded-br-[2.8rem] rounded-tr-2xl rounded-bl-2xl p-5 sm:p-7 shadow-sm hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-black/60 transition-all duration-300 flex flex-col justify-between text-left block overflow-hidden ${card.cardHoverGlow}`}
            >
              {/* Subtle Background Watermark Brand Icon */}
              <div className="absolute -bottom-8 -right-8 opacity-[0.04] dark:opacity-[0.06] group-hover:opacity-[0.09] dark:group-hover:opacity-[0.12] transition-opacity duration-300 pointer-events-none scale-150">
                <card.icon className="w-36 h-36" />
              </div>

              <div>
                <div className="flex items-start justify-between mb-5 relative z-10">
                  {/* Sculpted Shape Icon Holder */}
                  <div
                    className={`w-13 h-13 rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md flex items-center justify-center ${card.iconBg} shadow-xs group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                  >
                    <card.icon className="w-6.5 h-6.5" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {card.badge}
                  </span>
                </div>

                <div className="mb-2 relative z-10">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                    {card.subtitle}
                  </p>
                </div>

                {/* Display Value & Copy Button */}
                <div className="mt-4 p-3 bg-slate-50/90 dark:bg-slate-800/80 rounded-xl border border-slate-200/80 dark:border-slate-700 flex items-center justify-between gap-3 relative z-10">
                  <span className="font-mono text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-100 truncate">
                    {card.value}
                  </span>
                  <button
                    onClick={(e) => copyToClipboard(card.copyText, card.key, e)}
                    title="Copy to clipboard"
                    className="p-1.5 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-200 hover:text-primary-600 dark:hover:text-primary-400 hover:scale-105 transition-all shrink-0 cursor-pointer"
                  >
                    {copiedKey === card.key ? (
                      <span className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 font-sans font-bold">
                        <Check className="w-3.5 h-3.5" /> Copied
                      </span>
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Action CTA Button */}
              <div className="mt-6 pt-1 relative z-10">
                <div
                  className={`w-full py-3 px-5 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-200 ${card.buttonBg}`}
                >
                  <span>{card.actionText}</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.a>
          </div>
        ))}
      </div>

      {/* Location Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl text-center flex flex-col sm:flex-row items-center justify-center gap-3 text-slate-700 dark:text-slate-300 shadow-xs text-sm sm:text-base"
      >
        <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold">
          <MapPin className="w-4.5 h-4.5 shrink-0" />
          <span>{CONTACT_CONFIG.location.city}, {CONTACT_CONFIG.location.state}</span>
        </div>
        <span className="hidden sm:inline text-slate-400">•</span>
        <div className="flex items-center gap-2 text-xs sm:text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>{CONTACT_CONFIG.location.status}</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
