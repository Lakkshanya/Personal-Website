import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { Github } from './icons';
import medisentryImg from '../assets/medisentry.png';
import finwiseImg from '../assets/finwise.png';
import civicwatchImg from '../assets/civicwatch.png';
import interiorImg from '../assets/interior_designer.png';
import queuelessImg from '../assets/queueless_campus.png';

const Projects = () => {
  const projects = [
    {
      title: 'MediSentry',
      subtitle: 'AI Healthcare System',
      description: 'An AI-powered healthcare platform for prescription analysis and drug interaction detection. Built using React Native, Django, and PostgreSQL.',
      image: medisentryImg,
      tags: ['React Native', 'Django', 'PostgreSQL', 'RAG', 'Expert System', 'LSTM'],
      link: '#'
    },
    {
      title: 'FinWise',
      subtitle: 'AI Finance Assistant',
      description: 'Smart financial recommendation system using Random Forest that matches users with suitable schemes based on demographic and income data.',
      image: finwiseImg,
      tags: ['Ensemble Model', 'React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      title: 'CivicWatch',
      subtitle: 'Civic Issue Tracker',
      description: 'A web platform that allows users to report and track civic issues with real-time updates and location-based visualization.',
      image: civicwatchImg,
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      title: 'AI Interior Designer',
      subtitle: 'Image Processing System',
      description: 'An AI-based image processing system that performs background removal and intelligent furniture placement.',
      image: interiorImg,
      tags: ['React', 'Flask'],
      link: '#'
    },
    {
      title: 'Queueless Campus',
      subtitle: 'Smart Queue Management',
      description: 'Digital token booking system with real-time tracking and workload balancing using Socket.io.',
      image: queuelessImg,
      tags: ['React Native', 'Node.js', 'MongoDB', "Socket.io"],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1.5 bg-primary-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group glass rounded-3xl overflow-hidden relative"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6" />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-primary-600 dark:text-primary-400 text-sm font-medium">{project.subtitle}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-semibold rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
