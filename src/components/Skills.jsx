import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Globe, Database } from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Python', 'Java', 'C', 'C++'],
      color: 'from-blue-500 to-cyan-400'
    },
    {
      title: 'AI/ML',
      icon: Brain,
      skills: ['Machine Learning', 'Deep Learning'],
      color: 'from-purple-500 to-indigo-400'
    },
    {
      title: 'Web Development',
      icon: Globe,
      skills: ['React (Vite)', 'Node.js', 'Flask', 'Django'],
      color: 'from-orange-500 to-pink-400'
    },
    {
      title: 'Database',
      icon: Database,
      skills: ['MySQL', 'MongoDB', 'PostgreSQL'],
      color: 'from-green-500 to-emerald-400'
    }
  ];

  return (
    <section id="skills" className="section-padding bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
          <div className="w-20 h-1.5 bg-primary-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-3xl relative overflow-hidden group"
            >
              {/* Icon Background Decoration */}
              <div className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br ${cat.color} opacity-10 rounded-full group-hover:scale-150 transition-transform duration-500`} />
              
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-6 shadow-lg shadow-primary-500/10`}>
                <cat.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-6">{cat.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-full text-sm font-medium text-slate-600 dark:text-slate-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
