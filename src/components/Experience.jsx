import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Building2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Trainee Software Engineering Intern',
      company: 'SAASant Infotech Private Limited',
      location: 'Chennai, Tamil Nadu',
      period: 'July 2026 – October 2026',
      badge: 'Fintech & Automation',
      badgeColor: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20',
      description:
        'Engineered high-impact fintech solutions involving financial data integration pipelines, high-reliability transaction synchronization across platforms, and business process automation.',
      tags: ['Fintech Architecture', 'Data Pipelines', 'Transaction Sync', 'API Integration'],
    },
    {
      title: 'Healthcare-related Project (Mobile Systems)',
      company: 'Collaborative Project with IIT Madras Students & Partner Colleges',
      location: 'Chennai, Tamil Nadu',
      period: 'July 2025 – January 2026',
      badge: 'Cross-Institute Project',
      badgeColor: 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20',
      description:
        'Collaborated with IIT Madras engineering peers and partner institutions to develop an external healthcare technology mobile application focused on clinical decision support and prescription validation workflows.',
      tags: ['Healthcare Tech', 'React Native', 'IIT Madras Collab', 'Mobile UI/UX'],
    },
    {
      title: 'Artificial Intelligence Intern',
      company: 'IITM Pravartak Technologies Foundation',
      location: 'Chennai, Tamil Nadu',
      period: 'June 2025 – July 2025',
      badge: 'AI Research & Training',
      badgeColor: 'bg-violet-500/10 text-violet-700 dark:text-violet-300 border-violet-500/20',
      description:
        'Addressed real-world industry problem statements by architecting AI-based solutions, curating and preprocessing specialized datasets, and training machine learning models for production inference.',
      tags: ['Artificial Intelligence', 'Machine Learning', 'Model Optimization', 'Data Engineering'],
    },
    {
      title: 'Web Development Intern',
      company: 'IndiaTourism',
      location: 'Chennai, Tamil Nadu',
      period: 'December 2024 – January 2025',
      badge: 'Full Stack Web',
      badgeColor: 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20',
      description:
        'Developed a responsive web application utilizing HTML5, modern CSS, and JavaScript integrated with cloud storage solutions to manage tourist information and media assets.',
      tags: ['Web Application', 'JavaScript', 'Cloud Storage', 'UI/UX Design'],
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-20 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 sm:mb-16"
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20 mb-2">
          <Briefcase className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
          <span>Work History</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2.5">
          Professional Experience
        </h2>
        <div className="w-16 sm:w-20 h-1.5 bg-gradient-to-r from-violet-600 to-indigo-500 mx-auto rounded-full mb-3" />
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base font-normal px-2">
          Hands-on internships and research collaborations across fintech engineering, healthcare mobile tech, and machine learning.
        </p>
      </motion.div>

      {/* Timeline Container */}
      <div className="space-y-8 sm:space-y-10 relative before:absolute before:inset-0 before:left-4 sm:before:left-5 md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-violet-500 before:via-indigo-500/50 before:to-transparent">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.4 }}
            className="relative flex items-start md:items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
          >
            {/* Timeline Center Node */}
            <div className="flex items-center justify-center w-8.5 h-8.5 sm:w-10 sm:h-10 rounded-xl border-2 border-violet-500 bg-white dark:bg-[#0c101d] shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:scale-110 group-hover:bg-violet-600 transition-all duration-300">
              <Briefcase className="w-4 h-4 text-violet-600 group-hover:text-white transition-colors duration-300" />
            </div>

            {/* Experience Card */}
            <div className="w-[calc(100%-2.8rem)] sm:w-[calc(100%-3.5rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-[#0e1424] border border-slate-200 dark:border-white/[0.08] rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-sm hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-black/60 transition-all duration-300 group-hover:-translate-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <span className={`self-start text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${exp.badgeColor}`}>
                  {exp.badge}
                </span>
                <time className="self-start sm:self-auto flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-white/[0.05] px-2.5 py-1 rounded-full border border-slate-200/80 dark:border-white/[0.06]">
                  <Calendar className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" /> {exp.period}
                </time>
              </div>

              <h3 className="font-extrabold text-slate-900 dark:text-white text-lg sm:text-xl mb-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                {exp.title}
              </h3>

              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                <span className="flex items-center gap-1 text-violet-700 dark:text-violet-300 font-bold">
                  <Building2 className="w-3.5 h-3.5 shrink-0" /> {exp.company}
                </span>
                <span className="text-slate-400">•</span>
                <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-xs font-normal">
                  <MapPin className="w-3 h-3 text-slate-400 shrink-0" /> {exp.location}
                </span>
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-white/[0.06]">
                {exp.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] sm:text-xs font-medium px-2.5 py-1 bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200/70 dark:border-white/[0.06]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
