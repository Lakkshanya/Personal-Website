import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Github, Linkedin } from './icons';
import emailjs from 'emailjs-com';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Placeholder for EmailJS - User needs to fill in credentials
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
      e.target.reset();
    }, 2000);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'lakkshanyasuresh@gmail.com', href: 'mailto:lakkshanyasuresh@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 9790416750', href: 'tel:+919790416750' },
    { icon: MapPin, label: 'Location', value: 'Chennai, Tamil Nadu', href: '#' }
  ];

  return (
    <section id="contact" className="section-padding bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1.5 bg-primary-600 mx-auto rounded-full" />
          <p className="mt-4 text-slate-600 dark:text-slate-400">Have a project or opportunity? Let's connect!</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-3xl space-y-6">
              {contactInfo.map((info, idx) => (
                <a
                  key={idx}
                  href={info.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="p-4 bg-primary-100 dark:bg-primary-900/30 rounded-2xl text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">{info.label}</p>
                    <p className="text-lg font-bold group-hover:text-primary-600 transition-colors">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex gap-4">
              <a href="https://github.com/Lakkshanya" target="_blank" rel="noreferrer" className="flex-1 glass p-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-primary-600 hover:text-white transition-all group">
                <Github className="w-5 h-5" />
                <span className="font-bold">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/lakkshanya-suresh-41942a32b" target="_blank" rel="noreferrer" className="flex-1 glass p-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-primary-600 hover:text-white transition-all group">
                <Linkedin className="w-5 h-5" />
                <span className="font-bold">LinkedIn</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass p-8 rounded-3xl space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 ml-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 ml-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                    placeholder="name@email.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 ml-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                  placeholder="Inquiry"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 ml-1">Message</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none transition-all resize-none"
                  placeholder="How can I help you?"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-primary-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/20 disabled:opacity-50"
              >
                {loading ? 'Sending...' : success ? 'Sent Successfully!' : (
                  <>Send Message <Send className="w-5 h-5" /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
