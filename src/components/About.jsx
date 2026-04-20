import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1.5 bg-primary-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              I am a proactive and ambitious Computer Science Engineering student currently pursuing my degree at 
              <span className="text-primary-600 font-semibold"> SRM Institute of Science and Technology</span> with a CGPA of 9.92.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              I have a strong foundation in full-stack development along with a deep interest in Artificial Intelligence and Machine Learning. 
              I enjoy building end-to-end intelligent systems that combine data, models, and user-friendly interfaces.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              I have worked on multiple impactful projects across healthcare, finance, and civic domains, and have collaborated with students 
              from <span className="text-primary-600 font-semibold">IIT Madras</span> on real-world problem statements.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {[
              { icon: GraduationCap, title: 'Education', detail: 'B.Tech CSE, SRMIST' },
              { icon: Award, title: 'CGPA', detail: '9.92 (Top Tier)' },
              { icon: MapPin, title: 'Location', detail: 'Chennai, India' },
              { icon: Award, title: 'Passion', detail: 'Intelligent Systems' }
            ].map((item, idx) => (
              <div key={idx} className="glass p-6 rounded-2xl flex flex-col items-center text-center">
                <item.icon className="w-8 h-8 text-primary-600 mb-3" />
                <h3 className="font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.detail}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
