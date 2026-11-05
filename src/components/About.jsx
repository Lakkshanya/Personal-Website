import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Brain, Code, Cpu, BookOpen, Sparkles } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Academic Standing',
      detail: 'B.Tech CSE, SRMIST',
      sub: 'Class of 2027 • Ramapuram',
      accent: 'from-violet-500/20 to-purple-500/10',
      iconColor: 'text-violet-600 dark:text-violet-400'
    },
    {
      icon: Award,
      title: 'Current GPA',
      detail: '9.93 (Till 6th Sem)',
      sub: 'Top Rank Academic Standing',
      accent: 'from-amber-500/20 to-orange-500/10',
      iconColor: 'text-amber-500'
    },
    {
      icon: BookOpen,
      title: 'Research & Papers',
      detail: 'Scopus Indexed & Best Paper',
      sub: 'MESMT International Conference',
      accent: 'from-blue-500/20 to-cyan-500/10',
      iconColor: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: Brain,
      title: 'Core Domain',
      detail: 'AI / ML & Full Stack',
      sub: 'Deep Learning & Mobile Systems',
      accent: 'from-emerald-500/20 to-teal-500/10',
      iconColor: 'text-emerald-600 dark:text-emerald-400'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-20 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 md:mb-14"
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-violet-100 dark:bg-violet-950/60 text-violet-800 dark:text-violet-300 border border-violet-200 dark:border-violet-800/80 mb-2">
          <Sparkles className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
          <span>Professional Background</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2.5">
          About Me
        </h2>
        <div className="w-16 sm:w-20 h-1.5 bg-gradient-to-r from-violet-600 to-indigo-500 mx-auto rounded-full mb-3" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Bio Story */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="lg:col-span-7 space-y-4 sm:space-y-5 text-slate-700 dark:text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed"
        >
          <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0e1424] border border-slate-200 dark:border-white/[0.08] shadow-sm">
            <p className="mb-4">
              I am a proactive and ambitious <span className="text-slate-900 dark:text-white font-extrabold">Computer Science Engineering</span> student at{' '}
              <span className="text-violet-600 dark:text-violet-400 font-bold">SRM Institute of Science and Technology, Ramapuram</span>, maintaining a stellar CGPA of{' '}
              <span className="px-2 py-0.5 rounded-lg bg-violet-100 dark:bg-violet-950 text-violet-900 dark:text-violet-200 font-extrabold border border-violet-200 dark:border-violet-800">
                9.93 till 6th Semester
              </span>.
            </p>
            <p className="mb-4">
              My passion lies at the intersection of <span className="text-slate-900 dark:text-white font-bold">Full Stack Architecture</span> and{' '}
              <span className="text-slate-900 dark:text-white font-bold">Artificial Intelligence & Deep Learning</span>. I specialize in turning complex algorithmic models into intuitive, scalable software products that address urgent challenges in clinical healthcare, fintech automation, and smart campus workflows.
            </p>
            <p>
              Through hands-on engineering internships at <span className="text-violet-600 dark:text-violet-400 font-bold">SAASant Infotech</span> and <span className="text-violet-600 dark:text-violet-400 font-bold">IITM Pravartak</span>, as well as collaborative healthcare mobile systems with <span className="text-violet-600 dark:text-violet-400 font-bold">IIT Madras</span> students, I bring an analytical, solution-first approach to software development.
            </p>
          </div>

          {/* Quick Technical Badges */}
          <div className="flex flex-wrap gap-2 pt-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold bg-violet-100 dark:bg-violet-950/60 text-violet-900 dark:text-violet-300 border border-violet-200 dark:border-violet-800/80">
              <Brain className="w-4 h-4 text-violet-600 dark:text-violet-400" /> Deep Learning & NLP
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold bg-blue-100 dark:bg-blue-950/60 text-blue-900 dark:text-blue-300 border border-blue-200 dark:border-blue-800/80">
              <Code className="w-4 h-4 text-blue-600 dark:text-blue-400" /> React & React Native
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/80">
              <Cpu className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> Fintech & Data Pipelines
            </span>
          </div>
        </motion.div>

        {/* Key Metrics Cards in Bento Grid */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4"
        >
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-[#0e1424] border border-slate-200 dark:border-white/[0.08] rounded-2xl p-4.5 sm:p-5 shadow-sm hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-black/60 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-3.5">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.accent} border border-slate-200 dark:border-white/[0.08] flex items-center justify-center ${item.iconColor} group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400">
                  {item.title}
                </span>
              </div>
              <div>
                <p className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white mb-0.5">
                  {item.detail}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {item.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
