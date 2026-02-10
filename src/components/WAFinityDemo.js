import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaShieldAlt, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './WAFinityDemo.css';

const WAFinityDemo = ({ onClose }) => {
  return (
    <motion.div 
      className="demo-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="demo-container"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="demo-header">
          <button className="close-btn" onClick={onClose}>
            <FaArrowLeft />
            <span>Back to Portfolio</span>
          </button>
          <div className="demo-title">
            <FaShieldAlt className="demo-icon" />
            <h2>WAFinity - Intelligent Web Application Firewall</h2>
          </div>
        </div>

        <div className="demo-content">
          <div className="demo-image-container">
            <img 
              src={`${process.env.PUBLIC_URL}/images/swafinity-demo.png`}
              alt="WAFinity - Intelligent Web Application Firewall Demo"
              className="demo-image"
            />
            <div className="image-overlay">
              <div className="overlay-text">
                <h3>Infinite Protection, Intelligent Detection</h3>
                <p>Stop Unknown Attacks Before They Strike</p>
              </div>
            </div>
          </div>

          <div className="demo-details">
            <div className="detail-section">
              <h3>🛡️ Advanced Security Features</h3>
              <ul>
                <li>AI-powered threat detection with 99%+ accuracy</li>
                <li>Real-time behavioral pattern analysis</li>
                <li>Machine learning-based anomaly detection</li>
                <li>Interactive security dashboard with live alerts</li>
                <li>Low latency protection for high-traffic applications</li>
              </ul>
            </div>

            <div className="detail-section">
              <h3>⚡ Technical Implementation</h3>
              <ul>
                <li>Built with Python Flask for robust backend processing</li>
                <li>Machine Learning models for intelligent threat classification</li>
                <li>Real-time data processing and threat blocking</li>
                <li>Responsive web interface with HTML, CSS, JavaScript</li>
                <li>Scalable architecture for enterprise deployment</li>
              </ul>
            </div>

            <div className="detail-section">
              <h3>🎯 Protection Against</h3>
              <ul>
                <li>SQL Injection attacks</li>
                <li>Cross-Site Scripting (XSS)</li>
                <li>Malicious HTTP requests</li>
                <li>Zero-day exploits</li>
                <li>Advanced persistent threats</li>
              </ul>
            </div>

            <div className="demo-actions">
              <motion.a
                href="https://github.com/Gufran47"
                target="_blank"
                rel="noopener noreferrer"
                className="demo-btn github-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub />
                <span>View Source Code</span>
              </motion.a>
              <motion.button
                className="demo-btn live-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => alert('Live demo coming soon!')}
              >
                <FaExternalLinkAlt />
                <span>Live Demo</span>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WAFinityDemo;