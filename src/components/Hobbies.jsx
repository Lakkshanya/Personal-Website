import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Headphones, Activity } from 'lucide-react';

const Hobbies = () => {
  const pursuits = [
    {
      title: 'Western Dance',
      subtitle: 'Rhythm, Agility & Choreography',
      icon: Activity,
      iconColor: 'text-rose-500',
      iconBg: 'bg-rose-500/10 border-rose-500/20',
      badge: 'Choreography',
      badgeColor: 'bg-rose-500/10 text-rose-600 dark:text-rose-300 border-rose-500/20',
      description:
        'Passionate about high-energy western dance forms and stage performance. Dancing instills physical discipline, rapid spatial awareness, and creative vitality that keeps my engineering mind agile.'
    },
    {
      title: 'Music & Acoustics',
      subtitle: 'Harmonies & Deep Focus',
      icon: Headphones,
      iconColor: 'text-violet-500',
      iconBg: 'bg-violet-500/10 border-violet-500/20',
      badge: 'Focus & Soundscapes',
      badgeColor: 'bg-violet-500/10 text-violet-600 dark:text-violet-300 border-violet-500/20',
      description:
        'Exploring diverse musical arrangements from classical symphonies to lo-fi and electronic beats. Music provides the acoustic rhythm for deep coding states and complex architectural problem-solving.'
    }
  ];

  return (
    <section id="hobbies" className="py-16 md:py-20 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 md:mb-14"
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20 mb-2">
          <Sparkles className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
          <span>Balance & Passions</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2.5">
          Creative Pursuits
        </h2>
        <div className="w-16 sm:w-20 h-1.5 bg-gradient-to-r from-violet-600 to-indigo-500 mx-auto rounded-full mb-3" />
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base font-normal px-2">
          Creative avenues that cultivate rhythm, mental clarity, and fresh perspectives outside the compiler.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
        {pursuits.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.45 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-white dark:bg-[#120e24] border border-slate-200 dark:border-violet-500/15 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-black/70 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className={`w-13 h-13 rounded-2xl ${item.iconBg} border flex items-center justify-center ${item.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-6.5 h-6.5" />
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${item.badgeColor}`}>
                  {item.badge}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-violet-600 dark:text-violet-400 mb-4">
                {item.subtitle}
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;
