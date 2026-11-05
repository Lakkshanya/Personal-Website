import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Globe, Database, Smartphone, Sparkles } from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Python', 'Java', 'C', 'C++'],
      accent: 'from-blue-500/20 to-indigo-500/10',
      iconColor: 'text-blue-500',
      chipStyle: 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20 hover:border-blue-500/40'
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      skills: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP / RAG'],
      accent: 'from-purple-500/20 to-pink-500/10',
      iconColor: 'text-purple-500',
      chipStyle: 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/20 hover:border-purple-500/40'
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      skills: ['React (Vite)', 'Node.js', 'Flask', 'Django'],
      accent: 'from-amber-500/20 to-orange-500/10',
      iconColor: 'text-amber-500',
      chipStyle: 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20 hover:border-amber-500/40'
    },
    {
      title: 'Mobile Architecture',
      icon: Smartphone,
      skills: ['React Native', 'Mobile UI/UX', 'Cross-Platform', 'Native APIs'],
      accent: 'from-violet-500/20 to-purple-500/10',
      iconColor: 'text-violet-500',
      chipStyle: 'bg-violet-500/10 text-violet-700 dark:text-violet-300 border-violet-500/20 hover:border-violet-500/40'
    },
    {
      title: 'Database & Backend',
      icon: Database,
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'RESTful APIs'],
      accent: 'from-emerald-500/20 to-teal-500/10',
      iconColor: 'text-emerald-500',
      chipStyle: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20 hover:border-emerald-500/40'
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
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20 mb-2">
          <Sparkles className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
          <span>Core Competencies</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2.5">
          Technical Expertise
        </h2>
        <div className="w-16 sm:w-20 h-1.5 bg-gradient-to-r from-violet-600 to-indigo-500 mx-auto rounded-full mb-3" />
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base font-normal px-2">
          Hands-on software development across full-stack systems, mobile architecture, AI/ML models, and resilient databases.
        </p>
      </motion.div>

      {/* Grid of Technical Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.07, duration: 0.4 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-white dark:bg-[#0e1424] border border-slate-200 dark:border-white/[0.08] rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-black/60 transition-all duration-300 flex flex-col justify-start group"
          >
            {/* Category Icon */}
            <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${cat.accent} border border-slate-200 dark:border-white/[0.08] flex items-center justify-center mb-3 sm:mb-4 shadow-xs group-hover:scale-110 transition-transform`}>
              <cat.icon className={`w-5.5 h-5.5 sm:w-6 sm:h-6 ${cat.iconColor}`} />
            </div>

            {/* Category Title */}
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-3">
              {cat.title}
            </h3>

            {/* Skill Chips */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {cat.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-200 hover:scale-105 ${cat.chipStyle}`}
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
