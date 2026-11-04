import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin, Sparkles, Brain, Code, Cpu } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: GraduationCap, title: 'Education', detail: 'B.Tech CSE, SRMIST', sub: 'Class of 2027 (Ramapuram)' },
    { icon: Award, title: 'CGPA', detail: '9.93 (Till 6th Sem)', sub: 'Top Rank Academic Standing' },
    { icon: MapPin, title: 'Location', detail: 'Chennai, India', sub: 'Tamil Nadu' },
    { icon: Brain, title: 'Specialization', detail: 'AI / Machine Learning', sub: 'Deep Learning & Full Stack' }
  ];

  return (
    <section id="about" className="py-16 md:py-20 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 md:mb-14"
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-violet-50 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300 border border-violet-200/80 dark:border-violet-800/60 mb-2">
          <Sparkles className="w-3.5 h-3.5 text-violet-600 dark:text-amber-400" />
          <span>Introduction</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2.5">
          About Me
        </h2>
        <div className="w-16 sm:w-20 h-1.5 bg-gradient-to-r from-primary-600 to-indigo-500 mx-auto rounded-full mb-3" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Bio Story */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="lg:col-span-7 space-y-5 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed"
        >
          <p>
            I am a proactive and ambitious <span className="text-slate-900 dark:text-white font-extrabold">Computer Science Engineering</span> student at{' '}
            <span className="text-primary-600 dark:text-primary-400 font-bold">SRM Institute of Science and Technology, Ramapuram</span>, maintaining a stellar CGPA of{' '}
            <span className="px-2 py-0.5 rounded-lg bg-violet-50 dark:bg-violet-950/80 text-violet-800 dark:text-violet-200 font-extrabold border border-violet-200/80 dark:border-violet-800/80">
              9.93 till 6th Semester
            </span>.
          </p>
          <p>
            My passion lies at the intersection of <span className="text-slate-900 dark:text-white font-bold">Full Stack Development</span> and{' '}
            <span className="text-slate-900 dark:text-white font-bold">Artificial Intelligence & Machine Learning</span>. I specialize in turning complex algorithmic models into intuitive, scalable software products that address urgent challenges in clinical healthcare, fintech automation, and smart campus workflows.
          </p>
          <p>
            Through hands-on internships at <span className="text-primary-600 dark:text-primary-400 font-bold">SAASant Infotech</span> and <span className="text-primary-600 dark:text-primary-400 font-bold">IITM Pravartak</span>, as well as cross-institutional healthcare technology projects with <span className="text-primary-600 dark:text-primary-400 font-bold">IIT Madras</span> students, I bring a collaborative, solution-first approach to engineering.
          </p>

          <div className="pt-2 flex flex-wrap gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold bg-violet-50 dark:bg-violet-950/40 text-violet-800 dark:text-violet-300 border border-violet-200/80 dark:border-violet-800/60">
              <Brain className="w-4 h-4 text-purple-600 dark:text-purple-400" /> Deep Learning & NLP
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold bg-blue-50 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300 border border-blue-200/80 dark:border-blue-800/60">
              <Code className="w-4 h-4 text-blue-600 dark:text-blue-400" /> React & React Native
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800/60">
              <Cpu className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> Fintech & Data Pipelines
            </span>
          </div>
        </motion.div>

        {/* Key Metrics Cards */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-black/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="w-11 h-11 rounded-xl bg-violet-50 dark:bg-violet-950/60 border border-violet-200/80 dark:border-violet-800/60 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4 shadow-2xs">
                <item.icon className="w-5.5 h-5.5" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  {item.title}
                </h3>
                <p className="text-lg font-extrabold text-slate-900 dark:text-white mb-0.5">
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
