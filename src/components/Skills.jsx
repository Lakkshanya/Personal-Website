import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Globe, Database, Smartphone } from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Python', 'Java', 'C', 'C++'],
      iconColor: 'text-blue-600 dark:text-blue-400',
      iconBg: 'bg-blue-50 dark:bg-blue-950/50 border border-blue-200/80 dark:border-blue-800/50',
      pillStyle: 'bg-blue-50/70 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200 border-blue-200/80 dark:border-blue-800/60'
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      skills: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP'],
      iconColor: 'text-purple-600 dark:text-purple-400',
      iconBg: 'bg-purple-50 dark:bg-purple-950/50 border border-purple-200/80 dark:border-purple-800/50',
      pillStyle: 'bg-purple-50/70 dark:bg-purple-950/40 text-purple-900 dark:text-purple-200 border-purple-200/80 dark:border-purple-800/60'
    },
    {
      title: 'Web Development',
      icon: Globe,
      skills: ['React (Vite)', 'Node.js', 'Flask', 'Django'],
      iconColor: 'text-amber-600 dark:text-amber-400',
      iconBg: 'bg-amber-50 dark:bg-amber-950/50 border border-amber-200/80 dark:border-amber-800/50',
      pillStyle: 'bg-amber-50/70 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 border-amber-200/80 dark:border-amber-800/60'
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      skills: ['React Native'],
      iconColor: 'text-violet-600 dark:text-violet-400',
      iconBg: 'bg-violet-50 dark:bg-violet-950/50 border border-violet-200/80 dark:border-violet-800/50',
      pillStyle: 'bg-violet-50/70 dark:bg-violet-950/40 text-violet-900 dark:text-violet-200 border-violet-200/80 dark:border-violet-800/60'
    },
    {
      title: 'Database & Storage',
      icon: Database,
      skills: ['MySQL', 'MongoDB', 'PostgreSQL'],
      iconColor: 'text-emerald-600 dark:text-emerald-400',
      iconBg: 'bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200/80 dark:border-emerald-800/50',
      pillStyle: 'bg-emerald-50/70 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 border-emerald-200/80 dark:border-emerald-800/60'
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-20 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 md:mb-14"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2.5">
          Technical Expertise
        </h2>
        <div className="w-16 sm:w-20 h-1.5 bg-gradient-to-r from-primary-600 to-indigo-500 mx-auto rounded-full mb-3" />
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base font-normal px-2">
          Hands-on engineering across full-stack systems, mobile architecture, AI/ML models, and resilient databases.
        </p>
      </motion.div>

      {/* Grid of Technical Expertise Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.07, duration: 0.4 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-black/50 transition-all duration-300 flex flex-col justify-start"
          >
            {/* Clean Icon Box */}
            <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${cat.iconBg} flex items-center justify-center mb-3 sm:mb-4 shadow-2xs`}>
              <cat.icon className={`w-5.5 h-5.5 sm:w-6 sm:h-6 ${cat.iconColor}`} />
            </div>

            {/* Title */}
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2.5 sm:mb-3">
              {cat.title}
            </h3>

            {/* Small boxes placed directly under title with no gap */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {cat.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-200 hover:scale-105 ${cat.pillStyle}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
