import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'SRM Institute of Science and Technology',
      period: '2023 – Present',
      grade: 'CGPA: 9.92',
      icon: GraduationCap
    },
    {
      degree: 'Class 12',
      institution: 'Higher Secondary School',
      period: '2023',
      grade: '87.33%',
      icon: School
    },
    {
      degree: 'Class 10',
      institution: 'Secondary School',
      period: '2021',
      grade: '94.20%',
      icon: School
    }
  ];

  return (
    <section id="education" className="section-padding bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1.5 bg-primary-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <edu.icon className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">{edu.degree}</h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium mb-4">{edu.institution}</p>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-sm font-bold text-primary-500 bg-primary-50 dark:bg-primary-900/30 px-3 py-1 rounded-full">{edu.period}</span>
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{edu.grade}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
