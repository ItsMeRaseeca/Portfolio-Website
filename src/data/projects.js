export const featuredProjects = [
  {
    id: 'bookify',
    title: 'Bookify',
    tagline: 'AI-Powered Service Booking Platform',
    description:
      'A modern full-stack service booking platform featuring an AI Chat Assistant and Voice Assistant for effortless service discovery, scheduling, and management across multiple user roles.',
    problem:
      'Service booking workflows are fragmented — users navigate complex interfaces, juggle multiple calls, and lack intelligent assistance.',
    solution:
      'Built a comprehensive booking platform with AI-powered chat and voice assistants, role-based dashboards for admins/organizers/users, automated notifications via email and WhatsApp, and integrated payment processing.',
    architecture:
      'Monorepo with React 18 + Vite + TypeScript frontend and Node.js + Express 5 + Prisma + PostgreSQL backend. AI features built with OpenAI Agents SDK, Groq, and Google Gemini API.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'OpenAI', 'Tailwind CSS'],
    impact: '🏆 Winner — Odoo × SPIT National Hackathon (350+ teams)',
    outcomes: [
      'First place among 350+ competing teams',
      'Role-based dashboards for 3 user types',
      'AI-powered voice + chat booking interface',
      'Automated email & WhatsApp notifications',
    ],
    github: 'https://github.com/raseeca',
    color: 'from-indigo-500/20 to-violet-500/20',
  },
  {
    id: 'scamradar',
    title: 'ScamRadar',
    tagline: 'AI-Driven Scam Detection System',
    description:
      'An intelligent platform leveraging machine learning and natural language processing to detect and classify online scams in real-time, protecting users from fraudulent content.',
    problem:
      'Online scams are increasingly sophisticated — phishing emails, fake websites, and social engineering attacks evade basic detection methods.',
    solution:
      'Developed an AI-powered detection engine using NLP models to analyze suspicious content, classify threat types, and provide real-time risk assessments with explanations.',
    architecture:
      'React frontend with FastAPI backend. ML pipeline uses PyTorch for model training with scikit-learn for feature engineering. Real-time inference API for content analysis.',
    technologies: ['Python', 'React', 'FastAPI', 'PyTorch', 'NLP', 'Scikit-learn', 'Computer Vision'],
    impact: 'Real-time scam detection with high-accuracy classification',
    outcomes: [
      'Multi-model ML pipeline for threat classification',
      'Real-time content analysis API',
      'NLP-based text analysis + CV for visual scam detection',
      'User-friendly risk assessment dashboard',
    ],
    github: 'https://github.com/raseeca',
    color: 'from-cyan-500/20 to-indigo-500/20',
  },
  {
    id: 'resqai',
    title: 'ResQAI',
    tagline: 'AI-Driven Emergency Response System',
    description:
      'An AI-powered emergency response platform that processes real-time data to optimize disaster relief operations, resource allocation, and response team coordination.',
    problem:
      'Emergency response teams often lack real-time situational awareness, leading to delayed resource allocation and suboptimal coordination during critical incidents.',
    solution:
      'Built an AI system that ingests real-time data feeds, predicts resource requirements, optimizes response routing, and provides actionable intelligence to coordination teams.',
    architecture:
      'React + Node.js full-stack app with Python ML services. PostgreSQL for data persistence, Maps API integration for geospatial routing and visualization.',
    technologies: ['Python', 'React', 'Node.js', 'Machine Learning', 'PostgreSQL', 'Maps API'],
    impact: 'Optimized emergency response coordination and resource allocation',
    outcomes: [
      'Real-time data ingestion and analysis pipeline',
      'ML-based resource prediction models',
      'Geospatial routing optimization',
      'Coordination dashboard for response teams',
    ],
    github: 'https://github.com/raseeca',
    color: 'from-violet-500/20 to-rose-500/20',
  },
  {
    id: 'scraphappens',
    title: 'ScrapHappens',
    tagline: 'Intelligent Web Scraping & Data Pipeline',
    description:
      'A smart web scraping platform powered by agentic AI that intelligently extracts, cleans, and structures web data with minimal configuration and maximum accuracy.',
    problem:
      'Extracting and processing web data at scale requires complex pipelines, brittle selectors, and significant manual data cleaning effort.',
    solution:
      'Created an agentic AI-powered scraping system that autonomously navigates web pages, extracts structured data, handles edge cases, and outputs clean datasets ready for analysis.',
    architecture:
      'Next.js frontend with FastAPI backend. Agentic AI orchestration for intelligent scraping workflows. PostgreSQL for data storage, Docker for deployment.',
    technologies: ['Python', 'Next.js', 'Agentic AI', 'FastAPI', 'PostgreSQL', 'Docker'],
    impact: 'Top 9 Finalist — Augenblick 2026',
    outcomes: [
      'Agentic AI-powered autonomous scraping',
      'Intelligent data cleaning and structuring',
      'Configurable extraction workflows',
      'Top 9 finalist at Augenblick hackathon',
    ],
    github: 'https://github.com/raseeca',
    color: 'from-emerald-500/20 to-cyan-500/20',
  },
];

export const additionalProjects = [
  {
    title: 'Cooper',
    description: 'Collaborative project built at TSEC Hacks 2026.',
    technologies: ['React', 'Node.js', 'AI'],
    github: 'https://github.com/raseeca',
  },
];
