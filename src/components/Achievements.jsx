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
    },
    {
      category: 'publications',
      title: 'Scopus Indexed Publication Approval',
      organization: 'Scopus Index',
      year: '2026',
      description: 'Paper titled "MediSentry: An AI-Powered Clinical Decision Support System for Medication Safety and Risk Prediction" approved for publication.',
      icon: FileText,
      badge: 'Scopus Publication',
    },
    {
      category: 'certifications',
      title: 'Elite + Silver & Course Topper',
      organization: 'NPTEL (IIT Kharagpur)',
      year: 'Introduction to Machine Learning',
      description: 'Achieved Elite+Silver status and recognized among course toppers in rigorous Machine Learning curriculum offered by IIT Kharagpur.',
      icon: Star,
      badge: 'NPTEL Topper',
    },
    {
      category: 'certifications',
      title: 'Elite + Silver & Course Topper',
      organization: 'NPTEL (IIT Madras)',
      year: 'Python for Data Science',
      description: 'Achieved Elite+Silver certification and ranked among the course toppers in Python for Data Science offered by IIT Madras.',
      icon: Star,
      badge: 'NPTEL Topper',
    },
    {
      category: 'hackathons',
      title: 'Semi-Finalist: Smart India Hackathon',
      organization: 'SIH 2024',
      year: '2024',
      description: 'Engineered a web application for Micro-Doppler Target-Based Classification, competing among thousands of teams across India.',
      icon: Trophy,
      badge: 'National Hackathon',
    },
    {
      category: 'hackathons',
      title: 'Participant: Smart India Hackathon',
      organization: 'SIH 2025',
      year: '2025',
      description: 'Developed an innovative combined hardware and software system for an electronic taste sensing platform (E-Tongue).',
      icon: Code2,
      badge: 'Hardware + AI',
    },
    {
      category: 'hackathons',
      title: 'Participant: VIT Nexathon',
      organization: 'VIT University',
      year: '2025',
      description: 'Architected an AI-based Mood-Responsive Home Automation system that dynamically adapts environmental ambiance.',
      icon: Code2,
      badge: 'AI Automation',
    },
    {
      category: 'hackathons',
      title: 'Participant: Spectrum VIT',
      organization: 'VIT University',
      year: '2025',
      description: 'Developed "Vision Ease", an assistive AI web application crafted specifically to guide dyslexic and visually impaired users.',
      icon: Code2,
      badge: 'Assistive Tech',
    },
    {
      category: 'certifications',
      title: 'Deep Learning Specialization (5 Courses)',
      organization: 'DeepLearning.AI',
      year: 'Specialization Program',
      description: 'Mastered neural networks, CNNs, sequence models, structuring ML projects, and deep learning optimization algorithms.',
      icon: BookOpen,
      badge: 'DeepLearning.AI',
    },
    {
      category: 'certifications',
      title: 'Comprehensive AI Specialization Series',
      organization: 'Infosys Springboard',
      year: 'Multi-Module AI Series',
      description: 'Completed certifications covering AI fundamentals, ML, deep learning, NLP, computer vision, and Generative AI (GPT architectures).',
      icon: Award,
      badge: 'GenAI & ML',
    },
    {
      category: 'certifications',
      title: 'Industry Internship Recognitions',
      organization: 'IITM Pravartak & IndiaTourism',
      year: 'Internship Honors',
      description: 'Received official certifications of excellence and learning for contributions in AI model training and full-stack web applications.',
      icon: Award,
      badge: 'Industry Honors',
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
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-violet-50 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300 border border-violet-200/80 dark:border-violet-800/60 mb-2">
          <Trophy className="w-3.5 h-3.5 text-violet-600 dark:text-amber-400" />
          <span>Honors & Accolades</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2.5">
          Awards & Achievements
        </h2>
        <div className="w-16 sm:w-20 h-1.5 bg-gradient-to-r from-primary-600 to-indigo-500 mx-auto rounded-full mb-3" />
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base font-normal px-2">
          Recognitions across international conferences, Scopus publications, national hackathons, and certifications.
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2.5 mb-10">
        {[
          { id: 'all', label: 'All Highlights' },
          { id: 'awards', label: 'Best Paper & Awards' },
          { id: 'publications', label: 'Publications' },
          { id: 'hackathons', label: 'Hackathons (SIH & VIT)' },
          { id: 'certifications', label: 'Certifications & NPTEL' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
              activeTab === tab.id
                ? 'bg-primary-600 text-white shadow-md shadow-primary-500/20 scale-102'
                : 'bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Achievements Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05, duration: 0.4 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-black/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-violet-50 dark:bg-violet-950/60 border border-violet-200/80 dark:border-violet-800/60 flex items-center justify-center text-primary-600 dark:text-primary-400">
                  <item.icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  {item.badge}
                </span>
              </div>

              <h3 className="font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white mb-1.5 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-primary-600 dark:text-primary-400 font-bold text-xs sm:text-sm mb-2.5">
                {item.organization}
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-5 font-normal">
                {item.description}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 mt-auto flex items-center justify-between">
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
