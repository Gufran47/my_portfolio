import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaShieldAlt, FaUser } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              <span className="glitch cyber-glow">GUFRAN AHMAD</span>
            </h1>
            <h2 className="hero-subtitle">
              Cybersecurity Developer & <span className="highlight">Security Researcher</span>
            </h2>
            <p className="hero-description">
              Specialized in building secure web applications and intelligent firewall systems. 
              Passionate about protecting digital assets through innovative security solutions.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <FaShieldAlt className="stat-icon" />
                <span className="stat-number">5+</span>
                <span className="stat-label">Security Projects</span>
              </div>
              <div className="stat">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Technologies</span>
              </div>
            </div>
            <div className="hero-buttons">
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </motion.button>
              <motion.button
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="profile-container">
              <div className="profile-ring"></div>
              <div className="profile-image-wrapper">
                {!imageError ? (
                  <img 
                    src="/images/profile.jpg" 
                    alt="Gufran Ahmad - Cybersecurity Developer" 
                    className="profile-image"
                    onError={handleImageError}
                  />
                ) : (
                  <div className="profile-fallback">
                    <FaUser className="profile-icon" />
                  </div>
                )}
              </div>
              <div className="scanning-line"></div>
            </div>
          </motion.div>
        </div>
        <div className="social-links">
          <motion.a
            href="https://github.com/Gufran47"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.3 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/gufran22"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.3 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="mailto:gufranahmasd47@gmail.com"
            className="social-link"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.3 }}
          >
            <FaEnvelope />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;