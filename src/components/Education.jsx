import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'SRM Institute of Science and Technology',
      campus: 'Ramapuram, Chennai',
      period: '2023 – 2027',
      grade: 'CGPA: 9.93',
      gradeDetail: 'Till 6th Semester (Rank Topper)',
      icon: GraduationCap,
      badge: 'Undergraduate'
    },
    {
      degree: 'Higher Secondary Education (Class 12)',
      institution: 'Sindhi Model Senior Secondary School',
      campus: 'CBSE, Chennai',
      period: '2022 – 2023',
      grade: '87.33%',
      gradeDetail: 'CBSE Senior Secondary Board',
      icon: School,
      badge: 'Higher Secondary'
    },
    {
      degree: 'Secondary Education (Class 10)',
      institution: 'Sindhi Model Senior Secondary School',
      campus: 'CBSE, Chennai',
      period: '2020 – 2021',
      grade: '94.20%',
      gradeDetail: 'CBSE Secondary Board (Distinction)',
      icon: School,
      badge: 'Secondary'
    }
  ];

  return (
    <section id="education" className="py-16 md:py-20 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 md:mb-14"
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-violet-50 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300 border border-violet-200/80 dark:border-violet-800/60 mb-2">
          <GraduationCap className="w-3.5 h-3.5 text-violet-600 dark:text-amber-400" />
          <span>Academic Milestones</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2.5">
          Education
        </h2>
        <div className="w-16 sm:w-20 h-1.5 bg-gradient-to-r from-primary-600 to-indigo-500 mx-auto rounded-full mb-3" />
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base font-normal px-2">
          Consistently high academic standing throughout engineering and schooling.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.45 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-7 shadow-sm hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-black/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-violet-50 dark:bg-violet-950/60 border border-violet-200/80 dark:border-violet-800/60 flex items-center justify-center text-primary-600 dark:text-primary-400">
                  <edu.icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  {edu.badge}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {edu.degree}
              </h3>
              <p className="text-slate-800 dark:text-slate-200 font-bold text-sm sm:text-base mb-1">
                {edu.institution}
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1 mb-5 font-normal">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" /> {edu.campus}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between mt-auto">
              <span className="text-xs font-bold text-primary-700 dark:text-primary-300 bg-violet-50 dark:bg-violet-950/80 border border-violet-200/80 dark:border-violet-900/60 px-3 py-1 rounded-full">
                {edu.period}
              </span>
              <div className="text-right">
                <span className="text-lg sm:text-xl font-black text-slate-900 dark:text-white block">
                  {edu.grade}
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-normal">
                  {edu.gradeDetail}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
