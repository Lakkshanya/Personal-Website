import React from 'react';
import { motion } from 'framer-motion';
import { Music, Accessibility } from 'lucide-react'; // Accessibility as a stand-in for dance

const Hobbies = () => {
  const hobbies = [
    {
      name: 'Western Dance',
      icon: '💃',
      description: 'Passionate about energetic western dance forms and performance.',
      color: 'from-pink-600 to-rose-400'
    },
    {
      name: 'Listening to Music',
      icon: '🎧',
      description: 'Finding inspiration and relaxation through various music genres.',
      color: 'from-indigo-600 to-purple-400'
    }
  ];

  return (
    <section id="hobbies" className="section-padding bg-white dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Beyond Coding</h2>
          <div className="w-20 h-1.5 bg-primary-600 mx-auto rounded-full" />
          <p className="mt-4 text-slate-600 dark:text-slate-400">My favorite ways to recharge and stay creative.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {hobbies.map((hobby, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`relative group overflow-hidden rounded-3xl p-8 glass bg-gradient-to-br ${hobby.color} border-none`}
            >
              <div className="absolute inset-0 bg-white/60 dark:bg-slate-900/60 opacity-90 group-hover:opacity-80 transition-opacity" />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500">
                  <span className="text-4xl">{hobby.icon}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{hobby.name}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-md">
                  {hobby.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
