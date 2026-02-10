import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaGraduationCap, FaCode, FaAward } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      type: "training",
      title: "CipherSchool - DSA Using Java Programming",
      organization: "CipherSchool",
      period: "June 2025 - July 2025",
      description: "Completed comprehensive DSA training covering Stack and Queue, Tree, Graph and Hash Map, with hands-on projects including development of a fully functional Event Management platform featuring Classes and Object implementation.",
      skills: ["Java", "Data Structures", "Algorithms", "OOP", "Problem Solving"],
      icon: <FaCode />,
      link: "Certificate Link"
    }
  ];

  const achievements = [
    {
      title: "Problem-Solving Skills",
      description: "Strong analytical and problem-solving abilities demonstrated through complex security implementations"
    },
    {
      title: "Team Player",
      description: "Excellent collaboration skills with experience in team-based development projects"
    },
    {
      title: "Adaptability",
      description: "Quick learner with ability to adapt to new technologies and security challenges"
    },
    {
      title: "Time Management",
      description: "Proven track record of delivering projects on time while maintaining high quality standards"
    }
  ];

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Training & Experience
        </motion.h2>
        
        <div className="experience-content">
          <div className="experience-timeline">
            <motion.h3 
              className="subsection-title"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Professional Training
            </motion.h3>
            
            <div className="timeline">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="timeline-marker">
                    <div className="marker-icon">{exp.icon}</div>
                  </div>
                  <div className="timeline-content">
                    <div className="cyber-card">
                      <div className="exp-header">
                        <h4 className="exp-title">{exp.title}</h4>
                        <span className="exp-period">{exp.period}</span>
                      </div>
                      <p className="exp-organization">{exp.organization}</p>
                      <p className="exp-description">{exp.description}</p>
                      <div className="exp-skills">
                        <span className="skills-label">Technologies:</span>
                        <div className="skills-tags">
                          {exp.skills.map((skill, skillIndex) => (
                            <span key={skillIndex} className="skill-tag">{skill}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="soft-skills">
            <motion.h3 
              className="subsection-title"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Core Competencies
            </motion.h3>
            
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="achievement-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="cyber-card">
                    <div className="achievement-icon">
                      <FaAward />
                    </div>
                    <h4 className="achievement-title">{achievement.title}</h4>
                    <p className="achievement-description">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;