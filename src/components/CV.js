import React from 'react';
import { motion } from 'framer-motion';
import { FaFileAlt, FaDownload, FaEye, FaUser } from 'react-icons/fa';
import './CV.css';

const CV = () => {
  const handleViewCV = () => {
    window.open('/images/Updated CV.pdf', '_blank');
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/images/Updated CV.pdf';
    link.download = 'Gufran_Ahmad_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="cv" className="section cv">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Curriculum Vitae
        </motion.h2>
        
        <div className="cv-content">
          <motion.div 
            className="cv-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="cyber-card">
              <div className="cv-header">
                <div className="cv-icon-container">
                  <FaFileAlt className="cv-icon" />
                  <div className="icon-glow"></div>
                </div>
                <div className="cv-info">
                  <h3>Professional Resume</h3>
                  <p>Complete overview of my skills, experience, and achievements</p>
                </div>
              </div>

              <div className="cv-preview">
                <div className="preview-container">
                  <FaUser className="preview-icon" />
                  <div className="preview-text">
                    <h4>Gufran Ahmad</h4>
                    <p>Cybersecurity Developer</p>
                    <span className="file-info">Updated CV.pdf • Latest Version</span>
                  </div>
                </div>
              </div>

              <div className="cv-details">
                <div className="detail-item">
                  <span className="detail-label">Format:</span>
                  <span className="detail-value">PDF Document</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Size:</span>
                  <span className="detail-value">Professional Layout</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Content:</span>
                  <span className="detail-value">Skills, Projects, Education</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Status:</span>
                  <span className="detail-value status-updated">Recently Updated</span>
                </div>
              </div>

              <div className="cv-actions">
                <motion.button
                  onClick={handleViewCV}
                  className="cv-btn view-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaEye />
                  <span>View CV</span>
                </motion.button>
                <motion.button
                  onClick={handleDownloadCV}
                  className="cv-btn download-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaDownload />
                  <span>Download CV</span>
                </motion.button>
              </div>

              <div className="cv-highlights">
                <h4>CV Highlights</h4>
                <ul>
                  <li>Cybersecurity expertise and project portfolio</li>
                  <li>Technical skills in multiple programming languages</li>
                  <li>Educational background and certifications</li>
                  <li>Professional training and achievements</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CV;