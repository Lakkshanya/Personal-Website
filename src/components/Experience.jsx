import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'AI Intern',
      company: 'IITM Pravartak',
      period: '2024 - Present',
      description: 'Worked on real-time AI problem statements by designing and training machine learning models. Gained hands-on experience in building intelligent systems and optimizing model performance.',
      tags: ['Machine Learning', 'Model Optimization']
    },
    {
      title: 'Web Development Intern',
      company: 'India Tourism',
      period: 'Summer 2024',
      description: 'Developed a web application using HTML, CSS, and JavaScript integrated with cloud storage. Focused on responsive design and efficient data handling.',
      tags: ['Full Stack', 'Cloud Storage']
    },
    {
      title: 'Healthcare Project Collaboration',
      company: 'IIT Madras & Peers',
      period: '2024',
      description: 'Collaborating with IIT Madras students and peers to build a healthcare mobile application focused on improving clinical workflows and digital health systems.',
      tags: ['Healthcare AI', 'Mobile Development']
    }
  ];

  return (
    <section id="experience" className="section-padding bg-white dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <div className="w-20 h-1.5 bg-primary-600 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-700 before:to-transparent">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-slate-800 bg-slate-100 dark:bg-slate-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase className="w-5 h-5 text-primary-600" />
              </div>
              
              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-3xl shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-center justify-between space-x-2 mb-2">
                  <div className="font-bold text-slate-900 dark:text-white text-xl">{exp.title}</div>
                  <time className="flex items-center gap-1 text-sm font-medium text-primary-600 bg-primary-50 dark:bg-primary-900/30 px-3 py-1 rounded-full">
                    <Calendar className="w-4 h-4" /> {exp.period}
                  </time>
                </div>
                <div className="text-primary-600 dark:text-primary-400 font-semibold mb-4">{exp.company}</div>
                <div className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{exp.description}</div>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs font-semibold px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
