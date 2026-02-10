import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaJava, 
  FaPython, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaLinux, 
  FaDatabase,
  FaShieldAlt,
  FaServer
} from 'react-icons/fa';
import { 
  SiCplusplus, 
  SiMysql, 
  SiMongodb, 
  SiExpress, 
  SiFlask,
  SiTensorflow,
  SiKubernetes,
  SiDocker
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FaJava />,
      skills: [
        { name: "Java", icon: <FaJava />, level: 90 },
        { name: "C++", icon: <SiCplusplus />, level: 85 },
        { name: "Python", icon: <FaPython />, level: 88 },
        { name: "JavaScript", icon: <FaJs />, level: 85 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: <FaReact />,
      skills: [
        { name: "React.js", icon: <FaReact />, level: 85 },
        { name: "Node.js", icon: <FaNodeJs />, level: 80 },
        { name: "Express.js", icon: <SiExpress />, level: 80 },
        { name: "Flask", icon: <SiFlask />, level: 75 },
        { name: "TensorFlow", icon: <SiTensorflow />, level: 70 }
      ]
    },
    {
      title: "Databases & Tools",
      icon: <FaDatabase />,
      skills: [
        { name: "MySQL", icon: <SiMysql />, level: 85 },
        { name: "MongoDB", icon: <SiMongodb />, level: 80 },
        { name: "Git/GitHub", icon: <FaGitAlt />, level: 90 },
        { name: "Linux", icon: <FaLinux />, level: 85 }
      ]
    },
    {
      title: "Security & DevOps",
      icon: <FaShieldAlt />,
      skills: [
        { name: "Cybersecurity", icon: <FaShieldAlt />, level: 88 },
        { name: "Firewall Systems", icon: <FaServer />, level: 85 },
        { name: "Docker", icon: <SiDocker />, level: 75 },
        { name: "Kubernetes", icon: <SiKubernetes />, level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Technical Arsenal
        </motion.h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="cyber-card">
                <div className="card-header">
                  <div className="category-icon">{category.icon}</div>
                  <h3>{category.title}</h3>
                </div>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="skill-item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      viewport={{ once: true }}
                    >
                      <div className="skill-info">
                        <div className="skill-name">
                          <span className="skill-icon">{skill.icon}</span>
                          <span>{skill.name}</span>
                        </div>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.2 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
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

export default Skills;