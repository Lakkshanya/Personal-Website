import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, BookOpen, FileText, Code2, Award } from 'lucide-react';

const Achievements = () => {
  const [activeTab, setActiveTab] = useState('all');

  const items = [
    {
      category: 'awards',
      title: 'Best Paper Award',
      organization: 'MESMT International Conference',
      year: '2026',
      description: 'Awarded Best Paper in the 2nd International Conference on Modern Trends in Engineering, Science, Management, and Technology.',
      icon: Trophy,
      badge: 'Conference Award',
      badgeColor: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
      iconAccent: 'from-amber-500/20 to-orange-500/10 text-amber-500'
    },
    {
      category: 'publications',
      title: 'Scopus Indexed Publication Approval',
      organization: 'Scopus Index',
      year: '2026',
      description: 'Paper titled "MediSentry: An AI-Powered Clinical Decision Support System for Medication Safety and Risk Prediction" approved for publication.',
      icon: FileText,
      badge: 'Scopus Publication',
      badgeColor: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
      iconAccent: 'from-blue-500/20 to-cyan-500/10 text-blue-500'
    },
    {
      category: 'certifications',
      title: 'Elite + Silver & Course Topper',
      organization: 'NPTEL (IIT Kharagpur)',
      year: 'Introduction to Machine Learning',
      description: 'Achieved Elite+Silver status and recognized among course toppers in rigorous Machine Learning curriculum offered by IIT Kharagpur.',
      icon: Star,
      badge: 'NPTEL Topper',
      badgeColor: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
      iconAccent: 'from-purple-500/20 to-pink-500/10 text-purple-500'
    },
    {
      category: 'certifications',
      title: 'Elite + Silver & Course Topper',
      organization: 'NPTEL (IIT Madras)',
      year: 'Python for Data Science',
      description: 'Achieved Elite+Silver certification and ranked among the course toppers in Python for Data Science offered by IIT Madras.',
      icon: Star,
      badge: 'NPTEL Topper',
      badgeColor: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
      iconAccent: 'from-purple-500/20 to-pink-500/10 text-purple-500'
    },
    {
      category: 'hackathons',
      title: 'Semi-Finalist: Smart India Hackathon',
      organization: 'SIH 2024',
      year: '2024',
      description: 'Engineered a web application for Micro-Doppler Target-Based Classification, competing among thousands of teams across India.',
      icon: Trophy,
      badge: 'National Hackathon',
      badgeColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
      iconAccent: 'from-emerald-500/20 to-teal-500/10 text-emerald-500'
    },
    {
      category: 'hackathons',
      title: 'Participant: Smart India Hackathon',
      organization: 'SIH 2025',
      year: '2025',
      description: 'Developed an innovative combined hardware and software system for an electronic taste sensing platform (E-Tongue).',
      icon: Code2,
      badge: 'Hardware + AI',
      badgeColor: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20',
      iconAccent: 'from-cyan-500/20 to-blue-500/10 text-cyan-500'
    },
    {
      category: 'hackathons',
      title: 'Participant: VIT Nexathon',
      organization: 'VIT University',
      year: '2025',
      description: 'Architected an AI-based Mood-Responsive Home Automation system that dynamically adapts environmental ambiance.',
      icon: Code2,
      badge: 'AI Automation',
      badgeColor: 'bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20',
      iconAccent: 'from-violet-500/20 to-indigo-500/10 text-violet-500'
    },
    {
      category: 'hackathons',
      title: 'Participant: Spectrum VIT',
      organization: 'VIT University',
      year: '2025',
      description: 'Developed "Vision Ease", an assistive AI web application crafted specifically to guide dyslexic and visually impaired users.',
      icon: Code2,
      badge: 'Assistive Tech',
      badgeColor: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20',
      iconAccent: 'from-indigo-500/20 to-purple-500/10 text-indigo-500'
    },
    {
      category: 'certifications',
      title: 'Deep Learning Specialization (5 Courses)',
      organization: 'DeepLearning.AI',
      year: 'Specialization Program',
      description: 'Mastered deep neural networks, CNNs, sequence models, structuring ML projects, and deep learning optimization algorithms.',
      icon: BookOpen,
      badge: 'DeepLearning.AI',
      badgeColor: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20',
      iconAccent: 'from-rose-500/20 to-pink-500/10 text-rose-500'
    },
    {
      category: 'certifications',
      title: 'Comprehensive AI Specialization Series',
      organization: 'Infosys Springboard',
      year: 'Multi-Module AI Series',
      description: 'Completed certifications covering AI fundamentals, ML, deep learning, NLP, computer vision, and Generative AI (GPT architectures).',
      icon: Award,
      badge: 'GenAI & ML',
      badgeColor: 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20',
      iconAccent: 'from-teal-500/20 to-emerald-500/10 text-teal-500'
    },
    {
      category: 'certifications',
      title: 'Industry Internship Recognitions',
      organization: 'IITM Pravartak & IndiaTourism',
      year: 'Internship Honors',
      description: 'Received official certifications of excellence and learning for contributions in AI model training and full-stack web applications.',
      icon: Award,
      badge: 'Industry Honors',
      badgeColor: 'bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20',
      iconAccent: 'from-violet-500/20 to-purple-500/10 text-violet-500'
    }
  ];

  const filteredItems = activeTab === 'all' ? items : items.filter(i => i.category === activeTab);

  return (
    <section id="achievements" className="py-16 md:py-20 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 md:mb-12"
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20 mb-2">
          <Trophy className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
          <span>Honors & Accolades</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2.5">
          Awards & Achievements
        </h2>
        <div className="w-16 sm:w-20 h-1.5 bg-gradient-to-r from-violet-600 to-indigo-500 mx-auto rounded-full mb-3" />
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base font-normal px-2">
          Recognitions across international conferences, Scopus publications, national hackathons, and certifications.
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10 px-2">
        {[
          { id: 'all', label: 'All Honors' },
          { id: 'awards', label: 'Best Paper & Awards' },
          { id: 'publications', label: 'Publications' },
          { id: 'hackathons', label: 'Hackathons (SIH & VIT)' },
          { id: 'certifications', label: 'Certifications & NPTEL' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-500/25 scale-102'
                : 'bg-white dark:bg-[#0e1424] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/[0.08]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Achievements Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {filteredItems.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05, duration: 0.4 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-white dark:bg-[#0e1424] border border-slate-200 dark:border-white/[0.08] rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-sm hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-black/60 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${item.iconAccent} border border-slate-200/70 dark:border-white/[0.08] flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-5.5 h-5.5 sm:w-6 sm:h-6" />
                </div>
                <span className={`text-[11px] sm:text-xs font-semibold px-3 py-1 rounded-full border ${item.badgeColor}`}>
                  {item.badge}
                </span>
              </div>

              <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white mb-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-violet-600 dark:text-violet-400 font-bold text-xs sm:text-sm mb-2.5">
                {item.organization}
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                {item.description}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-white/[0.06] mt-auto flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                {item.year}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
