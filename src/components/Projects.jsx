import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, FolderGit2 } from 'lucide-react';
import { Github } from './icons';
import { PROJECTS_CONFIG } from '../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-20 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 md:mb-14"
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20 mb-2">
          <FolderGit2 className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
          <span>Featured Systems</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2.5">
          Engineering Projects
        </h2>
        <div className="w-16 sm:w-20 h-1.5 bg-gradient-to-r from-violet-600 to-indigo-500 mx-auto rounded-full mb-3" />
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base font-normal px-2">
          Production-grade applications addressing real-world challenges in AI, mobile architecture, healthcare, and distributed systems.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {PROJECTS_CONFIG.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.07, duration: 0.45 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="group bg-white dark:bg-[#0e1424] border border-slate-200 dark:border-white/[0.08] rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-black/70 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Image Preview with Category Badge */}
            <div className="aspect-[16/10] overflow-hidden relative bg-slate-950">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

              {/* Category Pill */}
              <div className="absolute top-3.5 left-3.5 z-10">
                <span className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md border shadow-xs ${project.categoryBadge}`}>
                  {project.category}
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
              <div>
                <div className="mb-2.5">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-violet-600 dark:text-violet-400 mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 bg-slate-100 dark:bg-white/[0.06] text-slate-700 dark:text-slate-300 text-[11px] sm:text-xs font-medium rounded-lg border border-slate-200 dark:border-white/[0.08]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-3 border-t border-slate-100 dark:border-white/[0.06]">
                <a
                  href={project.githubRepo || 'https://github.com/Lakkshanya'}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 bg-slate-900 hover:bg-violet-600 text-white dark:bg-white/[0.08] dark:hover:bg-violet-600 dark:text-white transition-all duration-200 shadow-xs group/btn cursor-pointer"
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository</span>
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
