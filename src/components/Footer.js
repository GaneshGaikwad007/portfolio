import React from 'react';
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Ganesh Kisan Gaikwad</h3>
            <p>Electrical Engineering Professional | Innovator | Problem Solver</p>
            <div className="social-links">
              <a href="https://linkedin.com/in/ganesh-gaikwad" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <FiLinkedin />
              </a>
              <a href="https://github.com/GaneshGaikwad007" target="_blank" rel="noopener noreferrer" title="GitHub">
                <FiGithub />
              </a>
              <a href="mailto:gaikwadganeshkisan@gmail.com" title="Email">
                <FiMail />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:gaikwadganeshkisan@gmail.com">Email</a></li>
              <li><a href="tel:+917756883783">Phone: +91 7756883783</a></li>
              <li>Suregaon, Maharashtra, India</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Ganesh Kisan Gaikwad. All rights reserved.</p>
          <p>Crafted with passion and precision</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
