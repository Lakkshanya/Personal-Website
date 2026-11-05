import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, ExternalLink, MessageSquare, GraduationCap, Briefcase } from 'lucide-react';
import { WhatsApp } from './icons';
import { CONTACT_CONFIG } from '../data/portfolioData';

const Contact = () => {
  const contactMethods = [
    {
      key: 'whatsapp',
      title: 'WhatsApp',
      actionText: 'Chat on WhatsApp',
      actionUrl: `https://wa.me/${CONTACT_CONFIG.whatsapp.waNumber}?text=${encodeURIComponent(CONTACT_CONFIG.whatsapp.defaultMessage)}`,
      icon: WhatsApp,
      badge: '⚡ Quick Response',
      badgeColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
      iconAccent: 'from-emerald-500/20 to-teal-500/10 text-emerald-500',
      buttonBg: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20',
      cardHoverBorder: 'hover:border-emerald-500/40',
    },
    {
      key: 'email',
      title: 'Email',
      actionText: 'Send an Email',
      actionUrl: `mailto:${CONTACT_CONFIG.email.address}?subject=${encodeURIComponent(CONTACT_CONFIG.email.defaultSubject)}`,
      icon: Mail,
      badge: '📬 Direct Message',
      badgeColor: 'bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20',
      iconAccent: 'from-violet-500/20 to-indigo-500/10 text-violet-500',
      buttonBg: 'bg-violet-600 hover:bg-violet-700 text-white shadow-md shadow-violet-600/20',
      cardHoverBorder: 'hover:border-violet-500/40',
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 sm:mb-16"
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20 mb-2">
          <MessageSquare className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
          <span>Connect</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2.5">
          Get In Touch
        </h2>
        <div className="w-16 sm:w-20 h-1.5 bg-gradient-to-r from-violet-600 to-indigo-500 mx-auto rounded-full mb-3" />
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base font-normal px-2">
          Interested in discussing an engineering role, technical collaboration, or project? Reach out directly below.
        </p>
      </motion.div>

      {/* Clean Privacy-Friendly Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
        {contactMethods.map((method, idx) => (
          <motion.div
            key={method.key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.45 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className={`bg-white dark:bg-[#120e24] border border-slate-200 dark:border-violet-500/15 rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-black/70 transition-all duration-300 flex flex-col justify-between ${method.cardHoverBorder} group`}
          >
            <div>
              {/* Header: Icon + Status Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className={`w-13 h-13 rounded-2xl bg-gradient-to-br ${method.iconAccent} border border-slate-200 dark:border-white/[0.08] flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <method.icon className="w-6.5 h-6.5" />
                </div>
                <span className={`text-[11px] sm:text-xs font-bold px-3 py-1 rounded-full border ${method.badgeColor}`}>
                  {method.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                {method.title}
              </h3>
            </div>

            {/* Direct Action Button */}
            <div>
              <a
                href={method.actionUrl}
                target={method.key === 'whatsapp' ? '_blank' : undefined}
                rel={method.key === 'whatsapp' ? 'noreferrer' : undefined}
                className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${method.buttonBg}`}
              >
                <span>{method.actionText}</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Professional Information Bento: Location, Academics, & Availability */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
        {/* Card 1: Location & Work Mode */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-[#120e24] border border-slate-200 dark:border-violet-500/15 p-5 rounded-2xl shadow-sm flex items-start gap-3.5"
        >
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0 mt-0.5">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
              Location
            </span>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-0.5">
              {CONTACT_CONFIG.location.city}, {CONTACT_CONFIG.location.state}
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
              {CONTACT_CONFIG.location.workMode}
            </p>
          </div>
        </motion.div>

        {/* Card 2: Academic Standing */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="bg-white dark:bg-[#120e24] border border-slate-200 dark:border-violet-500/15 p-5 rounded-2xl shadow-sm flex items-start gap-3.5"
        >
          <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-500 flex items-center justify-center shrink-0 mt-0.5">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
              Education
            </span>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-0.5">
              B.Tech in Computer Science
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
              SRMIST Ramapuram • Class of 2027 (9.93 CGPA)
            </p>
          </div>
        </motion.div>

        {/* Card 3: Live Availability */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.16 }}
          className="bg-white dark:bg-[#120e24] border border-slate-200 dark:border-violet-500/15 p-5 rounded-2xl shadow-sm flex items-start gap-3.5"
        >
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 mb-0.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Active Opportunities
            </span>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-0.5">
              Available for Hire
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
              Software Engineering, AI/ML & Mobile Roles
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
