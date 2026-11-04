import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Trainee Software Engineering Intern',
      company: 'SAASant Infotech Private Limited',
      location: 'Chennai, Tamil Nadu',
      period: 'July 2026 – October 2026',
      badge: 'Fintech & Automation',
      description:
        'Worked on high-impact fintech solutions involving financial data integration, high-reliability transaction synchronization, and business process automation.',
      tags: ['Fintech Engineering', 'Data Integration', 'Transaction Sync', 'Process Automation'],
    },
    {
      title: 'Healthcare-related Project (Mobile Technology)',
      company: 'Collaborative Project with IITM Students & Partner Colleges',
      location: 'Chennai, Tamil Nadu',
      period: 'July 2025 – January 2026',
      badge: 'Cross-Institute Project',
      description:
        'Collaborating with IIT Madras students and peers from other partner institutions on an external healthcare technology mobile application development project focused on modern clinical workflows.',
      tags: ['Healthcare Tech', 'Mobile Development', 'IIT Madras Collab', 'System Architecture'],
    },
    {
      title: 'AI Intern',
      company: 'IITM Pravartak Technologies Foundation',
      location: 'Chennai, Tamil Nadu',
      period: 'June 2025 – July 2025',
      badge: 'AI Research & Training',
      description:
        'Worked on real-time enterprise problem statements by architecting AI-based solutions, preparing datasets, and designing & training machine learning models for practical deployment.',
      tags: ['Artificial Intelligence', 'Machine Learning', 'Model Training', 'Data Pipelines'],
    },
    {
      title: 'Web Development Intern',
      company: 'IndiaTourism',
      location: 'Chennai, Tamil Nadu',
      period: 'December 2024 – January 2025',
      badge: 'Full Stack Web',
      description:
        'Developed a responsive web application utilizing HTML, CSS, and modern JavaScript integrated with cloud storage solutions to manage media and tourist information.',
      tags: ['Web Application', 'JavaScript', 'HTML5 / CSS3', 'Cloud Storage'],
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-20 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-violet-50 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300 border border-violet-200/80 dark:border-violet-800/60 mb-2.5">
          <Briefcase className="w-3.5 h-3.5 text-violet-600 dark:text-amber-400" />
          <span>Career Journey</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3">
          Professional Experience
        </h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-primary-600 to-indigo-500 mx-auto rounded-full mb-3" />
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg font-normal">
          Hands-on internships and research collaborations across fintech, healthcare, and artificial intelligence.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="space-y-8 sm:space-y-10 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.4 }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
          >
            {/* Timeline Center Node */}
            <div className="flex items-center justify-center w-10 h-10 rounded-xl border-2 border-primary-500 bg-white dark:bg-slate-900 shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:scale-110 group-hover:bg-primary-600 transition-all duration-300">
              <Briefcase className="w-4.5 h-4.5 text-primary-600 group-hover:text-white transition-colors duration-300" />
            </div>

            {/* Experience Card */}
            <div className="w-[calc(100%-3.2rem)] sm:w-[calc(100%-3.8rem)] md:w-[calc(50%-3rem)] bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 md:p-7 shadow-sm hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-black/50 transition-all duration-300 group-hover:-translate-y-0.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <span className="self-start text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-violet-50 dark:bg-violet-950/50 text-violet-700 dark:text-violet-300 border border-violet-200/80 dark:border-violet-800/60">
                  {exp.badge}
                </span>
                <time className="self-start sm:self-auto flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-700">
                  <Calendar className="w-3.5 h-3.5 text-primary-600 dark:text-primary-400" /> {exp.period}
                </time>
              </div>

              <h3 className="font-extrabold text-slate-900 dark:text-white text-xl mb-1.5 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {exp.title}
              </h3>

              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm font-semibold text-slate-700 dark:text-slate-200 mb-3.5">
                <span className="flex items-center gap-1">
                  <Building className="w-3.5 h-3.5 text-primary-600 dark:text-primary-400" /> {exp.company}
                </span>
                <span className="text-slate-400">•</span>
                <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-normal">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" /> {exp.location}
                </span>
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-5 font-normal">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
                {exp.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-medium px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-700"
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
