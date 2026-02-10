import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaCode, FaShieldAlt, FaExternalLinkAlt } from 'react-icons/fa';
import './About.css';

const About = () => {
  const education = [
    {
      institution: "Lovely Professional University",
      degree: "Bachelor of Technology - Computer Science and Engineering",
      cgpa: "6.13",
      location: "Punjab, India",
      period: "Aug 2021 - Present"
    },
    {
      institution: "R B T Vidyalaya",
      degree: "Intermediate",
      cgpa: "6.8",
      location: "Deoria, UP",
      period: "March 2021 - Jul 2022"
    }
  ];

  const certifications = [
    { 
      name: "DSA using Java Programming", 
      date: "July 2025",
      link: "https://drive.google.com/file/d/1XHRgXsidacGtIz4DCRoTwU2DuV28IfgU/view" // Replace with actual certificate link
    },
    { 
      name: "Responsive Web Design", 
      date: "Dec 2025",
      link: "https://drive.google.com/file/d/1ByhoGwKs8e9qZNz_zIRHKJH0WIPCR0-P/view" // Replace with actual certificate link
    },
    { 
      name: "Java Programming", 
      date: "May 2025",
      link: "https://drive.google.com/file/d/1jTdICNerMahBsvLS0MmszldEP5t4aTbW/view" // Replace with actual certificate link
    },
    { 
      name: "The Bits and Bytes of Computer Networking", 
      date: "Sep 2025",
      link: "https://drive.google.com/file/d/1-H__QP3oUA1iP8kv_DWuh3HCVUrqNO41/view" // Replace with actual certificate link
    },
    { 
      name: "Packet Switching Networks and Algorithm", 
      date: "Nov 2024",
      link: "https://drive.google.com/file/d/1-H__QP3oUA1iP8kv_DWuh3HCVUrqNO41/view" // Replace with actual certificate link
    }
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="cyber-card">
              <div className="card-header">
                <FaCode className="card-icon" />
                <h3>Cybersecurity Developer</h3>
              </div>
              <p>
                I'm a passionate cybersecurity developer with expertise in building secure web applications 
                and intelligent security systems. My focus is on creating robust solutions that protect 
                digital assets from evolving cyber threats.
              </p>
              <p>
                With experience in developing advanced firewall systems using machine learning and 
                real-time threat detection, I combine traditional security practices with cutting-edge 
                technology to deliver comprehensive protection.
              </p>
              <div className="specializations">
                <div className="spec-item">
                  <FaShieldAlt className="spec-icon" />
                  <span>Web Application Security</span>
                </div>
                <div className="spec-item">
                  <FaShieldAlt className="spec-icon" />
                  <span>Firewall Development</span>
                </div>
                <div className="spec-item">
                  <FaShieldAlt className="spec-icon" />
                  <span>Machine Learning Security</span>
                </div>
                <div className="spec-item">
                  <FaShieldAlt className="spec-icon" />
                  <span>Threat Detection</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="about-details">
            <motion.div 
              className="education-section"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="cyber-card">
                <div className="card-header">
                  <FaGraduationCap className="card-icon" />
                  <h3>Education</h3>
                </div>
                {education.map((edu, index) => (
                  <div key={index} className="education-item">
                    <h4>{edu.institution}</h4>
                    <p className="degree">{edu.degree}</p>
                    <div className="edu-details">
                      <span className="cgpa">CGPA: {edu.cgpa}</span>
                      <span className="location">{edu.location}</span>
                      <span className="period">{edu.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="certifications-section"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="cyber-card">
                <div className="card-header">
                  <FaCertificate className="card-icon" />
                  <h3>Certifications</h3>
                </div>
                <div className="certifications-list">
                  {certifications.map((cert, index) => (
                    <motion.a
                      key={index}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-item"
                      whileHover={{ x: 5, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="cert-content">
                        <span className="cert-name">{cert.name}</span>
                        <span className="cert-date">{cert.date}</span>
                      </div>
                      <FaExternalLinkAlt className="cert-link-icon" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;