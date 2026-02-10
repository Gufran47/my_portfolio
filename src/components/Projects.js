import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaShieldAlt, FaCalculator } from 'react-icons/fa';
import WAFinityDemo from './WAFinityDemo';
import ExpenseDemo from './ExpenseDemo';
import './Projects.css';

const Projects = () => {
  const [showWAFinityDemo, setShowWAFinityDemo] = useState(false);
  const [showExpenseDemo, setShowExpenseDemo] = useState(false);

  const handleDemoClick = (projectTitle) => {
    if (projectTitle === "WAFinity - Intelligent Web Application Firewall") {
      setShowWAFinityDemo(true);
    } else if (projectTitle === "Expense Calculator Web Application") {
      setShowExpenseDemo(true);
    }
  };
  const projects = [
    {
      title: "WAFinity - Intelligent Web Application Firewall",
      description: "Advanced AI-powered firewall system that protects web applications from sophisticated attacks including SQL injection, XSS, and malicious HTTP requests. Features real-time threat detection with machine learning-based anomaly detection.",
      icon: <FaShieldAlt />,
      tech: ["Python", "Flask", "Machine Learning", "HTML", "CSS", "JavaScript"],
      features: [
        "Real-time threat analysis and blocking",
        "Machine learning-based anomaly detection",
        "Interactive security dashboard",
        "Low latency, high accuracy protection",
        "Behavioral pattern analysis"
      ],
      github: "https://github.com/Gufran47",
      demo: "wafinity-demo",
      period: "Dec 2025 - Jan 2026",
      status: "Featured Project"
    },
    {
      title: "Expense Calculator Web Application",
      description: "Responsive financial management tool enabling users to track and manage income and expenses effectively. Features dynamic CRUD operations with efficient state management and real-time budget insights.",
      icon: <FaCalculator />,
      tech: ["React.js", "JavaScript", "HTML", "CSS", "Create React App"],
      features: [
        "Dynamic add, edit, and delete functionality",
        "Real-time balance calculation",
        "Responsive design for all devices",
        "Efficient state management",
        "Personal budget insights"
      ],
      github: "https://github.com/Gufran47",
      demo: "expense-demo",
      period: "Sept 2025 - Nov 2025",
      status: "Production Ready"
    },

  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Security Projects
        </motion.h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="cyber-card">
                <div className="project-header">
                  <div className="project-icon">{project.icon}</div>
                  <div className="project-meta">
                    <span className="project-status">{project.status}</span>
                    <span className="project-period">{project.period}</span>
                  </div>
                </div>
                
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link github"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub />
                    <span>Code</span>
                  </motion.a>
                  <motion.button
                    onClick={() => handleDemoClick(project.title)}
                    className="project-link demo"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt />
                    <span>Demo</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <AnimatePresence>
        {showWAFinityDemo && (
          <WAFinityDemo onClose={() => setShowWAFinityDemo(false)} />
        )}
        {showExpenseDemo && (
          <ExpenseDemo onClose={() => setShowExpenseDemo(false)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;