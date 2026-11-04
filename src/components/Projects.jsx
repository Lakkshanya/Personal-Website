import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Github } from './icons';

// Assets
import medisentryImg from '../assets/medisentry.png';
import finwiseImg from '../assets/finwise.png';
import civicwatchImg from '../assets/civicwatch.png';
import interiorImg from '../assets/interior_designer.png';
import queuelessImg from '../assets/queueless_campus.png';
import pneumoniaImg from '../assets/pneumonia_detection.png';

/* =========================================================================
 * 📌 GITHUB REPOSITORIES CONFIGURATION:
 * 
 * FILE: src/components/Projects.jsx
 * 
 * Update your exact GitHub repository links below.
 * Visit your GitHub profile (https://github.com/Lakkshanya?tab=repositories)
 * and paste the exact repository URL for each project.
 * 
 * If a repository is set to "Private" or hasn't been uploaded yet, GitHub
 * will show a 404 page. In that case, you can temporarily link to your main
 * profile: 'https://github.com/Lakkshanya'
 * ========================================================================= */
export const PROJECTS_CONFIG = [
  {
    id: 'medisentry',
    title: 'MediSentry',
    subtitle: 'AI Sentinel for Prescription Analysis',
    category: 'Healthcare AI',
    description:
      'An AI-powered healthcare ecosystem built with React Native, Django, and PostgreSQL. Features digital prescription management, clinical risk prediction, and automated drug-drug interaction analysis.',
    image: medisentryImg,
    tags: ['React Native', 'Django', 'PostgreSQL', 'NLP / RAG', 'Clinical AI'],
    // 🔗 1. MediSentry Repo Link:
    githubRepo: 'https://github.com/Lakkshanya/MediSentry',
  },
  {
    id: 'finwise',
    title: 'FinWise',
    subtitle: 'AI Finance Assistant',
    category: 'Fintech & ML',
    description:
      'An intelligent financial recommendation system utilizing Random Forest ML models, React (Vite), Node.js, and MongoDB to match users with eligible financial schemes based on demographic and income metrics.',
    image: finwiseImg,
    tags: ['Random Forest', 'React (Vite)', 'Node.js', 'MongoDB', 'Fintech ML'],
    // 🔗 2. FinWise Repo Link:
    githubRepo: 'https://github.com/Lakkshanya/FinWise-Web-App',
  },
  {
    id: 'civicwatch',
    title: 'CivicWatch',
    subtitle: 'Community Issue Tracking Platform',
    category: 'Civic Tech & Web',
    description:
      'A full-stack web application enabling citizens and authorities to report, track, and manage civic issues with interactive location-based visualization and real-time status updates.',
    image: civicwatchImg,
    tags: ['React (Vite)', 'Node.js', 'MongoDB', 'GeoVisualization'],
    // 🔗 3. CivicWatch Repo Link:
    githubRepo: 'https://github.com/Lakkshanya/CivicWatch-WebApp',
  },
  {
    id: 'ai-designer',
    title: 'AI Designer System',
    subtitle: 'Image Processing & Interior Pipeline',
    category: 'Computer Vision',
    description:
      'Developed an end-to-end AI system using React, Flask, PIL, and RmBeg for automated background removal and intelligent, theme-based furniture layout placement.',
    image: interiorImg,
    tags: ['React', 'Flask', 'PIL', 'RmBeg', 'Image Processing'],
    // 🔗 4. AI Designer System Repo Link:
    githubRepo: 'https://github.com/Lakkshanya/AI---Interior-Design',
  },
  {
    id: 'queueless-campus',
    title: 'Queueless Campus',
    subtitle: 'Smart Queue Management System',
    category: 'Real-Time Mobile',
    description:
      'A real-time campus queue management system engineered with React Native, Node.js, MongoDB, and Socket.io. Features digital token booking, live position tracking, and workload-balanced counter dispatching.',
    image: queuelessImg,
    tags: ['React Native', 'Node.js', 'MongoDB', 'Socket.io', 'Real-Time'],
    // 🔗 5. Queueless Campus Repo Link:
    githubRepo: 'https://github.com/Lakkshanya/Queueless-Campus',
  },
  {
    id: 'pneumonia-detection',
    title: 'Pneumonia Detection',
    subtitle: 'Deep Learning Chest X-Ray Diagnosis',
    category: 'Deep Learning',
    description:
      'A deep learning convolutional neural network (CNN) image classification model designed to automatically detect pneumonia patterns from chest X-ray radiographs, assisting clinicians in rapid diagnostic decisions.',
    image: pneumoniaImg,
    tags: ['Deep Learning', 'PyTorch / TF', 'CNN', 'Medical Imaging'],
    // 🔗 6. Pneumonia Detection Repo Link:
    githubRepo: 'https://github.com/Lakkshanya/Pneumonia-detection',
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-20 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 md:mb-14"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2.5">
          Featured Projects
        </h2>
        <div className="w-16 sm:w-20 h-1.5 bg-gradient-to-r from-primary-600 to-indigo-500 mx-auto rounded-full mb-3" />
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base font-normal px-2">
          Production-grade engineering addressing challenges in AI, mobile, healthcare, and distributed systems.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {PROJECTS_CONFIG.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.07, duration: 0.45 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="group bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-black/50 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Image Preview */}
            <div className="aspect-[16/10] overflow-hidden relative bg-slate-950">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-50 group-hover:opacity-20 transition-opacity" />

              {/* Category Badge */}
              <div className="absolute top-3.5 left-3.5 z-10">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 dark:bg-black/60 backdrop-blur-md text-slate-900 dark:text-white border border-slate-200 dark:border-white/20 shadow-xs">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <div className="mb-2.5">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-primary-600 dark:text-primary-400 mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4 font-normal">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* "Go to Project" Action Button */}
              <div className="pt-3.5 border-t border-slate-100 dark:border-slate-800">
                <a
                  href={project.githubRepo || 'https://github.com/Lakkshanya'}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 bg-slate-900 hover:bg-primary-600 text-white dark:bg-slate-800 dark:hover:bg-primary-600 transition-all duration-200 shadow-xs group/btn cursor-pointer"
                >
                  <Github className="w-4 h-4" />
                  <span>Go to Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
