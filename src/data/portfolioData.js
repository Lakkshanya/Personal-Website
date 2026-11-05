// Assets
import medisentryImg from '../assets/medisentry.png';
import finwiseImg from '../assets/finwise.png';
import civicwatchImg from '../assets/civicwatch.png';
import interiorImg from '../assets/interior_designer.png';
import queuelessImg from '../assets/queueless_campus.png';
import pneumoniaImg from '../assets/pneumonia_detection.png';

export const CONTACT_CONFIG = {
  whatsapp: {
    phone: '+91 9790416750',
    waNumber: '919790416750',
    defaultMessage: 'Hi Lakkshanya! I visited your portfolio and would like to connect with you.',
  },
  email: {
    address: 'lakkshanyasuresh@gmail.com',
    defaultSubject: 'Connecting via Portfolio: Lakkshanya Suresh',
  },
  github: {
    url: 'https://github.com/Lakkshanya',
    display: 'github.com/Lakkshanya',
  },
  linkedin: {
    url: 'https://www.linkedin.com/in/lakkshanya-suresh-41942a32b',
    display: 'linkedin.com/in/lakkshanya-suresh',
  },
  location: {
    city: 'Chennai',
    state: 'Tamil Nadu, India',
    workMode: 'On-site & Remote Collaboration Worldwide',
    status: 'Open to Software Engineering & AI/ML Opportunities',
    education: 'B.Tech in Computer Science • SRMIST (Class of 2027)',
  }
};

export const PROJECTS_CONFIG = [
  {
    id: 'medisentry',
    title: 'MediSentry',
    subtitle: 'AI Sentinel for Prescription Analysis',
    category: 'Healthcare AI',
    description:
      'An AI-powered healthcare ecosystem built with React Native, Django, and PostgreSQL. Features digital prescription parsing, clinical risk prediction, and automated drug-drug interaction alerts.',
    image: medisentryImg,
    tags: ['React Native', 'Django', 'PostgreSQL', 'NLP / RAG', 'Clinical AI'],
    githubRepo: 'https://github.com/Lakkshanya/MediSentry',
    categoryBadge: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20'
  },
  {
    id: 'finwise',
    title: 'FinWise',
    subtitle: 'AI Finance Assistant & Advisory',
    category: 'Fintech & ML',
    description:
      'An intelligent financial recommendation system utilizing Random Forest ML models, React (Vite), Node.js, and MongoDB to match users with eligible financial schemes based on demographic metrics.',
    image: finwiseImg,
    tags: ['Random Forest', 'React (Vite)', 'Node.js', 'MongoDB', 'Fintech ML'],
    githubRepo: 'https://github.com/Lakkshanya/FinWise-Web-App',
    categoryBadge: 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-500/20'
  },
  {
    id: 'civicwatch',
    title: 'CivicWatch',
    subtitle: 'Community Issue Tracking Platform',
    category: 'Civic Tech & Web',
    description:
      'A full-stack web application enabling citizens and authorities to report, track, and manage civic infrastructure issues with interactive geo-mapping and real-time status updates.',
    image: civicwatchImg,
    tags: ['React (Vite)', 'Node.js', 'MongoDB', 'GeoVisualization'],
    githubRepo: 'https://github.com/Lakkshanya/CivicWatch-WebApp',
    categoryBadge: 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20'
  },
  {
    id: 'ai-designer',
    title: 'AI Designer System',
    subtitle: 'Computer Vision & Layout Pipeline',
    category: 'Computer Vision',
    description:
      'An end-to-end AI interior design system using React, Flask, PIL, and background segmentation models for automated background removal and intelligent theme-based furniture layout rendering.',
    image: interiorImg,
    tags: ['React', 'Flask', 'PIL', 'RmBeg', 'Image Processing'],
    githubRepo: 'https://github.com/Lakkshanya/AI---Interior-Design',
    categoryBadge: 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/20'
  },
  {
    id: 'queueless-campus',
    title: 'Queueless Campus',
    subtitle: 'Smart Queue Management Mobile App',
    category: 'Real-Time Mobile',
    description:
      'A real-time campus queue management system engineered with React Native, Node.js, MongoDB, and Socket.io. Features digital token booking, live wait-time estimation, and counter dispatching.',
    image: queuelessImg,
    tags: ['React Native', 'Node.js', 'MongoDB', 'Socket.io', 'Real-Time'],
    githubRepo: 'https://github.com/Lakkshanya/Queueless-Campus',
    categoryBadge: 'bg-violet-500/10 text-violet-700 dark:text-violet-300 border-violet-500/20'
  },
  {
    id: 'pneumonia-detection',
    title: 'Pneumonia Detection',
    subtitle: 'Deep Learning Chest Radiograph Diagnosis',
    category: 'Deep Learning',
    description:
      'A deep learning convolutional neural network (CNN) image classification model designed to automatically detect pneumonia patterns from chest X-ray radiographs, assisting clinicians in rapid triage.',
    image: pneumoniaImg,
    tags: ['Deep Learning', 'PyTorch / TF', 'CNN', 'Medical Imaging'],
    githubRepo: 'https://github.com/Lakkshanya/Pneumonia-detection',
    categoryBadge: 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/20'
  }
];
