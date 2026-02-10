import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCalculator, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './ExpenseDemo.css';

const ExpenseDemo = ({ onClose }) => {
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
            <FaCalculator className="demo-icon" />
            <h2>Expense Calculator Web Application</h2>
          </div>
        </div>

        <div className="demo-content">
          <div className="demo-image-container">
            <img 
              src="/images/expense.png"
              alt="Expense Calculator Web Application Demo"
              className="demo-image"
            />
            <div className="image-overlay">
              <div className="overlay-text">
                <h3>Smart Financial Management</h3>
                <p>Track, Manage & Optimize Your Expenses</p>
              </div>
            </div>
          </div>

          <div className="demo-details">
            <div className="detail-section">
              <h3>💰 Financial Features</h3>
              <ul>
                <li>Real-time income and expense tracking</li>
                <li>Dynamic balance calculation and updates</li>
                <li>Interactive add, edit, and delete functionality</li>
                <li>Personal budget insights and analytics</li>
                <li>Responsive design for all devices</li>
              </ul>
            </div>

            <div className="detail-section">
              <h3>⚡ Technical Implementation</h3>
              <ul>
                <li>Built with React.js for dynamic user interface</li>
                <li>Efficient state management for real-time updates</li>
                <li>Modern JavaScript ES6+ features</li>
                <li>Responsive CSS design with mobile-first approach</li>
                <li>Create React App for optimized development</li>
              </ul>
            </div>

            <div className="detail-section">
              <h3>🎯 Key Capabilities</h3>
              <ul>
                <li>Add new income and expense entries</li>
                <li>Edit existing financial records</li>
                <li>Delete unwanted transactions</li>
                <li>View real-time balance updates</li>
                <li>Mobile-responsive interface</li>
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

export default ExpenseDemo;