import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, Star } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'Best Paper Award',
      organization: 'MESMT International Conference',
      year: '2026',
      icon: Star
    },
    {
      title: 'Elite + Silver Certification',
      organization: 'NPTEL Machine Learning (IIT Kharagpur)',
      year: '2024',
      icon: Award
    },
    {
      title: 'Semi-finalist',
      organization: 'Smart India Hackathon',
      year: '2024',
      icon: CheckCircle
    },
    {
      title: 'AI Certification Series',
      organization: 'Infosys Springboard',
      year: '2024',
      icon: CheckCircle
    },
    {
      title: 'Internship Certifications',
      organization: 'IITM Pravartak & India Tourism',
      year: '2024',
      icon: CheckCircle
    }
  ];

  return (
    <section id="achievements" className="section-padding bg-white dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements & Certifications</h2>
          <div className="w-20 h-1.5 bg-primary-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-6 rounded-3xl flex items-start gap-4 hover:bg-white/50 dark:hover:bg-slate-800/80 transition-colors"
            >
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-2xl text-primary-600">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-1">{item.organization}</p>
                <span className="text-xs font-bold text-primary-500">{item.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
